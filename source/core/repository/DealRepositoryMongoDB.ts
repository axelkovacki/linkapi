import Deal from '../entity/deal/Deal';
import IDealRepository from './IDealRepository';
import DealPipedriveAdapter from '../adapter/DealPipedriveAdapter';
import DatabaseManager from '../../infrastructure/database/Manager';


export default class DealRepositoryMongoDB implements IDealRepository {
    manager: any;

    constructor() {
        this.manager = this.schema(DatabaseManager);
    }

    schema(manager) {
        const { Schema, Model, Models } = manager;

        const dealSchema = new Schema({
            referenceId: Number,
            title: String,
            status: String,
            client: Schema.Types.Mixed,
            value: Number,
        }, {
            strict: false,
            timestamps: true
        });

        return Models.Deal || Model('Deal', dealSchema);
    }

    async get() {
        const data = await this.manager.aggregate([
            {
                $group: {
                    _id: {
                        month: { $month: "$createdAt" },
                        day: { $dayOfMonth: "$createdAt" },
                        year: { $year: "$createdAt" }
                    },
                    totalPrice: { $sum: "$value" },
                    count: { $sum: 1 }
                }
            }
        ]);

        return data;
    }

    async updateMany(deals: Deal[], upsert: boolean = true): Promise<void> {
        for (let i = 0; i < deals.length; i++) {
            await this.manager.update(
                { referenceId: deals[i].referenceId },
                deals[i],
                { upsert }
            );
        }
    }
}
