"use strict";
const fs = require("fs");
const { convertSection, groupData, mapSectionToTemplate } = require("./utils");
const { outputFile, sections } = require("../config.js");

// create text

const sectionsData = sections.map(convertSection);
const sectionsDataGrouped = groupData(sectionsData);
const textOutput = sectionsDataGrouped.map(mapSectionToTemplate).join(" ");

// write file

fs.writeFileSync(outputFile, textOutput, "utf-8");
