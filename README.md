# My Design System

## Componentes

#### props Display
`text` (string): O texto a ser exibido.
`size` (string): O tamanho do texto (small, medium, large)

#### props Button
  `primary` : valor booleano (true ou false),
  `backgroundColor` : definir a cor  texto(red, blue ...) ou hexadecimal(#f2f2f2, #fff ...) ou RGBA(...),
  `size` (string): O tamanho do button (small, medium, large)
  `label`  : O texto a ser exibido.
#### props Card

`title` (string): O título do card.
`content` (string): O conteúdo do card.

#### props ALert
`message` (string): A mensagem a ser exibida no alerta.
`type` (string): O tipo de alerta (success, warning, error).

#### props Container
`children` (node): Os elementos filhos a serem renderizados dentro do container.
`fluid` (bool): Define se o container deve ser fluido (full-width) ou não.
#### props Image
  `src` (URL): digite o caminho da image ( "https://via.placeholder.com/150").
  `alt` (text):  digite o alt da image ("Placeholder Image").
  `width` (px,rem,%): aqui vai a larguta("150px").
  `height` (px,rem,%): aqui vai a altura ("150px").
  `borderRadius` (px,rem)  medida da borda ("8px").

```jsx