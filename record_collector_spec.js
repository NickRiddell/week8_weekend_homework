var Record = require('./record');
var RecordCollector = require('./record_collector');
var chai = require('chai');
var assert = chai.assert;

describe('record_collector', function(){
  it('has a name, description and collection', function(){
    var record1 = new Record('The Beatles', 'Sgt Peppers Lonely Hearts Club Band', 10);
    var record9 = new Record('Led Zeppelin', 'Led Zeppelin', 10);
    var record10 = new Record('Guns N Roses', 'Appetite for Destruction', 10);
    var record11 = new Record('AC/DC', 'Back in Black', 8);
    var record12 = new Record('Pink Floyd', 'Dark Side of the Moon', 9);
    var collector1 = new RecordCollector('Sweaty Bob', 'Sweaty and nervous');
    collector1.buildCollection(record1);
    collector1.buildCollection(record10);
    collector1.buildCollection(record11);
    collector1.buildCollection(record12);
    assert.equal('Sweaty Bob', collector1.name);
    assert.equal('Sweaty and nervous', collector1.description);
    assert.isAbove(collector1.collection.length, 0);
  });
});