/*class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  comparazione(utente){
    if(this.age>utente.age){
        return `${this.firstName} è piu vecchio di ${utente.firstName}`
    }
    else if(this.age<utente.age){
        return `${this.firstName} è piu giovane di ${utente.firstName}`
    }
    else{
        'hanno la stessa età'
    }
    
  }
  

}

const simone = new User("simone", "congiu", 28, "roma");
console.log(simone)
const luca = new User("luca", "rossi", 20, "roma");
console.log(luca);
console.log(simone.comparazione(luca))

const marco = new User("marco", "blu", 50, "roma");

console.log(luca.comparazione(marco))*/



const pets = [];

class Pet {
    constructor(_petName, _ownerName, _species, _breed) {
      this.petName = _petName;
      this.ownerName = _ownerName;
      this.species = _species;
      this.breed = _breed;
    }
  
    
  }

  
   
  

const Name = document.getElementById("name");
const owner = document.getElementById("proprietario");
const species = document.getElementById("specie");
const breed = document.getElementById("razza");

const myButton = document.querySelector("button");
console.log(myButton);

const aggiungiLi = function () {
  const myUl = document.querySelector("ul");
  myUl.innerText=""

  pets.forEach((el) => {
    let list = document.createElement("li");
    list.innerText = `${el.petName} ${el.ownerName} ${el.species} ${el.breed} `;
    myUl.appendChild(list);
  });
  
};

const myForm = document.querySelector("form");
myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newAnimal = new Pet(
    Name.value,
    owner.value,
    species.value,
    breed.value
  );
  console.log(newAnimal);

  pets.push(newAnimal)
  Name.value=""
  owner.value=""
  species.value=""
  breed.value=""
  
  console.log(pets)
  aggiungiLi()
});

