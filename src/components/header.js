import classNames from "classnames";
import React, { useState } from "react";

import HeaderBrand from "./header-brand";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-item">
          <HeaderBrand />
        </div>
        <a
          role="button"
          className={classNames("navbar-burger", { "is-active": isMenuOpen })}
          aria-label="menu"
          aria-expanded={isMenuOpen}
          data-target="headerMenu"
          onClick={(event) => {
            setIsMenuOpen(!isMenuOpen);
            event.preventDefault();
          }}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div
        id="headerMenu"
        className={classNames("navbar-menu", { "is-active": isMenuOpen })}
      >
        <div className="navbar-end">
          <a className="navbar-item" href="https://docs.dialogform.in">
            Documentation
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
