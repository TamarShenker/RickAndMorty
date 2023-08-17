import {Component, Inject, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CharacterStoreRepository} from "../character.store";
import {CharacterState} from "../character.state";
import {ActivatedRoute, Router} from "@angular/router";
import {CharacterService} from "../character.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  character!: CharacterState;
  form!: FormGroup;
  isEditing: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private characterStoreRepository: CharacterStoreRepository,
              private route: ActivatedRoute,
              private characterService: CharacterService,
              private router: Router,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private dialogRef: MatDialogRef<CharacterDetailComponent>
  ) {
  }

  ngOnInit() {
    this.initForm();
    if (this.data.entity) {
      this.isEditing = true;
      this.character = this.data.entity
      this.fillFormWithData();
    }
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: [this.characterService.id],
      name: ['', Validators.required],
      status: ['',],
      species: ['',],
      type: [''],
      gender: [''],
      origin: this.formBuilder.group({
        name: [''],
        url: ['']
      }),
      location: this.formBuilder.group({
        name: [''],
        url: ['']
      }),
      image: [''],
      url: [''],
      created: ['']
    });
  }

  private fillFormWithData() {
    // this.episodeArray.clear(); // Clear any existing values
    // this.character.episode.forEach(episode => {
    //   this.episodeArray.push(this.formBuilder.control(episode));
    // });
    this.form.patchValue({
      id: this.character.id,
      name: this.character.name,
      status: this.character.status,
      species: this.character.species,
      type: this.character.type,
      gender: this.character.gender,
      origin: {
        name: this.character.origin.name,
        url: this.character.origin.url
      },
      location: {
        name: this.character.location.name,
        url: this.character.location.url
      },
      image: this.character.image,
      url: this.character.url,
      created: this.character.created
    });
  }


  submitForm() {
    if (this.form.valid) {
      const formData = this.form.value;
      if (this.isEditing) {
        this.characterStoreRepository.updateCharacter(formData);
      } else {
        this.characterStoreRepository.addCharacter(formData);
      }
      this.characterService.id++;
      this.form.reset();
      this.dialogRef.close();
    }
  }
}
