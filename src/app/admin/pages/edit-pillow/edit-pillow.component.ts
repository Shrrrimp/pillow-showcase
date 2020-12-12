import { Component, OnInit } from '@angular/core';
import { PillowService } from 'src/app/shared/services/pillow.service';
import { Pillow } from 'src/app/shared/models/pillow.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-pillow',
  templateUrl: './edit-pillow.component.html',
  styleUrls: ['./edit-pillow.component.scss']
})
export class EditPillowComponent implements OnInit {
  public pillow: Pillow;

  constructor(public pillowService: PillowService,
    public route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
