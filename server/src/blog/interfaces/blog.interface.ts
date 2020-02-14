import {Document} from 'mongoose';

export interface IBlog extends Document {
    readonly userId: string;
    readonly description: string;
    readonly createDate: string;
}