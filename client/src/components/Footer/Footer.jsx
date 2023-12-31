import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      {/* top */}
      <div className={classes.top}>
        <div className={classes.item}>
          <h1 className={classes.itemTitle}>Kategorien</h1>
          <span>Damen</span>
          <span>Herren</span>
          <span>Kinder</span>
          <span>Schuhe</span>
          <span>Accessoires</span>
        </div>
        <div className={classes.item}>
          <h1 className={classes.itemTitle}>Links</h1>
          <span>FAQ</span>
          <span>Seiten</span>
          <span>Geschäfte</span>
          <span>Vergleichen</span>
          <span>Cookies</span>
        </div>
        <div className={classes.item}>
          <h1 className={classes.itemTitle}>Über uns</h1>
          <span>
            Wir bei Fashion Freunde sind leidenschaftlich darum bemüht, Ihnen
            die neuesten Modetrends in höchster Qualität zu bieten. <br /> Unser
            Ziel ist es, Ihren individuellen Stil zu unterstreichen und Ihnen
            ein unvergessliches Einkaufserlebnis zu bieten.
          </span>
        </div>
        <div className={classes.item}>
          <h1 className={classes.itemTitle}>Contacts</h1>
          <div className={classes.contacts}>
            <p className={classes.contactsTitle}>Adresse:</p>
            <span>Muster Straße 99</span>
            <p className={classes.contactsTitle}>Telefon:</p>
            <a href="tel:011 222 333 45">011 222 333 45</a>
            <p className={classes.contactsTitle}>E-Mail:</p>
            <a href="mailto:fashionfreunde@mail.com">fashionfreunde@mail.com</a>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className={classes.bottom}>
        <div className={classes.left}>
          <a href="/" className={classes.logo}>
            Fashion Freunde
          </a>
          <span className={classes.copyright}>
            © Copyright 2024. All rights reserved
          </span>
        </div>

        <div className={classes.right}>
          <img src="/img/stripe.png" alt="stripe payment service banner"></img>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
