import { Component, OnInit } from '@angular/core';
import { PillowService } from 'src/app/shared/services/pillow.service';
import { Pillow } from 'src/app/shared/models/pillow.model';

@Component({
  selector: 'app-pillow-list',
  templateUrl: './pillow-list.component.html',
  styleUrls: ['./pillow-list.component.scss']
})
export class PillowListComponent implements OnInit {
  public pillowsList: Pillow[];

  constructor(public pillowService: PillowService) { }

  ngOnInit(): void {
    this.pillowService.getPillowsList().subscribe((data) => {
      console.log('data:');
      console.log(data);
      this.pillowsList = data;
    }, err => console.error(err));
  }

}
