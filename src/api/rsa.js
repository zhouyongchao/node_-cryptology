/************非对称加密***************/
var crypto = require('crypto')
var fs = require('fs')
var privatePem = fs.readFileSync('../pem/rsa_private_key.pem')
var publicPem = fs.readFileSync('../pem/rsa_public_key.pem')
var key = privatePem.toString()
var pubkey = publicPem.toString()
var data = "rebic"

//加密
var sign = crypto.createSign('RSA-SHA256')
sign.update(data)
var sig = sign.sign(key, 'hex')
console.log(sig)

//解密
var verify = crypto.createVerify('RSA-SHA256')
verify.update(data)
console.log(verify.verify(pubkey, sig, 'hex'))
