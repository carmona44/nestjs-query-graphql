import { HttpService, Module } from '@nestjs/common';
import { ApiRestController } from './api-rest.controller';

@Module({
  imports: [HttpService],
  controllers: [ApiRestController]
})
export class ApiRestModule {}
