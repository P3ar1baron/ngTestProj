import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { CommonModule} from '@angular/common'

import { AppComponent } from './app.component'
import {FormsModule} from '@angular/forms'
import {MultByPipe} from './pipes/mult-by.pipe';
import { ExMarksPipe } from './pipes/ex-marks.pipe'

@NgModule({
  declarations: [
    AppComponent,
    MultByPipe,
    ExMarksPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
