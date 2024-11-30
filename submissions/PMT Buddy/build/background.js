(()=>{"use strict";var e={535:(e,t,a)=>{a.d(t,{s:()=>s});class s{static get=async e=>new Promise(((t,a)=>chrome.storage.local.get(e,(e=>chrome.runtime.lastError?a(Error(chrome.runtime.lastError.message)):t(e)))));static set=async(e,t)=>{chrome.storage.local.set({[e]:t})};static async getAll(){return await this.get(null)}}}},t={};function a(s){var i=t[s];if(void 0!==i)return i.exports;var n=t[s]={exports:{}};return e[s](n,n.exports,a),n.exports}a.d=(e,t)=>{for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var s=a(535);(new class{constructor(){this.settings={},this.categories=[]}addSetting({name:e=null,id:t,category:a="None",defaultValue:s=!1,info:i=""}){void 0===this.settings[a]&&(this.settings[a]=[],this.categories.push(a));const n={name:e??t,id:t,defaultValue:s,info:i};return this.settings[a].push(n),this}getSettings(){return this.settings}getCategories(){return this.categories}getHTML(){let e="";return this.categories.forEach((t=>{e+=`<details class="settings-category">    <summary>${t}</summary>`,this.settings[t].forEach((t=>{e+=`    <label class="setting" title="${t.info}">        ${t.name}        <input type="checkbox" id="${t.id}"/>    </label>`})),e+="</details>"})),""===e&&(e="<p>No settings available</p>"),e}async initStorage(){const e=await s.s.getAll(),t=this.getSettings();this.getCategories().forEach((a=>{t[a].forEach((async t=>{void 0===e[t.id]&&await s.s.set(t.id,t.defaultValue)}))}))}}).addSetting({name:"Clean up PDFs",id:"pmt_CleanUpPdfs",category:"Physics and Maths Tutor",defaultValue:!0,info:"Redirects PDFs to the original source to remove the white sidebar."}).addSetting({name:"Hide paid tutor content",id:"pmt_BlockPmtTutor",category:"Physics and Maths Tutor",defaultValue:!1,info:"Hides most paid PMT Education content."}).addSetting({name:"Unblock 'Revision Notes'",id:"sme_unblockRevisionNotes",category:"SaveMyExams",defaultValue:!0,info:"View revision notes without logging in."}).addSetting({name:"Remove premium plan offer banners",id:"sme_removePremiumPlanBanners",category:"SaveMyExams",defaultValue:!0,info:"Removes the premium plan offer banners, including Black Friday sales. (currently broken)"}).addSetting({name:"Hide 'Premium' banners",id:"studocu_HidePremiumBanners",category:"studocu",defaultValue:!0,info:"Hides annoying banner on premium documents (cannot unblur pages)."}).initStorage()})();
//# sourceMappingURL=background.js.map