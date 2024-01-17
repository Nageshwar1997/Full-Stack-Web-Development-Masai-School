function main() {
  function sayRegularHello() {
    console.log(`Regular Hello ${this}`);
  }
  sayRegularHello();
  var sayArrowHello = () => {
    console.log(`Arrow Hello ${this}`);
  };
  sayArrowHello();
}
main.call({ name: "Vivek" });