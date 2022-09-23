import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TelaRealizarContultaComponent } from './tela-realizar-contulta/tela-realizar-contulta.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaRealizarContultaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
