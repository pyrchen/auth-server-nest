import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
	@PrimaryGeneratedColumn({ type: 'integer' })
	public id: number;

	@Column({ unique: true, nullable: false })
	public username: string;

	@Column({ nullable: false })
	public password: string;

	@Column({ nullable: false, unique: true })
	public email: string;
}