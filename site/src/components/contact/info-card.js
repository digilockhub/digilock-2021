import React from 'react';
import PropTypes from "prop-types";

const InfoCard = (props) => {
  return (
      <div className="info-card secondary">
        <p className={'header'}>{props.header}</p>
        <p dangerouslySetInnerHTML={{__html: props.address}} />
        <p>
          {props.emailSales}<br/>
          {props.phone} {props.phoneNumber}<br/>
          {props.tollFree} {props.tollFreeNumber}
        </p>
      </div>
  )
};

InfoCard.propTypes = {
  header: PropTypes.string,
  address: PropTypes.string,
  phone: PropTypes.string,
  phoneNumber: PropTypes.string,
  tollFree: PropTypes.string,
  tollFreeNumber: PropTypes.string,
  emailSales: PropTypes.string
};

export default InfoCard;
