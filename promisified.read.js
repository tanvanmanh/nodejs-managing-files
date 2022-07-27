const { convertCsv } = require('./csv.parse');
const fs = require('fs');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);
// readFile("./data/pulitzer-circulation-data.csv", "utf8")
//     .then(data => console.table(convertCsv(data)))
//     .catch(error => console.log(`Error with file: ${error}`));

const read = async () => {
    const data = await readFile("./data/pulitzer-circulation-data.csv", "utf8");
    console.table(convertCsv(data));
}

read();
