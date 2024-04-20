import React from "react";

// load assets
import "../../assets/css/signbutton.scss";

const SignButton = ({
  type = "button",
  text,
  link = "#",
  style = {},
  className,
}) => {
  return (
    <div className={className} style={style}>
      {type === "link" ? (
        <a href={link} rel="noreferrer">
          {text}
        </a>
      ) : (
        <button type={type}>{text}</button>
      )}
    </div>
  );
};

export default SignButton;
