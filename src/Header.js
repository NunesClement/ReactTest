import React from "react";

function Header() {
  return (
    <div className="container alert alert-secondary">
      <div className="row">
        <div className="col-sm">
          <button type="button" className="btn btn-primary">
            Mailing list
          </button>
        </div>
        <div className="col-sm">
          <button type="button" className="btn btn-primary">
            Landing page
          </button>
        </div>
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
