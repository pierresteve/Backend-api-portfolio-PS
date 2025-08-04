/**
 * IContactRepositoryPort
 * 
 * @description Interface that defines the contract for contact repositories
 */
export interface IContactRepositoryPort {
  /**
   * Find entity by id
   * 
   * @param id The entity id
   * @returns The entity or null if not found
   */
  findById(id: string): Promise<any>;

  /**
   * Find all entities
   * 
   * @returns Array of entities
   */
  findAll(): Promise<any[]>;

  /**
   * Create a new entity
   * 
   * @param data The entity data
   * @returns The created entity
   */
  create(data: any): Promise<any>;

  /**
   * Update an entity
   * 
   * @param id The entity id
   * @param data The data to update
   * @returns The updated entity
   */
  update(id: string, data: any): Promise<any>;

  /**
   * Delete an entity
   * 
   * @param id The entity id
   * @returns True if deleted successfully
   */
  delete(id: string): Promise<boolean>;
}