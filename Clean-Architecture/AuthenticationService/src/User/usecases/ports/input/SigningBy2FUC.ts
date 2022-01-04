import { Phone } from "../../../entities/Phone";
import { AuthPayload } from "../../shared/AuthPayload";

export interface SigningBy2FUC {
    execute(email: string, phone: Phone, authcodeEmail: string, authcodePhone: string): Promise<AuthPayload>
}