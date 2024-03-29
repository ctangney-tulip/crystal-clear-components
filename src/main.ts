// Environment Variables
const COMPONENT_PREFIX = "cc";
const LOAD_CLASS = `.${COMPONENT_PREFIX}-load`;
import Registry from "./registry";

import { GlobalStyles, WindowWatcher } from "@utils";

import "@utils/string.ts";

const WatcherOpts = {
  threshold: 0.1,
  rootMargin: `${GlobalStyles.gutters["gutter__lg"]}`,
};

WindowWatcher(WatcherOpts, LOAD_CLASS);

if (document.getElementById("toggle-theme")) {
  await import("@components/Global/ToggleDarkMode").then((module) => {
    const initToggle = module.default;
    initToggle(document.getElementById("toggle-theme")!);
  });
}

// make new registry here -- remove load modules doo-doo
const REGISTRY = new Registry(COMPONENT_PREFIX);
globalThis.Registry = REGISTRY;

export {};
