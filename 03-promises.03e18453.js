var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("7Y9D8");const u={form:document.querySelector(".form"),btnSubmit:document.querySelector(".form button"),inputDelay:document.querySelector('.form input[name="delay"]'),inputStep:document.querySelector('.form input[name="step"]'),inputAmount:document.querySelector('.form input[name="amount"]')};function i(e,t){return new Promise(((n,o)=>{setTimeout((()=>{Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}u.btnSubmit.addEventListener("click",(function(e){e.preventDefault();const t=Number(u.inputDelay.value),n=Number(u.inputStep.value),o=Number(u.inputAmount.value);if(u.inputDelay.value,u.inputStep.value,u.inputAmount.value<0)return r.Notify.warning("Please enter enter correct data");for(let e=1;e<=o;e+=1)i(e,t).then((({position:e,delay:t})=>{r.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{r.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)}));t+=n}));
//# sourceMappingURL=03-promises.03e18453.js.map