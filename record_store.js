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
  },
  sellRecord: function(record){
    console.log(this.registerBalance);
    var index = this.inventory.indexOf(record);
    if (index > -1) {
        this.inventory.splice(index, 1);
    var oldBlance = this.registerBalance.pop();
    var newBalance = oldBlance + record.price;
    this.registerBalance.push(newBalance);
    console.log(this.registerBalance);
    }
  }
}
module.exports = RecordStore