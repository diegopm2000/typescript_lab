// Generics in functions

type Note = {
    message: string
}

type ColourNote = Note & {
    colour: string
}

type Photo = {
    url: string
}

type Video = Photo & {
    duration: number
}

// http post /upload
function upload<Publication, Extra>(p: Publication, e?: Extra): Publication {
    return p
}

let x = upload<Note, String>({ message: 'Hello world!'})

// alternative
let post:Note = { message: 'Hello world!'}
let y = upload(post)

// How restrict the Publicatoin or Extra to a explicit set of types?

// 1. Relationship between interfaces withou use of types

interface PostV2 {}

interface NoteV2 extends PostV2 {
    message: string
}

interface ColourNoteV2 extends NoteV2 {
    colour: string
}

interface PhotoV2 extends PostV2 {
    url: string
}

interface VideoV2 extends PhotoV2 {
    duration: number
}

// And use of extends the generic type

function uploadV2<Publication extends PostV2, Extra>(p: Publication, e?: Extra): Publication {
    return p
}