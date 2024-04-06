import React, { useState, useEffect, Component } from 'react';

import axios from 'axios';
import FormComponent from './/Form.js';
import BookingComponent from './/BookingForm.js';

const App = () => {
  const list = ['Tutor A', 'Tutor B', 'Tutor C'];
  const listMap = list.map((el, index) => {
    return (
      <h3>
        {el} <button className="button"> Make a booking 📖 </button>
      </h3>
    );
  });
  console.log(listMap);
  return (
    <div>
      {/* <h2>Our Tutors</h2> */}
      {/* {listMap} */}

      {/* <InputField /> */}
      <hr></hr>
      <br></br>
      <AllSlots />
      <hr></hr>

      <TutorAddSlotsArea />
      <FormComponent />
    </div>
  );
};

const TutorAddSlotsArea = () => {
  return (
    <div>
      <br></br>
      <b>If you are a tutor and wants to share your available slots, click: </b>
      {/* <button className="button" id="tutorAddSlot">
        {' '}
        here !{' '}
      </button> */}
    </div>
  );
};

// const InputField = () => {
//   return (
//     <div>
//       PLACEHOLDER <button className="button"> here ! </button>
//     </div>
//   );
// };

const AllSlots = () => {
  const [data, setData] = useState([]);

  //states for book button:
  const [seen, setSeen] = useState(false);
  const togglePop = () => {
    setSeen(!seen);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api'); // Use '/api' as the base URL
        setData(response.data.allData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  // Date and Time formatting
  const formatDate = (dateString) => {
    return dateString.slice(0, 10); // Trim the date string to display only YYYY-MM-DD
  };
  const formatTime = (dateString) => {
    return dateString.slice(0, 5); // Trim the date string to display only YYYY-MM-DD
  };

  const allSlotsData = data.map((slot) => {
    return (
      <tr>
        {/* <td>{slot.id}</td> */}
        <td>{slot.tutor_name}</td>
        <td>{formatDate(slot.available_date)}</td>
        <td>{formatTime(slot.available_time)}</td>
        {/* <div> */}
        {slot.booked === true ? (
          <td className="no">No</td>
        ) : (
          <td id="yes">Yes</td>
        )}
        {/* </div> */}
        <td>{slot.student_name}</td>
        {slot.booked === true ? (
          <td>-</td>
        ) : (
          <td>
<<<<<<< HEAD
            <button className="button" onClick={togglePop}>
              Book Me
            </button>
            {seen ? <BookingComponent toggle={togglePop} /> : null}
=======
            <button className="button">Book Me</button>
>>>>>>> parent of e819e77 ( add booking button function, but not sure if work)
          </td>
        )}
      </tr>
    );
  });
  return (
    <div>
      <h2>Tutor Slots</h2>
      <table className="table">
        <thead>
          <tr>
            {/* <th scope="col">ID</th> */}
            <th scope="col">Tutor</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Available</th>
            <th scope="col">Student Name</th>
            <th scope="col">Book Now!</th>
          </tr>
        </thead>
        <tbody>{allSlotsData}</tbody>
      </table>
    </div>
  );
};
export default App;
