import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { SoapCalculatorService } from '../soap/calculator/soap.calculator.service';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  constructor(private readonly soapCalculatorService: SoapCalculatorService) {}

  // @Cron(CronExpression.EVERY_30_SECONDS)
  // async handleCron() {
  //   this.logger.debug('Called every 30 seconds');
  //   // const result = await this.soapCalculatorService.add({ intA: 10, intB: 3 });
  //   // this.logger.debug(result);
  // }
}
