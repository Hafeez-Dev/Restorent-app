import React, { useState } from "react";
import "./Style.css";
import Menu from "./Api";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqeList = [
  ...new Set(
    Menu.map((curElement) => {
      return curElement.category;
    })
  ),
  "All",
];

// React Outerside of default Function ..................

const Restorent = () => {
  //UseState Hooks
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqeList);

  //Filter the data from Api
  const filerItems = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((curElement) => {
      return curElement.category === category;
    });

    setMenuData(updatedList);
  };

  return (
    <>
      <Navbar filerItems={filerItems} menuList={menuList} />

      <div className="row col-10 mx-auto mt-5 align-items-center justify-content-center gy-5 gx-5">
        <MenuCard menuData={menuData} />
      </div>
    </>
  );
};

export default Restorent;
