import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryMongooseModule } from '@nestjs-query/query-mongoose';
import { Module } from '@nestjs/common';
import { TodoItemDTO } from './todo-item.dto';
import { TodoItemEntity, TodoItemEntitySchema } from './todo-item.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      // import the NestjsQueryMongooseModule to register the entity with mongoose
      // and provide a QueryService
      imports: [
        NestjsQueryMongooseModule.forFeature([
          { document: TodoItemEntity, name: TodoItemEntity.name, schema: TodoItemEntitySchema },
        ]),
      ],
      // describe the resolvers you want to expose
      resolvers: [{ DTOClass: TodoItemDTO, EntityClass: TodoItemEntity }],
    }),
  ],
})
export class TodoItemModule {}