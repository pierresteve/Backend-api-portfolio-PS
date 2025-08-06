import { Get, Module } from '@nestjs/common';
import { ContactController } from '../presenters/http/contact.controller';
import { ContactService } from './contact.service';
import { GetAllContactUseCase } from './use-cases/get-all-contact.use-case';
import { ContactRepository } from '../infrastructure/persistence/ORM/repositories/contact.repository';
import { CreateContactUseCase } from './use-cases/create-contact.use-case';
import { SoftDeleteUseCase } from './use-cases/soft-delete.use-case';

@Module({
    imports: [],
    controllers: [
        ContactController,
    ],
    
    providers: [
        ContactService,
        GetAllContactUseCase,
        CreateContactUseCase,
        SoftDeleteUseCase,
        {
            provide: 'ContactRepositoryPort',
            useClass: ContactRepository, 
        }
    ],
    exports: [
        ContactService,
        GetAllContactUseCase,
        CreateContactUseCase
    ]
})
export class ContactModule {}
