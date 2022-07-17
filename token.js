import jwt from 'jsonwebtoken';

const { SECRET } = process.env;
const ACCESS_TOKEN_EXPIRES_IN = '1h';
const REFRESH_TOKEN_EXPIRES_IN = '30d';
const commonOptions = {
  algorithm: 'HS256',
  issuer: 'https://github.com/youngkiu/node_jwt',
};

export function generateAccessToken(payload) {
  return jwt.sign(payload, SECRET, { ...commonOptions, expiresIn: ACCESS_TOKEN_EXPIRES_IN });
}

export function generateRefreshToken() {
  return jwt.sign({}, SECRET, { ...commonOptions, expiresIn: REFRESH_TOKEN_EXPIRES_IN });
}

export function verifyToken(token) {
  const decodedResult = {};
  try {
    const decoded = jwt.verify(token, SECRET);
    Object.assign(decodedResult, { ok: true, ...decoded });
  } catch (err) {
    console.log(err);
    Object.assign(decodedResult, { ok: false, message: err.message });
  }
  return decodedResult;
}
