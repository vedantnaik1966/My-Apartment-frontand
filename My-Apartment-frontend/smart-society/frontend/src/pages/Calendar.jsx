import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  Plus,
} from "lucide-react";
import "./Calendar.css";

function Calendar() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const [currentMonth, setCurrentMonth] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);

  // Example apartment events
  const events = {
    "1-26": "New Year",
    "1-15": "Maintenance",
    "2-14": "Community Event",
    "3-8": "Women's Day",
    "4-14": "Society Meeting",
    "5-1": "Maintenance",
    "6-21": "Yoga Event",
    "7-15": "Water Tank Cleaning",
    "8-15": "Independence Day",
    "9-5": "Committee Meeting",
    "10-2": "Festival Event",
    "11-14": "Diwali Celebration",
    "12-25": "Christmas Event",
  };

  const year = 2026;

  const firstDay = new Date(year, currentMonth, 1).getDay();
  const daysInMonth = new Date(
    year,
    currentMonth + 1,
    0
  ).getDate();

  const previousMonth = () => {
    setCurrentMonth((prev) => (prev === 0 ? 11 : prev - 1));
    setSelectedDate(null);
  };

  const nextMonth = () => {
    setCurrentMonth((prev) => (prev === 11 ? 0 : prev + 1));
    setSelectedDate(null);
  };

  const goToToday = () => {
    const today = new Date();

    if (today.getFullYear() === year) {
      setCurrentMonth(today.getMonth());
      setSelectedDate(today.getDate());
    }
  };

  const renderDays = () => {
    const days = [];

    // Empty spaces before first day
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div key={`empty-${i}`} className="calendar-day empty"></div>
      );
    }

    // Actual days
    for (let day = 1; day <= daysInMonth; day++) {
      const dateKey = `${currentMonth + 1}-${day}`;
      const event = events[dateKey];

      const today = new Date();

      const isToday =
        today.getFullYear() === year &&
        today.getMonth() === currentMonth &&
        today.getDate() === day;

      const isSelected = selectedDate === day;

      const dayOfWeek = new Date(
        year,
        currentMonth,
        day
      ).getDay();

      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

      days.push(
        <button
          key={day}
          className={`calendar-day 
            ${isToday ? "today" : ""} 
            ${isSelected ? "selected" : ""}
            ${isWeekend ? "weekend" : ""}
          `}
          onClick={() => setSelectedDate(day)}
        >
          <span className="day-number">{day}</span>

          {event && (
            <span className="event-dot"></span>
          )}

          {event && (
            <span className="event-name">
              {event}
            </span>
          )}
        </button>
      );
    }

    return days;
  };

  return (
    <div className="calendar-page">

      {/* Header */}
      <div className="calendar-header">

        <div className="calendar-title">
          <div className="calendar-icon">
            <CalendarDays size={26} />
          </div>

          <div>
            <h1>Calendar</h1>
            <p>Society events & activities</p>
          </div>
        </div>

        <button className="add-event">
          <Plus size={18} />
          Add Event
        </button>

      </div>

      {/* Calendar Card */}
      <div className="calendar-card">

        {/* Month Navigation */}
        <div className="month-navigation">

          <button
            className="navigation-button"
            onClick={previousMonth}
          >
            <ChevronLeft size={20} />
          </button>

          <div className="month-title">
            <h2>{months[currentMonth]}</h2>
            <span>{year}</span>
          </div>

          <button
            className="navigation-button"
            onClick={nextMonth}
          >
            <ChevronRight size={20} />
          </button>

          <button
            className="today-button"
            onClick={goToToday}
          >
            Today
          </button>

        </div>

        {/* Weekdays */}
        <div className="weekdays">
          {weekdays.map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>

        {/* Days */}
        <div className="calendar-grid">
          {renderDays()}
        </div>

      </div>

      {/* Selected Date */}
      {selectedDate && (
        <div className="selected-event">

          <div>
            <span className="selected-label">
              SELECTED DATE
            </span>

            <h3>
              {months[currentMonth]} {selectedDate}, {year}
            </h3>
          </div>

          <div className="selected-event-info">
            {events[`${currentMonth + 1}-${selectedDate}`] ||
              "No events scheduled"}
          </div>

        </div>
      )}

    </div>
  );
}

export default Calendar;