import"./assets/styles-a7a60d21.js";const a=document.querySelector(".feedback-form"),n=document.querySelector('input[name="email"]'),o=document.querySelector('textarea[name="message"]');function m(t){const e=localStorage.getItem("feedback-form-state");if(e!==null){const r=JSON.parse(e);n.value=r.email||"",o.value=r.message||""}}function l(t){const e={email:n.value.trim(),message:o.value.trim()};localStorage.setItem("feedback-form-state",JSON.stringify(e))}function s(t){t.preventDefault();const e={email:n.value.trim(),message:o.value.trim()};localStorage.removeItem("feedback-form-state"),a.reset(),console.log(e)}a.addEventListener("input",l);a.addEventListener("submit",s);window.addEventListener("load",m);
//# sourceMappingURL=commonHelpers2.js.map