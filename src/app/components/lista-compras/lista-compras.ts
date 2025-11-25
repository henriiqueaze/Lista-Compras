import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from './Item.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-lista-compras',
  imports: [FormsModule, NgClass],
  templateUrl: './lista-compras.html',
  styleUrl: './lista-compras.css',
})
export class ListaCompras {
  nomeItem: string = '';

  listaItens: Item[] = [];

  adicionarItem() {
    if (this.nomeItem == '') {
      alert('O nome do item não pode estar vazio');
    } else {
      let novoItem = new Item();
      novoItem.id = this.listaItens.length + 1;
      novoItem.nome = this.nomeItem =
        this.nomeItem.charAt(0).toUpperCase() + this.nomeItem.slice(1); //Capitaliza o nome do item

      this.listaItens.push(novoItem);
      this.nomeItem = '';
    }
  }

  retirarItem(item: Item) {
    this.listaItens.forEach((itemValor) => {
      if (item == itemValor) {
        this.listaItens.splice(this.listaItens.indexOf(item), 1);
      }
    });
  }

  limparLista() {
    if (this.listaItens.length <= 0) {
      alert('A lista está vazia');
    } else {
      this.listaItens.splice(0, this.listaItens.length);
    }
  }

  riscarItem(item: Item) {
    item.feita = !item.feita;
  }
}
