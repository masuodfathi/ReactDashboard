import React from "react";

const Sidebar = () => {
    return (
      <div className="col-lg-3 col-md-4 col-sm-12 bg-light p-4">
      <h2>Navigation</h2>
      <ul className="list-group">
        <li className="list-group-item"><a href="http:/ffff.com" className="text-decoration-none">Home</a></li>
        <li className="list-group-item"><a href="http:/ffff.com" className="text-decoration-none">My Tasks</a></li>
        <li className="list-group-item"><a href="http:/ffff.com" className="text-decoration-none">Projects</a></li>
      </ul>
    </div>
    );
  };

export default Sidebar;