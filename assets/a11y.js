/* Panel de accesibilidad compartido */
(function () {
  const root = document.documentElement;

  // Restaurar preferencias
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) root.setAttribute('data-theme', storedTheme);

  const storedFs = localStorage.getItem('fs') || 'md';
  root.setAttribute('data-fs', storedFs);

  const storedDys = localStorage.getItem('dyslexia') || 'off';
  root.setAttribute('data-dyslexia', storedDys);

  const storedMotion = localStorage.getItem('reduce-motion') || 'off';
  root.setAttribute('data-reduce-motion', storedMotion);

  // Preferencia del sistema para reducir movimiento
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches && !localStorage.getItem('reduce-motion')) {
    root.setAttribute('data-reduce-motion', 'on');
  }

  // Toggle panel
  const toggle = document.getElementById('a11y-toggle');
  const panel = document.getElementById('a11y-panel');
  if (toggle && panel) {
    toggle.addEventListener('click', () => {
      const open = panel.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('click', (e) => {
      if (!panel.contains(e.target) && e.target !== toggle) {
        panel.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Botones del panel
  document.querySelectorAll('[data-theme]').forEach(btn => {
    btn.addEventListener('click', () => {
      const t = btn.getAttribute('data-theme');
      root.setAttribute('data-theme', t);
      localStorage.setItem('theme', t);
      updateActive();
    });
  });

  document.querySelectorAll('[data-fs]').forEach(btn => {
    btn.addEventListener('click', () => {
      const fs = btn.getAttribute('data-fs');
      root.setAttribute('data-fs', fs);
      localStorage.setItem('fs', fs);
      updateActive();
    });
  });

  document.querySelectorAll('[data-dyslexia]').forEach(btn => {
    btn.addEventListener('click', () => {
      const d = btn.getAttribute('data-dyslexia');
      root.setAttribute('data-dyslexia', d);
      localStorage.setItem('dyslexia', d);
      updateActive();
    });
  });

  document.querySelectorAll('[data-motion]').forEach(btn => {
    btn.addEventListener('click', () => {
      const m = btn.getAttribute('data-motion');
      root.setAttribute('data-reduce-motion', m);
      localStorage.setItem('reduce-motion', m);
      updateActive();
    });
  });

  function updateActive() {
    document.querySelectorAll('[data-theme]').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-theme') === (root.getAttribute('data-theme') || 'dark'));
    });
    document.querySelectorAll('[data-fs]').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-fs') === (root.getAttribute('data-fs') || 'md'));
    });
    document.querySelectorAll('[data-dyslexia]').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-dyslexia') === (root.getAttribute('data-dyslexia') || 'off'));
    });
    document.querySelectorAll('[data-motion]').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-motion') === (root.getAttribute('data-reduce-motion') || 'off'));
    });
  }
  updateActive();
})();

function cycleTheme() {
  const root = document.documentElement;
  const order = ['light', 'dark', 'contrast'];
  const current = root.getAttribute('data-theme') || 'dark';
  const next = order[(order.indexOf(current) + 1) % order.length];
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  // refrescar botones si el panel está abierto
  document.querySelectorAll('[data-theme]').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-theme') === next);
  });
}
