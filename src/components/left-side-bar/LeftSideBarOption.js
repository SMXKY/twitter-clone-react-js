import PropTypes from "prop-types";
//import { useState } from "react";

export default function LeftSideBarOption(props) {
  //const [notification, setNotification] = useState(props.noOfNotifactions);

  return (
    <div className="left-side-bar-option">
      <div className="left-side-bar-grid-div">
        <img
          src={props.img}
          alt="left-side-bar-icon"
          className={`${props.specificClass} left-side-bar-option-img`}
        />
        <span
          className={
            props.noOfNotifactions && props.noOfNotifactions > 0
              ? "on-left-side-bar-notification"
              : "off-element"
          }
        >
          {props.noOfNotifactions}
        </span>
      </div>
      <div className="left-side-bar-grid-div">
        <p
          className={`${props.name ? "left-side-bar-text" : "off-element"} ${
            props.isOn
              ? "on-left-side-bar-option-name"
              : "off-left-side-bar-option-name"
          }`}
        >
          {props.name}
        </p>
      </div>
    </div>
  );
}

LeftSideBarOption.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string,
  noOfNotifactions: PropTypes.number,
  isOn: PropTypes.bool.isRequired,
  specificClass: PropTypes.string,
};
