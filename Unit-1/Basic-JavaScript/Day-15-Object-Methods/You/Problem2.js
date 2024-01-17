let form = {
  details: function(name, age) {
    console.log(name);
    console.log(age);
  }
}
// Dot Notation
// We can call a function using dot notation
form.details("Nageshwar", 25);
// Nageshwar
// 25


// Bracket Notation
// We can call a function using bracket notation
form["details"]("Nageshwar", 25);
// Nageshwar
// 25