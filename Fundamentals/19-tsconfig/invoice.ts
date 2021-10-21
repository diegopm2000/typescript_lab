import { Product, buildTotal } from './product'

// You can import all exported objects using * --> Warning...heavy bundles will be created

// import * as products from './product'

import iva from './iva'

function processEntrance(p: Product[]) {
    console.log(buildTotal(p))
}

let price = 100
console.log(`IVA from ${price} is ${iva(price)}`)