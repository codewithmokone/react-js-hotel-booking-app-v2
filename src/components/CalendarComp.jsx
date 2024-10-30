import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarComp = () => {
    const [value, onChange] = useState(new Date());
    const [date,setDate] = useState();
    const [show,setShow] = useState(false); 

    return (
      <div>
          <Calendar onChange={(e) => setDate(e.target.value)} value={date} showButtonBar selectionMode="multiple"/>
      </div>
    )
}

export default CalendarComp