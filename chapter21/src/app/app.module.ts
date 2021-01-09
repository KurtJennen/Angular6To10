import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
//import { ProductComponent } from './component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { PaAttrDirective } from './attr.directive';
//import { PaModel } from './twoway.directive';
//import { PaStructureDirective } from './structure.directive';
//import { PaIteratorDirective } from './iterator.directive';
//import { PaCellColor } from './cellColor.directive';
//import { PaCellColorSwitcher } from './cellColorSwitcher.directive';
//import { ProductTableComponent } from './productTable.component';
//import { ProductFormComponent } from './productForm.component';
//import { PaToggleView } from './toggleView.component';
//import { PaAddTaxPipe } from './addTax.pipe';
//import { PaCategoryFilterPipe } from './categoryFilter.pipe';
import { registerLocaleData } from '@angular/common';
import localNl from '@angular/common/locales/nl'
//import { PaDiscountDisplayComponent } from './discountDisplay.component';
//import { PaDiscountEditorComponent } from './discountEditor.component';
//import { DiscountService } from './discount.service';
//import { PaDiscountPipe } from './discount.pipe';
//import { PaDiscountAmountDirective } from './discountAmount.directive';
//import { SimpleDataSource } from './datasource.model';
//import { Model } from './repository.model';
//import { LogLevel, LogService, LOG_SERVICE, SpecialLogService, LOG_LEVEL } from './log. service';
//import { PaDisplayValueDirective, VALUE_SERVICE } from './valueDisplay.directive';
//import { AppComponent } from './app.component';
import { ModelModule } from "./model/model.module";
import { CommonModule } from "./common/common.module";
import { ComponentsModule } from './components/components.module';
import { ProductFormComponent } from './components/productForm.component';
import { ProductTableComponent } from './components/productTable.component';

registerLocaleData(localNl);
//let logger = new LogService();
//logger.minimumLevel = LogLevel.DEBUG;

@NgModule({
  declarations: [
    //ProductComponent,
    //PaAttrDirective,
    //PaModel,
    //PaStructureDirective,
    //PaIteratorDirective,
    //PaCellColor,
    //PaCellColorSwitcher,
    //ProductTableComponent,
    //ProductFormComponent,
    //PaToggleView,
    //PaAddTaxPipe,
    //PaCategoryFilterPipe,
    //PaDiscountDisplayComponent,
    //PaDiscountEditorComponent,
    //PaDiscountPipe,
    //PaDiscountAmountDirective,
    //PaDisplayValueDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModelModule,
    CommonModule, 
    ComponentsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: "nl-BE"},
    //DiscountService,
    //SimpleDataSource,
    //Model,
    //{ provide: LOG_LEVEL, useValue: LogLevel.ERROR },
    //{ provide: "debugLevel", useExisting: LOG_LEVEL },
    // { provide: LogService, deps: ["debugLevel"], useFactory: (level) => {
    //     let logger = new LogService();
    //     logger.minimumLevel = level;
    //     return logger;
    //   }
    // },
    //{ provide: VALUE_SERVICE, useValue: "Appels" },
  ],
  // bootstrap: [ProductComponent]
  bootstrap: [ProductFormComponent, ProductTableComponent]
})
export class AppModule { }
