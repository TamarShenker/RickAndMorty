import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CharacterService} from "../character.service";
import {CharacterStoreRepository} from "../character.store";
import {MatDialog} from "@angular/material/dialog";
import {CharacterDetailComponent} from "../character-detail/character-detail.component";

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characters$ = this.characterStoreRepository.getAllCharacters();
  page: number = 1;
  pages!: number;

  constructor(public readonly characterService: CharacterService,
              private readonly route: ActivatedRoute,
              private characterStoreRepository: CharacterStoreRepository,
              private router: Router,
              private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let pageId = params['id']
      this.characterService.getCharactersByPageId(pageId).subscribe();
    })
  }

  setPage(page: number) {
    this.page = page;
    this.router.navigate(['/character/page', page]);
  }

  addCharacter(character: any) {
    this.dialog.open(CharacterDetailComponent, {
      data: {
        entity: character,
      },
    });
  }
}
