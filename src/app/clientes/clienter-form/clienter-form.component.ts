import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";

import { Cliente } from '../cliente';
import { ClientesService } from "../../clientes.service";
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clienter-form',
  templateUrl: './clienter-form.component.html',
  styleUrls: ['./clienter-form.component.css']
})
export class ClienterFormComponent implements OnInit {

  cliente: Cliente;
  success: boolean = false;
  errors: String[];
  id: number;

  constructor(
    private service: ClientesService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.cliente = new Cliente()
  }

  ngOnInit(): void {
    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe( urlParams => {
        this.id = urlParams['id'];
        if(this.id){
          this.service
            .getClienteById(this.id)
            .subscribe( 
              response => this.cliente = response ,
              errorResponse => this.cliente = new Cliente()
            )
        }
    })
  }

  onSubmit() {
    if (this.id) {
      this.service
        .atualizar(this.cliente)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
        }, ErrorResponse => {
          this.errors = ['Erro ao atualizar o cliente']
        })
    } else {
      this.service
        .salvar(this.cliente)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
          this.cliente = response;
        }, errorResponse => {
          this.success = false;
          this.errors = errorResponse.error.errors;
        }
        )
    }
  }

  voltarParaListagem() {
    this.router.navigate(['/clientes/list']);
  }

}
