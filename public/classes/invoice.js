export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `Hello ${this.client}, you owe $${this.amount} for ${this.details}`;
    }
}
