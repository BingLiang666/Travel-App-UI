import "./records.css"
import Record from "../record/Record";

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
