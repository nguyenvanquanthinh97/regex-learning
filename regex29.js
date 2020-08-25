const helper = require('./helper');

// Split into many part and capture the part needed
console.log(helper('regex29.txt', /([a-zA-Z]{3})\s([0-9]{1,2})[a-z]{2}\s[0-9]{2}([0-9]{2})/, '$2-$1-$3'));
