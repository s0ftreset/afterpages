(() => {
  'use strict';

  const data = window.FOXGLOVE;
  const app = document.querySelector('#app');
  const toast = document.querySelector('#toast');
  const allMembers = data.bands.flatMap(band => band.members.map(member => ({ ...member, band })));

  const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[char]);

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => toast.classList.remove('show'), 2400);
  }

  function setPage(title, nav = '') {
    document.title = `${title} — FOXGLOVE`;
    document.body.classList.remove('archive-open');
    document.querySelectorAll('[data-nav]').forEach(link => {
      const active = link.dataset.nav === nav;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  }

  function negative(label, index = 0, className = '') {
    return `<div class="negative negative-${(index % 6) + 1} ${className}" aria-label="Photo placeholder: ${escapeHTML(label)}">
      <span class="negative-code">FG / ${String(index + 1).padStart(3, '0')}</span>
      <span class="negative-label">${escapeHTML(label)}</span>
      <span class="negative-state">NEGATIVE AWAITING SCAN</span>
    </div>`;
  }

  function bandPhoto(band, index = 0, className = '') {
    if (!band.image) return negative(`${band.name} / live`, index, className);
    return `<div class="negative negative-${(index % 6) + 1} has-photo ${className}">
      <img src="${escapeHTML(band.image)}" alt="${escapeHTML(band.imageAlt || band.name)}" loading="lazy">
      <span class="negative-code">FG / ${String(index + 1).padStart(3, '0')}</span>
      <span class="negative-label">${escapeHTML(band.name)} / IRIS MARLOWE</span>
      <span class="negative-state">ARCHIVE PRINT</span>
    </div>`;
  }

  function portraitPhoto(person, index = 0, className = '') {
    if (!person.image) return negative(`${person.name} / portrait`, index, className);
    return `<div class="negative negative-${(index % 6) + 1} has-photo ${className}">
      <img src="${escapeHTML(person.image)}" alt="${escapeHTML(person.imageAlt || person.name)}" loading="lazy" style="object-position:${escapeHTML(person.imagePosition || '50% 35%')}">
      <span class="negative-code">FG / PORTRAIT / ${String(index + 1).padStart(2, '0')}</span>
      <span class="negative-label">${escapeHTML(person.name)} / IRIS MARLOWE</span>
      <span class="negative-state">SUBJECT FILE</span>
    </div>`;
  }

  function dispatchPhoto(item, index = 0, className = '') {
    if (!item.image) return negative(`${item.title} / after hours`, index, className);
    return `<div class="negative negative-${(index % 6) + 1} has-photo ${className}">
      <img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.imageAlt || item.title)}" loading="eager" style="object-position:${escapeHTML(item.imagePosition || '50% 35%')}">
      <span class="negative-code">FG / SIDE DESK / ${String(index + 1).padStart(2, '0')}</span>
      <span class="negative-label">${escapeHTML(item.title)} / IRIS MARLOWE</span>
      <span class="negative-state">FIELD PORTRAIT</span>
    </div>`;
  }

  function contactPhoto(item, index) {
    const media = item.image
      ? `<img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.imageAlt || `${item.title} — ${item.place}, ${item.year}`)}" loading="lazy">`
      : negative(`${item.place}, ${item.year}`, index, 'contact-negative');
    return `<figure class="contact-photo tilt-${(index % 5) + 1}">
      ${media}
      <figcaption>
        <span>${escapeHTML(item.band)} / ${escapeHTML(item.place)} / ${escapeHTML(item.year)}</span>
        <strong>${escapeHTML(item.title)}</strong>
        <p>${escapeHTML(item.caption)}</p>
        <em>— ${escapeHTML(item.note)}</em>
        <small>PHOTO: IRIS MARLOWE / ${escapeHTML(item.id.toUpperCase())}</small>
      </figcaption>
    </figure>`;
  }

  function bandTeaser(band, index) {
    return `<a class="band-teaser band-${index}" href="#/band/${band.id}">
      <div class="band-teaser-copy">
        <span class="label">${escapeHTML(band.desk)} / ${escapeHTML(band.years)}</span>
        <h2>${escapeHTML(band.name)}</h2>
        <p>${escapeHTML(band.summary)}</p>
        <strong>OPEN THE FILE <span aria-hidden="true">↗</span></strong>
      </div>
      ${bandPhoto(band, index + 1, 'band-negative')}
      <span class="scrawl scrawl-${index}">${escapeHTML(band.irisNote)}</span>
    </a>`;
  }

  function frontPage() {
    setPage('Front Page', 'front');
    const nsh = data.bands[0];
    const gt = data.bands[1];
    app.innerHTML = `<section class="cover-story">
      <div class="cover-kicker"><span>COVER STORY</span><span>WORDS & PHOTOS: IRIS MARLOWE</span></div>
      <div class="cover-grid">
        <div class="cover-copy">
          <p class="overline">NO SAINTS HERE × GLASS TEETH</p>
          <h1>Teeth, saints &amp; everything the press got <i>wrong.</i></h1>
          <p class="cover-deck">Two bands. One decade of shared rooms, shared bills, old friendships, worse breakups, and a rivalry that always photographed cleaner than it lived.</p>
          <div class="byline"><span>THE FOXGLOVE ARCHIVE</span><span>2015—2026</span></div>
        </div>
        <div class="cover-collage" aria-label="Archival photo placeholders">
          ${bandPhoto(gt, 0, 'cover-photo cover-photo-a')}
          ${bandPhoto(nsh, 3, 'cover-photo cover-photo-b')}
          <span class="tape tape-a" aria-hidden="true"></span><span class="tape tape-b" aria-hidden="true"></span>
          <p class="hand-note">the feud photographs<br>better than the truth →</p>
        </div>
      </div>
    </section>

    <div class="marquee" aria-hidden="true"><span>NO CLEAN SIGNAL ✦ NO CLEAN SAINTS ✦ NO CLEAN STORY ✦ </span><span>NO CLEAN SIGNAL ✦ NO CLEAN SAINTS ✦ NO CLEAN STORY ✦ </span></div>

    <section class="band-files" aria-labelledby="band-files-title">
      <div class="section-slug"><span>01 / THE BANDS</span><h2 id="band-files-title">Choose your damage.</h2><p>Profiles, field notes, old photographs, and the evidence left after load-out.</p></div>
      <div class="band-teaser-grid">${bandTeaser(nsh, 0)}${bandTeaser(gt, 1)}</div>
    </section>

    <section class="rivalry-file">
      <div class="stamp">PUBLIC NARRATIVE<br><b>FEUD</b></div>
      <div><span class="label">FOXGLOVE CORRECTION / FILED REPEATEDLY</span><h2>The mythology is easier than the history.</h2></div>
      <blockquote>Old covers scream enemy bands. The photographs show borrowed gear, shared cigarettes, somebody standing side-stage, and people who knew each other before there was anything worth competing over.</blockquote>
      <p class="margin-note">a rivalry is just a relationship with a publicist.</p>
    </section>

    <section class="dispatch-section" aria-labelledby="dispatch-title">
      <div class="section-slug"><span>02 / ELSEWHERE</span><h2 id="dispatch-title">After-hours dispatches.</h2><p>The adjacent lives Iris kept finding through the viewfinder.</p></div>
      <div class="dispatch-grid">${data.dispatches.map((item, index) => `<a class="dispatch-card dispatch-${index}" href="#/dispatch/${item.id}">
        <span class="label">${escapeHTML(item.label)}</span><span class="dispatch-number">0${index + 1}</span>
        <h3>${escapeHTML(item.title)}</h3><p>${escapeHTML(item.subtitle)}</p><strong>READ FIELD NOTES ↗</strong>
      </a>`).join('')}</div>
    </section>

    <section class="issue-note"><span class="fox-mark" aria-hidden="true">✦</span><p>${escapeHTML(data.strapline)}</p><strong>— IRIS</strong></section>`;
  }

  function memberCard(member, index) {
    return `<a class="member-card" href="#/person/${member.id}">
      <div class="member-photo">${portraitPhoto(member, index + 1)}</div>
      <span class="member-index">${String(index + 1).padStart(2, '0')}</span>
      <span class="label">${escapeHTML(member.marker)}</span>
      <h3>${escapeHTML(member.name)}</h3>
      <p>${escapeHTML(member.role)}</p>
      <strong>OPEN DOSSIER ↗</strong>
    </a>`;
  }

  function bandPage(band) {
    setPage(band.name, band.id);
    const photos = data.archive.filter(item => item.band.includes(band.short) || item.band === band.name).slice(0, 3);
    app.innerHTML = `<article class="band-page">
      <header class="band-hero">
        <div class="band-title-block"><span class="label">${escapeHTML(band.desk)} / ${escapeHTML(band.years)}</span><h1>${escapeHTML(band.name)}</h1><p>${escapeHTML(band.pullQuote)}</p></div>
        ${bandPhoto(band, band.id === 'glass-teeth' ? 4 : 1, 'band-hero-negative')}
        <p class="hand-note band-hand">${escapeHTML(band.irisNote)}</p>
      </header>
      <section class="band-intro"><span class="drop-number">${band.members.length}</span><div><span class="label">ON THE RECORD</span><p>${escapeHTML(band.summary)}</p></div><blockquote>${escapeHTML(band.pullQuote)}</blockquote></section>
      <section class="lineup" aria-labelledby="lineup-title"><div class="section-slug"><span>THE LINEUP</span><h2 id="lineup-title">Individual files.</h2><p>Public facts, private observations, and photographs they approved under protest.</p></div><div class="member-grid">${band.members.map(memberCard).join('')}</div></section>
      ${band.id === 'glass-teeth' ? `<section class="studio-animals" aria-labelledby="studio-animals-title">
        <div class="section-slug"><span>UNOFFICIAL PERSONNEL / 02</span><h2 id="studio-animals-title">Moth &amp; Bruno.</h2><p>Two more regulars in the Glass Teeth studio.</p></div>
        <div class="studio-animals-layout">
          <figure class="studio-animals-photo"><img src="assets/photos/glass-teeth-moth-bruno.webp" alt="Moth, a fluffy black-and-white cat, cuddled beside Bruno, a brown-and-white pit mix, on a studio rug" loading="lazy"><figcaption>PHOTO: IRIS MARLOWE / STUDIO FLOOR</figcaption></figure>
          <div class="studio-animals-notes"><p><strong>MOTH</strong><span>NOAH'S CAT</span></p><p><strong>BRUNO</strong><span>ELIJAH'S DOG</span></p><small>Both appear to have claimed the best spot in the room.</small></div>
        </div>
      </section>` : ''}
      <section class="band-contact"><div class="section-slug"><span>FROM THE CONTACT SHEETS</span><h2>Things the press release missed.</h2></div><div class="mini-contact-grid">${photos.map(contactPhoto).join('') || data.archive.slice(0, 2).map(contactPhoto).join('')}</div></section>
    </article>`;
  }

  function spoilerBlock(block) {
    if (block.type === 'quote') return `<blockquote>${escapeHTML(block.text)}</blockquote>`;
    if (block.type === 'list') return `<ul>${block.items.map(item => `<li>${escapeHTML(item)}</li>`).join('')}</ul>`;
    if (block.type === 'note') return `<aside>${escapeHTML(block.text)}</aside>`;
    return `<p>${escapeHTML(block.text)}</p>`;
  }

  function dahliaSecrets(person) {
    if (!person.secrets) return '';
    const ownFile = Boolean(person.secrets.selfAuthored);
    const archiveLabel = ownFile ? "DOLLY'S SPACE // PERSONAL FILE" : "NO SAINTS HERE // DOLLY'S UNAUTHORIZED ARCHIVE";
    const title = ownFile ? "DOLLY'S SPACE" : "DAHLIA'S SECRETS";
    const triggerName = ownFile ? 'DOLLY' : person.name.toUpperCase();
    const warning = ownFile
      ? "Fine. But since I’m the one who built this fucking section, I reserve the right to object to the framing."
      : "Spoilers below. Dahlia Gutierrez has admin access and no meaningful supervision.";
    return `<section class="spoiler-vault dahlia-vault" aria-label="Dahlia's secrets and spoilers for ${escapeHTML(person.name)}">
      <details class="secret-gate">
        <summary>
          <span>${escapeHTML(archiveLabel)}</span>
          <strong>${escapeHTML(title)} <i aria-hidden="true">♥</i></strong>
          ${ownFile ? `<em>YOU CAME LOOKING FOR DIRT ON ME? RUDE.</em>` : ''}
          <b>CLICK HERE FOR ${escapeHTML(triggerName)}'S SECRETS / SPOILERS</b>
          <small>DO NOT SHOW MARA // DEFINITELY DO NOT SHOW THE BAND</small>
        </summary>
        <div class="secret-contents">
          <header><span>⚠ SPOILERS / EXTREMELY PRIVATE / PROBABLY TRUE</span><p>${escapeHTML(warning)}</p><strong>— Dolly</strong></header>
          <div class="secret-stack">${person.secrets.files.map(file => `<details class="secret-file">
            <summary><span>+ ${escapeHTML(file.label)}</span><strong>${escapeHTML(file.title)}</strong></summary>
            <div class="secret-copy">
              ${file.warning ? `<p class="dolly-warning">${escapeHTML(file.warning)}</p>` : ''}
              ${file.blocks.map(spoilerBlock).join('')}
            </div>
          </details>`).join('')}</div>
          <footer>LEAKED BY DAHLIA “DOLLY” GUTIERREZ // ALLEGEDLY</footer>
        </div>
      </details>
    </section>`;
  }

  function fractureFiles(person) {
    if (!person.spoilers) return '';
    return `<section class="spoiler-vault glass-vault" aria-label="Private files and spoilers for ${escapeHTML(person.name)}">
      <details class="vault-gate">
        <summary>
          <span>GLASS TEETH // PRIVATE ARCHIVE</span>
          <strong>THE FRACTURE FILES <i aria-hidden="true">⟡</i></strong>
          <b>CLICK HERE FOR ${escapeHTML(person.name.toUpperCase())}'S PRIVATE FILES / SPOILERS</b>
          <small>${escapeHTML(person.spoilers.code)} // SEALED</small>
        </summary>
        <div class="vault-contents">
          <header><span>⚠ RESTRICTED ARCHIVE</span><p>Spoilers below. Some things look better through unbroken glass.</p><strong>Proceed recklessly.</strong></header>
          <div class="fracture-stack">${person.spoilers.files.map(file => `<details class="fracture-file">
            <summary><span>+ ${escapeHTML(file.label)}</span><strong>${escapeHTML(file.title)}</strong></summary>
            <div class="fracture-copy">
              ${file.warning ? `<p class="warning-tape">${escapeHTML(file.warning)}</p>` : ''}
              ${file.blocks.map(spoilerBlock).join('')}
            </div>
          </details>`).join('')}</div>
          <footer>${escapeHTML(person.spoilers.code)} // IRIS MARLOWE // UNAUTHORIZED COPY</footer>
        </div>
      </details>
    </section>`;
  }

  function personPage(record) {
    const { band, ...person } = record;
    setPage(person.name, band.id);
    const peers = band.members.filter(member => member.id !== person.id);
    app.innerHTML = `<article class="dossier">
      <a class="back-link" href="#/band/${band.id}">← RETURN TO ${escapeHTML(band.name.toUpperCase())}</a>
      <header class="dossier-header">
        <div class="dossier-title"><span class="label">FOXGLOVE SUBJECT FILE / ${escapeHTML(band.short)}</span><h1>${escapeHTML(person.name)}</h1><p>${escapeHTML(person.deck)}</p></div>
        <div class="dossier-portrait">${portraitPhoto(person, allMembers.findIndex(item => item.id === person.id))}<span class="tape tape-c" aria-hidden="true"></span></div>
      </header>
      <div class="dossier-body">
        <aside class="file-stats"><span class="red-stamp">ON FILE</span><dl><dt>AGE</dt><dd>${escapeHTML(person.age)}</dd><dt>BAND</dt><dd>${escapeHTML(band.name)}</dd><dt>ROLE</dt><dd>${escapeHTML(person.role)}</dd><dt>FILE MARKER</dt><dd>${escapeHTML(person.marker)}</dd></dl></aside>
        <section class="profile-copy"><span class="label">IRIS MARLOWE / FIELD NOTES</span><p class="lead">${escapeHTML(person.deck)}</p><p>${escapeHTML(person.bio)}</p><div class="fact-strips">${person.facts.map(fact => `<span>${escapeHTML(fact)}</span>`).join('')}</div><blockquote>“${escapeHTML(person.iris)}”<small>— handwritten in the contact-sheet envelope</small></blockquote></section>
      </div>
      ${dahliaSecrets(person)}
      ${fractureFiles(person)}
      <nav class="peer-files" aria-label="More band member files"><span>OTHER ${escapeHTML(band.short)} FILES</span>${peers.map(peer => `<a href="#/person/${peer.id}">${escapeHTML(peer.name)} ↗</a>`).join('')}</nav>
    </article>`;
  }

  function dispatchPage(item) {
    if (item.id === 'saints-x-snakes') return saintsSnakesPage(item);
    setPage(item.title, item.id);
    const related = data.archive.find(entry => entry.band === item.title);
    app.innerHTML = `<article class="dispatch-page">
      <a class="back-link" href="#/">← RETURN TO THE FRONT PAGE</a>
      <header class="dispatch-hero"><span class="label">${escapeHTML(item.label)} / FOXGLOVE SIDE DESK</span><h1>${escapeHTML(item.title)}</h1><p>${escapeHTML(item.subtitle)}</p></header>
      <div class="dispatch-layout">
        <div class="dispatch-image">${dispatchPhoto(item, data.dispatches.indexOf(item) + 3)}<span class="tape tape-d" aria-hidden="true"></span></div>
        <div class="dispatch-copy"><blockquote>${escapeHTML(item.pull)}</blockquote><p>${escapeHTML(item.copy)}</p><div class="dispatch-notes">${item.notes.map(note => `<span>${escapeHTML(note)}</span>`).join('')}</div><p class="hand-note">not everything important happens on a stage.</p></div>
      </div>
      ${related ? `<section class="single-contact"><span class="label">FROM THE UNPUBLISHED ROLL</span>${contactPhoto(related, data.archive.indexOf(related))}</section>` : ''}
    </article>`;
  }

  function saintsSnakesPage(item) {
    setPage(item.title, item.id);
    app.innerHTML = `<article class="dispatch-page saints-snakes-page">
      <a class="back-link" href="#/">← RETURN TO THE FRONT PAGE</a>
      <header class="dispatch-hero"><span class="label">${escapeHTML(item.label)} / FOXGLOVE CROSS-FILE</span><h1>${escapeHTML(item.title)}</h1><p>${escapeHTML(item.subtitle)}</p></header>
      <section class="saints-snakes-lead" aria-label="The shared history">
        <div><span class="label">NO SAINTS HERE × THE SNAKE SKINS</span><blockquote>${escapeHTML(item.pull)}</blockquote><p>${escapeHTML(item.copy)}</p><div class="dispatch-notes">${item.notes.map(note => `<span>${escapeHTML(note)}</span>`).join('')}</div></div>
        <aside class="saints-snakes-roster"><span class="label">THE SNAKE SKINS / PERSONNEL FILE</span><ul>${item.roster.map(person => `<li><strong>${escapeHTML(person.name)}</strong><span>${escapeHTML(person.role)}</span></li>`).join('')}</ul><a href="#/band/no-saints-here">OPEN THE NO SAINTS HERE FILE ↗</a></aside>
      </section>
      <section class="saints-snakes-connections" aria-labelledby="connections-title"><div class="section-slug"><span>ON THE SAME BILL</span><h2 id="connections-title">The overlap.</h2><p>People keep receipts. Iris keeps the contact sheets.</p></div><div class="saints-snakes-grid">${item.connections.map(connection => `<article><h3>${escapeHTML(connection.title)}</h3><p>${escapeHTML(connection.copy)}</p></article>`).join('')}</div></section>
      <p class="hand-note saints-snakes-hand">the old favors always outlive the headlines. — iris</p>
    </article>`;
  }

  function archivePage() {
    setPage('Contact Sheet 13');
    document.body.classList.add('archive-open');
    app.innerHTML = `<article class="secret-archive">
      <header><span class="red-stamp">NOT FOR PUBLICATION</span><p class="label">FOXGLOVE / BOX 13 / UNFILED NEGATIVES</p><h1>You weren’t supposed to find this.</h1><p>Good. Curiosity is the only useful subscription model.</p></header>
      <div class="archive-warning"><b>IRIS'S RULE:</b> Context stays attached. Nobody gets reduced to a face, a rumor, or somebody else's bad night.</div>
      <section class="contact-sheet">${data.archive.map(contactPhoto).join('')}</section>
      <div class="archive-end"><span>✦</span><p>More negatives are still drying.</p><a href="#/">PUT IT BACK WHERE YOU FOUND IT →</a></div>
    </article>`;
  }

  function aboutPage() {
    setPage('Colophon', 'about');
    app.innerHTML = `<article class="colophon">
      <div><span class="label">ABOUT THIS MESS</span><h1>Rolling Stone got shoved down a staircase by a Xerox machine.</h1></div>
      <div class="colophon-copy"><p class="lead">FOXGLOVE is Iris Marlowe's independent zine and working archive: grainy documentary photography, bad venue lighting, dark botanical marginalia, and the moments between the moments everybody else publishes.</p><p>It covers No Saints Here and Glass Teeth without pretending their history can be flattened into rival headlines. The side desk follows Dead Air, Saints x Snakes, Rory Deveraux, and anything else worth keeping after the room empties.</p><blockquote>Nothing is neutral. Especially not a photograph.</blockquote><dl><dt>EDITOR / PHOTOGRAPHER</dt><dd>Iris Marlowe</dd><dt>FORMAT</dt><dd>Photocopy, film, web, whatever survives</dd><dt>RATINGS</dt><dd>Crossed out on principle</dd></dl></div>
    </article>`;
  }

  function notFound() {
    setPage('Lost Page');
    app.innerHTML = `<section class="lost-page"><span>404 / BAD NEGATIVE</span><h1>This page fell out of the zine.</h1><a href="#/">GO BACK TO THE FRONT PAGE →</a></section>`;
  }

  function route() {
    const path = decodeURIComponent(location.hash.slice(1) || '/');
    if (path === '/') frontPage();
    else if (path === '/about') aboutPage();
    else if (path === '/archive') archivePage();
    else if (path.startsWith('/band/')) {
      const band = data.bands.find(item => item.id === path.slice(6));
      band ? bandPage(band) : notFound();
    } else if (path.startsWith('/person/')) {
      const person = allMembers.find(item => item.id === path.slice(8));
      person ? personPage(person) : notFound();
    } else if (path.startsWith('/dispatch/')) {
      const dispatch = data.dispatches.find(item => item.id === path.slice(10));
      dispatch ? dispatchPage(dispatch) : notFound();
    } else notFound();
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  document.querySelector('#issue-label').textContent = data.issue;
  document.querySelector('#archive-key').addEventListener('click', () => {
    showToast('CONTACT SHEET 13 RELEASED');
    window.setTimeout(() => { location.hash = '#/archive'; }, 220);
  });

  let typed = '';
  window.addEventListener('keydown', event => {
    if (event.metaKey || event.ctrlKey || event.altKey || event.target.matches('input, textarea')) return;
    if (/^[a-z]$/i.test(event.key)) typed = (typed + event.key.toUpperCase()).slice(-4);
    if (typed === 'IRIS') {
      typed = '';
      showToast('IRIS LEFT THE DARKROOM UNLOCKED');
      window.setTimeout(() => { location.hash = '#/archive'; }, 300);
    }
  });

  window.addEventListener('hashchange', route);
  route();
})();
