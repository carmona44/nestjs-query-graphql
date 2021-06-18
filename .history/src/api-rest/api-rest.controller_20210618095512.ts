import { Controller, Get, HttpService } from '@nestjs/common';

@Controller('api-rest')
export class ApiRestController {
    constructor(private readonly http: HttpService) {}

    @Get()
    connectGraphql() {
      return this.http.post('https://wefish-shop.myshopify.com/admin/api/2021-04/graphql.json');
      //return 'Funcionando';
    }
}
