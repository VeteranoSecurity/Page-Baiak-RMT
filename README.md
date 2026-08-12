# 👑 Baiak Idle RMT — Landing Page Oficial

Landing page moderna e de alta conversão desenvolvida para o **Baiak Idle RMT**, direcionando usuários diretamente para o bot de vendas no Telegram com tema visual exclusivo **Branco e Dourado (White & Gold)**.

---

## 🎨 Características & Design

- **Estética White & Gold**: Paleta de cores premium baseada em dourado reluzente metálico (`#F5D061`, `#FFD700`), branco puro (`#FFFFFF`) e contraste em dark black.
- **Layout Split-Screen Responsivo**:
  - **Painel Esquerdo (Conteúdo)**: Header com marca, chamada Hero para compra de Gold/Kks e Sets VIP, botão CTA com brilho dourado, chips de vantagens e guia passo a passo "Como Funciona o Vendedor".
  - **Painel Direito (Vídeo Background)**: Apresentação em vídeo (`BaiakMarket.mp4`) com overlay elegante e botão de ação rápida no topo.
  - **Badge Central Flutuante**: Botão interativo com ícone de coroa dourada com efeito hover e rotação 3D que abre o bot do Telegram.
- **Mobile First**: Layout totalmente adaptado para telas mobile e dispositivos com larguras reduzidas (`@media (max-width: 991px)`).

---

## 🚀 Tecnologias Utilizadas

- **React 19**
- **Vite 6**
- **Vanilla CSS (Custom Design System)**
- **FontAwesome 6** (Ícones)
- **Google Fonts** (`Space Grotesk`, `Inter`, `Cinzel`)

---

## 📦 Como Rodar o Projeto Localmente

### 1. Clonar o repositório e instalar dependências
```bash
npm install
```

### 2. Iniciar o servidor de desenvolvimento
```bash
npm run dev
```
O projeto estará disponível por padrão em `http://localhost:5173`.

### 3. Gerar a versão de produção (Build)
```bash
npm run build
```

---

## ⚙️ Configurações

O link do bot do Telegram pode ser alterado no arquivo `src/App.jsx`:
```javascript
const TELEGRAM_BOT_URL = 'https://t.me/BaiakIdleBot';
```

---

## 📜 Licença

© 2026 Baiak Idle RMT. Todos os direitos reservados.
