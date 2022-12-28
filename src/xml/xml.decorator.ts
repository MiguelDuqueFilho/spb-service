import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { XMLParser, XMLValidator } from 'fast-xml-parser';

export const Xml = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const { body } = ctx.switchToHttp().getRequest();
    if (XMLValidator.validate(body) !== true) {
      return 'xml invalid';
    }
    const parser = new XMLParser();
    const { xml } = parser.parse(body);
    return xml;
  },
);
