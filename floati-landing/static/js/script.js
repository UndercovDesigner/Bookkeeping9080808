const accents = {
  indigo:  { accent: '#6366f1', light: 'rgba(99, 102, 241, 0.12)', glow: 'rgba(99, 102, 241, 0.25)' },
  sky:     { accent: '#0891b2', light: 'rgba(8, 145, 178, 0.12)', glow: 'rgba(8, 145, 178, 0.25)' },
  emerald: { accent: '#059669', light: 'rgba(5, 150, 105, 0.12)', glow: 'rgba(5, 150, 105, 0.25)' },
  rose:    { accent: '#e11d48', light: 'rgba(225, 29, 72, 0.12)', glow: 'rgba(225, 29, 72, 0.25)' },
  amber:   { accent: '#d97706', light: 'rgba(217, 119, 6, 0.12)', glow: 'rgba(217, 119, 6, 0.25)' },
  violet:  { accent: '#7c3aed', light: 'rgba(124, 58, 237, 0.12)', glow: 'rgba(124, 58, 237, 0.25)' },
}

const accentNames = Object.keys(accents)
const isHomePage = !!document.getElementById('splash')
const saved = localStorage.getItem('floati-web-accent')
const cameFromSameSite = document.referrer && document.referrer.includes(location.hostname)

let chosenAccent
if (isHomePage && !cameFromSameSite) {
  // Fresh load or refresh of home page: new random accent
  chosenAccent = accentNames[Math.floor(Math.random() * accentNames.length)]
} else {
  // Navigating between pages or coming back: keep saved accent
  chosenAccent = saved && accents[saved] ? saved : accentNames[Math.floor(Math.random() * accentNames.length)]
}

function setAccent(name) {
  const a = accents[name]
  if (!a) return
  document.documentElement.style.setProperty('--accent', a.accent)
  document.documentElement.style.setProperty('--accent-light', a.light)
  document.documentElement.style.setProperty('--accent-glow', a.glow)

  // Update all logo images to match accent
  const staticPrefix = (window.STATIC_URL || '') + 'images/'
  document.querySelectorAll('.nav-logo-img, .splash-logo-img, .footer-brand-mark img').forEach(img => {
    img.src = staticPrefix + 'logo-' + name + '.png'
  })
  const dlLogo = document.querySelector('.download-logo img')
  if (dlLogo) dlLogo.src = staticPrefix + 'logo-' + name + '.png'

  // Update favicon
  const hex = a.accent.replace('#', '%23')
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='7' fill='${hex}'/><text x='16' y='23' text-anchor='middle' font-family='Georgia,serif' font-size='22' font-weight='bold' font-style='italic' fill='white'>f</text></svg>`
  const favicon = document.getElementById('favicon')
  if (favicon) favicon.href = 'data:image/svg+xml,' + svg

  // Save to sessionStorage so other pages use the same accent
  localStorage.setItem('floati-web-accent', name)

  // Dispatch event so other page scripts can react
  document.dispatchEvent(new CustomEvent('accent-change', { detail: { name: name, accent: a.accent } }))
}

// Apply accent
setAccent(chosenAccent)

// Dark mode toggle (initial state applied inline in <head> to avoid flash)
const darkToggle = document.getElementById('dark-toggle')
if (darkToggle) {
  darkToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark')
    localStorage.setItem('floati-web-dark', document.documentElement.classList.contains('dark'))
  })
}

// Splash Screen (only on pages that have it)
const splash = document.getElementById('splash')
const site = document.getElementById('site')

if (splash && site) {
  // Honour prefers-reduced-motion: skip the held splash + fade entirely so
  // motion-sensitive users aren't forced to wait 3.5s staring at a hidden #site.
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const holdMs = reduceMotion ? 0 : 3500
  const fadeMs = reduceMotion ? 0 : 500
  setTimeout(() => {
    splash.classList.add('fade-out')
    setTimeout(() => {
      splash.style.display = 'none'
      site.classList.remove('hidden')
      observeElements()
    }, fadeMs)
  }, holdMs)
}

// Scroll Animations
function observeElements() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.feature-card, .privacy-card, .tech-item, .download-card, .section-title, .section-label').forEach(el => {
    el.classList.add('fade-in')
    observer.observe(el)
  })
}

// If no splash, run observers immediately
if (!splash) {
  observeElements()
}

// Smooth scroll for anchor links is handled by Lenis in heifer.js

// Secret analytics modal (tap version 5 times)
const secretTrigger = document.getElementById('secret-trigger')
const analyticsModal = document.getElementById('analytics-modal')
const analyticsOverlay = document.getElementById('analytics-overlay')
const analyticsClose = document.getElementById('analytics-close')
let tapCount = 0
let tapTimer = null

if (secretTrigger && analyticsModal) {
  secretTrigger.addEventListener('click', () => {
    tapCount++
    clearTimeout(tapTimer)
    tapTimer = setTimeout(() => { tapCount = 0 }, 1500)
    if (tapCount >= 5) {
      tapCount = 0
      analyticsModal.classList.remove('hidden')
      analyticsOverlay.classList.remove('hidden')
      loadAnalytics()
    }
  })
  analyticsClose?.addEventListener('click', () => {
    analyticsModal.classList.add('hidden')
    analyticsOverlay.classList.add('hidden')
  })
  analyticsOverlay?.addEventListener('click', () => {
    analyticsModal.classList.add('hidden')
    analyticsOverlay.classList.add('hidden')
  })
  document.querySelectorAll('.a-period').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.a-period').forEach(b => b.classList.remove('active'))
      btn.classList.add('active')
      loadAnalytics(parseInt(btn.dataset.days))
    })
  })
}

// Track this page view
function trackPageView() {
  try {
    const ref = document.referrer
    const host = location.hostname
    const cleanRef = ref && !ref.includes(host) ? new URL(ref).hostname : ''
    fetch('/api/track/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        p: location.pathname,
        r: cleanRef,
        w: window.innerWidth,
        l: navigator.language?.split('-')[0] || '',
      }),
    }).catch(() => {})
  } catch {}
}
trackPageView()

// HTML-escape helper. Inputs to this dashboard come from /api/track which is
// attacker-controllable (path / referrer / language / feature names). Without
// escaping, any of these would be a stored XSS vector via innerHTML below.
function escHtml(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, c => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ))
}
// Strict CSS color: 6/8 hex only. Falls back to neutral if anything else slips in.
function safeCssColor(s) {
  return /^#[0-9a-fA-F]{6}([0-9a-fA-F]{2})?$/.test(String(s || '')) ? s : '#888'
}

function loadAnalytics(days) {
  const d = days || 7
  fetch('/api/stats/?days=' + d)
    .then(r => r.json())
    .then(data => {
      document.getElementById('a-views').textContent = data.views.toLocaleString()
      document.getElementById('a-unique').textContent = data.unique.toLocaleString()
      document.getElementById('a-human').textContent = data.human.toLocaleString()
      document.getElementById('a-bot').textContent = data.bot.toLocaleString()

      // Daily bars
      const barsEl = document.getElementById('a-bars')
      if (barsEl && data.daily && data.daily.length) {
        const maxVal = Math.max(...data.daily.map(d => d.count), 1)
        barsEl.innerHTML = data.daily.map(d =>
          '<div class="a-bar-group"><div class="a-bar" style="height:' + (Number(d.count) / maxVal * 100) + '%" title="' + Number(d.count) + '"></div><span class="a-bar-label">' + escHtml(d.date) + '</span></div>'
        ).join('')
      }

      // Pages
      const pagesEl = document.getElementById('a-pages')
      if (pagesEl && data.pages) {
        pagesEl.innerHTML = data.pages.map(p =>
          '<div class="a-row"><span class="a-row-url">' + escHtml(p.url) + '</span><span class="a-row-val">' + Number(p.views) + ' (' + Number(p.unique) + ' unique)</span></div>'
        ).join('') || '<div class="a-row"><span class="a-row-name" style="color:var(--t4)">No data yet</span></div>'
      }

      // Referrers
      const refsEl = document.getElementById('a-refs')
      if (refsEl && data.refs) {
        refsEl.innerHTML = data.refs.map(r =>
          '<div class="a-row"><span class="a-row-name">' + escHtml(r.name) + '</span><span class="a-row-val">' + Number(r.count) + '</span></div>'
        ).join('') || '<div class="a-row"><span class="a-row-name" style="color:var(--t4)">All direct traffic</span></div>'
      }

      // Devices
      const devicesEl = document.getElementById('a-devices')
      if (devicesEl && data.devices) {
        devicesEl.innerHTML = data.devices.map(d =>
          '<div class="a-row"><span class="a-row-name">' + escHtml(d.name) + '</span><span class="a-row-val">' + Number(d.pct) + '%</span></div>'
        ).join('') || '<div class="a-row"><span class="a-row-name" style="color:var(--t4)">No data yet</span></div>'
      }

      // Languages
      const langsEl = document.getElementById('a-langs')
      if (langsEl && data.langs) {
        langsEl.innerHTML = data.langs.map(l =>
          '<div class="a-row"><span class="a-row-name">' + escHtml(l.lang) + '</span><span class="a-row-val">' + Number(l.count) + '</span></div>'
        ).join('') || ''
      }

      // Features (whole-site breakdown)
      const featEl = document.getElementById('a-features')
      if (featEl && data.features) {
        const totalV = data.features.reduce((s, f) => s + f.views, 0) || 1
        featEl.innerHTML = data.features.map(f => {
          const pct = Math.round(Number(f.views) / totalV * 100)
          const color = safeCssColor(f.color)
          const sub = (f.top_paths || []).slice(0, 3).filter(p => p.path).map(p =>
            '<span class="a-feat-sub">' + escHtml(p.path) + ' <span class="a-feat-sub-count">' + Number(p.views) + '</span></span>'
          ).join('')
          return '<div class="a-feat">' +
                 '  <div class="a-feat-head">' +
                 '    <span class="a-feat-dot" style="background:' + color + '"></span>' +
                 '    <span class="a-feat-name">' + escHtml(f.name) + '</span>' +
                 '    <span class="a-feat-vals"><b>' + Number(f.views).toLocaleString() + '</b> views · ' + Number(f.unique).toLocaleString() + ' unique · ' + pct + '%</span>' +
                 '  </div>' +
                 '  <div class="a-feat-bar-track"><div class="a-feat-bar" style="width:' + pct + '%;background:' + color + '"></div></div>' +
                 (sub ? '<div class="a-feat-subs">' + sub + '</div>' : '') +
                 '</div>'
        }).join('') || '<div class="a-row"><span class="a-row-name" style="color:var(--t4)">No data yet</span></div>'
      }

      // Engagement events (real usage, e.g. CV builder edits/exports)
      const eventsEl = document.getElementById('a-events')
      if (eventsEl && data.events) {
        const labels = {
          cv_first_edit: 'CV — started editing',
          cv_pdf_export: 'CV — PDF export',
          cv_cover_letter_generate: 'CV — cover letter generated',
          cv_cover_letter_pdf: 'CV — cover letter PDF',
          cv_linkedin_import: 'CV — LinkedIn import',
          cv_template_switch: 'CV — template switched',
          cv_ats_match: 'CV — ATS job match',
        }
        eventsEl.innerHTML = data.events.map(e =>
          '<div class="a-row"><span class="a-row-name">' + escHtml(labels[e.event] || e.event) + '</span><span class="a-row-val">' + Number(e.count) + ' (' + Number(e.unique) + ' unique)</span></div>'
        ).join('') || '<div class="a-row"><span class="a-row-name" style="color:var(--t4)">No events yet</span></div>'
      }

      checkMilestone(data.views)
    })
    .catch(() => {
      document.getElementById('a-views').textContent = '--'
      document.getElementById('a-unique').textContent = '--'
      document.getElementById('a-human').textContent = '--'
      document.getElementById('a-bot').textContent = '--'
    })
}

// Milestone celebrations
const milestones = [
  { at: 100, icon: '\u{1F389}', msg: "You're visitor #100!", sub: "You just made our first hundred. That's kind of a big deal." },
  { at: 500, icon: '\u{1F525}', msg: "You're visitor #500!", sub: "Half a thousand people found this page. You're one of them." },
  { at: 1000, icon: '\u{1F680}', msg: "You're visitor #1,000!", sub: "Four digits. You helped us get here." },
  { at: 5000, icon: '\u{2B50}', msg: "You're visitor #5,000!", sub: "Five thousand. We genuinely didn't expect this." },
  { at: 10000, icon: '\u{1F451}', msg: "You're visitor #10,000!", sub: "Ten thousand. You're part of something now." },
  { at: 25000, icon: '\u{1F48E}', msg: "You're visitor #25,000!", sub: "Twenty-five thousand. This is getting serious." },
  { at: 50000, icon: '\u{1F30D}', msg: "You're visitor #50,000!", sub: "Fifty thousand humans. And you're one of them. Thank you." },
  { at: 100000, icon: '\u{1F3C6}', msg: "You're visitor #100,000!", sub: "Six figures. We started with zero. You completed the journey." },
]

function checkMilestone(views) {
  const lastSeen = parseInt(localStorage.getItem('floati-milestone') || '0')
  const milestone = milestones.filter(m => views >= m.at && m.at > lastSeen).pop()
  if (milestone) {
    localStorage.setItem('floati-milestone', milestone.at.toString())
    showMilestone(milestone)
  }
}

function showMilestone(m) {
  const popup = document.getElementById('milestone-popup')
  document.getElementById('milestone-icon').textContent = m.icon
  document.getElementById('milestone-text').textContent = m.msg
  document.getElementById('milestone-sub').textContent = m.sub
  popup.classList.remove('hidden')
  setTimeout(() => popup.classList.add('hidden'), 4000)
}

// Nav scrolled state + scroll-to-top visibility
const scrollTop = document.getElementById('scroll-top')
const navEl = document.querySelector('.nav')
window.addEventListener(
  'scroll',
  () => {
    if (navEl) navEl.classList.toggle('scrolled', window.scrollY > 20)
    if (scrollTop) {
      scrollTop.classList.toggle('visible', window.scrollY > 400)
      scrollTop.classList.toggle('hidden', window.scrollY <= 400)
    }
  },
  { passive: true }
)

// Scroll-to-top click is handled by Lenis in heifer.js

// Changelog sidebar
const changelogBtn = document.getElementById('changelog-btn')
const changelogSidebar = document.getElementById('changelog-sidebar')
const changelogOverlay = document.getElementById('changelog-overlay')
const changelogClose = document.getElementById('changelog-close')

function openChangelog() {
  if (changelogSidebar) changelogSidebar.classList.remove('hidden')
  if (changelogOverlay) changelogOverlay.classList.remove('hidden')
}
function closeChangelog() {
  if (changelogSidebar) changelogSidebar.classList.add('hidden')
  if (changelogOverlay) changelogOverlay.classList.add('hidden')
}
if (changelogBtn) changelogBtn.addEventListener('click', openChangelog)
if (changelogClose) changelogClose.addEventListener('click', closeChangelog)
if (changelogOverlay) changelogOverlay.addEventListener('click', closeChangelog)

// Hamburger menu
const hamburger = document.getElementById('hamburger')
const navLinks = document.getElementById('nav-links')

function setMobileNavOpen(open) {
  if (!hamburger || !navLinks) return
  hamburger.classList.toggle('open', open)
  navLinks.classList.toggle('open', open)
  document.body.classList.toggle('nav-open', open)
  hamburger.setAttribute('aria-expanded', open ? 'true' : 'false')
}

if (hamburger && navLinks) {
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation()
    setMobileNavOpen(!navLinks.classList.contains('open'))
  })

  navLinks.querySelectorAll('a').forEach(link => {
    // Don't close hamburger when clicking dropdown items (they're inside .nav-dropdown)
    if (link.closest('.nav-dropdown-menu')) return
    link.addEventListener('click', () => setMobileNavOpen(false))
  })

  document.addEventListener('click', (e) => {
    if (!navLinks.classList.contains('open')) return
    if (e.target.closest('.nav-inner') || e.target === hamburger) return
    setMobileNavOpen(false)
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) {
      setMobileNavOpen(false)
      hamburger.focus()
    }
  })

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900 && navLinks.classList.contains('open')) {
      setMobileNavOpen(false)
    }
  })
}

// Tools dropdown
const dropTrigger = document.getElementById('nav-tools-trigger')
const dropMenu = document.getElementById('nav-tools-menu')
if (dropTrigger && dropMenu) {
  dropTrigger.addEventListener('click', (e) => {
    e.preventDefault()
    e.stopPropagation()
    const isOpen = dropMenu.classList.contains('open')
    dropTrigger.classList.toggle('open', !isOpen)
    dropMenu.classList.toggle('open', !isOpen)
  })
  // Close only when clicking outside the entire nav-dropdown wrapper
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-dropdown')) {
      dropTrigger.classList.remove('open')
      dropMenu.classList.remove('open')
    }
  })
}

// Language switcher
// Persists the user's choice and updates the html lang attribute so screen
// readers / SEO pick up the active language. Localised copy isn't wired up
// yet, so we deliberately do NOT flip document direction — that would break
// the LTR-only layout. A `language-change` event is dispatched so future
// translation code can react.
const langTrigger = document.getElementById('nav-lang-trigger')
const langMenu = document.getElementById('nav-lang-menu')
const langCodeEl = document.getElementById('nav-lang-code')
if (langTrigger && langMenu) {
  const langItems = langMenu.querySelectorAll('.nav-lang-item')
  const STORAGE_KEY = 'heifer-lang'

  function setOpen(open) {
    langMenu.classList.toggle('open', open)
    langTrigger.classList.toggle('open', open)
    langTrigger.setAttribute('aria-expanded', open ? 'true' : 'false')
  }

  function applyLang(lang) {
    const item = langMenu.querySelector('.nav-lang-item[data-lang="' + lang + '"]')
    if (!item) return
    const code = item.dataset.code
    const dir = item.dataset.dir || 'ltr'
    const en = item.dataset.en || code

    document.documentElement.setAttribute('lang', lang)
    if (langCodeEl) langCodeEl.textContent = code
    langTrigger.setAttribute('aria-label', 'Language: ' + en)

    langItems.forEach(i => {
      const on = i === item
      i.classList.toggle('active', on)
      i.setAttribute('aria-selected', on ? 'true' : 'false')
    })

    try { localStorage.setItem(STORAGE_KEY, lang) } catch {}
    document.dispatchEvent(new CustomEvent('language-change', { detail: { lang, code, dir } }))
  }

  langTrigger.addEventListener('click', (e) => {
    e.preventDefault()
    e.stopPropagation()
    setOpen(!langMenu.classList.contains('open'))
  })

  langItems.forEach(item => {
    item.addEventListener('click', () => {
      applyLang(item.dataset.lang)
      setOpen(false)
    })
  })

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-lang')) setOpen(false)
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && langMenu.classList.contains('open')) {
      setOpen(false)
      langTrigger.focus()
    }
  })

  // Initial state: saved preference > html[lang] > 'en'
  let initialLang = 'en'
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && langMenu.querySelector('.nav-lang-item[data-lang="' + saved + '"]')) {
      initialLang = saved
    } else {
      const htmlLang = (document.documentElement.lang || 'en').toLowerCase().split('-')[0]
      if (langMenu.querySelector('.nav-lang-item[data-lang="' + htmlLang + '"]')) {
        initialLang = htmlLang
      }
    }
  } catch {}
  applyLang(initialLang)
}
