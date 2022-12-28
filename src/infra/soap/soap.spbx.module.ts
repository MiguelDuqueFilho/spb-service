import { Module } from '@nestjs/common';

import { SoapModule } from 'nestjs-soap';
import { SoapSPBxConfigService } from './soap.spbx.config.service';
import { SoapSPBxController } from './soap.spbx.controller';
import { SoapSPBxService } from './soap.spbx.service';

@Module({
  imports: [
    SoapModule.forRootAsync({
      clientName: 'SOAP_SPBX_CLIENT',
      useClass: SoapSPBxConfigService,
    }),
  ],
  controllers: [SoapSPBxController],
  providers: [SoapSPBxService],
})
export class SoapSPBxModule {}
