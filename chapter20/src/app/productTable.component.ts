import { Component, Input, QueryList, ViewChildren } from "@angular/core";
import { PaCellColor } from './cellColor.directive';
import { DiscountService } from './discount.service';
import { LogService } from './log. service';
import { Product } from './product.model';
import { Model } from './repository.model';

@Component({
    selector: "paProductTable",
    // template: "<div>This is the table component</div>"
    // template: `<div class='bg-info p-2'>
    //                 This is a multiline template
    //             </div>`
    templateUrl: "productTable.component.html",
    providers: [LogService]
})
export class ProductTableComponent {
    taxRate: number;
    categoryFilter: string;
    itemCount: number;
    //discounter: DiscountService = new DiscountService();

    constructor(private dataModel: Model) { }

    // @Input("model")
    // dataModel: Model;

    getProduct(key: number): Product {
        return this.dataModel.getProduct(key);
    }

    getProducts(): Product[] {
        return this.dataModel.getProducts();
    }
    
    deleteProduct(key: number) {
        this.dataModel.deleteProduct(key);
    }

    dateObject: Date = new Date(2020, 1, 20);
    dateString: string = "2020-02-20T00:00:00.000Z";
    dateNumber: number = 1582156800000;
}