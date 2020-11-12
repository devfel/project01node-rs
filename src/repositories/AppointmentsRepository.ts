import { isEqual } from "date-fns";
import Appointment from "../models/Appointment";

class AppointmentsRepository {
  appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  public all(): Appointment[] {
    return this.appointments;
  }

  public findByDate(date: Date): Appointment | null {
    const findAppointInSameDate = this.appointments.find((appoint) => isEqual(date, appoint.date));
    return findAppointInSameDate || null;
  }

  public create(provider: string, date: Date): Appointment {
    const appointment = new Appointment(provider, date);
    this.appointments.push(appointment);

    return appointment;
  }
}

export default AppointmentsRepository;
