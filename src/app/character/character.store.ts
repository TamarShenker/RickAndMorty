import {Injectable} from '@angular/core';
import {createStore} from "@ngneat/elf";
import {localStorageStrategy, persistState} from "@ngneat/elf-persist-state";
import {
  addEntities,
  deleteEntities,
  selectAllEntities,
  setEntities, upsertEntities,
  withEntities
} from "@ngneat/elf-entities";
import {CharacterState} from "./character.state";

const characterStore = createStore(
  {name: 'character'},
  withEntities<CharacterState>({idKey: 'id'}),
);

@Injectable({
  providedIn: 'root'
})
export class CharacterStoreRepository {
  character$ = characterStore.pipe(selectAllEntities());

  setCharacters(characters: any) {
    characterStore.update(setEntities(characters))
  }

  getAllCharacters() {
    return this.character$;
  }

  deleteCharacterById(id: number) {
    characterStore.update(deleteEntities([id]));
  }

  addCharacter(character: CharacterState) {
    characterStore.update(addEntities([character]));
  }

  updateCharacter(character: CharacterState) {
    characterStore.update(upsertEntities([character]));
  }
}
