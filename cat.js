class Cat {
constructor(firstName, lastName, age, pettedBy, petCounter) {
   this.firstName = firstName;
   this.lastName = lastName;
   this.age = age;
   this.pettedBy = pettedBy;
   this.petCounter = petCounter;
}

 pet(pettedByName) {
    this.pettedBy.push(pettedByName);
    this.petCounter++;
}

 sayHello() {
    if(this.pettedBy.includes('Dan')) {
        console.log('Meow');
    } else {
        console.log('Meow, my name is ' + this.firstName + ' ' + this.lastName + '.');
    }
}

 humanAge() {
    const result = this.age * 6;
    console.log(result);
}

 petCount() {
    console.log(this.petCounter);
}

 petList() {
     let list = this.pettedBy.join(',');
     console.log(list);
 }

}

const Katy = new Cat('Katy', 'Purry', 6, [], 0); 


Katy.pet('Steven');
Katy.pet('Dan');
Katy.pet('Joey');
Katy.sayHello();
Katy.humanAge();
Katy.petCount();   
Katy.petList();