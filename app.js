import {
  generateAccessToken,
  generateRefreshToken,
  verifyToken,
} from './token.js';

const payload = {
  id: 1,
  role: 'admin',
};

const accessToken = generateAccessToken(payload);
const refreshToken = generateRefreshToken();
console.log({ accessToken, refreshToken });

const decodedAccessToken = verifyToken(accessToken);
const decodedRefreshToken = verifyToken(refreshToken);
console.log({ decodedAccessToken, decodedRefreshToken });
