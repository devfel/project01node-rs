import { Router } from "express";
import { startOfHour, parseISO, isEqual } from "date-fns";
import Appointment from "../models/Appointment";

const appointmentsRouter = Router();
const appointments: Appointment[] = [];

appointmentsRouter.post("/", (request, response) => {
  const { provider, date } = request.body;

  const parsedDate = startOfHour(parseISO(date));
  const findAppointInSameDate = appointments.find((appoint) => isEqual(parsedDate, appoint.date));

  if (findAppointInSameDate) {
    return response.status(400).json({ message: "This appointment is already booked" });
  }

  const appointment = new Appointment(provider, parsedDate);

  appointments.push(appointment);
  return response.json(appointment);
});

export default appointmentsRouter;
