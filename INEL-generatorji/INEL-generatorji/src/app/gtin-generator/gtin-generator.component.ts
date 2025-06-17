import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HttpHeaders }  from '@angular/common/http';
import { GtinService } from './gtin.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-gtin-generator',
  templateUrl: './gtin-generator.component.html',
  styleUrls: ['./gtin-generator.component.css'],
  imports: [FormsModule, HttpClientModule, CommonModule, RouterModule],
  providers: [GtinService],
  
})            
export class GtinGeneratorComponent {
  private readonly baseUrl = 'http://localhost:5068/api/gtin'; 
  constructor(private http: HttpClient, private gtinService: GtinService) {}
  gtinInput: string = '';
  checkDigitResult = '';
  numberOfCodes: number = 0;
  generatedCodes: string[] = [];

  isValidInput(): boolean {
    return /^\d{7,13}$/.test(this.gtinInput);
  }

  generateGTIN(): void {
  this.gtinService.generate(this.numberOfCodes).subscribe({
    next: (gtinCodes: string[]) => {
      console.log('Generated GTINs:', gtinCodes);
      this.generatedCodes = gtinCodes; 
    },
    error: (err) => {
      console.error('Error generating GTINs:', err);
     },
    complete: () => {
      console.log('GTIN generation completed.');
     }
    });
  }  

 calculate(): void {
  if (!this.isValidInput()) {
    this.checkDigitResult = 'Napaka: neveljaven vnos';
    return;
  }

  this.gtinService.calculateCheckDigit(this.gtinInput).subscribe({
    next: (calculated: string) => {
      console.log('Generated CheckDigit', calculated);
      this.checkDigitResult = calculated; 
    },
    error: (err) => {
      console.error('Error generating checkdigit:', err);
     },
    complete: () => {
      console.log('check digit calculation completed.');
     }
    });
  }
}