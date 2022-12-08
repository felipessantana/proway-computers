import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaoEncontradaComponent } from './nao-encontrada/nao-encontrada.component';
import { DetalhesProdutosComponent } from './produtos/detalhes-produtos/detalhes-produtos.component';
import { ProdutosComponent } from './produtos/produtos.component';


const routes: Routes = [
  { path: 'produtos', loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule) },
  //Redirecionando direto para tela de produtos
  {path: "", redirectTo: "produtos", pathMatch: "full"}, 
  //{path: '', component: ProdutosComponent},
  { path: 'carrinho', loadChildren: () => import('./carrinho/carrinho.module').then(m => m.CarrinhoModule) },
  {path: 'produtos/:id', component: DetalhesProdutosComponent},
  { path: 'contato', loadChildren: () => import('./contato/contato.module').then(m => m.ContatoModule) },
  //Redirecionar para pagina que não tem conteudo
  {path: "**", component: NaoEncontradaComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
