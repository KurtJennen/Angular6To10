
import { Component, EventEmitter, Output, ViewEncapsulation } from "@angular/core";
import { ProductFormGroup } from './form.model';
import { Product } from './product.model';
@Component({
    selector: "paProductForm",
    // template: "<div>This is the form component</div>"
    // template: "<div>{{model}}</div>"
    templateUrl: "productForm.component.html",
    // styles: ["div { background-color: lightgreen }"]
    //styleUrls: ["productForm.component.css"],
    //encapsulation: ViewEncapsulation.Emulated
})
export class ProductFormComponent {
    // model: string = "This is the model";
    form: ProductFormGroup = new ProductFormGroup();
    newProduct: Product = new Product();
    formSubmitted: boolean = false;

    @Output("paNewProduct")
    newProductEvent = new EventEmitter<Product>();

    submitForm(form: any) {
        this.formSubmitted = true;
        if (form.valid) {
            this.newProductEvent.emit(this.newProduct);
            this.newProduct = new Product();
            this.form.reset();
            this.formSubmitted = false;
        }
    }
}