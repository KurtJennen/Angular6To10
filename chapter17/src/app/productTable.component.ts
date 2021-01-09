import { Component, Input, QueryList, ViewChildren } from "@angular/core";
import { PaCellColor } from './cellColor.directive';
import { Product } from './product.model';
import { Model } from './repository.model';

@Component({
    selector: "paProductTable",
    // template: "<div>This is the table component</div>"
    // template: `<div class='bg-info p-2'>
    //                 This is a multiline template
    //             </div>`
    templateUrl: "productTable.component.html"
})
export class ProductTableComponent {
    @Input("model")
    dataModel: Model;

    getProduct(key: number): Product {
        return this.dataModel.getProduct(key);
    }

    getProducts(): Product[] {
        return this.dataModel.getProducts();
    }
    
    deleteProduct(key: number) {
        this.dataModel.deleteProduct(key);
    }
    showTable: boolean = true;

    @ViewChildren(PaCellColor)
    viewChildren: QueryList<PaCellColor>;

    ngAfterViewInit() {
        this.viewChildren.changes.subscribe(() => {
            this.updateViewChildren();
        });
        this.updateViewChildren();
    }

    private updateViewChildren() {
        setTimeout(() => {
            this.viewChildren.forEach((child, index) => {
                child.setColor(index % 2 ? true : false);
            })
        }, 0);
    }
}