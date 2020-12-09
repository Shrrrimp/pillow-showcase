import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public isDataInvalid = false;
  public form: FormGroup;
  public submitted = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  get login() { return this.form.get('login'); }

  get password() { return this.form.get('password'); }

  submit() {
    this.submitted = true;
    if (!this.form.valid) { return; }

    this.authService.logIn(this.login.value, this.password.value).subscribe((data) => {
      // this.router.navigate(['/home']);
      console.log('yep!');
    }, (err) => {
      this.isDataInvalid = true;
    });
  }

}
