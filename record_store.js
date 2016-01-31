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
    inventoryList = []
    for (item of this.inventory){
      inventoryList.push(item);
    }
  },
  displayElement: function(element){
    console.log(element);
  },
  listRecordTitles: function(){
    titleList = []
    for (item of this.inventory){
      titleList.push(item.title);
    }
  },
  listRecordTitleAndArtist: function(){
    titleArtistList = []
    for (item of this.inventory){
      titleArtistList.push(item.artist + ': ' + item.title);
    }
  },
  sellRecord: function(record){
    console.log(this.inventory);
    console.log(this.registerBalance);
    var index = this.inventory.indexOf(record);
    if (index > -1) {
        this.inventory.splice(index, 1);
    var oldBlance = this.registerBalance.pop();
    var newBalance = oldBlance + record.price;
    this.registerBalance.push(newBalance);
    console.log(this.inventory);
    console.log(this.registerBalance);
    }
  }
}
module.exports = RecordStore