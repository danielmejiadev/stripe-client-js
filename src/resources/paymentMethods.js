// Depedencies
import BaseService from '../baseService';

/**
 * PaymentMethods stripe resource.
 * @author Daniel Mejia
 * @class PaymentMethods
 */
export class PaymentMethods extends BaseService {
  /**
   * Resource url.
   * @type { string }
   */
  resourceUrl = 'payment_methods';

  /**
   * Attach a payment method.
   * @param { Number } id The id to attach by.
   * @param { Object } [requestParams=this.defaultParams] The params to make the request.
   * @return { Promise<any> } The data promise.
   */
  attach = (id, requestParams = this.defaultParams) => {
    const { url = this.resourceUrl, ...rest } = requestParams;
    const requestUrl = `${url}/${id}/attach`;
    return this.axiosInstance.post(requestUrl, undefined, { ...rest });
  }
}

export default PaymentMethods;
