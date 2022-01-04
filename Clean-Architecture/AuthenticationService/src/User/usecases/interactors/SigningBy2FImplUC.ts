import { AuthCodeType } from "../../entities/AuthCodeType";
import { Phone } from "../../entities/Phone";
import { SigningBy2FUC } from "../ports/input/SigningBy2FUC";
import { AuthCodeRepository } from "../ports/output/AuthCodeRepository";
import { Filter } from "../ports/output/Filter";
import { SecurityHelper } from "../ports/output/SecurityHelper";
import { UserRepository } from "../ports/output/UserRepository";
import { AuthPayload } from "../shared/AuthPayload";
import { ErrorsUC } from "../shared/Errors";

export class SigningBy2FImplUC implements SigningBy2FUC {

    private _userRepository: UserRepository
    private _authCodeRepository: AuthCodeRepository
    private _securityHelper: SecurityHelper

    constructor(userRepository: UserRepository, authCodeRepository: AuthCodeRepository, securityHelper: SecurityHelper) {
        this._userRepository = userRepository
        this._authCodeRepository = authCodeRepository
        this._securityHelper = securityHelper
    }
 
    async execute(email: string, phone: Phone, authcodeEmail: string, authcodePhone: string): Promise<AuthPayload> {
        // TODO check las propiedades de entrada...no se si hacerlo aquí o en otra funcion previa
        
        const userFound = await this._userRepository.getOne(new Filter({ email }))
        if (!userFound) {
            throw new Error(ErrorsUC.ERROR_USER_NOT_FOUND_BY_EMAIL)
        }

        if (!userFound.customerData || userFound.customerData.phone.equals(phone)) {
            throw new Error(ErrorsUC.ERROR_USER_NOT_FOUND_BY_PHONE)
        }

        const authCodeFoundByEmail = await this._authCodeRepository.getOne(new Filter({ email, type: AuthCodeType.LOGIN }))
        if (!authCodeFoundByEmail) {
            throw new Error(ErrorsUC.ERROR_AUTHCODE_NOT_FOUND)
        }

        const authcodeFoundByPhone = await this._authCodeRepository.getOne(new Filter({ phone: phone.toString(), type: AuthCodeType.LOGIN }))
        if (!authcodeFoundByPhone) {
            throw new Error(ErrorsUC.ERROR_AUTHCODE_NOT_FOUND)
        }

        const authCodesByEmailAreEquals = await this._securityHelper.compareAuthCodes(authcodeEmail, authCodeFoundByEmail.code)
        if (!authCodesByEmailAreEquals) {
            throw new Error(ErrorsUC.ERROR_AUTHCODE_NOT_VALID)
        }

        const authCodesByPhoneAreEquals = await this._securityHelper.compareAuthCodes(authcodePhone, authcodeFoundByPhone.code)
        if (!authCodesByPhoneAreEquals) {
            throw new Error(ErrorsUC.ERROR_AUTHCODE_NOT_VALID)
        }

        const authPayload = new AuthPayload(userFound.id, userFound.email, userFound.roles)

        return authPayload
    }
}