import IDealRepository from '../../repository/IDealRepository';

export default class SyncDealPipedriveBling {
    constructor(
        private dealRepositoryPipedrive: IDealRepository,
        private dealRepositoryBling: IDealRepository,
        private dealRepositoryMongoDB: IDealRepository,
    ) {}

    async execute(filters: any) {
        const deals = await this.dealRepositoryPipedrive.get(filters);
        await this.dealRepositoryBling.sync(deals);
        await this.dealRepositoryMongoDB.updateMany(deals);
        return true;
    }
}