import { Pipe, PipeTransform } from '@angular/core';
import DOMPurify from 'dompurify';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import { SanitizeOptions, rtfHtmlSanitizeOptions } from './allowedHtmlConstants';

@Pipe({
  name: 'safehtml',
  standalone: true
})
export class Safehtml implements PipeTransform {


public transform(value: any, type: string): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {


    let sanitizeHtml = (value: any, options?: SanitizeOptions): SafeHtml => {
      const sanitizedContent = DOMPurify.sanitize(value, (options !== undefined ? options : {}));
      console.log(DOMPurify.removed)
      return this.sanitizer.bypassSecurityTrustHtml(sanitizedContent);
    }


    switch (type) {
			case 'html': return sanitizeHtml(value);
			// case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
			// case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
			// case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
			// case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
			default: throw new Error(`Invalid safe type specified: ${type}`);
		}
  }



    constructor(protected sanitizer: DomSanitizer) {}
}
