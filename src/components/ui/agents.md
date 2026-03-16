# Padrões de criação de componentes UI

Este arquivo documenta os padrões usados na biblioteca de componentes `src/components/ui`.

## ✅ Padrão principal usado nas componentes

### 1) Separação de lógica de estilos (tailwind-variants)

- Cada componente exporta um objeto `tv()` (do pacote `tailwind-variants`) que define:
  - `base`: classes comuns usadas em todos os estados.
  - `variants`: variações (por exemplo, `variant`, `size`) com seus respectivos conjuntos de classes.
  - `defaultVariants`: valores padrão para cada variante.
- Isso permite ter estilos consistentes e reutilizáveis enquanto mantém os componentes declarativos.

### 2) Tipagem de props com `VariantProps`

- Os tipos das props de variante são derivados usando `VariantProps<typeof componenteDeStyles>`.
- Isso mantém a tipagem sincronizada com as variantes definidas no `tv()`.

### 3) Normalização de `className` com `twMerge`

- A propriedade `className` passada pelo usuário é combinada com os estilos padrão usando `twMerge()` (do pacote `tailwind-merge`).
- Isto permite sobrescrever/estender classes do componente sem gerar duplicações ou conflito de utilitários.

### 4) Pass-through de props nativas

- Componentes estendem os atributos HTML nativos correspondentes (ex.: `React.ButtonHTMLAttributes<HTMLButtonElement>`).
- Os props que não são manipulados explicitamente (`...props`) são encaminhados diretamente para o elemento raiz (`<button>`, `<input>`, etc.).

## 🧩 Exemplo (componente `Button`)

- `button` (constante) contém as variantes e className-base.
- `ButtonProps` combina os atributos nativos do botão com as variantes.
- `Button` aplica `twMerge(button({ variant, size, className }))` para garantir a fusão correta de classes.

## 🧭 Fluxo de criação de um novo componente UI

1. Criar o objeto `tv({ base, variants, defaultVariants })` para o componente.
2. Exportar o tipo de props (`VariantProps<typeof tvObject>`) junto com o tipo HTML correspondente.
3. Construir o componente React que mescla `className` com `twMerge` e espalha as props restantes.
4. Exportar o componente no `src/components/ui/index.ts` para facilitar importações.

---

✨ **Dica**: sempre mantenha o componente pequeno e responsável por apenas uma única responsabilidade (apresentação + comportamento leve), pois essa camada serve de base para um design system simples e previsível.
