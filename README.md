# Netflix Clone - Tema Dark/Light Mode
(Imersão front end com IA - ALURA)
<img width="1863" height="949" alt="image" src="https://github.com/user-attachments/assets/518059ad-66c7-4f84-8088-773f94709b57" />


Este projeto é um clone da página de seleção de perfis da Netflix com funcionalidade completa de alternância entre temas dark e light.

## ✨ Funcionalidades

- **Tema Dark/Light**: Alternância entre modos escuro e claro
- **Persistência**: O tema escolhido é salvo no localStorage
- **Tema Padrão**: O modo escuro é o tema padrão
- **Responsividade**: Funciona perfeitamente em todos os dispositivos
- **Acessibilidade**: Botão com labels adequadas e suporte a leitores de tela

## 🎨 Temas Disponíveis

### 🌙 Dark Mode (Padrão)
- Fundo escuro inspirado na Netflix original
- Texto branco e bordas translúcidas
- Efeitos de hover com tons vermelhos

### ☀️ Light Mode
- Fundo gradiente moderno e colorido
- Texto escuro para melhor legibilidade
- Interface clara e elegante

## 🚀 Como Usar

1. Abra o arquivo `index.html` no navegador
2. Clique no botão de toggle no canto superior direito (☀️ Modo Claro)
3. O tema será alternado automaticamente
4. A preferência será lembrada nas próximas visitas

## 📱 Responsividade

O botão de toggle se adapta a todos os tamanhos de tela:
- **Mobile**: Botão menor e posicionado no canto
- **Tablet**: Tamanho médio
- **Desktop**: Tamanho completo

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Variáveis customizadas, media queries, transições
- **JavaScript**: Lógica de alternância de tema e persistência

## 📁 Estrutura do Projeto

```
/
├── index.html      # Página principal
├── style.css       # Estilos com variáveis CSS
├── theme.js        # Lógica do tema
└── assets/         # Imagens dos perfis
```

## 🎯 Funcionalidades JavaScript

- **ThemeManager**: Classe principal para gerenciar temas
- **ThemePreference**: Detecta preferência do sistema
- **localStorage**: Persistência das configurações
- **Event Listeners**: Monitora mudanças no sistema

Divirta-se alternando entre os temas! 🎨
