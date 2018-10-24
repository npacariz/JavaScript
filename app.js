obj = {
  name: "John",
  age: 30
};

var arrayOfObj = [
  { name: "John", age: 30 },
  { name: "John", age: 30 },
  { name: "John", age: 30 },
  { name: "John", age: 30 }
];

function Person(firstName, lastName, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.gender = gender;
}

Person.prototype.fullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

// Staticka metoda i staticki atribut, se ne nasledjuje se,  ostaje sa clasom ako sam dobro skontao
Person.test = "ovo pripada klasi";
Person.run = function() {
  return `is runing`;
};

// Dobavljanje roditeljski atributa
function Man(firstName, lastName, gender, address) {
  Person.call(this, firstName, lastName, gender);
  this.address = address;
}

//Nasledjivanje roditeljski metoda
Man.prototype = Object.create(Person.prototype);
Man.prototype.constructor = Man;

// Extending the Parent's method
Man.prototype.addressAndName = function() {
  return `${this.fullName()} zivi na adresi ${this.address}`;
};

// Stablo nasledjivanja, ne zaboravi this u Parent.call()
function Dete(firstName, lastName, gender, address) {
  Man.call(this, firstName, lastName, gender, address);
}
// Nasledjivanje funkcija od roditelja
Dete.prototype = Object.create(Man.prototype);
Dete.prototype.constructor = Dete;

var ucenik = new Dete("Stefan", "Stefanovic", "musko", "Cara Lazara");
console.log(ucenik.addressAndName());

//Promisi

var promise = new Promise((resolve, reject, vrednost) => {
  setTimeout(function() {
    if (true) {
      resolve("Sve je super");
    } else {
      reject(Error("Ne radi"));
    }
  }, 3000);
});

promise
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });

console.log("Pozvano posle promisa");

function doHomework(subject, callback) {
  console.log(`Starting my ${subject} homework`);
  callback();
}

doHomework("eng", function() {
  console.log("all done");
});
