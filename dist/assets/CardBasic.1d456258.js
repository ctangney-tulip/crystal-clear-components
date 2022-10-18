var a=Object.defineProperty;var l=(s,e,t)=>e in s?a(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var r=(s,e,t)=>(l(s,typeof e!="symbol"?e+"":e,t),t);import{i as c,a as i}from"./dom-helpers.e766f3bc.js";class u extends HTMLElement{constructor(){super();r(this,"template",`
    <div class="cc-basic-card">
      <slot name="heading"></slot>
      <slot name="body"></slot>
      <slot name="footer></slot>
    </div>
  `);this.render()}clone(){const t=this.querySelectorAll("[slot]");this.innerHTML=this.template,t.forEach(o=>{if(o.getAttribute("slot").toLowerCase()==="body"&&c(o)===!1)throw new Error('Slot `<slot="body">` must be a DIV element.');this.querySelector(`slot[name="${o.getAttribute("slot")}"]`).replaceWith(o)})}render(){this.clone()}connectedCallback(){const t=this.classList.contains("cc-load")?this:this.closest(".cc-load");try{!t.getAttribute("data-rendered")&&t.setAttribute("data-rendered","true"),i(this)&&!t.getAttribute("data-opaque")&&t.setAttribute("data-opaque","true")}catch(o){throw console.error(o),new Error}}}export{u as default};
