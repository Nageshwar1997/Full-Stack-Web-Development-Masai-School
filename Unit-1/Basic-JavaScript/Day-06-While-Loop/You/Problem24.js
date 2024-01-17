/* // Continue:-
// Guest Analogy--->
  
There are 10 guests coming to my home, After 2-3 days they decided to leave their home.
  
They all have the train on the same day and at the same time.
  
I need to drop them at the railway station but I have one bike which can only take one person at a time.
  
In this case, I need to drop each guest one by one.
  
Taking the First guest to the railway station, dropping them and arrive back and follow the same procedure again and again till the end.
  
Suppose I took the First Guest and dropped him to the Railway station and come back.
  
Again I took the Second Guest and follow the same.

Suppose the third guest is Sick, In that case I will skip him.
  
and I will continue with the fourth guest and follow the same procedure.*/

// Code 11 : Loop from 0 to 10 (using continue)

let guest = 1;

while (guest <= 10) {
  if (guest == 3) {
    guest++;
    continue;
  }
  console.log("Guest", guest)
  guest++;
}

// Guest 1
// Guest 2
// Guest 4
// Guest 5
// Guest 6
// Guest 7
// Guest 8
// Guest 9
// Guest 10