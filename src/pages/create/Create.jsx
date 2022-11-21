import "./create.css";
import { useState } from "react";
import axios from "axios";

export default function Create() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [start_date, setStartDate] = useState("");
  const [end_date, setEndDate] = useState("");
  const [destination, setDestination] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRecord = {
      title,
      destination,
      start_date,
      end_date,
      description,
    };
    try {
      const res = await axios.post("/record", newRecord);
      window.location.replace("/record/" + res.data.id);
      console.log("i am here");
    } catch (err) {}
  };

  return (
    <div className="create">
      <img
        className="createImg"
        src={require("../../imgs/eva-darron-oCdVtGFeDC0-unsplash.jpg")}
        alt="create_img"
      />
      <form className="createForm" onSubmit={handleSubmit}>
        <div className="createFormGroup">
          <label>
            <i className="createIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            className="createInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
        </div>

        {/* Change these */}
        <div className="createInfo">
          <label>Traveler(s)</label>
          {/* <input type="text" placeholder="Traveler(s) Name" name="name" /> */}
          <label>Title</label>
          <input
            type="text"
            placeholder="Traveler(s) Name"
            className="createInput"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <label>Travel Start Date</label>
          <input
            type="text"
            placeholder="Start Date"
            name="start_date"
            onChange={(e) => setStartDate(e.target.value)}
          />
          <label>Travel End Date</label>
          <input
            type="text"
            placeholder="End Date"
            name="end_date"
            onChange={(e) => setEndDate(e.target.value)}
          />
          <label>Destination</label>
          <input
            type="text"
            placeholder="Destination"
            name="destination"
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        {/* Change these */}

        <div className="createFormGroup">
          <textarea
            className="createInput createText"
            placeholder="Enter your travel description here..."
            type="text"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button className="createSubmit" type="submit">
          Create
        </button>
      </form>
    </div>
  );
}
