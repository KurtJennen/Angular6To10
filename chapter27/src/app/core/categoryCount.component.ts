import { Component, KeyValueDiffer, KeyValueDiffers, ChangeDetectorRef } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Model } from "../model/repository.model";

@Component({
    selector: "paCategoryCount",
    template: `<div class="bg-primary p-2 text-white">
                    There are {{count}} categories
                </div>`
})
export class CategoryCountComponent {
    private differ: KeyValueDiffer<any, any>;
    count: number = 0;
    private category: string;

    constructor(private model: Model, private keyValueDiffers: KeyValueDiffers, private changeDetector: ChangeDetectorRef, activeRoute: ActivatedRoute) { 
        activeRoute.pathFromRoot.forEach(route => route.params.subscribe(params => {
            if (params["category"] != null) {
                this.category = params["category"];
                this.updateCount();
            }
        }))
    }

    ngOnInit() {
        this.differ = this.keyValueDiffers.find(this.model.getProducts()).create();
    }

    ngDoCheck() {
        if (this.differ.diff(this.model.getProducts()) != null) {
            // this.count = this.model.getProducts()
            //     .map(p => p.category)
            //     .filter((category, index, array) => array.indexOf(category) == index)
            //     .length;
            this.updateCount();
        }
    }

    private updateCount() {
        this.count = this.model.getProducts()
                .filter(p => this.category == null || p.category == this.category)
                .map(p => p.category)
                .filter((category, index, array) => array.indexOf(category) == index)
                .length;
    }
}