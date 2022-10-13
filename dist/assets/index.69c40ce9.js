var g = Object.defineProperty;
var p = (t, e, o) =>
  e in t
    ? g(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o })
    : (t[e] = o);
var d = (t, e, o) => (p(t, typeof e != 'symbol' ? e + '' : e, o), o);
(function () {
  const e = document.createElement('link').relList;
  if (e && e.supports && e.supports('modulepreload')) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) n(r);
  new MutationObserver((r) => {
    for (const s of r)
      if (s.type === 'childList')
        for (const a of s.addedNodes)
          a.tagName === 'LINK' && a.rel === 'modulepreload' && n(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(r) {
    const s = {};
    return (
      r.integrity && (s.integrity = r.integrity),
      r.referrerpolicy && (s.referrerPolicy = r.referrerpolicy),
      r.crossorigin === 'use-credentials'
        ? (s.credentials = 'include')
        : r.crossorigin === 'anonymous'
        ? (s.credentials = 'omit')
        : (s.credentials = 'same-origin'),
      s
    );
  }
  function n(r) {
    if (r.ep) return;
    r.ep = !0;
    const s = o(r);
    fetch(r.href, s);
  }
})();
const b = 'modulepreload',
  y = function (t) {
    return '/' + t;
  },
  m = {},
  E = function (e, o, n) {
    return !o || o.length === 0
      ? e()
      : Promise.all(
          o.map((r) => {
            if (((r = y(r)), r in m)) return;
            m[r] = !0;
            const s = r.endsWith('.css'),
              a = s ? '[rel="stylesheet"]' : '';
            if (document.querySelector(`link[href="${r}"]${a}`)) return;
            const i = document.createElement('link');
            if (
              ((i.rel = s ? 'stylesheet' : b),
              s || ((i.as = 'script'), (i.crossOrigin = '')),
              (i.href = r),
              document.head.appendChild(i),
              s)
            )
              return new Promise((f, h) => {
                i.addEventListener('load', f),
                  i.addEventListener('error', () =>
                    h(new Error(`Unable to preload CSS for ${r}`))
                  );
              });
          })
        ).then(() => e());
  };
String.prototype.toKebabCase = function () {
  return String(this)
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
};
String.prototype.toCamelCase = function (t = ' ') {
  return this.split(t)
    .map((e, o) => (o > 0 ? e.charAt(0).toUpperCase() + e.slice(1) : e))
    .join('');
};
const $ = function (t) {
    return t.tagName.toLowerCase() === 'div';
  },
  w = function (t) {
    const e = t.getBoundingClientRect();
    return (
      e.top >= 0 &&
      e.left >= 0 &&
      e.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      e.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  },
  C = {
    'w-max-x-0': 820,
    'w-max-x-1': 960,
    'w-max-x-2': 1200,
    'w-max-x-3': 1440,
  },
  c = {
    'm-1': 4,
    'm-2': 8,
    'm-3': 16,
    'm-4': 24,
    'm-5': 32,
    'm-6': 64,
    'm-7': 96,
    'm-8': 128,
  },
  S = {
    'gutter-y': `${c['m-3']}`,
    'gutter-x': `${c['m-4'] / 2}px`,
    gutter: `${c['m-3']}px ${c['m-4'] / 2}px`,
    gutter__lg: `${c['m-3'] * 2}px ${(c['m-4'] / 2) * 2}px`,
  },
  l = {
    'fs-1': 11,
    'fs-2': 13,
    'fs-3': 16,
    'fs-4': 18,
    'fs-5': 24,
    'fs-6': 32,
    'fs-7': 48,
    'fs-8': 60,
  },
  A = {
    'hs-1': `${l['fs-7']}`,
    'hs-2': `${l['fs-6']}`,
    'hs-3': `${l['fs-5']}`,
    'hs-4': `${l['fs-4']}`,
    'hs-5': `${l['fs-3']}`,
    'hs-6': `${l['fs-2']}`,
  },
  L = { 'lh-0': 0.75, 'lh-1': 1, 'lh-2': 1.25, 'lh-3': 1.5 },
  x = { 'br-1': 8, 'br-2': 16, 'br-3': 48, 'br-100': '50%' },
  _ = {
    'bp-1': 480,
    'bp-2': 728,
    'bp-3': 1024,
    'bp-4': 1200,
    'bp-5': 1440,
    'bp-6': 1920,
    'bp-7': 2160,
  },
  O = {
    widths: C,
    margins: c,
    gutters: S,
    fontSize: l,
    headerSize: A,
    lineHeight: L,
    borderRadius: x,
    breakpoints: _,
  };
class v extends HTMLElement {
  constructor() {
    super();
    d(
      this,
      'template',
      `
    <div class="cc-basic-card">
      <slot name="heading"></slot>
      <slot name="body"></slot>
      <slot name="footer></slot>
    </div>
  `
    );
    this.render();
  }
  clone() {
    const o = this.querySelectorAll('[slot]');
    (this.innerHTML = this.template),
      o.forEach((n) => {
        if (n.getAttribute('slot').toLowerCase() === 'body' && $(n) === !1)
          throw new Error('Slot `<slot="body">` must be a DIV element.');
        this.querySelector(
          `slot[name="${n.getAttribute('slot')}"]`
        ).replaceWith(n);
      });
  }
  render() {
    this.clone();
  }
  connectedCallback() {
    const o = this.classList.contains('cc-load')
      ? this
      : this.closest('.cc-load');
    try {
      !o.getAttribute('data-rendered') &&
        o.setAttribute('data-rendered', 'true'),
        w(this) &&
          !o.getAttribute('data-opaque') &&
          o.setAttribute('data-opaque', 'true');
    } catch (n) {
      throw (console.error(n), new Error());
    }
  }
}
const u = 'cc',
  I = `.${u}-load`,
  q = [v];
q.forEach((t) => {
  customElements.get(`${u}-${t.name.toKebabCase()}`) ||
    customElements.define(`${u}-${t.name.toKebabCase()}`, t);
});
const N = { threshold: 0.1, rootMargin: `${O.gutters.gutter__lg}` };
globalThis.Watcher = new IntersectionObserver((t) => {
  t.forEach((e) => {
    e.isIntersecting &&
      e.target.getAttribute('data-rendered') &&
      e.target.setAttribute('data-opaque', 'true');
  });
}, N);
Array.from(document.querySelectorAll(I)).forEach((t) =>
  globalThis.Watcher.observe(t)
);
document.getElementById('toggle-theme') &&
  E(() => import('./ToggleDarkMode.d501d4be.js'), []).then((t) => {
    const e = t.default;
    e(document.getElementById('toggle-theme'));
  });
