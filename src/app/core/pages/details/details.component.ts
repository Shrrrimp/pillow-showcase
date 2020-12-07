import { Component, OnInit } from '@angular/core';
import { PillowService } from '../../services/pillow.service';
import { Pillow } from '../../models/pillow.model';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public pillow: Pillow;
  public baseUrl = environment.apiUrl;
  public imgUrl: String;

  constructor(public pillowService: PillowService,
    public route: ActivatedRoute) { }

  ngOnInit(): void {
    let id: string;
    this.route.params.subscribe((params) => { id = params.id; });

    this.pillowService.getPillow(id).subscribe((data) => {
      this.pillow = data;
      this.imgUrl = this.baseUrl + '/img/' + this.pillow.fileName;
      //TODO добавить переход на страницу ошибки, если объекта нет
    }, err => console.error(err));
  }

}
