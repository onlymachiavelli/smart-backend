import { Entity, BaseEntity, Column, PrimaryColumn } from "typeorm"

@Entity()
class Admins extends BaseEntity {
  @PrimaryColumn()
  cin: String

  @Column({
    nullable: false,
    unique: false,
  })
  fullname: String

  @Column({
    nullable: false,
    unique: true,
  })
  email: String

  @Column({
    nullable: false,
    unique: true,
  })
  phone: String

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
  adress: String

  @Column({
    nullable: false,
    unique: false,
  })
  createdat: Date

  @Column({
    nullable: false,
    unique: false,
    enum: ["boss", "seller", "prodStock"],
  })
  role: String
}

export default Admins
/*

create table admins (cin primary key varchar  , fullname varchar not null , email varchar not null unique , phone varchar not null unique , sex gender not null , adress  varchar not null , createdat date not null ,role adminrole);
*/
