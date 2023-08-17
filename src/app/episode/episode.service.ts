import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Episode} from "./episode.model";

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {
  private readonly EPISODE_API =
    'https://rickandmortyapi.com/api/episode/'

  constructor(private http: HttpClient) { }
  public getEpisodeById (id: string): Observable<Episode> {
    return this.http.get<Episode>(this.EPISODE_API + id)
  }

}
