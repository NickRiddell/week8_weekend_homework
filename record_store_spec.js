var Record = require('./record');
var RecordStore = require('./record_store');
var chai = require('chai');
var assert = chai.assert;

describe('record_store', function(){
  it('should be able to add records to its inventory', function(){
    var store1 = new RecordStore();
    var record1 = new Record('The Beatles', 'Sgt Peppers Lonely Hearts Club Band', 10);
    store1.addRecord(record1);
    assert.isAbove(store1.inventory.length, 0);
  });

  it("have multiple records in it's inventory", function(){
    var store1 = new RecordStore();
    var record1 = new Record('The Beatles', 'Sgt Peppers Lonely Hearts Club Band', 10);
    var record2 = new Record('The Beach Boys', 'Pet Sounds', 10);
    store1.addRecord(record1);
    store1.addRecord(record2);
    assert.isAbove(store1.inventory.length, 1);
  });

  it("has a register balance", function(){
    var store1 = new RecordStore();
    store1.addNewBalance(500);
    assert.isAbove(store1.registerBalance.length, 0);
  });

  it("has a balance of 1000", function(){
    var store1 = new RecordStore();
    store1.addNewBalance(1000);
    assert.equal(1000, store1.registerBalance);
  });

  it("has an inventory list", function(){
    var store1 = new RecordStore();
    var record1 = new Record('The Beatles', 'Sgt Peppers Lonely Hearts Club Band', 10);
    var record2 = new Record('The Beach Boys', 'Pet Sounds', 10);
    store1.addRecord(record1);
    store1.addRecord(record2);
    store1.listInventory(store1.inventory, store1.displayElement);
    assert.isAbove(store1.inventory.length, 0);
  });

  it("can list record titles", function(){
    var store1 = new RecordStore();
    var record1 = new Record('The Beatles', 'Sgt Peppers Lonely Hearts Club Band', 10);
    var record2 = new Record('The Beach Boys', 'Pet Sounds', 10);
    store1.addRecord(record1);
    store1.addRecord(record2);
    store1.listRecordTitles(store1.inventory, store1.displayElement);
    assert.isAbove(store1.inventory.length, 0);
  });

  it("can list record artists", function(){
    var store1 = new RecordStore();
    var record1 = new Record('The Beatles', 'Sgt Peppers Lonely Hearts Club Band', 10);
    var record2 = new Record('The Beach Boys', 'Pet Sounds', 10);
    store1.addRecord(record1);
    store1.addRecord(record2);
    store1.listRecordTitleAndArtist(store1.inventory, store1.displayElement);
    assert.isAbove(store1.inventory.length, 0);
  });
});