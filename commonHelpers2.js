import"./assets/styles-7ad44637.js";const e=document.querySelector(".feedback-form");e.addEventListener("input",t=>{t.preventDefault();let a={email:e.elements.email.value,message:e.elements.message.value};localStorage.setItem("feedback-form-state",JSON.stringify(a).trim())});function o(t){const a=localStorage.getItem("feedback-form-state");if(a){const l=JSON.parse(a);t.elements.email.value=l.email,t.elements.message.value=l.message}}o(e);const s=document.querySelector("input"),m=document.querySelector("textarea");e.addEventListener("submit",t=>{if(t.preventDefault(),s.value!==""&&m.value!==""){let a={email:e.elements.email.value,message:e.elements.message.value};console.log(a),localStorage.removeItem("feedback-form-state"),s.value="",m.value=""}});
//# sourceMappingURL=commonHelpers2.js.map
