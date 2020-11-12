import { Pipe, PipeTransform } from '@angular/core';
import { AnchorLinkType } from '@shared/enums/anchor-link-type.enum';

@Pipe({
  name: 'anchorLinkFormat',
})
export class AnchorLinkFormatPipe implements PipeTransform {
  transform(value: string, linkType: AnchorLinkType = AnchorLinkType.Mail): unknown {
    switch (linkType) {
      case AnchorLinkType.Mail:
        return `mailto:${value}`;
      case AnchorLinkType.Tel:
      default:
        return `tel:${value}`;
    }
  }
}
