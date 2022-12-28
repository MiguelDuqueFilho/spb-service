import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  RawBodyRequest,
  Req,
} from '@nestjs/common';
import { Xml } from 'src/xml/xml.decorator';
import { Request } from 'supertest';
import { SoapSPBxService } from './soap.spbx.service';

@Controller('soap')
export class SoapSPBxController {
  constructor(private readonly soapSPBxService: SoapSPBxService) {}

  @Post('up')
  @HttpCode(HttpStatus.OK)
  test(@Body() body: any) {
    return this.soapSPBxService.Add(body);
  }
}
