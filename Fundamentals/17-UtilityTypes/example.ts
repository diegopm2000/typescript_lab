// View the typescript handbook

// https://www.typescriptlang.org/docs/handbook/utility-types.html

// Partial

interface Todo {
    title: string,
    description: string
}

// Declaring t with Partial avoids the error of no declaring "description"

let t: Partial<Todo> = {
    title: 'Hello'
}

// Required

// Readonly

// ...

// Uncapitalize