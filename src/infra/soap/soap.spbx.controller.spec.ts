import { Test, TestingModule } from '@nestjs/testing';
import { SoapSPBxController } from './soap.spbx.controller';

describe('SoapController', () => {
  let controller: SoapSPBxController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SoapSPBxController],
    }).compile();

    controller = module.get<SoapSPBxController>(SoapSPBxController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
