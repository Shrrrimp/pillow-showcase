import { Component, OnInit, Input } from '@angular/core';
import { Pillow } from '../models/pillow.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pillow',
  templateUrl: './pillow.component.html',
  styleUrls: ['./pillow.component.scss']
})
export class PillowComponent implements OnInit {

  @Input() public pillow: Pillow | null;
  public isDscrVisible: Boolean;
  public baseUrl = environment.apiUrl;
  public imgUrl: String;

  constructor() { }

  ngOnInit(): void {
    this.isDscrVisible = false;
    this.imgUrl = this.baseUrl + '/img/' + this.pillow.fileName;
  }

  toggleDescription(bool): void {
    this.isDscrVisible = bool;
  }

}
