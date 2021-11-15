import { constants } from 'swap.app'
import BtcToEthLike from './atomic/BtcToEthLike'


class BTC2ETL extends BtcToEthLike {
  static getName() {
    return `${this.getFromName()}2${this.getToName()}`
  }
  static getFromName() {
    return constants.COINS.btc
  }
  static getToName() {
    return constants.COINS.etl
  }
  constructor(swap) {
    super(swap, {
      flowName: `BTC2ETL`,
      getMyAddress: swap.app.getMyEtlAddress.bind(swap.app),
      getParticipantAddress: swap.app.getParticipantEtlAddress.bind(swap.app),
    })
  }
}

export default BTC2ETL
