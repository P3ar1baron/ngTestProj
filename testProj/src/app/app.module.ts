import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import {AppComponent} from './app.component'
import {FormsModule} from '@angular/forms'
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment'
import {CounterComponent} from "./counter/counter.component";
import { PostsComponent } from './posts/posts.component';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
