import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GtinGeneratorComponent } from './gtin-generator/gtin-generator.component';
import { SsccGeneratorComponent } from './sscc-generator/sscc-generator.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'gtin-generator', component: GtinGeneratorComponent },
  { path: 'sscc-generator', component: SsccGeneratorComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppComponent,
    HomeComponent,
    GtinGeneratorComponent,
    SsccGeneratorComponent,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule {}