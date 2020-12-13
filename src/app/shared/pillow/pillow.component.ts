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
  public detailUrl: String;
  public shortDescription: string;

  constructor(public router: Router, public authService: AuthService) { }

  ngOnInit(): void {
    this.isDscrVisible = false;
    this.imgUrl = this.baseUrl + '/img/' + this.pillow.fileName;
    this.detailUrl = this.authService.isAdmin() ? `admin/detail/${this.pillow.id}` : `home/detail/${this.pillow.id}`;
    this.shortDescription = `${this.pillow.description.substr(0, 130)}...`;

    //TODO: short description
    console.log(this.pillow.description);
    console.log(this.pillow.description.length);
  }

  toggleDescription(bool): void {
    this.isDscrVisible = bool;
  }

  public goToDetailedPage(): void {
    if (this.authService.isAdmin()) {
      this.router.navigate(['admin/detail', this.pillow.id]);
    } else {
      this.router.navigate(['home/detail', this.pillow.id]);
    }
  }

}
