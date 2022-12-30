import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { Xml } from 'src/xml/xml.decorator';

// import { Request } from 'supertest';
import { SoapSPBxService } from './soap.spbx.service';

@Controller('soap')
export class SoapSPBxController {
  constructor(private readonly soapSPBxService: SoapSPBxService) {}

  @Get('describe')
  async describe() {
    return await this.soapSPBxService.describe();
  }

  @Post('add')
  @HttpCode(HttpStatus.OK)
  async add(@Body() body: object) {
    return await this.soapSPBxService.add(body);
  }

  @Post('subtract')
  @HttpCode(HttpStatus.OK)
  async subtract(@Body() body: object) {
    return await this.soapSPBxService.subtract(body);
  }

  @Post('multiply')
  @HttpCode(HttpStatus.OK)
  async multiply(@Body() body: object) {
    return await this.soapSPBxService.multiply(body);
  }

  @Post('divide')
  @HttpCode(HttpStatus.OK)
  async divide(@Body() body: object) {
    return await this.soapSPBxService.divide(body);
  }
}
