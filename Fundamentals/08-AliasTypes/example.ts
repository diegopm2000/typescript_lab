// allow create new types

type Numero = number

let n: Numero = 5

type LoginCredentials = {
  username: string,
  password: string,
  remember?: boolean, // Use ? to declare optional this property
}

function login(data: LoginCredentials) {

}

login({ username: 'myUserName', password: 'myPassword' })

