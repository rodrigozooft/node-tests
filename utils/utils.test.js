const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {
  describe('#add', () => {
    it('Should add two numbers', () => {
      var res = utils.add(33, 11);
    
      expect(res).toBe(44);
      expect(typeof res).toBe('number');
    });
  
    it('should async add two numbers', (done) => {
      utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7);
        expect(typeof sum).toBe('number');
        done();
      });
    });
  });

  describe('#square', () =>{
    it('Should square the number', () => {
      var res = utils.square(2);
    
      expect(res).toBe(4);
      expect(typeof res).toBe('number');
    }); 
  
    it('should async square one number', (done) => {
      utils.asyncSquare(9, (square)=>{
        expect(square).toBe(81);
        expect(typeof square).toBe('number');
        done();
      });
    });
  });

});

it('should expect some values', () => {
  expect({name: 'Rodrigo'}).toEqual({name: 'Rodrigo'});
  expect([1,2,3,4,5]).toContain(5);
  expect([1,2,3,4,5]).not.toContain(6);
});

it('should verify first and last names are set', () => {
  var userTest = {}
  res = utils.setName(userTest, 'Rodrigo Morgado');
  expect(typeof res).toBe('object');
  expect(res).toEqual(userTest);
});