# Simple CRUD in Typescript using Clean Architecture

A simple approach to Clean Architecture using typescript

```shell
src
├── App
│   └── simpleApp.ts
├── Shared
│   ├── entities
│   │   └── Entity.interface.ts
│   └── infrastructure
│       └── uuidgenerator
└── User
    ├── adapters
    │   ├── controllers
    │   ├── gateways
    │   └── presenters
    ├── entities
    │   ├── user.interface.ts
    │   └── user.ts
    └── usecases
        ├── boolean.responseModel.ts
        ├── count
        ├── createUser
        ├── deleteUser
        ├── filter.type.ts
        ├── getManyUsers
        ├── getOneUser
        ├── number.responseModel.ts
        ├── updateUser
        ├── userlist.responseModel.ts
        ├── user.repository.interface.ts
        ├── user.responseModel.ts
        └── uuid.generator.interface.ts
```