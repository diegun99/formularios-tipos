import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        name: ["",Validators.required],
        email: ["",[Validators.required,Validators.email]],
        password: ["",[Validators.required,Validators.minLength(6)]],
        repeatPass:  ["",Validators.required]
      },
      {
        validator : this.MustMatch("password","repeatPass")// validando
      }

    );
  }

  MustMatch(controlName : string,matchingControlName : string){
    return (formGroup : FormGroup)=>{
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      // return if another validator has already found an error on the matchingCOntrol
      if(matchingControl.errors && !matchingControl.errors.mustMatch){

        return;
      }

      // set error on matchingCOnyrol if  validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({mustMatch : true});
        
      }else{
        matchingControl.setErrors(null);
      }

    };

  }

  onSubmit(){
    this.submitted = true;
    
    //stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
      
    }

    // display form values on success

    alert(
      "SUCCESS!! :-)\n\n"+ JSON.stringify(this.registerForm.value,null,4));
  }

  onReset(){
    this.submitted = false;
    this.registerForm.reset();
  }

}
