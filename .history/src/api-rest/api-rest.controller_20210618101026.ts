import { Controller, Get, HttpService } from '@nestjs/common';

@Controller('api-rest')
export class ApiRestController {
    constructor(private readonly http: HttpService) {}

    @Get()
    async connectGraphql() {
        const query = `
            {
                products(first:10) {
                    edges {
                        node {
                            id
                            title
                            productType
                        }
                    }
                }
            }
        `;
        const data = { query };
        const headers = { 'Content-Type': 'application/json' };
        const response = await this.http.post('http://localhost:3000/graphql.json', data, { headers }).toPromise();
        return response.data;
    }
}
