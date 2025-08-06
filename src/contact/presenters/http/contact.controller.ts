import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ContactService } from 'src/contact/application/contact.service';
import CreateContactDto from './dto/contact.dto';
import { Contact } from 'src/contact/infrastructure/persistence/ORM/entities/contact.entity';

@Controller('contacts')
export class ContactController {
    constructor (
        private readonly contactService: ContactService
    ){}
    @Get()
    getAll(){
        return this.contactService.getAllContact();
    }

    @Post()
    create(@Body() dto: CreateContactDto){
        return this.contactService.createContact(dto);
    }

    @Delete(':id')
    softDelete(@Param("id") id: string){
        return this.contactService.softDelete(id);
    }
}
