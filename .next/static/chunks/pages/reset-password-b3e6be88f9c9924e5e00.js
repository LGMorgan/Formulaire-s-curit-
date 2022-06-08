(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6],{4061:function(e,r,t){"use strict";var s=t(1428);r.Z=(0,s.buildRpcClient)({resolverName:"logout",resolverType:"mutation",routePath:"/api/rpc/logout"})},3721:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return v}});var s=t(809),n=t.n(s),a=t(2809),i=t(266),o=t(6065),u=t(2540),c=t(1428),l=t(1664),d=t(3874),p=t(6982),h=t(5011),w=t(4502),f=(0,c.buildRpcClient)({resolverName:"resetPassword",resolverType:"mutation",routePath:"/api/rpc/resetPassword"}),x=t(5893),m=function(){var e=(0,u.useRouterQuery)(),r=(0,c.useMutation)(f),t=(0,o.Z)(r,2),s=t[0],d=t[1].isSuccess;return(0,x.jsxs)("div",{children:[(0,x.jsx)("h1",{children:"Set a New Password"}),d?(0,x.jsxs)("div",{children:[(0,x.jsx)("h2",{children:"Password Reset Successfully"}),(0,x.jsxs)("p",{children:["Go to the ",(0,x.jsx)(l.Link,{href:u.Routes.Home(),children:"homepage"})]})]}):(0,x.jsxs)(h.l0,{submitText:"Reset Password",schema:w.tq,initialValues:{password:"",passwordConfirmation:"",token:e.token},onSubmit:function(){var e=(0,i.Z)(n().mark((function e(r){return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s(r);case 3:e.next=12;break;case 5:if(e.prev=5,e.t0=e.catch(0),"ResetPasswordError"!==e.t0.name){e.next=11;break}return e.abrupt("return",(0,a.Z)({},h.Ck,e.t0.message));case 11:return e.abrupt("return",(0,a.Z)({},h.Ck,"Sorry, we had an unexpected error. Please try again."));case 12:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(r){return e.apply(this,arguments)}}(),children:[(0,x.jsx)(p.I,{name:"password",label:"New Password",type:"password"}),(0,x.jsx)(p.I,{name:"passwordConfirmation",label:"Confirm New Password",type:"password"})]})]})};m.redirectAuthenticatedTo="/",m.getLayout=function(e){return(0,x.jsx)(d.Z,{title:"Reset Your Password",children:e})};var v=m},3874:function(e,r,t){"use strict";var s=t(6065),n=(t(2540),t(1428)),a=t(9527),i=t(4061),o=t(5893),u=function(e){var r=e.title,t=e.children,u=(0,n.useMutation)(i.Z);(0,s.Z)(u,1)[0];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(a.Head,{children:[(0,o.jsx)("title",{children:r||"classemini"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),t]})};u.authenticate={redirectTo:"/"},r.Z=u},5466:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reset-password",function(){return t(3721)}])}},function(e){e.O(0,[774,888,179],(function(){return r=5466,e(e.s=r);var r}));var r=e.O();_N_E=r}]);