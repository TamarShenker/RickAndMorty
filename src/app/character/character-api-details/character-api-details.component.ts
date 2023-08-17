import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CharacterService} from "../character.service";
import {CharacterState} from "../character.state";

@Component({
  selector: 'app-character-details',
  templateUrl: './character-api-details.component.html',
  styleUrls: ['./character-api-details.component.css']
})
export class CharacterApiDetailsComponent implements OnInit {
  character!:CharacterState;
  constructor(private characterService:CharacterService,private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = String(params['id'])
      this.characterService.getCharacterById(id).subscribe(data => {
        this.character = data
      })
    })
  }
}
