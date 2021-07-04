import SyncDealPipedriveBling from '../core/use-case/deal/SyncDealPipedriveBling';
import DealRepositoryPipedrive from '../core/repository/DealRepositoryPipedrive';
import DealRepositoryBling from '../core/repository/DealRepositoryBling';
import DealRepositoryMongoDB from '../core/repository/DealRepositoryMongoDB';
import HttpClient from '../infrastructure/http/HttpClient';

export default class PipedriveBlingController {
    static async syncDeal(req, res) {
        try {
            const { query } = req;

            if (!query.status) {
                throw new Error('Param "status" not informed');
            }

            const dealRepositoryPipedrive = new DealRepositoryPipedrive(
                new HttpClient(process.env.PIPEDRIVE_BASE_URL),
                process.env.PIPEDRIVE_API_KEY
            );

            const dealRepositoryBling = new DealRepositoryBling(
                new HttpClient(process.env.BLING_BASE_URL),
                process.env.BLING_API_KEY
            );

            const dealRepositoryMongoDB = new DealRepositoryMongoDB();

            const syncDealPipedriveBling = new SyncDealPipedriveBling(
                dealRepositoryPipedrive,
                dealRepositoryBling,
                dealRepositoryMongoDB
            );

            const filters = {
                status: query.status
            };

            await syncDealPipedriveBling.execute(filters);

            return res.status(200).send({
                data: 'Deals sync with success!'
            });
        } catch (err) {
            console.log(err.message);
            return res.status(500).send({
                error: err.message
            });
        }
    }
}
