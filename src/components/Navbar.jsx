import React, { useState } from "react";
// import "bootstrap/js/dist/collapse.js";
import logo from "../assets/images/sports-logo-transparent.png";
import { MenuOverlay } from "./styled/MenuOverlay";
import { MenuButton } from "./styled/MenuButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Button } from "reactstrap";
import { Modal } from "./Modal";

export const Navbar = props => {
  const [animate, setAnimation] = useState(false);
  const [collapse, toggleCollapse] = useState(true);
  const [menu, toggleMenu] = useState(false);
  const [menuInner, toggleInnnerMenu] = useState(false);
  const [isModalClosed, closeModal] = useState(true);
  const [modal, setModal] = useState(null);

  const handleMenu = () => {
    if (menu) {
      toggleInnnerMenu(!menuInner);
      setTimeout(() => {
        toggleMenu(!menu);
      }, 300);
    } else {
      toggleMenu(!menu);
      setTimeout(() => {
        toggleInnnerMenu(!menuInner);
      }, 700);
    }
  };

  const { hash } = props.location;

  const doAnimation = () => {
    if (window.scrollY >= window.innerHeight / 2) {
      setAnimation(true);
    }
    if (window.scrollY < window.innerHeight / 2) {
      setAnimation(false);
    }
  };

  React.useEffect(() => {
    doAnimation();
    window.onscroll = doAnimation;
  });
  return (
    <>
      {!isModalClosed && (
        <Modal open={!isModalClosed} modal={modal} cancel={closeModal}></Modal>
      )}
      <nav
        className={`navbar navbar-expand-lg navbar-light custom-navbar  ${
          animate ? "" : "no"
        }animate-nav`}
      >
        <a className={`navbar-brand`} href="#">
          <img src={logo} alt="LCO Logo" className="logo" />
        </a>
      </nav>

      {animate && (
        <MenuButton onClick={handleMenu}>
          <FontAwesomeIcon icon={!menu ? faBars : faTimes} />
        </MenuButton>
      )}

      <MenuOverlay className={` ${menu ? "open" : "closed"}`}>
        {menuInner && (
          <>
            <div className={`menu-inner ${menuInner ? "d-block" : "d-none"}`}>
              <div className="h-100 d-flex flex-column justify-content-center align-items-center">
                <h1 className="text-imp text-effect mb-5">Menu</h1>

                <div className="text-center mt-5">
                  <ul class="navbar-nav">
                    <li class="nav-item active">
                      <a
                        class={`nav-link link ${
                          hash == "#about" ? "active" : ""
                        }`}
                        href="#about"
                        onClick={handleMenu}
                      >
                        ABOUT <span class="sr-only">(current)</span>
                      </a>
                    </li>
                    <li class="nav-item ">
                      <a
                        class={`nav-link link ${
                          hash == "#tournament" ? "active" : ""
                        }`}
                        href="#tournament"
                        onClick={handleMenu}
                      >
                        TOURNAMENT <span class="sr-only">(current)</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class={`nav-link link ${
                          hash == "#team" ? "active" : ""
                        }`}
                        href="#team"
                        onClick={handleMenu}
                      >
                        TEAM <span class="sr-only">(current)</span>
                      </a>
                    </li>
                    <li class="nav-item ">
                      <a
                        class={`nav-link link ${
                          hash == "#video" ? "active" : ""
                        }`}
                        href="#video"
                        onClick={handleMenu}
                      >
                        VIDEO <span class="sr-only">(current)</span>
                      </a>
                    </li>
                    <li class="nav-item ">
                      <a
                        class={`nav-link link ${
                          hash == "#faq" ? "active" : ""
                        }`}
                        href="#faq"
                        onClick={handleMenu}
                      >
                        FAQ <span class="sr-only">(current)</span>
                      </a>
                    </li>

                    <li class="nav-item ">
                      <a
                        class={`nav-link link ${
                          hash == "#contact" ? "active" : ""
                        }`}
                        href="#contact"
                        onClick={handleMenu}
                      >
                        CONTACT US <span class="sr-only">(current)</span>
                      </a>
                    </li>

                    <li class="nav-item mt-3">
                      <div>
                        <Button
                          color="success"
                          className="rounded-0 w-100"
                          onClick={() => {
                            console.log("Login");
                            closeModal(false);
                            setModal("login");
                          }}
                        >
                          Login
                        </Button>

                        <Button
                          color="primary"
                          outline
                          className="rounded-0 w-100 mt-3"
                          onClick={() => {
                            closeModal(false);
                            setModal("signup");
                          }}
                        >
                          Register
                        </Button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}
      </MenuOverlay>
    </>
  );
};
