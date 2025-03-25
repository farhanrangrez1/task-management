import { BiSearch } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import axios from "axios";

import FullCalendar from "@fullcalendar/react";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Header from "./Header";

function New_Scheduling() {
  const [customShifts, setCustomShifts] = useState([]);
  const [isShiftModalOpen, setIsShiftModalOpen] = useState(false);
  const [newShift, setNewShift] = useState({
    name: "",
    start: "",
    end: "",
  });

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [events, setEvents] = useState([
    {
      id: "1",
      resourceId: "1",
      title: "07:00 - 13:00",
      start: new Date().toISOString().split("T")[0] + "T07:00:00",
      end: new Date().toISOString().split("T")[0] + "T13:00:00",
      backgroundColor: "#ffb6b6",
    },
  ]);

  const resources = [
    {
      id: "1",
      title: "Ryan",
      extendedProps: {
        role: "Cloud System Engineer",
        image:
          "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2610",
        color: "#ffb6b6",
      },
    },
    {
      id: "2",
      title: "Kate",
      extendedProps: {
        role: "Help Desk Specialist",
        image:
          "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2610",
        color: "#b8e986",
      },
    },
    {
      id: "3",
      title: "John",
      extendedProps: {
        role: "Application Developer",
        image:
          "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2610",
        color: "#a7d1ff",
      },
    },
    {
      id: "4",
      title: "Mark",
      extendedProps: {
        role: "Network Administrator",
        image:
          "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2610",
        color: "#ffb6f3",
      },
    },
    {
      id: "5",
      title: "Sharon",
      extendedProps: {
        role: "Data Quality Manager",
        image:
          "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2610",
        color: "#fff4b6",
      },
    },
    {
      id: "6",
      title: "Emma",
      extendedProps: {
        role: "Product Tactics Agent",
        image:
          "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2610",
        color: "#b6ffe1",
      },
    },
  ];

  const [staffMembers, setStaffMembers] = useState([]);

  useEffect(() => {
    axios
      .get("https://projectmanagement-employe-1.onrender.com/RegisterEmployees")
      .then((response) => {
        setStaffMembers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching staff members:", error);
      });
  }, []);

  // console.log(staffMembers);

  const handleEventClick = (clickInfo) => {
    setCurrentEvent(clickInfo.event);
    setIsPopupOpen(true);
  };

  const handleDateSelect = (selectInfo) => {
    setIsPopupOpen(true);
    setCurrentEvent({
      start: selectInfo.start,
      end: selectInfo.end,
      resourceId: selectInfo.resource?.id,
    });
  };

  // const handleSaveShift = () => {
  //   const staffSelect = document.querySelector(".staff-select").value;
  //   const shiftSelect = document.querySelector(".shift-select").value;
  //   const dateInput = document.querySelector('input[type="date"]').value;
  //   const notesInput = document.querySelector("textarea").value;

  //   const shiftTimes = {
  //     1: { start: "07:00", end: "13:00" },
  //     2: { start: "12:00", end: "18:00" },
  //   };

  //   const selectedResource = resources.find((r) => r.id === staffSelect);

  //   const newEvent = {
  //     id: String(Math.random()),
  //     resourceId: staffSelect,
  //     title: `${shiftTimes[shiftSelect].start} - ${shiftTimes[shiftSelect].end}`,
  //     start: `${dateInput}T${shiftTimes[shiftSelect].start}`,
  //     end: `${dateInput}T${shiftTimes[shiftSelect].end}`,
  //     backgroundColor: selectedResource.extendedProps.color,
  //     notes: notesInput,
  //   };

  //   setEvents([...events, newEvent]);
  //   setIsPopupOpen(false);
  // };

  const handleSaveShift = async () => {
    const staffId = document.querySelector(".staff-select").value;
    const shiftSelect = document.querySelector(".shift-select").value;
    const dateInput = document.querySelector('input[type="date"]').value;
    const notesInput = document.querySelector("textarea").value;

    const shiftTimes = {
      1: { name: "Morning (07:00 - 13:00)", start: "07:00", end: "13:00" },
      2: { name: "Afternoon (12:00 - 18:00)", start: "12:00", end: "18:00" },
    };

    // const selectedStaff = staffMembers.find((s) => s._id === staffId);
    const selectedStaff = staffMembers.find(
      (s) => String(s.id) === String(staffId)
    );

    if (!selectedStaff) {
      alert("Invalid staff selected.");
      return;
    }

    // Format date to DD-MM-YYYY
    const formattedDate = new Date(dateInput)
      .toLocaleDateString("en-GB")
      .split("/")
      .join("-");

    const shiftData = {
      staff_member: `${selectedStaff.name} - ${selectedStaff.role}`,
      shift_name: shiftTimes[shiftSelect].name,
      date: formattedDate,
      notes: notesInput,
      employee_id: selectedStaff.employee_id || 3, // fallback if employee_id is missing
    };

    try {
      const res = await axios.post(
        "https://projectmanagement-employe-1.onrender.com/shifts",
        shiftData
      );
      console.log("Shift saved:", res.data);

      // Optionally update UI
      const newEvent = {
        id: String(Math.random()),
        resourceId: staffId,
        title: `${shiftTimes[shiftSelect].start} - ${shiftTimes[shiftSelect].end}`,
        start: `${dateInput}T${shiftTimes[shiftSelect].start}`,
        end: `${dateInput}T${shiftTimes[shiftSelect].end}`,
        backgroundColor: selectedStaff.color,
        notes: notesInput,
      };

      setEvents([...events, newEvent]);
      setIsPopupOpen(false);
      alert("Shift saved successfully ✅");
    } catch (error) {
      console.error("Error saving shift:", error);
      alert("Failed to save shift ❌");
    }
  };

  const renderResource = ({ resource }) => {
    return (
      <div className="resource-cell">
        <img
          src={resource.extendedProps.image}
          alt={resource.title}
          className="resource-image"
        />
        <div className="resource-info">
          <div className="resource-name">{resource.title}</div>
          <div className="resource-title">{resource.extendedProps.role}</div>
        </div>
      </div>
    );
  };
  return (
    <div className="admin-dashboard-container">
      <Sidebar />
      <div className="admin-main-content">
        <Header />
        <div className="calendar-header">
          <h3>Schedule Calendar</h3>
          <Link to="/admin/TimeEntry">
            <button
              style={{ display: "inline-block", textDecoration: "none" }}
              className="add-employee-btn"
            >
              <span>+</span> Add Event
            </button>
          </Link>
        </div>
        <div className="dashboard-wrapper" style={{ backgroundColor: "white" }}>
          <div className="calendar-container">
            <FullCalendar
              plugins={[
                resourceTimelinePlugin,
                timeGridPlugin,
                dayGridPlugin,
                interactionPlugin,
              ]}
              initialView="resourceTimelineWeek"
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,resourceTimelineWeek,timeGridDay",
              }}
              resources={resources}
              events={events}
              editable={true}
              selectable={true}
              selectMirror={true}
              resourceAreaWidth="250px"
              slotMinTime="07:00:00"
              slotMaxTime="18:00:00"
              allDaySlot={false}
              weekends={false}
              resourceLabelContent={renderResource}
              eventClick={handleEventClick}
              select={handleDateSelect}
              height="auto"
              initialDate={new Date()}
              dayHeaderFormat={{
                weekday: "short",
                month: "numeric",
                day: "numeric",
              }}
              views={{
                resourceTimelineWeek: {
                  type: "resourceTimeline",
                  duration: { days: 5 },
                  slotDuration: { hours: 6 },
                  buttonText: "Week",
                },
                dayGridMonth: {
                  type: "dayGrid",
                  buttonText: "Month",
                },
                timeGridDay: {
                  type: "timeGrid",
                  buttonText: "Day",
                },
              }}
            />
            {isPopupOpen && (
              <div className="popup">
                <div className="popup-content">
                  <h3>Shift Assignment</h3>
                  <div className="form-group">
                    <label>Staff Member:</label>
                    <select className="staff-select">
                      {staffMembers.map((staff) => (
                        <option key={staff.id} value={staff.id}>
                          {staff.first_name} - {staff.last_name} -{staff.role}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Shift:</label>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <select className="shift-select">
                        <option value="1">Morning (07:00 - 13:00)</option>
                        <option value="2">Afternoon (12:00 - 18:00)</option>
                        {customShifts.map((shift, index) => (
                          <option
                            key={`custom-${index}`}
                            value={`custom-${index}`}
                          >
                            {shift.name} ({shift.start} - {shift.end})
                          </option>
                        ))}
                      </select>
                      <button
                        onClick={() => setIsShiftModalOpen(true)}
                        style={{
                          marginLeft: "10px",
                          background: "transparent",
                          border: "none",
                          fontSize: "20px",
                          cursor: "pointer",
                        }}
                      >
                        ➕
                      </button>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Date:</label>
                    <input
                      type="date"
                      defaultValue={
                        currentEvent?.start?.toISOString().split("T")[0]
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label>Notes:</label>
                    <textarea />
                  </div>
                  <div className="button-group">
                    <button className="save-button" onClick={handleSaveShift}>
                      Save Shift
                    </button>
                    {currentEvent?.id && (
                      <button
                        className="delete-button"
                        onClick={() => {
                          const newEvents = events.filter(
                            (event) => event.id !== currentEvent.id
                          );
                          setEvents(newEvents);
                          setIsPopupOpen(false);
                        }}
                      >
                        Delete Shift
                      </button>
                    )}
                    <button onClick={() => setIsPopupOpen(false)}>
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}

            {isShiftModalOpen && (
              <div className="popup">
                <div className="popup-content">
                  <h4>Add New Shift</h4>
                  <div className="form-group">
                    <label>Shift Name</label>
                    <input
                      type="text"
                      value={newShift.name}
                      onChange={(e) =>
                        setNewShift({ ...newShift, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label>Start Time</label>
                    <input
                      type="time"
                      value={newShift.start}
                      onChange={(e) =>
                        setNewShift({ ...newShift, start: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label>End Time</label>
                    <input
                      type="time"
                      value={newShift.end}
                      onChange={(e) =>
                        setNewShift({ ...newShift, end: e.target.value })
                      }
                    />
                  </div>
                  <div className="button-group">
                    <button
                      onClick={() => {
                        setCustomShifts([...customShifts, newShift]);
                        setNewShift({ name: "", start: "", end: "" });
                        setIsShiftModalOpen(false);
                      }}
                    >
                      Add Shift
                    </button>
                    <button onClick={() => setIsShiftModalOpen(false)}>
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default New_Scheduling;
