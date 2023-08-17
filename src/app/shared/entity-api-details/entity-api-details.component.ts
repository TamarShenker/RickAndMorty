import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-entity-api-details',
  templateUrl: './entity-api-details.component.html',
  styleUrls: ['./entity-api-details.component.css']
})
export class EntityApiDetailsComponent implements OnInit {
  @Input() entity!: Object;

  constructor() {
  }

  ngOnInit(): void {
  }

}
