import { ReadOnlyRepository } from '@/restaurant/domain/repository'

export abstract class ReadOnlyBaseService<TE, T> {
  protected readonly repository: ReadOnlyRepository<TE, T>
  constructor (repository: ReadOnlyRepository<TE, T>) {
    this.repository = repository
  }
}
