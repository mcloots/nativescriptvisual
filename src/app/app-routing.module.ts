import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { ClassesComponent } from "./classes/classes.component";
import { GesturesComponent } from "./gestures/gestures.component";
import { IconfontsComponent } from "./iconfonts/iconfonts.component";

const routes: Routes = [
    { path: "", redirectTo: "/iconfonts", pathMatch: "full" },
    { path: "classes", component: ClassesComponent },
    { path: "gestures", component: GesturesComponent },
    { path: "iconfonts", component: IconfontsComponent },
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
