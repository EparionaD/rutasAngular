import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import {app_rutas} from './app.routes';


//Componentes
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienciasComponent } from './components/experiencias/experiencias.component';
import { AventuraComponent } from './components/aventura/aventura.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NofoundComponent } from './components/nofound/nofound.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AboutComponent,
    ExperienciasComponent,
    AventuraComponent,
    ContactoComponent,
    HeaderComponent,
    FooterComponent,
    NofoundComponent
  ],
  imports: [
    BrowserModule,
    app_rutas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
