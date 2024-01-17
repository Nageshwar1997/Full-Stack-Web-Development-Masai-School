# Node Helper Functions.

### Maximum Marks - 20

```
✅ able to submit the application - 1 mark (minimum score)
✅ Should print the IP address of the given websitename - 2.5 mark
✅ Should print the IP address of the given url - 2.5 mark
✅ Should print the Error message if invalid url or websitename - 2 marks
✅ should create a file  append content to that file - 2 mark
✅ should able to read content of tha file  - 2 mark
✅ should able to delete a file  - 2 mark
✅ should print the Error message if invalid path find (Reading file) - 2 mark
✅ should print the Error message if invalid path find (Deleting file) - 2 mark
✅ should able to use third party library called cowsay  - 2 mark
```

Create a Node.js program that allows for basic file manipulation and dns.The program should take command line arguments to specify the desired operation (command for the particular operation are given in "()" , use those commands only ):
```
 - getIP ( gip )
 - writeToFile ( wf )
 - readAFile ( rf )
 - deleteAFile ( df )
 - makeCowSay ( mcw )
 
 ```
- To run any of these functions, the user needs to pass a specific keyword and the required parameters while running the index.js file.

for example, `node index.js gip masaischool.com` should print an array of IP address of masaischool.com.
`node index.js wf test.txt "hello"` should write "hello" to test.txt file.
`node index.js df test.txt` should delete the test.txt file. and so on...
 

## Installation

- you can use any node version that works for you ( 14+ )
- please make sure you do not push package-lock.json

```
npm install

// complete functions 

// test locally
npm run test
```

## Test Cases

Write the following 5 functions in the helper_functions.js and export them.

import all functions from helper_functions.js to index.js.

#### a) Function to accept a website name and prints (not return) an IP address of it.

 - Name this function as "getIP".
 - Should accept a single parameter "website_name".
 - `Should print(not return)` the array IP address of the given website("IP address is {array of adresses}).
 - on Error print message ("Websitename or Url is invalid.")
 - Hint : Refer "dns" module of Node.

#### b) Function to write the given content to the given filename.

 - Name this function as "writeToFile".
 - Should accept two parameters, "filename" and "content".
 - Should write the passed content to the passed filename, Asynchronously.
 - `Should print(not return)`  the content which was successfully written in the given filename.
 - Hint : Refer "fs" module of Node.
#### c) Function to read the content from the given filename.

 - Name this function as "readAFile".
 - Should accept a single parameter "filename".
 - Should read the content from the passed filename, Asynchronously.
 - `Should print(not return)` the read content.
 - on error print message("No such file or directory found.")
 - Hint : Refer "fs" module of Node.
#### d) Function to delete a file of the given filename.

 - Name this function as "deleteAFile".
 - Should accept a single parameter "filename".
 - Should delete a file of the given filename, Asynchronously on successful delete `Should print(not return)` the message ("File {filename} is deleted.");
 - on error print message("No such file to Delete.")
 - Hint : Refer "fs" module of Node.
#### e) Function to make a cow(yes, a cow) say the passed content.

 - Name this function as "makeCowSay".
 - Should accept a single parameter "content".
 - Should make the cow say the passed "content".
 - `Should print(not return)` the return value of `say` method with the passed content.
 - Hint : You need to search, install and use a package called "cowsay" from npm.





## Evaluation Criteria

- Correct implementation of the mathematical operations
- Proper handling of command line arguments
- Proper implementation of random number generation
- Proper handling of edge cases
- Code readability and organization
- Comments explaining the logic behind each step

## General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time