!function(){function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequire6a59;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequire6a59=r),r.register("iE7OH",(function(t,n){var o,r;e(t.exports,"register",(function(){return o}),(function(e){return o=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var a={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},r=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r.register("aNJCr",(function(t,n){var o;e(t.exports,"getBundleURL",(function(){return o}),(function(e){return o=e}));var r={};function a(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}o=function(e){var t=r[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return a(e[2])}return"/"}(),r[e]=t),t}})),r("iE7OH").register(JSON.parse('{"7EiNB":"index.8937d8cb.js","8PNQt":"service-worker.js"}')),console.log("[App] Register a Service worker.");var a;a=r("aNJCr").getBundleURL("7EiNB")+r("iE7OH").resolve("8PNQt"),"serviceWorker"in navigator?(navigator.serviceWorker.register(a),console.log("[App] Succesfully registered a service worker.")):console.error("[App] The app will not work offline: the browser does not support Service workers."),window.addEventListener("DOMContentLoaded",(e=>{console.log("[App] DOM fully loaded and parsed, starting dynamic content.");const t=document.querySelector("#list"),n=document.querySelector("form"),o=document.querySelector("#datePicker"),r=document.querySelector("#ammount"),a=document.querySelector("#comment"),c=document.querySelector("#image"),d=document.querySelector("#account"),l=document.querySelector("#category");document.querySelector("#submit");let s;const i=window.indexedDB.open("expenses_db",1);function u(){for(console.log("[App] Display data in the database.");t.firstChild;)t.removeChild(t.firstChild);s.transaction("expenses_object_store").objectStore("expenses_object_store").openCursor().addEventListener("success",(e=>{const n=e.target.result;if(n){const e={date:n.value.date,ammount:n.value.ammount,comment:n.value.comment,image:n.value.image,account:n.value.account,category:n.value.category},o=document.createElement("li"),r=document.createElement("h2"),a=document.createElement("p"),c=document.createElement("details"),d=document.createElement("summary"),l=document.createElement("p"),s=document.createElement("p"),i=document.createElement("p"),u=document.createElement("p"),g=document.querySelector("option[value="+e.category+"]").textContent;r.textContent=e.date,a.textContent=e.ammount,d.textContent=e.account.toString()+", "+g,l.textContent=e.comment,s.textContent=e.image,i.textContent=e.account,u.textContent=g,c.appendChild(d),c.appendChild(l),c.appendChild(s),c.appendChild(i),c.appendChild(u),o.appendChild(r),o.appendChild(a),o.appendChild(c),t.appendChild(o),o.setAttribute("data-entry-id",n.value.id);const f=document.createElement("button");o.appendChild(f),f.textContent="Delete",f.setAttribute("class","delete");const v=document.createElement("button");o.appendChild(v),v.textContent="Edit",f.addEventListener("click",p),v.addEventListener("click",m),n.continue()}else{if(!t.firstChild){const e=document.createElement("li");e.textContent="No entries stored.",t.appendChild(e)}console.log("[App] All notes displayed.")}}))}function p(e){const n=Number(e.target.parentNode.getAttribute("data-entry-id"));console.log(`[App] Delete entry ${n}.`);const o=s.transaction(["expenses_object_store"],"readwrite");o.objectStore("expenses_object_store").delete(n);o.addEventListener("complete",(()=>{if(e.target.parentNode.parentNode&&(e.target.parentNode.parentNode.removeChild(e.target.parentNode),console.log(`[App] Entry ${n} deleted.`)),!t.firstChild){const e=document.createElement("li");e.textContent="No entries stored.",t.appendChild(e)}}))}function m(e){alert("WIP")}function g(){console.log("[App] Set today.");const e=new Date;document.getElementById("datePicker").value=e.getFullYear()+"-"+("0"+(e.getMonth()+1)).slice(-2)+"-"+("0"+e.getDate()).slice(-2),console.log("[App] Setted today.")}i.addEventListener("error",(()=>{console.error("Database failed to open"),alert("Database could not open for some reason!")})),i.addEventListener("success",(()=>{console.log("[App] Database opened successfully."),s=i.result,u()})),i.addEventListener("upgradeneeded",(e=>{s=e.target.result;const t=s.createObjectStore("expenses_object_store",{keyPath:"id",autoIncrement:!0});t.createIndex("date","date",{unique:!1}),t.createIndex("ammount","ammount",{unique:!1}),t.createIndex("comment","comment",{unique:!1}),t.createIndex("image","image",{unique:!1}),t.createIndex("account","account",{unique:!1}),t.createIndex("category","category",{unique:!1}),console.log("[App] Database setup complete.")})),n.addEventListener("submit",(function(e){console.log("[App] Add new entry to the database."),e.preventDefault();const t={date:o.value,ammount:r.value,comment:a.value,image:c.value,account:d.value,category:l.value},n=s.transaction(["expenses_object_store"],"readwrite"),i=n.objectStore("expenses_object_store");i.add(t).addEventListener("success",(()=>{document.getElementById("reset").click()})),n.addEventListener("complete",(()=>{console.log("[App] Added new entry to database."),u()})),n.addEventListener("error",(()=>console.log("Transaction not opened due to error.")))})),g();document.getElementById("reset").addEventListener("click",(e=>{console.log("[App] Reset form."),g(),document.getElementById("ammount").value=0,document.getElementById("comment").value="",document.getElementById("image").value="",console.log("[App] Reseted form.")}));document.getElementById("download").addEventListener("click",(e=>{console.log("[App] Download start.");var t=[];s.transaction("expenses_object_store").objectStore("expenses_object_store").openCursor().addEventListener("success",(e=>{const n=e.target.result;if(n){const e={date:n.value.date.toString(),ammount:n.value.ammount.toString(),comment:n.value.comment.toString(),image:n.value.image.toString(),account:n.value.account.toString(),category:n.value.category.toString()};t.push(e),n.continue()}else{console.log("[App] All data was collected.");const e=new Date,n=e.getFullYear()+"-"+("0"+(e.getMonth()+1)).slice(-2)+"-"+("0"+e.getDate()).slice(-2)+"-database.json";!function(e,t,n){var o=new Blob([e],{type:n}),r=document.createElement("a"),a=URL.createObjectURL(o);r.href=a,r.download=t,document.body.appendChild(r),r.click(),setTimeout((function(){document.body.removeChild(r),window.URL.revokeObjectURL(a)}),0)}(JSON.stringify(t),n,"application/json"),console.log("[App] Downloaded data.")}}))}));document.querySelector("#clear").addEventListener("click",(e=>{console.log("[App] Clear database.");document.querySelectorAll(".delete").forEach((e=>{e.click()})),console.log("[App] Cleared database."),u()}))}))}();
//# sourceMappingURL=index.8937d8cb.js.map
