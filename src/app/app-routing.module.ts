import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PiloteComponent } from './pages/pilote/pilote.component';
import { VaisseauxComponent } from './pages/vaisseaux/vaisseaux.component';

const routes: Routes = [
    { path: '', component: VaisseauxComponent},
    { path: 'piloteDetails/:id', component: PiloteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
