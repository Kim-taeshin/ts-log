import{d as a,r as n,H as d,_,z as m,k as s,l as c,m as t,t as i,A as u}from"./entry.e11a7cf9.js";const p=a({props:{fileName:{type:String,default:"Syntax"},code:{type:String,default:`function testFnc($num: number): void
            {
                const n: number = 100;
            }`}},setup(e){const o=n(e.fileName);return{myCode:n(e.code),myTitle:o}},mounted(){setTimeout(()=>{document.querySelectorAll("pre code").forEach(e=>d.highlightElement(e))},1e3)}});const h={class:"code-wrap"},f={class:"code-block"};function g(e,o,r,y,v,S){const l=m("highlight");return s(),c("div",h,[t("div",null,i(e.myTitle),1),u((s(),c("div",null,[t("pre",null,[t("code",f,i(e.myCode),1)])])),[[l]])])}const k=_(p,[["render",g]]);export{k as _};
