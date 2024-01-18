import React from "react";

const NavListItem = ({ item, navOnClik }) => {
  return (
    <li>
      <a
        href="#"
        className={`${item.active ? "active" : undefined}`}
        onClick={() => navOnClik(item._id, item.target)}
      >
        <i className={`bi ${item.icon}`}></i>
        <span className="navName">{item.name}</span>
      </a>
    </li>
  );
};

export default NavListItem;
