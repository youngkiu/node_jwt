# node_jwt

jwt module to use in node.js server

### Reference
- https://bit.ly/3Pf6SqN

### Execution Log
```angular2html
{
  accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjU4MDI2MTcwLCJleHAiOjE2NTgwMjk3NzAsImlzcyI6Imh0dHBzOi8vZ2l0aHViLmNvbS95b3VuZ2tpdS9ub2RlX2p3dCJ9.etB5hbXRBBbk3W9IZcxGvuIsFAmTzaMqnfVdcqhsL7s',
  refreshToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTgwMjYxNzAsImV4cCI6MTY2MDYxODE3MCwiaXNzIjoiaHR0cHM6Ly9naXRodWIuY29tL3lvdW5na2l1L25vZGVfand0In0.Jim98U2cBre3cAfbDxwd9MeDVe4w6lMbh2Xtcuaijyk'
}
{
  decodedAccessToken: {
    ok: true,
    id: 1,
    role: 'admin',
    iat: 1658026170,
    exp: 1658029770,
    iss: 'https://github.com/youngkiu/node_jwt'
  },
  decodedRefreshToken: {
    ok: true,
    iat: 1658026170,
    exp: 1660618170,
    iss: 'https://github.com/youngkiu/node_jwt'
  }
}
```