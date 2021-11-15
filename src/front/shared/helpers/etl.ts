import ethLikeHelper from 'common/helpers/ethLikeHelper'

// TODO: =================================

// ! Deprecated. Use common/helpers/ethLikeHelper.etl

// TODO: =================================

type EstimateFeeParams = {
  method: string
}

const estimateFeeValue = async (params: EstimateFeeParams) => {
  return ethLikeHelper.etl.estimateFeeValue(params)
}

const estimateGasPrice = async (): Promise<number> => {
  return ethLikeHelper.etl.estimateGasPrice()
}

export default {
  estimateFeeValue,
  estimateGasPrice,
}
