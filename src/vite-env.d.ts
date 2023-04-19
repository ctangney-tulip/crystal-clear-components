/// <reference types="vite/client" />

declare global {
  var Watcher: InterfaceObserver;
  var Registry: Registry;

  interface String {
    toKebabCase(): string;
    toCamelCase(separator?: string): string;
  }
}

export {};
