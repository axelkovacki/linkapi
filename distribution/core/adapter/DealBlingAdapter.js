"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var FormDataAdapter_1 = __importDefault(require("../../adapter/FormDataAdapter"));
var XMLAdapter_1 = __importDefault(require("../../adapter/XMLAdapter"));
var DealBlingAdapter = /** @class */ (function () {
    function DealBlingAdapter() {
    }
    DealBlingAdapter.create = function (token, deals) {
        return deals.map(function (deal) {
            var data = {
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
            var payload = {
                apikey: token,
                xml: XMLAdapter_1.default.create('pedido', data)
            };
            var formData = FormDataAdapter_1.default.create();
            Object.keys(payload).forEach(function (key) {
                formData.append(key, payload[key]);
            });
            return formData;
        });
    };
    return DealBlingAdapter;
}());
exports.default = DealBlingAdapter;
