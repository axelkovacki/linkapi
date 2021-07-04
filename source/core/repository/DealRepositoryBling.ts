import Deal from '../entity/deal/Deal';
import IDealRepository from './IDealRepository';
import DealBlingAdapter from '../adapter/DealBlingAdapter';
import IHttpClient from '../../infrastructure/http/IHttpClient';

export default class DealBlingRepository implements IDealRepository {
    constructor(
        private httpClient: IHttpClient,
        private token: string
    ) {}

    // I didn't find an alternative to send multiple orders at once on the doc
    private async sendToBling(payload: object) {
        const { retorno } = await this.httpClient.postFormData(
            'pedido/json/',
            payload
        );

        console.log(retorno);

        if (retorno?.erros) {
            throw new Error(JSON.stringify(retorno.erros));
        }

        return true;
    }

    async sync(deals: Deal[]): Promise<any> {
        const payloads = DealBlingAdapter.create(this.token, deals);
        for (let i = 0; i < payloads.length; i++) {
            await this.sendToBling(payloads[i]);
        }
    }
}
