import React from "react";

// load assets
import "../../assets/css/button.scss";

const Button = ({
  type = "button",
  text,
  img,
  link = "#",
  style = {},
  className,
}) => {
  return (
    <div className={className} style={style}>
      {type === "link" ? (
        <a href={link} rel="noreferrer">
           <div className="img">
           <img src={img} />
           </div>
           {text}
         
        </a>
      ) : (
        <button type={type}>
          {text} 
        </button>
      )}
    </div>
  );
};

export default Button;
