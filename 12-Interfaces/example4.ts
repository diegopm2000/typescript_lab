// Index accessors

// In javascript there are two indexable types: arrays & objects

let vector: number[] = []

vector[0]

let myObject: Account = {
  displayName: 'foo',
  rdDisplayName: 'foo',
  id: '1'
}

let x = myObject['displayName']

// We can declare indexable our interface
// This can be used to declare explicit the type returned accesing by index

interface Indexable {
  [index: number]: boolean
}

let l: Indexable = {}

let k = l[4]