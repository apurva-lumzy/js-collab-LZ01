// ES6: const instead of var for values that do not get reassigned
const TAX_RATE = 0.08;

// ES6: class syntax replacing the constructor function + prototype pattern
class Inventory {
  // ES6: Default parameters replacing the old `items || []` fallback
  constructor(items = []) {
    this.items = items;
  }

  addItem(name, price, qty) {
    // ES6: using object property shorthand
    this.items.push({ name, price, qty });
  }

  totalQuantity() {
    // ES6: using .reduce combined with an arrow function
    return this.items.reduce((total, item) => total + item.qty, 0);
  }

  subtotal() {
    // ES6: using Destructuring 
    return this.items.reduce((sum, { price, qty }) => sum + (price * qty), 0);
  }

  withTax() {
    return this.subtotal() + this.subtotal() * TAX_RATE;
  }

  summary() {
    // ES6: Template literal instead of string concatenation
    return `Items: ${this.totalQuantity()}, Total: $${this.withTax()}`;
  }
}

module.exports = Inventory;