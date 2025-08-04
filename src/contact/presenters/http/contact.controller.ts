import { Controller, Get } from '@nestjs/common';
import { ContactService } from 'src/contact/application/contact.service';

@Controller('contacts')
export class ContactController {
    constructor (
        private readonly contactService: ContactService
    ){}
    @Get()
    getAll(){
        return this.contactService.getAllContact();
    }
}
