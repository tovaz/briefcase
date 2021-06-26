import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

//_ Form field names, from db request
export const createContactForm = (formBuilder:FormBuilder, translate:any, data=null) => { 
    let contactForm = formBuilder.group({
      email: new FormControl({value: '', disabled: false}, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      name: new FormControl({value: '', disabled: false},  Validators.required),
      phone: new FormControl({value: '', disabled: false}),
      message: new FormControl({value: '', disabled: false}, Validators.required),
    } ); //{ validators: repeatFn });

    //_ Set password_repeat validators error type
    //_ Para validar 2 campos iguales, no necesario en el formulario de contacto
    contactForm.valueChanges.subscribe(field => {
        /*if (field.password != '' && field.password_reapeat != field.password){
            contactForm.get('password_repeat').setErrors({ notMatch: true });
        }

        if (field.password == field.password_repeat){
            contactForm.get('password_repeat').setErrors(null);
        }*/
    });

    // Return messages errors
    let validationMessages = [{
      name: 'email',
      translated: 'Email',
      validations: [
          { type: 'required', message: 'Email is required.' },
          { type: 'pattern', message: 'Please write a valid email.' },
        ]}, 
      {
        name: 'name',
        translated: 'Name',
        validations: [
          { type: 'required', message: 'Please write a name.'}
        ]
      } ,
      {
        name: 'message',
        translated: 'Message',
        validations: [
          { type: 'required', message: 'Please write a message, cant send contact form without a message.' }
        ]
      },
      /*{
        name: 'password',
        translated: 'Password',
        validations: [
          { type: 'required', message: translate.instant('company.users.validationForm.passwordRequired') }
        ]
      }
      ,
      {
        name: 'password_repeat',
        translated: 'Confirm Password',
        validations: [
          { type: 'required', message: translate.instant('company.users.validationForm.confirmRequired') },
          { type: 'notMatch', message: translate.instant('company.users.validationForm.confirmPassword') }
        ]
      }*/
    ];

    return { messages: validationMessages, form: contactForm };
    
  }

  function repeatFn(formGroup: FormGroup) {
    /*if (formGroup.get('password').value != '')
      return formGroup.get('password').value === formGroup.get('password_repeat').value ? null : { valid: true };
    else
      return null;*/
  }