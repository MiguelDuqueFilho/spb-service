import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  SoapModuleOptionsFactory,
  SoapModuleOptionsFactoryType,
} from 'nestjs-soap';

@Injectable()
export class SoapCalculatorConfigService implements SoapModuleOptionsFactory {
  constructor(
    @Inject(ConfigService) private readonly configService: ConfigService,
  ) {}

  createSoapModuleOptions(): SoapModuleOptionsFactoryType {
    return {
      uri: this.configService.get<string>('SOAP_CALCULATOR_URI') || '',
    };
  }
}
