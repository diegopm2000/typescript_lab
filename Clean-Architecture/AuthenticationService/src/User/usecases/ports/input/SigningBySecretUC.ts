import { AuthPayload } from "../../shared/AuthPayload";

export interface SigningBySecretUC {
    execute(email: string, secret: string): Promise<AuthPayload>
}