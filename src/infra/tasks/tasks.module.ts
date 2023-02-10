import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { SoapModule } from 'nestjs-soap';
import { SoapCalculatorConfigService } from '../soap/calculator/soap.calculator.config.service';
import { SoapCalculatorService } from '../soap/calculator/soap.calculator.service';
import { TasksService } from './tasks.service';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    SoapModule.forRootAsync({
      clientName: 'SOAP_CALCULATOR_CLIENT',
      useClass: SoapCalculatorConfigService,
    }),
  ],
  providers: [TasksService, SoapCalculatorService],
})
export class TasksModule {}
