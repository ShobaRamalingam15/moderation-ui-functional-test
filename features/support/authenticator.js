import { authenticator } from 'otplib';
const crypto = require('crypto');
authenticator.options = { crypto };
const get2faCode = (secret) => authenticator.generate(secret);
console.log(get2faCode(123456));