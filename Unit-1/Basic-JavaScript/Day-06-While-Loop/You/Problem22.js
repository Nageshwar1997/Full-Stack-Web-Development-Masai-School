/* // Guest Analogy:-
There are 10 guests coming to my home, After 2-3 days they decided to leave their home.

They all have the train on the same day and at the same time.

I need to drop them at the railway station but I have one bike which can only take one person at a time.

In this case, I need to drop each guest one by one.

Taking the First guest to the railway station, dropping them and arrive back and follow the same procedure again and again till the end.

Suppose I took the First Guest and dropped him to the Railway station and comeback.

Again I took the Second Guest and follow the same.

Now, Next I took the third guest to Railway station and found that Train has gone.*/

let guest = 1;
while (guest <= 10) {
  console.log("Guest", guest);
  if (guest == 3) {
    break;
  }
  guest++;
}
// Guest 1
// Guest 2
// Guest 3