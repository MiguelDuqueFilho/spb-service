import { XMLMiddleware } from './xml.middleware';

describe('XmlMiddleware', () => {
  it('should be defined', () => {
    expect(new XMLMiddleware()).toBeDefined();
  });
});
