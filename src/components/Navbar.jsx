import React from "react";

const Navbar = ({ filerItems, menuList }) => {
  return (
    <>
      <nav className="navbar navbar-expand navbar-dark bg-dark col-md-5 col-10 mx-auto rounded-pill opacity-75 mt-5">
        <div className="navbar-nav w-100 justify-content-center">
          {menuList.map((curElement) => {
            return (
              <a
                className="nav-link"
                key={curElement}
                onClick={() => filerItems(curElement)}
              >
                {curElement}
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
