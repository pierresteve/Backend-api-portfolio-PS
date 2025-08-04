import { Get, Module } from '@nestjs/common';
import { ContactController } from '../presenters/http/contact.controller';
import { ContactService } from './contact.service';
import { GetAllContactUseCase } from './use-cases/get-all-contact.use-case';
import { ContactRepository } from '../infrastructure/persistence/ORM/repositories/contact.repository';

@Module({
    imports: [],
    controllers: [
        ContactController,
    ],
    
    providers: [
        ContactService,
        GetAllContactUseCase,
        {
            provide: 'ContactRepositoryPort',
            useClass: ContactRepository, 
        }
    ],
    exports: [
        ContactService,
        GetAllContactUseCase
    ]
})
export class ContactModule {}
