import React, { useState } from "react";
import Icon from "./Icon";
import Content from "./Content";
import HoverMenu from "./HoverMenu";
import EmailBody from "./EmailBody";
import "./Email.css";

function Email(props) {
  const [length, setLength] = useState(75);
  const [display, setDisplay] = useState({ display: "block" });
  const [isVisible, setIsVisible] = useState(true);
  const [grid, setGrid] = useState({
    gridTemplateColumns: "10% 20% 20% 40% 10%",
  });

  const handleMouseEnter = () => {
    setLength(50);
    setDisplay({ display: "none" });
    setIsVisible(false);
    setGrid({ gridTemplateColumns: "10% 20% 20% 30% 20%" });
  };
  const handleMouseLeave = () => {
    setLength(75);
    setDisplay({ display: "block" });
    setIsVisible(true);
    setGrid({ gridTemplateColumns: "10% 20% 20% 40% 10%" });
  };

  return (
    <>
      <div
        className="email-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={props.onEmailClick}
        style={grid}
      >
        <div className="icon-container">
          <Icon
            src="./assets/checkbox.svg"
            activeSrc="./assets/checkedbox.svg"
            type="box"
          />
          <Icon
            src="./assets/star.svg"
            activeSrc="./assets/gold-star.svg"
            type="star"
          />
          <Icon
            src="./assets/arrow.svg"
            activeSrc="./assets/gold-arrow.svg"
            type="arrow"
            important={props.important}
          />
        </div>

        <h2 className="title">{props.title}</h2>
        <h4 className="heading">{props.heading}</h4>
        <Content text={props.content} length={length} />

        {isVisible ? (
          <h3 className="date" style={display}>
            {props.date}
          </h3>
        ) : (
          <HoverMenu />
        )}
      </div>
      {props.isOpen && (
        <EmailBody
          title={props.title}
          heading={props.heading}
          content={props.content}
          date={props.date}
          onClose={props.onEmailClick}
        />
      )}
    </>
  );
}

export default Email;
