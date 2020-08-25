const helper = require('./helper');

// Same as regex25.js
console.log(helper('regex28.txt', /[0-9]{3}.[0-9]{3}.([0-9]+)/, 'xxx.xxx.$1'));
