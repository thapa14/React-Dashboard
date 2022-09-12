import React, { useState, useRef, useEffect } from "react";
import MessageModule from "./MessageModule";
import "./style.css";
import MessageInputField from "./MessageInputField";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { messageData } from "../../constants/messageData";
import moment from "moment";

function Index() {
  const bottomRef = useRef();
  const [inputMessage, setInputMessage] = useState("");
  const [userChatData, setUserChatData] = useState([]);

  // to add the data when  page mount
  useEffect(() => {
    setUserChatData([...messageData]);
  }, []);

  const inputHandler = (e) => {
    setInputMessage(e.target.value);
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    const userMessage = {
      id: new Date().getTime(),
      userName: "john",
      message: inputMessage,
      type: "",
      time: moment().format("hh:mm a"),
    };

    // this timeout function is to delay the message
    setTimeout(() => {
      setUserChatData(() => {
        return [...userChatData, userMessage];
      });
    }, 500);
    setInputMessage("");
  };

  // to scroll to bottom of element on every new message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [userChatData]);

  return (
    <>
      <div className="box__container chatbox">
        <div className="box__container-heading chatbox__heading">
          <FontAwesomeIcon
            icon={faMessage}
            className="heading-icon"
            style={{ color: "pink" }}
          />
          <h4 className="m-0">Chat Box</h4>
        </div>
        <div className="box__container-main chatbox__message-div">
          {userChatData.map((message, index) => {
            return <MessageModule key={index} userMessage={message} />;
          })}
          <div ref={bottomRef}></div>
        </div>
        <MessageInputField
          handleFormSubmission={handleFormSubmission}
          inputHandler={inputHandler}
          inputMessage={inputMessage}
        />
      </div>
    </>
  );
}

export default Index;
