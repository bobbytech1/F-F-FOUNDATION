import { Link, } from "react-router-dom";
const Button = ({ text, to, height, width, onClick, className, type, icon: Icon }) => {
  return (
    <>
      <Link
        className={`bg-customorange hover:bg-secondcolor ${className}`}
        type={type}
        style={{ height: height, width: width }}
        to={to}
        onClick={onClick}
      >
        {text}
        {Icon && <Icon />}
      </Link>
    </>
  );
};

export default Button;
