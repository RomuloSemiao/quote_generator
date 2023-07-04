import Logo from "../../assets/icons/Logo";

import style from "./Header.module.scss";

const Header = () => {
      return (
            <header className={style["header"]}>
                  <Logo className={style["header__logo"]} />

                  <ul className={style["header__navigator"]}>
                        <li className={style["header__navigator-item"]}>
                              <a
                                    href="https://romulosemiao.github.io/portfolio_romulosemiao/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                              >
                                    About Dev
                              </a>
                        </li>
                        <li className={style["header__navigator-item"]}>
                              <a
                                    href="https://api-ninjas.com/api/quotes"
                                    target="_blank"
                                    rel="noopener noreferrer"
                              >
                                    API
                              </a>
                        </li>
                        <li className={style["header__navigator-item"]}>
                              <a
                                    href="https://www.linkedin.com/in/romulosemiao/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                              >
                                    LinkedIn
                              </a>
                        </li>
                        <li className={style["header__navigator-item"]}>
                              <a
                                    href="https://github.com/RomuloSemiao"
                                    target="_blank"
                                    rel="noopener noreferrer"
                              >
                                    GitHub
                              </a>
                        </li>
                  </ul>
            </header>
      );
};

export default Header;
