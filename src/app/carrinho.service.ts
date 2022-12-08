import { Injectable } from '@angular/core';
import { IProduto, IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: IProdutoCarrinho[] = [];
  constructor() { }

  obtemCarrinho(){
    this.itens =  JSON.parse(localStorage.getItem("carrinho") || "[]");
    console.log(this.itens);
    return this.itens;
    
  }
  adicionarAoCarrinho(produto: IProdutoCarrinho){
    this.itens.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }
  removerProdutoCarrinho(produtoid: number){
    this.itens = this.itens.filter(item => item.id !== produtoid);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
    }

  limparCarrinho(){
    this.itens = [];
    localStorage.clear();
  }
}
