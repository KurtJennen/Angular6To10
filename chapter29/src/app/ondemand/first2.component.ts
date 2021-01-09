import { Component, EventEmitter, HostListener, Input, Output } from "@angular/core";
import { Product } from '../model/product.model';
import { Model } from '../model/repository.model';
import { RestDataSource } from '../model/rest.datasource';

@Component({
    selector: "first",
    templateUrl: "first.component.html"
})
export class First2Component {
    constructor(public datasource: RestDataSource) { }

    _category: string = "Soccer";
    _products: Product[] = [];
    highlighted: boolean = false;

    ngOnInit() {
        this.updateData();
    }

    getProducts(): Product[] {
        return this._products;
    }

    set category(newValue: string) {
        this._category;
        this.updateData();
    }

    updateData() {
        this.datasource.getData().subscribe(data => this._products = data.filter(p => p.category == this._category));
    }
}