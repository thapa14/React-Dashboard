import { faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Chatbox from "../../components/Chatbox";
import Taskbox from "../../components/Taskbox";

function Dashboard() {
  return (
    <>
      <div className="dashboard d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="dashboard__left d-flex align-items-center">
          <div className="dashboard__icon d-flex justify-content-center align-items-center">
            <FontAwesomeIcon
              icon={faPlane}
              style={{ fontSize: "3rem", transform: "rotate(-45deg" }}
            />
          </div>
          <div className="dashboard__details d-flex flex-column ">
            <p className="m-0">Analytics Dashboard</p>
            <p className="m-0">
              Dashboard is an online report where your website data from
              ecommerce to web analytics is displayed.
            </p>
          </div>
        </div>
        <div className="dashboard__right d-flex gap-4">
          <button className="btn btn-dark star">
            <FontAwesomeIcon icon={faStar} inverse />
          </button>
          <button className="btn btn-success create-new">
            <FontAwesomeIcon icon={faPlus} inverse />
            <span>Create New</span>
          </button>
        </div>
      </div>
      <div className="dashboard__modules d-flex flex-column flex-md-row gap-5">
        <Taskbox />
        <Chatbox />
      </div>
    </>
  );
}

export default Dashboard;
