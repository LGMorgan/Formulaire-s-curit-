(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[182],{4061:function(e,t,r){"use strict";var n=r(1428);t.Z=(0,n.buildRpcClient)({resolverName:"logout",resolverType:"mutation",routePath:"/api/rpc/logout"})},3874:function(e,t,r){"use strict";var n=r(6065),i=(r(2540),r(1428)),u=r(9527),o=r(4061),c=r(5893),s=function(e){var t=e.title,r=e.children,s=(0,i.useMutation)(o.Z);(0,n.Z)(s,1)[0];return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(u.Head,{children:[(0,c.jsx)("title",{children:t||"classemini"}),(0,c.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),r]})};s.authenticate={redirectTo:"/"},t.Z=s},729:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var n=r(809),i=r.n(n),u=r(2809),o=r(266),c=r(6065),s=r(2540),a=r(1428),l=r(1664),p=r(3874),f=(0,a.buildRpcClient)({resolverName:"createQuestion",resolverType:"mutation",routePath:"/api/rpc/createQuestion"}),h=r(5290),d=r(5893),j=function(){var e=(0,s.useRouter)(),t=(0,a.useMutation)(f),r=(0,c.Z)(t,1)[0];return(0,d.jsxs)("div",{children:[(0,d.jsx)("h1",{children:"Create New Question"}),(0,d.jsx)(h.p,{submitText:"Create Question",onSubmit:function(){var t=(0,o.Z)(i().mark((function t(n){var o;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r(n);case 3:o=t.sent,e.push(s.Routes.ShowQuestionPage({questionId:o.id})),t.next=11;break;case 7:return t.prev=7,t.t0=t.catch(0),console.error(t.t0),t.abrupt("return",(0,u.Z)({},h.C,t.t0.toString()));case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}),(0,d.jsx)("p",{children:(0,d.jsx)(l.Link,{href:s.Routes.QuestionsPage(),children:(0,d.jsx)("a",{children:"Questions"})})})]})};j.authenticate=!0,j.getLayout=function(e){return(0,d.jsx)(p.Z,{title:"Create New Question",children:e})};var v=j},5290:function(e,t,r){"use strict";r.d(t,{C:function(){return i.Ck},p:function(){return a}});var n=r(2809),i=r(5011),u=r(6982),o=r(5893);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e){return(0,o.jsx)(i.l0,s(s({},e),{},{children:(0,o.jsx)(u.I,{name:"name",label:"Name",placeholder:"Name"})}))}},2891:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/questions/new",function(){return r(729)}])}},function(e){e.O(0,[774,888,179],(function(){return t=2891,e(e.s=t);var t}));var t=e.O();_N_E=t}]);