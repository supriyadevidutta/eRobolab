import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-mail-us',
  templateUrl: './mail-us.component.html',
  styleUrls: ['./mail-us.component.css']
})

export class MailUsComponent implements OnInit {
  name:String;
  email: String;
  message: String;
  telephone: String;
  subject: String;
  responseMessage = false;
  constructor() { }

  ngOnInit() {
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  submitContactDetails(contactForm) {
    console.log(contactForm.value);
    this.responseMessage = true;
    setTimeout(() => {
      this.responseMessage = false;
    },5000);

  }

}
