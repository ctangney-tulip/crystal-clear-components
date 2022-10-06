var a=Object.defineProperty;var u=(o,e,r)=>e in o?a(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r;var c=(o,e,r)=>(u(o,typeof e!="symbol"?e+"":e,r),r);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();String.prototype.toKebabCase=function(){return String(this).replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[\s_]+/g,"-").toLowerCase()};String.prototype.toCamelCase=function(o=" "){return this.split(o).map((e,r)=>r>0?e.charAt(0).toUpperCase()+e.slice(1):e).join("")};const d=function(o){return o.tagName.toLowerCase()==="div"};class f extends HTMLElement{constructor(){super();c(this,"template",`
    <div class="cc-basic-card">
      <slot name="heading"></slot>
      <slot name="body"></slot>
      <slot name="footer></slot>
    </div>
  `);this.render()}clone(){const r=this.querySelectorAll("[slot]");this.innerHTML=this.template,r.forEach(n=>{if(n.getAttribute("slot").toLowerCase()==="body"&&d(n)===!1)throw new Error('Slot `<slot="body">` must be a DIV element.');this.querySelector(`slot[name="${n.getAttribute("slot")}"]`).replaceWith(n)})}render(){this.clone()}connectedCallback(){this.setAttribute("rendered","true")}}const l="cc",m=[f];m.forEach(o=>{customElements.get(`${l}-${o.name.toKebabCase()}`)||customElements.define(`${l}-${o.name.toKebabCase()}`,o)});