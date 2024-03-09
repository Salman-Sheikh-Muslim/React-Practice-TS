import React, { useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import { EventApi } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const YourComponent: React.FC = () => {
  const calendarRef = useRef<FullCalendar>(null); // Set initial value to null

  const calendarOptions = {
    header: false,

    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    editable: true,
    eventRender: (info: { event: EventApi; el: HTMLElement }) => {
      const eventProducts = info.event.extendedProps.products;
      eventProducts.forEach((product: { name: string }) => {
        info.el.appendChild(document.createElement("span")).textContent =
          product.name;
      });
    },
    events: [
      // Your events here
    ],
    dayClick: (date: any, allDay: any, jsEvent: any, view: any) => {
      console.log(
        `date ${date.format("DD/MMM/YYYY")} allDay ${
          allDay.title
        } jsEvent ${jsEvent} view ${view}`
      );
    },
  };

  return (
    <div>
      <div className="custom-header">
        <button
          className="fc-prev-button fc-button fc-state-default fc-corner-left"
          onClick={() => calendarRef.current?.getApi().prev()}
        >
          <span className="fc-icon fc-icon-left-single-arrow"></span>
        </button>
        <button
          className="fc-next-button fc-button fc-state-default fc-corner-right"
          onClick={() => calendarRef.current?.getApi().next()}
        >
          <span className="fc-icon fc-icon-right-single-arrow"></span>
        </button>
        {/* <h2>January 2019</h2> */}
      </div>
      <FullCalendar ref={calendarRef} {...calendarOptions} />
    </div>
  );
};

export default YourComponent;
