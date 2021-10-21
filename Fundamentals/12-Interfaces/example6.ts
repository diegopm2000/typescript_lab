interface X {
    a: string
}

interface X {
    b: string
}

interface X {
    c: string
}

// Typescript allows to extend an interface with only repeating the interface and changing the properties.

function use(x: X) {
    x.a + x.b + x.c
}