import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';

import { ApiService } from './api.service';

@Controller('api')
export class ApiController {
  constructor(private apiService: ApiService) {}

  @Get('/test')
  soapWsdl(@Req() req: Request) {
    console.log(req);
    return this.apiService.soapWsdl();
  }

  @Post('/up')
  soapPost(@Body() body: any) {
    console.log(`soap/up`);
    console.log(body);
    return;
  }
}
