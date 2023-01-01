import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  SoapModuleOptionsFactory,
  SoapModuleOptionsFactoryType,
} from 'nestjs-soap';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

@Injectable()
export class SoapCalculatorConfigService implements SoapModuleOptionsFactory {
  constructor(
    @Inject(ConfigService) private readonly configService: ConfigService,
  ) {}

  createSoapModuleOptions(): SoapModuleOptionsFactoryType {
    return {
      uri: this.configService.get<string>('SOAP_CALCULATOR_URI') || '',
      // auth: {
      //   type: 'basic',
      //   username: this.configService.get<string>('SOAP_USERNAME') || 'username',
      //   password: this.configService.get<string>('SOAP_PASSWORD') || 'password',
      // },
      // clientOptions: {
      //   wsdl_options: {
      //     // key: readFileSync(resolve('./cert/keyfile.key')),
      //     cert: readFileSync(resolve('./cert/cert.pem')),
      //   },
      // },
    };
  }
}
