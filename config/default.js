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
  sendGrid: {
    apiKey: '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',
  },
  aws: {
    accessKeyId: 'AKIAXJRISSSCNTLKNSPH',
    secretAccessKey: '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',
    bucketName: 'myfixer-bucket',
    userPhotoFolder: 'user-photos',
  },
};
