import style from "./Footer.module.scss";

const Footer = () => {
      return (
            <footer className={style["footer"]}>
                  <span className={style["footer__text"]}>
                        Rômulo Semião - All rigths reserved ©
                  </span>
            </footer>
      );
};

export default Footer;
