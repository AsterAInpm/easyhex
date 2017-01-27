let fs = require('fs');
let Buffer = require('buffer').Buffer;

const BYTES_PER_ROW = 32;


function leftColumnPart(value) {
    let pattern = '      '; //six spaces
    let hexValue = value.toString(16);

    return pattern.slice(hexValue.length) + hexValue + ' | ';
}

function printData(data) {
    let rows =  parseInt(data.length / BYTES_PER_ROW) + ((data.length % BYTES_PER_ROW) > 0 ? 1 : 0);
    let byteIndex = 0;
    for (let row = 0; row < rows; ++row) {
        let rowString = '';
        for (let ch = 0; ch < BYTES_PER_ROW && byteIndex < data.length; ++ch, ++byteIndex) {
            let hexChar = data[byteIndex].toString(16);
            if (hexChar.length == 1) {
                hexChar = '0' + hexChar;
            }
            rowString += (hexChar + ' ');
        }
        console.log(leftColumnPart(byteIndex) + rowString);
    }
}


function processFile(fileName) {
    let data = fs.readFileSync(fileName);
    printData(data);
}

module.exports = {
    processFile
};