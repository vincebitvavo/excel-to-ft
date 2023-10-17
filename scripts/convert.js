"use strict";
const fs = require("fs");
const excelToJson = require("./convert-excel-to-json");
const { columToKeyMapper, convertArrayToText } = require("./utils");
const {
  sourceFile,
  outputFile,
  keysAtColumn,
  groups,
  sections,
} = require("../config.js");

function convertSection({ name, screen, sheet, startFromCell, endAtCell }) {
  const range = `${startFromCell}:${endAtCell}`;
  const columnToKey = columToKeyMapper(range, keysAtColumn);

  const result = excelToJson({
    sourceFile,
    columnToKey,
    range,
    sheets: [sheet],
    objectName: name,
    objectScreen: screen,
    groupsMap: groups,
  });

  return result;
}

// create json

const dataArray = sections.map((section) => convertSection(section));
const result = convertArrayToText(dataArray);

// write file

fs.writeFileSync(outputFile, result, "utf-8");
