import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContenidoInterfaz } from '../model/contenido-interfaz';
import { ValidatorsCustom } from '../model/validators-custom';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  product: ContenidoInterfaz = {
    name: 'Gaseosa Coca Cola',
    description: 'Refrescante y azucarada',
    year: 1900,
    price: 35.75
  };
  
  productForm: FormGroup;

  constructor(private formBuilder: FormBuilder/* , productService: ProductService */
  ) {}

  ngOnInit() {
    const currentYear: number = (new Date()).getFullYear();

    // Se deberia obtener el producto mediante un Service(productService)

    /* Construir el FormGroup(productForm), se usa el FormBuilder para facilitar la construccion del formulario(setear valores y validadores) */
    this.productForm = this.formBuilder.group({
      name: [ this.product.name, [Validators.required, Validators.minLength(4)] ],
      description: [ this.product.description, [Validators.required, Validators.maxLength(50)] ],
      price: [ this.product.price, [Validators.required, Validators.min(0)] ],
      year: [ this.product.year, [ Validators.required, ValidatorsCustom.betweenYear(1900, currentYear)] ]
    });
   
  }

  onSubmit() {
    console.log(this.productForm.value);
    // Guardar cambios del producto usando un Service(productService)
  }
  
  get name() {
    return this.productForm.get('name');
  }

  get description() {
    return this.productForm.get('description');
  }

  get price() {
    return this.productForm.get('price');
  }

  get year() {
    return this.productForm.get('year');
  }
}
