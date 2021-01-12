import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { clientesNovos } from './cadastro.model';
import { BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private http: Http,public bsModalRef: BsModalRef ) { }
  clientinhos: clientesNovos[];
  usuarios: any = {
    nome: '',
    tipo: '',
    documento: '',
    fantasia: '',
    cep: '',
    rua: '',
    bairro: '',
    cidade: '',
    email: '',
    telefone: ''
  }
  ngOnInit() {
  }
  onSubmit(form){
   console.log(form.value);
  }
  onClose(){
    this.bsModalRef.hide();
  } 

  consultaCEP(cep, form){
    cep = cep.replace(/\D/g, '');
    if (cep != ""){
      var validacep = /^[0-9]{8}$/;
      if (validacep.test(cep)) {
        this.http.get(`//viacep.com.br/ws/${cep}/json`)
          .map(dados => dados.json())
          .subscribe(dados => this.completaEndereco(dados, form));

      }
    }
  }
  completaEndereco(dados, formulario){
    formulario.form.patchValue({
      endereco: {
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });

  }
}