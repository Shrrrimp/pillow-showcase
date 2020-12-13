import { Component, OnInit } from '@angular/core';
import { PillowService } from 'src/app/shared/services/pillow.service';
import { Pillow } from 'src/app/shared/models/pillow.model';

@Component({
  selector: 'app-pillow-list',
  templateUrl: './pillow-list.component.html',
  styleUrls: ['./pillow-list.component.scss']
})
export class PillowListComponent implements OnInit {

  constructor(public pillowService: PillowService) { }

  ngOnInit(): void {
    this.pillowService.getPillowsList().subscribe((data) => {
      this.pillowService.pillowsList = data;
    }, err => console.error(err));
  }

}
