module.exports = {
  port: 3000,
  databaseUrl: 'mongodb://localhost:27017/test',
  defaultUserPhotoUrl: 'https://www.placecage.com/c/200/300',
  crypto: {
    hash: {
      length: 100,
      iterations: 10000,
    },
  },
  jwtSecret: 'sup3rs3cr3t123!^&*(',
};
