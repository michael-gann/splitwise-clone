(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},31:function(e,t,n){},39:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n.n(a),r=(n(31),n(13)),i=n.n(r),o=n(4),l=n(10),d=n(3),u=n(5),j=(n(39),n(6)),b=n.n(j),O=n(12),x=n(27),h=n.n(x);function v(e){return m.apply(this,arguments)}function m(){return(m=Object(O.a)(b.a.mark((function e(t){var n,c,a,s,r=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=r.length>1&&void 0!==r[1]?r[1]:{}).method=n.method||"GET",n.headers=n.headers||{},"GET"!==n.method.toUpperCase()&&(n.headers["Content-Type"]=n.headers["Content-Type"]||"application/json",n.headers["XSRF-Token"]=h.a.get("XSRF-TOKEN")),e.next=6,window.fetch(t,n);case 6:if(c=e.sent,!(a=c.headers.get("content-type"))||!a.includes("application/json")){e.next=13;break}return e.next=11,c.json();case 11:s=e.sent,c.data=s;case 13:if(!(c.status>=400)){e.next=15;break}throw c;case 15:return e.abrupt("return",c);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var p="session/setUser",f="session/removeUser",y=function(e){return{type:p,payload:e}},g=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:null},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case p:return(e=Object.assign({},t)).user=n.payload,e;case f:return(e=Object.assign({},t)).user=null,e;default:return t}},N=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.session.user})),n=Object(a.useState)([]),s=Object(d.a)(n,2),r=s[0],i=s[1],l=Object(a.useState)(""),j=Object(d.a)(l,2),x=j[0],h=j[1],m=Object(a.useState)(""),p=Object(d.a)(m,2),f=p[0],g=p[1];if(t)return Object(c.jsx)(u.a,{to:"/"});return Object(c.jsx)("div",{className:"main-container",children:Object(c.jsx)("form",{className:"login-form",onSubmit:function(t){return t.preventDefault(),i([]),e((n={credential:x,password:f},function(){var e=Object(O.a)(b.a.mark((function e(t){var c,a,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.credential,a=n.password,e.next=3,v("/api/session",{method:"POST",body:JSON.stringify({credential:c,password:a})});case 3:return s=e.sent,t(y(s.data.user)),e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())).catch((function(e){e.data&&e.data.errors&&i(e.data.errors)}));var n},children:Object(c.jsxs)("div",{className:"login-container",children:[Object(c.jsx)("ul",{className:"loginErrors-ul",children:r.map((function(e,t){return Object(c.jsx)("div",{className:"loginErrors-div",children:e},t)}))}),Object(c.jsxs)("div",{className:"usernamefields",children:[Object(c.jsx)("label",{children:"Username"}),Object(c.jsx)("input",{type:"text",name:"username",id:"username",placeholder:"i.e. John123",value:x,onChange:function(e){return h(e.target.value)}})]}),Object(c.jsxs)("div",{className:"passwordfields",children:[Object(c.jsx)("label",{children:"Password"}),Object(c.jsx)("input",{type:"password",name:"password",id:"password",value:f,onChange:function(e){return g(e.target.value)}})]}),Object(c.jsx)("button",{className:"login-button",type:"submit",children:"Log In"})]})})})},w=(n(42),function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.session.user})),n=Object(a.useState)([]),s=Object(d.a)(n,2),r=s[0],i=s[1],l=Object(a.useState)(""),j=Object(d.a)(l,2),x=j[0],h=j[1],m=Object(a.useState)(""),p=Object(d.a)(m,2),f=p[0],g=p[1],N=Object(a.useState)(""),w=Object(d.a)(N,2),S=w[0],k=w[1],C=Object(a.useState)(""),E=Object(d.a)(C,2),F=E[0],P=E[1];if(t)return Object(c.jsx)(u.a,{to:"/"});return Object(c.jsx)("div",{className:"main-container",children:Object(c.jsx)("form",{className:"signup-form",onSubmit:function(t){return t.preventDefault(),S===F?(i([]),e((n={email:f,username:x,password:S},function(){var e=Object(O.a)(b.a.mark((function e(t){var c,a,s,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.username,a=n.password,s=n.email,e.next=3,v("/api/users",{method:"POST",body:JSON.stringify({username:c,email:s,password:a})});case 3:return r=e.sent,t(y(r.data.user)),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())).catch((function(e){e.data&&e.data.errors&&i(e.data.errors)}))):i(["Password and Confirm Password must match"]);var n},children:Object(c.jsxs)("div",{className:"signup-container",children:[Object(c.jsx)("ul",{className:"signupErrors-ul",children:r.map((function(e,t){return Object(c.jsx)("div",{className:"signupErrors-div",children:e},t)}))}),Object(c.jsxs)("div",{className:"usernamefields",children:[Object(c.jsx)("label",{children:"Username"}),Object(c.jsx)("input",{type:"text",name:"username",id:"username",placeholder:"i.e. John123",value:x,onChange:function(e){return h(e.target.value)}})]}),Object(c.jsxs)("div",{className:"emailfields",children:[Object(c.jsx)("label",{children:"Email"}),Object(c.jsx)("input",{type:"email",name:"email",id:"email",value:f,placeholder:"example@example.com",onChange:function(e){return g(e.target.value)}})]}),Object(c.jsxs)("div",{className:"passwordfields",children:[Object(c.jsx)("label",{children:"Password"}),Object(c.jsx)("input",{type:"password",name:"password",id:"password",value:S,onChange:function(e){return k(e.target.value)}})]}),Object(c.jsxs)("div",{className:"confirm-passwordfields",children:[Object(c.jsx)("label",{children:"Confirm Password"}),Object(c.jsx)("input",{type:"password",name:"confirm-password",id:"confirm-password",value:F,onChange:function(e){return P(e.target.value)}})]}),Object(c.jsx)("button",{className:"signup-button",type:"submit",children:"Signup"})]})})})});var S=function(e){var t=e.user,n=Object(o.b)(),s=Object(a.useState)(!1),r=Object(d.a)(s,2),i=r[0],l=r[1];return Object(a.useEffect)((function(){if(i){var e=function(){l(!1)};return document.addEventListener("click",e),function(){return document.removeEventListener("click",e)}}}),[i]),Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("button",{className:"profile-link",onClick:function(){i||l(!0)},children:[Object(c.jsx)("i",{className:"fas fa-user-circle"}),i&&Object(c.jsxs)("ul",{className:"profile-dropdown",children:[Object(c.jsx)("li",{children:t.username}),Object(c.jsx)("li",{children:t.email}),Object(c.jsx)("li",{children:Object(c.jsx)("div",{onClick:function(e){e.preventDefault(),n(function(){var e=Object(O.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v("/api/session",{method:"DELETE"});case 2:return n=e.sent,t({type:f}),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Log Out"})})]})]})})},k=(n(43),n(24),function(){return Object(c.jsxs)("div",{className:"options-div",children:[Object(c.jsx)("div",{children:Object(c.jsx)(l.b,{to:"/dashboard",children:"Dashboard"})}),Object(c.jsx)("div",{children:Object(c.jsx)(l.b,{to:"/activity",children:"Activity"})})]})}),C=function(e){var t=e.visible;return Object(c.jsx)("div",{id:"navbar",className:t?"slideIn":"slideOut",children:Object(c.jsx)(k,{})})},E=function(e){var t,n=e.isLoaded,s=Object(o.c)((function(e){return e.session.user})),r=Object(a.useState)(!1),i=Object(d.a)(r,2),u=i[0],j=i[1];return t=s?Object(c.jsx)(S,{user:s}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(l.b,{className:"login-link",to:"/login",children:"Log In"}),Object(c.jsx)(l.b,{className:"signup-link",to:"/signup",children:"Sign Up"})]}),Object(c.jsxs)("nav",{className:"main-nav-container",children:[Object(c.jsxs)("div",{className:"sidebar-menu",children:[Object(c.jsx)("button",{onClick:function(e){j((function(e){return!e}))},className:"sidebar",children:Object(c.jsx)("i",{className:"fas fa-bars"})}),Object(c.jsx)(C,{visible:u})]}),Object(c.jsx)("div",{className:"title",children:Object(c.jsx)("div",{children:Object(c.jsx)(l.b,{exact:!0,to:"/",children:Object(c.jsx)("div",{className:"logo",children:Object(c.jsx)("img",{alt:"splitease logo",src:"/images/splitease-logo.png"})})})})}),Object(c.jsx)("div",{children:Object(c.jsx)("div",{children:n&&t})})]})},F=(n(44),"transactions/balances"),P="transactions/all",T=function(e){return{type:F,payload:e}},B=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{balances:null,activity:null},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case F:return(e=Object.assign({},t)).balances=n.payload,e;case P:return(e=Object.assign({},t)).activity=n.payload,e;default:return t}},D=function(e){var t=e.balances;return t?t&&Object(c.jsx)("div",{className:"youareowed-main-container",children:t.map((function(e,t){return Object(c.jsxs)("div",{className:"you-are-owed-container",children:[Object(c.jsx)("div",{children:e.name}),Object(c.jsx)("div",{children:"owes you $".concat(e.balance.toFixed(2))})]},t)}))}):null},L=function(e){var t=e.balances;return t?t&&Object(c.jsx)("div",{className:"you-owe-main-container",children:t.map((function(e,t){return Object(c.jsx)("div",{className:"you-owe-container",children:Object(c.jsx)("div",{children:"You owe ".concat(e.name," ").concat(-e.balance.toFixed(2))})},t)}))}):null},U=(n(45),s.a.createContext());function A(e){var t=e.children,n=Object(a.useRef)(),s=Object(a.useState)(),r=Object(d.a)(s,2),i=r[0],o=r[1];return Object(a.useEffect)((function(){o(n.current)}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(U.Provider,{value:i,children:t}),Object(c.jsx)("div",{ref:n})]})}function $(e){var t=e.onClose,n=e.children,s=Object(a.useContext)(U);return s?i.a.createPortal(Object(c.jsxs)("div",{id:"modal",children:[Object(c.jsx)("div",{id:"modal-background",onClick:t}),Object(c.jsx)("div",{id:"modal-content",children:n})]}),s):null}var I=function(e){var t=e.onClose,n=new Date,a=n.getMonth(),s=n.getDate(),r=n.getFullYear();return Object(c.jsxs)("div",{className:"main-expense-container",children:[Object(c.jsxs)("div",{className:"modal-title-container",children:[Object(c.jsx)("div",{className:"add-expense",children:"Add an expense"}),Object(c.jsx)("div",{className:"x-close",children:"x"})]}),Object(c.jsxs)("div",{className:"select-users-container",children:[Object(c.jsx)("label",{children:"with you and"}),Object(c.jsx)("input",{type:"text",placeholder:"enter name or email address"})]}),Object(c.jsxs)("div",{className:"description-container",children:[Object(c.jsx)("input",{placeholder:"enter a description"}),Object(c.jsxs)("div",{className:"amount-container",children:[Object(c.jsx)("label",{children:"$"}),Object(c.jsx)("input",{type:"text",placeholder:"0.00"})]})]}),Object(c.jsxs)("div",{className:"paid-by-container",children:[Object(c.jsxs)("div",{className:"paid-by",children:[Object(c.jsx)("div",{children:"paid by"}),Object(c.jsxs)("select",{children:["Paid By",Object(c.jsx)("option",{})]})]}),Object(c.jsx)("div",{children:"Transaction will be split evenly"}),Object(c.jsx)("div",{children:"".concat(a+"-"+s+"-"+r)})]}),Object(c.jsxs)("div",{className:"footer-buttons-container",children:[Object(c.jsx)("button",{onClick:function(){return t()},children:"Cancel"}),Object(c.jsx)("button",{children:"Save"})]})]})};n(46);var J=function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),n=t[0],s=t[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("button",{className:"add-expense-button",onClick:function(){return s(!0)},children:"Add an expense"}),n&&Object(c.jsx)($,{onClose:function(){return s(!1)},children:Object(c.jsx)(I,{onClose:function(){return s(!1)}})})]})},R=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.balances})),n=Object(a.useState)(0),s=Object(d.a)(n,2),r=s[0],i=s[1],l=Object(a.useState)(0),u=Object(d.a)(l,2),j=u[0],x=u[1],h=Object(a.useState)([]),m=Object(d.a)(h,2),p=m[0],f=m[1],y=Object(a.useState)([]),g=Object(d.a)(y,2),N=g[0],w=g[1],S=Object(a.useState)({}),k=Object(d.a)(S,2),C=(k[0],k[1]),E=Object(a.useState)({}),F=Object(d.a)(E,2),P=(F[0],F[1]);return Object(a.useEffect)((function(){return e(function(){var e=Object(O.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v("/api/transactions/balances");case 2:return n=e.sent,t(T(n.data)),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(a.useEffect)((function(){var e,n,c,a,s,r,o={},l={};!function(){if(t.balances){for(var i in c=t.balances.balancesByUserId,console.log("first balances",c),a=t.balances.usersById,c)c[i]<0&&(o[i]={balance:c[i],name:a[i].username}),c[i]>0&&(l[i]={balance:c[i],name:a[i].username});n=Object.values(o),e=Object.values(l),n&&(s=n.reduce((function(e,t){return e+t.balance}),0)),e&&(r=e.reduce((function(e,t){return e+t.balance}),0))}}(),C(o),P(l),i(s),x(r),f(n),w(e),console.log("owe'-----",o),console.log("owed'-----",l),console.log("BALANCES!---------",c)}),[t.balances]),Object(c.jsx)("div",{className:"wrapper",children:Object(c.jsxs)("div",{className:"dashboard-container",children:[Object(c.jsxs)("div",{className:"title-container",children:[Object(c.jsx)("div",{className:"dashboard-title",children:"Dashboard"}),Object(c.jsx)("div",{className:"button-container",children:Object(c.jsx)(J,{})})]}),Object(c.jsxs)("div",{className:"balances-container",children:[Object(c.jsxs)("div",{className:"totals-container",children:[Object(c.jsx)("div",{children:"total balance"}),Object(c.jsx)("div",{className:"balance-total",children:"$".concat((j+r).toFixed(2))})]}),Object(c.jsxs)("div",{className:"totals-container",children:[Object(c.jsx)("div",{children:"you owe"}),Object(c.jsx)("div",{className:"owe-total",children:"$".concat((-r).toFixed(2))})]}),Object(c.jsxs)("div",{className:"totals-container",children:[Object(c.jsx)("div",{children:"you are owed"}),Object(c.jsx)("div",{className:"owed-total",children:"$".concat(j.toFixed(2))})]})]}),Object(c.jsxs)("div",{className:"owe-or-owed-container",children:[Object(c.jsx)("div",{className:"owe",children:"YOU OWE"}),Object(c.jsx)("div",{className:"owed",children:"YOU ARE OWED"})]}),Object(c.jsxs)("div",{className:"list-detail-container",children:[Object(c.jsx)(L,{balances:p}),Object(c.jsx)(D,{balances:N})]})]})})},Y=(n(25),function(e){var t=e.txn,n=Object(o.c)((function(e){return e.session.user}));return t?Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{children:t.map((function(e,t){return e.amount>0&&e.createdBy!==n.username?Object(c.jsx)("div",{children:"".concat(e.createdBy," added ").concat(e.title," and you get back $").concat(e.amount.toFixed(2))},t):Object(c.jsx)("div",{children:"".concat(n.username!==e.createdBy?e.createdBy+" added":"you added"," ").concat(e.title," and you ").concat(e.amount<0?"owe":"get back"," $").concat(e.amount<0?-e.amount:e.amount)},t)}))})}):null}),G=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.balances.activity}));Object(o.c)((function(e){return e.session.user}));return Object(a.useEffect)((function(){return e(function(){var e=Object(O.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v("/api/transactions/activity");case 2:return n=e.sent,t((c=n.data,{type:P,payload:c})),e.abrupt("return",n);case 5:case"end":return e.stop()}var c}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(a.useEffect)((function(){t&&console.log(t)}),[t]),Object(c.jsx)("div",{className:"main-wrapper",children:Object(c.jsxs)("div",{className:"activity-wrapper",children:[Object(c.jsx)("div",{className:"recent-activity-title",children:"Recent Activity"}),Object(c.jsx)("div",{className:"recent-activity",children:Object(c.jsx)(Y,{txn:t})})]})})};var M,W=function(){var e=Object(o.b)(),t=Object(a.useState)(!1),n=Object(d.a)(t,2),s=n[0],r=n[1];return Object(a.useEffect)((function(){e(function(){var e=Object(O.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v("/api/session");case 2:return n=e.sent,t(y(n.data.user)),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(){return r(!0)}))}),[e]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(E,{isLoaded:s}),s&&Object(c.jsxs)(u.d,{children:[Object(c.jsx)(u.b,{path:"/login",children:Object(c.jsx)(N,{})}),Object(c.jsx)(u.b,{path:"/signup",children:Object(c.jsx)(w,{})}),Object(c.jsx)(u.b,{path:"/dashboard",children:Object(c.jsx)(R,{})}),Object(c.jsx)(u.b,{path:"/activity",children:Object(c.jsx)(G,{})})]})]})},X=n(15),K=n(28),q=Object(X.c)({session:g,balances:B});M=Object(X.a)(K.a);var z=function(e){return Object(X.d)(q,e,M)}();var H=function(){return Object(c.jsx)(o.a,{store:z,children:Object(c.jsx)(l.a,{children:Object(c.jsx)(A,{children:Object(c.jsx)(W,{})})})})};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(H,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.65f2c620.chunk.js.map