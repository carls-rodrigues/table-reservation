import { Entity } from '@/restaurant/domain/model/entity'

export abstract class BaseEntity<T> extends Entity<T> {
  private readonly isModified: boolean
  constructor (id: T, name: string) {
    super(id, name)
    this.isModified = false
  }

  getIsModified (): boolean {
    return this.isModified
  }
}
