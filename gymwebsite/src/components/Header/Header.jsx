import React, { useState } from "react";
import logo from "../../images/logo.png";
import "./Header.css";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [MenuOpened, setMenu] = useState(false);
  return (
    <div className="header">
      <img src={logo} alt="" className="logo" />
      {MenuOpened === false && mobile === true ? (
        <div onClick={() => setMenu(true)}>
          <img src={Bars} alt="" className="menubar" />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              onClick={() => setMenu(false)}
              to="hero"
              smooth={true}
              span={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenu(false)}
              to="programs"
              smooth={true}
              span={true}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenu(false)}
              to="reasons"
              smooth={true}
              span={true}
            >
              Why us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenu(false)}
              to="Plans"
              smooth={true}
              span={true}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenu(false)}
              to="Testimonlios"
              smooth={true}
              span={true}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};
export default Header;
