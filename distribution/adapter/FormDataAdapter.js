"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var form_data_1 = __importDefault(require("form-data"));
var FormDataAdapter = /** @class */ (function () {
    function FormDataAdapter() {
    }
    FormDataAdapter.create = function () {
        return new form_data_1.default();
    };
    return FormDataAdapter;
}());
exports.default = FormDataAdapter;
