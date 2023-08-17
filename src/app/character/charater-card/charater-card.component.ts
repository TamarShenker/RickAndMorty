import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {CharacterStoreRepository} from "../character.store";
import {CharacterState} from "../character.state";
import {CharacterDetailComponent} from "../character-detail/character-detail.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-charater-card',
  templateUrl: './charater-card.component.html',
  styleUrls: ['./charater-card.component.css']
})
export class CharaterCardComponent {
  @Input() character!: CharacterState;

  constructor(private characterStoreRepository: CharacterStoreRepository,
              private dialog: MatDialog
  ) {
  }

  getLocation(url: string): string {
    return '/location/' + url.slice(-1)
  }

  getEpisode(url: string): string {
    return '/episode/' + url.slice(-1)
  }

  getCharacter(url: string): string {
    return '/character/' + url.slice(-1)
  }

  deleteCharacter(id: number) {
    this.characterStoreRepository.deleteCharacterById(id);
  }

  editCharacter(character: Object) {
    this.dialog.open(CharacterDetailComponent, {
      data: {
        entity: character,
      },
    });
  }
}
