import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("appointments")
class Appointment {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column() //default is varChar
  provider: string;

  @Column("timestamp with time zone")
  date: Date;
}

export default Appointment;
