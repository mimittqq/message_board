import { Entity, PrimaryColumn, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({
  name: 'tbl_message',
})
export class Message {
  @PrimaryGeneratedColumn()
  id!: number;
  
  @Column({
    length: 10,
  })
  nickname!: string;

  @Column({
    length: 255,
  })
  content!: string;

  @Column({
    length: 15,
  })
  ip!: string;

  @Column({
    type: 'int',
  })
  create_time!: number;

  @Column({
    type: 'int',
  })
  update_time!: number;
}