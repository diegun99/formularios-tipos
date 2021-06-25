import { Component, OnInit } from '@angular/core';

interface IRegisterForm {
  name : string;
  email : string;
  password: string;
  repeatPass : string;
}

//https://mugan86.medium.com/formularios-en-angular-diferencias-template-y-reactive-forms-e37af5e30b81

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.scss']
})
export class TemplateFormsComponent implements OnInit {

  

  register : IRegisterForm = {
    name : "",
    email: "",
    password:"",
    repeatPass:""

  };

  constructor() { }

  ngOnInit(): void {
  }

  submit(){

  }

}
