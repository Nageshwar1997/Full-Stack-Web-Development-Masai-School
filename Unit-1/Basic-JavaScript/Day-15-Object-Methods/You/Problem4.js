let details = {
  name: "Nageshwar",
  age: 25,
  print: function() {
    console.log(this.name); // Nageshwar
    console.log(this.age); // 25

    console.log(this.phone); // undefined ---> // here there is no key with phone so that js is giving undefined as defult value.
  }
}

details.print();

// this is special keyword which is used inside the object.

// this keyword will check all the key which are matching after this word ( this.age)
// if there are any matching that value will be assigned to the this.age place.