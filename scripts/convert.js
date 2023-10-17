"use strict";
const fs = require("fs");
const { convertExcelToText } = require("./utils");
const { outputFile } = require("../config.js");

// create text

const text = convertExcelToText();

// write file

fs.writeFileSync(outputFile, text, "utf-8");
