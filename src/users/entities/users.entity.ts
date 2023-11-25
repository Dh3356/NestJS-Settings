import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsString, Matches } from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: number;

  @Column({ select: false })
  @IsString()
  @Matches(/^(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/, {
    message:
      'Password must be at least 8 characters(en) long, contain 1 number',
  })
  password!: string;
}
