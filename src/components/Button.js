import React from "react";
import { Link } from "gatsby";

const Button = ({ link, type, placeholder }) => {
  return (
    <Link
      to={link}
      className={`${type === "bordered" ? "btn-bordered" : ""} btn`}
    >
      {placeholder}
    </Link>
  );
};

export default Button;
