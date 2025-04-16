import { useEffect, useState } from "react";
import "./App.css";

import left_arrow from "./assets/chevron-left.svg";
import right_arrow from "./assets/chevron-right.svg";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // ! Gnenerate days in month
  const daysInMonth = () => {
    const daysArray = [];

    const firstDay = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      1
    );

    const lastDay = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      0
    );

    // console.log(`${firstDate}\n${lastDate}`);

    for (let i = 0; i < firstDay.getDay(); i++) {
      daysArray.push(null);
    }
    for (let i = 1; i <= lastDay.getDate(); i++) {
      daysArray.push(
        new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i)
      );
    }

    return daysArray;
  };

  // ! Handle Month
  const handleChangeMonth = (e) => {
    const newMonth = parseInt(e.target.value, 10);
    setSelectedDate(new Date(selectedDate.getFullYear(), newMonth, 1));
  };

  // ! Handle Year
  const handleChangeYear = (e) => {
    const newYear = parseInt(e.target.value, 10);
    setSelectedDate(new Date(newYear, selectedDate.getMonth(), 1));
  };

  // ! Handle Btn fn
  const hanleLeftArrow = () => {
    setSelectedDate(
      new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1)
    );
  };
  const hanleRightArrow = () => {
    setSelectedDate(
      new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1)
    );
  };

  // ! Check same day or not
  const isSameDay = (date1, date2) => {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  return (
    <div className="calendar">
      <div className="header">
        {/* Left Button */}
        <button onClick={hanleLeftArrow}>
          <img src={left_arrow} />
        </button>

        {/* Select Month */}
        <select value={selectedDate.getMonth()} onChange={handleChangeMonth}>
          {months.map((month, index) => (
            <option key={index} value={index}>
              {month}
            </option>
          ))}
        </select>

        {/* Select Year */}
        <select value={selectedDate.getFullYear()} onChange={handleChangeYear}>
          {Array.from(
            { length: 10 },
            (_, i) => selectedDate.getFullYear() - 5 + i,
            this
          ).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        {/* Right Button */}
        <button onClick={hanleRightArrow}>
          <img src={right_arrow} />
        </button>
      </div>

      {/* Week Days */}
      <div className="daysOfWeek">
        {daysOfWeek.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* Days */}
      <div className="days">
        {daysInMonth().map((day, index) => (
          <div
            key={index}
            className={
              day ? `day ${isSameDay(day, new Date()) && "current"}` : "empty"
            }
          >
            {day ? day.getDate() : ""}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
