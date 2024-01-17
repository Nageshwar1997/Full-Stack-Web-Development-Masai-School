let btn = document.getElementById("btn");
let inp = document.getElementsByClassName("inp");
let output = document.getElementById("result");

function calculateBMI() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;

  let bmi = (weight / (height * height)) * 10000;
  let category = "";

  for (let i = 0; i < inp.length; i++) {
    if (bmi <= 18.4) {
      category = "Under Weight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      category = "Normal Weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
      category = "Over Weight";
    } else if (bmi >= 30) {
      category = "Obese";
    }
  }

  output.innerText =
    output.innerText +
    " Your BMI is " +
    bmi +
    " And you are in " +
    category +
    " Category";
}
