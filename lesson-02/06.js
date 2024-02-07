let passportWithAddress = {
  name: "Petr",
  surname: "Petrov",
  address: {
    country: "USA",
    city: "LA"
  }
};

const passportWithAddressClon = structuredClone(passportWithAddress);
passportWithAddressClon.address.city = "Bobryisk";
console.log(passportWithAddress);
console.log(passportWithAddressClon);