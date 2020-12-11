import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PillowService } from 'src/app/shared/services/pillow.service';
import { Pillow } from 'src/app/shared/models/pillow.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-item',
  templateUrl: './admin-item.component.html',
  styleUrls: ['./admin-item.component.scss']
})
export class AdminItemComponent implements OnInit {

  @Input() public pillow: Pillow | null;
  public baseUrl = environment.apiUrl;
  public imgUrl: String;

  constructor() { }

  ngOnInit(): void {
    this.imgUrl = this.baseUrl + '/img/' + this.pillow.fileName;
  }

}
