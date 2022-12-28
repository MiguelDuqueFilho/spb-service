import { HttpService } from '@nestjs/axios';
import { ForbiddenException, Injectable } from '@nestjs/common';

import { catchError, firstValueFrom, map, tap } from 'rxjs';
import { HttpConfigService } from './http.config.service';

Injectable();
export class ApiService {
  constructor(
    private readonly http = new HttpService(),
    private readonly httpConfigService: HttpConfigService, // private configService: ConfigService,
  ) {}
  // private configService: ConfigService, // private httpConfigService: HttpConfigService,

  // requestConfig = {
  //   baseURL: this.configService.get('SOAP_URI'),
  //   timeout: this.configService.get('HTTP_TIMEOUT'),
  //   maxRedirects: this.configService.get('HTTP_MAX_REDIRECTS'),
  //   headers: {
  //     'Content-Type': 'text/xml; charset=utf-8',
  //     // SOAPAction: 'urn:cmspb#cmspb#Conectar',
  //     // 'secret-key': 'secretKey',
  //   },
  //   // auth: {
  //   //   username: '',
  //   //   password: '',
  //   // },
  //   // httpsAgent: new Agent({
  //   //   ca: readFileSync(process.env.va_ca),
  //   //   keepAlive: false,
  //   //   cert: readFileSync(process.env.va_cert),
  //   //   key: readFileSync(process.env.va_key),
  //   //   passphrase: process.env.va_passphrase,
  //   // }),
  // };

  soapWsdl() {
    return firstValueFrom(
      this.http
        .get('/calculator.asmx?WSDL', {
          baseURL: process.env.SOAP_URI,
          headers: {
            Accept: 'text/xml, charset=utf-8',
            timeout: process.env.HTTP_TIMEOUT,
            maxRedirects: process.env.HTTP_MAX_REDIRECTS,
          },
        })
        .pipe(
          tap((res) => console.log(res)),
          map((res) => res.data),
        )
        .pipe(
          catchError(() => {
            throw new ForbiddenException('API not available');
          }),
        ),
    );
  }

  //   async soapWsdl() {
  //     // const request = this.http
  //     //   .post(
  //     //     '/calculator.asmx?WSDL',
  //     //     // null,
  //     //     // this.httpConfigService.createHttpOptions(),
  //     //   )
  //     //   .pipe(map((res) => res.data))
  //     //   .pipe(
  //     //     catchError(() => {
  //     //       throw new ForbiddenException('API not available');
  //     //     }),
  //     //   );
  //     // const wsdl = await lastValueFrom(request);
  //     // return {
  //     //   data: {
  //     //     wsdl,
  //     //   },
  //     // };
  //   }
}
