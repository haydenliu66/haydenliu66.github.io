import Cookies from 'js-cookie'

const TokenKey = 'www_token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

// const crypto = require('crypto')
// const defaultKey = 'haydenliu66'
// /**
//  *
//  *
//  * AES加密
//  * @param {*} data
//  * @param {*} [key=defaultKey]
//  * @returns
//  */
// export function aesEncrypt(data, key = defaultKey) {
//   const cipher = crypto.createCipher('aes192', key)
//   var crypted = cipher.update(data, 'utf8', 'hex')
//   crypted += cipher.final('hex')
//   return crypted
// }
// /**
//  *
//  *
//  * AES解密
//  * @param {*} encrypted
//  * @param {*} [key=defaultKey]
//  * @returns
//  */
// export function aesDecrypt(encrypted, key = defaultKey) {
//   const decipher = crypto.createDecipher('aes192', key)
//   var decrypted = decipher.update(encrypted, 'hex', 'utf8')
//   decrypted += decipher.final('utf8')
//   return decrypted
// }
