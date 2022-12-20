// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currencyItem} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = currencyItem
  return (
    <li className="currency-item">
      <div className="currency">
        <img src={currencyLogo} alt={currencyName} className="logo-style" />
        <p>{currencyName}</p>
      </div>
      <div className="currency">
        <p className="coin-style">{usdValue}</p>
        <p className="coin-style">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
