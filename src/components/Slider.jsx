import React from "react";
import { SliderContainer, SliderInner } from "./styled/SliderContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faGooglePlus
} from "@fortawesome/free-brands-svg-icons";
export const Slider = () => {
  return (
    <SliderContainer>
      <SliderInner>
        <div className="image">
          <img src="https://picsum.photos/201/200" alt="Team Photo" />
        </div>
        <div className="mt-3">
          <h2 className="text-imp text-center">John Cris</h2>
          <p className="text-center text-muted">My favourite Job</p>
        </div>
        <div className="mt-3 col d-flex justify-content-around px-5">
          <a href="#" className="link">
            <FontAwesomeIcon icon={faGooglePlus} />
          </a>
          <a href="#" className="link">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="#" className="link">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </SliderInner>
      <SliderInner>
        <div className="image">
          <img src="https://picsum.photos/200/200" alt="Team Photo" />
        </div>
        <div className="mt-3">
          <h2 className="text-imp text-center">William</h2>
          <p className="text-center text-muted">My favourite Job</p>
        </div>
        <div className="mt-3 col d-flex justify-content-around px-5">
          <a href="#" className="link">
            <FontAwesomeIcon icon={faGooglePlus} />
          </a>
          <a href="#" className="link">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="#" className="link">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </SliderInner>
      <SliderInner>
        <div className="image">
          <img src="https://picsum.photos/202/202" alt="Team Photo" />
        </div>
        <div className="mt-3">
          <h2 className="text-imp text-center">Smith Will</h2>
          <p className="text-center text-muted">My favourite Job</p>
        </div>
        <div className="mt-3 col d-flex justify-content-around px-5">
          <a href="#" className="link">
            <FontAwesomeIcon icon={faGooglePlus} />
          </a>
          <a href="#" className="link">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="#" className="link">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </SliderInner>
      <SliderInner>
        <div className="image">
          <img src="https://picsum.photos/205/200" alt="Team Photo" />
        </div>
        <div className="mt-3">
          <h2 className="text-imp text-center">Raj Roy</h2>
          <p className="text-center text-muted">My favourite Job</p>
        </div>
        <div className="mt-3 col d-flex justify-content-around px-5">
          <a href="#" className="link">
            <FontAwesomeIcon icon={faGooglePlus} />
          </a>
          <a href="#" className="link">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="#" className="link">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </SliderInner>
      <SliderInner>
        <div className="image">
          <img src="https://picsum.photos/203/200" alt="Team Photo" />
        </div>
        <div className="mt-3">
          <h2 className="text-imp text-center">Sam Doe</h2>
          <p className="text-center text-muted">My favourite Job</p>
        </div>
        <div className="mt-3 col d-flex justify-content-around px-5">
          <a href="#" className="link">
            <FontAwesomeIcon icon={faGooglePlus} />
          </a>
          <a href="#" className="link">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="#" className="link">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </SliderInner>
    </SliderContainer>
  );
};
