import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmComponent } from './components/film/film.component';
import { PiloteComponent } from './components/pilote/pilote.component';
import { VaisseauxComponent } from './pages/vaisseaux/vaisseaux.component';

const routes: Routes = [
    { path: '', component: VaisseauxComponent},
    { path: 'piloteDetails/:id', component: PiloteComponent},
    { path: 'film/:id', component: FilmComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
