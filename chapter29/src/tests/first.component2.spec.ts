import { async, ComponentFixture, fakeAsync, TestBed, tick } from "@angular/core/testing";
import { Product } from 'src/app/model/product.model';
import { First2Component } from "../app/ondemand/first2.component";
import { Observable } from 'rxjs';
import { RestDataSource } from 'src/app/model/rest.datasource';
import { Injectable } from '@angular/core';

@Injectable()
class MockDataSource {
    public data = [
        new Product(1, "test1", "Soccer", 100),
        new Product(2, "test2", "Chess", 100),
        new Product(3, "test3", "Soccer", 100),
    ];
    getData(): Observable<Product[]> {
        return new Observable<Product[]>(obs => {
            setTimeout(() => obs.next(this.data), 1000);
        })
    }
}

describe("FirstComponent", () => {
    let fixture: ComponentFixture<First2Component>;
    let component: First2Component;
    let dataSource = new MockDataSource();

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [First2Component],
            providers: [{ provide: RestDataSource, useValue: dataSource }]
        });

        TestBed.compileComponents().then(() => {
            fixture = TestBed.createComponent(First2Component);
            component = fixture.componentInstance;
        });
    }));

    it("performs async op", fakeAsync(() => {
        dataSource.data.push(new Product(100, "test100", "Soccer", 100));
        fixture.detectChanges();
        for (let i = 0; i < 1001; i++) {
            tick(1);
        }
        fixture.whenStable().then(() => {
            expect(component.getProducts().length).toBe(3);
        });
    }));
});