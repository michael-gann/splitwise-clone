(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},32:function(e,t,n){},40:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),r=(n(32),n(13)),i=n.n(r),o=n(4),u=n(8),l=n(2),d=n(6),j=(n(40),n(3)),b=n.n(j),O=n(7),m=n(28),x=n.n(m);function p(e){return h.apply(this,arguments)}function h(){return(h=Object(O.a)(b.a.mark((function e(t){var n,a,c,s,r=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=r.length>1&&void 0!==r[1]?r[1]:{}).method=n.method||"GET",n.headers=n.headers||{},"GET"!==n.method.toUpperCase()&&(n.headers["Content-Type"]=n.headers["Content-Type"]||"application/json",n.headers["XSRF-Token"]=x.a.get("XSRF-TOKEN")),e.next=6,window.fetch(t,n);case 6:if(a=e.sent,!(c=a.headers.get("content-type"))||!c.includes("application/json")){e.next=13;break}return e.next=11,a.json();case 11:s=e.sent,a.data=s;case 13:if(!(a.status>=400)){e.next=15;break}throw a;case 15:return e.abrupt("return",a);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f="session/setUser",v="session/removeUser",y=function(e){return{type:f,payload:e}},N=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:null},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case f:return(e=Object.assign({},t)).user=n.payload,e;case v:return(e=Object.assign({},t)).user=null,e;default:return t}},g=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.session.user})),n=Object(c.useState)([]),s=Object(l.a)(n,2),r=s[0],i=s[1],u=Object(c.useState)(""),j=Object(l.a)(u,2),m=j[0],x=j[1],h=Object(c.useState)(""),f=Object(l.a)(h,2),v=f[0],N=f[1];if(t)return Object(a.jsx)(d.a,{to:"/"});return Object(a.jsx)("div",{className:"main-container",children:Object(a.jsx)("form",{className:"login-form",onSubmit:function(t){return t.preventDefault(),i([]),e((n={credential:m,password:v},function(){var e=Object(O.a)(b.a.mark((function e(t){var a,c,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.credential,c=n.password,e.next=3,p("/api/session",{method:"POST",body:JSON.stringify({credential:a,password:c})});case 3:return s=e.sent,t(y(s.data.user)),e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())).catch((function(e){e.data&&e.data.errors&&i(e.data.errors)}));var n},children:Object(a.jsxs)("div",{className:"login-container",children:[Object(a.jsx)("ul",{className:"loginErrors-ul",children:r.map((function(e,t){return Object(a.jsx)("div",{className:"loginErrors-div",children:e},t)}))}),Object(a.jsxs)("div",{className:"usernamefields",children:[Object(a.jsx)("label",{children:"Username"}),Object(a.jsx)("input",{type:"text",name:"username",id:"username",placeholder:"i.e. John123",value:m,onChange:function(e){return x(e.target.value)}})]}),Object(a.jsxs)("div",{className:"passwordfields",children:[Object(a.jsx)("label",{children:"Password"}),Object(a.jsx)("input",{type:"password",name:"password",id:"password",value:v,onChange:function(e){return N(e.target.value)}})]}),Object(a.jsx)("button",{className:"login-button",type:"submit",children:"Log In"})]})})})},w=(n(43),function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.session.user})),n=Object(c.useState)([]),s=Object(l.a)(n,2),r=s[0],i=s[1],u=Object(c.useState)(""),j=Object(l.a)(u,2),m=j[0],x=j[1],h=Object(c.useState)(""),f=Object(l.a)(h,2),v=f[0],N=f[1],g=Object(c.useState)(""),w=Object(l.a)(g,2),S=w[0],k=w[1],C=Object(c.useState)(""),F=Object(l.a)(C,2),E=F[0],T=F[1];if(t)return Object(a.jsx)(d.a,{to:"/"});return Object(a.jsx)("div",{className:"main-container",children:Object(a.jsx)("form",{className:"signup-form",onSubmit:function(t){return t.preventDefault(),S===E?(i([]),e((n={email:v,username:m,password:S},function(){var e=Object(O.a)(b.a.mark((function e(t){var a,c,s,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.username,c=n.password,s=n.email,e.next=3,p("/api/users",{method:"POST",body:JSON.stringify({username:a,email:s,password:c})});case 3:return r=e.sent,t(y(r.data.user)),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())).catch((function(e){e.data&&e.data.errors&&i(e.data.errors)}))):i(["Password and Confirm Password must match"]);var n},children:Object(a.jsxs)("div",{className:"signup-container",children:[Object(a.jsx)("ul",{className:"signupErrors-ul",children:r.map((function(e,t){return Object(a.jsx)("div",{className:"signupErrors-div",children:e},t)}))}),Object(a.jsxs)("div",{className:"usernamefields",children:[Object(a.jsx)("label",{children:"Username"}),Object(a.jsx)("input",{type:"text",name:"username",id:"username",placeholder:"i.e. John123",value:m,onChange:function(e){return x(e.target.value)}})]}),Object(a.jsxs)("div",{className:"emailfields",children:[Object(a.jsx)("label",{children:"Email"}),Object(a.jsx)("input",{type:"email",name:"email",id:"email",value:v,placeholder:"example@example.com",onChange:function(e){return N(e.target.value)}})]}),Object(a.jsxs)("div",{className:"passwordfields",children:[Object(a.jsx)("label",{children:"Password"}),Object(a.jsx)("input",{type:"password",name:"password",id:"password",value:S,onChange:function(e){return k(e.target.value)}})]}),Object(a.jsxs)("div",{className:"confirm-passwordfields",children:[Object(a.jsx)("label",{children:"Confirm Password"}),Object(a.jsx)("input",{type:"password",name:"confirm-password",id:"confirm-password",value:E,onChange:function(e){return T(e.target.value)}})]}),Object(a.jsx)("button",{className:"signup-button",type:"submit",children:"Signup"})]})})})});var S=function(e){var t=e.user,n=Object(o.b)(),s=Object(c.useState)(!1),r=Object(l.a)(s,2),i=r[0],u=r[1];return Object(c.useEffect)((function(){if(i){var e=function(){u(!1)};return document.addEventListener("click",e),function(){return document.removeEventListener("click",e)}}}),[i]),Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("button",{className:"profile-link",onClick:function(){i||u(!0)},children:[Object(a.jsx)("i",{className:"fas fa-user-circle"}),i&&Object(a.jsxs)("ul",{className:"profile-dropdown",children:[Object(a.jsx)("div",{children:t.username}),Object(a.jsx)("div",{children:t.email}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{onClick:function(e){return e.preventDefault(),n(function(){var e=Object(O.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("/api/session",{method:"DELETE"});case 2:return n=e.sent,t({type:v}),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Object(a.jsx)(d.a,{to:"/"})},children:"Log Out"})})]})]})})},k=(n(44),n(24),n(45),"friends/all"),C=function(e){return{type:k,payload:e}},F=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{friends:null},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case k:return(e=Object.assign({},t)).friends=n.payload,e;default:return t}},E=(n(46),function(e){var t=e.friends;return t?Object(a.jsx)("div",{children:Object.values(t).map((function(e){return Object(a.jsx)("div",{className:"friend",children:e.username},e.username)}))}):null}),T=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.friends.friends})),n=Object(c.useState)(0),s=Object(l.a)(n,2),r=s[0],i=s[1],u=Object(c.useState)(""),d=Object(l.a)(u,2),j=d[0],m=d[1];Object(c.useEffect)((function(){return e(function(){var e=Object(O.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("/api/friends");case 2:return n=e.sent,console.log(n),t(C(n.data)),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e,r]);var x=function(){var e=Object(O.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,p("/api/friends",{method:"POST",header:{"Content-Type":"application/json"},body:JSON.stringify({friend:j})});case 3:if(n=e.sent,m(""),i(r+1),!n.data.success){e.next=10;break}return e.abrupt("return");case 10:return e.abrupt("return");case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"friend-container",children:[Object(a.jsx)("div",{className:"friend-title",children:"Friends"}),Object(a.jsx)(E,{friends:t}),Object(a.jsx)("div",{className:"add-friend-container",children:Object(a.jsxs)("form",{onSubmit:x,method:"post",type:"submit",children:[Object(a.jsx)("label",{children:Object(a.jsx)("input",{onChange:function(e){return m(e.target.value)},value:j,className:"add-friend-input",placeholder:"add a friend..."})}),Object(a.jsx)("button",{className:"add-button",type:"submit",children:"Add"})]})})]})},$=function(){return Object(a.jsxs)("div",{className:"options-div",children:[Object(a.jsx)("div",{className:"navlinks",children:Object(a.jsx)(u.b,{to:"/dashboard",children:"Dashboard"})}),Object(a.jsx)("div",{className:"navlinks",children:Object(a.jsx)(u.b,{to:"/activity",children:"Activity"})}),Object(a.jsx)("div",{className:"navlinks",children:Object(a.jsx)(u.b,{to:"/all",children:"All Expenses"})}),Object(a.jsx)(T,{})]})},B=function(e){var t=e.visible;return Object(a.jsx)("div",{id:"navbar",className:t?"slideIn":"slideOut",children:Object(a.jsx)($,{})})},I=function(e){var t,n=e.isLoaded,s=Object(o.c)((function(e){return e.session.user})),r=Object(c.useState)(!1),i=Object(l.a)(r,2),d=i[0],j=i[1];return t=s?Object(a.jsx)(S,{user:s}):Object(a.jsxs)("div",{className:"auth-links",children:[Object(a.jsx)(u.b,{className:"login-link",to:"/login",children:"Log In"}),Object(a.jsx)(u.b,{className:"signup-link",to:"/signup",children:"Sign Up"})]}),Object(a.jsxs)("nav",{className:"main-nav-container",children:[Object(a.jsxs)("div",{className:"sidebar-menu",children:[Object(a.jsx)("button",{onClick:function(){j((function(e){return!e}))},className:"sidebar",children:Object(a.jsx)("i",{className:"fas fa-bars"})}),Object(a.jsx)(B,{visible:d})]}),Object(a.jsx)("div",{className:"title",children:Object(a.jsx)("div",{children:Object(a.jsx)(u.b,{exact:!0,to:"/",children:Object(a.jsx)("div",{className:"logo",children:Object(a.jsx)("img",{alt:"splitease logo",src:"/images/splitease-logo.png"})})})})}),Object(a.jsx)("div",{children:Object(a.jsx)("div",{children:n&&t})})]})},P=(n(47),"transactions/balances"),D="transactions/activity",A="transactions/all",J=function(e){return{type:P,payload:e}},U=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{balances:null,activity:null,all:null},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case P:return(e=Object.assign({},t)).balances=n.payload,e;case D:return(e=Object.assign({},t)).activity=n.payload,e;case A:return(e=Object.assign({},t)).all=n.payload,e;default:return t}},L=function(e){var t=e.balances;return t?t&&Object(a.jsx)("div",{className:"youareowed-main-container",children:t.map((function(e,t){return Object(a.jsxs)("div",{className:"you-are-owed-container",children:[Object(a.jsx)("div",{children:e.name}),Object(a.jsx)("div",{children:"owes you $".concat(e.balance.toFixed(2))})]},t)}))}):null},R=function(e){var t=e.balances;return t?t&&Object(a.jsx)("div",{className:"you-owe-main-container",children:t.map((function(e,t){return Object(a.jsx)("div",{className:"you-owe-container",children:Object(a.jsx)("div",{children:"You owe ".concat(e.name," $").concat(-e.balance.toFixed(2))})},t)}))}):null},Y=(n(48),s.a.createContext());function G(e){var t=e.children,n=Object(c.useRef)(),s=Object(c.useState)(),r=Object(l.a)(s,2),i=r[0],o=r[1];return Object(c.useEffect)((function(){o(n.current)}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(Y.Provider,{value:i,children:t}),Object(a.jsx)("div",{ref:n})]})}function W(e){var t=e.onClose,n=e.children,s=Object(c.useContext)(Y);return s?i.a.createPortal(Object(a.jsxs)("div",{id:"modal",children:[Object(a.jsx)("div",{id:"modal-background",onClick:t}),Object(a.jsx)("div",{id:"modal-content",children:n})]}),s):null}var X=function(e){var t=e.onClose,n=e.setCount,s=e.count,r=Object(c.useState)([]),i=Object(l.a)(r,2),o=i[0],u=i[1],d=Object(c.useState)(""),j=Object(l.a)(d,2),m=j[0],x=j[1],h=Object(c.useState)(""),f=Object(l.a)(h,2),v=f[0],y=f[1],N=Object(c.useState)(""),g=Object(l.a)(N,2),w=g[0],S=g[1],k=Object(c.useState)(""),C=Object(l.a)(k,2),F=C[0],E=C[1],T=Object(c.useState)(""),$=Object(l.a)(T,2),B=$[0],I=$[1],P=function(){var e=Object(O.a)(b.a.mark((function e(a){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),u(m.split(", ")),c={users:o,title:v,amount:w,paidBy:F,date:B},e.next=5,p("/api/transactions/expense",{method:"POST",header:{"Content-Type":"application/json"},body:JSON.stringify({formData:c})});case 5:if(!e.sent.data.success){e.next=10;break}n(s+1),e.next=11;break;case 10:return e.abrupt("return");case 11:t();case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("form",{className:"main-expense-container",method:"post",onSubmit:P,children:[Object(a.jsx)("div",{className:"modal-title-container",children:Object(a.jsx)("div",{className:"add-expense",children:"Add an expense"})}),Object(a.jsxs)("div",{className:"select-users-container",children:[Object(a.jsx)("label",{children:"with you and"}),Object(a.jsx)("input",{value:m,onChange:function(e){return x(e.target.value)},onBlur:function(){return u(m.split(", "))},type:"text",placeholder:"enter name or email address"})]}),Object(a.jsxs)("div",{className:"description-container",children:[Object(a.jsx)("input",{value:v,onChange:function(e){return y(e.target.value)},placeholder:"enter a description"}),Object(a.jsxs)("div",{className:"amount-container",children:[Object(a.jsx)("label",{children:"$"}),Object(a.jsx)("input",{value:w,onChange:function(e){return S(e.target.value)},type:"text",placeholder:"0.00"})]})]}),Object(a.jsxs)("div",{className:"paid-by-container",children:[Object(a.jsxs)("div",{className:"paid-by",children:[Object(a.jsx)("label",{children:"Paid by: "}),Object(a.jsx)("input",{value:F,onChange:function(e){return E(e.target.value)},type:"text"})]}),Object(a.jsx)("div",{className:"split-evenly",children:"Transaction will be split evenly"}),Object(a.jsx)("label",{}),Object(a.jsx)("input",{value:B,onChange:function(e){return I(e.target.value)},type:"date"})]}),Object(a.jsxs)("div",{className:"footer-buttons-container",children:[Object(a.jsx)("button",{className:"cancel",onClick:function(){return t()},children:"Cancel"}),Object(a.jsx)("button",{className:"save",type:"submit",children:"Save"})]})]})};n(49);var K=function(e){var t=e.setCount,n=e.count,s=Object(c.useState)(!1),r=Object(l.a)(s,2),i=r[0],o=r[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("button",{className:"add-expense-button",onClick:function(){return o(!0)},children:"Add an expense"}),i&&Object(a.jsx)(W,{onClose:function(){return o(!1)},children:Object(a.jsx)(X,{setCount:t,count:n,onClose:function(){return o(!1)}})})]})},M=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.session.user})),n=Object(o.c)((function(e){return e.balances})),s=Object(c.useState)(0),r=Object(l.a)(s,2),i=r[0],u=r[1],j=Object(c.useState)(0),m=Object(l.a)(j,2),x=m[0],h=m[1],f=Object(c.useState)([]),v=Object(l.a)(f,2),y=v[0],N=v[1],g=Object(c.useState)([]),w=Object(l.a)(g,2),S=w[0],k=w[1],C=Object(c.useState)({}),F=Object(l.a)(C,2),E=(F[0],F[1]),T=Object(c.useState)({}),$=Object(l.a)(T,2),B=($[0],$[1]),I=Object(c.useState)(0),P=Object(l.a)(I,2),D=P[0],A=P[1];return Object(c.useEffect)((function(){return e(function(){var e=Object(O.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("/api/transactions/balances");case 2:return n=e.sent,t(J(n.data)),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e,D]),Object(c.useEffect)((function(){var e,t,a,c,s,r,i={},o={};!function(){if(n.balances){for(var u in a=n.balances.balancesByUserId,c=n.balances.usersById,a)a[u]<0&&(i[u]={balance:a[u],name:c[u].username}),a[u]>0&&(o[u]={balance:a[u],name:c[u].username});t=Object.values(i),e=Object.values(o),t&&(s=t.reduce((function(e,t){return e+t.balance}),0)),e&&(r=e.reduce((function(e,t){return e+t.balance}),0))}}(),E(i),B(o),u(s),h(r),N(t),k(e)}),[n.balances]),t?Object(a.jsx)("div",{className:"wrapper",children:Object(a.jsxs)("div",{className:"dashboard-container",children:[Object(a.jsxs)("div",{className:"title-container",children:[Object(a.jsx)("div",{className:"dashboard-title",children:"Dashboard"}),Object(a.jsx)("div",{className:"button-container",children:Object(a.jsx)(K,{setCount:A,count:D})})]}),Object(a.jsxs)("div",{className:"balances-container",children:[Object(a.jsxs)("div",{className:"totals-container",children:[Object(a.jsx)("div",{children:"total balance"}),Object(a.jsx)("div",{className:"".concat(x+i>0?"positive":"negative"),children:"$".concat((x+i>0?x+i:-(x+i)).toFixed(2))})]}),Object(a.jsxs)("div",{className:"totals-container",children:[Object(a.jsx)("div",{children:"you owe"}),Object(a.jsx)("div",{className:"".concat(-i>0?"negative":"positive"),children:"$".concat((-i).toFixed(2))})]}),Object(a.jsxs)("div",{className:"totals-container",children:[Object(a.jsx)("div",{children:"you are owed"}),Object(a.jsx)("div",{className:"".concat(x>0?"positive":"negative"),children:"$".concat(x?x.toFixed(2):x)})]})]}),Object(a.jsxs)("div",{className:"owe-or-owed-container",children:[Object(a.jsx)("div",{className:"owe",children:"YOU OWE"}),Object(a.jsx)("div",{className:"owed",children:"YOU ARE OWED"})]}),Object(a.jsxs)("div",{className:"list-detail-container",children:[Object(a.jsx)(R,{balances:y}),Object(a.jsx)(L,{balances:S})]})]})}):Object(a.jsx)(d.a,{to:"/"})},q=(n(25),function(e){var t=e.txn,n=e.user;return Object(a.jsx)(a.Fragment,{children:t.amount>0&&t.createdBy!==n.username?Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"recent-activity-items",children:"".concat(t.createdBy," added ").concat(t.title," and you get back $").concat(t.amount.toFixed(2))})}):Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"recent-activity-items",children:"".concat(n.username!==t.createdBy?t.createdBy+" added":"you added"," ").concat(t.title," and you ").concat(t.amount<0?"owe":"get back"," $").concat(t.amount<0?-t.amount.toFixed(2):t.amount.toFixed(2))})})})}),z=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.balances.activity})),n=Object(o.c)((function(e){return e.session.user}));return Object(c.useEffect)((function(){return e(function(){var e=Object(O.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("/api/transactions/activity");case 2:return n=e.sent,t((a=n.data,{type:D,payload:a})),e.abrupt("return",n);case 5:case"end":return e.stop()}var a}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(c.useEffect)((function(){t&&console.log(t)}),[t]),n?t?Object(a.jsx)("div",{className:"main-wrapper",children:Object(a.jsxs)("div",{className:"activity-wrapper",children:[Object(a.jsx)("div",{className:"recent-activity-title",children:"Recent Activity"}),Object(a.jsx)("div",{className:"recent-activity",children:Object(a.jsx)(a.Fragment,{children:t.map((function(e,t){return Object(a.jsx)(q,{txn:e,user:n},t)}))})})]})}):null:Object(a.jsx)(d.a,{to:"/"})},H=(n(26),function(e){var t=e.transactionId,n=e.comments;return n?Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{children:n[t].map((function(e){return Object(a.jsxs)("div",{className:"comment-wrapper",children:[Object(a.jsx)("div",{className:"comment-content",children:e.content}),Object(a.jsx)("div",{className:"comment-user",children:e.user.username})]},e.content)}))})}):null}),Q="comments/all",V=function(e){return{type:Q,payload:e}},Z=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{comments:null},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case Q:return(e=Object.assign({},t)).comments=n.payload,e;default:return t}},_=function(e){var t=e.expense,n=e.user,s=e.tid,r=Object(o.b)(),i=Object(c.useState)(""),u=Object(l.a)(i,2),d=u[0],j=u[1],m=Object(c.useState)(0),x=Object(l.a)(m,2),h=x[0],f=x[1],v=Object(o.c)((function(e){return e.comments.comments}));Object(c.useEffect)((function(){return r(function(){var e=Object(O.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("/api/comments/all");case 2:return n=e.sent,t(V(n.data)),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[r,h]);var y=function(){var e=Object(O.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,p("/api/comments",{method:"POST",header:{"Content-Type":"application/json"},body:JSON.stringify({formData:{comment:d,transactionId:s}})});case 3:(function(){j(""),v&&f(Object.values(v).length)})();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"detail-container",children:[Object(a.jsxs)("div",{className:"detail-title-container",children:[Object(a.jsx)("div",{className:"detail-title",children:t.title}),Object(a.jsx)("div",{className:"detail-amount",children:"$".concat(parseFloat(t.total).toFixed(2))}),Object(a.jsx)("div",{className:"createdby",children:"Added by ".concat(t.createdBy," on ").concat(t.date.month," ").concat(t.date.day,", ").concat(t.date.year)})]}),Object(a.jsxs)("div",{className:"below-title-container",children:[Object(a.jsx)("div",{className:"detail-users-container",children:t.userShares.map((function(e){return Object(a.jsx)("div",{className:"detail-users",children:e.username!==n.username?"".concat(e.username," owes $").concat(e.amount.toFixed(2)):"".concat(e.username," paid $").concat(e.amount," and owes $").concat(parseFloat(e.share).toFixed(2))},e.username)}))}),Object(a.jsxs)("div",{className:"detail-comments-container",children:[Object(a.jsx)(H,{comments:v,transactionId:s}),Object(a.jsxs)("form",{className:"comment-form",onSubmit:y,method:"post",children:[Object(a.jsx)("textarea",{onChange:function(e){return j(e.target.value)},value:d,placeholder:"Add a comment"}),Object(a.jsx)("button",{type:"sumbit",children:"Submit"})]})]})]})]})})},ee=function(e){var t=e.expense,n=e.user,s=e.tid,r=Object(c.useState)(!1),i=Object(l.a)(r,2),o=i[0],u=i[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"expense-details",children:Object(a.jsxs)("div",{onClick:function(){u((function(e){return!e}))},className:"expense-details-inner",children:[Object(a.jsxs)("div",{className:"date-title-container",children:[Object(a.jsxs)("div",{className:"date",children:[Object(a.jsx)("div",{className:"month",children:t.date.month}),Object(a.jsx)("div",{className:"day",children:t.date.day})]}),Object(a.jsx)("div",{className:"expense-title",children:t.title})]}),Object(a.jsx)("div",{className:"expenses-container",children:Object(a.jsxs)("div",{className:"expense-paid-by-container",children:[Object(a.jsx)("div",{className:"expense-paid-by",children:t.paidBy!==n.username?"".concat(t.paidBy," paid"):"you paid"}),Object(a.jsx)("div",{className:"expense-total",children:"$".concat(parseFloat(t.total).toFixed(2))})]})}),Object(a.jsx)("div",{className:"user-info-container",children:t.paidBy!==n.username?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"user-info",children:"".concat(t.paidBy," lent you ")}),Object(a.jsx)("div",{className:"amount-owe",children:"$".concat(t.userShares.find((function(e){return e.userId===n.id})).amount.toFixed(2))})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"user-info",children:"you get back "}),Object(a.jsx)("div",{className:"amount-owed",children:"$".concat(t.userShares.find((function(e){return e.userId===n.id})).amount.toFixed(2))})]})})]})}),o&&Object(a.jsx)(_,{tid:s,expense:t,user:n})]})},te=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.balances.all})),n=Object(o.c)((function(e){return e.session.user})),s=Object(c.useState)([]),r=Object(l.a)(s,2),i=r[0],u=r[1];return Object(c.useEffect)((function(){return e(function(){var e=Object(O.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("/api/transactions/all");case 2:return n=e.sent,t((a=n.data,{type:A,payload:a})),e.abrupt("return",n);case 5:case"end":return e.stop()}var a}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(c.useEffect)((function(){t&&u(t.result)}),[t]),n?Object(a.jsx)("div",{className:"wrapper",children:Object(a.jsxs)("div",{className:"all-expenses-container",children:[Object(a.jsx)("div",{className:"expenses-title",children:"All Expenses"}),Object(a.jsx)("div",{className:"expense-detail",children:i?i.map((function(e){return Object(a.jsx)(ee,{id:"expense-detail",tid:e.transactionId,const:!0,expense:e,user:n},e.transactionId)})):Object(a.jsx)("div",{children:"loading"})})]})}):Object(a.jsx)(d.a,{to:"/"})};var ne,ae=function(){var e=Object(o.b)(),t=Object(c.useState)(!1),n=Object(l.a)(t,2),s=n[0],r=n[1];return Object(c.useEffect)((function(){e(function(){var e=Object(O.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("/api/session");case 2:return n=e.sent,t(y(n.data.user)),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(){return r(!0)}))}),[e]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(I,{isLoaded:s}),s&&Object(a.jsxs)(d.d,{children:[Object(a.jsx)(d.b,{path:"/login",children:Object(a.jsx)(g,{})}),Object(a.jsx)(d.b,{path:"/signup",children:Object(a.jsx)(w,{})}),Object(a.jsx)(d.b,{path:"/dashboard",children:Object(a.jsx)(M,{})}),Object(a.jsx)(d.b,{path:"/activity",children:Object(a.jsx)(z,{})}),Object(a.jsx)(d.b,{path:"/all",children:Object(a.jsx)(te,{})})]})]})},ce=n(15),se=n(29),re=Object(ce.c)({session:N,balances:U,comments:Z,friends:F});ne=Object(ce.a)(se.a);var ie=function(e){return Object(ce.d)(re,e,ne)}();var oe=function(){return Object(a.jsx)(o.a,{store:ie,children:Object(a.jsx)(u.a,{children:Object(a.jsx)(G,{children:Object(a.jsx)(ae,{})})})})};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(oe,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.c66d3397.chunk.js.map