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

const EVENTS1 = [
  {
    id: createEventId(),
    title: "event 4",
    date: "2024-04-01",
    start: "2024-04-06T10:30:00",
    end: "2024-04-07T01:30:00",
    backgroundColor: "#74AAEB",
  },

  {
    id: createEventId(),
    title: "event 5",
    date: "2024-04-01",
    start: "2024-04-10T11:45:00",
    end: "2024-04-11T12:30:00",
    color: "#00FF00",
  },
];

export default EVENTS1;
