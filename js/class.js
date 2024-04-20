class Product {
    constructor(url, name, quantity, unit, price) {
        this.id = `${new Date().getTime()}`
        this.url = url
        this.name = name
        this.quantity = quantity
        this.unit = unit
        this.price = price
    }
}

export class Mahsulot extends Product {
    constructor(url, name, quantity, unit, price, color) {
        super(url, name, quantity, unit, price)
        this.color = color
    }
}