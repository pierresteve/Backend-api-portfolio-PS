import { Inject, Injectable } from "@nestjs/common";
import type { ContactRepositoryPort } from "src/contact/domain/ports/contact-repository.port";
import { Contact } from "src/contact/infrastructure/persistence/ORM/entities/contact.entity";
import CreateContactDto from "src/contact/presenters/http/dto/contact.dto";

@Injectable()
export class CreateContactUseCase{
    constructor(
        @Inject("ContactRepositoryPort") private readonly contactRepository: ContactRepositoryPort,
    ){}

   async execute(dto: CreateContactDto){
        return await this.contactRepository.save(dto)
    }
}