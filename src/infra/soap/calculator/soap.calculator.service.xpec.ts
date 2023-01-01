import { Test, TestingModule } from '@nestjs/testing';
import { SoapCalculatorService } from './soap.calculator.service';

describe('SoapService', () => {
  let service: SoapCalculatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SoapCalculatorService],
    }).compile();

    service = module.get<SoapCalculatorService>(SoapCalculatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
