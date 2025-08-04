import { Inject, Injectable } from "@nestjs/common";
import type { ContactRepositoryPort } from "../../domain/ports/contact-repository.port";

@Injectable()
export class GetAllContactUseCase{
    constructor(
       @Inject("ContactRepositoryPort") private readonly contactRepository: ContactRepositoryPort,
    ){}

    async execute(){
        const contact = await this.contactRepository.findAll();
    }
}