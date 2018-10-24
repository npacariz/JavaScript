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

Person.prototype = {
  fullName: function() {
    return `${this.firstName} ${this.lastName}`;
  }
};

// Staticka metoda i staticka klasa ne nasledjuje se ostaje sa clasom ako sam dobro skontao
Person.test = "ovo pripada klasi";
Person.run = function() {
  return `is runing`;
};

function Man(firstName, lastName, gender) {
  Person.call(this, firstName, lastName, gender);
}
Man.prototype = Object.create(Person.prototype);

var covek = new Person("Marko", "Markovic", "musko");
var covek2 = new Man("Stefan", "Stefanovic", "musko");

console.log(covek2.fullName());

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
