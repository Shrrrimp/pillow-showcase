import { Component, OnInit } from '@angular/core';
import { PillowService } from 'src/app/shared/services/pillow.service';
import { Pillow } from 'src/app/shared/models/pillow.model';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/auth/services/auth.service';

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
    public route: ActivatedRoute,
    public authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    let id: string;
    this.route.params.subscribe((params) => { id = params.id; });

    this.pillowService.getPillow(id).subscribe((data) => {
      this.pillow = data;
      this.imgUrl = this.baseUrl + '/img/' + this.pillow.fileName;
    }, err => {
      console.error(err)
      this.router.navigate(['**']);
    });
  }

  editPillow(): void {
    this.router.navigate([`admin/detail/edit/${this.pillow.id}`]);
  }

  deletePillow(): void {
    this.pillowService.deletePillow(this.pillow.id).subscribe(() => {
      this.router.navigate(['/admin']);
    }, err => {
      if (err.error) {
        if (err.error.status == 403) {
          this.authService.logOut();
        }
      }
    });
  }

}
