import GetDeal from '../core/use-case/deal/GetDeal';
import DealRepositoryMongoDB from '../core/repository/DealRepositoryMongoDB';

export default class DealController {
    static async get(req, res) {
        try {
            const dealRepositoryMongoDB = new DealRepositoryMongoDB();
            const getDeal = new GetDeal(dealRepositoryMongoDB);

            const deals = await getDeal.execute();

            return res.status(200).send({
                data: deals
            });
        } catch (err) {
            console.log(err.message);
            return res.status(500).send({
                error: err.message
            });
        }
    }
}
