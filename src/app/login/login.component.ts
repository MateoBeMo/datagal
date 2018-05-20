import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html', 
  styleUrls: ['./login.component.scss'],
  // encapsulation: ViewEncapsulation.None, 
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public loginError: boolean;

  constructor(private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required,
        Validators.minLength(4)])
    });
    this.loginError = false;
  }
  ngOnInit() {
  }
  onSubmit() {
    if (this.loginForm.valid) {
      // this.loginError = true;
      this.router.navigate(['/pages/calendar']);
    }
  }

}
