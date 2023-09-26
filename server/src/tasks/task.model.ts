import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
});

export interface Task extends mongoose.Document {
  title: string;
  description: string;
}