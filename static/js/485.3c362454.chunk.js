"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[485],{8485:function(t,o,e){e.r(o),e.d(o,{default:function(){return Q}});var r=e(7689),n=e(1087),a=e(6015),i=e(7205),s=e(6009),l=e(184),c=function(){var t=(0,s.a)().isLoggedIn;return(0,l.jsxs)(a.Z,{component:"nav",children:[(0,l.jsx)(i.Z,{to:"/",component:n.OL,sx:{color:"#fff"},children:"Home"}),t&&(0,l.jsx)(i.Z,{to:"/contacts",component:n.OL,sx:{color:"#fff"},children:"Contacts"})]})},p=e(9434),d=e(9273),u=e(5953),x=function(){var t=(0,p.I0)(),o=(0,s.a)().user;return(0,l.jsx)(a.Z,{sx:{width:300},children:(0,l.jsxs)(u.ZP,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,l.jsxs)("p",{children:["Welcome, ",o.name]}),(0,l.jsx)(i.Z,{variant:"outlined",sx:{color:"white",borderColor:"white",p:1},onClick:function(){return t((0,d.ni)())},children:"Logout"})]})})},f=function(){return(0,l.jsxs)(a.Z,{children:[(0,l.jsx)(i.Z,{to:"/register",component:n.OL,sx:{color:"#fff"},children:"Register"}),(0,l.jsx)(i.Z,{to:"/login",component:n.OL,sx:{color:"#fff"},children:"Log In"})]})},m=e(3366),v=e(7462),h=e(2791),g=e(8182),b=e(4419),Z=e(277),k=e(5513),j=e(9853),C=e(286),w=e(5878),S=e(1217);function B(t){return(0,S.Z)("MuiAppBar",t)}(0,w.Z)("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);var y=["className","color","enableColorOnDark","position"],W=function(t,o){return"".concat(null==t?void 0:t.replace(")",""),", ").concat(o,")")},R=(0,Z.ZP)(C.Z,{name:"MuiAppBar",slot:"Root",overridesResolver:function(t,o){var e=t.ownerState;return[o.root,o["position".concat((0,j.Z)(e.position))],o["color".concat((0,j.Z)(e.color))]]}})((function(t){var o=t.theme,e=t.ownerState,r="light"===o.palette.mode?o.palette.grey[100]:o.palette.grey[900];return(0,v.Z)({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},"fixed"===e.position&&{position:"fixed",zIndex:(o.vars||o).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},"absolute"===e.position&&{position:"absolute",zIndex:(o.vars||o).zIndex.appBar,top:0,left:"auto",right:0},"sticky"===e.position&&{position:"sticky",zIndex:(o.vars||o).zIndex.appBar,top:0,left:"auto",right:0},"static"===e.position&&{position:"static"},"relative"===e.position&&{position:"relative"},!o.vars&&(0,v.Z)({},"default"===e.color&&{backgroundColor:r,color:o.palette.getContrastText(r)},e.color&&"default"!==e.color&&"inherit"!==e.color&&"transparent"!==e.color&&{backgroundColor:o.palette[e.color].main,color:o.palette[e.color].contrastText},"inherit"===e.color&&{color:"inherit"},"dark"===o.palette.mode&&!e.enableColorOnDark&&{backgroundColor:null,color:null},"transparent"===e.color&&(0,v.Z)({backgroundColor:"transparent",color:"inherit"},"dark"===o.palette.mode&&{backgroundImage:"none"})),o.vars&&(0,v.Z)({},"default"===e.color&&{"--AppBar-background":e.enableColorOnDark?o.vars.palette.AppBar.defaultBg:W(o.vars.palette.AppBar.darkBg,o.vars.palette.AppBar.defaultBg),"--AppBar-color":e.enableColorOnDark?o.vars.palette.text.primary:W(o.vars.palette.AppBar.darkColor,o.vars.palette.text.primary)},e.color&&!e.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":e.enableColorOnDark?o.vars.palette[e.color].main:W(o.vars.palette.AppBar.darkBg,o.vars.palette[e.color].main),"--AppBar-color":e.enableColorOnDark?o.vars.palette[e.color].contrastText:W(o.vars.palette.AppBar.darkColor,o.vars.palette[e.color].contrastText)},{backgroundColor:"var(--AppBar-background)",color:"inherit"===e.color?"inherit":"var(--AppBar-color)"},"transparent"===e.color&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))})),A=h.forwardRef((function(t,o){var e=(0,k.Z)({props:t,name:"MuiAppBar"}),r=e.className,n=e.color,a=void 0===n?"primary":n,i=e.enableColorOnDark,s=void 0!==i&&i,c=e.position,p=void 0===c?"fixed":c,d=(0,m.Z)(e,y),u=(0,v.Z)({},e,{color:a,position:p,enableColorOnDark:s}),x=function(t){var o=t.color,e=t.position,r=t.classes,n={root:["root","color".concat((0,j.Z)(o)),"position".concat((0,j.Z)(e))]};return(0,b.Z)(n,B,r)}(u);return(0,l.jsx)(R,(0,v.Z)({square:!0,component:"header",ownerState:u,elevation:4,className:(0,g.Z)(x.root,r,"fixed"===p&&"mui-fixed"),ref:o},d))})),G=e(4942);function I(t){return(0,S.Z)("MuiToolbar",t)}(0,w.Z)("MuiToolbar",["root","gutters","regular","dense"]);var M=["className","component","disableGutters","variant"],L=(0,Z.ZP)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:function(t,o){var e=t.ownerState;return[o.root,!e.disableGutters&&o.gutters,o[e.variant]]}})((function(t){var o=t.theme,e=t.ownerState;return(0,v.Z)({position:"relative",display:"flex",alignItems:"center"},!e.disableGutters&&(0,G.Z)({paddingLeft:o.spacing(2),paddingRight:o.spacing(2)},o.breakpoints.up("sm"),{paddingLeft:o.spacing(3),paddingRight:o.spacing(3)}),"dense"===e.variant&&{minHeight:48})}),(function(t){var o=t.theme;return"regular"===t.ownerState.variant&&o.mixins.toolbar})),O=h.forwardRef((function(t,o){var e=(0,k.Z)({props:t,name:"MuiToolbar"}),r=e.className,n=e.component,a=void 0===n?"div":n,i=e.disableGutters,s=void 0!==i&&i,c=e.variant,p=void 0===c?"regular":c,d=(0,m.Z)(e,M),u=(0,v.Z)({},e,{component:a,disableGutters:s,variant:p}),x=function(t){var o=t.classes,e={root:["root",!t.disableGutters&&"gutters",t.variant]};return(0,b.Z)(e,I,o)}(u);return(0,l.jsx)(L,(0,v.Z)({as:a,className:(0,g.Z)(x.root,r),ref:o,ownerState:u},d))})),T=function(){var t=(0,s.a)().isLoggedIn;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(A,{children:(0,l.jsx)(O,{sx:{height:90,display:"flex"},children:(0,l.jsxs)(u.ZP,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,l.jsx)(c,{}),t?(0,l.jsx)(x,{}):(0,l.jsx)(f,{})]})})})})},D=e(7312),N=e(7078),P=(0,e(4046).ZP)(),z=e(5080),_=["className","component","disableGutters","fixed","maxWidth","classes"],F=(0,z.Z)(),H=P("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(t,o){var e=t.ownerState;return[o.root,o["maxWidth".concat((0,D.Z)(String(e.maxWidth)))],e.fixed&&o.fixed,e.disableGutters&&o.disableGutters]}}),q=function(t){return(0,N.Z)({props:t,name:"MuiContainer",defaultTheme:F})},$=function(t,o){var e=t.classes,r=t.fixed,n=t.disableGutters,a=t.maxWidth,i={root:["root",a&&"maxWidth".concat((0,D.Z)(String(a))),r&&"fixed",n&&"disableGutters"]};return(0,b.Z)(i,(function(t){return(0,S.Z)(o,t)}),e)};var E=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=t.createStyledComponent,e=void 0===o?H:o,r=t.useThemeProps,n=void 0===r?q:r,a=t.componentName,i=void 0===a?"MuiContainer":a,s=e((function(t){var o=t.theme,e=t.ownerState;return(0,v.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!e.disableGutters&&(0,G.Z)({paddingLeft:o.spacing(2),paddingRight:o.spacing(2)},o.breakpoints.up("sm"),{paddingLeft:o.spacing(3),paddingRight:o.spacing(3)}))}),(function(t){var o=t.theme;return t.ownerState.fixed&&Object.keys(o.breakpoints.values).reduce((function(t,e){var r=e,n=o.breakpoints.values[r];return 0!==n&&(t[o.breakpoints.up(r)]={maxWidth:"".concat(n).concat(o.breakpoints.unit)}),t}),{})}),(function(t){var o=t.theme,e=t.ownerState;return(0,v.Z)({},"xs"===e.maxWidth&&(0,G.Z)({},o.breakpoints.up("xs"),{maxWidth:Math.max(o.breakpoints.values.xs,444)}),e.maxWidth&&"xs"!==e.maxWidth&&(0,G.Z)({},o.breakpoints.up(e.maxWidth),{maxWidth:"".concat(o.breakpoints.values[e.maxWidth]).concat(o.breakpoints.unit)}))})),c=h.forwardRef((function(t,o){var e=n(t),r=e.className,a=e.component,c=void 0===a?"div":a,p=e.disableGutters,d=void 0!==p&&p,u=e.fixed,x=void 0!==u&&u,f=e.maxWidth,h=void 0===f?"lg":f,b=(0,m.Z)(e,_),Z=(0,v.Z)({},e,{component:c,disableGutters:d,fixed:x,maxWidth:h}),k=$(Z,i);return(0,l.jsx)(s,(0,v.Z)({as:c,ownerState:Z,className:(0,g.Z)(k.root,r),ref:o},b))}));return c}({createStyledComponent:(0,Z.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(t,o){var e=t.ownerState;return[o.root,o["maxWidth".concat((0,j.Z)(String(e.maxWidth)))],e.fixed&&o.fixed,e.disableGutters&&o.disableGutters]}}),useThemeProps:function(t){return(0,k.Z)({props:t,name:"MuiContainer"})}}),J=E,K=e(5218);function Q(){return(0,l.jsxs)(a.Z,{children:[(0,l.jsx)(T,{}),(0,l.jsx)(a.Z,{component:"main",sx:{pt:15},children:(0,l.jsx)(J,{maxWidth:"sm",children:(0,l.jsx)(h.Suspense,{fallback:null,children:(0,l.jsx)(r.j3,{})})})}),(0,l.jsx)(K.x7,{})]})}}}]);
//# sourceMappingURL=485.3c362454.chunk.js.map