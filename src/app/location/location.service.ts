import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Location} from "./location.model";

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private readonly LOCATION_API =
    'https://rickandmortyapi.com/api/location/'

  constructor(private http: HttpClient) {
  }

  public getLocationById(id: string): Observable<Location> {
    return this.http.get<Location>(this.LOCATION_API + id)
  }
}
