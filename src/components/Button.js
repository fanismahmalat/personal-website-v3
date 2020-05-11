import React from "react";

const Button = ({ link, type, placeholder }) => {
  return (
    <a href={link} className={`${type === "bordered" && "btn-bordered"} btn`}>
      {placeholder}
    </a>
  );
};

export default Button;
