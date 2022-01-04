import { SigningBySecretUC } from "../ports/input/SigningBySecretUC";
import { Filter } from "../ports/output/Filter";
import { SecurityHelper } from "../ports/output/SecurityHelper";
import { UserRepository } from "../ports/output/UserRepository";
import { AuthPayload } from "../shared/AuthPayload";
import { ErrorsUC } from "../shared/Errors";


export class SigningBySecretUCImpl implements SigningBySecretUC {

    private _userRepository: UserRepository
    private _securityHelper: SecurityHelper

    constructor(userRepository: UserRepository, securityHelper: SecurityHelper) {
        this._userRepository = userRepository
        this._securityHelper = securityHelper
    }

    async execute(email: string, secret: string): Promise<AuthPayload> {
        // TODO check las propiedades de entrada...no se si hacerlo aquí o en otra funcion previa
        
        const userFound = await this._userRepository.getOne(new Filter({ email }))
        if (!userFound) {
            throw new Error(ErrorsUC.ERROR_USER_NOT_FOUND_BY_EMAIL)
        }

        const secretAreEquals = await this._securityHelper.compareSecrets(secret, userFound.email)
        if (!secretAreEquals) {
            throw new Error(ErrorsUC.ERROR_SECRET_NOT_VALID)
        }

        const authPayload = new AuthPayload(userFound.id, userFound.email, userFound.roles)

        return authPayload
    } 
}