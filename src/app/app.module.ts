import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FileHandlerComponent } from './components/file-handler/file-handler.component';
import { VaisseauxComponent } from './pages/vaisseaux/vaisseaux.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { FilmComponent } from './components/film/film.component';
import { PlanetComponent } from './components/planet/planet.component';
import { SpecieComponent } from './components/specie/specie.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { VaisseauCardComponent } from './components/card/vaisseau-card/vaisseau-card.component';
import { PiloteComponent } from './components/pilote/pilote.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { VaisseauComponent } from './components/vaisseau/vaisseau.component';
import { PlanetsComponent } from './pages/planets/planets.component';
import { FilmsComponent } from './pages/films/films.component';
import { SpeciesComponent } from './pages/species/species.component';
import { PeoplesComponent } from './pages/peoples/peoples.component';
import { PlanetCardComponent } from './components/card/planet-card/planet-card.component';
import { SpecieCardComponent } from './components/card/specie-card/specie-card.component';
import { FilmCardComponent } from './components/card/film-card/film-card.component';
import { VehicleCardComponent } from './components/card/vehicle-card/vehicle-card.component';
import { PeopleCardComponent } from './components/card/people-card/people-card.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    FileHandlerComponent,
    VaisseauxComponent,
    PiloteComponent,
    VaisseauCardComponent,
    FilmComponent,
    PlanetComponent,
    SpecieComponent,
    VehicleComponent,
    VaisseauComponent,
    PlanetsComponent,
    FilmsComponent,
    SpeciesComponent,
    PeoplesComponent,
    PlanetCardComponent,
    SpecieCardComponent,
    FilmCardComponent,
    VehicleCardComponent,
    PeopleCardComponent,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
