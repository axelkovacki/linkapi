import Deal from '../entity/deal/Deal';

export default interface IDealRepository {
    get?(filters?: any): Promise<Deal[]>;
    updateMany?(deals: Deal[], upsert?: boolean): Promise<any>;
    sync?(deal: Deal[]): Promise<any>;
}
