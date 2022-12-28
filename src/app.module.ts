import { SoapSPBxModule } from '@infra/soap/soap.spbx.module';
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ApiModule } from './infra/api/api.module';
import { XMLMiddleware } from './xml/xml.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ApiModule,
    SoapSPBxModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(XMLMiddleware).forRoutes({
      path: 'soap/*',
      method: RequestMethod.POST,
    });
  }
}
