import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OwlOptions } from 'ngx-owl-carousel-o';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  myForm: FormGroup | any;
  titleAlert: string = 'This field is required';

  constructor(private formBuilder: FormBuilder){}


  ngOnInit() {
    this.createForm();
    
  }

  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.myForm = this.formBuilder.group({
      'email': [null, [Validators.required, Validators.pattern(emailregex)]],
      'name': [null, Validators.required],
      'message':[null, Validators.required]  ,
      'validate': ''
    });
  }
  getErrorEmail() {
    return this.myForm.get('email').hasError('required') ? 'This field is required' :
      this.myForm.get('email').hasError('pattern') ? 'Not a valid emailaddress' :
        this.myForm.get('email').hasError('alreadyInUse') ? 'This emailaddress is already in use' : '';
  }
  onSubmit() {
    this.myForm.reset();
  }



  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-caret-left"></i>', '<i class="fa-solid fa-caret-right"></i> '],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }
}
