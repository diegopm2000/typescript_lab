// Assign functions to Interfaces (or types)

type Comparator = (a: string, b: string) => number

interface ComparatorV2 {
  (first: string, second: string): number
}

function sort(c: Comparator) {
  let out = c("first", "second")
}

// Hybrid (interfaces or types)

interface ComparatorV3 {
  (first: string, second: string): number
  algorithm: string
  safe: boolean
}

type ComparatorV4 = {
  (first: string, second: string): number
  algorithm: string
}

function sortV2(c: ComparatorV3) {
  let out = c("first", "second")
  console.log(`Ordering by ${c.algorithm}: ${out}`)
}