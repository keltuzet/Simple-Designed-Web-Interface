import { Pipe, PipeTransform } from '@angular/core';
import { AnchorLinkType } from '@shared/enums/anchor-link-type.enum';

@Pipe({
  name: 'anchorLinkFormat',
})
export class AnchorLinkFormatPipe implements PipeTransform {
  transform(value: string, linkType: AnchorLinkType = AnchorLinkType.MAIL): unknown {
    switch (linkType) {
      case AnchorLinkType.MAIL:
        return `mailto:${value}`;
      case AnchorLinkType.TEL:
      default:
        return `tel:${value}`;
    }
  }
}
