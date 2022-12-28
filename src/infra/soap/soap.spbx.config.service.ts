import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  SoapModuleOptionsFactory,
  SoapModuleOptionsFactoryType,
} from 'nestjs-soap';

@Injectable()
export class SoapSPBxConfigService implements SoapModuleOptionsFactory {
  constructor(
    @Inject(ConfigService) private readonly configService: ConfigService,
  ) {}

  createSoapModuleOptions(): SoapModuleOptionsFactoryType {
    return {
      uri:
        this.configService.get<string>('SOAP_URI') ||
        'http://www.dneonline.com/calculator.asmx?WSDL',
      auth: {
        type: 'basic',
        username: this.configService.get<string>('SOAP_USERNAME') || 'username',
        password: this.configService.get<string>('SOAP_PASSWORD') || 'password',
      },
    };
  }
}
