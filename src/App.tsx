import React, { useState } from 'react';
import './App.css';

type Currency = {
  id: number,
  curr: string
}

const currencyData =
  [
    { id: 1, curr: 'EUR' },
    { id: 2, curr: 'PLN' },
    { id: 3, curr: 'GEL' },
    { id: 4, curr: 'DKK' },
    { id: 5, curr: 'CZK' },
    { id: 6, curr: 'GBP' },
    { id: 7, curr: 'SEK' },
    { id: 8, curr: 'USD' },
    { id: 9, curr: 'RUB' }
  ]

const App = () => {

  const [selCurrencies, setSelCurrencies] = useState<Currency[]>([]);

  const onCurrencySelect = ({ id, curr }: Currency) => {
    const selCurrency = selCurrencies
      .find(item => item.id === id);
    if (selCurrency) {
      setSelCurrencies(selCurrencies.filter(x => x.id !== selCurrency.id))
    } else {
      setSelCurrencies([...selCurrencies, { id, curr }])
    }
  };

  const isCurrencyChecked = (currency: any) => selCurrencies.find(x => x.id === currency.id) != undefined;

  return (
    <div className="container">
      <div className="curr-block">
        {selCurrencies.map(item =>
          <div
            className="curr-select"
            onClick={() => onCurrencySelect(item)}
          >
            {item.curr}
            <span className="circle-x">
              X
            </span>
          </div>)}
        <div className="cell-wrap">
          {currencyData.map((item) => {
            return (
              <>
                <label
                  className="cell"
                  htmlFor={`sel-${item.id}`}
                >
                  <input
                    type="checkbox"
                    className="sel-curr"
                    id={`sel-${item.id}`}
                    onClick={() => onCurrencySelect(item)}
                    checked={isCurrencyChecked(item)}
                  >
                  </input>
                  {item.curr}
                </label>
              </>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
