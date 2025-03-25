import { BiSearch } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchShifts } from "../features/shifts/shiftsSlice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import FullCalendar from "@fullcalendar/react";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Header from "./Header";

function New_Scheduling() {
  const dispatch = useDispatch();
  const shifts = useSelector((state) => state.shifts.shiftList);
  const [customShifts, setCustomShifts] = useState([]);
  const [isShiftModalOpen, setIsShiftModalOpen] = useState(false);
  const [selectedShiftId, setSelectedShiftId] = useState("");

  const [newShift, setNewShift] = useState({ name: "", start: "", end: "" });
  const [isDeleteShiftModalOpen, setIsDeleteShiftModalOpen] = useState(false);
  const [shiftList, setShiftList] = useState([]);

  useEffect(() => {
    axios
      .get("https://projectmanagement-employe-1.onrender.com/api/shifttime")
      .then((res) => {
        setShiftList(res.data.data); // ✅ correct, this is the array

        console.log("Fetched Shifts:", res.data);
      })
      .catch((err) => {
        console.error("Error fetching shifts:", err);
      });
  }, []);

  useEffect(() => {
    if (isDeleteShiftModalOpen) {
      axios
        .get("https://projectmanagement-employe-1.onrender.com/api/shifttime")
        .then((res) => {
          setShiftList(res.data.data); // response format confirmed
        })
        .catch((err) => {
          console.error("Error fetching shifts:", err);
        });
    }
  }, [isDeleteShiftModalOpen]);

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

  useEffect(() => {
    dispatch(fetchShifts()); // Dispatch Redux action to fetch shifts
  }, [dispatch]);

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

  //   const staffId = document.querySelector(".staff-select").value;
  //   const shiftSelect = document.querySelector(".shift-select").value;
  //   const dateInput = document.querySelector('input[type="date"]').value;
  //   const notesInput = document.querySelector("textarea").value;

  //   const shiftTimes = {
  //     1: { name: "Morning (07:00 - 13:00)", start: "07:00", end: "13:00" },
  //     2: { name: "Afternoon (12:00 - 18:00)", start: "12:00", end: "18:00" },
  //   };

  //   // const selectedStaff = staffMembers.find((s) => s._id === staffId);
  //   const selectedStaff = staffMembers.find(
  //     (s) => String(s.id) === String(staffId)
  //   );

  //   if (!selectedStaff) {
  //     alert("Invalid staff selected.");
  //     return;
  //   }

  //   // Format date to DD-MM-YYYY
  //   const formattedDate = new Date(dateInput)
  //     .toLocaleDateString("en-GB")
  //     .split("/")
  //     .join("-");

  //   const shiftData = {
  //     staff_member: `${selectedStaff.name} - ${selectedStaff.role}`,
  //     shift_name: shiftTimes[shiftSelect].name,
  //     date: formattedDate,
  //     notes: notesInput,
  //     employee_id: selectedStaff.employee_id || 3, // fallback if employee_id is missing
  //   };

  //   try {
  //     const res = await axios.post(
  //       "https://projectmanagement-employe-1.onrender.com/shifts",
  //       shiftData
  //     );
  //     console.log("Shift saved:", res.data);

  //     // Optionally update UI
  //     const newEvent = {
  //       id: String(Math.random()),
  //       resourceId: staffId,
  //       title: `${shiftTimes[shiftSelect].start} - ${shiftTimes[shiftSelect].end}`,
  //       start: `${dateInput}T${shiftTimes[shiftSelect].start}`,
  //       end: `${dateInput}T${shiftTimes[shiftSelect].end}`,
  //       backgroundColor: selectedStaff.color,
  //       notes: notesInput,
  //     };

  //     setEvents([...events, newEvent]);
  //     setIsPopupOpen(false);
  //     alert("Shift saved successfully ✅");
  //   } catch (error) {
  //     console.error("Error saving shift:", error);
  //     alert("Failed to save shift ❌");
  //   }
  // };

  const handleSaveShift = async () => {
    const staffId = document.querySelector(".staff-select").value;
    const shiftId = document.querySelector(".shift-select").value;
    const dateInput = document.querySelector('input[type="date"]').value;
    const notesInput = document.querySelector("textarea").value;

    // 🔍 Get full selected staff info
    const selectedStaff = staffMembers.find(
      (s) => String(s.id) === String(staffId)
    );
    const selectedShift = shiftList.find(
      (s) => String(s.id) === String(shiftId)
    );

    if (!selectedStaff || !selectedShift) {
      alert("Please select valid Staff and Shift.");
      return;
    }

    // ✅ Format date as DD-MM-YYYY
    const formattedDate = new Date(dateInput)
      .toLocaleDateString("en-GB")
      .split("/")
      .join("-");

    const shiftData = {
      staff_member: `${selectedStaff.first_name} ${selectedStaff.last_name} - ${selectedStaff.role}`,
      shift_name: `${selectedShift.shift_type} (${selectedShift.start_time} - ${selectedShift.end_time})`,
      date: formattedDate,
      notes: notesInput,
      employee_id: selectedStaff.id,
    };

    try {
      const res = await axios.post(
        "https://projectmanagement-employe-1.onrender.com/shifts",
        shiftData
      );

      toast.success("Shift assigned successfully ✅");

      // Optionally update calendar UI
      const newEvent = {
        id: String(Math.random()),
        resourceId: staffId,
        title: `${selectedShift.start_time} - ${selectedShift.end_time}`,
        start: `${dateInput}T${convertTo24Hour(selectedShift.start_time)}`,
        end: `${dateInput}T${convertTo24Hour(selectedShift.end_time)}`,
        backgroundColor: "#b6e5ff", // custom color
        notes: notesInput,
      };

      setEvents([...events, newEvent]);
      setIsPopupOpen(false);
      alert("Shift assigned successfully ✅");
    } catch (error) {
      console.error("Failed to assign shift:", error);
      toast.error("Failed to assign shift ❌");
    }
  };

  const convertTo24Hour = (timeStr) => {
    const [time, modifier] = timeStr.split(" ");
    let [hours, minutes] = time.split(":").map(Number);

    if (modifier === "PM" && hours < 12) hours += 12;
    if (modifier === "AM" && hours === 12) hours = 0;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}`;
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
        </div>
        <div className="dashboard-wrapper" style={{ backgroundColor: "white" }}>
          <div className="calendar-container">
            {/* <FullCalendar
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
            /> */}

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

            <ToastContainer position="top-right" autoClose={3000} />
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
                    <select className="shift-select">
                      {shiftList.map((shift) => (
                        <option key={shift.id} value={shift.id}>
                          {shift.shift_type} ({shift.start_time} -{" "}
                          {shift.end_time})
                        </option>
                      ))}
                    </select>
                    <div>
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
                      <button
                        onClick={() => setIsDeleteShiftModalOpen(true)}
                        style={{
                          background: "transparent",
                          border: "none",
                          fontSize: "20px",
                          cursor: "pointer",
                          color: "red",
                        }}
                        title="Delete a shift"
                      >
                        🗑️
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
                      onClick={async () => {
                        const { name, start, end } = newShift;

                        if (!name || !start || !end) {
                          alert("Please fill all fields.");
                          return;
                        }

                        // Convert to 12-hour format (e.g. 07:00 AM)
                        const formatTime = (timeStr) => {
                          const [hour, minute] = timeStr.split(":");
                          const date = new Date();
                          date.setHours(hour);
                          date.setMinutes(minute);
                          return date.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: true,
                          });
                        };

                        const payload = {
                          shift_type: name,
                          start_time: formatTime(start),
                          end_time: formatTime(end),
                        };

                        try {
                          const res = await axios.post(
                            "https://projectmanagement-employe-1.onrender.com/api/shifttime",
                            payload
                          );
                          console.log("Shift saved to backend:", res.data);

                          // Local update for dropdown
                          setCustomShifts([...customShifts, newShift]);
                          setNewShift({ name: "", start: "", end: "" });
                          setIsShiftModalOpen(false);
                          alert("Shift added successfully ✅");
                        } catch (error) {
                          console.error("Error adding shift:", error);
                          alert("Failed to add shift ❌");
                        }
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

            {isDeleteShiftModalOpen && (
              <div className="popup">
                <div className="popup-content">
                  <h4>Delete Shift</h4>

                  <div className="form-group">
                    <label>Select Shift to Delete</label>
                    <select
                      value={selectedShiftId}
                      onChange={(e) => setSelectedShiftId(e.target.value)}
                    >
                      <option value="">-- Select a shift --</option>
                      {shiftList.map((shift) => (
                        <option key={shift.id} value={shift.id}>
                          {shift.shift_type} ({shift.start_time} -{" "}
                          {shift.end_time})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="button-group">
                    <button
                      className="delete-button"
                      onClick={async () => {
                        if (!selectedShiftId) {
                          alert("Please select a shift to delete.");
                          return;
                        }

                        try {
                          await axios.delete(
                            `https://projectmanagement-employe-1.onrender.com/api/shifttime/${selectedShiftId}`
                          );

                          const updated = shiftList.filter(
                            (shift) => shift.id !== parseInt(selectedShiftId)
                          );
                          setShiftList(updated);
                          setSelectedShiftId("");
                          setIsDeleteShiftModalOpen(false);
                          alert("Shift deleted successfully ✅");
                        } catch (error) {
                          console.error("Error deleting shift:", error);
                          alert("Failed to delete shift ❌");
                        }
                      }}
                    >
                      Delete
                    </button>

                    <button onClick={() => setIsDeleteShiftModalOpen(false)}>
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
