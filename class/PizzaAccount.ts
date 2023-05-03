import { Account } from "./Account";

export class PizzaAccount extends Account {
    private doc_id: number

    constructor(doc_id: number, name: string, accountNumber: number) {
        super(name, accountNumber)
        this.doc_id = doc_id
    }

    depositComon = (value: number): void => {
        console.log('Usúario depositou')
        this.deposit(value)
    }

}