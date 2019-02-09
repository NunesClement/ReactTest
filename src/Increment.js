import React, { useState, useEffect } from "react";

function Increment() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div className="col-md-12 text-center">
      <p>Vous avez cliqué {count} fois</p>
      <button className=" btn btn-primary" onClick={() => setCount(count + 1)}>
        +
      </button>
      <button className="btn btn-primary" onClick={() => setCount(count - 1)}>
        -
      </button>
    </div>
  );
}
export default Increment;
