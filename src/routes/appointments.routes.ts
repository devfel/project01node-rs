import { Router } from "express";
import { v4 as uuid } from "uuid";
import { startOfHour, parseISO, isEqual } from "date-fns";

interface Appointment {
  id: string;
  provider: string;
  date: Date;
}

const appointmentsRouter = Router();
const appointments: Appointment[] = [];

appointmentsRouter.post("/", (request, response) => {
  const { provider, date } = request.body;

  const parsedDate = startOfHour(parseISO(date));
  const findAppointInSameDate = appointments.find((appoint) => isEqual(parsedDate, appoint.date));

  if (findAppointInSameDate) {
    return response.status(400).json({ message: "This appointment is already booked" });
  }

  const appointment = {
    id: uuid(),
    provider,
    date: parsedDate,
  };

  appointments.push(appointment);
  return response.json(appointment);
});

export default appointmentsRouter;
