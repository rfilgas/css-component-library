import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureDemoComponent } from './feature-demo.component';

describe('FeatureDemoComponent', () => {
  let component: FeatureDemoComponent;
  let fixture: ComponentFixture<FeatureDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
