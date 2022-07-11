import React from 'react';
import PropTypes from "prop-types";
import moment from 'moment';
import 'moment-timezone';

const InfoCardCurrent = (props) => {
  let timezone = 'America/Los_Angeles';
  let supportStartTime = moment().tz(timezone).hours(7).minutes(0).seconds(0);
  let supportEndsTime = moment().tz(timezone).hours(17).minutes(0).seconds(0);
  let now = moment();
  let isBetweenWorkingHours = now.isBetween(supportStartTime,supportEndsTime);

  function handleLiveChat() {
    if(props.section === 'contact') {
      alert("FPO: This will spawn a live Sales chat session");
    } else {
      alert("FPO: This will spawn a live Support chat session");
    }
  }

  function handleSalesChatClick () {
    window.history.pushState({}, 'bot', '?bot=sales');
    window.HubSpotConversations.clear({ resetWidget: true });
  }

  function handleSupportChatClick() {
    window.history.pushState({}, 'bot', '?bot=support');
    window.HubSpotConversations.clear({ resetWidget: true });
  }

  return (
      <div className="info-card">
        <div>
          <h3>{props.header}</h3>
          <p dangerouslySetInnerHTML={{__html: props.address}}/>
          <p>
            <span>{props.callSales}</span><br/>
            {props.phone}<br/>
            {props.tollFree} {props.tollFreeNumber}
          </p>
        </div>
        <div className={'info-buttons'}>
          <a href={'mailto:'+props.email} className={'btn btn--orange email-sales'}>{props.emailSales}</a> <br/>
          {
            isBetweenWorkingHours ?
                <a href="#" onClick={handleLiveChat} className={'btn btn--orange live-chat'}>{props.liveChat}</a>
                :
                null
          }
          <p className={'live-chat-copy'} dangerouslySetInnerHTML={{__html: props.liveChatCopy}} />
          {
            props.showFaq ?
                <a href="/support/" className={'btn btn--orange faq'}>FAQ</a>
                : null
          }
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
  email: PropTypes.string,
  liveChat: PropTypes.string,
  liveChatCopy: PropTypes.string,
  geo: PropTypes.string,
  handleLiveChat: PropTypes.func,
  showFaq: PropTypes.bool,
  section: PropTypes.string
};

export default InfoCardCurrent;
