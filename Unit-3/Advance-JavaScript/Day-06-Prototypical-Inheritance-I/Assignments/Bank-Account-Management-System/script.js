
function BankAccount(accountNumber, name, type, balance, active) {
    this.accountNumber = accountNumber;
    this.accountName = name;
    this.accountType = type;
    this.accountBalance = balance;
    this.accountActive = active;
}
// ₹
BankAccount.prototype.deposit = function (depositAmount) {
    if (depositAmount > 0 && depositAmount <= +Infinity) {
        this.accountBalance += depositAmount;
        console.log(`Deposited amount is ${depositAmount}₹. Your current balance is ${this.accountBalance}₹`);
    }
    else {
        console.log(`Invalid Deposit Amount`);
    }
}

BankAccount.prototype.withdraw = function (withdrawAmount) {
    if (withdrawAmount > 0 && withdrawAmount <= this.accountBalance) {
        this.accountBalance -= withdrawAmount;
        console.log(`Withdrawn amount is ${withdrawAmount}₹. Your current balance is ${this.accountBalance}₹`);
    }
    else {
        console.log(`Invalid Withdraw Amount`);
    }
}

BankAccount.prototype.checkBalance = function () {
    console.log(`Your current balance is ${this.accountBalance}₹`);
}

BankAccount.prototype.isActive = function () {
    if (this.accountActive == true) {
        console.log(`Your account is active`);
    }
    else {
        console.log(`Your account is inactive`);
    }
}


const acc1 = new BankAccount(970, "Nageshwar", "Savings", 10000, true);
const acc2 = new BankAccount(130, "Manjusha", "Savings", 20000, false);
const acc3 = new BankAccount(140, "Dhanashree", "Savings", 30000, true);
console.log(acc1);
acc1.deposit(2000);
acc2.withdraw(500);
acc3.checkBalance();
acc2.isActive();