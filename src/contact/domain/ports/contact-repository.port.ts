import { Contact } from "src/contact/infrastructure/persistence/ORM/entities/contact.entity";
import CreateContactDto from "src/contact/presenters/http/dto/contact.dto";

/**
 * Port interface for Contact repository
 * 
 * @description This interface defines the contract that any Contact repository implementation must follow
 */
export interface ContactRepositoryPort {
  findById(id: string): Promise<Contact | null>;
  findAll(): Promise<Contact[]>;
  save(dto: CreateContactDto):Promise<any>;
  update(id: string, entity: Partial<Contact>): Promise<Contact>;
  softDelete(id: string): Promise<Contact>;
  // Add more methods as needed
}