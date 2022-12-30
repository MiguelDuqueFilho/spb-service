import { HttpModuleOptions, HttpModuleOptionsFactory } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
// // import { readFileSync } from 'node:fs';
// // import { Agent } from 'node:http';
Injectable();
export class HttpConfigService implements HttpModuleOptionsFactory {
  constructor(private configService: ConfigService) {}
  createHttpOptions(): HttpModuleOptions {
    return {
      baseURL: this.configService.get('SOAP_URI'),
      timeout: this.configService.get('HTTP_TIMEOUT'),
      maxRedirects: this.configService.get('HTTP_MAX_REDIRECTS'),
      headers: {
        'Content-Type': 'text/xml; charset=utf-8',
        // SOAPAction: 'urn:cmspb#cmspb#Conectar',
        // 'secret-key': 'secretKey',
      },
      // auth: {
      //   username: '',
      //   password: '',
      // },
      // httpsAgent: new Agent({
      //   ca: readFileSync(process.env.va_ca),
      //   keepAlive: false,
      //   cert: readFileSync(process.env.va_cert),
      //   key: readFileSync(process.env.va_key),
      //   passphrase: process.env.va_passphrase,
      // }),
    };
  }
}
