import classes from "./Backdrop.module.scss";

const Backdrop = ({ cartOpened, setCartOpened }) => {
  return (
    <>
      <div
        className={classes.backdrop}
        onClick={() => setCartOpened(!cartOpened)}
      ></div>
    </>
  );
};

export default Backdrop;
