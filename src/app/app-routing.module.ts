import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildFirstComponent } from './modules/child/child-first/child-first.component';
import { ChildComponent } from './modules/child/child/child.component';
import { RegisterComponent } from './modules/register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full',
  },
  {
    path: 'register',
    component: RegisterComponent,
    pathMatch: 'full',
  },
  {
    path: 'children',
    loadChildren: () =>
      import('./modules/children/children.module').then(
        (m) => m.ChildrenModule
      ),
  },
  {
    path: 'child',
    component: ChildComponent,
    children: [
      {
        path: 'child-first',
        component: ChildFirstComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
