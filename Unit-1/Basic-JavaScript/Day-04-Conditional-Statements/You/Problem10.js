// For a Restaurant, write the program for the following total_bill > 500
// Then print "10% discount" total_bill > 1000 Then print "20% discount" Otherise "No discount"

let total_bill = 1001;

if (total_bill > 1000) {
  console.log("20% Discount")
}
else if (total_bill > 500) {
  console.log("10% Discount");
}
else {
  console.log("No Discount");
}