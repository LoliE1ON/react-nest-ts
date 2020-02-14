import * as mongoose from 'mongoose';

export const BlogSchema = new mongoose.Schema({
    userId: { type: mongoose.Types.ObjectId, required: true },
    description: { type: String, required: true },
    createDate: { type: String, required: true },
});

BlogSchema.index({ BlogSchema: 1 });
