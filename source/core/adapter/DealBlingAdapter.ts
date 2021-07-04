import Deal from '../entity/deal/Deal';
import FormDataAdapter from '../../adapter/FormDataAdapter';
import XMLAdapter from '../../adapter/XMLAdapter';

export default class DealBlingAdapter {
	static create (token: string, deals: Deal[]) {
		return deals.map((deal) => {
            const data = {
                cliente: { nome: deal.client.name },
                itens: [{
                    item: {
                        codigo: '01',
                        descricao: 'Test',
                        qtde: 1,
                        vlr_unit: 1
                    }
                }],
                parcelas: [{
                    parcela: {
                        vlr: deal.value
                    }
                }]
            };

            const payload = {
                apikey: token,
                xml: XMLAdapter.create('pedido', data)
            }

            const formData = FormDataAdapter.create();
            Object.keys(payload).forEach((key) => {
				formData.append(key, payload[key])
			});

            return formData;
        });
	}
}
