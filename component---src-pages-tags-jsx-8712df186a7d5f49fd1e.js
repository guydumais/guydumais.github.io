(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"/9aa":function(e,t,n){var u=n("NykK"),r=n("ExA7");e.exports=function(e){return"symbol"==typeof e||r(e)&&"[object Symbol]"==u(e)}},"3cYt":function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},"6nK8":function(e,t,n){var u=n("dVn5"),r=n("fo6e"),o=n("dt0z"),a=n("9NmV");e.exports=function(e,t,n){return e=o(e),void 0===(t=n?void 0:t)?r(e)?a(e):u(e):e.match(t)||[]}},"9NmV":function(e,t){var n="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",u="["+n+"]",r="\\d+",o="[\\u2700-\\u27bf]",a="[a-z\\xdf-\\xf6\\xf8-\\xff]",f="[^\\ud800-\\udfff"+n+r+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",c="(?:\\ud83c[\\udde6-\\uddff]){2}",i="[\\ud800-\\udbff][\\udc00-\\udfff]",l="[A-Z\\xc0-\\xd6\\xd8-\\xde]",d="(?:"+a+"|"+f+")",s="(?:"+l+"|"+f+")",x="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",p="[\\ufe0e\\ufe0f]?"+x+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",c,i].join("|")+")[\\ufe0e\\ufe0f]?"+x+")*"),g="(?:"+[o,c,i].join("|")+")"+p,v=RegExp([l+"?"+a+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[u,l,"$"].join("|")+")",s+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[u,l+d,"$"].join("|")+")",l+"?"+d+"+(?:['’](?:d|ll|m|re|s|t|ve))?",l+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",r,g].join("|"),"g");e.exports=function(e){return e.match(v)||[]}},AP2z:function(e,t,n){var u=n("nmnc"),r=Object.prototype,o=r.hasOwnProperty,a=r.toString,f=u?u.toStringTag:void 0;e.exports=function(e){var t=o.call(e,f),n=e[f];try{e[f]=void 0;var u=!0}catch(c){}var r=a.call(e);return u&&(t?e[f]=n:delete e[f]),r}},ExA7:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},KfNM:function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},Kz5y:function(e,t,n){var u=n("WFqU"),r="object"==typeof self&&self&&self.Object===Object&&self,o=u||r||Function("return this")();e.exports=o},N1om:function(e,t,n){var u=n("sgoq")((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}));e.exports=u},NykK:function(e,t,n){var u=n("nmnc"),r=n("AP2z"),o=n("KfNM"),a=u?u.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?r(e):o(e)}},PcuZ:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQueryTags",(function(){return s}));var u=n("q1tI"),r=n.n(u),o=n("N1om"),a=n.n(o),f=n("Wbzz"),c=n("dmsj"),i=n("RMhc"),l=n("jFb6"),d=n.n(l).a.siteMetadata.locales;t.default=function(e){var t=e.data.allMdx.group,n=Object(u.useContext)(i.a).langKey;return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{title:"All Tags",description:"All articles tags...",lang:n,pageId:"tags",template:"tags"}),r.a.createElement("div",{id:"content",className:"container"},r.a.createElement("h1",{className:"fw"},"Tags"),r.a.createElement("div",{className:"fbreak"}),r.a.createElement("div",{className:"content"},r.a.createElement("ul",null,t.map((function(e){return r.a.createElement("li",{key:e.fieldValue},r.a.createElement(f.Link,{to:n===d.defaultLangKey?"/tags/"+a()(e.fieldValue)+"/":"/"+n+"/tags/"+a()(e.fieldValue)+"/"},e.fieldValue," (",e.totalCount,")"))})))),r.a.createElement("aside",null,"Aside...")))};var s="2785841225"},TKrE:function(e,t,n){var u=n("qRkn"),r=n("dt0z"),o=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,a=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=r(e))&&e.replace(o,u).replace(a,"")}},WFqU:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n("yLpj"))},Z0cm:function(e,t){var n=Array.isArray;e.exports=n},asDA:function(e,t){e.exports=function(e,t,n,u){var r=-1,o=null==e?0:e.length;for(u&&o&&(n=e[++r]);++r<o;)n=t(n,e[r],r,e);return n}},dVn5:function(e,t){var n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(n)||[]}},dt0z:function(e,t,n){var u=n("zoYe");e.exports=function(e){return null==e?"":u(e)}},eUgh:function(e,t){e.exports=function(e,t){for(var n=-1,u=null==e?0:e.length,r=Array(u);++n<u;)r[n]=t(e[n],n,e);return r}},fo6e:function(e,t){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return n.test(e)}},nmnc:function(e,t,n){var u=n("Kz5y").Symbol;e.exports=u},qRkn:function(e,t,n){var u=n("3cYt")({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=u},sgoq:function(e,t,n){var u=n("asDA"),r=n("TKrE"),o=n("6nK8"),a=RegExp("['’]","g");e.exports=function(e){return function(t){return u(o(r(t).replace(a,"")),e,"")}}},zoYe:function(e,t,n){var u=n("nmnc"),r=n("eUgh"),o=n("Z0cm"),a=n("/9aa"),f=u?u.prototype:void 0,c=f?f.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(o(t))return r(t,e)+"";if(a(t))return c?c.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n}}}]);
//# sourceMappingURL=component---src-pages-tags-jsx-8712df186a7d5f49fd1e.js.map