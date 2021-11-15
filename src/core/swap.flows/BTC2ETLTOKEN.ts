import { constants } from 'swap.app'
import BtcToEthLikeToken from './atomic/BtcToEthLikeToken'


export default (tokenName) => {

  class BTC2ETLTOKEN extends BtcToEthLikeToken {
    static blockchainName = `ETL`
    _flowName: string

    static getName() {
      return `${this.getFromName()}2${this.getToName()}`
    }
    static getFromName() {
      return constants.COINS.btc
    }
    static getToName() {
      return `{${this.blockchainName}}${tokenName.toUpperCase()}`
    }

    constructor(swap) {
      super(swap, {
        blockchainName: `ETL`,
        tokenName,
        getMyAddress: swap.app.getMyEtlAddress.bind(swap.app),
        getParticipantAddress: swap.app.getParticipantEtlAddress.bind(swap.app),
      })
      this._flowName = BTC2ETLTOKEN.getName()
    }
  }

  return BTC2ETLTOKEN
}
