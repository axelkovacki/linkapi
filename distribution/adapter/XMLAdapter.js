"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var js2xmlparser_1 = require("js2xmlparser");
var XMLAdapter = /** @class */ (function () {
    function XMLAdapter() {
    }
    XMLAdapter.create = function (tag, payload) {
        return js2xmlparser_1.parse(tag, payload);
    };
    return XMLAdapter;
}());
exports.default = XMLAdapter;
