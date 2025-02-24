import {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = 'usd',
    amountDisable = false,
    currencyDisable = false,
    className = '',
}) {

    const amountInputId = useId();

  return (
    <div className={`p-2 rounded-2 text-sm flex ${className}`}>
        <div className="row justify-content-center">
            <div className="col-7">
                <div className="box-wrapper">
                    <label 
                    htmlFor={amountInputId} 
                    className='text-dark mb-2 form-label'>
                        {label}
                    </label>
                    <input type="number" 
                        id={amountInputId}
                        className='num-input-hide form-control w-100 bg-transparent shadow-none border-0'
                        placeholder='Amount'
                        disabled={amountDisable}
                        value={amount}
                        onChange={(e) => onAmountChange(Number(e.target.value))}
                    />
                </div>
            </div>
            <div className="col-5">
                <div className="select-wrapper text-end">
                    <p className='text-dark form-label mb-2'>Currency Type</p>
                    <select 
                    name="currencyType" 
                    className="form-select form-select-sm rounded-2 outline-none shadow-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                    >
                    {
                        currencyOptions.map((currency) => (
                            <option value={currency} key={currency}>
                                {currency}
                            </option>
                        ))
                    }
                    </select>
                </div>
            </div>

        </div>
    </div>
  )
}

export default InputBox
