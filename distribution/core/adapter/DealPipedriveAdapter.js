"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Deal_1 = __importDefault(require("../entity/deal/Deal"));
var DealClient_1 = __importDefault(require("../entity/deal/DealClient"));
var DealPipedriveAdapter = /** @class */ (function () {
    function DealPipedriveAdapter() {
    }
    DealPipedriveAdapter.create = function (referenceId, title, status, clientName, value) {
        return new Deal_1.default(referenceId, title, status, new DealClient_1.default(clientName), value);
    };
    return DealPipedriveAdapter;
}());
exports.default = DealPipedriveAdapter;
