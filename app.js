obj = {
    "name":"John",
    "age":30,
}

var arrayOfObj = [
    {"name":"John","age":30} , {"name":"John","age":30}, {"name":"John","age":30}, {"name":"John","age":30}
]

function Person (firstName, lastName, gender) {
    this.firstName = firstName
    this.lastName = lastName
    this.gender = gender
    this.fullName = function() {
        return `${this.firstName} ${this.lastName}`
    }

}
Person.test = "ovo pripada klasi"
Person.run = function() {
    return `is runing`;
}
function Man (firstName, lastName, gender) {
    Person.call(this, firstName, lastName, gender)
}


var covek = new Person("marko", "Markovic", "musko")

console.log(Person);




//Promisi


var promise = new Promise ((resolve, reject, vrednost) => {
    setTimeout(function() {
        if(true) {
            resolve("Sve je super")
        }else{
            reject(Error("Ne radi"));
        }
    }, 3000);
    
});

promise.then((response) => {
    console.log(response);
}).catch((error)=>{
    console.log(error);
})

console.log("Pozvano posle promisa")

function doHomework(subject, callback) {
    console.log(`Starting my ${subject} homework`)
    callback();
}


doHomework('eng', function(){
    console.log("all done");
})





