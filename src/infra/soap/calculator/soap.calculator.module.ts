import { Module } from '@nestjs/common';

import { SoapModule } from 'nestjs-soap';
import { SoapCalculatorConfigService } from './soap.calculator.config.service';
import { SoapCalculatorController } from './soap.calculator.controller';
import { SoapCalculatorService } from './soap.calculator.service';

@Module({
  imports: [
    SoapModule.forRootAsync({
      clientName: 'SOAP_CALCULATOR_CLIENT',
      useClass: SoapCalculatorConfigService,
    }),
  ],
  controllers: [SoapCalculatorController],
  providers: [SoapCalculatorService],
})
export class SoapCalculatorModule {}
