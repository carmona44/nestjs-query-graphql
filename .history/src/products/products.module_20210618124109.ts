import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryMongooseModule } from '@nestjs-query/query-mongoose';
import { Module } from '@nestjs/common';
import { ProductDTO } from './product.dto';
import { ProductEntity, ProductEntitySchema } from './product.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      // import the NestjsQueryMongooseModule to register the entity with mongoose
      // and provide a QueryService
      imports: [
        NestjsQueryMongooseModule.forFeature([
          { document: ProductEntity, name: ProductEntity.name, schema: ProductEntitySchema },
        ]),
      ],
      // describe the resolvers you want to expose
      resolvers: [{ DTOClass: ProductDTO, EntityClass: ProductEntity }],
    }),
  ],
})
export class ProductsModule {}