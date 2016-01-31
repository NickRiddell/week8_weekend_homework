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
    console.log(inventoryList);
    assert.isAbove(inventoryList.length, 0);
  });

  it("can list record titles", function(){
    var store1 = new RecordStore();
    var record1 = new Record('The Beatles', 'Sgt Peppers Lonely Hearts Club Band', 10);
    var record2 = new Record('The Beach Boys', 'Pet Sounds', 10);
    store1.addRecord(record1);
    store1.addRecord(record2);
    store1.listRecordTitles(store1.inventory, store1.displayElement);
    console.log(titleList);
    assert.isAbove(titleList.length, 0);
  });

  it("can list record artists", function(){
    var store1 = new RecordStore();
    var record1 = new Record('The Beatles', 'Sgt Peppers Lonely Hearts Club Band', 10);
    var record2 = new Record('The Beach Boys', 'Pet Sounds', 10);
    store1.addRecord(record1);
    store1.addRecord(record2);
    store1.listRecordTitleAndArtist(store1.inventory, store1.displayElement);
    console.log(titleArtistList);
    assert.isAbove(titleArtistList.length, 0);
  });

  it("can sell a record", function(){
    var store1 = new RecordStore();
    var record1 = new Record('The Beatles', 'Sgt Peppers Lonely Hearts Club Band', 10);
    var record2 = new Record('The Beach Boys', 'Pet Sounds', 10);
    store1.addNewBalance(500);
    store1.addRecord(record1);
    store1.addRecord(record2);
    store1.listRecordTitleAndArtist(store1.inventory, store1.displayElement);
    console.log(store1.inventory);
    console.log(store1.registerBalance);
    store1.sellRecord(record1);
    store1.listRecordTitleAndArtist(store1.inventory, store1.displayElement);
    console.log(store1.inventory);
    console.log(store1.registerBalance);
    console.log(store1.registerBalanceHistory);
    assert.notInclude(store1.inventory, record1);
    assert.equal(510, store1.registerBalance);
  });

  it("can issue a financial report", function(){
    var store1 = new RecordStore();
    var record1 = new Record('The Beatles', 'Sgt Peppers Lonely Hearts Club Band', 10);
    var record2 = new Record('The Beach Boys', 'Pet Sounds', 10);
    var record3 = new Record('The Beatles', 'Revolver', 10);
    var record4 = new Record('Bob Dylan', 'Highway 61 Revisited', 10);
    var record5 = new Record('The Clash', 'London Calling', 10);
    var record6 = new Record('The Jimi Hendrix Experience', 'Are You Experienced?', 10);
    var record7 = new Record('Nirvana', 'Nevermind', 10);
    var record8 = new Record('Michael Jackson ', 'Thriller', 10);
    var record9 = new Record('Led Zeppelin', 'Led Zeppelin', 10);
    var record10 = new Record('Guns N Roses', 'Appetite for Destruction', 10);
    var record11 = new Record('AC/DC', 'Back in Black', 8);
    var record12 = new Record('Pink Floyd', 'Dark Side of the Moon', 9);
    store1.addNewBalance(500);
    store1.addRecord(record1);
    store1.addRecord(record2);
    store1.addRecord(record3);
    store1.addRecord(record4);
    store1.addRecord(record5);
    store1.addRecord(record6);
    store1.addRecord(record7);
    store1.addRecord(record8);
    store1.addRecord(record9);
    store1.addRecord(record10);
    store1.addRecord(record11);
    store1.addRecord(record12);
    store1.sellRecord(record1);
    store1.sellRecord(record5);
    store1.sellRecord(record7);
    store1.sellRecord(record9);
    store1.talkMoneyToMe(store1.inventory, store1.sumArray);
    console.log("The current inventory total is: £" + inventoryTotal);
    console.log("The store register balance history is: " + store1.registerBalanceHistory);
    console.log("The current store register balance is: £" + store1.registerBalance);
    assert.isAbove(inventoryTotal.length, 0);
  });
});