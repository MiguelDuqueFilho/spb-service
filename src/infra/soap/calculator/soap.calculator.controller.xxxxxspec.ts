import { Test, TestingModule } from '@nestjs/testing';
import { SoapCalculatorController } from './soap.calculator.controller';

describe('SoapController', () => {
  let controller: SoapCalculatorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SoapCalculatorController],
    }).compile();

    controller = module.get<SoapCalculatorController>(SoapCalculatorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
