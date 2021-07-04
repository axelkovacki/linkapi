import IDealRepository from '../../repository/IDealRepository';

export default class GetDeal {
    constructor(
        private dealRepositoryMongoDB: IDealRepository,
    ) {}

    async execute() {
        return this.dealRepositoryMongoDB.get();
    }
}