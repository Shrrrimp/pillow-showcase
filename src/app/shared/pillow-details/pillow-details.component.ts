import { Component, OnInit } from '@angular/core';
import { PillowService } from 'src/app/shared/services/pillow.service';
import { Pillow } from 'src/app/shared/models/pillow.model';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pillow-details',
  templateUrl: './pillow-details.component.html',
  styleUrls: ['./pillow-details.component.scss']
})
export class PillowDetailsComponent implements OnInit {

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
