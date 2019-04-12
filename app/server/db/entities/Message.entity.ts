import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
    type: 'timestamp',
  })
  create_time!: number;

  @Column({
    type: 'timestamp',
  })
  update_time!: number;
}