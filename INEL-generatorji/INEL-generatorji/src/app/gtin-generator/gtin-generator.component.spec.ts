import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GtinGeneratorComponent } from './gtin-generator.component';

describe('GtinGeneratorComponent', () => {
  let component: GtinGeneratorComponent;
  let fixture: ComponentFixture<GtinGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GtinGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GtinGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});