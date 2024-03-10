import React, { useEffect, useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; //
import timeGridPlugin from "@fullcalendar/timegrid"; //
import interactionPlugin from "@fullcalendar/interaction";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";
import EVENTS from "./Link-Events";
import EVENTS1 from "./Link-Events1";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fullcalendar/bootstrap5";
import { createEventId } from "../FullCalendar/Events";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";

import {
  DateSelectArg,
  EventClickArg,
  EventContentArg,
} from "fullcalendar/index.js";
import multiMonthPlugin from "@fullcalendar/multimonth";
import {
  ArrowRight,
  ChevronDoubleLeft,
  ChevronDoubleRight,
  ChevronRight,
} from "react-bootstrap-icons";

const handleDateClick = (arg: any) => {
  alert(arg.dateStr);
  console.log("date clicked");
};

const handleDateSelect = (selectInfo: DateSelectArg) => {
  let title = prompt("Please enter a new title for your event");
  //TODO

  //Change this to store it in events array
  let calendarApi = selectInfo.view.calendar;
  console.log("calendarAPI: ", calendarApi);
  console.log("EVENTS:", EVENTS);

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

function renderEventContent(eventContent: EventContentArg) {
  return (
    <>
      <b>YB: {eventContent.timeText}</b>
      <i> {eventContent.event.title}</i>
    </>
  );
}
const LinkCalenndar = () => {
  const calendarRef = useRef<FullCalendar>(null);

  const [calendarTitle, setCalendarTitle] = useState<string>("");

  useEffect(() => {
    // Set the initial title when the component mounts
    setCalendarTitle(calendarRef.current?.getApi().view.title || "");
  }, []);

  const updateCalendarTitle = () => {
    setCalendarTitle(calendarRef.current?.getApi().view.title || "");
  };

  const combinedEvents = [...EVENTS, ...EVENTS1].map((event) => ({
    ...event,
    id: createEventId(), // create a new ID for each event
  }));

  const handleDropdownChange = (selectedView: string) => {
    calendarRef.current?.getApi().changeView(selectedView);
    updateCalendarTitle();
  };

  const dropdownOptions = [
    "timeGridDay",
    "dayGridMonth",
    "timeGridWeek",
    "multiMonthYear",
  ];
  const textDropDown = ["Day", "Month", "Week", "Year"];
  return (
    <>
      <div
        className="custom-header "
        style={{
          marginTop: "10px",
          padding: "10px",
        }}
      >
        <Row className="align-items-center justify-content-center">
          <Col lg={2} md={2} sm={2} xs={1} className="">
            <select
              className="btn"
              style={{ border: "2px solid", borderColor: "#0D6EFD" }}
              onChange={(e) => handleDropdownChange(e.target.value)}
            >
              {/* {dropdownOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))} */}
              <option key={1} value={dropdownOptions[0]}>
                {textDropDown[0]}
              </option>
              <option key={2} value={dropdownOptions[1]} selected>
                {textDropDown[1]}
              </option>
              <option key={3} value={dropdownOptions[2]}>
                {textDropDown[2]}
              </option>
              <option key={4} value={dropdownOptions[3]}>
                {textDropDown[3]}
              </option>
            </select>
          </Col>

          <Col lg={8} md={8} sm={8} xs={10} className="text-center ">
            <Button
              // style={{ marginTop: "-18px" }}
              className="me-3"
              onClick={() => {
                calendarRef.current?.getApi().prev();
                updateCalendarTitle();
              }}
            >
              <ChevronDoubleLeft color="white" size={20} />
            </Button>

            <h1
              style={{
                display: "inline-block",
                // fontWeight: "bold",
                fontSize: "30px",
                // padding: "0 10px",
              }}
            >
              {
                // calendarTitle === null
                //   ?
                calendarTitle
                //   :
                // calendarRef.current?.getApi().view.title
              }
            </h1>
            <Button
              className="ms-3"
              // style={{ marginTop: "-18px" }}
              onClick={() => {
                calendarRef.current?.getApi().next();
                console.log("API: ", calendarRef.current?.getApi());
                updateCalendarTitle();
              }}
            >
              <ChevronDoubleRight color="white" size={20} />
            </Button>
          </Col>

          <Col lg={2} md={2} sm={2} xs={1} className="text-end">
            <Button
              className=""
              onClick={() => {
                calendarRef.current?.getApi().today();
                updateCalendarTitle();
              }}
            >
              Today
            </Button>
          </Col>
          {/* <button
          className=" fc-button fc-state-default "
          onClick={() => {
            calendarRef.current?.getApi().changeView("timeGridWeek");
            updateCalendarTitle();
          }}
        >
          test
        </button> */}
          {/* <h1> {calendarRef.current?.getApi().view.title}</h1> */}

          {/* <h2>January 2019</h2> */}
        </Row>
      </div>
      <FullCalendar
        ref={calendarRef}
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
        events={combinedEvents}
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
          start: "",
          center: "",
          end: "",
        }}
        // headerToolbar={{
        //   start: "timeGridDay,dayGridMonth,timeGridWeek,multiMonthYear",
        //   center: "prev,title,next",
        //   end: "today",
        // }}
        editable={true}
        selectable={true}
        eventContent={renderEventContent}
      />
    </>
  );
};

export default LinkCalenndar;
