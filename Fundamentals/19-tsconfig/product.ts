export type Product = {
    sku: string,
    name: string,
    description: string,
    price: number,
    urlPhoto: string
}

type Store = {
    [sku: string]: {
        stock: number,
        lastEntrance: Date,
    }
}

export function buildTotal(products: Product[]) {
    let price = 0;
    for (let product of products) {
        price += product.price
    }
    return price
}