import './App.css';

const TELEGRAM_BOT_URL = 'https://t.me/baiaknogrindbot';

function App() {
  const handleBotRedirect = () => {
    window.open(TELEGRAM_BOT_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="container">
      {/* Left Panel: Content (Baiak Idle RMT Theme) */}
      <div className="content-panel">

        {/* Brand Logo Header */}
        <div className="brand-box" onClick={handleBotRedirect} style={{ cursor: 'pointer' }}>
          <i className="fa-solid fa-crown brand-logo-icon"></i>
          <span className="brand-name">BAIAK IDLE RMT</span>
          <span className="brand-tag">BOT 24/7</span>
        </div>

        {/* Hero Copy and Action Section */}
        <div className="hero-info">
          <div className="hero-badge">
            <i className="fa-solid fa-bolt"></i> Mercado Oficial de Itens & Gold
          </div>

          <h1 className="hero-title">
            Compre Gold & Itens do <span className="highlight-gold">Baiak Idle</span> Instantaneamente.
          </h1>

          <p className="hero-desc">
            O Bot do Baiak Idle é a solução definitiva para comprar Kks, Sets VIP, Armas Raras
            e Consumíveis. Sistema 100% automatizado via Telegram, com pagamento por PIX e entrega
            imediata direto no seu personagem.
          </p>

          {/* Feature Chips */}
          <div className="feature-chips">
            <div className="chip"><i className="fa-solid fa-coins"></i> Kks & Gold Bar</div>
            <div className="chip"><i className="fa-solid fa-shield-halved"></i> Sets VIP & Raros</div>
            <div className="chip"><i className="fa-solid fa-bolt-lightning"></i> Entrega PIX 24/7</div>
            <div className="chip"><i className="fa-solid fa-lock"></i> Trade 100% Seguro</div>
          </div>

          {/* CTA Primary Button */}
          <a
            href={TELEGRAM_BOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <i className="fab fa-telegram-plane"></i>
            Comprar no Bot Agora
          </a>

          {/* How to Use Tutorial Card */}
          <div className="how-to-use">
            <h3 className="section-title">
              <i className="fa-solid fa-circle-play"></i> Como Funciona o Vendedor
            </h3>

            <div className="steps">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-text">
                  <h4>Inicie o Bot no Telegram</h4>
                  <p>Clique no botão para abrir o bot oficial e envie a mensagem <strong>/start</strong>.</p>
                </div>
              </div>

              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-text">
                  <h4>Escolha os Itens ou Kks</h4>
                  <p>Navegue pelo menu interativo e selecione a quantidade de Gold ou os equipamentos desejados.</p>
                </div>
              </div>

              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-text">
                  <h4>Pagamento PIX & Entrega Automática</h4>
                  <p>Após pagar a chave PIX gerada na hora, os itens são enviados <strong>imediatamente para seu personagem</strong>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="footer-info">
          <span>© 2026 Baiak Idle RMT. Todos os direitos reservados.</span>
          <div className="footer-badge">
            <i className="fa-solid fa-shield-cat"></i> Sistema Anti-Fraude Ativo
          </div>
        </div>
      </div>

      {/* Right Panel: Visual Video Showcase */}
      <div className="visual-panel">
        <video
          className="bg-video"
          src="/BaiakMarket.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="video-overlay"></div>

        {/* Top Right Action Button */}
        <div className="top-right-action">
          <a
            href={TELEGRAM_BOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <i className="fab fa-telegram-plane"></i>
            Falar com Bot
          </a>
        </div>
      </div>

      {/* Interactive Center Badge */}
      <div className="center-badge" onClick={handleBotRedirect} title="Abrir Bot no Telegram">
        <i className="fa-solid fa-crown center-badge-icon"></i>
      </div>
    </div>
  );
}

export default App;
