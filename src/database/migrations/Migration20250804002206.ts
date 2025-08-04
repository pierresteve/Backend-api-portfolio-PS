import { Migration } from '@mikro-orm/migrations';

export class Migration20250804002206 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table "contact" ("id" text not null, "name" text null, "email" text null, "telephone" text null, "message" text null, "created_at" timestamptz null default now(), "updated_at" timestamptz null default now(), "deleted_at" timestamptz null, constraint "contact_pkey" primary key ("id"));`);
  }

  override async down(): Promise<void> {
    this.addSql('drop table if exists "contact" cascade;');
  }
}
