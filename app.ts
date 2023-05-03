import { PizzaAccount } from "./class/PizzaAccount"
import { RataoAccount } from "./class/RataoAccount"
import { ReiRataoAccount } from "./class/ReiRataoAccount"

const reiRatao: ReiRataoAccount = new ReiRataoAccount('Vitor', 21)
console.log('\nConta Premium\n')
console.log('Saldo:', reiRatao.getBalance())
reiRatao.depositPremium(20)
console.log('Saldo:', reiRatao.getBalance())
reiRatao.withdraw(10)
console.log('Saldo:', reiRatao.getBalance())

console.log('\nConta Empresarial\n')
const ratao: RataoAccount = new RataoAccount('PicPay', 22)
console.log('Saldo:', ratao.getBalance())
ratao.depositComon(20)
console.log('Saldo:', ratao.getBalance())
ratao.loan(1000)
console.log('Saldo:', ratao.getBalance())
ratao.withdraw(200)
console.log('Saldo:', ratao.getBalance())

console.log('\nConta Comum\n')
const pizza: PizzaAccount = new PizzaAccount(1, 'Igor', 23)
console.log('Saldo:', pizza.getBalance())
pizza.depositComon(20)
console.log('Saldo:', pizza.getBalance())
pizza.withdraw(5)
console.log('Saldo:', pizza.getBalance())