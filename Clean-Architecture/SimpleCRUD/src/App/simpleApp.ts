import { UuidGenerator } from "../Shared/infrastructure/uuidgenerator/uuidgenerator";
import { CountControllerInterface } from "../User/adapters/controllers/count/count.controller.interface";
import { CountSimpleController } from "../User/adapters/controllers/count/count.controller.simple";
import { CountRequest } from "../User/adapters/controllers/count/count.request";
import { CreateUserControllerInterface } from "../User/adapters/controllers/createUser/createUser.controller.interface";
import { CreateUserSimpleController } from "../User/adapters/controllers/createUser/createUser.controller.simple";
import { CreateUserRequest } from "../User/adapters/controllers/createUser/createUser.request";
import { DeleteUserControllerInterface } from "../User/adapters/controllers/deleteUser/deleteUser.controller.interface";
import { DeleteUserSimpleController } from "../User/adapters/controllers/deleteUser/deleteUser.controller.simple";
import { GetManyUserControllerInterface } from "../User/adapters/controllers/getManyUsers/getManyUser.controller.interface";
import { GetManyUserSimpleController } from "../User/adapters/controllers/getManyUsers/getManyUser.controller.simple";
import { GetManyUserRequest } from "../User/adapters/controllers/getManyUsers/getManyUser.request";
import { GetOneUserControllerInterface } from "../User/adapters/controllers/getOneUser/getOneUser.controller.interface";
import { GetOneUserSimpleController } from "../User/adapters/controllers/getOneUser/getOneUser.controller.simple";
import { GetOneUserRequest } from "../User/adapters/controllers/getOneUser/getOneUser.request";
import { UpdateUserControllerInterface } from "../User/adapters/controllers/updateUser/updateUser.controller.interface";
import { UpdateUserSimpleController } from "../User/adapters/controllers/updateUser/updateUser.controller.simple";
import { UpdateUserRequest } from "../User/adapters/controllers/updateUser/updateUser.request";
import { UserRepositoryMock } from "../User/adapters/gateways/user.repository.mock";
import { BooleanPresenter } from "../User/adapters/presenters/boolean.presenter";
import { BooleanPresenterInterface } from "../User/adapters/presenters/boolean.presenter.interface";
import { BooleanViewModel } from "../User/adapters/presenters/boolean.viewModel";
import { NumberPresenter } from "../User/adapters/presenters/number.presenter";
import { NumberPresenterInterface } from "../User/adapters/presenters/number.presenter.interface";
import { NumberViewModel } from "../User/adapters/presenters/number.viewModel";
import { UserPresenter } from "../User/adapters/presenters/user.presenter";
import { UserPresenterInterface } from "../User/adapters/presenters/user.presenter.interface";
import { UserViewModel } from "../User/adapters/presenters/user.viewModel";
import { UserListPresenter } from "../User/adapters/presenters/userList.presenter";
import { UserListPresenterInterface } from "../User/adapters/presenters/userList.presenter.interface";
import { UserListViewModel } from "../User/adapters/presenters/userList.viewModel";
import { UserInterface } from "../User/entities/user.interface";
import { Filter } from "../User/usecases/filter.type";
import { UserRepositoryInterface } from "../User/usecases/user.repository.interface";
import { UuidGeneratorInterface } from "../User/usecases/uuid.generator.interface";

class SimpleApp {

    private _createUserController: CreateUserControllerInterface
    private _updateUserController: UpdateUserControllerInterface
    private _countController: CountControllerInterface
    private _deleteUserController: DeleteUserControllerInterface
    private _getOneUserController: GetOneUserControllerInterface
    private _getManyUsersController: GetManyUserControllerInterface
    
    constructor(
        userRepository: UserRepositoryInterface, 
        uuidGenerator: UuidGeneratorInterface, 
        userPresenter: UserPresenterInterface,
        userListPresenter: UserListPresenterInterface,
        numberPresenter: NumberPresenterInterface,
        booleanPresenter: BooleanPresenterInterface,
        ) {
        this._createUserController = new CreateUserSimpleController(userRepository, uuidGenerator, userPresenter)
        this._updateUserController = new UpdateUserSimpleController(userRepository, userPresenter)
        this._countController = new CountSimpleController(userRepository, numberPresenter)
        this._deleteUserController = new DeleteUserSimpleController(userRepository, booleanPresenter)
        this._getOneUserController = new GetOneUserSimpleController(userRepository, userPresenter)
        this._getManyUsersController = new GetManyUserSimpleController(userRepository, userListPresenter)
    }

    public async getOneUser(filter: Filter): Promise<UserViewModel> {
        const getOneUserRequest: GetOneUserRequest = filter

        return this._getOneUserController.run(getOneUserRequest)
    }

    public async getManyUsers(filter: Filter): Promise<UserListViewModel> {
        const getManyUserRequest: GetManyUserRequest = filter
        return this._getManyUsersController.run(getManyUserRequest)
    }

    public async count(filter: Filter): Promise<NumberViewModel> {
        const countRequest: CountRequest = filter

        const response = await this._countController.run(countRequest)

        return response
    }

    public async createUser(email: string, phone: string, nick: string): Promise<UserViewModel> {
        const createUserRequest: CreateUserRequest = { email, phone, nick }

        const response = await this._createUserController.run(createUserRequest)

        return response
    }

    public async updateUser(filter: Filter, user: UserInterface): Promise<UserViewModel> {
        const updateUserRequest: UpdateUserRequest = { filter, user }

        const response = await this._updateUserController.run(updateUserRequest)

        return response
    }

    public async deleteUser(filter: Filter): Promise<BooleanViewModel> {
        return this._deleteUserController.run(filter)
    }
}

(async () => {
    console.log('Creating Simple App...')
    
    const myUserRepository = new UserRepositoryMock()
    const myUuidGenerator = new UuidGenerator()
    const myUserPresenter = new UserPresenter()
    const myUserListPresenter = new UserListPresenter()
    const myNumberPresenter = new NumberPresenter()
    const myBooleanPresenter = new BooleanPresenter()
    
    const mySimpleApp = new SimpleApp(myUserRepository, myUuidGenerator, myUserPresenter, myUserListPresenter, myNumberPresenter, myBooleanPresenter)
    
    console.log('SimpleApp Created OK!')
    
    console.log('--> Executing create User...')
    const userCreated = await mySimpleApp.createUser('myEmail', '+34666666666', 'myNick')
    console.log(`user Created: ${JSON.stringify(userCreated)}`)

    console.log('--> Executing update User...')
    const userUpdated = await mySimpleApp.updateUser({}, { id: '1234', email: 'myEmail', phone: '+34666555444', nick: 'myNick'})
    console.log(`user Updated: ${JSON.stringify(userUpdated)}`)

    console.log('--> Executing count...')
    const count = await mySimpleApp.count({})
    console.log(`count: ${count}`)

    console.log('--> Executing get One...')
    const userFound = await mySimpleApp.getOneUser({})
    console.log(`userFound: ${JSON.stringify(userFound)}`)

    console.log('--> Executing get Many Users...')
    const userListFound = await mySimpleApp.getManyUsers({})
    console.log(`userListFound: ${JSON.stringify(userListFound)}`)

    console.log('--> Executing delete User...')
    const deletionResult = await mySimpleApp.deleteUser({})

    console.log(`deletionResult: ${deletionResult}`)
})()
