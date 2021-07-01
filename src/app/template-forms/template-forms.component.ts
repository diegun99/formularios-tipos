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
    //datos recibidos
    console.log("datos de inicio de sesión");
    console.log(this.register.name);
    console.log(this.register.email);
    console.log(this.register.password);
    console.log(this.register.repeatPass);

    // controlar si el password y el password verificados son iguales
    if (this.register.password!== this.register.repeatPass) {
      // emitir alerta por no ser iguales y no deja enviar datos
      console.log(" introducir contraseña iguales plz");
      // echar mensaje alerta
      return;
      
    }



  }

}
