import request from 'supertest';
import HttpServer from '../../../infrastructure/http/HttpServer';

test("Should sync deals", async function () {
    const app = new HttpServer();
    const { status } = await request(app.server).get('/api/v1/pipedrive-bling/sync/deals');

    expect(status).toBe(200);
});
