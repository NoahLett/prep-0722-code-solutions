const person = {
  firstName: 'John',
  lastName: 'Doe',
  hobby: 'Surfing'
};

console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is: ", fullName);

person.job = 'Business Owner';
console.log("The person's current job is: ", person.job);

person.previousJob = 'Cop';
console.log("The person's previous job is: ", person.previousJob);

console.log(person);
