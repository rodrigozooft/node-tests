const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('server', () =>{
  describe('#GET', ()=> {
    describe('#HelloWorld', () => {
      it('should return Hello World! response', (done) => {
        request(app)
          .get('/')
          .expect(200)
          .end(done);
      });
    });
  });
  
  describe('#GET', () => {
    describe('#Users', () =>{
      it('should return an array of objects and me as user', (done) => {
        request(app)
          .get('/users')
          .expect(200)
          .expect((res) => {
            expect(res.body).toEqual(
              expect.arrayContaining([
                expect.objectContaining({
                  name: 'Rodrigo',
                  lastName: 'Morgado',
                  email: 'rodrigo@zooft.company'
                })
              ])
            )
          })
          .end(done)
      });
    });
  });
});