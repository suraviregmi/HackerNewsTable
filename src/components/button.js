import React from "react";
import propTypes from "prop-types";
const Button = ({
  id,
  handelBtnClick = f => f,
  content,
  className,
  ...props
}) => (
  <button className={className} onClick={() => handelBtnClick(id)}>
    {content && <span>{content}</span>}
  </button>
);

Button.propTypes = {
  className: propTypes.string,
  id: propTypes.oneOfType([propTypes.string, propTypes.number]),
  handelBtnClick: propTypes.func
};

export default Button;
