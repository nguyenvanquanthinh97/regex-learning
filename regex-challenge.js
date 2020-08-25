const helper = require('./helper');

console.log(helper('regex-challenge.txt', /^[a-zA-Z0-9.\-_]{3,}@[a-z]{3,}\.[a-z]{2,}$/));
