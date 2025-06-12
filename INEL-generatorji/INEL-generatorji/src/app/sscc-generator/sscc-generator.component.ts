import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SsccService } from './sscc.service'; 
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-sscc-generator',
  templateUrl: './sscc-generator.component.html',
  styleUrl: './sscc-generator.component.css',
  imports: [CommonModule, FormsModule, HttpClientModule]
})

export class SsccGeneratorComponent {
  numberOfCodes: number = 1;
  companyPrefix: string = '1234567';
  extensionDigit: string = '1';
  generatedSSCCs: string[] = [];
  generatedText: string = '';

  constructor(private ssccService: SsccService) {}

   generate(): void {
    this.ssccService.generateSSCC(this.companyPrefix, this.extensionDigit, this.numberOfCodes)
      .subscribe({
        next: (data) => {
          this.generatedSSCCs = data;
          this.generatedText = data.join('\n');
          console.log('Generated SSCCs:', data);
        },
        error: (err) => {
          console.error('Error generating SSCCs:', err);
        }
    });
  }
}