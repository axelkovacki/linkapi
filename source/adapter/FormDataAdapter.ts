import FormData from 'form-data';

export default class FormDataAdapter {
    static create() {
        return new FormData();
    }
}