import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-sscc-generator',
  templateUrl: './sscc-generator.component.html',
  styleUrl: './sscc-generator.component.css',
  imports: [CommonModule, FormsModule]
})

export class SsccGeneratorComponent {
  numberOfCodes: number = 1;
  companyPrefix: string = '1234567';
  extensionDigit: string = '1';
}
