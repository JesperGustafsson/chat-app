(this["webpackJsonpchat-app"]=this["webpackJsonpchat-app"]||[]).push([[0],{39:function(n,e,t){"use strict";t.r(e);var a,o,i,r,c,d,s,b,l,u=t(2),p=t.n(u),h=t(26),g=t.n(h),j=t(13),m=t.n(j),x=t(14),O=t(12),f=t(11),v=t(5),w=(t(25),t(23),t(24),t(15)),k=t(16),y=t(10),I=y.b.button(a||(a=Object(f.a)(["\n    border: none;\n    padding: 0;\n    margin: 0;\n    :hover {\n        background-color: white;\n    }\n\n"]))),S=y.b.div(o||(o=Object(f.a)(["\n    background-color: #333333;\n\n    border: 1px solid;\n\n    width: 400px;\n    height: 700px;\n    margin: 1em auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    box-shadow: 0.25em 0.25em 20px black;\n\n    @media (max-width: 600px) {\n        width: 100vw; //Need to do something about address/scrollbar\n        width: -moz-available; //Firefox\n        width: -webkit-fill-available; //Chrome\n        height: 100vh; //Need to do something about address/scrollbar\n        width: -moz-available; //Firefox\n        width: -webkit-fill-available; //Chrome\n        margin: auto auto;\n        padding: 0;\n        border: 0;\n    }\n"]))),E=y.b.div(i||(i=Object(f.a)(["\n    background-color: #666666;\n    line-height: 2em;\n    text-align: center;\n    font-weight: 900;\n    font-size: 24px;\n    border-bottom: solid 1px;\n    \n\n"]))),A=y.b.div(r||(r=Object(f.a)(["\n    max-width: 75%;\n    word-break: break-all;\n    margin-top: 0.125em;\n    margin-bottom: 0.125em;\n    padding: 0.50em 1em;\n    border-radius: 15px;\n"]))),C=Object(y.b)(A)(c||(c=Object(f.a)(["\n\n    background-color: #559955;\n    text-align: right;\n    margin-left: auto;\n\n"]))),F=Object(y.b)(A)(d||(d=Object(f.a)(["\n    background-color: #555599;\n    margin-right: auto;\n"]))),z=y.b.div(s||(s=Object(f.a)(["\n    overflow-y: scroll;\n    height: 100%;\n    display: flex;\n    flex-direction: column-reverse;\n    padding-left: 1em;\n    padding-right: 1em;\n    padding-bottom: 1em;\n    padding-top: 1em; //not working lol\n"]))),G=y.b.form(b||(b=Object(f.a)(["\n    background-color: #559955;  \n    display: flex;\n    height: 3em;\n    justify-content: space-between;\n\n    >input {\n        width: 66%;\n        padding: 0em 0.5em;\n        font-size: 20px;\n        border: none;\n        background-color: transparent;\n        outline: none;\n    }\n    >Button {\n        width: 33%;\n        font-weight: 900;\n        border: none;\n        background-color: rgba(0, 0, 0, 0.2);\n    }\n"]))),R=t(1);v.a.apps.length?v.a.app():v.a.initializeApp({apiKey:"AIzaSyDxvOgQi_rEneoxRi9Iag75b-Oy-vLbCaI",authDomain:"chat-app-18404.firebaseapp.com",projectId:"chat-app-18404",storageBucket:"chat-app-18404.appspot.com",messagingSenderId:"1020225808869",appId:"1:1020225808869:web:fc9b3c705cde795d54e70c",measurementId:"G-7EXTG0ETER"});var D=v.a.auth(),B=v.a.firestore(),T=(v.a.analytics(),Object(y.a)(l||(l=Object(f.a)(["\n  body {\n    background-color: #191919;  \n    margin: 0;\n  }\n"])))),L=function(){return Object(R.jsxs)(R.Fragment,{children:["    ",Object(R.jsx)("button",{onClick:function(){var n=new v.a.auth.GoogleAuthProvider;D.signInWithPopup(n)},children:"Sign in with Google"}),Object(R.jsx)("button",{onClick:function(){var n=new v.a.auth.FacebookAuthProvider;D.signInWithPopup(n)},children:"Sign in with Facebook"}),Object(R.jsx)("button",{onClick:function(){v.a.auth().signInAnonymously()},children:"Sign in Anonymously"})]})},P=function(){var n=Object(u.useRef)(),e=B.collection("messages"),t=e.orderBy("createdAt","desc").limit(25),a=Object(k.a)(t,{idField:"id"}),o=Object(O.a)(a,1)[0],i=Object(u.useState)(""),r=Object(O.a)(i,2),c=r[0],d=r[1];console.log(o);var s=function(){var t=Object(x.a)(m.a.mark((function t(a){var o,i,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),console.log("sendmessage!"),o=D.currentUser,i=o.uid,r=o.photoURL,t.next=5,e.add({text:c,createdAt:v.a.firestore.FieldValue.serverTimestamp(),uid:i,photoURL:r});case 5:d(""),n.current.scrollIntoView({behavior:"smooth"});case 7:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsxs)(z,{children:[Object(R.jsx)("span",{ref:n}),o&&o.map((function(n){return Object(R.jsx)(U,{message:n},n.id)}))]}),Object(R.jsx)("div",{children:Object(R.jsxs)(G,{onSubmit:s,children:[Object(R.jsx)("input",{placeholder:"write something here...",value:c,onChange:function(n){return d(n.target.value)}}),Object(R.jsx)("button",{type:"submit",disabled:!c,children:"SEND MESSAGE!"})]})})]})},U=function(n){var e=n.message,t=e.text;return e.uid===D.currentUser.uid?Object(R.jsx)(C,{children:t}):Object(R.jsx)(F,{children:t})},N=function(){return Object(R.jsx)(I,{onClick:function(n){return D.signOut()},children:"Sign Out!!!"})},J=function(){var n=Object(w.a)(D),e=Object(O.a)(n,1)[0];return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(T,{}),Object(R.jsxs)(S,{children:[Object(R.jsx)(E,{children:"<anonymous chatroom/>"}),e?Object(R.jsx)(P,{id:"chatbox"}):Object(R.jsx)(L,{}),e&&Object(R.jsx)(N,{})]})]})};v.a.apps.length?v.a.app():v.a.initializeApp({apiKey:"AIzaSyDxvOgQi_rEneoxRi9Iag75b-Oy-vLbCaI",authDomain:"chat-app-18404.firebaseapp.com",projectId:"chat-app-18404",storageBucket:"chat-app-18404.appspot.com",messagingSenderId:"1020225808869",appId:"1:1020225808869:web:fc9b3c705cde795d54e70c",measurementId:"G-7EXTG0ETER"});v.a.auth(),v.a.firestore(),v.a.analytics();g.a.render(Object(R.jsx)(p.a.StrictMode,{children:Object(R.jsx)(J,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.65a18a20.chunk.js.map