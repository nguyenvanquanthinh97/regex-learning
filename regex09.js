const helper = require('./helper');

// we use range regex union with another character
console.log(helper('regex09.txt', /[j-mz]oo/));
