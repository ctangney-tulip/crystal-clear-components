export const isDivElement = function (element: Element) {
  return element.tagName.toLowerCase() === 'div';
};

export const isOnScreen = function (element: Element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

export const checkRendered = function (element: Element) {
  return element.hasAttribute('data-rendered');
};

export const checkVisible = function (element: Element) {
  return element.hasAttribute('data-visible');
};
