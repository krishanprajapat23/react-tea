import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import {InputBox} from "./components/index"

function App() {

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);




  const swap = () =>{
    // Swap `from` and `to` currencies
    const temp = from;
    setFrom(to)
    setTo(temp)

    // Swap `amount` and `convertedAmount`
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert = () => {
    if (currencyInfo && currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
  } else {
      console.error("Currency info not available");
  }
  };


  return (
    <>
      <div className="container-md container-fluid">
        <main>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="card">
                <h1 className="p-2 text-center fw-bold text-uppercase">Currency Converter</h1>
                <form 
                className="card-body"
                  onSubmit={(e) => {
                    e.preventDefault();
                    convert();
                  }}
                >
                  <div className="w-100 mb-1">
                    <InputBox className="inputBox"
                      label='From'
                      amount={amount}
                      currencyOptions={options}
                      onCurrencyChange={(currency) => setFrom(currency)}
                      selectCurrency={from}
                      onAmountChange={(amount) => setAmount(amount)}                     
                    />
                  </div>
                  <div className="position-relative w-full">
                    <button 
                      type="button"
                      className="position-absolute start-50 translate-middle btn btn-theme"
                      onClick={swap}
                    >
                      Swap
                    </button>
                  </div>
                  <div className="w-100 mb-4">
                    <InputBox 
                    className="inputBox"
                      label='To'
                      amount={convertedAmount}
                      currencyOptions={options}
                      onCurrencyChange={(currency) => setTo(currency)}
                      selectCurrency={to}
                      amountDisable
                    />
                  </div>
                  <div className="w-100 text-center">
                    <button type="submit" className="btn btn-theme">
                      Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
