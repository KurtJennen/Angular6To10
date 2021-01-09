import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { TableComponent } from "./table.component";
import { FormComponent } from "./form.component";
import { MODES, SharedState, SHARED_STATE } from "./sharedState.model";
import { Subject } from 'rxjs';
import { StatePipe } from './state.pipe';
import { Message } from "../messages/message.model";
import { MessageModule } from "../messages/message.module";
import { MessageService } from '../messages/message.service';
import { Model } from '../model/repository.model';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [BrowserModule, FormsModule, MessageModule, RouterModule], //ModelModule
    declarations: [TableComponent, FormComponent, StatePipe],
    exports: [TableComponent, FormComponent], //ModelModule
    //providers: [SharedState]
    //providers: [{ provide: SHARED_STATE, useValue: new Subject<SharedState>() }]
    // providers: [{
    //     provide: SHARED_STATE,
    //     deps: [MessageService, Model],
    //     useFactory: (messageService, model) => {
    //         // let subject = new Subject<SharedState>();
    //         // subject.subscribe(m => {
    //         //     messageService.reportMessage(new Message(MODES[m.mode] + (m.id != undefined ? `${model.getProduct(m.id).name}` : "")))
    //         //     console.log("Message");
    //         // });
    //         // return subject;
    //         return new Subject<SharedState>();
    //     }
    // }]
})
export class CoreModule { }