import { EntityInterface } from "../../Shared/entities/Entity.interface";

export interface UserInterface extends EntityInterface {
    email: string
    phone: string
    nick: string
}