import { useLocation } from "react-router";
// import { Link } from "react-router-dom";
// import { Context } from "../../context/Context";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import "./singleRecord.css";
import Record from "../record/Record";

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
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  // handle the get request on the record
  useEffect(() => {
    const getRecord = async () => {
      const res = await axios.get("/record/" + path);

      console.log("path is" + path);

      setRecord(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getRecord();
  }, [path]);

  // handle the delete request on a record
  const handleDelete = async () => {
    try {
      await axios.delete(`/record/${record.id}`, {
        // data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  // handle the update request on a record
  const handleUpdate = async () => {
    try {
      await axios.put(`/record/${record.id}`, {
        // username: user.username,
        title,
        desc,
      });
      window.location.reload();
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
        {/* <h1 className="singleRecordTitle">
          {record.title}
          <div className="singleRecordEdit">
            <i className="singleRecordIcon far fa-edit"></i>
            <i className="singleRecordIcon far fa-trash-alt"></i>
          </div>
        </h1> */}
        <p className="singleRecordDesc">{Record.description}</p>
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

        {updateMode && (
          <button className="singleRecordButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}
