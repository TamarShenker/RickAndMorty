import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import {ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { CharaterCardComponent } from './character/charater-card/charater-card.component';
import {CharacterListComponent} from "./character/character-list/character-list.component";
import {CharacterService} from "./character/character.service";
import { LocationApiDetailsComponent } from './location/location-api-details/location-api-details.component';
import { EntityApiDetailsComponent } from './shared/entity-api-details/entity-api-details.component';
import { EpisodeApiDetailsComponent } from './episode/episode-api-details/episode-api-details.component';
import { CharacterApiDetailsComponent } from './character/character-api-details/character-api-details.component';
import { CharacterDetailComponent } from './character/character-detail/character-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CharaterCardComponent,
    CharacterListComponent,
    LocationApiDetailsComponent,
    EntityApiDetailsComponent,
    EpisodeApiDetailsComponent,
    CharacterApiDetailsComponent,
    CharacterDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    CommonModule,
    MatButtonModule,
  ],
  providers: [CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
