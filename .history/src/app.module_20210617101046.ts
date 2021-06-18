import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoItemModule } from './todo-item/todo-item.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/todo-items'),
    GraphQLModule.forRoot({
      // set to true to automatically generate schema
      autoSchemaFile: true,
    }),
    TodoItemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

