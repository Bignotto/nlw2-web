import React from "react";
import { Link } from "react-router-dom";

import logoImg from "../../assets/images/logo.svg";
import backIcon from "../../assets/images/icons/back.svg";

const TeacherList: React.FC = () => {
  return (
    <div id="page-teacher-list" className="container">
      <header className="page-header">
        <div className="top-bar-container">
          <Link to="/"></Link>
        </div>
      </header>
    </div>
  );
};

export default TeacherList;
