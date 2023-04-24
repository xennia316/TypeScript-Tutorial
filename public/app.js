"use strict";
const anchor = document.querySelector('a');
console.log(anchor === null || anchor === void 0 ? void 0 : anchor.href);
const form = document.querySelector('.new-item-form');
// console.log(form)
// Input
const type = document.querySelector("#type");
const tofrom = document.querySelector("#toform");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// Class
// ********Defining a class Method 1*******
// class Invoice {
//    readonly client: string;
//    private details: string;
//    public amount: number;
//     constructor(c: string, d: string, a: number){
//         this.client = c;
//         this.details = d;
//         this.amount = a;
//     }
//     format(){
//         return `Hello ${this.client}, you owe $${this.amount} for ${this.details}`
//     }
// }
// ********Defining a class Method 1*******
class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `Hello ${this.client}, you owe $${this.amount} for ${this.details}`;
    }
}
const firstInvoice = new Invoice("Luigi", "work", 300);
const secondInvoice = new Invoice("Sonia", "school", 350);
let invoices = [];
// invoices.push("Heyoo")
invoices.push(firstInvoice, secondInvoice);
console.log(invoices);
invoices.forEach(inv => {
    // inv.client = "something else"
    // console.log(inv.client, inv.details, inv.amount, inv.format())
    console.log(inv.format());
});
