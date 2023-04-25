export class Invoice {

    constructor( readonly client: string, private details: string, public amount: number ){}
        format(){
            return `Hello ${this.client}, you owe $${this.amount} for ${this.details}`
        }
    }
    