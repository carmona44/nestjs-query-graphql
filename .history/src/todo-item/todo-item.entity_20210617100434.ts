import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: { createdAt: 'created', updatedAt: 'updated' } })
export class TodoItemEntity extends Document {
  @Prop({ required: true })
  title!: string;

  @Prop()
  description?: string;

  @Prop({ required: true })
  completed!: boolean;

  @Prop({ default: Date.now })
  created!: Date;

  @Prop({ default: Date.now })
  updated!: Date;
}

export const TodoItemEntitySchema = SchemaFactory.createForClass(TodoItemEntity);
