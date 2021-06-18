import { FilterableField, IDField } from '@nestjs-query/query-graphql';
import { ObjectType, GraphQLISODateTime, Field, Int, ID } from '@nestjs/graphql';

@ObjectType('TodoItem')
export class TodoItemDTO {
  @IDField(() => ID)
  id!: string;

  @FilterableField()
  title!: string;

  @FilterableField()
  completed!: boolean;

  @Field(() => GraphQLISODateTime)
  created!: Date;

  @FilterableField(() => GraphQLISODateTime)
  updated!: Date;
}

