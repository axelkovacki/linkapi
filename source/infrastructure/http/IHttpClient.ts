export default interface IHttpClient {
    get(url: string, params?: string): Promise<any>;
    post(url: string, payload: any): Promise<any>;
    postFormData(url: string, payload: any): Promise<any>;
}
