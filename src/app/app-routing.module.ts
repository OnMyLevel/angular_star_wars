import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmComponent } from './components/film/film.component';
import { PiloteComponent } from './components/pilote/pilote.component';
import { PlanetComponent } from './components/planet/planet.component';
import { SpecieComponent } from './components/specie/specie.component';
import { VaisseauComponent } from './components/vaisseau/vaisseau.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { VaisseauxComponent } from './pages/vaisseaux/vaisseaux.component';

const routes: Routes = [
    { path: '', component: VaisseauxComponent},
    { path: 'people/:id', component: PiloteComponent},
    { path: 'film/:id', component: FilmComponent},
    { path: 'vaisseau/:id', component: VaisseauComponent},
    { path: 'vehicle/:id', component: VehicleComponent},
    { path: 'specie/:id', component: SpecieComponent},
    { path: 'planet/:id', component: PlanetComponent},
    { path: 'starshipsList/', component: VaisseauxComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
