import { Entity, PrimaryKey, Property, BeforeCreate, OnInit } from '@mikro-orm/core';
import { generateId } from '../../../../../common/utils/generate-id';

const tableName = 'contact';

@Entity({ tableName })
export class Contact {
  @PrimaryKey({ columnType: 'text' })
  id!: string;

  @Property({ columnType: 'text', nullable: true })
  name?: string;

  @Property({ columnType: 'text', nullable: true })
  email?: string;

  @Property({ columnType: 'text', nullable: true })
  telephone!: string;

  @Property({ columnType: 'text', nullable: true })
  message!: string;

  @Property({
    onCreate: () => new Date(),
    columnType: 'timestamptz',
    defaultRaw: 'now()',
  })
  createdAt?: Date;

  @Property({
    onCreate: () => new Date(),
    onUpdate: () => new Date(),
    columnType: 'timestamptz',
    defaultRaw: 'now()',
  })
  updatedAt?: Date;

  @Property({ columnType: 'timestamptz', nullable: true })
  deletedAt?: Date | null = null;

  @BeforeCreate()
  onCreate() {
    this.id = generateId(this.id);
  }

  @OnInit()
  onInit() {
    this.id = generateId(this.id);
  }
}