const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('node:assert/strict');
const Calculator = require('../../src/calculator');

let calc;

Given('que la calculadora está encendida', function () {
  calc = new Calculator();
});

When('sumo {int} y {int}', function (a, b) {
  calc.add(a, b);
});

When('resto {int} menos {int}', function (a, b) {
  calc.subtract(a, b);
});

When('multiplico {int} por {int}', function (a, b) {
  calc.multiply(a, b);
});

When('divido {float} entre {float}', function (a, b) {
  calc.divide(a, b);
});

Then('el resultado debe ser {float}', function (esperado) {
  assert.equal(calc.getResult(), esperado);
});
