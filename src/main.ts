// Environment Variables
const COMPONENT_PREFIX = 'cc';

import '@styles/index.scss';
import '@utils/string.ts';

import { BasicCard } from '@components';

const _REGISTRY_ = [BasicCard];

_REGISTRY_.forEach((item) => {
  if (!customElements.get(`${COMPONENT_PREFIX}-${item.name.toKebabCase()}`)) {
    customElements.define(
      `${COMPONENT_PREFIX}-${item.name.toKebabCase()}`,
      item
    );
  }
});

export {};
