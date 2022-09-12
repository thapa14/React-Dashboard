import React, { useState } from "react";
import Task from "./Task";
import "./style.css";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const taskListData = [
  {
    id: "1",
    task: "Wash the Car",
    description: "Written By Bob",
    attribute: "rejected",
    attributeVal: "rejected",
  },
  {
    id: "2",
    task: "Task with dropdown menu",
    description: "By Johnny",
    attribute: "latest",
    attributeVal: "latest task",
  },
  {
    id: "3",
    task: "Badge on right task",
    description: "this task has shown on hover actions",
    attribute: "latest",
    attributeVal: "latest task",
  },
  {
    id: "4",
    task: "Go grocery shopping",
    description: "A short description for this todo item",
    attribute: "image",
    attributeVal: "./images/john.png",
  },
  {
    id: "5",
    task: "Wash the Car",
    description: "Written By Bob",
    attribute: "rejected",
    attributeVal: "rejected",
  },
  {
    id: "6",
    task: "Service the Car",
    description: "Written By Bob",
    attribute: "planned",
    attributeVal: "planned",
  },
];

function Index() {
  const [taskArr, setTaskArr] = useState([...taskListData]);

  // function to handle drag and drop

  const onEnd = (result) => {
    if (!result.destination) return;
    const {
      destination: { index: endIndex },
      source: { index: startIndex },
    } = result;
    const arr = Array.from(taskArr);
    const [removed] = arr.splice(startIndex, 1);
    arr.splice(endIndex, 0, removed);
    setTaskArr(arr);
  };

  return (
    <>
      <div className="box__container">
        <div className="box__container-heading ">
          <FontAwesomeIcon
            icon={faLayerGroup}
            style={{ color: "blue" }}
            className="heading-icon"
          />
          <h4 className="m-0">Task Box</h4>
        </div>
        <DragDropContext onDragEnd={onEnd}>
          <Droppable droppableId="taskListArea">
            {(provided) => (
              <div
                className="box__container-main box__container-main--modify"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {taskArr.map((task, index) => {
                  return (
                    <Task key={task.id} taskContent={task} index={index} />
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <div className="footer d-flex align-items-center justify-content-end">
          <button className="btn btn-light">Cancel</button>
          <button
            className="btn btn-primary"
            onClick={() => {
              console.log(taskArr);
            }}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
}

export default Index;
