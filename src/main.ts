// Environment Variables
const COMPONENT_PREFIX = 'cc';
const LOAD_CLASS = `.${COMPONENT_PREFIX}-load`;

import '@utils/string.ts';

import { GlobalStyles, WindowWatcher } from '@utils';

const WatcherOpts = {
  threshold: 0.1,
  rootMargin: `${GlobalStyles.gutters['gutter__lg']}`,
};

WindowWatcher(WatcherOpts, LOAD_CLASS);

const loadModules = () => {
  return new Promise(async (resolve) => {
    const _REGISTRY_: Array<CustomElementConstructor> = [];

    if (document.getElementById('toggle-theme')) {
      await import('@components/Global/ToggleDarkMode').then((module) => {
        const initToggle = module.default;
        initToggle(document.getElementById('toggle-theme')!);
      });
    }

    if (document.querySelectorAll(`${COMPONENT_PREFIX}-card-basic`).length) {
      await import('@components/Cards/CardBasic').then((module) => {
        _REGISTRY_.push(module.default);
      });
    }

    resolve(_REGISTRY_);
  });
};

loadModules().then((registry) => {
  (registry as Array<CustomElementConstructor>).forEach((item) => {
    if (!customElements.get(`${COMPONENT_PREFIX}-${item.name.toKebabCase()}`)) {
      customElements.define(
        `${COMPONENT_PREFIX}-${item.name.toKebabCase()}`,
        item
      );
    }
  });
});

export {};
