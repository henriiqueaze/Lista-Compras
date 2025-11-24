# Lista de Compras

Aplicação Angular para gerenciar uma lista de compras simples. Permite adicionar itens, marcar itens como feitos (riscá-los) e limpar a lista inteira.

**Tecnologias**

- Angular 21
- TypeScript

## Recursos

- Adicionar itens à lista
- Marcar/Desmarcar itens (riscar)
- Limpar toda a lista

## Requisitos

- Node.js / npm (o `package.json` indica `npm@10.9.2` como packageManager)
- Angular CLI (instalado globalmente ou via npm scripts)

## Instalação

Abra um terminal na raiz do projeto e rode:

```cmd
npm install
```

## Scripts úteis

- `npm start` — inicia o servidor de desenvolvimento (equivalente a `ng serve`)
- `npm run build` — gera a build de produção
- `npm run watch` — build em modo watch (desenvolvimento)
- `npm test` — executa os testes

Exemplo (Windows `cmd.exe`):

```cmd
npm install
npm start
```

Depois, abra `http://localhost:4200` no navegador (padrão do Angular CLI).

## Estrutura do projeto (principais arquivos)

- `angular.json` — configuração do build/serve
- `package.json` — dependências e scripts
- `src/main.ts` — bootstrap da aplicação
- `src/index.html` — documento HTML principal
- `src/app/app.ts` — componente root (`App`)
- `src/app/app.config.ts` — configuração de providers (rota, listeners)
- `src/app/components/lista-compras/` — componente de lista de compras
  - `lista-compras.ts` — lógica do componente (adicionar, limpar, riscar)
  - `lista-compras.html` — template do componente
  - `lista-compras.css` — estilo do componente
  - `Item.model.ts` — modelo `Item` utilizado na lista

## Componentes principais

O componente `ListaCompras` (em `src/app/components/lista-compras/`) contém:

- `nomeItem` (string) — campo ligado ao `input` via `ngModel` para inserir o nome do item
- `listaItens: Item[]` — array de itens adicionados
- `adicionarItem()` — valida o campo e adiciona um `Item` à lista
- `limparLista()` — esvazia o array `listaItens`
- `riscarItem(item: Item)` — alterna a propriedade `feita` do item

O template usa um loop para renderizar as linhas da tabela; quando a lista está vazia, exibe uma linha indicando que não há itens.

## Como contribuir

- Abra uma issue descrevendo o que deseja mudar
- Faça um fork e envie um pull request com padrões de código compatíveis

## Observações e sugestões rápidas

- O template do componente usa uma sintaxe de loop (parecida com templates literais) — manter consistência com a versão do Angular usada.
- Para persistir a lista entre recargas, adicionar armazenamento local (`localStorage`) ou integrar uma API/back-end.

## Licença

Coloque aqui a licença desejada (ex.: MIT) ou remova a seção se não aplicável.

---

Se quiser, eu posso:

- ajustar o README com instruções de contribuição mais específicas;
- adicionar um exemplo de Dockerfile para executar a aplicação;
- implementar persistência em `localStorage` no componente `ListaCompras`.

`Arquivo atualizado automaticamente com base no código fonte do projeto.`
