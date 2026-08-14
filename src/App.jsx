import './App.css';

const TELEGRAM_BOT_URL = 'https://t.me/baiaknogrindbot';

function App() {
  const handleBotRedirect = () => {
    window.open(TELEGRAM_BOT_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="container">
      {/* Left Panel: Content (No Grind Bot Theme) */}
      <div className="content-panel">

        {/* Brand Logo Header */}
        <div className="brand-box" onClick={handleBotRedirect} style={{ cursor: 'pointer' }}>
          <i className="fa-solid fa-crown brand-logo-icon"></i>
          <span className="brand-name">BOT DO NO GRIND</span>
          <span className="brand-tag">COINS 24/7</span>
        </div>

        {/* Hero Copy and Action Section */}
        <div className="hero-info">
          <div className="hero-badge">
            <i className="fa-solid fa-bolt"></i> Venda Oficial de Coins
          </div>

          <h1 className="hero-title">
            Compre <span className="highlight-gold">Coins</span>
          </h1>

          <p className="hero-desc">
            O Atendente de RMT do No Grind é a forma mais rápida e segura pra adquirir
            Coins com entrega <strong>instantânea via PIX 24/7</strong> direto no seu personagem via Telegram.
          </p>

          {/* CTA Primary Button */}
          <a
            href={TELEGRAM_BOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <i className="fab fa-telegram-plane"></i>
            Comprar Coins Agora
          </a>

          {/* How to Use Tutorial Card */}
          <div className="how-to-use">
            <h3 className="section-title">
              <i className="fa-solid fa-circle-play"></i> Como Funciona a Compra
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
                  <h4>Escolha a Quantidade de Coins</h4>
                  <p>Navegue pelo menu interativo e selecione a quantidade de Coins desejada.</p>
                </div>
              </div>

              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-text">
                  <h4>Pagamento PIX & Entrega Automática</h4>
                  <p>Após pagar a chave PIX gerada na hora, as Coins são enviadas <strong>imediatamente para seu personagem</strong>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="footer-info">
          <span>© 2026 No Grind RMT. Todos os direitos reservados.</span>
          <div className="footer-badge">
            <i className="fa-solid fa-shield-cat"></i> Anti-Fraude Ativo
          </div>
        </div>
      </div>

      {/* Right Panel: Visual Video Showcase + Medals */}
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

        {/* Right Side Feature Medals / Badges */}
        <div className="right-medals-container">
          <div className="medal-card">
            <div className="medal-icon-box">
              <i className="fa-solid fa-coins"></i>
            </div>
            <div className="medal-text">
              <span className="medal-title">Coins Instantâneos</span>
              <span className="medal-desc">Entrega Direta no Personagem</span>
            </div>
          </div>

          <div className="medal-card">
            <div className="medal-icon-box">
              <i className="fa-solid fa-bolt-lightning"></i>
            </div>
            <div className="medal-text">
              <span className="medal-title">Entrega PIX 24/7</span>
              <span className="medal-desc">Sistema Automatizado</span>
            </div>
          </div>

          <div className="medal-card">
            <div className="medal-icon-box">
              <i className="fa-solid fa-shield-halved"></i>
            </div>
            <div className="medal-text">
              <span className="medal-title">Trade 100% Seguro</span>
              <span className="medal-desc">Garantia Total no Envio</span>
            </div>
          </div>

          <div className="medal-card">
            <div className="medal-icon-box">
              <i className="fa-solid fa-robot"></i>
            </div>
            <div className="medal-text">
              <span className="medal-title">Bot No Grind</span>
              <span className="medal-desc">Solução Definitiva</span>
            </div>
          </div>
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
