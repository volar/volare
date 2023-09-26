import * as mongoose from 'mongoose';
export declare const TaskSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    title?: string | undefined;
    description?: string | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    title?: string | undefined;
    description?: string | undefined;
}>> & mongoose.FlatRecord<{
    title?: string | undefined;
    description?: string | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
export interface Task extends mongoose.Document {
    title: string;
    description: string;
}
