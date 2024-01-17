// Code 4: Run loop and print each character skip spaces (except spaces) of String.

let name = "N a g e s h w a r";

for (let i = 0; i < name.length; i++) {
  if (name[i] == " ") {
    continue;
  }
  console.log(name[i]);
}
// N
// a
// g
// e
// s
// h
// w
// a
// r
