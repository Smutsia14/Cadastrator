import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { clientesNovos } from '../cadastro/cadastro.model';
import { clientela } from './testclients.mock';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  
  bsModalRef: BsModalRef;

  listaClientes: clientesNovos[] = clientela ;
  constructor( private modalService: BsModalService ) {

  }

  ngOnInit() {
  }
  openModal(){
    this.bsModalRef = this.modalService.show(CadastroComponent, Object.assign({}, {class: 'modal-lg'}) );
  }


}
