import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PillowService } from 'src/app/shared/services/pillow.service';
import { Pillow } from 'src/app/shared/models/pillow.model';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-pillow-form',
  templateUrl: './pillow-form.component.html',
  styleUrls: ['./pillow-form.component.scss']
})
export class PillowFormComponent implements OnInit {

  public pillow: Pillow;
  public id: number = null;
  public baseUrl = environment.apiUrl;
  public imgUrl: String;
  public fileName: String = null;
  public form: FormGroup;
  public selectedFile: File = null;
  public errors = [];
  public submitted = false;

  constructor(public pillowService: PillowService,
    public route: ActivatedRoute,
    public authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      pillowName: new FormControl('', Validators.required),
      shortDscrpt: new FormControl('', Validators.required),
      cloth: new FormControl(''),
      fabricStructure: new FormControl(''),
      filler: new FormControl(''),
      size: new FormControl(''),
      price: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      image: new FormControl('')
    });

    this.route.params.subscribe((params) => { this.id = params.id; });

    if (this.id) {
      this.pillowService.getPillow(this.id.toString()).subscribe((data) => {
        //TODO добавить переход на страницу ошибки, если объекта нет
        this.pillow = data;

        if (this.pillow.fileName) {
          this.imgUrl = this.baseUrl + '/img/' + this.pillow.fileName;
          this.fileName = this.pillow.fileName;
        }

        this.pillowName.setValue(this.pillow.pillowName || null);
        this.cloth.setValue(this.pillow.cloth || null);
        this.fabricStructure.setValue(this.pillow.fabricStructure || null);
        this.filler.setValue(this.pillow.filler || null);
        this.size.setValue(this.pillow.size || null);
        this.price.setValue(this.pillow.price || null);
        this.description.setValue(this.pillow.description || null);
      }, err => console.error(err));
    } else {
      this.pillow = {
        pillowName: '',
        shortDscrpt: '',
        description: '',
        cloth: '',
        fabricStructure: '',
        filler: '',
        size: '',
        price: null,
        fileName: null
      };
    }

  }

  get pillowName() { return this.form.get('pillowName'); }

  get shortDscrpt() { return this.form.get('shortDscrpt'); }

  get cloth() { return this.form.get('cloth'); }

  get fabricStructure() { return this.form.get('fabricStructure'); }

  get filler() { return this.form.get('filler'); }

  get size() { return this.form.get('size'); }

  get price() { return this.form.get('price'); }

  get description() { return this.form.get('description'); }

  get image() { return this.form.get('image'); }

  onFileSelected(event) {
    if (event.target.files.length) {
      this.selectedFile = event.target.files[0];
      this.fileName = event.target.files[0].name;

      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (e: any) => {
        this.imgUrl = e.target.result;
      };
    }
  }

  deleteImg() {
    this.fileName = null;
    this.imgUrl = null;
    this.image.reset();
  }

  submit() {
    this.submitted = true;
    if (!this.form.valid) { return; }

    const fd = new FormData();

    fd.append('pillowName', this.pillowName.value);
    fd.append('shortDscrpt', this.shortDscrpt.value);
    fd.append('description', this.description.value);
    fd.append('cloth', this.cloth.value);
    fd.append('fabricStructure', this.fabricStructure.value);
    fd.append('filler', this.filler.value);
    fd.append('size', this.size.value);
    fd.append('price', this.price.value);

    if (this.selectedFile) {
      fd.append('file', this.selectedFile, this.selectedFile.name);
    }

    if (this.id) {
      this.pillowService.updatePillow(fd, this.id).subscribe((data) => {
        this.router.navigate(['/admin']);
      }, (err) => {
        this.errors = [];
        console.log(err);
        if (err.error) {
          if (err.error.status == 403) {
            this.authService.logOut();
          }
        }
      });

    } else {
      this.pillowService.createPillow(fd).subscribe((data) => {
        this.router.navigate(['/admin']);
      }, (err) => {
        this.errors = [];
        console.log(err);
        if (err.error) {
          if (err.error.status == 403) {
            this.authService.logOut();
          }
        }
      });
    }

  }

}

