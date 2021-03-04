import React from 'react';
import './App.css';
import { TimePickerComponent } from "@syncfusion/ej2-react-calendars";
function App() {
  const timeValue: Date = new Date("01/01/2021 08:30 AM");
  const minTime: Date = new Date("01/02/2021 01:00 AM");
  const maxTime: Date = new Date("01/02/2021 05:00 AM");
  return (
    <div>
      <TimePickerComponent placeholder="Select a time"
      value={timeValue}
      min={minTime}
      max={maxTime}
      format="HH:mm"
      step={60}></TimePickerComponent>
    </div>
  );
}

export default App;
