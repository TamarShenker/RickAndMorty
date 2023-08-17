import {Injectable} from '@angular/core';
import {Observable, throwError} from "rxjs";

import {CharacterState} from "./character.state";
import {CharacterStoreRepository} from "./character.store";
import {HttpClient} from "@angular/common/http";
import {ListPage} from "./list-page.state";
import {catchError, map} from "rxjs/operators";
const CHARACTER_API = 'https://rickandmortyapi.com/api/character/';
@Injectable()
export class CharacterService {
  pages!: number;
  id: number = 9999;

  constructor(private http: HttpClient,
              private characterStoreRepository: CharacterStoreRepository,
  ) {
  }

  public getCharacterById(id: string): Observable<CharacterState> {
    return this.http.get<CharacterState>(`${CHARACTER_API}${id}`)
  }

  getCharactersByPageId(page: number): Observable<any> {
    return this.http.get<ListPage<CharacterState[]>>(`${CHARACTER_API}?page=${page.toString()}`).pipe(
      map((characters) => {
        this.characterStoreRepository.setCharacters(characters.results),
          this.pages = characters.info.pages
      }),
      catchError((err) => {
        console.log('failed loading characters list', err);
        return throwError(() => err);
      })
    );
  }
}
