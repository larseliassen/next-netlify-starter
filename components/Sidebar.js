import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/">
        Forside
      </a>

      <a className="menu-item" href="/trees">
        Juletrær
      </a>

      <a className="menu-item" href="/wood">
        Ved
      </a>
    </Menu>
  );
};
