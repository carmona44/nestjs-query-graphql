import { Controller, Get, HttpService } from '@nestjs/common';

@Controller('api-rest')
export class ApiRestController {
    constructor(private readonly http: HttpService) {}

    @Get()
    connectGraphql() {
        const data = {};
        const headers = { 'Content-Type': 'application/json', 'X-Shopify-Access-Token': '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' };
        return this.http.post('https://wefish-shop.myshopify.com/admin/api/2021-04/graphql.json', data, { headers });
        //return 'Funcionando';
    }
}
