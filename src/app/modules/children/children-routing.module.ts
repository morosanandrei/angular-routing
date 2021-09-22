import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChildrenComponent } from "./children.component";
import { FirstChildComponent } from "./components/first-child/first-child.component";
import { SecondChildComponent } from "./components/second-child/second-child.component";

const routes: Routes = [
    {
        path: '',
        component: ChildrenComponent
    },
    {
        path: 'first',
        component: FirstChildComponent,
        outlet: 'children',
    },
    {
        path: 'second',
        component: SecondChildComponent,
        outlet: 'children',
    },

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChildrenRoutingModule{}