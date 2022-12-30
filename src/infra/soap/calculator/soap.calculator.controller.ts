import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';

import { SoapCalculatorService } from './soap.calculator.service';

@Controller('soap')
export class SoapCalculatorController {
  constructor(private readonly soapCalculatorService: SoapCalculatorService) {}

  @Get('describe')
  async describe() {
    return await this.soapCalculatorService.describe();
  }

  @Post('add')
  @HttpCode(HttpStatus.OK)
  async add(@Body() body: object) {
    return await this.soapCalculatorService.add(body);
  }

  @Post('subtract')
  @HttpCode(HttpStatus.OK)
  async subtract(@Body() body: object) {
    return await this.soapCalculatorService.subtract(body);
  }

  @Post('multiply')
  @HttpCode(HttpStatus.OK)
  async multiply(@Body() body: object) {
    return await this.soapCalculatorService.multiply(body);
  }

  @Post('divide')
  @HttpCode(HttpStatus.OK)
  async divide(@Body() body: object) {
    return await this.soapCalculatorService.divide(body);
  }
}
