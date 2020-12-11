import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Pillow } from 'src/app/shared/models/pillow.model';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/auth/services/auth.service';

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

  constructor(public router: Router, public authService: AuthService) { }

  ngOnInit(): void {
    this.isDscrVisible = false;
    this.imgUrl = this.baseUrl + '/img/' + this.pillow.fileName;
  }

  toggleDescription(bool): void {
    this.isDscrVisible = bool;
  }

  public goToDetailedPage(): void {
    this.router.navigate(['detail', this.pillow.id]);
  }

}
