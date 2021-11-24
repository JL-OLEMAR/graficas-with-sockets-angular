import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io'
import { ChartsModule } from 'ng2-charts'

import { AppComponent } from './app.component'
import { GraficaComponent } from './components/grafica/grafica.component'
import { GraficaBarComponent } from './components/grafica-bar/grafica-bar.component'

const config: SocketIoConfig = { url: 'http://localhost:5000', options: {} }

@NgModule({
  declarations: [
    AppComponent,
    GraficaComponent,
    GraficaBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SocketIoModule.forRoot(config),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
