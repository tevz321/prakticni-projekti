import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GtinGeneratorComponent } from './gtin-generator/gtin-generator.component';
import { SsccGeneratorComponent } from './sscc-generator/sscc-generator.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'gtin-generator', component: GtinGeneratorComponent },
  { path: 'sscc-generator', component: SsccGeneratorComponent },
  { path: '**', redirectTo: '' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }