import { constants } from 'swap.app'
import EthLikeToBtc from './atomic/EthLikeToBtc'


class ETL2BTC extends EthLikeToBtc {
  static getName() {
    return `${this.getFromName()}2${this.getToName()}`
  }
  static getFromName() {
    return constants.COINS.etl
  }
  static getToName() {
    return constants.COINS.btc
  }
  constructor(swap) {
    super(swap, {
      flowName: `ETL2BTC`,
      getMyAddress: swap.app.getMyEtlAddress.bind(swap.app),
      getParticipantAddress: swap.app.getParticipantEtlAddress.bind(swap.app),
    })
  }
}

export default ETL2BTC
