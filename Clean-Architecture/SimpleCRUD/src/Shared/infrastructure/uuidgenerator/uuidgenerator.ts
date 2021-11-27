import { v4 as uuidv4 } from 'uuid';

import { UuidGeneratorInterface } from "../../../User/usecases/uuid.generator.interface";

export class UuidGenerator implements UuidGeneratorInterface {
    
    public generate(): string {
        return uuidv4()
    }
}