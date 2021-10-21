// Generic: introduce parameters in type definitions

interface Result<T> {
    type: string,
    success: boolean,
    message: T,
}

let payload: Result<string> = {
    type: 'post',
    success: true,
    message: 'adios'
}

let payloadAlt: Result<boolean> = {
    type: 'post',
    success: true,
    message: true
}

// Declare more thant one generic

interface ResultAlt<T, U> {
    type: string,
    success: boolean,
    message: T,
    messageAlt: U,
}

// Best practices naming the generic: use descriptive names!!!

interface ResultAltV2<Message, MessageAlt> {
    type: string,
    success: boolean,
    message: Message,
    messageAlt: MessageAlt,
}

