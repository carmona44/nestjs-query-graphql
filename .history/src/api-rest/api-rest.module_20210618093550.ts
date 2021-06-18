import { Module } from '@nestjs/common';
import { ApiRestController } from './api-rest.controller';

@Module({
  controllers: [ApiRestController]
})
export class ApiRestModule {}
