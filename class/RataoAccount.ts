import { Account } from "./Account";

export class RataoAccount extends Account {

    constructor(name: string, accountNumber: number){
       super(name, accountNumber)
    }

    loan = (valueLoan: number): void => {
        this.deposit(valueLoan)
        console.log('Empréstimo realizado com sucesso')
    }

    depositComon = (value: number ) => {
        console.log('Empresa depositou')
        this.deposit(value)
    }

}