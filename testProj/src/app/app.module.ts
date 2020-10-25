import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { CommonModule} from '@angular/common'

import { AppComponent } from './app.component'
import {FormsModule} from '@angular/forms'
// @ts-ignore
import {StyleDirective} from './directives/style.directive'

@NgModule({
  declarations: [
    AppComponent,
    StyleDirective,
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
