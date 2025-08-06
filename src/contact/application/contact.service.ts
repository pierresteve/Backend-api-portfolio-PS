import { Injectable } from '@nestjs/common';
import { GetAllContactUseCase } from './use-cases/get-all-contact.use-case';
import ContactDto from '../presenters/http/dto/contact.dto';
import { CreateContactUseCase } from './use-cases/create-contact.use-case';
import { SoftDeleteUseCase } from './use-cases/soft-delete.use-case';

@Injectable()
export class ContactService {
    constructor(
        private readonly getAllContactUseCase: GetAllContactUseCase,
        private readonly createContactUseCase: CreateContactUseCase,
        private readonly softDeleteUseCase: SoftDeleteUseCase,
    ){}
    async getAllContact(){
        return await this.getAllContactUseCase.execute();
    }

    async createContact(dto: ContactDto){
       return await this.createContactUseCase.execute(dto);
    }

    async softDelete(id: string){
        return await this.softDeleteUseCase.execute(id);
    }
}
