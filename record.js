var Record = function(artist, title, price){
  this.artist = artist;
  this.title = title;
  this.price = price;
};

Record.prototype = {

}

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

module.exports = Record