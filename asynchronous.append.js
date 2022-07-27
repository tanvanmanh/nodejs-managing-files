const { appendFile } = require('fs');

appendFile('./data/app1.log',
    '163.3.217.18 - - [21/09/2019:10:07:21 -0500] "GET /dot-com" 405 21512 \n',
    (err) => {
        err ? console.log(err) : console.log('file saved!');
    });