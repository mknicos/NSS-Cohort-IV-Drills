
function Stock(symbol){
  this.symbol = symbol;
  this.price = Math.floor(Math.random() * (250 - 50))+ 50;
}

module.exports = Stock;
