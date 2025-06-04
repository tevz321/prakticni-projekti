import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { GtinService } from './app/gtin.service';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    GtinService // <-- to morate dodati
  ]
});
