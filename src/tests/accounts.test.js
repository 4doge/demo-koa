const chai = require('chai');
const chaiHttp = require('chai-http');
const fs = require('fs');
const app = require('../../app');

chai.should();
chai.use(chaiHttp);

let token = '';

describe('Accounts', () => {
  before((done) => {
    chai.request(app)
      .post('/api/accounts/sign-in')
      .send({
        email: 'antonboksha@gmail.com',
        password: 'testpass',
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('user').that.has.keys(['fullName', 'email', 'photo']);
        res.body.should.have.property('token');
        // eslint-disable-next-line prefer-destructuring
        token = res.body.token;
        done();
      });
  });

  it('Should login user and return his auth data', (done) => {
    chai.request(app)
      .post('/api/accounts/sign-in')
      .send({
        email: 'antonboksha@gmail.com',
        password: 'testpass',
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('user').that.has.keys(['fullName', 'email', 'photo']);
        res.body.should.have.property('token');
        done();
      });
  });
  it('Should update user photo and return new url', (done) => {
    chai.request(app)
      .put('/api/accounts/photo')
      .attach('photo', fs.readFileSync('cage.jpg'), 'cage.jpg')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('photo');
        done();
      });
  });
  it('Should return profile data', (done) => {
    chai.request(app)
      .get('/api/accounts/profile')
      .set('Authorization', `JWT ${token}`)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
