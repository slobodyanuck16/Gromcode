class Order {
    id = Math.random(id) + '';
    price = new Number();
    dateCreated = new Date();
    isConfirmed = new Boolean();
    dateConfirmed = new Date();
    city = new String();
    type = new String();
    constructor(price, city, type) {
        this.price = price
        this.city = city
        this.type = type
    }

    checkPrice() {
        if (this.price > 1000) {
            return true;
        }
        else return false;
    }

    confirmOrder() {
        this.isConfirmed = true;
        this.dateConfirmed = new Date(now);
    }
    isValidType() {
        if (this.type === 'Buy') {
            return false;
        }
        if (this.type === 'Sell') {
            return true;
        }
    }
}