import { Safehtml } from './safehtml.pipe';
import { TestBed } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';

describe('SafehtmlPipe', () => {
  let pipe: Safehtml;
  let sanitizer: DomSanitizer;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DomSanitizer]
    });

    sanitizer = TestBed.inject(DomSanitizer);
    pipe = new Safehtml(sanitizer);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});