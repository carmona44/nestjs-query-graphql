import { FilterableField, IDField } from '@nestjs-query/query-graphql';
import { ObjectType, GraphQLISODateTime, Field, Int } from '@nestjs/graphql';

@ObjectType('TodoItem')
export class TodoItemDTO {
  @IDField(() => Int)
  id!: number;

  @FilterableField()
  title!: string;

  @FilterableField()
  completed!: boolean;

  @Field(() => GraphQLISODateTime)
  created!: Date;

  @Field(() => GraphQLISODateTime)
  updated!: Date;
}

