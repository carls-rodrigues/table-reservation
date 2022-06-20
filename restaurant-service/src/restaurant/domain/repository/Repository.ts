import { ReadOnlyRepository } from '@/restaurant/domain/repository'

export interface Repository<TE, T> extends ReadOnlyRepository<TE, T> {
  add(entity: TE): void
  remove(id: T): void
  update(entity: TE): void
}
