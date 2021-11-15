import web3 from './web3'
import link from './link'

export default {
  ETH: {
    currency: 'ETH',
    chainId: '0x1',
    networkVersion: 1,
    chainName: 'Ethereum',
    rpcUrls: [web3.provider],
    blockExplorerUrls: [link.etherscan],
  },
  BNB: {
    currency: 'BNB',
    chainId: '0x38',
    networkVersion: 56,
    chainName: 'Binance Smart Chain',
    rpcUrls: [web3.binance_provider],
    blockExplorerUrls: [link.bscscan],
  },
  ETL: {
    currency: 'ETL',
    chainId: '0x111',
    networkVersion: 111,
    chainName: 'Etherlite',
    rpcUrls: [web3.etl_provider],
    blockExplorerUrls: [link.etlscan],
  },
  ARBETH: {
    currency: 'ARBETH',
    chainId: '0xA4B1',
    networkVersion: 42161,
    chainName: 'Arbitrum',
    rpcUrls: [web3.arbitrum_provider],
    blockExplorerUrls: [link.arbitrum],
  },
}
