// Depedencies
import BaseService from '../baseService';

/**
 * Suscriptions stripe resource.
 * @author Daniel Mejia
 * @class Suscriptions
 */
export class Suscriptions extends BaseService {
  /**
   * Resource url.
   * @type { string }
   */
  resourceUrl = 'suscriptions';

  /**
   * Delete a suscription.
   * @param { Number } id The id of suscription to delete.
   * @param { Object } [requestParams=this.defaultParams] The params to make the request.
   * @return { Promise<any> } The data promise.
   */
  delete = (id, requestParams = this.defaultParams) => {
    const { url = this.resourceUrl, ...rest } = requestParams;
    const requestUrl = `${url}/${id}`;
    return this.axiosInstance.delete(requestUrl, { ...rest });
  }
}

export default Suscriptions;
