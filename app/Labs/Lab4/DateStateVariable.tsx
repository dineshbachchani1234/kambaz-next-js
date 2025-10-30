"use client";
import { useState } from "react";

export default function DateStateVariable() {
  const [startDate, setStartDate] = useState(new Date());
  
  return (
    <div id="wd-date-state-variables">
      <h2>Date State Variables</h2>
      <h3>{startDate.toDateString()}</h3>
      <input 
        type="date"
        className="form-control mb-2"
        value={startDate.toISOString().split('T')[0]}
        onChange={(e) => setStartDate(new Date(e.target.value))}
      />
      <hr />
    </div>
  );
}