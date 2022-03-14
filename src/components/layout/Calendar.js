import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  let formatedStart = startDate.toLocaleString("en-US", {
    day: "numeric",
    year: "numeric",
    month: "numeric",
  });

  let formatedEnd = endDate.toLocaleString("en-US", {
    day: "numeric",
    year: "numeric",
    month: "numeric",
  });

  const logUpdate = () => {
    console.log(formatedStart);
    console.log(formatedEnd);
  };

  const onSubmit = () => {
    logUpdate();
  };

  return (
    <div>
      <h2 style={{ color: "white" }}>
        Select the day or days you would like to rent a vehicle
      </h2>
      <p style={{ color: "white" }}>
        Same day rentals available at host discretion
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",

          color: "white",
          fontWeight: "bold",

          marginBottom: "4px",
        }}
      >
        <p>Start:</p>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        />
        <p>10AM</p>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          color: "white",
          fontWeight: "bold",
        }}
      >
        <p>End: </p>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        />
        <p>10AM</p>
      </div>

      <button style={{ marginTop: "16px" }} onClick={onSubmit}>
        <p style={{ fontWeight: "bold" }}>Check Availability</p>
      </button>
    </div>
  );
};
export default Calendar;
