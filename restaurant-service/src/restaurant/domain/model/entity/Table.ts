import { BaseEntity } from '@/restaurant/domain/model/entity'

export class Table extends BaseEntity<number> {
  private readonly capacity: number
  constructor (id: number, name: string, capacity: number) {
    super(id, name)
    this.capacity = capacity
  }

  getCapacity (): number {
    return this.capacity
  }
}
