import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { HttpModule, HttpService } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HttpConfigService } from './http.config.service';

@Module({
  imports: [
    HttpModule,

    // HttpModule.registerAsync({
    //   imports: [ConfigModule],
    //   useFactory: async (configService: ConfigService) => ({
    //     baseURL: configService.get('SOAP_URI'),
    //     timeout: configService.get('HTTP_TIMEOUT'),
    //     maxRedirects: configService.get('HTTP_MAX_REDIRECTS'),
    //     headers: {
    //       'Content-Type': 'text/xml; charset=utf-8',
    //       //         // SOAPAction: 'urn:cmspb#cmspb#Conectar',
    //       //         // 'secret-key': 'secretKey',
    //     },
    //     //     //       // auth: {
    //     //     //       //   username: '',
    //     //     //       //   password: '',
    //     //     //       // },
    //     //     //       // httpsAgent: new Agent({
    //     //     //       //   ca: readFileSync(process.env.va_ca),
    //     //     //       //   keepAlive: false,
    //     //     //       //   cert: readFileSync(process.env.va_cert),
    //     //     //       //   key: readFileSync(process.env.va_key),
    //     //     //       //   passphrase: process.env.va_passphrase,
    //     //     //       // }),
    //   }),
    //   inject: [ConfigService],
    // }),
  ],
  controllers: [ApiController],
  providers: [ApiService, HttpConfigService],
})
export class ApiModule {}
