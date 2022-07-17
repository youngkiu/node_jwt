import redis from 'redis';

const { REDIS_URL } = process.env;

const client = redis.createClient({
  url: REDIS_URL || 'redis://127.0.0.1:6379',
});

(async () => client.connect())();

export async function setCache(key, value, ex) {
  if (ex) {
    await client.set(key, value, { EX: ex });
  } else {
    await client.set(key, value);
  }
}

export async function getCache(key) {
  return client.get(key);
}
