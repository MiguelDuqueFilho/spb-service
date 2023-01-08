import { Module } from '@nestjs/common';
import { HttpController } from './controllers/http.controller';

import { MessagingModule } from '@infra/messaging/messaging.module';
import { ProcessPilotoTest } from '@application/use-cases/process-piloto-test';

@Module({
  imports: [MessagingModule],
  controllers: [HttpController],
  providers: [ProcessPilotoTest],
})
export class HttpModule {}
