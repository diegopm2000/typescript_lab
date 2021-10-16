// Literal types only can be set to a single value

let verdadera: true = true

let cinco: 5

type LoginOperation = {
  op: 'login',
  username: string,
  password: string
}

let l: LoginOperation = {
  username: 'admin',
  password: 'admin',
  op: 'login'
}

