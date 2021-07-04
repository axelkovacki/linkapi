import request from 'supertest';
import HttpServer from '../../../infrastructure/http/HttpServer';

test("Should return deals", async function () {
    const app = new HttpServer();
    const { status } = await request(app.server).get('/api/v1/deals');

    expect(status).toBe(200);
});
