(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{DMD0:function(e,t,a){"use strict";var n=a("zLVn"),l=a("q1tI"),c=a.n(l),i=a("Wbzz"),r=a("a/Iw"),o=a("jFb6"),u=a.n(o);t.a=function(e){var t=e.component,a=e.location,l=Object(n.a)(e,["component","location"]);return u.a.siteMetadata.authentication.enable?Object(r.c)()||"/account/login"===a.pathname?c.a.createElement(t,l):(Object(i.navigate)("/account/login"),null):(Object(i.navigate)("/"),null)}},QJnq:function(e,t,a){},"g1/l":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),c=a("a/Iw");t.a=function(e){var t=e.id,a=e.title,n=e.icon;return l.a.createElement("button",{id:t,onClick:function(e){e.preventDefault(),Object(c.b)(e)}},n," ",a)}},"jS/4":function(e,t,a){},tGlL:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),c=a("Wbzz"),i=a("YwZP"),r=a("DMD0"),o=a("ja1a"),u=a("qhky"),m=(a("QJnq"),{title:"Profile",description:"Profile stuff..."}),E=function(){var e=Object(n.useContext)(o.b);return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,{title:m.title}),l.a.createElement("div",{className:"content"},l.a.createElement("h2",null,m.title),l.a.createElement("ul",null,l.a.createElement("li",null,"Name: ",e.user.displayName),l.a.createElement("li",null,"Email: ",e.user.emails[0].value," (",e.user.emails[0].verified?"Verified":"Not verified",")"),l.a.createElement("li",null,"Language: ",e.user._json.locale))))};E.pageMeta=m;var s=E,f=a("g1/l"),d=a("jFb6"),p=a.n(d),g=a("IP2g"),b=a("8tEE"),v=(a("jS/4"),function(){return l.a.createElement(g.a,{icon:b.b})}),y=function(){return l.a.createElement(g.a,{icon:b.a})},j=function(){return l.a.createElement(g.a,{icon:b.e})},w=function(){return l.a.createElement(g.a,{icon:b.c})},h={title:"Login",description:"Login stuff..."},k=function(){return p.a.siteMetadata.authentication.enable?l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,{title:h.title}),l.a.createElement("div",{className:"box"},l.a.createElement("h2",null,h.title),l.a.createElement("p",null,"Select your prefered social account to log in:"),l.a.createElement(f.a,{id:"google",title:"Google",icon:l.a.createElement(v,null)}),l.a.createElement(f.a,{id:"facebook",title:"Facebook",icon:l.a.createElement(y,null)}),l.a.createElement(f.a,{id:"twitter",title:"Twitter",icon:l.a.createElement(j,null)}),l.a.createElement(f.a,{id:"linkedin",title:"LinkedIn",icon:l.a.createElement(w,null)}),l.a.createElement("p",null,l.a.createElement(c.Link,{id:"privacy",to:"/privacy-policy/"},"Privacy Policy")))):(Object(c.navigate)(-1),null)};k.pageMeta=h;var L=k,O={title:"Account",description:"Account stuff..."},P=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.Link,{to:"/account/profile"},"Profile")," / ",l.a.createElement(c.Link,{to:"/account/logout"},"Logout"))},M=function(e){e.pageContext;var t=Object(n.useContext)(o.b);return p.a.siteMetadata.authentication.enable?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"content",className:"container col"},l.a.createElement("div",{className:"content"},l.a.createElement("h1",null,O.title),t.authenticated?(t.user.displayName,l.a.createElement("p",null,l.a.createElement(P,null))):l.a.createElement("p",null,"By using our website, you agree with our ",l.a.createElement(c.Link,{to:"/privacy-policy/"},"Privacy Policy")," and ",l.a.createElement(c.Link,{to:"/terms-and-conditions/"},"Terms of service"),"."),l.a.createElement(i.Router,null,l.a.createElement(r.a,{exact:!0,path:"/account/profile",component:s}),l.a.createElement(L,{path:"/account/login"}))))):("undefined"!=typeof window&&Object(c.navigate)(-1),null)};M.pageMeta=O;t.default=M}}]);
//# sourceMappingURL=component---src-pages-account-jsx-dd647e1971c5a6a596f1.js.map