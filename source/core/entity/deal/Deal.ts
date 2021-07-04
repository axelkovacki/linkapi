import DealClient from './DealClient';

export default class Deal {
    constructor(
        public referenceId: number,
        public title: string,
        public status: string,
        public client: DealClient,
        public value: number,
    ) {}
}