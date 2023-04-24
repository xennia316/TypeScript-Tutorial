"use strict";
const anchor = document.querySelector('a');
console.log(anchor === null || anchor === void 0 ? void 0 : anchor.href);
const form = document.querySelector('.new-item-form');
console.log(form);
// Input
const type = document.querySelector("#type");
const tofrom = document.querySelector("#toform");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// Class
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `Hello ${this.client}, you owe $${this.amount} for ${this.details}`;
    }
}
const firstInvoice = new Invoice("Luigi", "work", 300);
const secondInvoice = new Invoice("Sonia", "school", 350);
console.log(firstInvoice);
let invoices = [];
// invoices.push("Heyoo")
firstInvoice.format();
invoices.push(firstInvoice, secondInvoice);
console.log(invoices);
