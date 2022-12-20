import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrencyList extends Component {
  state = {isLoading: true, currenciesList: []}

  componentDidMount() {
    this.getCurrenciesList()
  }

  getCurrenciesList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const responseObject = await response.json()

    const convertResponseObject = responseObject.map(item => ({
      id: item.id,
      currencyName: item.currency_name,
      usdValue: item.usd_value,
      euroValue: item.euro_value,
      currencyLogo: item.currency_logo,
    }))

    this.setState({currenciesList: convertResponseObject, isLoading: false})
  }

  render() {
    const {isLoading, currenciesList} = this.state
    return (
      <div className="loader">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="list-container">
            <h1 className="main-heading">Cryptocurrency Tracker</h1>
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
                alt="cryptocurrency"
                className="currency-logo"
              />
            </div>
            <div className="currency-container">
              <div className="list-heading">
                <div>
                  <p>Coin Type</p>
                </div>
                <div className="currency">
                  <p className="coin-style">USD</p>
                  <p className="coin-style">EURO</p>
                </div>
              </div>
              <ul className="currency-list">
                {currenciesList.map(item => (
                  <CryptocurrencyItem currencyItem={item} key={item.id} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}
export default CryptocurrencyList
