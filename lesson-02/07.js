let passportMarried = {
  name: "Petr",
  surname: "Petrov",
  address: {
    country: "USA",
    city: "Bobryisk"
  }
};

const passportMarriedCopy = structuredClone(passportMarried);
passportMarriedCopy.married = true;
console.log(passportMarriedCopy);
console.log(passportMarried);

