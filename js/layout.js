// ============================================
// PRISM GLOBAL — Shared layout injection
// ============================================

const NAV_LINKS = [
  { href: 'index.html', label: 'Home' },
  { href: 'capabilities.html', label: 'Capabilities' },
  { href: 'solutions.html', label: 'Solutions' },
  { href: 'industries.html', label: 'Industries' },
  { href: 'platform.html', label: 'Platform' },
  { href: 'about.html', label: 'About' },
];

function currentPage() {
  const path = window.location.pathname.split('/').pop();
  return path === '' ? 'index.html' : path;
}

function renderHeader() {
  const cur = currentPage();
  const links = NAV_LINKS.map(l =>
    `<li><a href="${l.href}" class="${l.href === cur ? 'active' : ''}">${l.label}</a></li>`
  ).join('');

  const header = document.createElement('header');
  header.className = 'site-header';
  header.innerHTML = `
    <nav class="nav">
      <a href="index.html" class="logo" aria-label="Prism Global home">
        <svg class="logo-mark" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M16 2L29 24H3L16 2Z" stroke="#1E5EFF" stroke-width="2" stroke-linejoin="round"/>
          <path d="M16 2L16 24" stroke="#00C2A8" stroke-width="1.4"/>
          <path d="M16 24L22 14" stroke="#0B1E3D" stroke-width="1.2" opacity="0.5"/>
          <path d="M16 24L10 14" stroke="#0B1E3D" stroke-width="1.2" opacity="0.5"/>
        </svg>
        Prism Global
      </a>
      <button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false" id="navToggle">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-links" id="navLinks">
        ${links}
      </ul>
      <div class="nav-cta">
        <a href="contact.html" class="btn btn--ghost">Get a quote</a>
        <a href="contact.html#chat" class="btn btn--primary btn--arrow">Talk to engineering</a>
      </div>
    </nav>
  `;
  document.body.prepend(header);

  const toggle = document.getElementById('navToggle');
  const navLinksEl = document.getElementById('navLinks');
  toggle.addEventListener('click', () => {
    const isOpen = navLinksEl.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

function renderFooter() {
  const footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col footer-brand">
          <a href="index.html" class="logo" style="color:white;" aria-label="Prism Global home">
            <svg class="logo-mark" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M16 2L29 24H3L16 2Z" stroke="#1E5EFF" stroke-width="2" stroke-linejoin="round"/>
              <path d="M16 2L16 24" stroke="#00C2A8" stroke-width="1.4"/>
              <path d="M16 24L22 14" stroke="#ffffff" stroke-width="1.2" opacity="0.4"/>
              <path d="M16 24L10 14" stroke="#ffffff" stroke-width="1.2" opacity="0.4"/>
            </svg>
            Prism Global
          </a>
          <p>On-demand manufacturing for CNC machining, injection molding, sheet metal, and 3D printing — engineered for speed without cutting corners on precision.</p>
        </div>
        <div class="footer-col">
          <h4>Capabilities</h4>
          <ul>
            <li><a href="capabilities.html#cnc">CNC machining</a></li>
            <li><a href="capabilities.html#injection-molding">Injection molding</a></li>
            <li><a href="capabilities.html#sheet-metal">Sheet metal fabrication</a></li>
            <li><a href="capabilities.html#3d-printing">3D printing</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="about.html">About Prism Global</a></li>
            <li><a href="platform.html">Our platform</a></li>
            <li><a href="industries.html">Industries</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Solutions</h4>
          <ul>
            <li><a href="solutions.html#prototyping">Rapid prototyping</a></li>
            <li><a href="solutions.html#low-volume">Low-volume production</a></li>
            <li><a href="solutions.html#scale">Bridge to scale</a></li>
            <li><a href="solutions.html#npi">NPI support</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Get started</h4>
          <ul>
            <li><a href="contact.html">Request a quote</a></li>
            <li><a href="contact.html#chat">Talk to engineering</a></li>
            <li><a href="contact.html#upload">Upload a CAD file</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 Prism Global Manufacturing Co. All rights reserved.</span>
        <span>Shenzhen · Chicago · Rotterdam</span>
      </div>
    </div>
  `;
  document.body.appendChild(footer);
}

document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderFooter();
});
