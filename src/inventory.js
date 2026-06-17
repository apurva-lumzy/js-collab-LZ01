// inventory.js  (legacy ES5 style — to be modernised)
var TAX_RATE = 0.08;

function Inventory(items) {
  this.items = items || [];
}

Inventory.prototype.addItem = function (name, price, qty) {
  this.items.push({ name: name, price: price, qty: qty });
};

Inventory.prototype.totalQuantity = function () {
  var total = 0;
  for (var i = 0; i < this.items.length; i++) {
    total += this.items[i].qty;
  }
  return total;
};

Inventory.prototype.subtotal = function () {
  var sum = 0;
  for (var i = 0; i < this.items.length; i++) {
    sum += this.items[i].price * this.items[i].qty;
  }
  return sum;
};

Inventory.prototype.withTax = function () {
  return this.subtotal() + this.subtotal() * TAX_RATE;
};

Inventory.prototype.summary = function () {
  return 'Items: ' + this.totalQuantity() + ', Total: $' + this.withTax();
};

module.exports = Inventory;
