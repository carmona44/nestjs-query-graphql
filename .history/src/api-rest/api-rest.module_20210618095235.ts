import { HttpModule, Module } from '@nestjs/common';
import { ApiRestController } from './api-rest.controller';

@Module({
  imports: [HttpModule],
  controllers: [ApiRestController]
})
export class ApiRestModule {}
