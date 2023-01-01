import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { XMLValidator } from 'fast-xml-parser';

export const Xml = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const { body } = ctx.switchToHttp().getRequest();

    if (XMLValidator.validate(body) !== true) {
      return 'xml invalid';
    }

    return body;
  },
);
