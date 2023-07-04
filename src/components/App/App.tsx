import Header from "../Header/Header";
import Quote from "../Quote/Quote";
import Footer from "../Footer/Footer";

import style from "./App.module.scss";

function App() {
      return (
            <div className={style["container"]}>
                  <Header />
                  <Quote />
                  <Footer />
            </div>
      );
}

export default App;
