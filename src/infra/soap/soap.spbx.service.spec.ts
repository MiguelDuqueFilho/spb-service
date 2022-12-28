import { Test, TestingModule } from '@nestjs/testing';
import { SoapSPBxService } from './soap.spbx.service';

describe('SoapService', () => {
  let service: SoapSPBxService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SoapSPBxService],
    }).compile();

    service = module.get<SoapSPBxService>(SoapSPBxService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
