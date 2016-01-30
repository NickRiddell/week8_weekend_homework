var RecordStore = function(name, city){
  this.name = name;
  this.city = city;
  this.registerBalance = [];
  this.inventory = [];
};

RecordStore.prototype = {
  addRecord: function(record){
    this.inventory.push(record);
  },
  addNewBalance: function(balance){
    this.registerBalance.push(balance)
  },
  listInventory: function(){
    for (item of this.inventory){
      console.log(item);
    }
  },
  displayElement: function(element){
    console.log(element);
  },
  listRecordTitles: function(){
    for (item of this.inventory){
      console.log(item.title);
    }
  },
  listRecordTitleAndArtist: function(){
    for (item of this.inventory){
      console.log(item.artist + ': ' + item.title);
    }
  }
}

module.exports = RecordStore