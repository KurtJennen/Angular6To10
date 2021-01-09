import { ApplicationRef, Component } from "@angular/core";
//import { NgForm } from '@angular/forms';
import { ProductFormGroup } from './form.model';
import { Product } from './product.model';
import { Model } from "./repository.model";

@Component({
    selector: "app",
    templateUrl: "template1.html"
})
export class ProductComponent {
    model: Model = new Model();
    newProduct: Product = new Product();
    formSubmitted: boolean = false;
    form: ProductFormGroup = new ProductFormGroup();
    showTable: boolean = true;
    darkColor: boolean = false;


    getProduct(key: number): Product {
        return this.model.getProduct(key);
    }

    getProducts(): Product[] {
        return this.model.getProducts();
    }
    
    addProduct(p: Product) {
        //console.log("New Product: " + this.jsonProduct);
        this.model.saveProduct(p);
    }

    deleteProduct(key: number) {
        this.model.deleteProduct(key);
    }

    submitForm() {
        this.formSubmitted = true;
        if (this.form.valid) {
            this.addProduct(this.newProduct);
            this.newProduct = new Product();
            this.form.reset();
            this.formSubmitted = false;
        }
    }
}