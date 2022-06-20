import { ReadOnlyBaseService } from './ReadOnlyBaseService'
import { Repository } from '@/restaurant/domain/repository'

export class BaseService<TE, T> extends ReadOnlyBaseService<TE, T> {
  readonly _repository: Repository<TE, T>
  constructor (repository: Repository<TE, T>) {
    super(repository)
    this._repository = repository
  }

  public add (entity: TE): void {
    this._repository.add(entity)
  }

  public getAll (): any[] {
    return this._repository.getAll()
  }
}
