import { Controller, Get, HttpService } from '@nestjs/common';

@Controller('api-rest')
export class ApiRestController {
    constructor(private readonly http: HttpService) {}

    @Get()
    connectGraphql() {
      //return this.http.post('http://localhost:3000/graphql');
      return 'Funcionando';
    }
}
