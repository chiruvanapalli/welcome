import React from "react";
import { X } from "phosphor-react";
import "./Sidebar.scss";

const Sidebar = ({ isVisible, setIsVisible }: any) => {
  return (
    <>
      {
        <div className={`sidebar ${isVisible ? "open" : ""}`}>
          <div className="sidebar_header">
            <h3>Select your location</h3>
            <button className="close_btn" onClick={setIsVisible}>
              <X size={20} />
            </button>
          </div>
          <div className="sidebar__body">Design will come</div>
        </div>
      }
    </>
  );
};

export default Sidebar;
