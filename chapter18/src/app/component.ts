import { ApplicationRef, Component } from "@angular/core";
//import { NgForm } from '@angular/forms';
import { ProductFormGroup } from './form.model';
import { Product } from './product.model';
import { Model } from "./repository.model";

@Component({
    selector: "app",
    templateUrl: "template.html"
    //styles: ["/deep/ div { border: 2px black solid; font-style:italic }"]
})
export class ProductComponent {
    model: Model = new Model();
    
    addProduct(p: Product) {
        //console.log("New Product: " + this.jsonProduct);
        this.model.saveProduct(p);
    }
}