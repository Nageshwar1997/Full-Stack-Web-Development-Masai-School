class Mobile {
    constructor(model, number, unlockPin) {
        this.model = model;
        this.number = number;
        let _unlockPin = unlockPin;

        this.getUnlockPin = function () {
            // console.log(_unlockPin);
            return _unlockPin;
        }
        this.unlockPin = function(newPin) {
            _unlockPin = newPin;
            // console.log(_unlockPin);
        }
    }
    sendSMS(textMessage) {
        // console.log(textMessage);
        return textMessage;
    }

}
  
export default Mobile
// var second = new Mobile("onplus", "0889", "2000")
// console.log(second);
// console.log(second.sendSMS("New message"));
// console.log(second.getUnlockPin());
// second.unlockPin("11111")
// console.log(second.getUnlockPin());