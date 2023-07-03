import{d as _,r as o,_ as d,z as l,k as s,l as c,m as t,t as i,A as m}from"./entry.41abe661.js";const u=_({props:{fileName:{type:String,default:"Syntax"},code:{type:String,default:`function testFnc($num: number): void
            {
                const n: number = 100;
            }`}},setup(e){const n=o(e.fileName);return{myCode:o(e.code),myTitle:n}},mounted(){}});const p={class:"code-wrap"},f={class:"code-block"};function y(e,n,r,h,v,g){const a=l("highlight");return s(),c("div",p,[t("div",null,i(e.myTitle),1),m((s(),c("div",null,[t("pre",null,[t("code",f,i(e.myCode),1)])])),[[a]])])}const k=d(u,[["render",y]]);export{k as _};
