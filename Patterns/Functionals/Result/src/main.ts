import { DivideService } from "./DivideService"

const myService = new DivideService()

let a = 10
let b = 20

let response = myService.execute({ valueA: a, valueB: b})
console.log(`----> a: ${a}, b:: ${b} isOk: ${response.isOk()}, isErr: ${response.isErr()}`)

a = 10
b = 0

response = myService.execute({ valueA: a, valueB: b})
console.log(`----> a: ${a}, b:: ${b} isOk: ${response.isOk()}, isErr: ${response.isErr()}`)

a = 10
b = -1

response = myService.execute({ valueA: a, valueB: b})
console.log(`----> a: ${a}, b:: ${b} isOk: ${response.isOk()}, isErr: ${response.isErr()}`)

