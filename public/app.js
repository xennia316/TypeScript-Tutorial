import { Invoice } from "./classes/invoice";
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
