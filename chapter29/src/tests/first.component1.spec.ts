import { Component, DebugElement, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { Product } from 'src/app/model/product.model';
import { Model } from 'src/app/model/repository.model';
import { FirstComponent } from "../app/ondemand/first.component";
import { By } from "@angular/platform-browser";

@Component({
    template: `<first [pa-model]="model"></first>`
})
class TestComponent {
    constructor(public model: Model) { }
    
    @ViewChild(FirstComponent)
    firstComponent: FirstComponent;
}

describe("FirstComponent", () => {
    let fixture: ComponentFixture<TestComponent>;
    let component: FirstComponent;
    let debugElement: DebugElement;

    let mockRepository = {
        getProducts: function () {
            return [
                new Product(1, "test1", "Soccer", 100),
                new Product(2, "test2", "Chess", 100),
                new Product(3, "test3", "Soccer", 100)
            ]
        }
    }

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FirstComponent, TestComponent],
            providers: [{ provide: Model, useValue: mockRepository }]
        });

        TestBed.compileComponents().then(() => {
            fixture = TestBed.createComponent(TestComponent);
            component = fixture.componentInstance.firstComponent;
            debugElement = fixture.debugElement.query(By.directive(FirstComponent));
        });
    }));
    // it("receives the model through an input property", () => {
    //     component.category = "Chess";
    //     fixture.detectChanges();
    //     let products = mockRepository.getProducts().filter(p => p.category == component.category);
    //     let componentProducts = component.getProducts();
    //     for (let i = 0; i < componentProducts.length; i++) {
    //         expect(componentProducts[i]).toEqual(products[i]);
    //     }
    //     expect(debugElement.query(By.css("span")).nativeElement.textContent).toContain(products.length);
    // });
});