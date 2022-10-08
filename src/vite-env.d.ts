/// <reference types="vite/client" />

declare global {
  var Watcher: InterfaceObserver;

  interface String {
    toKebabCase(): string;
    toCamelCase(separator?: string): string;
  }
}

export {};
