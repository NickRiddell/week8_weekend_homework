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
  }
}

module.exports = RecordStore