import config from 'app-config'

export default {
  erc20: {
    platform: 'ethereum',
    standard: 'erc20',
    currency: 'eth',
    explorerApi: config.api.etherscan,
    explorerApiKey: config.api.etherscan_ApiKey,
  },
  bep20: {
    platform: 'binance smart chain',
    standard: 'bep20',
    currency: 'bnb',
    explorerApi: config.api.bscscan,
    explorerApiKey: config.api.bscscan_ApiKey,
  },
  erc20etl: {
    platform: 'ethereum',
    standard: 'erc20etl',
    currency: 'etl',
    explorerApi: config.api.etlscan,
    explorerApiKey: config.api.etherlite_ApiKey,
  },
}