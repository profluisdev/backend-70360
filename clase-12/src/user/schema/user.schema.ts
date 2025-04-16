import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ type: [{type: MongooseSchema.Types.ObjectId, ref: "Task"}], default: [] })
  task: [];
}

export const UserSchema = SchemaFactory.createForClass(User);
