/************hash散列值**************/
var fnv = require('fnv-plus')
//16进制64位hash散列值
console.log(fnv.hash('rebic', 64).hex())
