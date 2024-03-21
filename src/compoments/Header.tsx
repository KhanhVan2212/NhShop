import Logo from "@/assets/logo.svg";
import User from "@/assets/icons/mdi_account-alert-outline.svg";
import Search from "@/assets/icons/2.svg";
import Head from "@/assets/icons/3.svg";
import Cart from "@/assets/icons/4.svg";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
    <div className="container">
      <div className="header-inner">
        <a href="#"className="header__logo">
        <img src={Logo} alt="#" />
        </a>
        <div className="button-mobile"><button>=</button></div>
        <nav className="main-menu">
          <ul className="main-menu__list">
            <li className="main-menu__item">
              <NavLink to="/" className="main-menu__link">Home</NavLink>
            </li>
            <li className="main-menu__item">
              <NavLink to="shop" className="main-menu__link">Shop</NavLink>
            </li>
            <li className="main-menu__item">
              <NavLink to="about"className="main-menu__link">About</NavLink>
            </li>
            <li className="main-menu__item">
              <NavLink to="contact"className="main-menu__link">Contact</NavLink>
            </li>
          </ul>
        </nav>
        <div className="header-items">
          <div className="header-item-user">
            <span><img src={User} /></span>
          </div>
          <div className="header-item-user">
            <span><img src={Search} /></span>
          </div>
          <div className="header-item-user">
            <span><img src={Head} /></span>
          </div>
          <div className="header-item-user">
            <span><img src={Cart} /></span>
          </div>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header
