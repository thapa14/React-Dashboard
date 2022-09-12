import React from "react";
// import user from "../../../assets/images/viggo.png";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MessageModule({ userMessage }) {
  const { userName, type, message, time } = userMessage;
  return (
    <>
      <div
        className={`message d-flex ${type ? "flex-row" : "flex-row-reverse"}`}
      >
        <div className="message__avatar ">
          <div>
            <img src={`./images/${userName}.png`} alt="img" />
            <div className="active-status"></div>
          </div>
        </div>

        <div className="message__content-div d-flex flex-column ">
          <p
            className={`message__content  m-0 ${
              type ? "message__content--viggo" : "message__content--john"
            }`}
          >
            {message}
          </p>
          <div
            className={`message__details d-flex align-items-center ${
              type ? "justify-content-start" : "justify-content-end"
            }`}
          >
            <FontAwesomeIcon icon={faCalendarCheck} className="calender" />
            <span> {time}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default MessageModule;
