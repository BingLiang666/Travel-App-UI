import "./records.css"
import Record from "../record/Record";

/**
 * Display a list of records by populating each record to a record component
 * @param {*} param0 the records prop got from the get a list of records request
 */
export default function Records({records}) {
  return (
    <div className='records'>
      {
        records.map((r) => (
          <Record record={r} />
        ))
      }
    </div>
  )
}
