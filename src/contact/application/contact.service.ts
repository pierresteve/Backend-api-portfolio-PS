import { Injectable } from '@nestjs/common';
import { GetAllContactUseCase } from './use-cases/get-all-contact.use-case';

@Injectable()
export class ContactService {
    constructor(
        private readonly getAllContactUseCase: GetAllContactUseCase,
    ){}
    async getAllContact(){
        return await this.getAllContactUseCase.execute();
    }
}
