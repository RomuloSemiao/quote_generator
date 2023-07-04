import { useState } from "react";

import style from "./Quote.module.scss";

const Quote = () => {
      const [quoteReturn, setQuoteReturn] = useState<any>(null);

      const callQuoteAPI = () => {
            fetch("https://api.api-ninjas.com/v1/quotes?category=love", {
                  method: "GET",
                  headers: {
                        "X-Api-Key": "mYIyI4pIHr6KaSUFkVnKmg==01t0V3mpTBCsKaZI",
                  },
            })
                  .then((response) => response.json())
                  .then((data) => {
                        setQuoteReturn(data); // Process the received data
                  })
                  .catch((error) => {
                        console.error("Error:", error);
                  });
      };

      return (
            <div className={style["quote"]}>
                  {quoteReturn ? (
                        <div className={style["quote__text"]}>
                              <p className={style["quote__text-quote"]}>
                                    {quoteReturn[0].quote}
                              </p>
                              <p className={style["quote__text-author"]}>
                                    , {quoteReturn[0].author}
                              </p>
                        </div>
                  ) : (
                        <div className={style["quote__text"]}>
                              <p className={style["quote__text-author"]}>
                                    Click on the button to generate the Quote
                              </p>
                        </div>
                  )}

                  <button
                        className={style["quote__button"]}
                        onClick={callQuoteAPI}
                  >
                        Quote
                  </button>
            </div>
      );
};

export default Quote;
