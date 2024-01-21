import classes from "./ButtonBlue.module.scss";

const ButtonBlue = ({ label, icon, onClick }) => {
  return (
    <button className={classes.addButton} onClick={onClick}>
      {icon}
      {label}
    </button>
  );
};

export default ButtonBlue;
