import React from 'react';
import PropTypes from "prop-types";

const InfoCardCurrent = (props) => {
  return (
      <div className="info-card">
        <div>
          <h2>{props.header}</h2>
          <p dangerouslySetInnerHTML={{__html: props.address}}/>
          <p>
            {props.callSales}<br/>
            {props.phone} {props.phoneNumber}<br/>
            {props.tollFree} {props.tollFreeNumber}
          </p>
        </div>
        <div className={'info-buttons'}>
          <a href="#" className={'btn btn--orange'}>{props.emailSales}</a> <br/>
          <a href="#" className={'btn btn--orange'}>{props.liveChat}</a>
          <p className={'live-chat-copy'} dangerouslySetInnerHTML={{__html: props.liveChatCopy}} />
          <a href="#" className={'btn btn--orange'}>FAQ</a>
        </div>
      </div>
  )
};

InfoCardCurrent.propTypes = {
  header: PropTypes.string,
  address: PropTypes.string,
  callSales: PropTypes.string,
  phone: PropTypes.string,
  phoneNumber: PropTypes.string,
  tollFree: PropTypes.string,
  tollFreeNumber: PropTypes.string,
  emailSales: PropTypes.string,
  liveChat: PropTypes.string,
  liveChatCopy: PropTypes.string
};

export default InfoCardCurrent;
