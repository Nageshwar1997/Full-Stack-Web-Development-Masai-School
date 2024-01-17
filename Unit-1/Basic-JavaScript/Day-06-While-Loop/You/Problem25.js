let i=5;
while(i>=1){
  if(i%2==1){
    i--;
    continue;
  }
  console.log(i);
  i--;
}
/*

If this if condition is true, it means that i is an odd number. In such cases, we decrement i by 1 (i--) and use the continue statement to skip to the next iteration of the loop. As a result, the code goes back to the beginning of the while loop and checks the condition again.

If the condition of the first if block evaluates to false (meaning i is even), then the code moves to the console.log(i) statement. This prints the value of i to the console.

After printing the value, we decrement i by 1 (i--).
*/