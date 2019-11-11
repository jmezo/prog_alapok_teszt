const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const divide = (a, b) => {
  return (b === 0 ? undefined : a / b);
};

const multiply = (a, b) => {
  return a * b;
};

module.exports = {
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply
};
