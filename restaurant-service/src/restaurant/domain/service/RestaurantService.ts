import { BaseService } from '../service/BaseService'
import { Restaurant } from '@/restaurant/domain/model/entity'
import { RestaurantRepository } from '@/restaurant/domain/repository'

export class RestaurantService extends BaseService<Restaurant, number> {
  readonly restaurantRepository: RestaurantRepository<Restaurant, string>
  constructor (repository: RestaurantRepository<any, any>) {
    super(repository)
    this.restaurantRepository = repository
  }

  public override add (restaurant: Restaurant): void {
    if (this.restaurantRepository.containsName(restaurant.getName())) {
      throw new Error('Restaurant already exists')
    }
    if (!restaurant.getName()) {
      throw new Error('Restaurant name is required')
    }
    super.add(restaurant)
  }

  public override getAll (): any[] {
    return super.getAll()
  }
}
