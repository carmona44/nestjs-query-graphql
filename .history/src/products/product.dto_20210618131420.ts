import { FilterableField, IDField } from '@nestjs-query/query-graphql';
import { ObjectType, GraphQLISODateTime, Field, Int, ID } from '@nestjs/graphql';

@ObjectType('Product')
export class ProductDTO {
    @IDField(() => ID)
    id!: string;

    @Field()
    idShopify!: string;
  
    @FilterableField()
    title!: string;

    @FilterableField()
    status!: string;

    @FilterableField()
    productType!: string;

    @Field()
    onlineStoreUrl!: string;

    @Field()
    hasOnlyDefaultVariant!: string;

    @FilterableField()
    tags!: [string];
}

