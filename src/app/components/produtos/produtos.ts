import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

  

@Component({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  selector: 'app-produtos',
  styleUrl: './produtos.css',
  templateUrl: './produtos.html',



})
export class Produtos {
  form = new FormGroup({
    nome_produto: new FormControl('', [Validators.required, Validators.minLength(3)]),
    preco_produto: new FormControl('',[Validators.required, Validators.min(1)]),
    categoria_produto: new FormControl('', [Validators.required]),
    quantidade_produto: new FormControl('', [Validators.required, Validators.min(1), Validators.max(100)]),

  })

  categoria_produto = [
    'Eletrônicos' ,
    'Informática',
    'Acessórios',
  ]

  lista_produtos = [
    {nome: 'Mouse', preco: 50, categoria: 'Acessórios', quantidade: 10},
    {nome:'Teclado', preco: 100, categoria: 'Acessórios', quantidade: 5},
  ]


  cadastrarProduto() {
    if (this.form.valid) {
      alert('Produto cadastrado com sucesso!');
    } else {
      alert('Cadastro Inválido! Por favor, preencha todos os campos corretamente.');
      console.log(this.form.value);
    }
  }
  
}