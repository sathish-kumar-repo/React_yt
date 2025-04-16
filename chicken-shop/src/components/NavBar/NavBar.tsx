import { MenuLogo } from "../Logo/MenuLogo";
import tfcLogo from "../../assets/images/tfc.png";

import "./NavBar.scss";
import { CloseLogo } from "../Logo/CloseLogo";

export const NavBar = () => {
  return (
    <>
      <div className="nav-btn">
        <MenuLogo className="svg" />
      </div>

      <nav className="navbar">
        <div className="navbar-header">
          <h3>TFC NATION</h3>
          <img src={tfcLogo} alt="TF" />
          <span className="nav-close">
            <CloseLogo className="svg" />
          </span>
        </div>
        <ul className="nav-items">
          <li>
            <a href="#" className="nav-link">
              home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              features
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              about
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              product
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
