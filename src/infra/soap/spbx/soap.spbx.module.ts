import { Module } from '@nestjs/common';

import { SoapModule } from 'nestjs-soap';
import { SoapSPBxConfigService } from './soap.spbx.config.service';
import { SoapSPBxController } from './controllers/soap.spbx.controller';
import { SoapSPBxService } from './soap.spbx.service';
import { ProcessSendToSPB } from '@application/use-cases/process-message-to-spb';

@Module({
  imports: [
    SoapModule.forRootAsync({
      clientName: 'SOAP_SPBX_CLIENT',
      useClass: SoapSPBxConfigService,
    }),
  ],
  controllers: [SoapSPBxController],
  providers: [SoapSPBxService, ProcessSendToSPB],
})
export class SoapSPBxModule {}
