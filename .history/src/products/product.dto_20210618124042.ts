import { FilterableField, IDField } from '@nestjs-query/query-graphql';
import { ObjectType, GraphQLISODateTime, Field, Int, ID } from '@nestjs/graphql';

@ObjectType('Product')
export class ProductDTO {
  @IDField(() => ID)
  id!: string;

  @FilterableField()
  title!: string;
}

