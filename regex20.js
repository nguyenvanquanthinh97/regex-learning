const helper = require('./helper');

// use ('ha'){4,} to treat whole 'ha' as a single entry and {4,} to represent the min times of repetitive is 4
console.log(helper('regex20.txt', /^(ha){4,}$/));
