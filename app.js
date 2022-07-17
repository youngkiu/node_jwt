import {
  generateAccessToken,
  generateRefreshToken,
  verifyToken,
} from './token.js';
import {
  setCache,
  getCache,
} from './redis_client.js';

const userId = 1;
const payload = {
  id: userId,
  role: 'admin',
};
const EXPIRATION_TIME_SEC = 2;

async function main() {
  const accessToken = generateAccessToken(payload);
  const refreshToken = generateRefreshToken();
  console.log({ accessToken, refreshToken });

  const key = userId.toString();
  setCache(key, refreshToken, EXPIRATION_TIME_SEC);

  const decodedAccessToken = verifyToken(accessToken);
  const decodedRefreshToken = verifyToken(refreshToken);
  console.log({ decodedAccessToken, decodedRefreshToken });

  const value = await getCache(key);
  console.log(value);

  await ((time) => new Promise((resolve) => {
    setTimeout(resolve, time);
  }))(EXPIRATION_TIME_SEC * 1000);

  const expiredValue = await getCache(key);
  console.log(expiredValue);
}

main();
