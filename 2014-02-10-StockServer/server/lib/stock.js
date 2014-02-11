
function Stock(symbol){
  this.symbol = symbol;
  this.price = Math.floor(Math.random() * (250 - 50))+ 1;
}

module.exports = Stock;
