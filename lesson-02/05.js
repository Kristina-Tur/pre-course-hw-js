let passport = {
  name: "Petr",
  surname: "Petrov",
};

let passportCopy = Object.assign({}, passport);
passportCopy.name = "Ivan";


console.log(passportCopy); 
console.log(passport);