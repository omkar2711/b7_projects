let bankAccount = {
    balanace : 0,
    accountNumber : 123,
    accountHolder : "abc",
    deposit : function(amount){
        this.balanace+= amount;
        console.log("new Balance " + this.balanace);
        return;
    },
    withdraw : function(amount){
        if(amount < 0){
            console.log("Amount cannot be negative");
            return;
        }
        else if(amount > this.balanace){
            console.log("Insufficient balance");
            return;
        }
        else{
            this.balanace -= amount;
            console.log("new balance " + this.balanace);
            return;
        }
    },
    checkBalance : function(){
        return this.balanace;
    }

};


console.log(bankAccount.balanace);
bankAccount.deposit(1000)
bankAccount.withdraw(2000)
bankAccount.withdraw(500)
console.log(bankAccount.checkBalance());

