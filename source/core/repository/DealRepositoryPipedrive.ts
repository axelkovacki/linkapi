import Deal from '../entity/deal/Deal';
import IDealRepository from './IDealRepository';
import DealPipedriveAdapter from '../adapter/DealPipedriveAdapter';
import IHttpClient from '../../infrastructure/http/IHttpClient';

export default class DealRepositoryPipedrive implements IDealRepository {
    constructor(
        private httpClient: IHttpClient,
        private token: string
    ) {}

    async get(filters: any): Promise<Deal[]> {
        const params = `?status=${filters.status}&api_token=${this.token}`;
        const { success, data } = await this.httpClient.get(
            'deals',
            params
        );

        if (!success) {
            return [];
        }

        const deals = data.map((el) => DealPipedriveAdapter.create(
            el.id,
            el.title,
            el.status,
            el.person_name,
            el.value
        ));

        return deals;
    }
}
