import React from "react";
import { useToggle } from "../hooks";
import { SearchModal } from "../component";
import "../scss/Nav.scss";

import { IconContext } from "react-icons";
import { FcFilm, FcTrademark } from "react-icons/fc";
import { IoIosSearch } from "react-icons/io";

const Nav = () => {
  const [searchOn, setSearchOn] = useToggle(false);

  console.log(searchOn);

  return (
    <>
      {searchOn ? (
        <SearchModal setSearchOn={setSearchOn} />
      ) : (
        <IconContext.Provider value={{ size: "2.2em", color: "#808080" }}>
          <div className="Nav">
            <div className="navLogo">
              <FcFilm />
              MovieInfo
            </div>
            <div className="navRightBar">
              <IoIosSearch onClick={setSearchOn} />
              <FcTrademark />
            </div>
          </div>
        </IconContext.Provider>
      )}
    </>
  );
};

export default Nav;
