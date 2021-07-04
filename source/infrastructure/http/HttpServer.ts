import Express from 'express';
import ExpressAdapter from '../../adapter/ExpressAdapter';
import Cors from 'cors';
import PipedriveBling from '../../controller/PipedriveBlingController';
import Deal from '../../controller/DealController';

export default class HttpServer {
    server: any;
    port: string;

    constructor() {
        this.server = new Express();
        this.port = process.env.HTTP_PORT || '8080';
        this.server.use(Cors());
        this.server.use(Express.json());

        this.handleRoutes();
    }

    async init() {
        try {
            this.server.listen(this.port);
            console.log(this.getListeningMessage());
        } catch (err) {
            console.log(err);
            process.exit(1);
        }
    }

    handleRoutes() {
        this.server.get(
            '/api/v1/pipedrive-bling/sync/deals',
            ExpressAdapter.create(PipedriveBling.syncDeal)
        );

        this.server.get(
            '/api/v1/deals',
            ExpressAdapter.create(Deal.get)
        );
    }

    getListeningMessage() {
        return `
            >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                LINKAPI TEST on in ${this.port}
            <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
        `;
    }
}
