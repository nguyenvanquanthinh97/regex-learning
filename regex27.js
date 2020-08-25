const helper = require('./helper');

// Same as regex25.js
console.log(helper('regex27.txt', /([0-9]{1,2}):([0-9]{1,2})/, '$2 mins past $1'));
