import React from "react";

function Header() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">Mailing list</div>
        <div className="col-sm">Landing page</div>
        <div className="col-sm">
          <button type="button" className="btn btn-primary">
            Mon compte
          </button>
        </div>
      </div>
    </div>
  );
}
export default Header;
