import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { CommonModule} from '@angular/common'

import { AppComponent } from './app.component'
import {FormsModule} from '@angular/forms'
import {MultByPipe} from './pipes/mult-by.pipe'

@NgModule({
  declarations: [
    AppComponent,
    MultByPipe
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
