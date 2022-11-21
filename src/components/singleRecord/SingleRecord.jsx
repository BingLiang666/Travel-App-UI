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
        <h1 className="singleRecordtTitle">
          {record.title}
          <div className="singleRecordEdit">
            <i className="singleRecordIcon far fa-edit"></i>
            <i className="singleRecordIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <p className="singleRecordDesc">
          {Record.description}
        </p>
      </div>
    </div>
  );
}
