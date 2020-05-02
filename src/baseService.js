/**
 * Base service for http request.
 * @author Daniel Mejia
 * @class BaseService
 */
class BaseService {
  /**
   * The axios instance to make http request.
   * @type { AxiosInstance }
   */
  axiosInstance;

  /**
   * The default resourceUrl to get values.
   * @type { String }
   */
  resourceUrl;

  /**
   * Creates an instance of BaseService.
   */
  constructor(axiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  /**
    * Make a get request.
    * @param { Object } [requestParams=this.defaultParams] The params to make the request.
    * @return { Promise<any> } The data promise.
   */
  list = (requestParams = this.defaultParams) => {
    const { url = this.resourceUrl, params, ...rest } = requestParams;
    return this.axiosInstance.get(url, { params, ...rest });
  }

  /**
   * Make a get request by id resourceUrl.
   * @param { Number } id The id to find by.
   * @param { Object } [requestParams=this.defaultParams] The params to make the request.
   * @return { Promise<any> } The data promise.
   */
  retrieve = (id, requestParams = this.defaultParams) => {
    const { params, url = this.resourceUrl, ...rest } = requestParams;
    const requestUrl = `${url}/${id}`;
    return this.axiosInstance.get(requestUrl, { params, ...rest });
  }

  /**
   * Make a post request with data.
   * @param { Object } [data={}] The data to send as body.
   * @param { Object } [requestParams=this.defaultParams] The params to make the request.
   * @return { Promise<any> } The data promise.
   */
  create = (data, { url = this.resourceUrl, ...rest } = this.defaultParams) => this
    .axiosInstance.post(url, data, { ...rest });

  /**
   * Make a put or patch request with data.
   * @param { Number } id The id to update by.
   * @param { Object } data The instance to update.
   * @param { Object } [requestParams=this.defaultParams] The params to make the request.
   * @return { Promise<any> } The data promise.
   */
  update = (id, data, requestParams = this.defaultParams) => {
    const { url = this.resourceUrl, method = 'patch', ...rest } = requestParams;
    const requestUrl = `${url}/${id}`;
    return this.axiosInstance.request({ url: requestUrl, data, method, ...rest });
  }

  /**
   * Getter for default request params.
   * @readonly
   * @returns { object } The default request params.
   */
  get defaultParams() {
    return {
      url: this.resourceUrl,
    };
  }
}

export default BaseService;
