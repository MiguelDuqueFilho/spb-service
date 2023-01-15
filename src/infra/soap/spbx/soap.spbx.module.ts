import { Module } from '@nestjs/common';

import { SoapModule } from 'nestjs-soap';
import { SoapSPBxConfigService } from './soap.spbx.config.service';
import { SoapSPBxController } from './controllers/soap.spbx.controller';
import { SoapSPBxService } from './soap.spbx.service';
import { ProcessSendToSPB } from '@application/use-cases/process-message-to-spb';
import { DatabaseModule } from '../../database/database.module';
import { MessagingModule } from '@infra/messaging/messaging.module';

@Module({
  imports: [
    DatabaseModule,
    MessagingModule,
    SoapModule.forRootAsync({
      clientName: 'SOAP_SPBX_CLIENT',
      useClass: SoapSPBxConfigService,
    }),
  ],
  controllers: [SoapSPBxController],
  providers: [SoapSPBxService, ProcessSendToSPB],
})
export class SoapSPBxModule {}
