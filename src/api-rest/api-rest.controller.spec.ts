import { Test, TestingModule } from '@nestjs/testing';
import { ApiRestController } from './api-rest.controller';

describe('ApiRestController', () => {
  let controller: ApiRestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiRestController],
    }).compile();

    controller = module.get<ApiRestController>(ApiRestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
