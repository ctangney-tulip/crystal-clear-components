import { DomHelpers } from '@utils';
import '@styles/components/cards/basic-card.scss';

export default class CardBasic extends HTMLElement {
  constructor() {
    super();

    this.render();
  }

  private clone() {
    const slots = this.querySelectorAll('[slot]');
    this.innerHTML = this.template;

    slots.forEach((slot: Element) => {
      const slotName = slot.getAttribute('slot');

      if (
        slotName!.toLowerCase() === 'body' &&
        DomHelpers.isDivElement(slot) === false
      ) {
        throw new Error('Slot `<slot="body">` must be a DIV element.');
      }

      this.querySelector(
        `slot[name="${slot.getAttribute('slot')}"]`
      )!.replaceWith(slot);
    });
  }

  render() {
    this.clone();
  }

  connectedCallback() {
    const host = this.classList.contains('cc-load')
      ? this
      : this.closest('.cc-load');

    try {
      !host!.getAttribute('data-rendered') &&
        host!.setAttribute('data-rendered', 'true');
      DomHelpers.isOnScreen(this) &&
        !host!.getAttribute('data-opaque') &&
        host!.setAttribute('data-opaque', 'true');
    } catch (e) {
      console.error(e);
      throw new Error();
    }
  }

  private template = `
    <div class="cc-basic-card">
      <slot name="heading"></slot>
      <slot name="body"></slot>
      <slot name="footer></slot>
    </div>
  `;
}
