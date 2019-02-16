import React, { useState, useEffect } from "react";

function Increment() {
  const [count, setCount] = useState(0);

  return (
    <div className="col-md-12 text-center">
      <p>Vous avez cliqué {count} fois</p>
      <button className=" btn btn-primary" onClick={() => setCount(count + 1)}>
        <b>{"+"}</b>
      </button>
      <button className="btn btn-primary" onClick={() => setCount(count - 1)}>
        <b>{"-"}</b>
      </button>
      <br />
      <div className="spinner-grow text-secondary" role="status" />
    </div>
  );
}
export default Increment;
