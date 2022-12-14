import { useLocation } from "react-router";
// import { Link } from "react-router-dom";
// import { Context } from "../../context/Context";
import axios from "axios";
import { useEffect, useState } from "react";
import "./singleRecord.css";

/**
 * Single record component that defines the layout and actions accociated with a single record
 */
export default function SingleRecord() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [record, setRecord] = useState({});
  // const PF = "http://localhost:5000/images/";
  // const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [start_date, setStartDate] = useState("");
  const [end_date, setEndDate] = useState("");
  const [destination, setDestination] = useState("");

  const [updateMode, setUpdateMode] = useState(false);

  // handle the get request on the record
  useEffect(() => {
    const getRecord = async () => {
      const res = await axios.get("/record/" + path);

      console.log("path is" + path);

      setRecord(res.data);
      setTitle(res.data.title);
      setDescription(res.data.description);
      setEndDate(res.data.end_date);
      setStartDate(res.data.start_date);
      setDestination(res.data.destination);
    };
    getRecord();
  }, [path]);

  // handle the delete request on a record
  const handleDelete = async () => {
    try {
      await axios.delete(`/record/${record.id}`, {});
      window.location.replace("/");
    } catch (err) {}
  };

  // handle the update request on a record
  const handleUpdate = async () => {
    console.log(`/record/${record.id}`);
    const updatedRecord = {
      title,
      destination,
      start_date,
      end_date,
      description,
    };
    try {
      await axios.put(`/record/${record.id}`, updatedRecord);
      setUpdateMode(false);
    } catch (err) {}
  };

  return (
    <div className="singleRecord">
      <div className="singleRecordWrapper">
        <img
          className="singleRecordImg"
          src={require("../../imgs/dino-reichmuth-A5rCN8626Ck-unsplash.jpg")}
          alt=""
        />
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singleRecordTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singleRecordTitle">
            {title}
            <div className="singleRecordEdit">
              <i
                className="singleRecordIcon far fa-edit"
                onClick={() => setUpdateMode(true)}
              ></i>
              <i
                className="singleRecordIcon far fa-trash-alt"
                onClick={handleDelete}
              ></i>
            </div>
          </h1>
        )}

        {updateMode ? (
          <div>
            <p className="singleRecordFieldHeader">Destination: </p>
            <input
              className="singleRecordDestinationInput"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
        ) : (
          <p className="singleRecordDestination">Destination: {destination}</p>
        )}

        {updateMode ? (
          <div>
            <p className="singleRecordFieldHeader">Start Date: </p>
            <input
              className="singleRecordStartDateInput"
              value={start_date}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
        ) : (
          <p className="singleRecordStartDate">Start Date: {start_date}</p>
        )}

        {updateMode ? (
          <div>
            <p className="singleRecordFieldHeader">End Date: </p>
            <input
              className="singleRecordEndDateInput"
              value={end_date}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        ) : (
          <p className="singleRecordEndDate">End Date: {end_date}</p>
        )}

        {updateMode ? (
          <div>
            <p className="singleRecordFieldHeader">Description: </p>
            <textarea
              className="singleRecordDescInput"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        ) : (
          <p className="singleRecordDesc">Description: {description}</p>
        )}

        {updateMode && (
          <button className="singleRecordButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}
