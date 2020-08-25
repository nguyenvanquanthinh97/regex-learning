const helper = require('./helper');

// ^ is a special character inside square brackets so it need an '\' escape
console.log(helper('regex13.txt', /x[#:\^]y/));
