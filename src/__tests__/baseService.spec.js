// Dependencies
import axios from 'axios';

// Instance under testing
import BaseService from '../baseService';

// Mock modules
jest.mock('axios');

/**
 * Base service test class.
 * @author Daniel Mejia
 * @file baseService.spec.js
 */
describe('Base service: Test suit', () => {
  const id = 1;
  const testResource = 'tests';
  const testResourceId = `${testResource}/${id}`;
  const overridedResource = '/overrided';
  const overridedResourceId = `${overridedResource}/${id}`;
  let baseService;
  const data = {};
  const mockResponse = Promise.resolve({ data });

  beforeEach(() => {
    baseService = new BaseService(axios);
    baseService.resourceUrl = testResource;
  });

  describe('should list resources: ', () => {
    beforeEach(() => {
      axios.get.mockResolvedValue(mockResponse);
    });

    it('default params', async () => {
      const response = await baseService.list();
      expect(response.data).toBe(data);
      expect(axios.get).toHaveBeenCalledWith(testResource, { params: undefined });
    });

    it('overrided URL', async () => {
      const response = await baseService.list({ url: overridedResource });
      expect(response.data).toBe(data);
      expect(axios.get).toHaveBeenCalledWith(overridedResource, { params: undefined });
    });

    it('pass params', async () => {
      const params = { id: 1 };
      const response = await baseService.list({ params });
      expect(response.data).toBe(data);
      expect(axios.get).toHaveBeenCalledWith(testResource, { params });
    });
  });

  describe('should get by id request: ', () => {
    beforeEach(() => {
      axios.get.mockReturnValue(mockResponse);
    });

    it('default params', async () => {
      const response = await baseService.retrieve(id);
      expect(response.data).toBe(data);
      expect(axios.get).toHaveBeenCalledWith(testResourceId, { params: undefined });
    });

    it('overrided URL', async () => {
      const response = await baseService.retrieve(id, { url: overridedResource });
      expect(response.data).toBe(data);
      expect(axios.get).toHaveBeenCalledWith(overridedResourceId, { params: undefined });
    });

    it('pass params', async () => {
      const params = { id: 1 };
      const response = await baseService.retrieve(id, { params });
      expect(response.data).toBe(data);
      expect(axios.get).toHaveBeenCalledWith(testResourceId, { params });
    });
  });

  describe('should post request: ', () => {
    beforeEach(() => {
      axios.post.mockReturnValue(mockResponse);
    });

    it('default params', async () => {
      const response = await baseService.create(data);
      expect(response.data).toBe(data);
      expect(axios.post).toHaveBeenCalledWith(testResource, data, { params: undefined });
    });

    it('overrided URL', async () => {
      const response = await baseService.create(data, { url: overridedResource });
      expect(response.data).toBe(data);
      expect(axios.post).toHaveBeenCalledWith(overridedResource, data, { params: undefined });
    });

    it('pass params', async () => {
      const params = { id: 1 };
      const response = await baseService.create(data, { params });
      expect(response.data).toBe(data);
      expect(axios.post).toHaveBeenCalledWith(testResource, data, { params });
    });
  });

  describe('should update request: ', () => {
    beforeEach(() => {
      axios.request.mockReturnValue(mockResponse);
    });

    it('default params', async () => {
      const request = {
        data,
        method: 'patch',
        url: testResourceId,
        params: undefined,
      };
      const response = await baseService.update(id, data);
      expect(response.data).toBe(data);
      expect(axios.request).toHaveBeenCalledWith(request);
    });

    it('overrided URL and method', async () => {
      const request = {
        data,
        method: 'put',
        url: overridedResourceId,
        params: undefined,
      };
      const response = await baseService
        .update(id, data, { method: 'put', url: overridedResource });
      expect(response.data).toBe(data);
      expect(axios.request).toHaveBeenCalledWith(request);
    });

    it('pass params', async () => {
      const params = { id: 1 };
      const request = {
        params,
        data,
        method: 'patch',
        url: testResourceId,
      };
      const response = await baseService.update(id, data, { params });
      expect(response.data).toBe(data);
      expect(axios.request).toHaveBeenCalledWith(request);
    });
  });
});
