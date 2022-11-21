import { Test, TestingModule } from '@nestjs/testing';
import { PrudctsController } from './prudcts.controller';

describe('PrudctsController', () => {
  let controller: PrudctsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrudctsController],
    }).compile();

    controller = module.get<PrudctsController>(PrudctsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
