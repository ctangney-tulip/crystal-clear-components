import { isDivElement } from '@utils';
import '@styles/components/cards/basic-card.scss';

export default class BasicCard extends HTMLElement {
  constructor() {
    super();

    this.render();
  }

  private clone() {
    const slots = this.querySelectorAll('[slot]');
    this.innerHTML = this.template;

    slots.forEach((slot: Element) => {
      const slotName = slot.getAttribute('slot');

      if (slotName!.toLowerCase() === 'body' && isDivElement(slot) === false) {
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
    try {
      this.classList.contains('cc-load')
        ? this.setAttribute('data-rendered', 'true')
        : this.closest('.cc-load')?.setAttribute('data-rendered', 'true');
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
