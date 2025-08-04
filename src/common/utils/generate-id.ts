import { ulid } from 'ulid';
import { v4 as uuidv4 } from 'uuid';
import { customAlphabet } from 'nanoid';

export enum EntityIdType {
  UUID = 'uuid',
  ULID = 'ulid',
}
/**
 * Generate a composed id based on the input parameters and return either the is if it exists or the generated one.
 * @param idProperty
 * @param prefix
 * @param type
 */
export function generateId(
  idProperty?: string,
  prefix?: string,
  type: EntityIdType = EntityIdType.UUID,
): string {
  if (idProperty) {
    return idProperty;
  }
  prefix = prefix ? `${prefix}_` : '';

  if (type === EntityIdType.UUID) {
    return `${prefix}${uuidv4()}`;
  } else {
    return `${prefix}${ulid()}`;
  }
}
