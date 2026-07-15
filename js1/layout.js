// ============================================
// PRISM GLOBAL — Shared layout injection
// ============================================

const NAV_LINKS = [
  { href: 'index.html', label: 'Home' },
  {
    href: 'capabilities.html',
    label: 'Capabilities',
    megamenu: {
      heading: 'Capabilities',
      desc: 'From rapid prototypes to production parts, we offer end-to-end manufacturing solutions.',
      // Middle section: Mechanical Manufacturing (2 sub-cols)
      mechanical: {
        title: 'Mechanical Manufacturing',
        col1: [
          {
            title: 'Machining Service',
            items: ['CNC Machining','CNC Milling','CNC Turning','CNC Routing','5 Axis CNC Machining','Precision CNC'],
          },
          {
            title: 'Molding Service',
            items: ['Injection Molding','Injection Mold Tooling','Overmolding','Insert Molding','Low Volume Injection Molding'],
          },
        ],
        col2: [
          {
            title: 'Fabrication Service',
            items: ['Sheet Metal Fabrication','Laser Cutting','Metal Bending','Custom Enclosure','Welding Services'],
          },
          {
            title: '3D Printing',
            items: ['3D Printing Prototyping','SLA','SLS','SLM','FDM','MJF'],
          },
        ],
      },
      // Right section
      right: [
        {
          title: 'Electronics Manufacturing',
          items: ['EMS','PCB Design','PCB Assembly','PCB Manufacturing','Components Sourcing'],
        },
      ],
    },
  },
  {
    href: 'solutions.html',
    label: 'Solutions',
    megamenu: {
      heading: 'Solutions',
      desc: 'Accelerate your product development cycle with our proven processes.',
      cols: [
        {
          title: 'NPI Solutions',
          items: [
            { href: 'solutions.html#prototyping', label: 'Design & Engineering', desc: 'Turn concepts into precision parts.' },
            { href: 'solutions.html#low-volume',  label: 'Verification Phase',   desc: 'Rigorous prototyping validation.', badge: 'NEW' },
            { href: 'solutions.html#scale',       label: 'Mass Production',      desc: 'Scale into high-volume production.' },
            { href: 'solutions.html#npi',         label: 'Packaging Phase',      desc: 'Market-ready solutions.' },
            { href: 'solutions.html#npi',         label: 'Service Package',      desc: 'From feasibility to mass production.' },
          ],
        },
        {
          title: 'Manufacturing Service',
          plain: [
            { href: 'capabilities.html#cnc',              label: 'Rapid Prototyping' },
            { href: 'capabilities.html#injection-molding', label: 'On Demand Manufacturing' },
            { href: 'capabilities.html#sheet-metal',       label: 'Surface Finishing' },
            { href: 'capabilities.html#3d-printing',       label: 'Assembly' },
            { href: 'capabilities.html#cnc',               label: 'Industrial Automation' },
          ],
          title2: 'Value-Added Services',
          plain2: [
            { href: 'solutions.html', label: 'Surface Finishing' },
            { href: 'solutions.html', label: 'Assembly' },
            { href: 'solutions.html', label: 'Parts Marking' },
          ],
        },
      ],
    },
  },
  {
    href: 'industries.html',
    label: 'Industries',
    megamenu: {
      heading: 'Industries',
      desc: 'Tailored manufacturing solutions for demanding sectors.',
      sectionTitle: 'Industries We Serve',
      items: [
        { href: 'industries.html#medical',       label: 'Medical Devices', icon: 'medical' },
        { href: 'industries.html#robotics',      label: 'Robotics',        icon: 'robotics' },
        { href: 'industries.html#electronics',   label: 'Electronics',     icon: 'electronics' },
        { href: 'industries.html#semiconductor', label: 'Semiconductor',   icon: 'semiconductor' },
        { href: 'industries.html#consumer',      label: 'Consumer Goods', icon: 'consumer' },
      ],
    },
  },
  { href: 'platform.html',   label: 'Platform' },
  { href: 'about.html',      label: 'About' },
];

function currentPage() {
  const path = window.location.pathname.split('/').pop();
  return path === '' ? 'index.html' : path;
}

function renderCapabilitiesMega(l, isActive) {
  const m = l.megamenu;
  const caretSvg = `<svg class="caret" width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  // Build col1 groups
  const col1Html = m.mechanical.col1.map(g => `
    <div class="cmega-group">
      <p class="cmega-sub-title">${g.title}</p>
      <hr class="cmega-rule">
      ${g.items.map(item => `<a href="capabilities.html" class="cmega-link">${item}</a>`).join('')}
    </div>
  `).join('');

  // Build col2 groups
  const col2Html = m.mechanical.col2.map(g => `
    <div class="cmega-group">
      <p class="cmega-sub-title">${g.title}</p>
      <hr class="cmega-rule">
      ${g.items.map(item => `<a href="capabilities.html" class="cmega-link">${item}</a>`).join('')}
    </div>
  `).join('');

  // Build right section
  const rightHtml = m.right.map(g => `
    <div class="cmega-right-group">
      <p class="cmega-section-title">${g.title}</p>
      <hr class="cmega-rule">
      ${g.items.map(item => `<a href="capabilities.html" class="cmega-link">${item}</a>`).join('')}
    </div>
  `).join('');

  return `
    <li class="has-dropdown has-megamenu">
      <button class="nav-dropdown-trigger ${isActive ? 'active' : ''}" aria-expanded="false" aria-haspopup="true">
        ${l.label}${caretSvg}
      </button>
      <div class="nav-dropdown cmega">
        <div class="cmega-inner">
          <!-- Left rail: full-bleed, full-height -->
          <div class="cmega-left">
            <p class="cmega-heading">${m.heading}</p>
            <p class="cmega-desc">${m.desc}</p>
          </div>
          <!-- Content area -->
          <div class="cmega-content">
            <div class="cmega-middle">
              <p class="cmega-section-title">${m.mechanical.title}</p>
              <hr class="cmega-rule cmega-rule--section">
              <div class="cmega-middle-cols">
                <div class="cmega-col">${col1Html}</div>
                <div class="cmega-col">${col2Html}</div>
              </div>
            </div>
            <div class="cmega-right">
              ${rightHtml}
            </div>
          </div>
        </div>
      </div>
    </li>
  `;
}

function renderSolutionsMega(l, isActive) {
  const m = l.megamenu;
  const caretSvg = `<svg class="caret" width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  const colsHtml = m.cols.map(col => {
    if (col.items) {
      const rows = col.items.map(it => `
        <a href="${it.href}" class="mega-item">
          <span class="mega-item-dot" aria-hidden="true"></span>
          <span class="mega-item-body">
            <span class="mega-item-label">${it.label}${it.badge ? ` <span class="mega-badge">${it.badge}</span>` : ''}</span>
            <span class="mega-item-desc">${it.desc}</span>
          </span>
        </a>
      `).join('');
      return `<div class="mega-col"><p class="mega-col-title">${col.title}</p><hr class="mega-col-rule">${rows}</div>`;
    }
    const plainLinks = arr => arr.map(it => `<a href="${it.href}" class="mega-plain-item">${it.label}</a>`).join('');
    return `
      <div class="mega-col">
        <p class="mega-col-title">${col.title}</p><hr class="mega-col-rule">
        ${plainLinks(col.plain)}
        <p class="mega-col-title" style="margin-top:1.25rem">${col.title2}</p><hr class="mega-col-rule">
        ${plainLinks(col.plain2)}
      </div>`;
  }).join('');

  return `
    <li class="has-dropdown has-megamenu">
      <button class="nav-dropdown-trigger ${isActive ? 'active' : ''}" aria-expanded="false" aria-haspopup="true">
        ${l.label}${caretSvg}
      </button>
      <div class="nav-dropdown nav-megamenu">
        <div class="cmega-inner">
          <div class="cmega-left mega-left">
            <p class="cmega-heading">${m.heading}</p>
            <p class="cmega-desc">${m.desc}</p>
          </div>
          <div class="cmega-content mega-content">
            ${colsHtml}
          </div>
        </div>
      </div>
    </li>
  `;
}

// Simple line-icon set for the Industries tiles — consistent 20x20 viewBox, currentColor stroke.
const INDUSTRY_ICONS = {
  aerospace: '<path d="M11 2L17 14H13L11 18L9 14H5L11 2Z"/><path d="M11 14V18"/>',
  medical: '<rect x="3" y="3" width="14" height="14" rx="2"/><path d="M10 7V13M7 10H13"/>',
  automotive: '<rect x="2" y="9" width="16" height="6" rx="1.5"/><circle cx="6" cy="16" r="1.5"/><circle cx="14" cy="16" r="1.5"/><path d="M4 9L6 5H14L16 9"/>',
  robotics: '<rect x="5" y="7" width="10" height="9" rx="1.5"/><circle cx="8" cy="11" r="1"/><circle cx="12" cy="11" r="1"/><path d="M10 4V7M7 16V18M13 16V18"/>',
  electronics: '<circle cx="10" cy="10" r="2.5"/><path d="M10 2V6M10 14V18M2 10H6M14 10H18M4.5 4.5L7 7M13 13L15.5 15.5M15.5 4.5L13 7M7 13L4.5 15.5"/>',
  communication: '<path d="M3 5H17V13H7L3 16V5Z"/>',
  semiconductor: '<rect x="6" y="6" width="8" height="8" rx="1"/><path d="M9 2V6M11 2V6M9 14V18M11 14V18M2 9H6M2 11H6M14 9H18M14 11H18"/>',
  newenergy: '<path d="M11 2L4 11H9L8 18L16 9H11L11 2Z"/>',
  consumer: '<rect x="4" y="3" width="12" height="14" rx="1.5"/><path d="M8 7H12M8 10H12"/><circle cx="10" cy="14" r="1"/>',
  industrial: '<path d="M3 17V9L7 11V9L11 11V9L15 11V17H3Z"/><path d="M3 17H17"/>',
};

function renderIndustriesMega(l, isActive) {
  const m = l.megamenu;
  const caretSvg = `<svg class="caret" width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  const tilesHtml = m.items.map(it => {
    const iconPath = INDUSTRY_ICONS[it.icon] || '';
    return `
      <a href="${it.href}" class="industry-tile">
        <span class="industry-tile-icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">${iconPath}</svg>
        </span>
        <span class="industry-tile-label">${it.label}</span>
      </a>
    `;
  }).join('');

  return `
    <li class="has-dropdown has-megamenu">
      <button class="nav-dropdown-trigger ${isActive ? 'active' : ''}" aria-expanded="false" aria-haspopup="true">
        ${l.label}${caretSvg}
      </button>
      <div class="nav-dropdown nav-megamenu">
        <div class="cmega-inner">
          <div class="cmega-left mega-left">
            <p class="cmega-heading">${m.heading}</p>
            <p class="cmega-desc">${m.desc}</p>
          </div>
          <div class="cmega-content mega-content industries-mega-content">
            <p class="cmega-section-title">${m.sectionTitle}</p>
            <hr class="cmega-rule">
            <div class="industries-tile-grid">
              ${tilesHtml}
            </div>
          </div>
        </div>
      </div>
    </li>
  `;
}

function renderNavItem(l, cur) {
  const isActive = l.href === cur;
  const caretSvg = `<svg class="caret" width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  if (l.href === 'capabilities.html' && l.megamenu && l.megamenu.mechanical) {
    return renderCapabilitiesMega(l, isActive);
  }
  if (l.href === 'solutions.html' && l.megamenu && l.megamenu.cols) {
    return renderSolutionsMega(l, isActive);
  }
  if (l.href === 'industries.html' && l.megamenu && l.megamenu.items) {
    return renderIndustriesMega(l, isActive);
  }
  return `<li><a href="${l.href}" class="${isActive ? 'active' : ''}">${l.label}</a></li>`;
}

function renderHeader() {
  const cur = currentPage();
  const links = NAV_LINKS.map(l => renderNavItem(l, cur)).join('');

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

  // Set the mega-menu's top offset to the header's real rendered height,
  // rather than a guessed pixel value, so it always sits flush below the nav.
  const setHeaderHeightVar = () => {
    document.documentElement.style.setProperty('--header-height', `${header.offsetHeight}px`);
  };
  setHeaderHeightVar();
  window.addEventListener('resize', setHeaderHeightVar);

  const toggle = document.getElementById('navToggle');
  const navLinksEl = document.getElementById('navLinks');
  toggle.addEventListener('click', () => {
    const isOpen = navLinksEl.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  const dropdownItems = header.querySelectorAll('.has-dropdown');
  dropdownItems.forEach((item) => {
    const trigger = item.querySelector('.nav-dropdown-trigger');
    const openDropdown = () => { item.classList.add('open'); trigger.setAttribute('aria-expanded', 'true'); };
    const closeDropdown = () => { item.classList.remove('open'); trigger.setAttribute('aria-expanded', 'false'); };

    let hoverTimeout;
    item.addEventListener('mouseenter', () => { if (window.innerWidth <= 920) return; clearTimeout(hoverTimeout); openDropdown(); });
    item.addEventListener('mouseleave', () => { if (window.innerWidth <= 920) return; hoverTimeout = setTimeout(closeDropdown, 150); });
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const isOpen = item.classList.contains('open');
      dropdownItems.forEach(other => { if (other !== item) { other.classList.remove('open'); other.querySelector('.nav-dropdown-trigger').setAttribute('aria-expanded', 'false'); } });
      if (isOpen) { closeDropdown(); } else { openDropdown(); trigger.focus(); }
    });
    trigger.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeDropdown(); trigger.blur(); } });
  });

  document.addEventListener('click', (e) => {
    dropdownItems.forEach(item => { if (!item.contains(e.target)) { item.classList.remove('open'); item.querySelector('.nav-dropdown-trigger').setAttribute('aria-expanded', 'false'); } });
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') dropdownItems.forEach(item => { item.classList.remove('open'); item.querySelector('.nav-dropdown-trigger').setAttribute('aria-expanded', 'false'); });
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
          <p>On-demand manufacturing for CNC machining, injection molding, sheet metal, and 3D printing engineered for speed without cutting corners on precision.</p>
        </div>
        <div class="footer-col"><h4>Capabilities</h4><ul>
          <li><a href="capabilities.html#cnc">CNC machining</a></li>
          <li><a href="capabilities.html#injection-molding">Injection molding</a></li>
          <li><a href="capabilities.html#sheet-metal">Sheet metal fabrication</a></li>
          <li><a href="capabilities.html#3d-printing">3D printing</a></li>
        </ul></div>
        <div class="footer-col"><h4>Company</h4><ul>
          <li><a href="about.html">About Prism Global</a></li>
          <li><a href="platform.html">Our platform</a></li>
          <li><a href="industries.html">Industries</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul></div>
        <div class="footer-col"><h4>Solutions</h4><ul>
          <li><a href="solutions.html#prototyping">Rapid prototyping</a></li>
          <li><a href="solutions.html#low-volume">Low-volume production</a></li>
          <li><a href="solutions.html#scale">Bridge to scale</a></li>
          <li><a href="solutions.html#npi">NPI support</a></li>
        </ul></div>
        <div class="footer-col"><h4>Get started</h4><ul>
          <li><a href="contact.html">Request a quote</a></li>
          <li><a href="contact.html#chat">Talk to engineering</a></li>
          <li><a href="contact.html#upload">Upload a CAD file</a></li>
        </ul></div>
      </div>
      <div class="footer-bottom">
        <span>&copy; 2026 Prism Global Manufacturing Co. All rights reserved.</span>
        <span>Made In India</span>
      </div>
    </div>
  `;
  document.body.appendChild(footer);
}

document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderFooter();
});