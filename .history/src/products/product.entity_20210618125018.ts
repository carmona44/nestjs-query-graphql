import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class ProductEntity extends Document {
  
    @Prop({ required: true })
    title!: string;

    @Prop()
    status?: string;

    @Prop()
    productType?: string;

    @Prop()
    onlineStoreUrl?: string;

    @Prop()
    hasOnlyDefaultVariant?: string;

    @Prop()
    tags?: [string];

}

export const ProductEntitySchema = SchemaFactory.createForClass(ProductEntity);
