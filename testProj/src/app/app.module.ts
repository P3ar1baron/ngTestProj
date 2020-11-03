import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { CommonModule} from '@angular/common'

import { AppComponent } from './app.component'
import {FormsModule} from '@angular/forms'
import {MultByPipe} from './pipes/mult-by.pipe';
import { ExMarksPipe } from './pipes/ex-marks.pipe';
import { FilterPipe } from './pipes/filter.pipe'
import {AppCounterService} from './services/app-counter.service'

@NgModule({
  declarations: [
    AppComponent,
    MultByPipe,
    ExMarksPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
