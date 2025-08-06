import { Inject, Injectable } from "@nestjs/common";
import type { ContactRepositoryPort } from "../../domain/ports/contact-repository.port";

@Injectable()
export class SoftDeleteUseCase{
    constructor(
       @Inject("ContactRepositoryPort") private readonly contactRepository: ContactRepositoryPort,
    ){}

    async execute(id: string){
        try {
        
            return await this.contactRepository.softDelete(id);
            
        } catch (error) {
            throw error;
        }
    }
}