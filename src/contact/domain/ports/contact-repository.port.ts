import { Contact } from "src/contact/infrastructure/persistence/ORM/entities/contact.entity";

/**
 * Port interface for Contact repository
 * 
 * @description This interface defines the contract that any Contact repository implementation must follow
 */
export interface ContactRepositoryPort {
  findById(id: string): Promise<Contact | null>;
  findAll(): Promise<Contact[]>;
  save(entity: Contact): Promise<Contact>;
  update(id: string, entity: Partial<Contact>): Promise<Contact>;
  delete(id: string): Promise<boolean>;
  // Add more methods as needed
}