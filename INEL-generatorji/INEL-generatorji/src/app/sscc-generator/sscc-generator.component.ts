import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-sscc-generator',
  templateUrl: './sscc-generator.component.html',
  styleUrl: './sscc-generator.component.css',
  imports: [CommonModule, FormsModule, NgModule]
})

export class SsccGeneratorComponent {
  numberOfCodes: number = 1;
  companyPrefix: string = '1234567';
  extensionDigit: string = '1';
}
