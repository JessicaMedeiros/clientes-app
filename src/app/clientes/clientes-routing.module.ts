import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { ClienterFormComponent } from './clienter-form/clienter-form.component';
import { ClienterListaComponent } from './clienter-lista/clienter-lista.component';
import { AuthGuard } from "../auth.guard";

const routes: Routes = [
  {path: 'clientes', component: LayoutComponent, canActivate: [AuthGuard],
  children: [
    {path: 'form', component: ClienterFormComponent},
    {path: 'list', component: ClienterListaComponent},
    {path: 'form/:id', component: ClienterFormComponent}]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
