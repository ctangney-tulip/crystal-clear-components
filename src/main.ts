// Environment Variables
const COMPONENT_PREFIX = 'cc';
const LOAD_CLASS = `.${COMPONENT_PREFIX}-load`;

import '@utils/string.ts';

import { CardBasic } from '@components';
import { GlobalStyles } from '@utils';

const _REGISTRY_ = [CardBasic];

_REGISTRY_.forEach((item) => {
  if (!customElements.get(`${COMPONENT_PREFIX}-${item.name.toKebabCase()}`)) {
    customElements.define(
      `${COMPONENT_PREFIX}-${item.name.toKebabCase()}`,
      item
    );
  }
});

const WatcherOpts = {
  threshold: 0.1,
  rootMargin: `${GlobalStyles.gutters['gutter__lg']}`,
};

globalThis.Watcher = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.isIntersecting &&
      entry.target.getAttribute('data-rendered') &&
      entry.target.setAttribute('data-opaque', 'true');
  });
}, WatcherOpts);

Array.from(document.querySelectorAll(LOAD_CLASS)).forEach((component) =>
  globalThis.Watcher.observe(component)
);

if (document.getElementById('toggle__theme')) {
  import('@components/Global/ToggleDarkMode').then((module) => {
    const initToggle = module.default;
    initToggle(document.getElementById('toggle__theme'));
  });
}

export {};
