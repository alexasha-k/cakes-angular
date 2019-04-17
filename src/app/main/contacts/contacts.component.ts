import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  })

  onSubmit() {
  // TODO: Use EventEmitter with form value
    console.log(this.contactForm);
    if (this.contactForm.valid) {
      console.warn(this.contactForm.value);
    }
  }

  ngOnInit() {
  }

}
