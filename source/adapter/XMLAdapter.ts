import { parse } from 'js2xmlparser';

export default class XMLAdapter {
    static create(tag: string, payload: object) {
        return parse(tag, payload);
    }
}