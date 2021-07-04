"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Database = /** @class */ (function () {
    function Database() {
        this.connector = mongoose_1.default;
    }
    Database.prototype.init = function () {
        try {
            var _a = process.env, MONGO_USERNAME = _a.MONGO_USERNAME, MONGO_PASSWORD = _a.MONGO_PASSWORD, MONGO_HOSTNAME = _a.MONGO_HOSTNAME, MONGO_PORT = _a.MONGO_PORT, MONGO_DB = _a.MONGO_DB;
            var options = {
                useNewUrlParser: true,
                connectTimeoutMS: 10000,
                useUnifiedTopology: true
            };
            var url = "mongodb://" + MONGO_USERNAME + ":" + MONGO_PASSWORD + "@mongodb-linkapi:" + MONGO_PORT + "/" + MONGO_DB + "?authSource=admin";
            this.connector.connect(url, options);
        }
        catch (err) {
            console.log(err);
        }
    };
    return Database;
}());
exports.default = Database;
