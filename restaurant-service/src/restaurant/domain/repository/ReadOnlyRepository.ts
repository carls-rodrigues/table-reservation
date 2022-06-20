export interface ReadOnlyRepository<TE, T> {
  contains(id: T): boolean
  get(id: T): TE
  getAll(): TE[]
}
