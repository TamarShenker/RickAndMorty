import { Component, OnInit } from '@angular/core';
import {Episode} from "../episode.model";
import {EpisodeService} from "../episode.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-episode-api-details',
  templateUrl: './episode-api-details.component.html',
  styleUrls: ['./episode-api-details.component.css']
})
export class EpisodeApiDetailsComponent implements OnInit {
  episode!:Episode;
  constructor(
    private readonly episodeService: EpisodeService,
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = String(params['id'])
      this.episodeService.getEpisodeById(id).subscribe(data => {
        this.episode = data
      })
    })
  }

}
