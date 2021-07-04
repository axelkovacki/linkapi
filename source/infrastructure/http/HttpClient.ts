import Axios from 'axios';

export default class HttpClient {
    client: any;

    constructor(baseUrl: string) {
        this.client = Axios.create({ baseURL: baseUrl });
    }

    async get(url: string, params?: string): Promise<any> {
        if (params) {
            url += params;
        }

        const { data } = await this.client.get(url);
        return data;
    }

    async post(url: string, payload: object): Promise<any> {
        const { data } = await this.client.post(url, payload);
        return data;
    }

    async postFormData(url: string, payload: any): Promise<any> {
        const options = {
            headers: {
                ...payload.getHeaders()
            }
        };

        const { data } = await this.client.post(url, payload, options);
        return data;
    }
}
