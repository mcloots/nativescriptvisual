import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { ClassesComponent } from "./classes/classes.component";
import { GesturesComponent } from "./gestures/gestures.component";

const routes: Routes = [
    { path: "", redirectTo: "/gestures", pathMatch: "full" },
    { path: "classes", component: ClassesComponent },
    { path: "gestures", component: GesturesComponent },
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
