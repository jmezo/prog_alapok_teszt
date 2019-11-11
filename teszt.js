/** 1.  **/
// string
const str = 'string';

// number
const num = 5;

// boolean
const bool = true;

// array
const arr = [1, 2, 3, 'asd', 5];

// object
const obj = {
  name: 'Jano',
  age: 27,
  favoriteAnimals: ['dog', 'cat', 'capibarra']
};
console.log(str, num, bool, arr, obj);

/** 2. **/
// A referenci szerinti paraméterátadásnál a paraméter hivatkozását adjuk át, érték szerinti átadásnál pedig csak a paraméter értékét.
// Ha később az átadott paramétert módosítjuk, érték szerinti átadásnál az eredeti paraméter nem módosul, referencia szerintinél viszont igen.

// érték szerinti paraméter átadás:
let a = 5;
const b = a;
// ha 'a' értékét módosítjuk, 'b' értéke nem válzotik
console.log(a, b);
a++;
console.log(a, b);

// referencia szerinti paraméter átadás:
const arr1 = [1, 2, 3, 4];
const arr2 = arr1;
// ha 'arr2'-t módosítjuk, 'arr1' is válzotik
arr2.pop();
console.log(arr1, arr2);

/** 3. **/
const osszeadasTetel = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
console.log('osszeadas: ', osszeadasTetel([1, 2, 3, 4, 5]));

/** 4. **/
const megszamlalasTetel = (value, arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      count++;
    }
  }
  return count;
};
console.log('megszamlalas: ', megszamlalasTetel(1, [1, 1, 1, 2, 3, 4]));

/** 5. **/
const functionWithSwitch = (value) => {
  switch (value) {
    case 1:
      console.log('value is 1');
      break;
    case 2:
      console.log('value is 2');
      break;
    default:
      console.log('value is not 1 or 2');
      break;
  }
};
console.log('switch: ');
functionWithSwitch(1);

/** 6. **/
const metszet = (arr1, arr2) => {
  const intersect = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        intersect.push(arr2[j]);
        break;
      }
    }
  }
  return intersect;
};
console.log('metszet: ', metszet([1, 2, 3, 4], [4, 5, 6, 6]));

/** 7. **/
const calc = require('./calculatorModule');
const num1 = 10;
const num2 = 5;
console.log(calc.add(num1, num2));
console.log(calc.subtract(num1, num2));
console.log(calc.divide(num1, num2));
console.log(calc.multiply(num1, num2));

/** 8. **/
const hatvanyMatrix = (n, m) => {
  let pow = 0;
  const matrix = [];
  for (let i = 0; i < n; i++) {
    const arr = [];
    for (let j = 0; j < m; j++) {
      arr.push(Math.pow(2, pow));
      pow++;
    }
    matrix.push(arr);
  }
  return matrix;
};

console.log('ketto hatvanyai matrixban: ', hatvanyMatrix(3, 3));
