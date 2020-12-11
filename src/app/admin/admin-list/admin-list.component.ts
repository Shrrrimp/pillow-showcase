import { Component, OnInit } from '@angular/core';
import { PillowService } from 'src/app/core/services/pillow.service';
import { Pillow } from 'src/app/core/models/pillow.model';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss']
})
export class AdminListComponent implements OnInit {
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
