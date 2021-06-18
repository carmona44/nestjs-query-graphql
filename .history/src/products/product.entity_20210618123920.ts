import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class ProductEntity extends Document {
  
}

export const ProductEntitySchema = SchemaFactory.createForClass(ProductEntity);
