import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClienterFormComponent } from './clienter-form/clienter-form.component';
import { ClienterListaComponent } from './clienter-lista/clienter-lista.component';


@NgModule({
  declarations: [ClienterFormComponent, ClienterListaComponent],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule
  ], 
  exports: [
    ClienterFormComponent,
    ClienterListaComponent
  ]

})
export class ClientesModule { }
