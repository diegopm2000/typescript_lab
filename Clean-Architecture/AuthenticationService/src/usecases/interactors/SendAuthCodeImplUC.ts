import { AuthCode } from "../../entities/AuthCode";
import { AuthCodeType } from "../../entities/AuthCodeType";
import { Phone } from "../../entities/Phone";
import { Uuid } from "../../entities/Uuid";
import { SendAuthCodeUC } from "../ports/input/SendAuthCodeUC";
import { AuthCodeRepository } from "../ports/output/AuthCodeRepository";
import { Filter } from "../ports/output/Filter";
import { SecurityHelper } from "../ports/output/SecurityHelper";
import { UserRepository } from "../ports/output/UserRepository";
import { ErrorsUC } from "../shared/Errors";

export class SendAuthCodeImplUC implements SendAuthCodeUC {

    private _userRepository: UserRepository
    private _authCodeRepository: AuthCodeRepository
    private _securityHelper: SecurityHelper

    constructor(userRepository: UserRepository, authCodeRepository: AuthCodeRepository, securityHelper: SecurityHelper) {
        this._userRepository = userRepository
        this._authCodeRepository = authCodeRepository
        this._securityHelper = securityHelper
    }

    private async executeLoginCase(email: string, phone: Phone, productionMode: boolean): Promise<boolean> {
        const userFound = await this._userRepository.getOne(new Filter({ email }))
        if (!userFound) {
            throw new Error(ErrorsUC.ERROR_USER_NOT_FOUND_BY_EMAIL)
        }
        if (!userFound.customerData || userFound.customerData.phone.equals(phone)) {
            throw new Error(ErrorsUC.ERROR_USER_NOT_FOUND_BY_PHONE)
        }

        let code = this._securityHelper.generateAuthCode(productionMode)
        const newAuthCodeByEmail = new AuthCode({ id: Uuid.random(), email, code, codeType: AuthCodeType.LOGIN })
        await this._authCodeRepository.save(newAuthCodeByEmail);

        code = this._securityHelper.generateAuthCode(productionMode)
        const newAuthCodeByPhone = new AuthCode({ id: Uuid.random(), phone, code, codeType: AuthCodeType.LOGIN })
        await this._authCodeRepository.save(newAuthCodeByPhone);

        return true
    }

    private async executeRegisterCase(email: string, phone: Phone, productionMode: boolean): Promise<boolean> {
        const userFound = await this._userRepository.getOne(new Filter({ email }))
        if (!userFound) {
            throw new Error(ErrorsUC.ERROR_USER_NOT_FOUND_BY_EMAIL)
        }

        if (!userFound.customerData || userFound.customerData.phone.equals(phone)) {
            throw new Error(ErrorsUC.ERROR_USER_NOT_FOUND_BY_PHONE)
        }

        let code = this._securityHelper.generateAuthCode(productionMode)
        const newAuthCodeByEmail = new AuthCode({ id: Uuid.random(), email, code, codeType: AuthCodeType.REGISTER })
        await this._authCodeRepository.save(newAuthCodeByEmail);

        code = this._securityHelper.generateAuthCode(productionMode)
        const newAuthCodeByPhone = new AuthCode({ id: Uuid.random(), phone, code, codeType: AuthCodeType.REGISTER })
        await this._authCodeRepository.save(newAuthCodeByPhone);

        return true
    }

    async execute(email: string, phone: Phone, authCodeType: AuthCodeType, productionMode: boolean): Promise<boolean> {
        // TODO check las propiedades de entrada...no se si hacerlo aquí o en otra funcion previa

        let result
        if (authCodeType === AuthCodeType.LOGIN) {
            result = await this.executeLoginCase(email, phone, productionMode)
        } else if (authCodeType === AuthCodeType.REGISTER) {
            result = await this.executeRegisterCase(email, phone, productionMode)
        } else {
            throw new Error(ErrorsUC.ERROR_AUTH_TYPE_NOT_VALID)
        }

        // TODO - generar los eventos correspondientes para que puedan llegar al miscelanea que es el servicio encargado de enviar sms y correo
        // Los eventos no tienen que depender de los consumidores, pero si que hay que poner la info correcta creando un tipo de evento con la info adecuada

        return result
    }
}