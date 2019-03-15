function Bank(fName, lName, mName, acct, balance = 0) {
    this.fName = fName
    this.lName = lName
    this.mName = mName
    this.acct = acct
    this.balance = balance
    this.status = 'CLOSED'
    this.open = function () {
        if (this.balance >= 100)
            this.status = 'OPEN'
        else if (this.balance != 100)
            this.status = 'FREEZE'
    }
    this.withdraw = function (amt) {
        this.balance -= amt
        if (balance < 0)
            this.balance -= 35
        console.log("Your remaining balance is: " + amt)
    }
    this.transfer = function (amt) {
        acct2.balance += amt
        this.balance -= amt
    }
}
const acct2 = new Bank('Thai', 'Cao', 'Pham', 0001, 300)

const Me = new Bank('Bach', 'Cao', 'Pham', 0001, 500)

console.log(Me.balance)
console.log(Me.transfer(200))
console.log(Me.balance)
console.log(acct2.balance)