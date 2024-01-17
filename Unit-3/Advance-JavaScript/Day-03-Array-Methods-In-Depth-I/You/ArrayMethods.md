## How does array.reduce works :-
   Its an array method
   It takes in a callback function & an initial value
   The callback function is invoked array.length number of times
   in every iteration I can make changes to the accumulated value
   in every iteration I have access to the current item in the original array
   in the first iteration, the inital value in the accumulated value
   whatever is returned from the previous iteration becomes the acc value for the next iteration
   what ever is returned from the last iteration becomes the accumulated value
   It is normally used when we need a different shape of output


## How does the array.filter method works :-
   How array.filter works
   Its an array methos
   It returns a new array
   the length of the the new array may be different from the original array
   it takes in a callback function 
   the callback function gets the current item in every iteration
   the callback function is invoked originalarray.length number of times
   if the cb function returns a truthy value the current item is added to the output array
   the the cb function returns a falsey value the current item is not added to the output array


## How does the array.map works :- 
   How does Array.prototype.map works?
   Its an array method
   It returns a new array
   the length of the output array is same as the length of the input array
   its takes in a callback function
   the callback function is called for each item in the input array
   in every iteration we have access to the current item 
   what ever you return from the cb function, becomes the item of the output array


## Array.prototype.sort :- 
   How does array.prototype.sort works in javascript
   its an array method
   it mutates the input array (in place)
   it takes in a callback function
   the callback function gets two items of the input array usually stored as a , b
   the callback function is expected to return either 0, a -ve number or a +ve number
   if the callback returns a -ve number this means that a should come before b;
   if the callback returns a +ve number this means that a should come after b;
   if the callback returns 0, this means, no change in order is required


