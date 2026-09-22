(() => {
  'use strict';

  const archive = window.ARCHIVE;
  const app = document.querySelector('#app');
  const scenes = Array.isArray(archive?.scenes) ? archive.scenes : [];
  const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[char]);

  const uniqueStories = [...new Set(scenes.map(scene => scene.story).filter(Boolean))];
  const state = { story: 'All stories', query: '' };

  document.querySelector('#year').textContent = new Date().getFullYear();

  function dateLabel(value) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value || '')) return '';
    const date = new Date(`${value}T12:00:00Z`);
    return Number.isNaN(date.getTime()) ? '' : date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
  }

  function updateNav(route) {
    for (const id of ['nav-all', 'nav-about']) document.getElementById(id).removeAttribute('aria-current');
    document.getElementById(route === 'about' ? 'nav-about' : 'nav-all').setAttribute('aria-current', 'page');
  }

  function card(scene) {
    return `<a class="scene-card" href="#/scene/${encodeURIComponent(scene.id)}" aria-label="Read ${escapeHTML(scene.title)} from ${escapeHTML(scene.story)}">
      <div class="card-top"><span>${escapeHTML(scene.story)}</span><span>${escapeHTML(scene.status === 'preview' ? 'PREVIEW' : scene.category)}</span></div>
      <h3>${escapeHTML(scene.title)}</h3>
      <p>${escapeHTML(scene.excerpt)}</p>
      <div class="card-bottom"><span>${escapeHTML(scene.category)} &nbsp; · &nbsp; ${escapeHTML(scene.readMinutes || 1)} MIN READ</span><strong>READ SCENE &nbsp; ↗</strong></div>
    </a>`;
  }

  function updateCards() {
    const query = state.query.trim().toLocaleLowerCase();
    const filtered = scenes.filter(scene => {
      const matchesStory = state.story === 'All stories' || scene.story === state.story;
      const haystack = [scene.title, scene.story, scene.characters, scene.category, scene.excerpt, scene.body].join(' ').toLocaleLowerCase();
      return matchesStory && (!query || haystack.includes(query));
    });
    document.querySelector('#result-count').textContent = `${filtered.length} ${filtered.length === 1 ? 'SCENE' : 'SCENES'} FOUND`;
    document.querySelector('#scene-results').innerHTML = filtered.length
      ? `<div class="scene-grid">${filtered.map(card).join('')}</div>`
      : `<div class="empty-state"><h3>Nothing in these margins.</h3><p>Try another story or search term.</p><button id="reset-search" type="button">Clear filters</button></div>`;
    document.querySelector('#reset-search')?.addEventListener('click', () => {
      state.story = 'All stories';
      state.query = '';
      document.querySelector('#scene-search').value = '';
      document.querySelectorAll('.filter').forEach(button => button.classList.toggle('active', button.dataset.story === state.story));
      updateCards();
    });
  }

  function home() {
    document.title = `${archive.siteTitle} · ${archive.author}`;
    updateNav('home');
    app.innerHTML = `<section class="hero" aria-labelledby="hero-title">
      <div class="hero-copy"><span class="eyebrow">AN ARCHIVE OF THE IN-BETWEEN</span>
        <h1 id="hero-title">The <em>After</em>pages.</h1>
        <p>${escapeHTML(archive.intro)}</p>
        <a class="primary-link" href="#archive">ENTER THE ARCHIVE <span aria-hidden="true">↗</span></a>
      </div>
      <div class="hero-art" aria-hidden="true"><span class="art-top">01 / OPEN THE BOOK</span><span class="art-bottom">THE STORY CONTINUES ↗</span></div>
    </section>
    <div class="ticker"><span>EXTRA SCENES <b>✳</b> LOST CHAPTERS <b>✳</b> QUIET MOMENTS</span><span>${scenes.length} SCENES / ${uniqueStories.length} STORIES</span></div>
    <section class="archive-section" id="archive" aria-labelledby="archive-heading">
      <div class="section-heading"><div><span class="eyebrow">THE COLLECTION</span><h2 id="archive-heading">Read between <i>the lines.</i></h2></div><p>Choose a story. Find a moment. Stay a little longer.</p></div>
      <div class="controls"><div class="filters" role="group" aria-label="Filter by story">
        ${['All stories', ...uniqueStories].map(story => `<button class="filter${state.story === story ? ' active' : ''}" type="button" data-story="${escapeHTML(story)}" aria-pressed="${state.story === story}">${escapeHTML(story)}</button>`).join('')}
      </div><label class="search"><input id="scene-search" type="search" placeholder="Search scenes, characters…" aria-label="Search scenes" value="${escapeHTML(state.query)}"><span aria-hidden="true">⌕</span></label></div>
      <p class="result-count" id="result-count" aria-live="polite"></p><div id="scene-results"></div>
    </section>`;
    document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
      state.story = button.dataset.story;
      document.querySelectorAll('.filter').forEach(item => {
        const active = item === button;
        item.classList.toggle('active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      updateCards();
    }));
    document.querySelector('#scene-search').addEventListener('input', event => {
      state.query = event.target.value;
      updateCards();
    });
    document.querySelector('a[href="#archive"]').addEventListener('click', event => {
      event.preventDefault();
      document.querySelector('#archive').scrollIntoView({ behavior: 'smooth' });
    });
    updateCards();
  }

  function reader(scene) {
    document.title = `${scene.title} · ${archive.siteTitle}`;
    updateNav('home');
    const paragraphs = String(scene.body || '').trim().split(/\n\s*\n/).filter(Boolean);
    const next = scenes[(scenes.indexOf(scene) + 1) % scenes.length];
    app.innerHTML = `<article class="reader">
      <a class="back-link" href="#/">← BACK TO THE ARCHIVE</a>
      <header class="reader-header"><span class="eyebrow">${escapeHTML(scene.story)} / ${escapeHTML(scene.category)}</span>
        <h1>${escapeHTML(scene.title)}</h1><p class="reader-deck">${escapeHTML(scene.excerpt)}</p>
        <div class="reader-meta"><span>${escapeHTML(dateLabel(scene.date))}</span><span>${escapeHTML(scene.readMinutes || 1)} MIN READ</span><span>${escapeHTML(scene.status === 'preview' ? 'PREVIEW' : 'FULL SCENE')}</span></div>
      </header>
      <div class="reader-layout"><aside class="reader-side"><div><p>FEATURING</p><strong>${escapeHTML(scene.characters || '—')}</strong></div>
        <div class="reader-tools" aria-label="Reading settings"><button type="button" id="smaller" aria-label="Decrease text size">A−</button><button type="button" id="larger" aria-label="Increase text size">A+</button></div>
      </aside><div><div class="reader-copy" id="reader-copy">
        ${scene.contentNote ? `<div class="content-note"><strong>CONTENT NOTE:</strong> ${escapeHTML(scene.contentNote)}</div>` : ''}
        ${paragraphs.map(paragraph => `<p class="${paragraph.startsWith('DEMO SCENE') ? 'demo-note' : ''}">${escapeHTML(paragraph).replace(/\n/g, '<br>')}</p>`).join('')}
        <div class="end-mark" aria-hidden="true">✳</div>
      </div>${next && next !== scene ? `<a class="next-scene" href="#/scene/${encodeURIComponent(next.id)}"><span>UP NEXT <strong>${escapeHTML(next.title)}</strong></span><span aria-hidden="true">↗</span></a>` : ''}</div></div>
    </article>`;
    const copy = document.querySelector('#reader-copy');
    let size = 19;
    try { size = Math.max(16, Math.min(25, Number(localStorage.getItem('afterpages-font')) || 19)); } catch { /* optional preference */ }
    const setSize = value => {
      size = Math.max(16, Math.min(25, value));
      copy.style.setProperty('--reading-size', `${size}px`);
      try { localStorage.setItem('afterpages-font', size); } catch { /* optional preference */ }
    };
    setSize(size);
    document.querySelector('#smaller').addEventListener('click', () => setSize(size - 1));
    document.querySelector('#larger').addEventListener('click', () => setSize(size + 1));
  }

  function about() {
    document.title = `About · ${archive.siteTitle}`;
    updateNav('about');
    app.innerHTML = `<section class="about"><div><span class="eyebrow">A NOTE FROM THE MARGINS</span><h1>More to <em>tell.</em></h1><a class="primary-link" href="#/">EXPLORE THE SCENES <span aria-hidden="true">↗</span></a></div>
      <div class="about-copy"><p>${escapeHTML(archive.tagline)}</p><p>This is ${escapeHTML(archive.author)}’s collection of scenes that live just outside the main story: the afterthoughts, side roads, missing conversations, and alternate points of view.</p><p>Pick a world, open a scene, and make yourself at home.</p></div></section>`;
  }

  function route() {
    const path = decodeURIComponent(location.hash.slice(1) || '/');
    if (path === '/about') about();
    else if (path.startsWith('/scene/')) {
      const scene = scenes.find(item => item.id === path.slice(7));
      if (scene) reader(scene);
      else { home(); document.querySelector('#archive').scrollIntoView(); }
    } else home();
    if (path !== '/' && path !== '') window.scrollTo({ top: 0, behavior: 'instant' });
  }

  window.addEventListener('hashchange', route);
  route();
})();
