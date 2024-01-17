function createAccount(name, age, balance, active) {
    let account = {};
    account.name = name;
    account.age = age;
    account.balance = balance;
    account.active = active;
    account.isActive= function(){
        console.log(this.active);
    };
    account.sayAge = function () {
        console.log(this.age);
    }
    return account;
}
let nageshwar = createAccount("Nageshwar", 26, 100000, true);
console.log(nageshwar);

let manjusha = createAccount("Manjusha", 23, 50000, false);
console.log(manjusha);

manjusha.sayAge(); // 23