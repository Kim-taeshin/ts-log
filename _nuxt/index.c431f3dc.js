import{d as r,r as n,H as l,_ as a,k as d,l as i,m as t,t as s}from"./entry.ba1350b0.js";const _=r({props:{fileName:{type:String,default:"Syntax"},code:{type:String,default:`function testFnc($num: number): void
            {
                const n: number = 100;
            }`}},setup(e){const o=n(e.fileName);return{myCode:n(e.code),myTitle:o}},mounted(){setTimeout(()=>{document.querySelectorAll("pre code").forEach(e=>l.highlightElement(e))},1e3)}});const m={class:"code-wrap"},u={class:"code-block"};function p(e,o,c,f,y,h){return d(),i("div",m,[t("div",null,s(e.myTitle),1),t("div",null,[t("pre",null,[t("code",u,s(e.myCode),1)])])])}const S=a(_,[["render",p]]);export{S as _};
