(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[110],{4061:function(e,t,n){"use strict";var r=n(1428);t.Z=(0,r.buildRpcClient)({resolverName:"logout",resolverType:"mutation",routePath:"/api/rpc/logout"})},3874:function(e,t,n){"use strict";var r=n(6065),i=(n(2540),n(1428)),s=n(9527),u=n(4061),c=n(5893),l=function(e){var t=e.title,n=e.children,l=(0,i.useMutation)(u.Z);(0,r.Z)(l,1)[0];return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(s.Head,{children:[(0,c.jsx)("title",{children:t||"classemini"}),(0,c.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),n]})};l.authenticate={redirectTo:"/"},t.Z=l},2543:function(e,t,n){"use strict";n.r(t),n.d(t,{Sheet:function(){return j},default:function(){return m}});var r=n(809),i=n.n(r),s=n(266),u=n(6065),c=n(7294),l=n(2540),a=n(1428),o=n(1664),d=n(9527),h=n(3874),f=n(9977),p=(0,a.buildRpcClient)({resolverName:"deleteSheet",resolverType:"mutation",routePath:"/api/rpc/deleteSheet"}),x=n(5893),j=function(){var e=(0,l.useRouter)(),t=(0,l.useParam)("sheetId","number"),n=(0,a.useMutation)(p),r=(0,u.Z)(n,1)[0],c=(0,a.useQuery)(f.Z,{id:t}),h=(0,u.Z)(c,1)[0];return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(d.Head,{children:(0,x.jsxs)("title",{children:["Sheet ",h.id]})}),(0,x.jsxs)("div",{children:[(0,x.jsxs)("h1",{children:["Sheet ",h.id]}),(0,x.jsx)("pre",{children:JSON.stringify(h,null,2)}),(0,x.jsx)(o.Link,{href:l.Routes.EditSheetPage({sheetId:h.id}),children:(0,x.jsx)("a",{children:"Edit"})}),(0,x.jsx)("button",{type:"button",onClick:(0,s.Z)(i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.confirm("This will be deleted")){t.next=4;break}return t.next=3,r({id:h.id});case 3:e.push(l.Routes.SheetsPage());case 4:case"end":return t.stop()}}),t)}))),style:{marginLeft:"0.5rem"},children:"Delete"})]})]})},v=function(){return(0,x.jsxs)("div",{children:[(0,x.jsx)("p",{children:(0,x.jsx)(o.Link,{href:l.Routes.SheetsPage(),children:(0,x.jsx)("a",{children:"Sheets"})})}),(0,x.jsx)(c.Suspense,{fallback:(0,x.jsx)("div",{children:"Loading..."}),children:(0,x.jsx)(j,{})})]})};v.authenticate=!0,v.getLayout=function(e){return(0,x.jsx)(h.Z,{children:e})};var m=v},9977:function(e,t,n){"use strict";var r=n(1428);t.Z=(0,r.buildRpcClient)({resolverName:"getSheet",resolverType:"query",routePath:"/api/rpc/getSheet"})},4003:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sheets/[sheetId]",function(){return n(2543)}])}},function(e){e.O(0,[774,888,179],(function(){return t=4003,e(e.s=t);var t}));var t=e.O();_N_E=t}]);