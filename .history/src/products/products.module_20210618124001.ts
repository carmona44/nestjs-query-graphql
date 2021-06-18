import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryMongooseModule } from '@nestjs-query/query-mongoose';
import { Module } from '@nestjs/common';
import { ProductsDTO } from './product.dto';
import { ProductEntity, ProductsEntitySchema } from './product.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      // import the NestjsQueryMongooseModule to register the entity with mongoose
      // and provide a QueryService
      imports: [
        NestjsQueryMongooseModule.forFeature([
          { document: ProductEntity, name: ProductEntity.name, schema: TodoItemEntitySchema },
        ]),
      ],
      // describe the resolvers you want to expose
      resolvers: [{ DTOClass: TodoItemDTO, EntityClass: ProductEntity }],
    }),
  ],
})
export class ProductsModule {}