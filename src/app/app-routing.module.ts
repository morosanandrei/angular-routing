import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildrenComponent } from './modules/children/children.component';
import { FirstChildComponent } from './modules/children/components/first-child/first-child.component';
import { SecondChildComponent } from './modules/children/components/second-child/second-child.component';
import { DefaultComponent } from './modules/default/default.component';
import { RegisterComponent } from './modules/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
    pathMatch: 'full',
  },
  {
    path: 'children',
    loadChildren: () => import('./modules/children/children.module').then(m => m.ChildrenModule)
    // component: ChildrenComponent,
    // children: [
    //   {
    //     path: 'first-parent',
    //     component: FirstChildComponent,
    //   },
    //   {
    //     path: 'second',
    //     component: SecondChildComponent,
    //   },
    // ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
