import { ApplicationRef, Component } from "@angular/core";
//import { NgForm } from '@angular/forms';
import { ProductFormGroup } from './form.model';
import { Product } from './product.model';
import { Model } from "./repository.model";

@Component({
    selector: "app",
    templateUrl: "template.html"
})
export class ProductComponent {
    model: Model = new Model();
    selectedProduct: string;
    newProduct: Product = new Product();
    formSubmitted: boolean = false;
    form: ProductFormGroup = new ProductFormGroup();

    getProduct(key: number): Product {
        return this.model.getProduct(key);
    }

    getProducts(): Product[] {
        return this.model.getProducts();
    }

    getSelected(product: Product): boolean {
        return product.name == this.selectedProduct;
    }

    get jsonProduct() {
        return JSON.stringify(this.newProduct);
    }
    
    addProduct(p: Product) {
        console.log("New Product: " + this.jsonProduct);
    }

    // getValidationMessages(state: any, thingName?: string) {
    //     let thing: string = state.path || thingName;
    //     let messages: string[] = [];
    //     if (state.errors) {
    //         for (let errorName in state.errors) {
    //             switch (errorName) {
    //                 case "required":
    //                     messages.push(`You must enter a ${thing}`);
    //                     break;
    //                 case "minlength":
    //                     messages.push(`A ${thing} must be at least ${state.errors['minlength'].requiredLength} characters`);
    //                     break;
    //                 case "pattern":
    //                     messages.push(`The ${thing} contains illegal characters`);
    //                     break;
    //             }
    //         }
    //     }
    //     return messages;
    // }

    submitForm() {
        this.formSubmitted = true;
        if (this.form.valid) {
            this.addProduct(this.newProduct);
            this.newProduct = new Product();
            this.form.reset();
            this.formSubmitted = false;
        }
    }

    // getFormValidationMessages(form: NgForm) {
    //     let messages: string[] = [];
    //     Object.keys(form.controls).forEach(k => {
    //         this.getValidationMessages(form.controls[k], k).forEach(m => messages.push(m));
    //     });
    //     return messages;
    // }
}