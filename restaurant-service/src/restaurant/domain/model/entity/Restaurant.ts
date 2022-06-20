import { Table, BaseEntity } from '@/restaurant/domain/model/entity'

export class Restaurant extends BaseEntity<string> {
  private readonly tables: Table[]
  constructor (id: string, name: string, tables: Table[]) {
    super(id, name)
    this.tables = tables
  }

  getTables (): Table[] {
    return this.tables
  }

  addTables (table: Table): void {
    this.tables.push(table)
  }
}
