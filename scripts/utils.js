const excelToJson = require("./convert-excel-to-json");
const {
  sourceFile,
  keysAtColumn,
  groups: langs,
  sections,
} = require("../config.js");

function mapColumToKey(range, keysColumn) {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const start = range.charAt(0);
  const startIndex = alphabet.findIndex((l) => l === start);
  const end = String(range.split(":")[1]).charAt(0);
  const endIndex = alphabet.findIndex((l) => l === end) + 1;
  const letterRange = alphabet.slice(startIndex, endIndex);
  const columnToKey = {};

  for (let i = 0; i < letterRange.length; i++) {
    columnToKey[letterRange[i]] = `{{${keysColumn}}}`;
  }

  return columnToKey;
}

function convertSection({ name, screen, sheet, startFromCell, endAtCell }) {
  const range = `${startFromCell}:${endAtCell}`;
  const columnToKey = mapColumToKey(range, keysAtColumn);

  const result = excelToJson({
    sourceFile,
    columnToKey,
    range,
    sheets: [sheet],
    objectName: name,
    objectScreen: screen,
    groupsMap: langs,
  });

  return result;
}

function groupData(dataArray) {
  const resultArray = [];

  const flatData = dataArray.flatMap((item) => Object.values(item));
  const groups = flatData
    .map((item) => item._group)
    .filter((item, i, arr) => arr.indexOf(item) === i);

  for (let i = 0; i < langs.length; i++) {
    const lang = langs[i].toLowerCase();

    for (let j = 0; j < groups.length; j++) {
      const group = groups[j];
      const content = {};

      for (let k = 0; k < flatData.length; k++) {
        const item = flatData[k];

        if (item._group === group && item._lang === lang) {
          content[item._subgroup || item._group] = item._content;
        }
      }

      resultArray.push({
        _group: group,
        _lang: lang,
        _content: content,
      });
    }
  }

  return resultArray;
}

function mapSectionToTemplate(section) {
  const jsonContent = JSON.stringify(section._content, null, "\t").replace(
    /\${/g,
    "$${"
  );

  return `{
    language = "${section._lang}"
    prompt = "${section._group}"
    body = jsonencode(${jsonContent})
  },
  `;
}

function convertExcelToText() {
  const dataArray = sections.map(convertSection);
  const groupedData = groupData(dataArray);

  return groupedData.map(mapSectionToTemplate).join(" ");
}

module.exports = { convertExcelToText };
