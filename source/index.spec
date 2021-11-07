import supertest from 'supertest';
import Server from './infrastructure/http/HttpServer';

describe('Integration test routes', () => {
  it(
    'GET /api/v1/pipedrive-bling/sync/deals?status=won - Must synchronize won deals',
    async () => {
      const response = await supertest(Server).get('/api/v1/pipedrive-bling/sync/deals?status=won');

      expect(response.statusCode).toEqual(200);
    }
  );

  it(
    'GET /api/v1/deals - Must return daily deals',
    async () => {
      const response = await supertest(Server).get('/api/v1/deals');

      expect(response.statusCode).toEqual(200);
    }
  );
});