// Depedencies
import BaseService from '../baseService';

/**
 * OAuth service.
 * @author Daniel Mejia
 * @class OAuth
 */
export class OAuth extends BaseService {
  /**
   * Resource url.
   * @type { string }
   */
  resourceUrl = 'oauth';

  /**
   * Creates a token oauth.
   * @param { object } createTokenParams The token params.
   * @param { object } requestParams The request params.
   */
  token(createTokenParams, requestParams = {}) {
    const tokenUrl = `${this.resourceUrl}/token`;
    return this.create(createTokenParams, { url: tokenUrl, ...requestParams });
  }
}

export default OAuth;
