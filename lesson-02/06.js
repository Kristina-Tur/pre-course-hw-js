let passportWithAddress = {
  name: "Petr",
  surname: "Petrov",
  address: {
    country: "USA",
    city: "LA"
  }
};

const _ = require('lodash');
const clonedObj = _.cloneDeep(passportWithAddress);
console.log(clonedObj)