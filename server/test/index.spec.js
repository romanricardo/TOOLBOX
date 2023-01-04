import chai from 'chai';
import chaiHttp from 'chai-http';
import index from '../index.js'

let should = chai.should();


chai.use(chaiHttp);

describe('test that the server works', () => {

  it('it should return status code 200 and a array when the endpoint /files/data invoked', (done) => {
    chai.request(index)
      .get('/files/data')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });


  it('it should return status code 200 and a array when the endpoint /files/data?filename=test2.csv invoked', (done) => {
    chai.request(index)
      .get('/files/data?filename=test2.csv')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });

  it('it should return status code 200 and a array when the endpoint /files/list invoked', (done) => {
    chai.request(index)
      .get('/files/list')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });

});

