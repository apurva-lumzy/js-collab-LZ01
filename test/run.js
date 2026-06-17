// Minimal test runner — no dependencies. Run with: node test/run.js
const assert = require('node:assert');
const Inventory = require('../src/inventory');

const inv = new Inventory();
inv.addItem('pen', 1.50, 4);
inv.addItem('pad', 3.00, 2);

assert.strictEqual(inv.totalQuantity(), 6, 'totalQuantity');
assert.strictEqual(inv.subtotal(), 12, 'subtotal');
// withTax may or may not be rounded depending on branch — allow a small tolerance.
assert.ok(Math.abs(inv.withTax() - 12.96) < 0.01, 'withTax');
// summary must keep its labels even after modernisation.
const s = inv.summary();
assert.ok(s.includes('Items:') && s.includes('Total:'), 'summary labels');

console.log('All inventory tests passed.');
