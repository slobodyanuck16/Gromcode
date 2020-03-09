class Wallet {
    balance = 0;

    getBalance() {
        return this.balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log('No enought funds');
            return;
        }
        this.balance -= amount;
    }
}

export { Wallet };