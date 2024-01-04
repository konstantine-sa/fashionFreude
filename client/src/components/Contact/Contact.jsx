import classes from "./Contact.module.scss";

import FacebookOutlinedIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Contact = () => {
  return (
    <div className={classes.contact}>
      <div className={classes.wrapper}>
        <p>Bleiben Sie mit uns in Kontakt: </p>

        <div className={classes.mail}>
          <input
            type="email"
            placeholder="Geben Sie Ihre E-Mail-Adresse ein..."
          />
          <button>Treten Sie uns bei</button>
        </div>

        <div className={classes.icons}>
          <FacebookOutlinedIcon className={classes.icon} />
          <InstagramIcon className={classes.icon} />
          <TwitterIcon className={classes.icon} />
          <PinterestIcon className={classes.icon} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
