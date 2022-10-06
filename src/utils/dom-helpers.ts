type Props = {
  element: HTMLElement;
};

export const isDivElement = function ({ element }: Props) {
  return element.tagName.toLowerCase() === 'div';
};
