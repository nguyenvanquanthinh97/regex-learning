const helper = require('./helper');

// This will be more effective than in regex06.js
// We will use ^-caret character to represent for neither
console.log(helper('regex07.txt', /[^mh]oo/));
