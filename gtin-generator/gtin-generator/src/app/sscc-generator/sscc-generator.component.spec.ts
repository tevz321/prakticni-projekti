import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsccGeneratorComponent } from './sscc-generator.component';

describe('SsccGeneratorComponent', () => {
  let component: SsccGeneratorComponent;
  let fixture: ComponentFixture<SsccGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SsccGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SsccGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
