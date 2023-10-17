const _ = require("lodash");
const { groups: langs } = require("../config.js");

function columToKeyMapper(range, keysColumn) {
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

function groupData(dataArray) {
  const resultArray = [];

  const flatData = dataArray.flatMap((item) => Object.values(item));
  const groups = _.uniq(flatData.map((item) => item._group));

  for (let i = 0; i < langs.length; i++) {
    const lang = langs[i].toLowerCase();

    for (let j = 0; j < groups.length; j++) {
      const group = groups[j];
      const content = {};
      const subgroups = flatData.filter(
        (item) => item._group === group && item._lang === lang
      );

      subgroups.forEach((item) => {
        content[item._subgroup || item._group] = item._content;
      });

      resultArray.push({
        _group: group,
        _lang: lang,
        _content: content,
      });
    }
  }

  return resultArray;
}

function mapSectionTemplate(section) {
  const jsonContent = JSON.stringify(section._content, null, "\t").replace(
    /\${/g,
    "$${"
  );

  return `{
    language = "${section._lang}",
    prompt = "${section._group}",
    body = jsonencode(${jsonContent}),
  },
  `;
}

function convertArrayToText(dataArray) {
  const resultArray = [];
  const groupedData = groupData(dataArray);

  groupedData.forEach((section) => {
    resultArray.push(mapSectionTemplate(section));
  });

  return resultArray.join(" ");
}

module.exports = { columToKeyMapper, convertArrayToText };
