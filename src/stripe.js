// Depedencies
import axios from 'axios';

// Resources
import resources from './resources';

/**
 * Stripe client for API connection.
 * @author Daniel Mejia
 * @class StripeClient
 */
export class StripeClient {
  /**
   * Initialze the stripe client base on url.
   * @param { string } url The url to backend requiests.
   */
  initialize(url) {
    this.axiosInstance = axios.create({ baseURL: url });
    this.addResponseInterceptor(this.basicResponse);

    Object
      .entries(resources)
      .forEach(([name, Resource]) => {
        this[name] = new Resource(this.axiosInstance);
      });

    return this;
  }

  /**
   * Add a request interceptor for client.
   * @param { Function } callback The callback to add.
   * @returns { object } The stripe client itself.
   */
  addRequestInterceptor(callback) {
    const { interceptors } = this.axiosInstance;
    interceptors.request.use(callback);
    return this;
  }

  /**
   * Add a response interceptor for client.
   * @param { Function } callback The callback to add.
   * @returns { object } The stripe client itself.
   */
  addResponseInterceptor(callback) {
    const { interceptors } = this.axiosInstance;
    interceptors.response.use(callback);
    return this;
  }

  /**
   * Intercepts every response.
   * @param { Object } response The response.
   * @returns { object } The new response parsed.
   */
  basicResponse = (response) => response.data;
}

export default new StripeClient();
