import "./record.css";
import { Link } from "react-router-dom";

export default function Record({record}) {
  return (
    <div className="record">
      <img
        className="recordImg"
        src={require("../../imgs/timo-stern-iUBgeNeyVy8-unsplash.jpg")}
        alt="record_img"
      />
      <div className="recordInfo">
        <div className="recordCats">
          <span className="recordCat">From: {record.start_date}</span>
          <span className="recordCat">To: {record.end_date}</span>
        </div>

        <Link to={`/record/${record.id}`} className="link">
          <span className="recordTitle">{record.title}</span>
        </Link>
        
        <hr/>
        {/* <span className="recordDate">Recorded date:{new Date(record.record_date).toDateString()}</span> */}
      </div>
      <p className="recordDesc">
        {record.description}
      </p>
    </div>
  );
}
