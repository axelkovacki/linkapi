import Deal from '../entity/deal/Deal';
import DealClient from '../entity/deal/DealClient';

export default class DealPipedriveAdapter {
	static create (
		referenceId: number,
		title: string,
		status: string,
		clientName: string,
		value: number,
	) {
		return new Deal(
			referenceId,
			title,
			status,
			new DealClient(clientName),
			value
		);
	}
}
