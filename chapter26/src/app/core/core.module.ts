import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { TableComponent } from "./table.component";
import { FormComponent } from "./form.component";
import { StatePipe } from './state.pipe';
import { MessageModule } from "../messages/message.module";
import { RouterModule } from '@angular/router';
import { ProductCountComponent } from './productCount.component';
import { CategoryCountComponent } from './categoryCount.component';
import { NotFoundComponent } from './notFound.component';

@NgModule({
    imports: [BrowserModule, FormsModule, MessageModule, RouterModule], 
    declarations: [TableComponent, FormComponent, StatePipe, ProductCountComponent, CategoryCountComponent, NotFoundComponent],
    exports: [TableComponent, FormComponent]
})
export class CoreModule { }