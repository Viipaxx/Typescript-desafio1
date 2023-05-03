import { Account } from "./Account";

export class ReiRataoAccount extends Account {
    
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    depositPremium = (valueDeposit: number): void => {
        console.log('deposito premium')
        this.deposit(valueDeposit + 10)
    }
    
}

