export const xmlGetValue = (xmlData: string, tagElement: string): string => {
  const strRegex = RegExp(`<${tagElement}>(.+?)<\/${tagElement}>`);

  const parseText = <string[]>strRegex.exec(xmlData);

  if (parseText === null) {
    return '';
  }
  const [, element] = parseText;

  return element;
};

export const xmlInsertCDATA = (xml: string): string => {
  return `<![CDATA[${xml}]]>`;
};

export const xmlRemoveCDATA = (xml: string): string => {
  if (
    xml.substring(0, 9) === '<![CDATA[' &&
    xml.substring(xml.length - 3) === ']]>'
  ) {
    const element = xml.substring(9, xml.length - 3);
    return element;
  }

  return xml;
};
