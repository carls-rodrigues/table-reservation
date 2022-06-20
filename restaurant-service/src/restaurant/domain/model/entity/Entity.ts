export abstract class Entity<T> {
  private readonly id: T
  private readonly name: string
  constructor (id: T, name: string) {
    this.id = id
    this.name = name
  }

  getId (): T {
    return this.id
  }

  getName (): string {
    return this.name
  }
}
