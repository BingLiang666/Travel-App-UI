import SideBar from "../../components/sideBar/SideBar";
import SingleRecord from "../../components/singleRecord/SingleRecord";
import "./single.css";

/**
 * The single record page
 */
export default function Single() {
  return (
    <div className="single">
      <SingleRecord />
      <SideBar />
    </div>
  );
}
