
import React from "react";
import Header from "../header";
import {Trans} from "gatsby-plugin-react-i18next";
const Modal = ({ handleClose, show, children }) => {

  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <div className="container">
            {children}
            <a onClick={handleClose} href="javascript:void(0)" className="btn btn--orange">
              <Trans>close</Trans>
            </a>
          </div>
        </section>
      </div>
  );
};

export default Modal;