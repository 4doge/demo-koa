/* eslint-disable no-console */
const config = require('config');
const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const fixtures = require('pow-mongodb-fixtures').connect(config.get('databaseUrl'));

fixtures.load(path.join(__dirname, '/data.js'), (err) => {
  if (err) console.log(err);
  console.log('Success load fixtures!');
  fixtures.close((e) => {
    if (e) console.log(e);
    console.log('Closed connection');
  });
});
