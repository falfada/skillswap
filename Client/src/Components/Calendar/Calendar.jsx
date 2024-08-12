import { useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";

const Calendar = () => {
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };
  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}`
      )
    ) {
      selected.event.remove();
    }
    return (
      <div className="flex justify-between">
        <div className=" flex-1 basis-[20%] bg-orange-200 p-15 rounded-2-sm">
          <h5>Events</h5>
          <div>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                className="bg-green-500 my-2.5 rounded-2"
              >
                <ListItemText
                  primary={eventTupleToStore.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "2-digit",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                ></ListItemText>
              </ListItem>
            ))}
          </div>
        </div>
        <div className="flex-1 basis-[100%] ml-3.5">
          <FullCalendar
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              listPlugin,
              interactionPlugin,
            ]}
            initialView="dayGridMonth"
            headerToolbar={{
              start: "today prev,next",
              center: "title",
              end: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
            }}
            height={"75vh"}
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              {
                id: "1234",
                title: "Bootcamp",
                start: "2024-02-25",
                end: "2024-08-15",
              },
            ]}
          />
        </div>
      </div>
    );
  };
};
export default Calendar;
