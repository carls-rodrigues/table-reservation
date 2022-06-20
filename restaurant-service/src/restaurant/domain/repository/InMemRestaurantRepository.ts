import { Restaurant } from '@/restaurant/domain/model/entity'
import { RestaurantRepository } from '@/restaurant/domain/repository'

export class InMemRestaurantRepository implements RestaurantRepository<Restaurant, string> {
  readonly entities: Map<string, Restaurant>
  constructor () {
    this.entities = new Map()
  }

  containsName (name: string): boolean {
    return this.entities.has(name)
  }

  add (restaurant: Restaurant): void {
    this.entities.set(restaurant.getName(), restaurant)
  }

  remove (id: string): void {
    if (this.entities.has(id)) {
      this.entities.delete(id)
    }
  }

  update (restaurant: Restaurant): void {
    if (this.entities.has(restaurant.getName())) {
      this.entities.set(restaurant.getName(), restaurant)
    }
  }

  contains (id: string): boolean {
    throw new Error('Method not implemented.')
  }

  get (id: string): Restaurant {
    throw new Error('Method not implemented.')
  }

  getAll (): any[] {
    const arr: any = []
    this.entities.forEach(restaurant => arr.push(restaurant))
    return arr
  }
}
