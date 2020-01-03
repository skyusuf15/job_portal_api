const jwt = require('jsonwebtoken');
const SECRET_KEY = '342323424334324232132908678';
module.exports = {
 issuer(payload,expiresIn) {
  return jwt.sign(payload, SECRET_KEY, {
    expiresIn
  })
 },
 verify(token) {
    return jwt.verify(token, SECRET_KEY)
 }
}
