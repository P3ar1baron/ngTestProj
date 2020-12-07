import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import {AppComponent} from './app.component'
import {FormsModule} from '@angular/forms';
import { ModalComponent } from './modal/modal.component'
import {RefDirective} from './ref.directive';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment'
import {CounterComponent} from "./counter/counter.component";


@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    RefDirective,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
