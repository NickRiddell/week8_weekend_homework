var RecordCollector = function(name, description){
  this.name = name;
  this.description = description;
  this.collection = [];
};

RecordCollector.prototype = {
  buildCollection: function(record){
    this.collection.push(record);
  }
}

var collector1 = new RecordCollector('Sweaty Bob', 'Sweaty and nervous');

module.exports = RecordCollector