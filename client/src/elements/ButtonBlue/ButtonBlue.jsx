import classes from "./ButtonBlue.module.scss";

const ButtonBlue = ({ label, icon }) => {
  return (
    <button className={classes.addButton}>
      {icon}
      {label}
    </button>
  );
};

export default ButtonBlue;
