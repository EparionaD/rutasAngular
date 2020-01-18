import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from './components/inicio/inicio.component';
import {AboutComponent} from './components/about/about.component';
import {ContactoComponent} from './components/contacto/contacto.component';
import {ExperienciasComponent} from './components/experiencias/experiencias.component';
import {AventuraComponent} from './components/aventura/aventura.component';
import {NofoundComponent} from './components/nofound/nofound.component';

const rutas : Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: '',redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'experiencias', component: ExperienciasComponent },
    { path: 'aventura', component: AventuraComponent },
    { path: '**', component: NofoundComponent },
];


export const app_rutas = RouterModule.forRoot(rutas);