import { Repository } from '@/restaurant/domain/repository'

export interface RestaurantRepository<Restaurant, String> extends Repository<Restaurant, String> {
  containsName(name: string): boolean
}
