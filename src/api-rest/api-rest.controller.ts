import { Controller, Get, HttpService } from '@nestjs/common';

@Controller('api-rest')
export class ApiRestController {
    constructor(private readonly http: HttpService) {}

    @Get()
    async connectGraphql() {
        const query = `
            {
                todoItems {
                    edges {
                        node {
                            id
                            title
                            completed
                            created
                            updated
                        }
                    }
                }
            }
        `;
        const data = { query };
        const headers = { 'Content-Type': 'application/json' };
        const response = await this.http.post('http://localhost:3000/graphql', data, { headers }).toPromise();
        return response.data;
    }
}
