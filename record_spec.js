var Record = require('./record');
var chai = require('chai');
var assert = chai.assert;

describe('record', function(){
  it('should have an artist', function(){
    var record1 = new Record('The Beatles', 'Sgt Peppers Lonely Hearts Club Band', 10);
    assert.isString(record1.artist);
  });

  it('artist should be The Beatles', function(){
    var record1 = new Record('The Beatles', 'Sgt Peppers Lonely Hearts Club Band', 10);
    assert.equal('The Beatles', record1.artist);
  });

  it('should have a title', function(){
    var record1 = new Record('The Beatles', 'Sgt Peppers Lonely Hearts Club Band', 10);
    assert.isString(record1.title);
  });

  it('title should be Sgt Peppers Lonely Hearts Club Band', function(){
    var record1 = new Record('The Beatles', 'Sgt Peppers Lonely Hearts Club Band', 10);
    assert.equal('Sgt Peppers Lonely Hearts Club Band', record1.title);
  });

  it('should have a price', function(){
    var record1 = new Record('The Beatles', 'Sgt Peppers Lonely Hearts Club Band', 10);
    assert.isNumber(record1.price);
  });

  it('should have a price of 10', function(){
    var record1 = new Record('The Beatles', 'Sgt Peppers Lonely Hearts Club Band', 10);
    assert.equal(10, record1.price);
  });
});