import { ProcessPilotoTest } from '@application/use-cases/process-piloto-test';
import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('api')
export class HttpController {
  constructor(private processPilotoTest: ProcessPilotoTest) {} // private sendMessages: SendMessages,

  @Get('/req')
  soapWsdl(@Req() req: Request) {
    console.log(req);
    // return this.HttpService.soapWsdl();
  }

  @Post('/test')
  async testPost(@Body() body: any) {
    console.log(`testpost`);
    await this.processPilotoTest.execute(body);
    return;
  }

  // @Get('/test')
  // async soapTest() {
  //   await this.sendMessages.test('test');
  //   return;
  // }
}
