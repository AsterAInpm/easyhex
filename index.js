#!/usr/bin/env node

var processFile = require('./hexdumper').processFile;

let sourceFile = '';
if (process.argv.length < 3) {
    console.log("Error. Please pass the file name to HEX. \n Example hex ./log.data")
} else {
    sourceFile = process.argv[2];
}

processFile(sourceFile);
