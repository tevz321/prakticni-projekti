import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GtinGeneratorComponent } from './gtin-generator/gtin-generator.component';
import { SsccGeneratorComponent } from './sscc-generator/sscc-generator.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'gtin-generator', component: GtinGeneratorComponent },
    { path: 'sscc-generator', component: SsccGeneratorComponent },
];