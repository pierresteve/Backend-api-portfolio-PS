import { Inject, Injectable, Logger, Scope } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/postgresql';
import { ContactRepositoryPort } from '../../../../domain/ports/contact-repository.port';

import { Contact } from '../entities/contact.entity';
import CreateContactDto from 'src/contact/presenters/http/dto/contact.dto';

@Injectable({ scope: Scope.REQUEST })
export class ContactRepository implements ContactRepositoryPort {
  logger = new Logger(ContactRepository.name);
  constructor(@Inject(EntityManager) private readonly em: EntityManager) {}

  async findById(id: string): Promise<Contact | null> {
    return this.em.findOne(Contact, { id });
  }

  async findAll(): Promise<Contact[]> {
    const contacts = await this.em.find(Contact, {deletedAt: null});
    this.logger.verbose('Contacts found:', contacts);
    return contacts;
  }

  async save(dto: CreateContactDto){
    this.logger.verbose(dto)
    const contact = this.em.create(Contact,{...dto});
    await this.em.persistAndFlush(contact);
    return contact;
  }

  async update(id: string, entityData: Partial<Contact>): Promise<Contact> {
    const entity = await this.findById(id);
    if (!entity) throw new Error('Entity not found');
    
    Object.assign(entity, entityData);
    await this.em.persistAndFlush(entity);
    return entity;
  }

  async softDelete(id: string): Promise<Contact> {
    const contact = await this.em.findOne(Contact, {id});
    if (!contact){
       throw new Error("Contact not found");
    } 
    this.em.assign(contact, {deletedAt: new Date()});

    await this.em.flush()
    return contact;
  }
}