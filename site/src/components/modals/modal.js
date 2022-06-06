
import React from "react";
import Header from "../header";
const Modal = ({ handleClose, show, children }) => {

  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <div className="container">
            {children}
            <button type="button" onClick={handleClose}>
              Close
            </button>
          </div>
        </section>
      </div>
  );
};

export default Modal;