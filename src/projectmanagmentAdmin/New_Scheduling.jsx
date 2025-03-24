import { BiSearch } from 'react-icons/bi';
import { BsBell} from 'react-icons/bs';
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

import FullCalendar from '@fullcalendar/react';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import Header from './Header';

function New_Scheduling() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [currentEvent, setCurrentEvent] = useState(null);
    const [events, setEvents] = useState([
      {
        id: '1',
        resourceId: '1',
        title: '07:00 - 13:00',
        start: new Date().toISOString().split('T')[0] + 'T07:00:00',
        end: new Date().toISOString().split('T')[0] + 'T13:00:00',
        backgroundColor: '#ffb6b6'
      }
    ]);
  
    const resources = [
      {
        id: '1',
        title: 'Ryan',
        extendedProps: {
          role: 'Cloud System Engineer',
          image: 'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2610',
          color: '#ffb6b6'
        }
      },
      {
        id: '2',
        title: 'Kate',
        extendedProps: {
          role: 'Help Desk Specialist',
          image: 'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2610',
          color: '#b8e986'
        }
      },
      {
        id: '3',
        title: 'John',
        extendedProps: {
          role: 'Application Developer',
          image: 'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2610',
          color: '#a7d1ff'
        }
      },
      {
        id: '4',
        title: 'Mark',
        extendedProps: {
          role: 'Network Administrator',
          image: 'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2610',
          color: '#ffb6f3'
        }
      },
      {
        id: '5',
        title: 'Sharon',
        extendedProps: {
          role: 'Data Quality Manager',
          image: 'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2610',
          color: '#fff4b6'
        }
      },
      {
        id: '6',
        title: 'Emma',
        extendedProps: {
          role: 'Product Tactics Agent',
          image: 'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2610',
          color: '#b6ffe1'
        }
      }
    ];
  
    const handleEventClick = (clickInfo) => {
      setCurrentEvent(clickInfo.event);
      setIsPopupOpen(true);
    };
  
    const handleDateSelect = (selectInfo) => {
      setIsPopupOpen(true);
      setCurrentEvent({
        start: selectInfo.start,
        end: selectInfo.end,
        resourceId: selectInfo.resource?.id
      });
    };
  
    const handleSaveShift = () => {
      const staffSelect = document.querySelector('.staff-select').value;
      const shiftSelect = document.querySelector('.shift-select').value;
      const dateInput = document.querySelector('input[type="date"]').value;
      const notesInput = document.querySelector('textarea').value;
  
      const shiftTimes = {
        1: { start: '07:00', end: '13:00' },
        2: { start: '12:00', end: '18:00' }
      };
  
      const selectedResource = resources.find(r => r.id === staffSelect);
  
      const newEvent = {
        id: String(Math.random()),
        resourceId: staffSelect,
        title: `${shiftTimes[shiftSelect].start} - ${shiftTimes[shiftSelect].end}`,
        start: `${dateInput}T${shiftTimes[shiftSelect].start}`,
        end: `${dateInput}T${shiftTimes[shiftSelect].end}`,
        backgroundColor: selectedResource.extendedProps.color,
        notes: notesInput
      };
  
      setEvents([...events, newEvent]);
      setIsPopupOpen(false);
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
       <Header/>
        <div className="calendar-header">
          <h3>Schedule Calendar</h3>
          <Link to="/admin/TimeEntry">
            <button style={{display:"inline-block",textDecoration:"none"}} className="add-employee-btn">
              <span>+</span> Add Event
            </button>
          </Link>
        </div>
        <div className="dashboard-wrapper" style={{backgroundColor:"white"}}>
      <div className="calendar-container">
      <FullCalendar
        plugins={[resourceTimelinePlugin, timeGridPlugin, dayGridPlugin, interactionPlugin]}
        initialView="resourceTimelineWeek"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,resourceTimelineWeek,timeGridDay'
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
        dayHeaderFormat={{ weekday: 'short', month: 'numeric', day: 'numeric' }}
        views={{
          resourceTimelineWeek: {
            type: 'resourceTimeline',
            duration: { days: 5 },
            slotDuration: { hours: 6 },
            buttonText: 'Week'
          },
          dayGridMonth: {
            type: 'dayGrid',
            buttonText: 'Month'
          },
          timeGridDay: {
            type: 'timeGrid',
            buttonText: 'Day'
          }
        }}
      />
    {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <h3>Shift Assignment</h3>
            <div className="form-group">
              <label>Staff Member:</label>
              <select className="staff-select">
                {resources.map(staff => (
                  <option key={staff.id} value={staff.id}>
                    {staff.title} - {staff.extendedProps.role}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Shift:</label>
              <select className="shift-select">
                <option value="1">Morning (07:00 - 13:00)</option>
                <option value="2">Afternoon (12:00 - 18:00)</option>
              </select>
            </div>
            <div className="form-group">
              <label>Date:</label>
              <input 
                type="date" 
                defaultValue={currentEvent?.start?.toISOString().split('T')[0]} 
              />
            </div>
            <div className="form-group">
              <label>Notes:</label>
              <textarea />
            </div>
            <div className="button-group">
              <button 
                className="save-button"
                onClick={handleSaveShift}
              >
                Save Shift
              </button>
              {currentEvent?.id && (
                <button 
                  className="delete-button"
                  onClick={() => {
                    const newEvents = events.filter(event => event.id !== currentEvent.id);
                    setEvents(newEvents);
                    setIsPopupOpen(false);
                  }}
                >
                  Delete Shift
                </button>
              )}
              <button onClick={() => setIsPopupOpen(false)}>Cancel</button>
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