import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-sscc-generator',
  templateUrl: './sscc-generator.component.html',
  styleUrls: ['./sscc-generator.component.css']
})

export class SsccGeneratorComponent {
  numberOfCodes: number = 1;
  companyPrefix: string = '1234567';
  extensionDigit: string = '1';
}
