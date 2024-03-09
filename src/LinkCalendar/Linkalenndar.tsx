import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; //
import timeGridPlugin from "@fullcalendar/timegrid"; //
import interactionPlugin from "@fullcalendar/interaction";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";
import EVENTS from "./Link-Events";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { createEventId } from "../FullCalendar/Events";
import { DateSelectArg, EventClickArg } from "fullcalendar/index.js";
import multiMonthPlugin from "@fullcalendar/multimonth";

const handleDateClick = (arg: any) => {
  alert(arg.dateStr);
  console.log("date clicked");
};

const handleDateSelect = (selectInfo: DateSelectArg) => {
  let title = prompt("Please enter a new title for your event");
  let calendarApi = selectInfo.view.calendar;

  calendarApi.unselect(); // clear date selection

  if (title) {
    calendarApi.addEvent({
      id: createEventId(),
      title,
      date: Date(),
      start: selectInfo.startStr,
      end: selectInfo.endStr,
      allDay: selectInfo.allDay,
    });
  }
};

const handleEventClick = (clickInfo: EventClickArg) => {
  if (
    confirm(
      `Are you sure you want to delete the event '${clickInfo.event.title}'`
    )
  ) {
    clickInfo.event.remove();
  }
};

const handleViewChange = (view: string) => {
  // Handle the selected view change as needed
  console.log("Selected view:", view);
};

const LinkCalenndar = () => {
  return (
    <>
      <FullCalendar
        plugins={[
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin,
          bootstrap5Plugin,
          multiMonthPlugin,
        ]}
        eventClick={handleEventClick}
        select={handleDateSelect}
        // dateClick={handleDateClick}
        initialView="dayGridMonth"
        weekends={true}
        events={EVENTS}
        eventTimeFormat={{
          // like '14:30:00'
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          meridiem: false,
        }}
        // eventColor="#378006"
        themeSystem="bootstrap5"
        height="650px"
        headerToolbar={{
          start: "timeGridDay,dayGridMonth,timeGridWeek,multiMonthYear",
          center: "prev,title,next",
          end: "today",
        }}
        editable={true}
        selectable={true}
      />
    </>
  );
};

export default LinkCalenndar;
