import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { SsccGeneratorComponent } from './sscc-generator.component';

describe('SsccGeneratorComponent', () => {
  let component: SsccGeneratorComponent;
  let fixture: ComponentFixture<SsccGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SsccGeneratorComponent],
      imports: [FormsModule] 
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
