import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { createContactForm } from './contact.form';
import { environment as ENV } from './../../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm:any = null;
  validationMessages:any = null;
  formData:any = null;
  sending = false;
  sentEmail = false;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) { 
    this.formData = createContactForm(this.formBuilder, null, null);
    this.validationMessages = this.formData.messages;
    this.contactForm = this.formData.form;
  }

  ngOnInit(): void {
  }

  async sendMail(){
    if (this.contactForm.valid){
      this.sending = true;
      await this.http.post(ENV.apiServer + '/contact-forms/sendmail', this.contactForm.value).toPromise().then( res => {
        this.sentEmail = true;
      }).catch();
      this.sending = false;
    }
  }
}
