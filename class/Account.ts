export abstract class Account {
    private name: string
    private readonly accountNumber: number
    private balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    // setters
    
    setName = (newName: string): void => {
        this.name = newName
    }

    // getters

    getName = (): string => {
        return this.name
    }

    getAccountNumber = (): number => {
        return this.accountNumber
    }

    getBalance = (): number => {
        return this.balance
    }

    getStatus = (): boolean => {
        return this.status
    }

    // others methods

    deposit = (value: number): void => {
        if(this.validateStatus()){
            this.balance += value
        } else {
            throw new Error('Erro no depósito')
        }
    }

    withdraw = (valueWithdraw: number): void => {
        if (this.validateStatus()){
            if (this.balance >= valueWithdraw){
                this.balance -= valueWithdraw
                console.log('Você sacou')
            } else {
                throw new Error('Saldo insuficiente')
            }
        } else {
            throw new Error('Deactivated account')
        }
    }
    
    private validateStatus = (): boolean => {
        if (this.status){
            return this.status
        }
        throw new Error('Conta desativada')
    }
}