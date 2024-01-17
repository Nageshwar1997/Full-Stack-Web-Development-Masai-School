const fs = require("fs");
const dns = require("dns");
const { say } = require("cowsay");

const { execSync } = require("child_process");
// Don't Change the order of test functions they are Interdependent

global.score = 1;

describe("Checking  Node programs", () => {
  it("Should print the IP address of the given websitename ", (done) => {
    const output = execSync("node index.js gip masaischool.com")
      .toString()
      .split("\n")[0]
      .split(" ");
    let ips = output[output.length - 1].split(",");
    console.log(ips);
    // let haveIP=ips.includes("65.0.227.101");

    // expect(haveIP).toBeTruthy();

    expect(new Set(ips)).toContain("65.0.227.101");
    done();
    global.score += 2.5;
  });

  it("Should print the IP address of the given url ", (done) => {
    const output = execSync(
      "node index.js gip 'https://masaischool.com/courses/'"
    )
      .toString()
      .split("\n")[0]
      .split(" ");
    let ips = output[output.length - 1].split(",");
    console.log(ips);

    // let haveIP=ips.includes("65.0.227.101");

    // expect(haveIP).toBeTruthy();
    expect(new Set(ips)).toContain("65.0.227.101");
    done();
    global.score += 2.5;
  });

  it("Should print the Error message if invalid url or websitename", (done) => {
    const output = execSync(
      "node index.js gip 'https://masdddtrchool.com/courses/'"
    ).toString();
    expect(output.trim()).toEqual("Websitename or Url is invalid.");
    done();
    global.score += 2;
  });

  it("should create a file  append content to that file", (done) => {
    execSync(`node index.js wf test.txt "new content"`);
    const fileContent = fs.readFileSync("test.txt", "utf8");
    expect(fileContent).toEqual("new content");
    done();
    global.score += 2;
  });

  it("should able to read content of tha file ", (done) => {
    let output = execSync(`node index.js rf test.txt`).toString();
    // const fileContent = fs.readFileSync("test.txt", "utf8");
    console.log("test Output", output);
    expect(output.trim()).toEqual("new content");
    done();
    global.score += 2;
  });

  it("should able to delete a file ", (done) => {
    let output = execSync(`node index.js df test.txt`).toString();
    expect(() => fs.accessSync("test.txt")).toThrow();
    expect(output.trim()).toEqual("File test.txt is deleted.");
    done();
    global.score += 2;
  });

  it("should print the Error message if invalid path find (Reading file) ", (done) => {
    let output = execSync(`node index.js rf test.txt`).toString();
    // const fileContent = fs.readFileSync("test.txt", "utf8");
    // console.log("test Output", output);
    expect(output.trim()).toEqual("No such file or directory found.");
    done();
    global.score += 2;
  });

  it("should print the Error message if invalid path find (Deleting file)", (done) => {
    let output = execSync(`node index.js df test.txt`).toString();
    expect(() => fs.accessSync("test.txt")).toThrow();
    expect(output.trim()).toEqual("No such file to Delete.");
    done();
    global.score += 2;
  });

  it("should able to use third party library called cowsay", (done) => {
    let output = execSync(`node index.js mcw "moo moo"`).toString();

    let exp = say({ text: "moo moo" });
    //  console.log(typeof(exp));
    expect(output).toMatch(exp);
    done();

    global.score += 2;
  });
});

afterAll((done) => {
  done();
  console.log("Final Score is", global.score);
});
