import React from "react";
import MessageModule from "./comp/MessageModule";
import { useState } from "react";
import InputField from "./comp/InputField";

function MessageAreaWrapper() {
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
      userName: "viggo",
      message:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising the pain was born and i will give you acomplete account of the system.",
      type: "",
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
      message: inputMessage,
      type: "",
      time: new Date().getTime(),
    };

    setUserChatData(() => {
      return [...userChatData, userMessage];
    });
    window.scrollTo();
    setInputMessage("");
  };
  return (
    <>
      <div className="chatbox__chatting">
        {userChatData.map((message, index) => {
          return <MessageModule key={index} userMessage={message} />;
        })}
      </div>
      <InputField
        handleFormSubmission={handleFormSubmission}
        inputHandler={inputHandler}
        inputMessage={inputMessage}
      />
    </>
  );
}

export default MessageAreaWrapper;
