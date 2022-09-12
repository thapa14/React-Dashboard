import React from "react";

function MessageInputField({
  handleFormSubmission,
  inputHandler,
  inputMessage,
}) {
  return (
    <>
      <div className="footer chatbox__input d-flex align-items-center">
        <div className="chatbox__input-wrapper">
          <form onSubmit={handleFormSubmission}>
            <input
              type="text"
              placeholder="write here and hit enter to save"
              value={inputMessage}
              onChange={inputHandler}
            />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </>
  );
}

export default MessageInputField;
