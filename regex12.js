const helper = require('./helper');

// some special character will be no longer to be special inside square brackets
console.log(helper('regex12.txt', /x[:#.]y/));
