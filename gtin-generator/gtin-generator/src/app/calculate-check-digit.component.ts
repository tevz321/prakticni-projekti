import { Component } from '@angular/core';
import { GtinService } from './gtin.service';

@Component({
  selector: 'app-calculate-check-digit',
  templateUrl: './calculate-check-digit.component.html',
})
export class CalculateCheckDigitComponent {
  input = '';
  result = '';

  constructor(private gtinService: GtinService) {}
  
}