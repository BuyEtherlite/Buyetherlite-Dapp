import api from './api'

export default {
  eth: `${api.etherscan}?module=proxy&action=eth_gasPrice&apikey=${api.etherscan_ApiKey}`,
  bsc: `${api.bscscan}?module=proxy&action=eth_gasPrice&apikey=${api.bscscan_ApiKey}`,
  etl: `${api.etlscan}?module=proxy&action=eth_gasPrice&apikey=${api.etherlite_ApiKey}`,
  btc: 'https://wiki.swaponline.io/blockcyper.php',
}
