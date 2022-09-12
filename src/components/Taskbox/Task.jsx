import React from "react";
import { Draggable } from "react-beautiful-dnd";

function Task({ taskContent, index }) {
  const { id, description, task, attribute, attributeVal } = taskContent;
  return (
    <>
      <Draggable key="id" draggableId={id} index={index}>
        {(provided) => (
          <div
            className="task d-flex align-items-center"
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <div className={`task__stripe ${attribute}`}></div>
            <div className="task__checkbox">
              <input type="checkbox" />
            </div>
            <div className={`d-flex flex-row w-100 gap-3 ${attribute}-dir`}>
              <div className="task__message">
                <h5>{task}</h5>
                <span>{description}</span>
              </div>
              {attribute !== "image" ? (
                <span className={`badge badge-pill ${attribute}-badge`}>
                  {attributeVal}
                </span>
              ) : (
                <img className="task-image" src={attributeVal} alt="img" />
              )}
            </div>
          </div>
        )}
      </Draggable>
    </>
  );
}

export default Task;
