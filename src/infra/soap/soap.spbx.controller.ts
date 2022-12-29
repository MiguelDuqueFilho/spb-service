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

  @Post('test')
  @HttpCode(HttpStatus.OK)
  async test(@Body() body: object) {
    return await this.soapSPBxService.test(body);
  }
}
