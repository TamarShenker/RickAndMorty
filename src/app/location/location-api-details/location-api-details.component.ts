import { Component, OnInit } from '@angular/core';
import {LocationService} from "../location.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-location-api-details',
  templateUrl: './location-api-details.component.html',
  styleUrls: ['./location-api-details.component.css']
})
export class LocationApiDetailsComponent implements OnInit {
  public location!:any;
  constructor(private locationService:LocationService,private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = String(params['id'])
      this.locationService.getLocationById(id).subscribe(data => {
        this.location = data
      })
    })
  }

}
