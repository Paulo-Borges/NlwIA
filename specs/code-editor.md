# Especificação: Editor de Código com Syntax Highlight

## Objetivo

Criar um componente de editor de código que:

1. Permita colar/editar trechos de código livremente.
2. Detecte automaticamente a linguagem do código colado.
3. Aplique syntax highlighting com cores apropriadas.
4. Seja leve o suficiente para rodar no browser (sem precisar de servidor dedicado).

---

## Inspiração: ray.so (Raycast)

A implementação de **ray.so** usa o pacote `shiki` (via WebAssembly) para fazer renderização de código com temas.

### Principais pontos observados no código do ray.so

- Usa `shiki` + `shiki/wasm` para carregar o highlighter no cliente.
- Carrega temas customizados (ex.: `tailwindLight`, `tailwindDark`).
- Usa uma lista de linguagens (`LANGUAGES`) para pré-carregar os analisadores de sintaxe.
- O componente monta o `Highlighter` via `getHighlighterCore(...)` (do `shiki`) e armazena em estado.

**Vantagem**: `shiki` gera HTML estilizado de forma consistente e com suporte a temas reais.

---

## Opções avaliadas para syntax highlighting

### 1) Shiki (recomendado)

- **Prós**
  - Resultado visual de alta qualidade e consistente com temas reais (VS Code, etc.).
  - Funciona em browser via `shiki/wasm`.
  - Fácil de integrar em um componente React que renderiza HTML dentro de um `<pre><code>`.
- **Contras**
  - Precisa carregar WASM e temas; pode ter um pequeno impacto inicial em bundle/client.

> **Como detectar linguagem**: podemos usar `highlight.js` para detectar a linguagem (`highlightAuto`) e depois passar o nome para o `shiki`.

### 2) Highlight.js (auto-detect)

- **Prós**
  - Tem detecção de linguagem embutida (`highlightAuto`), o que resolve o requisito de descoberta automática.
  - Rápido e leve em casos simples.
- **Contras**
  - A aparência costuma ser menos polida que temas mais modernos.
  - Misturar com `shiki` exigiria dois mecanismos (detectar com highlight.js e renderizar com shiki).

### 3) Prism.js (+ detect plugin)

- **Prós**
  - Muito usado em blogs, a API é simples.
  - Tem plugins (como `prismjs/components/` e `prismjs/plugins/autoloader/`) para carregar linguagens sob demanda.
- **Contras**
  - Não tem detecção automática oficial; depende de heurísticas externas (ou `prism-language-detect`).

### 4) CodeMirror / Monaco (editores completos)

- **Prós**
  - Editor “real” com destaque, teclado, múltiplas linhas, autocomplete etc.
- **Contras**
  - Muito mais pesado que apenas um renderer de destaque (não é necessário aqui).

---

## Recomendações para este projeto

1. **Usar `shiki`** para o highlight principal (como em ray.so). É o caminho mais fiel ao estilo desejado.
2. **Detectar a linguagem com `highlight.js`** (usando `highlightAuto`) ou outra biblioteca leve (ex.: `lang-detector`).
3. **Renderizar o resultado como HTML** em um `<pre><code>` com `dangerouslySetInnerHTML`, ou usar `dangerouslySetInnerHTML` em combinação com `shiki`.
4. **Armazenar o highlighter em estado** (como em ray.so) para evitar recarregamentos repetidos.

---

## Próximo passo sugerido (implementação)

1. Adicionar dependência `shiki` (e opcionalmente `highlight.js`).
2. Criar um `useSyntaxHighlight` que:
   - Receba texto e detecte a linguagem.
   - Use `shiki` para gerar HTML com tema.
3. Substituir o `<textarea>` atual por uma combinação de `contentEditable` + renderização de `shiki`, ou manter `textarea` e renderizar preview ao lado.

---

## Onde colocar este spec

- Arquivo criado: `specs/code-editor.md`
