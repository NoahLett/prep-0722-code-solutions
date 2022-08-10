function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHourstoMinutes(hr) {
  return hr * 60;
}

const minutes = convertHourstoMinutes(2);
console.log('2 hours converted to minutes:', minutes);

function getGreeting(name) {
  return 'Hello' + ' ' + name;
}

const greeting = getGreeting('World');
console.log('The greeting is:', greeting);

function addAndMultiplyBy5(a, b) {
  return (a + b) * 5;
}

const calculation1 = addAndMultiplyBy5(10, 5);
console.log('The calculation is:', calculation1);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

const calculation2 = multiplyAndDivideBy5(35, 10);
console.log('The calculation is:', calculation2);

function subtractTwoNumbers(c, d) {
  return c - d;
}

const calculation3 = subtractTwoNumbers(22, 7);
console.log('The calculation is:', calculation3);

function getCircleCircumference(r) {
  return (2 * r) * Math.PI;
}

const circumference = getCircleCircumference(5);
console.log('The circumference is:', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

const fullName = getFullName('Juan', 'Ramirez');
console.log('The full name is:', fullName);

function cube(value) {
  return Math.pow(value, 3);
}

const cubedValue = cube(5);
console.log('The cubed value is:', cubedValue);
