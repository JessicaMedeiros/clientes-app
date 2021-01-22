import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Cliente } from "../cliente";
import { ClientesService } from "../../clientes.service";

@Component({
  selector: 'app-clienter-lista',
  templateUrl: './clienter-lista.component.html',
  styleUrls: ['./clienter-lista.component.css']
})
export class ClienterListaComponent implements OnInit {

  clientes: Cliente[] = [];
  clienteSelecionado: Cliente;
  mensagemErro: String;
  mensagemSucesso: string;
  
  
  constructor(
    private service: ClientesService, 
    private router: Router) { }

  ngOnInit(): void {
    this.service
    .getClientes()
    .subscribe( resposta => this.clientes = resposta);
  }
  
  novoCadastro(){
    this.router.navigate(['/clientes/form']);
  }

  preparaDelecao(cliente: Cliente){
    this.clienteSelecionado = cliente;
  }

  deletarCliente(){
    this.service
    .deletar(this.clienteSelecionado)
    .subscribe(
      response => {this.mensagemSucesso = "Cliente deletado com sucesso", this.ngOnInit()},
      erro => this.mensagemErro = "Ocorreu um erro ao deletar o cliente"
    )
  }

}
