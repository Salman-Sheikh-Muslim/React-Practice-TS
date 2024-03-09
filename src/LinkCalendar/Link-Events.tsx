import { formatDate } from "@fullcalendar/core";
import { createEventId } from "../FullCalendar/Events";

const str = formatDate(new Date(), {
  month: "long",
  year: "numeric",
  day: "numeric",
  timeZoneName: "short",
  timeZone: "UTC",
  locale: "es",
});

const EVENTS = [
  {
    id: createEventId(),
    title: "event 1",
    date: "2024-04-01",
    start: "2024-04-01T10:30:00",
    end: "2024-04-02T01:30:00",
    backgroundColor: "#74AAEB",
  },

  {
    id: createEventId(),
    title: "event 2",
    date: "2024-04-01",
    start: "2024-04-01T11:45:00",
    end: "2024-04-01T12:30:00",
    color: "#00FF00",
  },
  {
    id: createEventId(),
    title: "event 3",
    date: "2024-04-03",
    start: "2024-04-03",
    end: "2024-04-01",
    color: "#00FF00",
    textColor: "black",
  },
];

export default EVENTS;
