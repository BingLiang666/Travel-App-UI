import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import Records from "../../components/records/Records";
import SideBar from "../../components/sideBar/SideBar";
import "./home.css";

/**
 * The home page
 */
export default function Home() {
  const [records, setRecords] = useState([]);
  // inlcude an empty array as the dependency to indicate that we want to fetch this data
  // just at the begining
  // fetch data use axios library and async function
  useEffect(()=>{
    const fetchRecords = async () => {
      const res = await axios.get("/record")
      console.log(res)
      setRecords(res.data)
    }
    fetchRecords()
    console.log("22222")

    // fetch("/records")
    // .then((response) => response.json())
    // .then((data) => setRecords(data));

    console.log(records)
    console.log("333")
  },[])

  console.log("111")

  return (
    <>
      <Header />
      <div className="home">
        <Records records={records} />
        {/* <SideBar /> */}
      </div>
    </>
  );
}
