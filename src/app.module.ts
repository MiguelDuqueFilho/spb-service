import { DatabaseModule } from '@infra/database/database.module';
import { HttpModule } from '@infra/http/http.module';
import { MessagingModule } from '@infra/messaging/messaging.module';
import { SoapCalculatorModule } from '@infra/soap/calculator/soap.calculator.module';

import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { XMLMiddleware } from './middleware/xml/xml.middleware';
import { LoggerMiddleware } from './middleware/log/logger.middleware';
import { TasksModule } from './infra/tasks/tasks.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SoapCalculatorModule,
    // SoapSPBxModule,
    HttpModule,
    DatabaseModule,
    MessagingModule,
    TasksModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
    consumer.apply(XMLMiddleware).forRoutes({
      path: 'soap/*',
      method: RequestMethod.POST,
    });
  }
}
