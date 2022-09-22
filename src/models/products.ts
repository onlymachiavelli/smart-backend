import { Entity, PrimaryColumn, Column, BaseEntity } from "typeorm"

@Entity()
class Products extends BaseEntity {
  @PrimaryColumn()
  id: String
  @Column({
    nullable: false,
  })
  title: String

  @Column({
    nullable: false,
    unique: false,
  })
  model: String

  @Column({
    nullable: false,
    unique: false,

    enum: ["male", "female"],
  })
  gender: String

  @Column({
    nullable: false,
    unique: false,
  })
  description: String
}

export default Products
