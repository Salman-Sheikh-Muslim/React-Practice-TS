import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; //
import interactionPlugin from "@fullcalendar/interaction";

const handleDateClick = (arg: any) => {
  alert(arg.dateStr);
  console.log("date clicked");
};

const CalendarIntegration = () => {
  return (
    <>
      {/* <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
      /> */}

      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        dateClick={handleDateClick}
        initialView="dayGridMonth"
        weekends={false}
        events={[
          { title: "event 1", date: "2024-03-01" },
          { title: "event 2", date: "2024-03-01" },
        ]}
      />
    </>
  );
};

export default CalendarIntegration;
