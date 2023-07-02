import{d as Y,H as N,r as I,_ as Q,z as V,k as C,l as L,m as h,t as D,A as J}from"./entry.863cecd2.js";const j=e=>({IMPORTANT:{scope:"meta",begin:"!important"},BLOCK_COMMENT:e.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{scope:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z][A-Za-z0-9_-]*/}}),ee=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","p","q","quote","samp","section","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],ne=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"],te=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"],ae=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"],re=["align-content","align-items","align-self","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","content-visibility","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","empty-cells","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flow","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-smoothing","font-stretch","font-style","font-synthesis","font-variant","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inline-size","isolation","justify-content","left","letter-spacing","line-break","line-height","list-style","list-style-image","list-style-position","list-style-type","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","perspective","perspective-origin","pointer-events","position","quotes","resize","rest","rest-after","rest-before","right","row-gap","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","speak","speak-as","src","tab-size","table-layout","text-align","text-align-all","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-transform","text-underline-position","top","transform","transform-box","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index"].reverse();function ie(e){const n=e.regex,t=j(e),a={begin:/-(webkit|moz|ms|o)-(?=[a-z])/},s="and or not only",c=/@-?\w[\w]*(-\w+)*/,i="[a-zA-Z-][a-zA-Z0-9_-]*",r=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE];return{name:"CSS",case_insensitive:!0,illegal:/[=|'\$]/,keywords:{keyframePosition:"from to"},classNameAliases:{keyframePosition:"selector-tag"},contains:[t.BLOCK_COMMENT,a,t.CSS_NUMBER_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/,relevance:0},{className:"selector-class",begin:"\\."+i,relevance:0},t.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",variants:[{begin:":("+te.join("|")+")"},{begin:":(:)?("+ae.join("|")+")"}]},t.CSS_VARIABLE,{className:"attribute",begin:"\\b("+re.join("|")+")\\b"},{begin:/:/,end:/[;}{]/,contains:[t.BLOCK_COMMENT,t.HEXCOLOR,t.IMPORTANT,t.CSS_NUMBER_MODE,...r,{begin:/(url|data-uri)\(/,end:/\)/,relevance:0,keywords:{built_in:"url data-uri"},contains:[...r,{className:"string",begin:/[^)]/,endsWithParent:!0,excludeEnd:!0}]},t.FUNCTION_DISPATCH]},{begin:n.lookahead(/@/),end:"[{;]",relevance:0,illegal:/:/,contains:[{className:"keyword",begin:c},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:{$pattern:/[a-z-]+/,keyword:s,attribute:ne.join(" ")},contains:[{begin:/[a-z-]+(?=:)/,className:"attribute"},...r,t.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"\\b("+ee.join("|")+")\\b"}]}}const z="[A-Za-z$_][0-9A-Za-z$_]*",oe=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],se=["true","false","null","undefined","NaN","Infinity"],B=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],U=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],P=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],ce=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],le=[].concat(P,B,U);function de(e){const n=e.regex,t=(o,{after:b})=>{const u="</"+o[0].slice(1);return o.input.indexOf(u,b)!==-1},a=z,s={begin:"<>",end:"</>"},c=/<[A-Za-z0-9\\._:-]+\s*\/>/,i={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(o,b)=>{const u=o[0].length+o.index,p=o.input[u];if(p==="<"||p===","){b.ignoreMatch();return}p===">"&&(t(o,{after:u})||b.ignoreMatch());let _;const M=o.input.substring(u);if(_=M.match(/^\s*=/)){b.ignoreMatch();return}if((_=M.match(/^\s+extends\s+/))&&_.index===0){b.ignoreMatch();return}}},r={$pattern:z,keyword:oe,literal:se,built_in:le,"variable.language":ce},d="[0-9](_?[0-9])*",l=`\\.(${d})`,y="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",v={className:"number",variants:[{begin:`(\\b(${y})((${l})|\\.)?|(${l}))[eE][+-]?(${d})\\b`},{begin:`\\b(${y})\\b((${l})\\b|\\.)?|(${l})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},g={className:"subst",begin:"\\$\\{",end:"\\}",keywords:r,contains:[]},k={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,g],subLanguage:"xml"}},S={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,g],subLanguage:"css"}},T={begin:"gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,g],subLanguage:"graphql"}},A={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,g]},f={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:a+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},w=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,k,S,T,A,{match:/\$\d+/},v];g.contains=w.concat({begin:/\{/,end:/\}/,keywords:r,contains:["self"].concat(w)});const O=[].concat(f,g.contains),E=O.concat([{begin:/\(/,end:/\)/,keywords:r,contains:["self"].concat(O)}]),m={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:r,contains:E},$={variants:[{match:[/class/,/\s+/,a,/\s+/,/extends/,/\s+/,n.concat(a,"(",n.concat(/\./,a),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,a],scope:{1:"keyword",3:"title.class"}}]},R={relevance:0,match:n.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...B,...U]}},G={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},F={variants:[{match:[/function/,/\s+/,a,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[m],illegal:/%/},Z={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function H(o){return n.concat("(?!",o.join("|"),")")}const K={match:n.concat(/\b/,H([...P,"super","import"]),a,n.lookahead(/\(/)),className:"title.function",relevance:0},X={begin:n.concat(/\./,n.lookahead(n.concat(a,/(?![0-9A-Za-z$_(])/))),end:a,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},W={match:[/get|set/,/\s+/,a,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},m]},x="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",q={match:[/const|var|let/,/\s+/,a,/\s*/,/=\s*/,/(async\s*)?/,n.lookahead(x)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[m]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:r,exports:{PARAMS_CONTAINS:E,CLASS_REFERENCE:R},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),G,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,k,S,T,A,f,{match:/\$\d+/},v,R,{className:"attr",begin:a+n.lookahead(":"),relevance:0},q,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[f,e.REGEXP_MODE,{className:"function",begin:x,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:r,contains:E}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:s.begin,end:s.end},{match:c},{begin:i.begin,"on:begin":i.isTrulyOpeningTag,end:i.end}],subLanguage:"xml",contains:[{begin:i.begin,end:i.end,skip:!0,contains:["self"]}]}]},F,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[m,e.inherit(e.TITLE_MODE,{begin:a,className:"title.function"})]},{match:/\.\.\./,relevance:0},X,{match:"\\$"+a,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[m]},K,Z,$,W,{match:/\$[(.]/}]}}function ge(e){const n=e.regex,t=n.concat(/[\p{L}_]/u,n.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),a=/[\p{L}0-9._:-]+/u,s={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},c={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},i=e.inherit(c,{begin:/\(/,end:/\)/}),r=e.inherit(e.APOS_STRING_MODE,{className:"string"}),d=e.inherit(e.QUOTE_STRING_MODE,{className:"string"}),l={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:a,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[s]},{begin:/'/,end:/'/,contains:[s]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[c,d,r,i,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[c,i,d,r]}]}]},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},s,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[d]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[l],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[l],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:n.concat(/</,n.lookahead(n.concat(t,n.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:t,relevance:0,starts:l}]},{className:"tag",begin:n.concat(/<\//,n.lookahead(n.concat(t,/>/))),contains:[{className:"name",begin:t,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}N.registerLanguage("javascript",de);N.registerLanguage("css",ie);N.registerLanguage("html",ge);const be=Y({props:{fileName:{type:String,default:"Syntax"},code:{type:String,default:"function testFnc($num: number): void"}},setup(e){const n=I(e.fileName);return{myCode:I(e.code),myTitle:n}},mounted(){}}),me={class:"code-wrap"},ue={class:"code-block"};function pe(e,n,t,a,s,c){const i=V("highlight");return C(),L("div",me,[h("div",null,D(e.myTitle),1),J((C(),L("div",null,[h("pre",null,[h("code",ue,D(e.myCode),1)])])),[[i]])])}const _e=Q(be,[["render",pe]]);export{_e as _};
