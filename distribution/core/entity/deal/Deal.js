"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Deal = /** @class */ (function () {
    function Deal(referenceId, title, status, client, value) {
        this.referenceId = referenceId;
        this.title = title;
        this.status = status;
        this.client = client;
        this.value = value;
    }
    return Deal;
}());
exports.default = Deal;
