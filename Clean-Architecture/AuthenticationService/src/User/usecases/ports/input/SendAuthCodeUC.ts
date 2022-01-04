import { AuthCodeType } from "../../../entities/AuthCodeType";
import { Phone } from "../../../entities/Phone";

export interface SendAuthCodeUC {
    execute(email: string, phone: Phone, authCodeType: AuthCodeType, productionMode: boolean): Promise<boolean>
}