# node_jwt

jwt module to use in node.js server

### How to run
1. Create an .env file containing `SECRET=YoUrSeCrEtKeY`.
2. Run `$ docker-compose up`.

### Log
```text
node-jwt-redis  | 1:M 17 Jul 2022 12:29:36.289 * Ready to accept connections
node-jwt-app    | {
node-jwt-app    |   accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjU4MDYwOTc2LCJleHAiOjE2NTgwNjQ1NzYsImlzcyI6Imh0dHBzOi8vZ2l0aHViLmNvbS95b3VuZ2tpdS9ub2RlX2p3dCJ9.ggZz1LH2ngupIJYBcvp-4W18pV9Yb6kwZZTzkV14PEA',
node-jwt-app    |   refreshToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTgwNjA5NzYsImV4cCI6MTY2MDY1Mjk3NiwiaXNzIjoiaHR0cHM6Ly9naXRodWIuY29tL3lvdW5na2l1L25vZGVfand0In0.ZAkBdgSS1W6iC9YHY4Q9KrvyBNWuJEGoTtewfACmmDM'
node-jwt-app    | }
node-jwt-app    | {
node-jwt-app    |   decodedAccessToken: {
node-jwt-app    |     ok: true,
node-jwt-app    |     id: 1,
node-jwt-app    |     role: 'admin',
node-jwt-app    |     iat: 1658060976,
node-jwt-app    |     exp: 1658064576,
node-jwt-app    |     iss: 'https://github.com/youngkiu/node_jwt'
node-jwt-app    |   },
node-jwt-app    |   decodedRefreshToken: {
node-jwt-app    |     ok: true,
node-jwt-app    |     iat: 1658060976,
node-jwt-app    |     exp: 1660652976,
node-jwt-app    |     iss: 'https://github.com/youngkiu/node_jwt'
node-jwt-app    |   }
node-jwt-app    | }
node-jwt-app    | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTgwNjA5NzYsImV4cCI6MTY2MDY1Mjk3NiwiaXNzIjoiaHR0cHM6Ly9naXRodWIuY29tL3lvdW5na2l1L25vZGVfand0In0.ZAkBdgSS1W6iC9YHY4Q9KrvyBNWuJEGoTtewfACmmDM
node-jwt-app    | null
```

### How to run a standalone redis server using docker
```shell
$ docker run --name my-redis -p 6379:6379 --rm redis:7 redis-server
$ docker exec -it my-redis redis-cli
```

### Reference
- https://bit.ly/3Pf6SqN
- https://bit.ly/3IHXCJc
- https://bit.ly/3aQD5Wh

``````