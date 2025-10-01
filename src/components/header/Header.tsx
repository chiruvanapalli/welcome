import React, { useState } from "react";
import { Link } from "react-router-dom"; // <-- import Link
import Logo from "../../assets/images/logo-3.png";
import Sidebar from "../sidebar/Sidebar";
import { CaretDown } from "phosphor-react";
import "./Header.scss";

const Header = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);

  const handleShowSidebar = () => {
    setIsOpenSidebar(true);
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__left">
          {/* Logo */}
          <img src={Logo} alt="hi" />

          {/* Navigation */}
          <nav className="header__nav">
            <Link to="/" className="header__link">
              Home
            </Link>
            <Link to="/shop" className="header__link">
              Shop
            </Link>
            <Link to="/about" className="header__link">
              About
            </Link>
            <Link to="/contact" className="header__link">
              Contact
            </Link>
          </nav>
        </div>

        {/* Cart */}
        <div className="header__right">
          <div className="header__right__dropdown" onClick={handleShowSidebar}>
            Select Location
            <button>
              <CaretDown size={22} />
            </button>
          </div>
          <div className="header__right__cart">
            Cart : <strong>0 items</strong>
          </div>
        </div>
      </div>

      <Sidebar
        isVisible={isOpenSidebar}
        setIsVisible={() => setIsOpenSidebar(false)}
      />
    </header>
  );
};

export default Header;
