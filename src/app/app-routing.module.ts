import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CharacterListComponent} from "./character/character-list/character-list.component";
import {CharaterCardComponent} from "./character/charater-card/charater-card.component";
import {LocationApiDetailsComponent} from "./location/location-api-details/location-api-details.component";
import {EpisodeApiDetailsComponent} from "./episode/episode-api-details/episode-api-details.component";
import {CharacterApiDetailsComponent} from "./character/character-api-details/character-api-details.component";
import {CharacterDetailComponent} from "./character/character-detail/character-detail.component";

const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'character/page/1' },
  { path: 'character/page/:id', component: CharacterListComponent },
  { path: 'location/:id', component: LocationApiDetailsComponent },
  { path: 'episode/:id', component: EpisodeApiDetailsComponent },
  { path: 'character/:id', component: CharacterApiDetailsComponent },
  { path: 'characterDetails/:id', component: CharacterDetailComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
