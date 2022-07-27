const { writeFile } = require('fs');
writeFile('./data/app1.log',
    '163.3.217.18 - - [21/09/2019:10:07:21 -0500] "GET /dot-com" 405 21512',
    // r: read mode
    // w: write mode
    // a: append mode
    // x: exclusive
    // +: multiple modes
    // s: synchronous 
    { flag: 'wx' },
    (err) => {
        err ? console.log(err) : console.log('file saved!');
    });