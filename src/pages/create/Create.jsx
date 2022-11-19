import "./create.css";

export default function Write() {
  return (
    <div className="create">
      <img
        className="createImg"
        src={require("../../imgs/eva-darron-oCdVtGFeDC0-unsplash.jpg")}
        alt="create_img"
      />
      <form className="createForm">
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
          <input type="text" placeholder="Traveler(s) Name" name="name" />
          <label>Travel Start Date</label>
          <input type="text" placeholder="Start Date" name="email" />
          <label>Travel End Date</label>
          <input type="text" placeholder="End Date" name="email" />
          <label>Destination</label>
          <input type="text" placeholder="Destination" name="password" />
        </div>
        {/* Change these */}

        <div className="createFormGroup">
          <textarea
            className="createInput createText"
            placeholder="Enter your travel description here..."
            type="text"
            autoFocus={true}
          />
        </div>
        <button className="createSubmit" type="submit">
          Create
        </button>
      </form>
    </div>
  );
}
