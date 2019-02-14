import React, { useState, useEffect } from "react";

function Increment() {
  const [count, setCount] = useState(0);
  var mailSyst = "test@test.fr";
  const [mail, setMail] = useState(mailSyst);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  function handleMailChange(e) {
    mailSyst += e.target.value;
  }
  function validChange() {
    setMail(mailSyst);
  }
  return (
    <div className="col-md-12 text-center">
      <p>Vous avez cliqué {count} fois</p>
      <button className=" btn btn-primary" onClick={() => setCount(count + 1)}>
        +
      </button>
      <button className="btn btn-primary" onClick={() => setCount(count - 1)}>
        -
      </button>
      <br />
      <br />
      <input onChange={handleMailChange} className="form-control" />
      <button onClick={validChange} className="text-center btn btn-primary">
        ENVOYER
      </button>
      <p>{mail}</p>
      <p>{mailSyst}</p>
    </div>
  );
}
export default Increment;
