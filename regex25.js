const helper = require('./helper');

// Find and replace mode
// With ()-parenthesis as a group capture
console.log(helper('regex25.txt', /([0-9]+)x([0-9]+)/, '$1 pix by $2 pix'));
