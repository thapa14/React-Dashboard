import React, { useState, useRef, useEffect } from "react";
import MessageModule from "./comp/MessageModule";
import "./style.css";
import InputField from "./comp/InputField";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Index() {
  const bottomRef = useRef();
  const [inputMessage, setInputMessage] = useState("");
  const [userChatData, setUserChatData] = useState([
    {
      id: 1,
      userName: "viggo",
      message:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising the pain was born and i will give you acomplete account of the system.",
      type: "other",
      time: "11:01 AM | Yesterday",
    },
    {
      id: 2,
      userName: "john",
      message:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising the pain was born and i will give you acomplete account of the system.",
      type: "",
      time: "11:01 AM | Yesterday",
    },
    {
      id: 3,
      userName: "viggo",
      message:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising the pain was born and i will give you acomplete account of the system.",
      type: "other",
      time: "11:01 AM | Yesterday",
    },
    {
      id: 4,
      userName: "john",
      message:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising the pain was born and i will give you acomplete account of the system.",
      type: "",
      time: "11:01 AM | Yesterday",
    },
    {
      id: 5,
      userName: "viggo",
      message:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising the pain was born and i will give you acomplete account of the system.",
      type: "other",
      time: "11:01 AM | Yesterday",
    },
  ]);

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
      time: new Date().getTime(),
    };

    setTimeout(() => {
      setUserChatData(() => {
        return [...userChatData, userMessage];
      });
    }, 500);
    setInputMessage("");
  };

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
        <InputField
          handleFormSubmission={handleFormSubmission}
          inputHandler={inputHandler}
          inputMessage={inputMessage}
        />
      </div>
    </>
  );
}

export default Index;
