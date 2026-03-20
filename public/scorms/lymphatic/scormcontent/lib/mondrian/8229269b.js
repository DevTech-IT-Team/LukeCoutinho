"use strict";(self.webpackChunk_articulate_mondrian_bundles=self.webpackChunk_articulate_mondrian_bundles||[]).push([[539],{2539:(e,t,a)=>{function r(e){return`assets/${e}`}a.r(t),a.d(t,{applyReviewDataToManifest:()=>Tp,default:()=>wp,searchItemsByLesson:()=>Cp});var i=a(4982);const o=e=>{if(e<=0||isNaN(e))return;const t=Math.min(Math.floor(e/3600),0),a=Math.floor(e/60)-60*t;return{hours:t,minutes:a,seconds:e-60*a-3600*t}},n=e=>e.map((e=>e.toString().padStart(2,"0"))),l=(e,t=!0)=>{const a=o(e);if(!a)return(t?"":"0")+"0:00";const{hours:r,minutes:i,seconds:l}=a,s=r>0?[r,i,l]:[i,l],[c,...d]=s;return(t?[c,...n(d)]:n(s)).join(":")},s=e=>{const t=o(e);if(!t)return"0 seconds";const{hours:a,minutes:r,seconds:i}=t;let n="";return a>0&&(n+=`${new Intl.NumberFormat(void 0,{style:"unit",unit:"hour",unitDisplay:"long"}).format(a)} `),r>0&&(n+=`${new Intl.NumberFormat(void 0,{style:"unit",unit:"minute",unitDisplay:"long"}).format(r)} `),n+=new Intl.NumberFormat(void 0,{style:"unit",unit:"second",unitDisplay:"long"}).format(Math.round(i)),n},c=Object.values,d=Object.entries,p=Object.keys,h=Object.assign,m="var(--mon-theme-font-heading)",u="var(--mon-theme-font-body)",g=17,f=1.25,v="#000000",S={1:{textContent:"Heading 1",fontSize:40,lineHeight:f,fontFamily:m},2:{textContent:"Heading 2",fontSize:32,lineHeight:f,fontFamily:m},3:{textContent:"Heading 3",fontSize:24,lineHeight:f,fontFamily:m},4:{textContent:"Heading 4",fontSize:20,lineHeight:f,fontFamily:m},5:{textContent:"Heading 5",fontSize:18,lineHeight:f,fontFamily:m},6:{textContent:"Heading 6",fontSize:16,lineHeight:f,fontFamily:m}};var I=a(9679),b=a(3092),x=a.n(b),w=a(4198),y=a(3004),k=a(4758),C=a(1212),T=a(4959),B=a(3652),M=a(2359),L=a(31),A=a(2740),D=a(2559),F=a(5873),z=a(9395);function V(e,t){if(!e)return null;const a=e.match(/^\s*(\d+(\.\d+)?)\s*(cm|mm|in|px|pt|pc|em|rem|ex|ch|q|)\s*$/i);if(!a)return null;const r=Number(a[1]),i=a[3].toLowerCase();if(isNaN(r))return null;let o=null;switch(i){case"cm":o=r/2.54*96;break;case"mm":o=r/25.4*96;break;case"in":o=96*r;break;case"px":o=r;break;case"pt":o=r/72*96;break;case"pc":o=r/6*96;break;case"em":null!=t&&(o=r*t);break;case"rem":o=10*r;break;case"ex":null!=t&&(o=r*t*.45);break;case"ch":null!=t&&(o=r*t*.5);break;case"q":o=r/2.54*96/40}return{rawValue:r,unit:i,pixelValue:o}}var $=a(9777);function J(e){return"string"==typeof e?e.replace(/[:;]/g,""):"number"==typeof e?String(e):""}function P({attributes:e,chain:t,editor:a,selection:r}){const i=[];a.state.doc.nodesBetween(r.from,r.to,((e,t)=>{"listItem"===e.type.name&&i.push({node:e,pos:t})}));const o=r.$from.start()===r.from;if(i.length>1){for(const{node:a,pos:n}of i)(o||n>=r.from&&n<=r.to)&&t.setTextSelection({from:n,to:n+a.nodeSize}).updateAttributes("listItem",e);t.setTextSelection({from:r.from,to:r.to})}else a.isActive("listItem")&&o&&t.updateAttributes("listItem",e);return t}function R(e,t){for(let a=e;a;a=a.parentElement){const e=a.style.getPropertyValue(t);if(e)return e}return""}function Z(e,t){for(let a=e;a;a=a.parentElement)if(a.tagName===t)return!0;return!1}const O=d(S).map((([e,t])=>({tag:"H"+e,size:t.fontSize})));function _(e){const t=R(e,"font-size");if(!t){for(const{tag:t,size:a}of O)if(Z(e,t))return a;return g}const a=V(t,null);return a&&a.pixelValue?a.pixelValue:g}const j=w.YY.create({name:"textSize",addGlobalAttributes:()=>[{types:["textStyle","listItem"],attributes:{textSize:{default:g,parseHTML:e=>Math.round(_(e)),renderHTML:e=>({style:`font-size: ${Number(e.textSize)}px`})}}}],addCommands:()=>({setTextSize:e=>({chain:t,editor:a,tr:{selection:r}})=>{const i=t().setMark("textStyle",{textSize:e});return P({attributes:{textSize:e},chain:i,editor:a,selection:r}).run()}})}),Y=w.YY.create({name:"lineHeight",addGlobalAttributes:()=>[{types:["paragraph","heading"],attributes:{lineHeight:{default:2,parseHTML(e){const t=e.style.lineHeight,a=_(e),r=V(t,a);return!r||r.rawValue<=0?null:""===r.unit?r.rawValue:null!=r.pixelValue&&null!=a?r.pixelValue/a:null},renderHTML:e=>({style:`line-height: ${Number(e.lineHeight)}`})}}}],addCommands:()=>({setLineHeight:e=>({commands:t})=>{const a=t.updateAttributes("paragraph",{lineHeight:e}),r=t.updateAttributes("heading",{lineHeight:e});return a&&r}})}),H=w.YY.create({name:"spaceAfter",addGlobalAttributes:()=>[{types:["paragraph","heading"],attributes:{spaceAfter:{default:0,parseHTML(e){const t=e.style.marginBlockEnd||e.style.marginBottom,a=V(t,_(e))?.pixelValue;return null!=a&&a>0?a:null},renderHTML:e=>({style:`margin-block-end: ${Number(e.spaceAfter)}px`})}}}],addCommands:()=>({setSpaceAfter:e=>({commands:t})=>{const a=t.updateAttributes("paragraph",{spaceAfter:e}),r=t.updateAttributes("heading",{spaceAfter:e});return a&&r}})}),E=w.YY.create({name:"fontFamily",addGlobalAttributes:()=>[{types:["textStyle","listItem"],attributes:{fontFamily:{default:u,parseHTML:e=>e.style.fontFamily,renderHTML:e=>e.fontFamily?{style:`font-family: ${J(e.fontFamily)}`}:{}}}}],addCommands:()=>({setFontFamily:e=>({chain:t,editor:a,tr:{selection:r}})=>{const i=t();return i.setMark("textStyle",{fontFamily:e}),P({attributes:{fontFamily:e},chain:i,editor:a,selection:r}).run()}})}),G=w.YY.create({name:"color",addGlobalAttributes:()=>[{types:["textStyle","listItem"],attributes:{color:{default:null,parseHTML(e){let t=e.style.color;return t||"LI"===e.tagName||(t=R(e,"color")),t&&(t=t.replace(/['"]+/g,"")),t&&(t=function(e){const t=(0,$.Mj)(e);return t.isValid()?t.toHex().toUpperCase().slice(0,7):e}(t)),t||void 0},renderHTML:e=>e.color?{style:`color: ${J(e.color)}`}:{}}}}],addCommands:()=>({setColor:e=>({chain:t,editor:a,tr:r})=>{const{selection:i}=r,o=t();return o.setMark("textStyle",{color:e}),a.getAttributes("link").href&&o.updateAttributes("link",{unlinkColor:e}),!0===r.getMeta("linkUpdateColorChange")?o.run():P({attributes:{color:e},chain:o,editor:a,selection:i}).run()},unsetColor:()=>({chain:e,editor:t,tr:{selection:a}})=>{const r=e();return r.setMark("textStyle",{color:null}).removeEmptyTextStyle(),P({attributes:{color:null},chain:r,editor:t,selection:a}).run()}})}),X=y.Ay.extend({addAttributes(){const e=this.parent(),t=e.color.renderHTML;return e.color.renderHTML=({color:e})=>t({color:J(e)}),e}}).configure({multicolor:!0}),q=M.A.extend({addGlobalAttributes(){const e=this.parent(),t=e[0].attributes.textAlign.renderHTML;return e[0].attributes.textAlign.renderHTML=({textAlign:e})=>t({textAlign:J(e)}),e}}).configure({types:["heading","paragraph"]}),N={rel:"noopener noreferrer",target:"_blank"},U=C.Ay.extend({addAttributes(){return{...this.parent(),rel:{default:N.rel,parseHTML:e=>e.getAttribute("rel"),renderHTML:()=>({rel:N.rel})},target:{default:N.target,parseHTML:e=>e.getAttribute("target"),renderHTML:()=>({target:N.target})},unlinkColor:{default:v}}}}),W=w.YY.create({name:"init",addCommands:()=>({initFontFamily:()=>({chain:e})=>e().setFontFamily(u).run(),initLineHeight:()=>({chain:e})=>e().setLineHeight(2).run(),initTextSize:()=>({chain:e})=>e().setTextSize(g).run(),initColor:()=>({chain:e})=>e().setColor(v).run()})}),Q="latestDefocusedSelectionDecoration",K=w.YY.create({name:Q,addProseMirrorPlugins:()=>[new D.k_({key:new D.hs(Q),state:{init:e=>F.zF.empty,apply(e,t){const{doc:a,selection:r}=e,i=e.getMeta(Q),o=r&&r.from!==r.to;if(!o||"focus"===i?.action)return F.zF.empty;if(o&&"blur"===i?.action){const e=F.NZ.inline(r.from,r.to,{class:"latest-defocused-selection",nodeName:"mark"});return F.zF.create(a,[e])}return t}},props:{decorations(e){return this.getState(e)},handleDOMEvents:{blur(e){const{tr:t}=e.state,a=t.setMeta(Q,{from:t.selection.from,to:t.selection.to,action:"blur"});e.dispatch(a)},focus(e){const{tr:t}=e.state,a=t.setMeta(Q,{from:t.selection.from,to:t.selection.to,action:"focus"});e.dispatch(a)}}}})]}),ee=w.YY.create({name:"clearMarksOnEnter",addKeyboardShortcuts(){return{Enter:()=>{const{state:e}=this.editor,{selection:t}=e,{$from:a,empty:r}=t;if(!r)return!1;const i=a.parent;if("heading"!==i.type.name)return!1;const o=a.marks().filter((e=>"textStyle"===e.type.name));let n=null;o.length>0&&(n=o[0].attrs.color||null);const l=i.attrs.textAlign||"left";let s=this.editor.chain().splitBlock().setParagraph().setTextAlign(l);return s=s.unsetMark("bold").unsetMark("italic").unsetMark("underline").unsetMark("strike").unsetMark("highlight"),s=n?s.setMark("textStyle",{color:n}):s.unsetMark("textStyle"),s.run()}}}}),te=[L.A,T.A.extend({excludes:"superscript"}),B.A.extend({excludes:"subscript"}),z.A.configure({code:!1,history:!1,heading:{levels:[1,2,3,4,5,6]}}),q,X,ee,G,j,Y,H,A.A,k.A,E,W,K,U.configure({HTMLAttributes:N,openOnClick:!1,protocols:["http","https","mailto"]})],ae=(0,w._w)(te),re=I.ZF.fromSchema(ae);function ie(e){const t=(e.marks??=[]).find((e=>"highlight"===e.type));t?(t.attrs??={}).color="#FFFF00":e.marks.push({type:"highlight",attrs:{textSize:"inherit",color:"#FFFF00"}})}const oe={color:v,fontFamily:"var(--mon-theme-font-body)",textSize:g},ne=(e,t)=>le({doc:t,contentTypes:["text"],callback:t=>{if(t.marks){const a=t.marks.find((e=>"link"===e.type));a?.attrs&&e(a.attrs.href)&&(a.attrs.href=void 0)}}});function le({callback:e,contentTypes:t,doc:a}){for(const r of a.content??[])r.type&&t.includes(r.type)&&e(r,a),r.content&&le({callback:e,contentTypes:t,doc:r});return a}const se=e=>!(!e.text?.trim()&&!e.content?.some(se));function ce(e,t,a,r){Object.hasOwn(e,a)||(e[a]={states:{}}),null!=r&&(e[a].translationId=r);const{states:i}=e[a];return Object.hasOwn(i,t)||(i[t]={}),i[t]}function de(e,t,a){return t<e?e:t>a?a:t}function pe({fromPoint:e,fromValue:t,toPoint:a,toValue:r},i){const o=i.x-e.x,n=i.y-e.y,l=a.x-e.x,s=a.y-e.y,c=(o*l+n*s)/(l*l+s*s);return(1-c)*t+c*r}function he({fromPoint:e,fromValue:t,toPoint:a,toValue:r},i){const o=(i-t)/(r-t),n=1-o;return{x:e.x*n+a.x*o,y:e.y*n+a.y*o}}function me({fromPoint:e,i:t,j:a},r){const i=he({fromPoint:e,...t},r.x),o=he({fromPoint:e,...a},r.y);return{x:i.x+o.x-e.x,y:i.y+o.y-e.y}}const{sqrt:ue,min:ge,atan2:fe,tan:ve,PI:Se,abs:Ie}=Math;function be(e,t,a){const r=ge(.5*e.l,.5*t.l,a);if(r<.1)return null;let i=1,o=fe(e.y0-e.y3,e.x0-e.x3)-fe(t.y3-t.y0,t.x3-t.x0);o<0&&(o=-o,i^=1),o>Se&&(o=2*Se-o,i^=1);const n=ve(.5*o)*r;if(n<.1||n>1e6)return null;const l=1-r/e.l,s=r/t.l,c=e.x0*(1-l)+e.x3*l,d=e.y0*(1-l)+e.y3*l,p=t.x0*(1-s)+t.x3*s,h=t.y0*(1-s)+t.y3*s;return e.x2=c,e.y2=d,t.x1=p,t.y1=h,`A ${n} ${n} 0 0 ${i} ${p},${h}`}function xe(e,t,a,r,i){if(t.length<2)throw new Error("emitPathRounded must have at least two path components!");const o=[],{p:{x:n,y:l}}=e;let s=n,c=l;function d(e,t){const a=e.x,o=e.y,n=`${a*r},${o*i}`;return t&&(s=a,c=o),n}function p(e,t){const a=e.x+s,o=e.y+c,n=`${a*r},${o*i}`;return t&&(s=a,c=o),n}function h(e,t,a){let n=e,l=t;a&&(n+=s,l+=c);const d=s*r,p=c*i,h=n*r,m=l*i,u=d-h,g=p-m,f=ue(u*u+g*g);o.push({x0:d,y0:p,x1:d,y1:p,x2:h,y2:m,x3:h,y3:m,l:f}),s=n,c=l}for(const e of t)switch(e.cmd){case"T":o.push(`T ${d(e.p,!0)}`);break;case"t":o.push(`T ${p(e.p,!0)}`);break;case"Q":o.push(`Q ${d(e.c,!1)} ${d(e.p,!0)}`);break;case"q":o.push(`Q ${p(e.c,!1)} ${p(e.p,!0)}`);break;case"S":o.push(`S ${d(e.c,!1)} ${d(e.p,!0)}`);break;case"s":o.push(`S ${p(e.c,!1)} ${p(e.p,!0)}`);break;case"C":o.push(`C ${d(e.c1,!1)} ${d(e.c2,!1)} ${d(e.p,!0)}`);break;case"c":o.push(`C ${p(e.c1,!1)} ${p(e.c2,!1)} ${p(e.p,!0)}`);break;case"A":o.push(`A ${e.radius.x*r} ${e.radius.y*i} ${e.angle} ${+e.large} ${+e.sweep} ${d(e.p,!0)}`);break;case"a":o.push(`A ${e.radius.x*r} ${e.radius.y*i} ${e.angle} ${+e.large} ${+e.sweep} ${p(e.p,!0)}`);break;case"H":h(e.v,c,!1);break;case"h":h(e.v,0,!0);break;case"V":h(s,e.v,!1);break;case"v":h(0,e.v,!0);break;case"L":h(e.p.x,e.p.y,!1);break;case"l":h(e.p.x,e.p.y,!0)}return(Ie(s-n)>.01||Ie(c-l)>.01)&&h(n,l,!1),function(e,t,a,r){const i=[];for(let e=0;e<a.length;e+=1){const t=a[e],o=a[e+1]??a[0];if(i.push(t),"string"!=typeof t&&"string"!=typeof o){const e=be(t,o,r);e&&i.push(e)}}const o=i[0],n=["string"==typeof o?`M ${e},${t}`:`M ${o.x1},${o.y1}`];for(let e=0;e<i.length;e+=1){const t=i[e];"string"==typeof t?n.push(t):e!==i.length-1&&n.push(`L ${t.x2},${t.y2}`)}return n.push("Z"),n.join(" ")}(n,l,o,a)}function we({width:e,height:t}){return{fromPoint:{x:0,y:0},i:{fromValue:1,toPoint:{x:e,y:0},toValue:0},j:{fromValue:.5,toPoint:{x:0,y:t},toValue:-.5}}}const ye={discriminator:"arrow",paths({cornerRounding:e,thickness:t,headLength:a},{width:r,height:i}){const o=1-a;return[{d:xe({cmd:"M",p:{x:0,y:.5-t}},[{cmd:"H",v:o},{cmd:"V",v:0},{cmd:"L",p:{x:1,y:.5}},{cmd:"L",p:{x:o,y:1}},{cmd:"V",v:.5+t},{cmd:"H",v:0}],e,r,i),fill:!0,dash:!0}]},textExtents({thickness:e,headLength:t}){const a=.5-e;return{left:0,top:a,width:2*a*t+(1-t),height:.5+e-a}},getControlPoints:({thickness:e,headLength:t},a,r,i,o)=>[{position:me(we(a),{x:t,y:e}),style:"normal"}],dragControlPoint(e,t,a,r,i,o){const n=function({fromPoint:e,i:t,j:a},r){return{x:pe({fromPoint:e,...t},r),y:pe({fromPoint:e,...a},r)}}(we(t),r);return{...e,thickness:de(.1,n.y,.5),headLength:de(.1,n.x,.9)}}},ke={discriminator:"bookmark",textExtents:({cutoutInset:e})=>({left:0,top:0,width:1,height:1-e}),paths:({cornerRounding:e,cutoutInset:t},{width:a,height:r})=>[{d:xe({cmd:"M",p:{x:0,y:0}},[{cmd:"L",p:{x:0,y:1}},{cmd:"L",p:{x:.5,y:1-t}},{cmd:"L",p:{x:1,y:1}},{cmd:"L",p:{x:1,y:0}},{cmd:"L",p:{x:0,y:0}}],e,a,r),fill:!0,dash:!0}],getControlPoints:({cutoutInset:e},t)=>[{position:he(Ce(t)[0],e),style:"normal"}],dragControlPoint:(e,t,a,r)=>({...e,cutoutInset:de(0,pe(Ce(t)[a],r),.8)})};function Ce({width:e,height:t}){const a=.5*e;return[{fromPoint:{x:a,y:.2*t},fromValue:.8,toPoint:{x:a,y:t},toValue:0}]}function Te({width:e,height:t}){return[{fromPoint:{x:.3*e,y:.5*t},fromValue:.3,toPoint:{x:0,y:.5*t},toValue:0},{fromPoint:{x:.7*e,y:.5*t},fromValue:.7,toPoint:{x:1*e,y:.5*t},toValue:1}]}const Be={discriminator:"chevron",paths:({cornerRounding:e,insideCenterXCoord:t,outsideCornerXCoords:a},{width:r,height:i})=>[{d:xe({cmd:"M",p:{x:0,y:0}},[{cmd:"L",p:{x:a,y:0}},{cmd:"L",p:{x:1,y:.5}},{cmd:"L",p:{x:a,y:1}},{cmd:"L",p:{x:0,y:1}},{cmd:"L",p:{x:t,y:.5}},{cmd:"L",p:{x:0,y:0}}],e,r,i),fill:!0,dash:!0}],textExtents:({insideCenterXCoord:e,outsideCornerXCoords:t})=>({left:e,top:0,width:t-e,height:1}),getControlPoints({insideCenterXCoord:e,outsideCornerXCoords:t},a){const r=Te(a);return[e,t].map(((e,t)=>({position:he(r[t],e),style:"normal"})))},dragControlPoint(e,t,a,r){const i=pe(Te(t)[a],r),o={...e};switch(a){case 0:o.insideCenterXCoord=de(0,i,.3);break;case 1:o.outsideCornerXCoords=de(.7,i,1)}return o}},Me=[{cmd:"M",p:{x:217.234,y:57.006}},{cmd:"C",c1:{x:217.785,y:54.084},c2:{x:218.073,y:51.069},p:{x:218.073,y:47.986}},{cmd:"C",c1:{x:218.073,y:21.4841},c2:{x:196.796,y:0},p:{x:170.549,y:0}},{cmd:"C",c1:{x:154.49,y:0},c2:{x:140.291,y:8.043},p:{x:131.689,y:20.3575}},{cmd:"C",c1:{x:123.43,y:13.3566},c2:{x:112.778,y:9.1402},p:{x:101.151,y:9.1402}},{cmd:"C",c1:{x:75.1559,y:9.1402},c2:{x:54.036,y:30.2136},p:{x:53.6331,y:56.364}},{cmd:"C",c1:{x:24.4644,y:56.364},c2:{x:.82373,y:80.235},p:{x:.82373,y:109.682}},{cmd:"C",c1:{x:.82373,y:139.129},c2:{x:24.4644,y:163},p:{x:53.6272,y:163}},{cmd:"L",p:{x:209.021,y:163}},{cmd:"C",c1:{x:238.183,y:163},c2:{x:261.824,y:139.129},p:{x:261.824,y:109.682}},{cmd:"C",c1:{x:261.824,y:83.056},c2:{x:242.496,y:60.99},p:{x:217.234,y:57.006}},{cmd:"Z"}],Le={left:20/262,top:50/163,width:222/262,height:113/163},Ae={discriminator:"cloud",paths(e,{width:t,height:a}){const r=function(e,t=1,a=1){const r=[];let i=0,o=0;function n(e,r){const n=e.x,l=e.y,s=`${(n-i)*t},${(l-o)*a}`;return r&&(i=n,o=l),s}function l(e,r){const n=e.x,l=e.y,s=`${n*t},${l*a}`;return r&&(i+=n,o+=l),s}for(const s of e)switch(r.push(s.cmd.toLowerCase()),s.cmd){case"M":case"L":case"T":r.push(n(s.p,!0));break;case"m":case"l":case"t":r.push(l(s.p,!0));break;case"H":r.push(n({x:s.v,y:o},!0));break;case"V":r.push(n({x:i,y:s.v},!0));break;case"h":r.push(l({x:s.v,y:0},!0));break;case"v":r.push(l({x:0,y:s.v},!0));break;case"C":r.push(n(s.c1,!1),n(s.c2,!1),n(s.p,!0));break;case"c":r.push(l(s.c1,!1),l(s.c2,!1),l(s.p,!0));break;case"S":case"Q":r.push(n(s.c,!1),n(s.p,!0));break;case"s":case"q":r.push(l(s.c,!1),l(s.p,!0));break;case"A":r.push(s.radius.x*t,s.radius.y*a,s.angle,+s.large,+s.sweep,n(s.p,!0));break;case"a":r.push(s.radius.x,s.radius.y,s.angle,+s.large,+s.sweep,l(s.p,!0))}return r.join(" ")}(Me,t/262,a/163);return[{d:r,fill:!0,dash:!0}]},textExtents:e=>Le},De={left:(1-Math.SQRT1_2)/2,top:(1-Math.SQRT1_2)/2,width:Math.SQRT1_2,height:Math.SQRT1_2},Fe={discriminator:"ellipse",paths(e,{width:t,height:a}){let r="m 0 0";return r+=` m ${t} ${a/2}`,r+=` a ${t/2} ${a/2} 0 0 1 ${-t},0`,r+=` a ${t/2} ${a/2} 0 0 1 ${t},0`,r+=" z",[{d:r,fill:!0,dash:!0}]},textExtents:e=>De},ze=Math.sqrt(3)/2,{abs:Ve,max:$e}=Math,Je={left:0,top:0,width:1,height:1},{circle:Pe,square:Re,diamond:Ze,triangle:Oe}={circle:(e,t,a,r)=>`M ${a-.5*e},${r} a ${.5*t} ${.5*t} 0 0 0 ${e} 0 a ${.5*t} ${.5*t} 0 0 0 ${-e} 0 z`,square:(e,t,a,r)=>`M ${a-.5*e},${r+.5*t} h ${e} v ${-t} h ${-e} z`,diamond:(e,t,a,r)=>`M ${a-.5*e},${r} l ${.5*e},${.5*t} l ${.5*e},${-.5*t}, l ${-.5*e},${-.5*t} z`,triangle:(e,t,a,r,i)=>`M ${a+.5*i},${r} l ${e*ze}, ${.5*t} v ${-t} z`},_e={none:(e,t,a,r,i)=>({used:.5*Ve(i),path:null}),arrow:(e,t,a,r,i)=>({used:.5*Ve(i),path:{d:`M ${a+.5*e+.5*i},${r+.5*t} l ${-.5*e},${-.5*t} l ${.5*e},${-.5*t}`,fill:!1,dash:!1}}),stop:(e,t,a,r,i)=>({used:.5*Ve(i),path:{d:`M ${a+.5*i} ${r+.5*t} v ${-t}`,fill:!1,dash:!1}}),circle:(e,t,a,r)=>({used:.5*t,path:{d:Pe(e,t,a,r),fill:!1,dash:!1}}),square:(e,t,a,r)=>({used:.5*t,path:{d:Re(e,t,a,r),fill:!1,dash:!1}}),diamond:(e,t,a,r)=>({used:.5*t,path:{d:Ze(e,t,a,r),fill:!1,dash:!1}}),triangle:(e,t,a,r,i)=>({used:t*ze+.5*Ve(i),path:{d:Oe(e,t,a,r,i),fill:!1,dash:!1}}),"circle-filled":(e,t,a,r)=>({used:.5*t,path:{d:Pe(e,t,a,r),fill:!0,dash:!1}}),"square-filled":(e,t,a,r)=>({used:.5*t,path:{d:Re(e,t,a,r),fill:!0,dash:!1}}),"diamond-filled":(e,t,a,r)=>({used:.5*t,path:{d:Ze(e,t,a,r),fill:!0,dash:!1}}),"triangle-filled":(e,t,a,r,i)=>({used:t*ze+.5*Ve(i),path:{d:Oe(e,t,a,r,i),fill:!0,dash:!1}})},je={discriminator:"line",paths({from:{style:e},to:{style:t}},{width:a,height:r,borderWidth:i}){let o=3*i,n=3*i;if(o+n>a){const e=a/(o+n);o*=e,n*=e}const{used:l,path:s}=_e[e](o,o,0,.5*r,i),{used:c,path:d}=_e[t](-1*n,n,a,.5*r,-1*i),p=[{d:`M ${l},${.5*r} H ${a-c}`,fill:!1,dash:!0}];return s&&p.push(s),d&&p.push(d),p},textExtents:()=>Je,extraDrawSpace({width:e,height:t,borderWidth:a}){const r=$e(3*a,3*a);return{width:r,height:r}}},Ye={left:(1-Math.SQRT1_2)/2,top:(1-Math.SQRT1_2)/2,width:Math.SQRT1_2,height:Math.SQRT1_2},He={discriminator:"octagon",paths({cornerRounding:e},{width:t,height:a}){const r=Math.min(t,a)/(1+Math.SQRT2)/Math.SQRT2;return[{d:xe({cmd:"M",p:{x:r,y:0}},[{cmd:"L",p:{x:t-r,y:0}},{cmd:"L",p:{x:t,y:r}},{cmd:"L",p:{x:t,y:a-r}},{cmd:"L",p:{x:t-r,y:a}},{cmd:"L",p:{x:r,y:a}},{cmd:"L",p:{x:0,y:a-r}},{cmd:"L",p:{x:0,y:r}},{cmd:"L",p:{x:r,y:0}}],e,1,1),fill:!0,dash:!0}]},textExtents:e=>Ye},Ee={discriminator:"parallelogram",textExtents:({shear:e})=>e>.45?{left:.45,top:0,width:0,height:1}:{left:e,top:0,width:1-2*e,height:1},paths:({cornerRounding:e,shear:t},{width:a,height:r})=>[{d:xe({cmd:"M",p:{x:1,y:0}},[{cmd:"L",p:{x:t,y:0}},{cmd:"L",p:{x:0,y:1}},{cmd:"L",p:{x:1-t,y:1}},{cmd:"L",p:{x:1,y:0}}],e,a,r),fill:!0,dash:!0}],getControlPoints:({shear:e},t)=>[{position:he(Ge(t)[0],e),style:"normal"}],dragControlPoint:(e,t,a,r)=>({...e,shear:de(0,pe(Ge(t)[a],r),.99)})};function Ge({width:e}){return[{fromPoint:{x:0,y:0},fromValue:0,toPoint:{x:e,y:0},toValue:1}]}const Xe={discriminator:"plus",textExtents:({stroke:e})=>({left:0,top:(1-e)/2,width:1,height:e}),paths({cornerRounding:e,stroke:t},{width:a,height:r}){const i=(1-t)/2;return[{d:xe({cmd:"M",p:{x:i,y:0}},[{cmd:"L",p:{x:i,y:i}},{cmd:"L",p:{x:0,y:i}},{cmd:"L",p:{x:0,y:1-i}},{cmd:"L",p:{x:i,y:1-i}},{cmd:"L",p:{x:i,y:1}},{cmd:"L",p:{x:1-i,y:1}},{cmd:"L",p:{x:1-i,y:1-i}},{cmd:"L",p:{x:1,y:1-i}},{cmd:"L",p:{x:1,y:i}},{cmd:"L",p:{x:1-i,y:i}},{cmd:"L",p:{x:1-i,y:0}},{cmd:"L",p:{x:i,y:0}}],e,a,r),fill:!0,dash:!0}]},getControlPoints:({stroke:e},t)=>[{position:he(qe(t)[0],e),style:"normal"}],dragControlPoint:(e,t,a,r)=>({...e,stroke:de(.01,pe(qe(t)[a],r),1)})};function qe({width:e,height:t}){return[{fromPoint:{x:0,y:0},fromValue:1,toPoint:{x:e/2,y:t/2},toValue:0}]}const Ne=`url(${function(e,t){const a=[...(new TextEncoder).encode('\n<svg xmlns="http://www.w3.org/2000/svg" width="28" height="40" viewBox="0 0 28 40" fill="none">\n  <g filter="url(#filter0_d_10962_163787)">\n    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 18.5V2.5L15.6 14.1081H8.55353L8.40242 14.232L4 18.5Z" fill="white"/>\n    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 4.7998V15.9998L7.969 13.1307L8.129 12.9916L13.165 12.9998L5 4.7998Z" fill="black"/>\n    <path d="M8.5 27.5C9.06115 27.5 9.48005 27.0493 9.51635 26.5351C9.74356 23.3161 12.3161 20.7436 15.5351 20.5163C16.0493 20.4801 16.5 20.0611 16.5 19.5C16.5 18.956 16.0524 18.4804 15.4691 18.5163C11.1973 18.7798 7.7798 22.1973 7.51632 26.4691C7.48035 27.0524 7.95597 27.5 8.5 27.5Z" fill="black" stroke="white" stroke-linejoin="round"/>\n  </g>\n  <defs>\n    <filter id="filter0_d_10962_163787" x="2.2" y="1.7" width="16.6" height="29.1" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n      <feFlood flood-opacity="0" result="BackgroundImageFix"/>\n      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n      <feOffset dy="1"/>\n      <feGaussianBlur stdDeviation="0.9"/>\n      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.65 0"/>\n      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_10962_163787"/>\n      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_10962_163787" result="shape"/>\n    </filter>\n  </defs>\n</svg>\n')].map((e=>String.fromCharCode(e))).join("");return"data:image/svg+xml;base64,"+btoa(a)}()}) 5 5, move`,Ue=["ne","nw","nw","ne"],{min:We}=Math,Qe={left:0,top:0,width:1,height:1},Ke={topLeft:0,topRight:0,bottomRight:0,bottomLeft:0};function et(e,t,a){return e+a<=t?e:e*t/(e+a)}function tt(e,t,a,r,i){return We(et(a,t,e),et(a,r,i))}function at({topLeft:e,topRight:t,bottomRight:a,bottomLeft:r},{width:i,height:o}){return{topLeft:tt(r,o,e,i,t),topRight:tt(e,i,t,o,a),bottomRight:tt(t,o,a,i,r),bottomLeft:tt(a,i,r,o,e)}}function rt(e){if(!e)return!0;const{topLeft:t,topRight:a,bottomRight:r,bottomLeft:i}=e;return t===a&&t===r&&t===i}function it({width:e,height:t}){return[{fromPoint:{x:0,y:0},fromValue:0,toPoint:{x:10,y:10},toValue:10},{fromPoint:{x:e,y:0},fromValue:0,toPoint:{x:e-10,y:10},toValue:10},{fromPoint:{x:e,y:t},fromValue:0,toPoint:{x:e-10,y:t-10},toValue:10},{fromPoint:{x:0,y:t},fromValue:0,toPoint:{x:10,y:t-10},toValue:10}]}const ot={discriminator:"rectangle",paths({borderRadius:e},t){const{width:a,height:r}=t;let i="m 0 0";if(e){const{topLeft:o,topRight:n,bottomRight:l,bottomLeft:s}=at(e,t);i+=` m ${o} 0`,i+=` l ${a-o-n} 0 a ${n} ${n} 0 0 1 ${n},${n}`,i+=` l 0 ${r-n-l} a ${l} ${l} 0 0 1 ${-l},${l}`,i+=` l ${l+s-a} 0 a ${s} ${s} 0 0 1 ${-s},${-s}`,i+=` l 0 ${s+o-r} a ${o} ${o} 0 0 1 ${o},${-o}`}else i+=` l ${a} 0`,i+=` l 0 ${r}`,i+=` l ${-a} 0`,i+=" l 0 "+-r;return i+=" z",[{d:i,fill:!0,dash:!0}]},textExtents:e=>Qe,getControlPoints({borderRadius:e},t,a,r,i){const{topLeft:o,topRight:n,bottomRight:l,bottomLeft:s}=at(e??Ke,t),c=it(t),d=rt(i?at(i.borderRadius??Ke,t):e)!==r?"normal":"alternate";return[o,n,l,s].map(((e,t)=>({position:he(c[t],e),style:d,tooltip:{text:`Radius ${e.toFixed(0)}`,position:Ue[t]},cursor:Ne})))},dragControlPoint({borderRadius:e},t,a,r,i,o){const n=it(t)[a],{width:l,height:s}=t,c=pe(n,r);let d;if(rt(e)!==o){const e=de(0,c,We(s/2,l/2));d={topLeft:e,topRight:e,bottomRight:e,bottomLeft:e}}else switch(d={...e??Ke},a){case 0:d.topLeft=de(0,c,We(s-d.bottomLeft,l-d.topRight));break;case 1:d.topRight=de(0,c,We(l-d.topLeft,s-d.bottomRight));break;case 2:d.bottomRight=de(0,c,We(s-d.topRight,l-d.bottomLeft));break;case 3:d.bottomLeft=de(0,c,We(l-d.bottomRight,s-d.topLeft))}return{type:"rectangle",borderRadius:d}}},nt={left:0,top:0,width:1,height:1},lt={discriminator:"shield",paths({cornerRounding:e},{width:t,height:a}){const r=Math.min(.5*t,.5*a);return[{d:xe({cmd:"M",p:{x:0,y:0}},[{cmd:"H",v:t},{cmd:"V",v:a-r},{cmd:"A",radius:{x:.5*t,y:r},angle:0,large:!1,sweep:!0,p:{x:0,y:a-r}},{cmd:"V",v:0}],e,1,1),fill:!0,dash:!0}]},textExtents:e=>nt},st={cmd:"M",p:{x:0,y:0}},ct=[{cmd:"H",v:210},{cmd:"V",v:175},{cmd:"H",v:129},{cmd:"L",p:{x:40,y:217}},{cmd:"V",v:175},{cmd:"H",v:0},{cmd:"V",v:0}],dt={left:0,top:0,width:1,height:175/217},pt={discriminator:"speechBubble",paths:({cornerRounding:e},{width:t,height:a})=>[{d:xe(st,ct,e,t/210,a/217),fill:!0,dash:!0}],textExtents:e=>dt},{PI:ht,cos:mt,sin:ut,round:gt,floor:ft,max:vt}=Math,St=-.5*ht,It=2*ht;function bt(e,t){return St+It*(e/t)}function xt(e,t){return St+It*((2*e+1)/(2*t))}function wt({sidePairs:e,innerRadius:t}){const a=mt(bt(gt(e/4),e)),r=mt(xt(ft(gt(e/2)/2),e))*t,i=ut(bt(gt(e/2),e)),o=ut(xt(ft(e/2),e))*t;return{xFactor:.5/vt(a,r),yFactor:.5/(.5*vt(i,o)+.5)}}const yt={left:(1-Math.SQRT1_2)/2,top:(1-Math.SQRT1_2)/2,width:Math.SQRT1_2,height:Math.SQRT1_2};function kt(e,{width:t,height:a}){const{sidePairs:r}=e,{xFactor:i,yFactor:o}=wt(e),n=xt(r-1,r);return{fromPoint:{x:.5*t,y:a*o},fromValue:0,toPoint:{x:(mt(n)*i+.5)*t,y:(ut(n)*o+o)*a},toValue:1}}const Ct={discriminator:"star",paths(e,{width:t,height:a}){const{cornerRounding:r,sidePairs:i,innerRadius:o}=e,{xFactor:n,yFactor:l}=wt(e);let s;const c=[];let d=!0;function p(e,t){const a={x:mt(e)*t*n+.5,y:ut(e)*t*l+l};d?(s={cmd:"M",p:a},d=!1):c.push({cmd:"L",p:a})}for(let e=0;e<i;e+=1)p(bt(e,i),1),p(xt(e,i),o);return[{d:xe(s,c,r,t,a),fill:!0,dash:!0}]},textExtents:e=>yt,getControlPoints:(e,t)=>[{position:he(kt(e,t),e.innerRadius),style:"normal"}],dragControlPoint(e,t,a,r){const i=pe(kt(e,t),r);return{...e,innerRadius:de(.1,i,1)}}},Tt={discriminator:"triangle",paths:({cornerRounding:e,topVertex:t},{width:a,height:r})=>[{d:xe({cmd:"M",p:{x:t??.5,y:0}},[{cmd:"L",p:{x:0,y:1}},{cmd:"L",p:{x:1,y:1}}],e,a,r),fill:!0,dash:!0}],textExtents:({topVertex:e})=>({width:.5,height:.5,left:(e??.5)/2,top:.5}),getControlPoints:({topVertex:e},t)=>[{position:he(Bt(t)[0],e??.5),style:"normal"}],dragControlPoint:(e,t,a,r)=>({...e,topVertex:de(0,pe(Bt(t)[a],r),1)})};function Bt({width:e}){return[{fromPoint:{x:0,y:0},fromValue:0,toPoint:{x:e,y:0},toValue:1}]}const Mt=new Map;function Lt(e){Mt.set(e.discriminator,e)}Lt(ot),Lt(Fe),Lt(Ct),Lt(Ae),Lt(Xe),Lt(Tt),Lt(ke),Lt(He),Lt(Be),Lt(Ee),Lt(pt),Lt(lt),Lt(ye),Lt(je);const At={width:0,height:0};var Dt=a(4015),Ft=a.n(Dt);function zt(e,t,a=p(e.states.default)){const r=e.states.default,i=structuredClone(e.states[t]);return a.reduce(((e,t)=>(Ft()(e[t])&&(e[t]=structuredClone(r[t])),e)),i)}var Vt=a(3134),$t=a.n(Vt);function Jt(e){return new Map(d($t()(e,(e=>e.sourceId??"none"))))}a(1999),a(921);var Pt=a(6936),Rt=a(8182);function Zt(e){if(null==e.def.shape)throw new Error("partial() called on a non-object def");return(0,Rt.OH3)(e)}var Ot=a(6492);function _t(e,t,a){return{name:e,deps:t,factory:a}}function jt(e){const t=new Map(e.map((e=>[e.name,{name:e.name,module:e,state:"new",value:0}])));function a(e){const r=t.get(e);if(!r)throw new Error(`Unknown require ${e}`);if("finished"===r.state)return r.value;if("pending"===r.state)throw new Error("Circular require!");r.state="pending";const i=r.module.deps.map(a),o=r.module.factory(...i);return r.state="finished",r.value=o,o}const r={};for(const{name:t}of e)r[t]=a(t);return r}const Yt=_t("LocaleContext",[],(()=>({LocaleContext:(0,Rt.Ikc)({active:(0,Rt.lqM)((0,Rt.YjP)()),source:(0,Rt.lqM)((0,Rt.YjP)())})}))),Ht=_t("ReviewData",[],(()=>{const e=(t=(0,Rt.RZV)((()=>a)),(0,Rt.FsL)((0,Rt.pdi)((e=>Array.isArray(e)?e.filter((e=>(0,Ot.xLC)(t,e).success)):e)),(0,Rt.YOg)(t)));var t;const a=(0,Rt.Ikc)({path:(0,Rt.YOg)((0,Rt.YjP)()),locale:(0,Rt.YjP)(),command:(0,Rt.Ikc)({type:(0,Rt.euz)("update"),newValue:(0,Rt.YjP)()})});return{TranslationsReviewArray:e,TranslationsReviewItem:a}})),Et=_t("VersionedEntity",[],(()=>{const e=(0,Rt.Ikc)({id:(0,Rt.YjP)(),_v:(0,Rt.aig)()});return{VersionedEntity:e,VersionedManifest:(0,Rt.Ikc)({blockuments:(0,Rt.lqM)((0,Rt.g1P)((0,Rt.YjP)(),e)),items:(0,Rt.lqM)((0,Rt.g1P)((0,Rt.YjP)(),e))})}})),Gt=_t("Asset",[],(()=>({Asset:(0,Rt.Ikc)({id:(0,Rt.YjP)(),path:(0,Rt.YjP)(),name:(0,Rt.YjP)(),width:(0,Rt.lqM)((0,Rt.aig)()),height:(0,Rt.lqM)((0,Rt.aig)())})}))),Xt=_t("BaseItem",["Asset","State","Version"],(({Asset:e},{BaseItemFullState:t,StateMeta:a},{SchemaVersion:r})=>{const i={"@@generic":e=>(0,Rt.E$q)(a,Zt(e))},o={"@@generic":e=>(0,Rt.E$q)((0,Rt.Ikc)({default:e}),(0,Rt.g1P)((0,Rt.YjP)(),i["@@generic"](e)))},n={"@@generic":t=>(0,Rt.Ikc)({id:(0,Rt.YjP)(),blockumentId:(0,Rt.YjP)(),clonedFromId:(0,Rt.lqM)((0,Rt.YjP)()),parentId:(0,Rt.YjP)(),type:(0,Rt.YjP)(),name:(0,Rt.YjP)().check((0,Rt.Ru6)(128)),tagName:(0,Rt.k5n)(["div","figure","figcaption","blockquote"]),locked:(0,Rt.zMY)(),authoringVisible:(0,Rt.zMY)(),initialVisible:(0,Rt.zMY)(),initialState:(0,Rt.YjP)(),states:o["@@generic"](t),assets:(0,Rt.lqM)((0,Rt.g1P)((0,Rt.YjP)(),e)),removed:(0,Rt.zMY)(),_v:r})},l=i["@@generic"](t);return{State:i,States:o,BaseItem:n,BaseItemState:l}})),qt=_t("Blockument",["ItemRef","Trigger","Version"],(({ItemRef:e},{Trigger:t},{SchemaVersion:a})=>({Blockument:(0,Rt.Ikc)({id:(0,Rt.YjP)(),title:(0,Rt.YjP)().check((0,Rt.Ru6)(255)),children:(0,Rt.YOg)(e).check((0,Rt.Ru6)(1)),triggers:(0,Rt.YOg)(t),_v:a})}))),Nt=_t("Border",["Unit"],(({Unit:e})=>({Border:(0,Rt.Ikc)({applied:(0,Rt.zMY)(),type:(0,Rt.k5n)(["none","fill"]),color:(0,Rt.YjP)(),opacity:(0,Rt.aig)(),style:(0,Rt.k5n)(["solid","dashed","dotted"]),width:e})}))),Ut=_t("Fill",["FillColor","FillImage","FillNone"],(({FillColor:e},{FillImage:t},{FillNone:a})=>({Fill:(0,Rt.gMt)("type",[e,t,a])}))),Wt=_t("FillBase",[],(()=>({FillBase:(0,Rt.Ikc)({assetId:(0,Rt.lqM)((0,Rt.YjP)()),color:(0,Rt.lqM)((0,Rt.YjP)()),opacity:(0,Rt.aig)().check((0,Rt.ROM)(0),(0,Rt.wJL)(1))})}))),Qt=_t("FillColor",["FillBase"],(({FillBase:e})=>({FillColor:(0,Rt.X$i)(e,{type:(0,Rt.euz)("color"),color:(0,Rt.YjP)()})}))),Kt=_t("FillImage",["FillBase"],(({FillBase:e})=>{const t=(0,Rt.Ikc)({width:(0,Rt.aig)(),height:(0,Rt.aig)(),left:(0,Rt.aig)(),top:(0,Rt.aig)()});return{FillImageCrop:t,FillImage:(0,Rt.X$i)(e,{type:(0,Rt.euz)("image"),assetId:(0,Rt.YjP)(),crop:t})}})),ea=_t("FillNone",["FillBase"],(({FillBase:e})=>({FillNone:(0,Rt.X$i)(e,{type:(0,Rt.euz)("none")})}))),ta=_t("FillOverlay",["FillColor","FillNone"],(({FillColor:e},{FillNone:t})=>({FillOverlay:(0,Rt.gMt)("type",[e,t])}))),aa=_t("GroupItem",["BaseItem","ItemRef","State"],(({BaseItem:e,State:t},{ItemRef:a},{BaseItemFullState:r})=>{const i=(0,Rt.X$i)(r,{children:(0,Rt.YOg)(a)});return{GroupItemFullState:i,GroupItem:(0,Rt.X$i)(e["@@generic"](i),{type:(0,Rt.euz)("group")}),GroupItemState:t["@@generic"](i)}})),ra=_t("ImageItem",["BaseItem","State"],(({BaseItem:e,State:t},{BaseItemFullState:a})=>{const r=(0,Rt.X$i)(a,{altText:(0,Rt.YjP)()});return{ImageItemFullState:r,ImageItem:(0,Rt.X$i)(e["@@generic"](r),{type:(0,Rt.euz)("image")}),ImageItemState:t["@@generic"](r)}})),ia=_t("Item",["GroupItem","ImageItem","ShapeItem","TextItem","VideoItem"],(({GroupItem:e},{ImageItem:t},{ShapeItem:a},{TextItem:r},{VideoItem:i})=>({Item:(0,Rt.gMt)("type",[e,t,a,r,i])}))),oa=_t("ItemRef",[],(()=>({ItemRef:(0,Rt.Ikc)({id:(0,Rt.YjP)(),clonedFromId:(0,Rt.lqM)((0,Rt.YjP)()),state:(0,Rt.YjP)(),visible:(0,Rt.zMY)()})}))),na=_t("JSONContent",[],(()=>{const e=(0,Rt.E$q)((0,Rt.Ikc)({type:(0,Rt.lqM)((0,Rt.YjP)()),attrs:(0,Rt.lqM)((0,Rt.g1P)((0,Rt.YjP)(),(0,Rt.bzn)())),content:(0,Rt.lqM)((0,Rt.YOg)((0,Rt.RZV)((()=>e)))),marks:(0,Rt.lqM)((0,Rt.YOg)((0,Rt.E$q)((0,Rt.Ikc)({type:(0,Rt.YjP)(),attrs:(0,Rt.lqM)((0,Rt.g1P)((0,Rt.YjP)(),(0,Rt.bzn)()))}),(0,Rt.g1P)((0,Rt.YjP)(),(0,Rt.bzn)())))),text:(0,Rt.lqM)((0,Rt.YjP)())}),(0,Rt.g1P)((0,Rt.YjP)(),(0,Rt.bzn)()));return{JSONContent:e}})),la=_t("Manifest",["Blockument","Item"],(({Blockument:e},{Item:t})=>({Manifest:(0,Rt.Ikc)({blockuments:(0,Rt.lqM)((0,Rt.g1P)((0,Rt.YjP)(),e)),items:(0,Rt.lqM)((0,Rt.g1P)((0,Rt.YjP)(),t))})}))),sa=_t("Padding",["Unit"],(({Unit:e})=>({Padding:(0,Rt.Ikc)({top:e,left:e,bottom:e,right:e})}))),ca=_t("RichTextRef",["JSONContent"],(({JSONContent:e})=>({RichTextRef:(0,Rt.Ikc)({id:(0,Rt.YjP)(),type:(0,Rt.euz)("tiptap"),json:e})}))),da=_t("ShapeItem",["BaseItem","TextItem"],(({BaseItem:e,State:t},{TextItemFullState:a})=>{const r=(0,Rt.X$i)(a,{clipPath:(0,Rt.mee)((0,Rt.euz)("ellipse")),altText:(0,Rt.mee)((0,Rt.YjP)())});return{ShapeItemFullState:r,ShapeItem:(0,Rt.X$i)(e["@@generic"](r),{type:(0,Rt.euz)("shape")}),ShapeItemState:t["@@generic"](r)}})),pa=_t("State",["Border","Fill","FillOverlay","Padding","Unit"],(({Border:e},{Fill:t},{FillOverlay:a},{Padding:r},{Unit:i})=>{const o=(0,Rt.Ikc)({id:(0,Rt.YjP)(),name:(0,Rt.YjP)().check((0,Rt.Ru6)(128))});return{StateMeta:o,BaseItemFullState:(0,Rt.X$i)(o,{x:i,y:i,xOffset:(0,Rt.aig)(),yOffset:(0,Rt.aig)(),position:(0,Rt.euz)("absolute"),width:i,height:i,padding:r,fill:t,overlay:a,aspectRatioLocked:(0,Rt.zMY)(),border:e,borderRadius:(0,Rt.Ikc)({applied:(0,Rt.zMY)(),topLeft:i,topRight:i,bottomRight:i,bottomLeft:i}),rotation:(0,Rt.aig)(),flipX:(0,Rt.zMY)(),flipY:(0,Rt.zMY)()})}})),ha=_t("TextItem",["BaseItem","RichTextRef","State"],(({BaseItem:e,State:t},{RichTextRef:a},{BaseItemFullState:r})=>{const i=(0,Rt.k5n)(["top","middle","bottom"]),o=(0,Rt.X$i)(r,{text:a,textVerticalAlign:i});return{TextVerticalAlign:i,TextItemFullState:o,TextItem:(0,Rt.X$i)(e["@@generic"](o),{type:(0,Rt.euz)("text")}),TextItemState:t["@@generic"](o)}})),ma=_t("Trigger",[],(()=>{const e=(0,Rt.Ikc)({id:(0,Rt.YjP)(),event:(0,Rt.k5n)(["click","hover","mediaPlay","mediaPause","mediaEnd"]),sourceId:(0,Rt.lqM)((0,Rt.YjP)())}),t=(0,Rt.X$i)(e,{action:(0,Rt.k5n)(["mediaPause","mediaPlay","mediaEnd"]),targetId:(0,Rt.YjP)()}),a=(0,Rt.X$i)(e,{action:(0,Rt.euz)("changeState"),targetId:(0,Rt.YjP)(),targetState:(0,Rt.YjP)()}),r=(0,Rt.X$i)(e,{action:(0,Rt.euz)("changeVisibility"),targetId:(0,Rt.YjP)(),targetVisibility:(0,Rt.zMY)()});return{TriggerMediaAction:t,TriggerChangeState:a,TriggerChangeVisibility:r,Trigger:(0,Rt.gMt)("action",[a,r,t])}})),ua=_t("Unit",[],(()=>({Unit:(0,Rt.Ikc)({unit:(0,Rt.k5n)(["px","%","auto","fr"]),value:(0,Rt.aig)()})}))),ga=_t("Version",[],(()=>({SchemaVersion:(0,Rt.euz)(2)}))),fa=_t("VideoItem",["BaseItem","State"],(({BaseItem:e,State:t},{BaseItemFullState:a})=>{const r=(0,Rt.Ikc)({default:(0,Rt.YjP)()}),i=(0,Rt.X$i)(a,{videoSources:r});return{VideoAssets:r,VideoItemFullState:i,VideoItem:(0,Rt.X$i)(e["@@generic"](i),{type:(0,Rt.euz)("video")}),VideoItemState:t["@@generic"](i)}})),va=_t("AudioItem",["BaseItem","State"],(({BaseItem:e,State:t},{BaseItemFullState:a})=>{const r=(0,Rt.Ikc)({default:(0,Rt.YjP)()}),i=(0,Rt.X$i)(a,{audioSources:r});return{AudioAssets:r,AudioItemFullState:i,AudioItem:(0,Rt.X$i)(e["@@generic"](i),{type:(0,Rt.euz)("audio")}),AudioItemState:t["@@generic"](i)}})),Sa=_t("Item",["AudioItem","GroupItem","ShapeItem","TextItem","VideoItem"],(({AudioItem:e},{GroupItem:t},{ShapeItem:a},{TextItem:r},{VideoItem:i})=>({Item:(0,Rt.gMt)("type",[e,t,a,r,i])}))),Ia=_t("Version",[],(()=>({SchemaVersion:(0,Rt.euz)(3)}))),ba=_t("Blockument",["ItemRef","Trigger","Version"],(({ItemRef:e},{Trigger:t},{SchemaVersion:a})=>({Blockument:(0,Rt.Ikc)({id:(0,Rt.YjP)(),title:(0,Rt.YjP)().check((0,Rt.Ru6)(255)),children:(0,Rt.YOg)(e).check((0,Rt.Ru6)(1)),triggers:(0,Rt.YOg)(t),fonts:(0,Rt.lqM)((0,Rt.g1P)((0,Rt.YjP)(),(0,Rt.YjP)())),_v:a})}))),xa=_t("ShapeDef",[],(()=>{const e=(0,Rt.Ikc)({type:(0,Rt.euz)("rectangle"),borderRadius:(0,Rt.lqM)((0,Rt.Ikc)({topLeft:(0,Rt.aig)(),topRight:(0,Rt.aig)(),bottomRight:(0,Rt.aig)(),bottomLeft:(0,Rt.aig)()}))}),t=(0,Rt.Ikc)({type:(0,Rt.euz)("ellipse")}),a=(0,Rt.Ikc)({type:(0,Rt.euz)("star"),sidePairs:(0,Rt.aig)().check((0,Rt.ROM)(3)),innerRadius:(0,Rt.aig)().check((0,Rt.ROM)(.1),(0,Rt.wJL)(1))}),r=(0,Rt.Ikc)({type:(0,Rt.euz)("cloud")});return{ShapeRectangle:e,ShapeEllipse:t,ShapeStar:a,ShapeCloud:r,ShapeDef:(0,Rt.gMt)("type",[e,t,a,r])}})),wa=_t("ShapeItem",["BaseItem","TextItem"],(({BaseItem:e,State:t},{TextItemFullState:a})=>{const r=(0,Rt.X$i)(a,{altText:(0,Rt.mee)((0,Rt.YjP)())});return{ShapeItemFullState:r,ShapeItem:(0,Rt.X$i)(e["@@generic"](r),{type:(0,Rt.euz)("shape")}),ShapeItemState:t["@@generic"](r)}})),ya=_t("State",["Border","Fill","FillOverlay","Padding","ShapeDef","Unit"],(({Border:e},{Fill:t},{FillOverlay:a},{Padding:r},{ShapeDef:i},{Unit:o})=>{const n=(0,Rt.Ikc)({id:(0,Rt.YjP)(),name:(0,Rt.YjP)().check((0,Rt.Ru6)(128))});return{StateMeta:n,BaseItemFullState:(0,Rt.X$i)(n,{x:o,y:o,xOffset:(0,Rt.aig)(),yOffset:(0,Rt.aig)(),position:(0,Rt.euz)("absolute"),width:o,height:o,padding:r,fill:t,overlay:a,aspectRatioLocked:(0,Rt.zMY)(),border:e,clipDef:i,rotation:(0,Rt.aig)(),flipX:(0,Rt.zMY)(),flipY:(0,Rt.zMY)()})}})),ka=_t("Version",[],(()=>({SchemaVersion:(0,Rt.euz)(4)}))),Ca=_t("ShapeDef",[],(()=>{const e=(0,Rt.Ikc)({type:(0,Rt.euz)("rectangle"),borderRadius:(0,Rt.lqM)((0,Rt.Ikc)({topLeft:(0,Rt.aig)(),topRight:(0,Rt.aig)(),bottomRight:(0,Rt.aig)(),bottomLeft:(0,Rt.aig)()}))}),t=(0,Rt.Ikc)({type:(0,Rt.euz)("ellipse")}),a=(0,Rt.Ikc)({type:(0,Rt.euz)("star"),sidePairs:(0,Rt.aig)().check((0,Rt.ROM)(3)),innerRadius:(0,Rt.aig)().check((0,Rt.ROM)(.1),(0,Rt.wJL)(1))}),r=(0,Rt.Ikc)({type:(0,Rt.euz)("cloud")}),i=(0,Rt.Ikc)({type:(0,Rt.euz)("plus"),stroke:(0,Rt.aig)().check((0,Rt.ROM)(.01),(0,Rt.wJL)(1))}),o=(0,Rt.Ikc)({type:(0,Rt.euz)("triangle")}),n=(0,Rt.Ikc)({type:(0,Rt.euz)("bookmark"),cutoutInset:(0,Rt.aig)().check((0,Rt.ROM)(0),(0,Rt.wJL)(.8))}),l=(0,Rt.Ikc)({type:(0,Rt.euz)("chevron"),outsideCornerXCoords:(0,Rt.aig)().check((0,Rt.ROM)(.7),(0,Rt.wJL)(1)),insideCenterXCoord:(0,Rt.aig)().check((0,Rt.ROM)(0),(0,Rt.wJL)(.3))}),s=(0,Rt.Ikc)({type:(0,Rt.euz)("octagon")}),c=(0,Rt.Ikc)({type:(0,Rt.euz)("parallelogram"),shear:(0,Rt.aig)().check((0,Rt.ROM)(0),(0,Rt.wJL)(1))});return{ShapeRectangle:e,ShapeEllipse:t,ShapeStar:a,ShapeCloud:r,ShapePlus:i,ShapeTriangle:o,ShapeBookmark:n,ShapeChevron:l,ShapeOctagon:s,ShapeParallelogram:c,ShapeDef:(0,Rt.gMt)("type",[n,l,r,t,s,i,e,a,o,c])}})),Ta=_t("State",["Border","Fill","FillOverlay","Padding","ShapeDef","Unit"],(({Border:e},{Fill:t},{FillOverlay:a},{Padding:r},{ShapeDef:i},{Unit:o})=>{const n=(0,Rt.Ikc)({id:(0,Rt.YjP)(),name:(0,Rt.YjP)().check((0,Rt.Ru6)(128))});return{StateMeta:n,BaseItemFullState:(0,Rt.X$i)(n,{x:o,y:o,xOffset:(0,Rt.aig)(),yOffset:(0,Rt.aig)(),position:(0,Rt.euz)("absolute"),width:o,height:o,padding:r,fill:t,overlay:a,aspectRatioLocked:(0,Rt.zMY)(),border:e,clipDef:i,rotation:(0,Rt.aig)(),flipX:(0,Rt.zMY)(),flipY:(0,Rt.zMY)(),authoringAspectRatioCropLock:(0,Rt.k5n)(["freeform","preset","none"])})}})),Ba=_t("Version",[],(()=>({SchemaVersion:(0,Rt.euz)(5)}))),Ma=_t("ShapeDef",[],(()=>{const e=(0,Rt.Ikc)({type:(0,Rt.euz)("rectangle"),borderRadius:(0,Rt.lqM)((0,Rt.Ikc)({topLeft:(0,Rt.aig)(),topRight:(0,Rt.aig)(),bottomRight:(0,Rt.aig)(),bottomLeft:(0,Rt.aig)()}))}),t=(0,Rt.Ikc)({type:(0,Rt.euz)("ellipse")}),a=(0,Rt.Ikc)({type:(0,Rt.euz)("star"),sidePairs:(0,Rt.aig)().check((0,Rt.ROM)(3)),innerRadius:(0,Rt.aig)().check((0,Rt.ROM)(.1),(0,Rt.wJL)(1))}),r=(0,Rt.Ikc)({type:(0,Rt.euz)("cloud")}),i=(0,Rt.Ikc)({type:(0,Rt.euz)("plus"),stroke:(0,Rt.aig)().check((0,Rt.ROM)(.01),(0,Rt.wJL)(1))}),o=(0,Rt.Ikc)({type:(0,Rt.euz)("triangle"),topVertex:(0,Rt.lqM)((0,Rt.aig)().check((0,Rt.ROM)(0),(0,Rt.wJL)(1)))}),n=(0,Rt.Ikc)({type:(0,Rt.euz)("bookmark"),cutoutInset:(0,Rt.aig)().check((0,Rt.ROM)(0),(0,Rt.wJL)(.8))}),l=(0,Rt.Ikc)({type:(0,Rt.euz)("chevron"),outsideCornerXCoords:(0,Rt.aig)().check((0,Rt.ROM)(.7),(0,Rt.wJL)(1)),insideCenterXCoord:(0,Rt.aig)().check((0,Rt.ROM)(0),(0,Rt.wJL)(.3))}),s=(0,Rt.Ikc)({type:(0,Rt.euz)("octagon")}),c=(0,Rt.Ikc)({type:(0,Rt.euz)("parallelogram"),shear:(0,Rt.aig)().check((0,Rt.ROM)(0),(0,Rt.wJL)(1))}),d=(0,Rt.Ikc)({type:(0,Rt.euz)("shield")}),p=(0,Rt.Ikc)({type:(0,Rt.euz)("speechBubble")}),h=(0,Rt.Ikc)({type:(0,Rt.euz)("arrow"),thickness:(0,Rt.aig)().check((0,Rt.ROM)(.1),(0,Rt.wJL)(.5)),headLength:(0,Rt.aig)().check((0,Rt.ROM)(.1),(0,Rt.wJL)(.9))});return{ShapeRectangle:e,ShapeEllipse:t,ShapeStar:a,ShapeCloud:r,ShapePlus:i,ShapeTriangle:o,ShapeBookmark:n,ShapeChevron:l,ShapeOctagon:s,ShapeParallelogram:c,ShapeShield:d,ShapeSpeechBubble:p,ShapeArrow:h,ShapeDef:(0,Rt.gMt)("type",[n,l,r,t,s,i,e,a,o,c,d,p,h])}})),La=_t("TextItem",["BaseItem","RichTextRef","State"],(({BaseItem:e,State:t},{RichTextRef:a},{BaseItemFullState:r})=>{const i=(0,Rt.k5n)(["top","middle","bottom"]),o=(0,Rt.Ikc)({top:(0,Rt.aig)(),left:(0,Rt.aig)(),bottom:(0,Rt.aig)(),right:(0,Rt.aig)()}),n=(0,Rt.X$i)(r,{text:a,textVerticalAlign:i,textPadding:o});return{TextVerticalAlign:i,TextPadding:o,TextItemFullState:n,TextItem:(0,Rt.X$i)(e["@@generic"](n),{type:(0,Rt.euz)("text")}),TextItemState:t["@@generic"](n)}})),Aa=_t("Version",[],(()=>({SchemaVersion:(0,Rt.euz)(6)}))),Da=_t("Version",[],(()=>({SchemaVersion:(0,Rt.euz)(7)}))),Fa=_t("Version",[],(()=>({SchemaVersion:(0,Rt.euz)(8)}))),za=_t("Blockument",["ItemRef","Trigger","Version"],(({ItemRef:e},{Trigger:t},{SchemaVersion:a})=>({Blockument:(0,Rt.Ikc)({id:(0,Rt.YjP)(),title:(0,Rt.YjP)().check((0,Rt.Ru6)(255)),children:(0,Rt.YOg)(e).check((0,Rt.BpQ)(0),(0,Rt.Ru6)(1)),triggers:(0,Rt.YOg)(t),fonts:(0,Rt.lqM)((0,Rt.g1P)((0,Rt.YjP)(),(0,Rt.YjP)())),_v:a})}))),Va=_t("GroupItem",["BaseItem","ItemRef","State"],(({BaseItem:e,State:t},{ItemRef:a},{BaseItemFullState:r})=>{const i=(0,Rt.X$i)(r,{_groupBrand:(0,Rt.lqM)((0,Rt.ZmZ)())});return{GroupItemFullState:i,GroupItem:(0,Rt.X$i)(e["@@generic"](i),{type:(0,Rt.euz)("group"),children:(0,Rt.YOg)(a)}),GroupItemState:t["@@generic"](i)}})),$a=_t("ItemRef",[],(()=>({ItemRef:(0,Rt.Ikc)({id:(0,Rt.YjP)(),clonedFromId:(0,Rt.lqM)((0,Rt.YjP)())})}))),Ja=_t("Version",[],(()=>({SchemaVersion:(0,Rt.euz)(9)}))),Pa=_t("DropShadow",[],(()=>{const e=(0,Rt.Ikc)({x:(0,Rt.aig)(),y:(0,Rt.aig)()}),t=(0,Rt.Ikc)({applied:(0,Rt.euz)(!1)}),a=(0,Rt.Ikc)({applied:(0,Rt.euz)(!0),offset:e,blur:(0,Rt.aig)().check((0,Rt.ROM)(0)),spread:(0,Rt.aig)().check((0,Rt.ROM)(0)),color:(0,Rt.YjP)(),opacity:(0,Rt.aig)().check((0,Rt.ROM)(0),(0,Rt.wJL)(1))});return{DropShadow:(0,Rt.gMt)("applied",[t,a])}})),Ra=_t("ShapeItem",["BaseItem","DropShadow","TextItem"],(({BaseItem:e,State:t},{DropShadow:a},{TextItemFullState:r})=>{const i=(0,Rt.X$i)(r,{altText:(0,Rt.mee)((0,Rt.YjP)()),dropShadow:a});return{ShapeItemFullState:i,ShapeItem:(0,Rt.X$i)(e["@@generic"](i),{type:(0,Rt.euz)("shape")}),ShapeItemState:t["@@generic"](i)}})),Za=_t("Version",[],(()=>({SchemaVersion:(0,Rt.euz)(10)}))),Oa=_t("Trigger",[],(()=>{const e=(0,Rt.Ikc)({type:(0,Rt.k5n)(["mediaPause","mediaPlay","mediaEnd"]),targetId:(0,Rt.YOg)((0,Rt.YjP)())}),t=(0,Rt.Ikc)({type:(0,Rt.euz)("changeState"),targetId:(0,Rt.PVZ)([(0,Rt.YjP)()]),targetState:(0,Rt.YjP)()}),a=(0,Rt.Ikc)({type:(0,Rt.euz)("changeVisibility"),targetId:(0,Rt.YOg)((0,Rt.YjP)()),targetVisibility:(0,Rt.zMY)()}),r=(0,Rt.gMt)("type",[e,t,a]);return{TriggerMediaAction:e,TriggerChangeStateAction:t,TriggerChangeVisibilityAction:a,TriggerAction:r,Trigger:(0,Rt.Ikc)({id:(0,Rt.YjP)(),event:(0,Rt.k5n)(["click","hover","mediaPlay","mediaPause","mediaEnd"]),sourceId:(0,Rt.lqM)((0,Rt.YjP)()),actions:(0,Rt.YOg)(r)})}})),_a=_t("Version",[],(()=>({SchemaVersion:(0,Rt.euz)(11)}))),ja=_t("BaseItem",["Asset","State","Version"],(({Asset:e},{BaseItemFullState:t,StateMeta:a},{SchemaVersion:r})=>{const i={"@@generic":e=>(0,Rt.E$q)(a,Zt(e))},o={"@@generic":e=>(0,Rt.E$q)((0,Rt.Ikc)({default:e}),(0,Rt.g1P)((0,Rt.YjP)(),i["@@generic"](e)))},n={"@@generic":t=>(0,Rt.Ikc)({id:(0,Rt.YjP)(),blockumentId:(0,Rt.YjP)(),clonedFromId:(0,Rt.lqM)((0,Rt.YjP)()),parentId:(0,Rt.YjP)(),type:(0,Rt.YjP)(),name:(0,Rt.YjP)().check((0,Rt.Ru6)(128)),tagName:(0,Rt.k5n)(["div","figure","figcaption","blockquote"]),locked:(0,Rt.zMY)(),authoringVisible:(0,Rt.zMY)(),initialVisible:(0,Rt.zMY)(),initialState:(0,Rt.YjP)(),states:o["@@generic"](t),assets:(0,Rt.g1P)((0,Rt.YjP)(),e),removed:(0,Rt.zMY)(),_v:r})},l=i["@@generic"](t);return{State:i,States:o,BaseItem:n,BaseItemState:l}})),Ya=_t("Fill",["FillBase"],(({FillColorFields:e,FillImageFields:t})=>{const a=(0,Rt.k5n)(["color","image"]);return{Fill:(0,Rt.E$q)((0,Rt.E$q)(e,t),(0,Rt.Ikc)({type:a}))}})),Ha=_t("FillBase",[],(()=>{const e=(0,Rt.Ikc)({width:(0,Rt.aig)(),height:(0,Rt.aig)(),left:(0,Rt.aig)(),top:(0,Rt.aig)()}),t=(0,Rt.Ikc)({opacity:(0,Rt.aig)().check((0,Rt.ROM)(0),(0,Rt.wJL)(1))});return{FillImageCrop:e,FillBase:t,FillColorFields:(0,Rt.X$i)(t,{color:(0,Rt.lqM)((0,Rt.YjP)())}),FillImageFields:(0,Rt.X$i)(t,{assetId:(0,Rt.lqM)((0,Rt.YjP)()),crop:e})}})),Ea=_t("OverlayFill",["FillBase"],(({FillColorFields:e})=>({OverlayFill:(0,Rt.X$i)(e,{type:(0,Rt.euz)("color")})}))),Ga=_t("State",["Border","Fill","OverlayFill","Padding","ShapeDef","Unit"],(({Border:e},{Fill:t},{OverlayFill:a},{Padding:r},{ShapeDef:i},{Unit:o})=>{const n=(0,Rt.Ikc)({id:(0,Rt.YjP)(),name:(0,Rt.YjP)().check((0,Rt.Ru6)(128))});return{StateMeta:n,BaseItemFullState:(0,Rt.X$i)(n,{x:o,y:o,xOffset:(0,Rt.aig)(),yOffset:(0,Rt.aig)(),position:(0,Rt.euz)("absolute"),width:o,height:o,padding:r,fill:t,overlay:a,aspectRatioLocked:(0,Rt.zMY)(),border:e,clipDef:i,rotation:(0,Rt.aig)(),flipX:(0,Rt.zMY)(),flipY:(0,Rt.zMY)(),authoringAspectRatioCropLock:(0,Rt.k5n)(["freeform","preset","none"])})}})),Xa=_t("Version",[],(()=>({SchemaVersion:(0,Rt.euz)(12)}))),qa=_t("BaseItem",["Asset","State","Version"],(({Asset:e},{BaseItemFullState:t,StateMeta:a},{SchemaVersion:r})=>{const i={"@@generic":e=>(0,Rt.E$q)(a,Zt(e))},o={"@@generic":e=>(0,Rt.E$q)((0,Rt.Ikc)({default:e}),(0,Rt.g1P)((0,Rt.YjP)(),i["@@generic"](e)))},n={"@@generic":t=>(0,Rt.Ikc)({id:(0,Rt.YjP)(),blockumentId:(0,Rt.YjP)(),clonedFromId:(0,Rt.lqM)((0,Rt.YjP)()),parentId:(0,Rt.YjP)(),type:(0,Rt.YjP)(),name:(0,Rt.YjP)().check((0,Rt.Ru6)(128)),tagName:(0,Rt.k5n)(["div","figure","figcaption","blockquote"]),locked:(0,Rt.zMY)(),authoringVisible:(0,Rt.zMY)(),initialVisible:(0,Rt.zMY)(),initialState:(0,Rt.YjP)(),states:o["@@generic"](t),assets:(0,Rt.g1P)((0,Rt.YjP)(),e),removed:(0,Rt.zMY)(),layer:(0,Rt.lqM)((0,Rt.YjP)()),aiExperiment:(0,Rt.lqM)((0,Rt.zMY)()),_v:r})},l=i["@@generic"](t);return{State:i,States:o,BaseItem:n,BaseItemState:l}})),Na=_t("Blockument",["ItemRef","Trigger","Version"],(({ItemRef:e},{Trigger:t},{SchemaVersion:a})=>({Blockument:(0,Rt.Ikc)({id:(0,Rt.YjP)(),title:(0,Rt.YjP)().check((0,Rt.Ru6)(255)),children:(0,Rt.YOg)(e).check((0,Rt.BpQ)(0),(0,Rt.Ru6)(1)),triggers:(0,Rt.YOg)(t),fonts:(0,Rt.lqM)((0,Rt.g1P)((0,Rt.YjP)(),(0,Rt.YjP)())),layers:(0,Rt.YOg)((0,Rt.Ikc)({id:(0,Rt.YjP)(),name:(0,Rt.YjP)()})),aiExperiment:(0,Rt.lqM)((0,Rt.zMY)()),_v:a})}))),Ua=_t("Fill",[],(()=>{const e=(0,Rt.Ikc)({width:(0,Rt.aig)(),height:(0,Rt.aig)(),left:(0,Rt.aig)(),top:(0,Rt.aig)()}),t=(0,Rt.Ikc)({opacity:(0,Rt.aig)().check((0,Rt.ROM)(0),(0,Rt.wJL)(1))}),a=(0,Rt.k5n)(["color","image"]),r=(0,Rt.X$i)(t,{color:(0,Rt.lqM)((0,Rt.YjP)())});return{FillImageCrop:e,FillColorFields:r,Fill:(0,Rt.X$i)(r,{type:a,assetId:(0,Rt.lqM)((0,Rt.YjP)()),crop:e})}})),Wa=_t("State",["Border","Fill","Padding","ShapeDef","Unit"],(({Border:e},{Fill:t,FillColorFields:a},{Padding:r},{ShapeDef:i},{Unit:o})=>{const n=(0,Rt.Ikc)({id:(0,Rt.YjP)(),name:(0,Rt.YjP)().check((0,Rt.Ru6)(128))});return{StateMeta:n,BaseItemFullState:(0,Rt.X$i)(n,{x:o,y:o,xOffset:(0,Rt.aig)(),yOffset:(0,Rt.aig)(),position:(0,Rt.euz)("absolute"),width:o,height:o,padding:r,fill:t,opacity:(0,Rt.aig)().check((0,Rt.ROM)(0),(0,Rt.wJL)(1)),overlay:a,aspectRatioLocked:(0,Rt.zMY)(),border:e,clipDef:i,rotation:(0,Rt.aig)(),flipX:(0,Rt.zMY)(),flipY:(0,Rt.zMY)(),authoringAspectRatioCropLock:(0,Rt.k5n)(["freeform","preset","none"])})}})),Qa=_t("Trigger",[],(()=>{const e=(0,Rt.Ikc)({type:(0,Rt.k5n)(["mediaPause","mediaPlay","mediaEnd"]),targetId:(0,Rt.YOg)((0,Rt.YjP)())}),t=(0,Rt.Ikc)({type:(0,Rt.euz)("changeState"),targetId:(0,Rt.PVZ)([(0,Rt.YjP)()]),targetState:(0,Rt.YjP)()}),a=(0,Rt.Ikc)({type:(0,Rt.euz)("changeVisibility"),targetId:(0,Rt.YOg)((0,Rt.YjP)()),targetVisibility:(0,Rt.zMY)()}),r=(0,Rt.Ikc)({type:(0,Rt.euz)("changeLayer"),layerId:(0,Rt.mee)((0,Rt.YjP)())}),i=(0,Rt.gMt)("type",[e,t,a,r]);return{TriggerMediaAction:e,TriggerChangeStateAction:t,TriggerChangeVisibilityAction:a,TriggerChangeLayerAction:r,TriggerAction:i,Trigger:(0,Rt.Ikc)({id:(0,Rt.YjP)(),event:(0,Rt.k5n)(["click","hover","mediaPlay","mediaPause","mediaEnd"]),sourceId:(0,Rt.lqM)((0,Rt.YjP)()),actions:(0,Rt.YOg)(i)})}})),Ka=_t("Version",[],(()=>({SchemaVersion:(0,Rt.euz)(13)}))),er=_t("Version",[],(()=>({SchemaVersion:(0,Rt.euz)(14)}))),tr=_t("ShapeDef",[],(()=>{const e=(0,Rt.Ikc)({type:(0,Rt.YjP)()}),t=(0,Rt.X$i)(e,{cornerRounding:(0,Rt.aig)().check((0,Rt.ROM)(0))}),a=(0,Rt.X$i)(e,{type:(0,Rt.euz)("rectangle"),borderRadius:(0,Rt.lqM)((0,Rt.Ikc)({topLeft:(0,Rt.aig)(),topRight:(0,Rt.aig)(),bottomRight:(0,Rt.aig)(),bottomLeft:(0,Rt.aig)()}))}),r=(0,Rt.X$i)(e,{type:(0,Rt.euz)("ellipse")}),i=(0,Rt.X$i)(t,{type:(0,Rt.euz)("star"),sidePairs:(0,Rt.aig)().check((0,Rt.ROM)(3)),innerRadius:(0,Rt.aig)().check((0,Rt.ROM)(.1),(0,Rt.wJL)(1))}),o=(0,Rt.X$i)(e,{type:(0,Rt.euz)("cloud")}),n=(0,Rt.X$i)(t,{type:(0,Rt.euz)("plus"),stroke:(0,Rt.aig)().check((0,Rt.ROM)(.01),(0,Rt.wJL)(1))}),l=(0,Rt.X$i)(t,{type:(0,Rt.euz)("triangle"),topVertex:(0,Rt.lqM)((0,Rt.aig)().check((0,Rt.ROM)(0),(0,Rt.wJL)(1)))}),s=(0,Rt.X$i)(t,{type:(0,Rt.euz)("bookmark"),cutoutInset:(0,Rt.aig)().check((0,Rt.ROM)(0),(0,Rt.wJL)(.8))}),c=(0,Rt.X$i)(t,{type:(0,Rt.euz)("chevron"),outsideCornerXCoords:(0,Rt.aig)().check((0,Rt.ROM)(.7),(0,Rt.wJL)(1)),insideCenterXCoord:(0,Rt.aig)().check((0,Rt.ROM)(0),(0,Rt.wJL)(.3))}),d=(0,Rt.X$i)(t,{type:(0,Rt.euz)("octagon")}),p=(0,Rt.X$i)(t,{type:(0,Rt.euz)("parallelogram"),shear:(0,Rt.aig)().check((0,Rt.ROM)(0),(0,Rt.wJL)(1))}),h=(0,Rt.X$i)(t,{type:(0,Rt.euz)("shield")}),m=(0,Rt.X$i)(t,{type:(0,Rt.euz)("speechBubble")}),u=(0,Rt.X$i)(t,{type:(0,Rt.euz)("arrow"),thickness:(0,Rt.aig)().check((0,Rt.ROM)(.1),(0,Rt.wJL)(.5)),headLength:(0,Rt.aig)().check((0,Rt.ROM)(.1),(0,Rt.wJL)(.9))});return{ShapeDefBase:e,ShapeDefRoundedCorners:t,ShapeRectangle:a,ShapeEllipse:r,ShapeStar:i,ShapeCloud:o,ShapePlus:n,ShapeTriangle:l,ShapeBookmark:s,ShapeChevron:c,ShapeOctagon:d,ShapeParallelogram:p,ShapeShield:h,ShapeSpeechBubble:m,ShapeArrow:u,ShapeDef:(0,Rt.gMt)("type",[s,c,o,r,d,n,a,i,l,p,h,m,u])}})),ar=_t("Version",[],(()=>({SchemaVersion:(0,Rt.euz)(15)}))),rr=_t("Backdrop",["Border","DropShadow","Fill","ShapeDef"],(({Border:e},{DropShadow:t},{FillColor:a,FillImage:r},{ShapeDef:i})=>{const o=(0,Rt.Ikc)({border:e,overlay:a}),n=(0,Rt.X$i)(o,{dropShadow:t,shapeDef:i}),l=(0,Rt.Ikc)({fill:a}),s=(0,Rt.Ikc)({fill:r});return{MinimalBackdropData:o,ExtendedBackdropData:n,BackdropColorFillData:l,BackdropImageFillData:s,GroupBackdropStateData:(0,Rt.X$i)((0,Rt.X$i)(o,l.def.shape),{}),ShapeBackdropStateData:(0,Rt.X$i)((0,Rt.X$i)(n,l.def.shape),{}),ImageBackdropStateData:(0,Rt.X$i)((0,Rt.X$i)(n,s.def.shape),{})}})),ir=_t("Fill",[],(()=>{const e=(0,Rt.Ikc)({width:(0,Rt.aig)(),height:(0,Rt.aig)(),left:(0,Rt.aig)(),top:(0,Rt.aig)()}),t=(0,Rt.Ikc)({opacity:(0,Rt.aig)().check((0,Rt.ROM)(0),(0,Rt.wJL)(1))});return{FillImageCrop:e,FillColor:(0,Rt.X$i)(t,{color:(0,Rt.lqM)((0,Rt.YjP)())}),FillImage:(0,Rt.X$i)(t,{assetId:(0,Rt.lqM)((0,Rt.YjP)()),crop:e})}})),or=_t("GroupItem",["Backdrop","BaseItem","ItemRef","State"],(({GroupBackdropStateData:e},{BaseItem:t,State:a},{ItemRef:r},{BaseItemFullState:i})=>{const o=(0,Rt.X$i)((0,Rt.X$i)(i,e.def.shape),{_groupBrand:(0,Rt.lqM)((0,Rt.ZmZ)())});return{GroupItemFullState:o,GroupItem:(0,Rt.X$i)(t["@@generic"](o),{type:(0,Rt.euz)("group"),children:(0,Rt.YOg)(r)}),GroupItemState:a["@@generic"](o)}})),nr=_t("ImageItem",["Backdrop","BaseItem","State"],(({ImageBackdropStateData:e},{BaseItem:t,State:a},{BaseItemFullState:r})=>{const i=(0,Rt.X$i)((0,Rt.X$i)(r,e.def.shape),{altText:(0,Rt.YjP)()});return{ImageItemFullState:i,ImageItem:(0,Rt.X$i)(t["@@generic"](i),{type:(0,Rt.euz)("image")}),ImageItemState:a["@@generic"](i)}})),lr=_t("Item",["AudioItem","GroupItem","ImageItem","ShapeItem","TextItem","VideoItem"],(({AudioItem:e},{GroupItem:t},{ImageItem:a},{ShapeItem:r},{TextItem:i},{VideoItem:o})=>({Item:(0,Rt.gMt)("type",[e,t,a,r,i,o])}))),sr=_t("ShapeItem",["Backdrop","BaseItem","TextItem"],(({ShapeBackdropStateData:e},{BaseItem:t,State:a},{TextItemFullState:r})=>{const i=(0,Rt.X$i)((0,Rt.X$i)(r,e.def.shape),{});return{ShapeItemFullState:i,ShapeItem:(0,Rt.X$i)(t["@@generic"](i),{type:(0,Rt.euz)("shape")}),ShapeItemState:a["@@generic"](i)}})),cr=_t("State",["Padding","Unit"],(({Padding:e},{Unit:t})=>{const a=(0,Rt.Ikc)({id:(0,Rt.YjP)(),name:(0,Rt.YjP)().check((0,Rt.Ru6)(128))});return{StateMeta:a,BaseItemFullState:(0,Rt.X$i)(a,{x:t,y:t,xOffset:(0,Rt.aig)(),yOffset:(0,Rt.aig)(),position:(0,Rt.euz)("absolute"),width:t,height:t,padding:e,opacity:(0,Rt.aig)().check((0,Rt.ROM)(0),(0,Rt.wJL)(1)),aspectRatioLocked:(0,Rt.zMY)(),rotation:(0,Rt.aig)(),flipX:(0,Rt.zMY)(),flipY:(0,Rt.zMY)(),authoringAspectRatioCropLock:(0,Rt.k5n)(["freeform","preset","none"])})}})),dr=_t("Version",[],(()=>({SchemaVersion:(0,Rt.euz)(16)}))),pr=_t("BaseItem",["Asset","State","Version"],(({Asset:e},{BaseItemFullState:t,StateMeta:a},{SchemaVersion:r})=>{const i={"@@generic":e=>(0,Rt.E$q)(a,Zt(e))},o={"@@generic":e=>(0,Rt.E$q)((0,Rt.Ikc)({default:e}),(0,Rt.g1P)((0,Rt.YjP)(),i["@@generic"](e)))},n={"@@generic":t=>(0,Rt.Ikc)({id:(0,Rt.YjP)(),blockumentId:(0,Rt.YjP)(),clonedFromId:(0,Rt.lqM)((0,Rt.YjP)()),parentId:(0,Rt.YjP)(),type:(0,Rt.YjP)(),name:(0,Rt.YjP)().check((0,Rt.Ru6)(128)),locked:(0,Rt.zMY)(),authoringVisible:(0,Rt.zMY)(),initialVisible:(0,Rt.zMY)(),initialState:(0,Rt.YjP)(),states:o["@@generic"](t),assets:(0,Rt.g1P)((0,Rt.YjP)(),e),removed:(0,Rt.zMY)(),layer:(0,Rt.lqM)((0,Rt.YjP)()),aiExperiment:(0,Rt.lqM)((0,Rt.zMY)()),_v:r})},l=i["@@generic"](t);return{State:i,States:o,BaseItem:n,BaseItemState:l}})),hr=_t("State",["Unit"],(({Unit:e})=>{const t=(0,Rt.Ikc)({id:(0,Rt.YjP)(),name:(0,Rt.YjP)().check((0,Rt.Ru6)(128))});return{StateMeta:t,BaseItemFullState:(0,Rt.X$i)(t,{x:e,y:e,xOffset:(0,Rt.aig)(),yOffset:(0,Rt.aig)(),width:e,height:e,opacity:(0,Rt.aig)().check((0,Rt.ROM)(0),(0,Rt.wJL)(1)),aspectRatioLocked:(0,Rt.zMY)(),rotation:(0,Rt.aig)(),flipX:(0,Rt.zMY)(),flipY:(0,Rt.zMY)(),authoringAspectRatioCropLock:(0,Rt.k5n)(["freeform","preset","none"])})}})),mr=_t("Version",[],(()=>({SchemaVersion:(0,Rt.euz)(17)}))),ur=_t("Blockument",["ItemRef","Trigger","Version"],(({ItemRef:e},{Trigger:t},{SchemaVersion:a})=>({Blockument:(0,Rt.Ikc)({id:(0,Rt.YjP)(),title:(0,Rt.YjP)().check((0,Rt.Ru6)(255)),children:(0,Rt.YOg)(e).check((0,Rt.BpQ)(0),(0,Rt.Ru6)(1)),triggers:(0,Rt.YOg)(t),fonts:(0,Rt.lqM)((0,Rt.g1P)((0,Rt.YjP)(),(0,Rt.YjP)())),layers:(0,Rt.YOg)((0,Rt.Ikc)({id:(0,Rt.YjP)(),name:(0,Rt.YjP)()})),aiExperiment:(0,Rt.lqM)((0,Rt.zMY)()),authoringOpened:(0,Rt.zMY)(),_v:a})}))),gr=_t("Version",[],(()=>({SchemaVersion:(0,Rt.euz)(18)}))),fr=_t("ShapeItem",["Backdrop","BaseItem","TextItem"],(({ShapeBackdropStateData:e},{BaseItem:t,State:a},{TextItemFullState:r})=>{const i=(0,Rt.X$i)((0,Rt.X$i)(r,e.def.shape),{altText:(0,Rt.YjP)()});return{ShapeItemFullState:i,ShapeItem:(0,Rt.X$i)(t["@@generic"](i),{type:(0,Rt.euz)("shape")}),ShapeItemState:a["@@generic"](i)}})),vr=_t("Version",[],(()=>({SchemaVersion:(0,Rt.euz)(19)}))),Sr=_t("Version",[],(()=>({SchemaVersion:(0,Rt.euz)(20)}))),Ir=_t("AudioItem",["BaseItem","State"],(({BaseItem:e,State:t},{BaseItemFullState:a})=>{const r=(0,Rt.Ikc)({default:(0,Rt.YjP)()}),i=(0,Rt.Ikc)({text:(0,Rt.YjP)(),model:(0,Rt.YjP)(),stability:(0,Rt.lqM)((0,Rt.aig)()),similarity:(0,Rt.lqM)((0,Rt.aig)()),styleExaggeration:(0,Rt.lqM)((0,Rt.aig)()),speakerBoost:(0,Rt.lqM)((0,Rt.zMY)()),voiceName:(0,Rt.YjP)(),voiceSource:(0,Rt.k5n)(["my_voices","voice_library"]),aiScriptWriterUsed:(0,Rt.lqM)((0,Rt.zMY)()),advancedSettingsModified:(0,Rt.lqM)((0,Rt.zMY)())}),o=(0,Rt.X$i)(a,{audioSources:r});return{AudioAssets:r,AiAudioSettings:i,AudioItemFullState:o,AudioItem:(0,Rt.X$i)(e["@@generic"](o),{type:(0,Rt.euz)("audio"),aiAudioSettings:(0,Rt.lqM)(i)}),AudioItemState:t["@@generic"](o)}})),br=_t("Backdrop",["Border","DropShadow","Fill","ShapeDef"],(({Border:e},{DropShadow:t},{FillColor:a,FillImage:r},{ShapeDef:i})=>{const o=(0,Rt.Ikc)({border:e}),n=(0,Rt.Ikc)({overlay:a}),l=(0,Rt.Ikc)({dropShadow:t,shapeDef:i}),s=(0,Rt.Ikc)({fill:a}),c=(0,Rt.Ikc)({fill:r});return{BorderBackdropData:o,OverlayBackdropData:n,ExtendedBackdropData:l,BackdropColorFillData:s,BackdropImageFillData:c,GroupBackdropStateData:(0,Rt.X$i)((0,Rt.X$i)((0,Rt.X$i)(o,n.def.shape),s.def.shape),{}),ShapeBackdropStateData:(0,Rt.X$i)((0,Rt.X$i)((0,Rt.X$i)((0,Rt.X$i)(o,n.def.shape),l.def.shape),s.def.shape),{}),ImageBackdropStateData:(0,Rt.X$i)((0,Rt.X$i)((0,Rt.X$i)((0,Rt.X$i)(o,n.def.shape),l.def.shape),c.def.shape),{}),LineBackdropStateData:(0,Rt.X$i)((0,Rt.X$i)((0,Rt.X$i)(o,l.def.shape),s.def.shape),{})}})),xr=_t("Item",["AudioItem","GroupItem","ImageItem","LineItem","ShapeItem","TextItem","VideoItem"],(({AudioItem:e},{GroupItem:t},{ImageItem:a},{LineItem:r},{ShapeItem:i},{TextItem:o},{VideoItem:n})=>({Item:(0,Rt.gMt)("type",[e,t,a,i,o,n,r])}))),wr=_t("LineItem",["Backdrop","BaseItem","State"],(({LineBackdropStateData:e},{BaseItem:t,State:a},{BaseItemFullState:r})=>{const i=(0,Rt.X$i)((0,Rt.X$i)(r,e.def.shape),{altText:(0,Rt.YjP)()});return{LineItemFullState:i,LineItem:(0,Rt.X$i)(t["@@generic"](i),{type:(0,Rt.euz)("line")}),LineItemState:a["@@generic"](i)}})),yr=_t("ShapeDef",[],(()=>{const e=(0,Rt.Ikc)({type:(0,Rt.YjP)()}),t=(0,Rt.X$i)(e,{cornerRounding:(0,Rt.aig)().check((0,Rt.ROM)(0))}),a=(0,Rt.X$i)(e,{type:(0,Rt.euz)("rectangle"),borderRadius:(0,Rt.lqM)((0,Rt.Ikc)({topLeft:(0,Rt.aig)(),topRight:(0,Rt.aig)(),bottomRight:(0,Rt.aig)(),bottomLeft:(0,Rt.aig)()}))}),r=(0,Rt.X$i)(e,{type:(0,Rt.euz)("ellipse")}),i=(0,Rt.X$i)(t,{type:(0,Rt.euz)("star"),sidePairs:(0,Rt.aig)().check((0,Rt.ROM)(3)),innerRadius:(0,Rt.aig)().check((0,Rt.ROM)(.1),(0,Rt.wJL)(1))}),o=(0,Rt.X$i)(e,{type:(0,Rt.euz)("cloud")}),n=(0,Rt.X$i)(t,{type:(0,Rt.euz)("plus"),stroke:(0,Rt.aig)().check((0,Rt.ROM)(.01),(0,Rt.wJL)(1))}),l=(0,Rt.X$i)(t,{type:(0,Rt.euz)("triangle"),topVertex:(0,Rt.lqM)((0,Rt.aig)().check((0,Rt.ROM)(0),(0,Rt.wJL)(1)))}),s=(0,Rt.X$i)(t,{type:(0,Rt.euz)("bookmark"),cutoutInset:(0,Rt.aig)().check((0,Rt.ROM)(0),(0,Rt.wJL)(.8))}),c=(0,Rt.X$i)(t,{type:(0,Rt.euz)("chevron"),outsideCornerXCoords:(0,Rt.aig)().check((0,Rt.ROM)(.7),(0,Rt.wJL)(1)),insideCenterXCoord:(0,Rt.aig)().check((0,Rt.ROM)(0),(0,Rt.wJL)(.3))}),d=(0,Rt.X$i)(t,{type:(0,Rt.euz)("octagon")}),p=(0,Rt.X$i)(t,{type:(0,Rt.euz)("parallelogram"),shear:(0,Rt.aig)().check((0,Rt.ROM)(0),(0,Rt.wJL)(1))}),h=(0,Rt.X$i)(t,{type:(0,Rt.euz)("shield")}),m=(0,Rt.X$i)(t,{type:(0,Rt.euz)("speechBubble")}),u=(0,Rt.X$i)(t,{type:(0,Rt.euz)("arrow"),thickness:(0,Rt.aig)().check((0,Rt.ROM)(.1),(0,Rt.wJL)(.5)),headLength:(0,Rt.aig)().check((0,Rt.ROM)(.1),(0,Rt.wJL)(.9))}),g=(0,Rt.k5n)(["none","arrow","stop","circle","square","diamond","triangle","circle-filled","square-filled","diamond-filled","triangle-filled"]),f=(0,Rt.Ikc)({style:g,size:(0,Rt.aig)().check((0,Rt.ROM)(1))}),v=(0,Rt.X$i)(e,{type:(0,Rt.euz)("line"),from:f,to:f});return{ShapeDefBase:e,ShapeDefRoundedCorners:t,ShapeRectangle:a,ShapeEllipse:r,ShapeStar:i,ShapeCloud:o,ShapePlus:n,ShapeTriangle:l,ShapeBookmark:s,ShapeChevron:c,ShapeOctagon:d,ShapeParallelogram:p,ShapeShield:h,ShapeSpeechBubble:m,ShapeArrow:u,LineEndStyle:g,LineEnd:f,ShapeLine:v,ShapeDef:(0,Rt.gMt)("type",[s,c,o,r,d,n,a,i,l,p,h,m,u,v])}})),kr=_t("Version",[],(()=>({SchemaVersion:(0,Rt.euz)(21)}))),Cr=_t("ItemRef",[],(()=>({ItemRef:(0,Rt.Ikc)({id:(0,Rt.YjP)(),visualOrder:(0,Rt.aig)(),clonedFromId:(0,Rt.lqM)((0,Rt.YjP)())})}))),Tr=_t("Version",[],(()=>({SchemaVersion:(0,Rt.euz)(22)}))),Br=_t("Version",[],(()=>({SchemaVersion:(0,Rt.euz)(23)}))),Mr=_t("ImageItem",["Backdrop","BaseItem","State"],(({ImageBackdropStateData:e},{BaseItem:t,State:a},{BaseItemFullState:r})=>{const i=(0,Rt.X$i)((0,Rt.X$i)(r,e.def.shape),{});return{ImageItemFullState:i,ImageItem:(0,Rt.X$i)(t["@@generic"](i),{type:(0,Rt.euz)("image")}),ImageItemState:a["@@generic"](i)}})),Lr=_t("LineItem",["Backdrop","BaseItem","State"],(({LineBackdropStateData:e},{BaseItem:t,State:a},{BaseItemFullState:r})=>{const i=(0,Rt.X$i)((0,Rt.X$i)(r,e.def.shape),{});return{LineItemFullState:i,LineItem:(0,Rt.X$i)(t["@@generic"](i),{type:(0,Rt.euz)("line")}),LineItemState:a["@@generic"](i)}})),Ar=_t("State",["Unit"],(({Unit:e})=>{const t=(0,Rt.Ikc)({id:(0,Rt.YjP)(),name:(0,Rt.YjP)().check((0,Rt.Ru6)(128))});return{StateMeta:t,BaseItemFullState:(0,Rt.X$i)(t,{x:e,y:e,xOffset:(0,Rt.aig)(),yOffset:(0,Rt.aig)(),width:e,height:e,opacity:(0,Rt.aig)().check((0,Rt.ROM)(0),(0,Rt.wJL)(1)),aspectRatioLocked:(0,Rt.zMY)(),rotation:(0,Rt.aig)(),flipX:(0,Rt.zMY)(),flipY:(0,Rt.zMY)(),authoringAspectRatioCropLock:(0,Rt.k5n)(["freeform","preset","none"]),altText:(0,Rt.YjP)()})}})),Dr=_t("Version",[],(()=>({SchemaVersion:(0,Rt.euz)(24)}))),Fr=_t("AudioItem",["BaseItem","State"],(({BaseItem:e,State:t},{BaseItemFullState:a})=>{const r=(0,Rt.Ikc)({default:(0,Rt.YjP)()}),i=(0,Rt.Ikc)({text:(0,Rt.YjP)(),model:(0,Rt.YjP)(),stability:(0,Rt.lqM)((0,Rt.aig)()),similarity:(0,Rt.lqM)((0,Rt.aig)()),styleExaggeration:(0,Rt.lqM)((0,Rt.aig)()),speakerBoost:(0,Rt.lqM)((0,Rt.zMY)()),voiceName:(0,Rt.YjP)(),voiceSource:(0,Rt.k5n)(["my_voices","voice_library"]),aiScriptWriterUsed:(0,Rt.lqM)((0,Rt.zMY)()),advancedSettingsModified:(0,Rt.lqM)((0,Rt.zMY)())}),o=(0,Rt.X$i)(a,{audioSources:r,transcript:(0,Rt.YjP)()});return{AudioAssets:r,AiAudioSettings:i,AudioItemFullState:o,AudioItem:(0,Rt.X$i)(e["@@generic"](o),{type:(0,Rt.euz)("audio"),aiAudioSettings:(0,Rt.lqM)(i)}),AudioItemState:t["@@generic"](o)}})),zr=_t("Version",[],(()=>({SchemaVersion:(0,Rt.euz)(25)}))),Vr=_t("Backdrop",["Border","DropShadow","Fill","ShapeDef"],(({Border:e},{DropShadow:t},{FillColor:a,FillImage:r,FillLinearGradient:i},{ShapeDef:o})=>{const n=(0,Rt.Ikc)({border:e}),l=(0,Rt.Ikc)({overlay:a}),s=(0,Rt.Ikc)({dropShadow:t,shapeDef:o}),c=(0,Rt.Ikc)({fill:(0,Rt.KCZ)([a,i])}),d=(0,Rt.Ikc)({fill:r});return{BorderBackdropData:n,OverlayBackdropData:l,ExtendedBackdropData:s,BackdropColorFillData:c,BackdropImageFillData:d,GroupBackdropStateData:(0,Rt.X$i)((0,Rt.X$i)((0,Rt.X$i)(n,l.def.shape),c.def.shape),{}),ShapeBackdropStateData:(0,Rt.X$i)((0,Rt.X$i)((0,Rt.X$i)((0,Rt.X$i)(n,l.def.shape),s.def.shape),c.def.shape),{}),ImageBackdropStateData:(0,Rt.X$i)((0,Rt.X$i)((0,Rt.X$i)((0,Rt.X$i)(n,l.def.shape),s.def.shape),d.def.shape),{}),LineBackdropStateData:(0,Rt.X$i)((0,Rt.X$i)(n,s.def.shape),{})}})),$r=_t("Border",[],(()=>({Border:(0,Rt.Ikc)({applied:(0,Rt.zMY)(),color:(0,Rt.YjP)(),opacity:(0,Rt.aig)(),style:(0,Rt.k5n)(["solid","dashed","dotted"]),width:(0,Rt.aig)()})}))),Jr=_t("DropShadow",[],(()=>{const e=(0,Rt.Ikc)({x:(0,Rt.aig)(),y:(0,Rt.aig)()}),t=(0,Rt.Ikc)({applied:(0,Rt.euz)(!1)}),a=(0,Rt.Ikc)({applied:(0,Rt.euz)(!0),offset:e,blur:(0,Rt.aig)().check((0,Rt.ROM)(0)),color:(0,Rt.YjP)(),opacity:(0,Rt.aig)().check((0,Rt.ROM)(0),(0,Rt.wJL)(1))});return{DropShadow:(0,Rt.gMt)("applied",[t,a])}})),Pr=_t("Fill",[],(()=>{const e=(0,Rt.Ikc)({width:(0,Rt.aig)(),height:(0,Rt.aig)(),left:(0,Rt.aig)(),top:(0,Rt.aig)()}),t=(0,Rt.Ikc)({opacity:(0,Rt.aig)().check((0,Rt.ROM)(0),(0,Rt.wJL)(1))});return{FillImageCrop:e,FillColor:(0,Rt.X$i)(t,{color:(0,Rt.lqM)((0,Rt.YjP)()),angle:(0,Rt.lqM)((0,Rt.ZmZ)())}),FillImage:(0,Rt.X$i)(t,{assetId:(0,Rt.lqM)((0,Rt.YjP)()),crop:e}),FillLinearGradient:(0,Rt.Ikc)({angle:(0,Rt.aig)(),stops:(0,Rt.YOg)((0,Rt.Ikc)({t:(0,Rt.aig)(),color:(0,Rt.YjP)(),opacity:(0,Rt.aig)().check((0,Rt.ROM)(0),(0,Rt.wJL)(1))}))})}})),Rr=_t("ShapeDef",[],(()=>{const e=(0,Rt.Ikc)({type:(0,Rt.YjP)()}),t=(0,Rt.X$i)(e,{cornerRounding:(0,Rt.aig)().check((0,Rt.ROM)(0))}),a=(0,Rt.X$i)(e,{type:(0,Rt.euz)("rectangle"),borderRadius:(0,Rt.lqM)((0,Rt.Ikc)({topLeft:(0,Rt.aig)(),topRight:(0,Rt.aig)(),bottomRight:(0,Rt.aig)(),bottomLeft:(0,Rt.aig)()}))}),r=(0,Rt.X$i)(e,{type:(0,Rt.euz)("ellipse")}),i=(0,Rt.X$i)(t,{type:(0,Rt.euz)("star"),sidePairs:(0,Rt.aig)().check((0,Rt.ROM)(3)),innerRadius:(0,Rt.aig)().check((0,Rt.ROM)(.1),(0,Rt.wJL)(1))}),o=(0,Rt.X$i)(e,{type:(0,Rt.euz)("cloud")}),n=(0,Rt.X$i)(t,{type:(0,Rt.euz)("plus"),stroke:(0,Rt.aig)().check((0,Rt.ROM)(.01),(0,Rt.wJL)(1))}),l=(0,Rt.X$i)(t,{type:(0,Rt.euz)("triangle"),topVertex:(0,Rt.lqM)((0,Rt.aig)().check((0,Rt.ROM)(0),(0,Rt.wJL)(1)))}),s=(0,Rt.X$i)(t,{type:(0,Rt.euz)("bookmark"),cutoutInset:(0,Rt.aig)().check((0,Rt.ROM)(0),(0,Rt.wJL)(.8))}),c=(0,Rt.X$i)(t,{type:(0,Rt.euz)("chevron"),outsideCornerXCoords:(0,Rt.aig)().check((0,Rt.ROM)(.7),(0,Rt.wJL)(1)),insideCenterXCoord:(0,Rt.aig)().check((0,Rt.ROM)(0),(0,Rt.wJL)(.3))}),d=(0,Rt.X$i)(t,{type:(0,Rt.euz)("octagon")}),p=(0,Rt.X$i)(t,{type:(0,Rt.euz)("parallelogram"),shear:(0,Rt.aig)().check((0,Rt.ROM)(0),(0,Rt.wJL)(1))}),h=(0,Rt.X$i)(t,{type:(0,Rt.euz)("shield")}),m=(0,Rt.X$i)(t,{type:(0,Rt.euz)("speechBubble")}),u=(0,Rt.X$i)(t,{type:(0,Rt.euz)("arrow"),thickness:(0,Rt.aig)().check((0,Rt.ROM)(.1),(0,Rt.wJL)(.5)),headLength:(0,Rt.aig)().check((0,Rt.ROM)(.1),(0,Rt.wJL)(.9))}),g=(0,Rt.k5n)(["none","arrow","stop","circle","square","diamond","triangle","circle-filled","square-filled","diamond-filled","triangle-filled"]),f=(0,Rt.Ikc)({style:g}),v=(0,Rt.X$i)(e,{type:(0,Rt.euz)("line"),from:f,to:f});return{ShapeDefBase:e,ShapeDefRoundedCorners:t,ShapeRectangle:a,ShapeEllipse:r,ShapeStar:i,ShapeCloud:o,ShapePlus:n,ShapeTriangle:l,ShapeBookmark:s,ShapeChevron:c,ShapeOctagon:d,ShapeParallelogram:p,ShapeShield:h,ShapeSpeechBubble:m,ShapeArrow:u,LineEndStyle:g,LineEnd:f,ShapeLine:v,ShapeDef:(0,Rt.gMt)("type",[s,c,o,r,d,n,a,i,l,p,h,m,u,v])}})),Zr=_t("State",[],(()=>{const e=(0,Rt.Ikc)({id:(0,Rt.YjP)(),name:(0,Rt.YjP)().check((0,Rt.Ru6)(128))});return{StateMeta:e,BaseItemFullState:(0,Rt.X$i)(e,{x:(0,Rt.aig)(),y:(0,Rt.aig)(),xOffset:(0,Rt.aig)(),yOffset:(0,Rt.aig)(),width:(0,Rt.aig)(),height:(0,Rt.aig)(),opacity:(0,Rt.aig)().check((0,Rt.ROM)(0),(0,Rt.wJL)(1)),aspectRatioLocked:(0,Rt.zMY)(),rotation:(0,Rt.aig)(),flipX:(0,Rt.zMY)(),flipY:(0,Rt.zMY)(),authoringAspectRatioCropLock:(0,Rt.k5n)(["freeform","preset","none"]),altText:(0,Rt.YjP)()})}})),Or=_t("Version",[],(()=>({SchemaVersion:(0,Rt.euz)(26)}))),_r=_t("ShapeItem",["Backdrop","BaseItem","TextItem"],(({ShapeBackdropStateData:e},{BaseItem:t,State:a},{TextItemFullState:r})=>{const i=(0,Rt.X$i)((0,Rt.X$i)(r,e.def.shape),{});return{ShapeItemFullState:i,ShapeItem:(0,Rt.X$i)(t["@@generic"](i),{type:(0,Rt.euz)("shape"),autoHeight:(0,Rt.zMY)()}),ShapeItemState:a["@@generic"](i)}})),jr=_t("TextItem",["BaseItem","RichTextRef","State"],(({BaseItem:e,State:t},{RichTextRef:a},{BaseItemFullState:r})=>{const i=(0,Rt.k5n)(["top","middle","bottom"]),o=(0,Rt.Ikc)({top:(0,Rt.aig)(),left:(0,Rt.aig)(),bottom:(0,Rt.aig)(),right:(0,Rt.aig)()}),n=(0,Rt.X$i)(r,{text:a,textVerticalAlign:i,textPadding:o});return{TextVerticalAlign:i,TextPadding:o,TextItemFullState:n,TextItem:(0,Rt.X$i)(e["@@generic"](n),{type:(0,Rt.euz)("text"),autoHeight:(0,Rt.zMY)()}),TextItemState:t["@@generic"](n)}})),Yr=_t("Version",[],(()=>({SchemaVersion:(0,Rt.euz)(27)}))),Hr=_t("AudioItem",["BaseItem","State"],(({BaseItem:e,State:t},{BaseItemFullState:a,LocalizableBaseItemState:r})=>{const i=(0,Rt.Ikc)({default:(0,Rt.YjP)()}),o=(0,Rt.Ikc)({text:(0,Rt.YjP)(),model:(0,Rt.YjP)(),stability:(0,Rt.lqM)((0,Rt.aig)()),similarity:(0,Rt.lqM)((0,Rt.aig)()),styleExaggeration:(0,Rt.lqM)((0,Rt.aig)()),speakerBoost:(0,Rt.lqM)((0,Rt.zMY)()),voiceName:(0,Rt.YjP)(),voiceSource:(0,Rt.k5n)(["my_voices","voice_library"]),aiScriptWriterUsed:(0,Rt.lqM)((0,Rt.zMY)()),advancedSettingsModified:(0,Rt.lqM)((0,Rt.zMY)())}),n=(0,Rt.Ikc)({audioSources:i,transcript:(0,Rt.YjP)()}),l=(0,Rt.X$i)((0,Rt.X$i)(a,n.def.shape),{}),s=(0,Rt.X$i)((0,Rt.X$i)(n,r.def.shape),{});return{AudioAssets:i,AiAudioSettings:o,AudioItemFullState:l,AudioItem:(0,Rt.X$i)(e["@@generic"](l,s),{type:(0,Rt.euz)("audio"),aiAudioSettings:(0,Rt.lqM)(o)}),AudioItemState:t["@@generic"](l)}})),Er=_t("BaseItem",["Asset","LocaleOverride","State","Version"],(({Asset:e},{LocaleOverrides:t},{BaseItemFullState:a,LocalizableBaseItemState:r,StateMeta:i},{SchemaVersion:o})=>{const n={"@@generic":e=>(0,Rt.E$q)(i,Zt(e))},l={"@@generic":e=>(0,Rt.E$q)((0,Rt.Ikc)({default:e}),(0,Rt.g1P)((0,Rt.YjP)(),n["@@generic"](e)))},s={"@@generic":(a,i=r)=>(0,Rt.Ikc)({id:(0,Rt.YjP)(),blockumentId:(0,Rt.YjP)(),clonedFromId:(0,Rt.lqM)((0,Rt.YjP)()),parentId:(0,Rt.YjP)(),type:(0,Rt.YjP)(),name:(0,Rt.YjP)().check((0,Rt.Ru6)(128)),locked:(0,Rt.zMY)(),authoringVisible:(0,Rt.zMY)(),initialVisible:(0,Rt.zMY)(),initialState:(0,Rt.YjP)(),states:l["@@generic"](a),assets:(0,Rt.g1P)((0,Rt.YjP)(),e),removed:(0,Rt.zMY)(),layer:(0,Rt.lqM)((0,Rt.YjP)()),aiExperiment:(0,Rt.lqM)((0,Rt.zMY)()),localeOverrides:t["@@generic"](i),translatableUpdatedAt:(0,Rt.lqM)((0,Rt.YjP)()),_v:o})},c=n["@@generic"](a);return{State:n,States:l,BaseItem:s,BaseItemState:c}})),Gr=_t("GroupItem",["Backdrop","BaseItem","ItemRef","State"],(({GroupBackdropStateData:e},{BaseItem:t,State:a},{ItemRef:r},{BaseItemFullState:i,LocalizableBaseItemState:o})=>{const n=(0,Rt.X$i)((0,Rt.X$i)(i,e.def.shape),{_groupBrand:(0,Rt.lqM)((0,Rt.ZmZ)())});return{GroupItemFullState:n,GroupItem:(0,Rt.X$i)(t["@@generic"](n,o),{type:(0,Rt.euz)("group"),children:(0,Rt.YOg)(r)}),GroupItemState:a["@@generic"](n)}})),Xr=_t("ImageItem",["Backdrop","BaseItem","State"],(({BackdropImageFillData:e,ImageBackdropStateData:t},{BaseItem:a,State:r},{BaseItemFullState:i,LocalizableBaseItemState:o})=>{const n=(0,Rt.X$i)((0,Rt.X$i)(i,t.def.shape),{}),l=(0,Rt.X$i)((0,Rt.X$i)(e,o.def.shape),{});return{ImageItemFullState:n,ImageItem:(0,Rt.X$i)(a["@@generic"](n,l),{type:(0,Rt.euz)("image")}),ImageItemState:r["@@generic"](n)}})),qr=_t("LineItem",["Backdrop","BaseItem","State"],(({LineBackdropStateData:e},{BaseItem:t,State:a},{BaseItemFullState:r,LocalizableBaseItemState:i})=>{const o=(0,Rt.X$i)((0,Rt.X$i)(r,e.def.shape),{});return{LineItemFullState:o,LineItem:(0,Rt.X$i)(t["@@generic"](o,i),{type:(0,Rt.euz)("line")}),LineItemState:a["@@generic"](o)}})),Nr=_t("LocaleOverride",["State"],(({LocalizableBaseItemState:e})=>{const t=e=>(0,Rt.Ikc)({states:(0,Rt.E$q)((0,Rt.Ikc)({default:(0,Rt.lqM)(Zt(e))}),(0,Rt.g1P)((0,Rt.YjP)(),Zt(e))),translationId:(0,Rt.lqM)((0,Rt.YjP)()),translationRequestedAt:(0,Rt.lqM)((0,Rt.YjP)())});return{LocaleOverrides:{"@@generic":e=>(0,Rt.g1P)((0,Rt.YjP)(),t(e))}}})),Ur=_t("ShapeItem",["Backdrop","BaseItem","TextItem"],(({ShapeBackdropStateData:e},{BaseItem:t,State:a},{TextItemFullState:r,TextItemStateLocaleOverrideable:i})=>{const o=(0,Rt.X$i)((0,Rt.X$i)(r,e.def.shape),{});return{ShapeItemFullState:o,ShapeItem:(0,Rt.X$i)(t["@@generic"](o,i),{type:(0,Rt.euz)("shape"),autoHeight:(0,Rt.zMY)()}),ShapeItemState:a["@@generic"](o)}})),Wr=_t("State",[],(()=>{const e=(0,Rt.Ikc)({id:(0,Rt.YjP)(),name:(0,Rt.YjP)().check((0,Rt.Ru6)(128))}),t=(0,Rt.Ikc)({altText:(0,Rt.YjP)()});return{StateMeta:e,LocalizableBaseItemState:t,BaseItemFullState:(0,Rt.X$i)((0,Rt.X$i)(e,t.def.shape),{x:(0,Rt.aig)(),y:(0,Rt.aig)(),xOffset:(0,Rt.aig)(),yOffset:(0,Rt.aig)(),width:(0,Rt.aig)(),height:(0,Rt.aig)(),opacity:(0,Rt.aig)().check((0,Rt.ROM)(0),(0,Rt.wJL)(1)),aspectRatioLocked:(0,Rt.zMY)(),rotation:(0,Rt.aig)(),flipX:(0,Rt.zMY)(),flipY:(0,Rt.zMY)(),authoringAspectRatioCropLock:(0,Rt.k5n)(["freeform","preset","none"])})}})),Qr=_t("TextItem",["BaseItem","RichTextRef","State"],(({BaseItem:e,State:t},{RichTextRef:a},{BaseItemFullState:r,LocalizableBaseItemState:i})=>{const o=(0,Rt.k5n)(["top","middle","bottom"]),n=(0,Rt.Ikc)({top:(0,Rt.aig)(),left:(0,Rt.aig)(),bottom:(0,Rt.aig)(),right:(0,Rt.aig)()}),l=(0,Rt.Ikc)({text:a}),s=(0,Rt.X$i)((0,Rt.X$i)(r,l.def.shape),{textVerticalAlign:o,textPadding:n}),c=(0,Rt.X$i)((0,Rt.X$i)(l,i.def.shape),{});return{TextVerticalAlign:o,TextPadding:n,LocalizableTextItemFullState:l,TextItemFullState:s,TextItemStateLocaleOverrideable:c,TextItem:(0,Rt.X$i)(e["@@generic"](s,c),{type:(0,Rt.euz)("text"),autoHeight:(0,Rt.zMY)()}),TextItemState:t["@@generic"](s)}})),Kr=_t("Version",[],(()=>({SchemaVersion:(0,Rt.euz)(28)}))),ei=_t("VideoItem",["BaseItem","State"],(({BaseItem:e,State:t},{BaseItemFullState:a,LocalizableBaseItemState:r})=>{const i=(0,Rt.Ikc)({default:(0,Rt.YjP)()}),o=(0,Rt.Ikc)({videoSources:i}),n=(0,Rt.X$i)((0,Rt.X$i)(a,o.def.shape),{}),l=(0,Rt.X$i)((0,Rt.X$i)(o,r.def.shape),{});return{VideoAssets:i,VideoItemFullState:n,VideoItem:(0,Rt.X$i)(e["@@generic"](n,l),{type:(0,Rt.euz)("video")}),VideoItemState:t["@@generic"](n)}})),ti=_t("AudioItem",["BaseItem","State"],(({BaseItem:e,State:t},{BaseItemFullState:a,LocalizableBaseItemState:r})=>{const i=(0,Rt.Ikc)({default:(0,Rt.YjP)()}),o=(0,Rt.Ikc)({text:(0,Rt.YjP)(),model:(0,Rt.YjP)(),stability:(0,Rt.aig)(),similarity:(0,Rt.aig)(),speed:(0,Rt.aig)(),styleExaggeration:(0,Rt.lqM)((0,Rt.aig)()),speakerBoost:(0,Rt.lqM)((0,Rt.zMY)()),voiceName:(0,Rt.YjP)(),voiceSource:(0,Rt.k5n)(["my_voices","voice_library"]),aiScriptWriterUsed:(0,Rt.lqM)((0,Rt.zMY)()),advancedSettingsModified:(0,Rt.lqM)((0,Rt.zMY)())}),n=(0,Rt.Ikc)({audioSources:i,transcript:(0,Rt.YjP)()}),l=(0,Rt.X$i)((0,Rt.X$i)(a,n.def.shape),{}),s=(0,Rt.X$i)((0,Rt.X$i)(n,r.def.shape),{});return{AudioAssets:i,AiAudioSettings:o,AudioItemFullState:l,AudioItem:(0,Rt.X$i)(e["@@generic"](l,s),{type:(0,Rt.euz)("audio"),aiAudioSettings:(0,Rt.lqM)(o)}),AudioItemState:t["@@generic"](l)}})),ai=_t("Version",[],(()=>({SchemaVersion:(0,Rt.euz)(29)}))),ri=_t("AudioItem",["BaseItem","State"],(({BaseItem:e,State:t},{BaseItemFullState:a,LocalizableBaseItemState:r})=>{const i=(0,Rt.Ikc)({default:(0,Rt.YjP)()}),o=(0,Rt.k5n)(["reverted-to-source","supported-locale-fallback","unsupported-locale"]),n=(0,Rt.Ikc)({text:(0,Rt.YjP)(),model:(0,Rt.YjP)(),stability:(0,Rt.aig)(),similarity:(0,Rt.aig)(),speed:(0,Rt.aig)(),styleExaggeration:(0,Rt.lqM)((0,Rt.aig)()),speakerBoost:(0,Rt.lqM)((0,Rt.zMY)()),voiceName:(0,Rt.YjP)(),voiceSource:(0,Rt.k5n)(["my_voices","voice_library"]),aiScriptWriterUsed:(0,Rt.lqM)((0,Rt.zMY)()),advancedSettingsModified:(0,Rt.lqM)((0,Rt.zMY)()),l10nAutoGenStatus:(0,Rt.lqM)(o)}),l=(0,Rt.Ikc)({audioSources:i,transcript:(0,Rt.YjP)(),aiAudioSettings:(0,Rt.lqM)(n)}),s=(0,Rt.X$i)((0,Rt.X$i)(a,l.def.shape),{}),c=(0,Rt.X$i)((0,Rt.X$i)(l,r.def.shape),{});return{AudioAssets:i,AiAudioSettings:n,AudioItemFullState:s,AudioItem:(0,Rt.X$i)(e["@@generic"](s,c),{type:(0,Rt.euz)("audio")}),AudioItemState:t["@@generic"](s)}})),ii=_t("Version",[],(()=>({SchemaVersion:(0,Rt.euz)(30)}))),oi=jt([Yt,Ht,Et]),ni=jt([Gt,Xt,qt,Nt,Ut,Wt,Qt,Kt,ea,ta,aa,ra,ia,oa,na,la,sa,ca,da,pa,ha,ma,ua,ga,fa]),li=jt([Gt,va,Xt,qt,Nt,Ut,Wt,Qt,Kt,ea,ta,aa,Sa,oa,na,la,sa,ca,da,pa,ha,ma,ua,Ia,fa]),si=jt([Gt,va,Xt,ba,Nt,Ut,Wt,Qt,Kt,ea,ta,aa,Sa,oa,na,la,sa,ca,xa,wa,ya,ha,ma,ua,ka,fa]),ci=jt([Gt,va,Xt,ba,Nt,Ut,Wt,Qt,Kt,ea,ta,aa,Sa,oa,na,la,sa,ca,Ca,wa,Ta,ha,ma,ua,Ba,fa]),di=jt([Gt,va,Xt,ba,Nt,Ut,Wt,Qt,Kt,ea,ta,aa,Sa,oa,na,la,sa,ca,Ma,wa,Ta,La,ma,ua,Aa,fa]),pi=jt([Gt,va,Xt,ba,Nt,Ut,Wt,Qt,Kt,ea,ta,aa,Sa,oa,na,la,sa,ca,Ma,wa,Ta,La,ma,ua,Da,fa]),hi=jt([Gt,va,Xt,ba,Nt,Ut,Wt,Qt,Kt,ea,ta,aa,Sa,oa,na,la,sa,ca,Ma,wa,Ta,La,ma,ua,Fa,fa]),mi=jt([Gt,va,Xt,za,Nt,Ut,Wt,Qt,Kt,ea,ta,Va,Sa,$a,na,la,sa,ca,Ma,wa,Ta,La,ma,ua,Ja,fa]),ui=jt([Gt,va,Xt,za,Nt,Pa,Ut,Wt,Qt,Kt,ea,ta,Va,Sa,$a,na,la,sa,ca,Ma,Ra,Ta,La,ma,ua,Za,fa]),gi=jt([Gt,va,Xt,za,Nt,Pa,Ut,Wt,Qt,Kt,ea,ta,Va,Sa,$a,na,la,sa,ca,Ma,Ra,Ta,La,Oa,ua,_a,fa]),fi=jt([Gt,va,ja,za,Nt,Pa,Ya,Ha,Va,Sa,$a,na,la,Ea,sa,ca,Ma,Ra,Ga,La,Oa,ua,Xa,fa]),vi=jt([Gt,va,qa,Na,Nt,Pa,Ua,Va,Sa,$a,na,la,sa,ca,Ma,Ra,Wa,La,Qa,ua,Ka,fa]),Si=jt([Gt,va,qa,Na,Nt,Pa,Ua,Va,Sa,$a,na,la,sa,ca,Ma,Ra,Wa,La,Qa,ua,er,fa]),Ii=jt([Gt,va,qa,Na,Nt,Pa,Ua,Va,Sa,$a,na,la,sa,ca,tr,Ra,Wa,La,Qa,ua,ar,fa]),bi=jt([Gt,va,rr,qa,Na,Nt,Pa,ir,or,nr,lr,$a,na,la,sa,ca,tr,sr,cr,La,Qa,ua,dr,fa]),xi=jt([Gt,va,rr,pr,Na,Nt,Pa,ir,or,nr,lr,$a,na,la,ca,tr,sr,hr,La,Qa,ua,mr,fa]),wi=jt([Gt,va,rr,pr,ur,Nt,Pa,ir,or,nr,lr,$a,na,la,ca,tr,sr,hr,La,Qa,ua,gr,fa]),yi=jt([Gt,va,rr,pr,ur,Nt,Pa,ir,or,nr,lr,$a,na,la,ca,tr,fr,hr,La,Qa,ua,vr,fa]),ki=jt([Gt,va,rr,pr,ur,Nt,Pa,ir,or,nr,lr,$a,na,la,ca,tr,fr,hr,La,Qa,ua,Sr,fa]),Ci=jt([Gt,Ir,br,pr,ur,Nt,Pa,ir,or,nr,xr,$a,na,wr,la,ca,yr,fr,hr,La,Qa,ua,kr,fa]),Ti=jt([Gt,Ir,br,pr,ur,Nt,Pa,ir,or,nr,xr,Cr,na,wr,la,ca,yr,fr,hr,La,Qa,ua,Tr,fa]),Bi=jt([Gt,Ir,br,pr,ur,Nt,Pa,ir,or,nr,xr,Cr,na,wr,la,ca,yr,fr,hr,La,Qa,ua,Br,fa]),Mi=jt([Gt,Ir,br,pr,ur,Nt,Pa,ir,or,Mr,xr,Cr,na,Lr,la,ca,yr,sr,Ar,La,Qa,ua,Dr,fa]),Li=jt([Gt,Fr,br,pr,ur,Nt,Pa,ir,or,Mr,xr,Cr,na,Lr,la,ca,yr,sr,Ar,La,Qa,ua,zr,fa]),Ai=jt([Gt,Fr,Vr,pr,ur,$r,Jr,Pr,or,Mr,xr,Cr,na,Lr,la,ca,Rr,sr,Zr,La,Qa,Or,fa]),Di=jt([Gt,Fr,Vr,pr,ur,$r,Jr,Pr,or,Mr,xr,Cr,na,Lr,la,ca,Rr,_r,Zr,jr,Qa,Yr,fa]),Fi=jt([Gt,Hr,Vr,Er,ur,$r,Jr,Pr,Gr,Xr,xr,Cr,na,qr,Nr,la,ca,Rr,Ur,Wr,Qr,Qa,Kr,ei]),zi=jt([Gt,ti,Vr,Er,ur,$r,Jr,Pr,Gr,Xr,xr,Cr,na,qr,Nr,la,ca,Rr,Ur,Wr,Qr,Qa,ai,ei]),Vi=jt([Gt,ri,Vr,Er,ur,$r,Jr,Pr,Gr,Xr,xr,Cr,na,qr,Nr,la,ca,Rr,Ur,Wr,Qr,Qa,ii,ei]),$i=jt([Gt,ri,Vr,Er,ur,$r,Jr,Pr,Gr,Xr,xr,Cr,na,qr,Nr,la,ca,Rr,Ur,Wr,Qr,Qa,ii,ei]),Ji=($i.Asset.Asset,$i.AudioItem.AudioAssets,$i.AudioItem.AiAudioSettings,$i.AudioItem.AudioItemFullState,$i.AudioItem.AudioItem,$i.AudioItem.AudioItemState,$i.Backdrop.BorderBackdropData,$i.Backdrop.OverlayBackdropData,$i.Backdrop.ExtendedBackdropData,$i.Backdrop.BackdropColorFillData,$i.Backdrop.BackdropImageFillData,$i.Backdrop.GroupBackdropStateData,$i.Backdrop.ShapeBackdropStateData,$i.Backdrop.ImageBackdropStateData,$i.Backdrop.LineBackdropStateData,$i.BaseItem.BaseItemState,$i.Blockument.Blockument,$i.Border.Border,$i.DropShadow.DropShadow,$i.Fill.FillImageCrop,$i.Fill.FillColor,$i.Fill.FillImage,$i.Fill.FillLinearGradient,$i.GroupItem.GroupItemFullState,$i.GroupItem.GroupItem,$i.GroupItem.GroupItemState,$i.ImageItem.ImageItemFullState,$i.ImageItem.ImageItem,$i.ImageItem.ImageItemState,$i.Item.Item,$i.ItemRef.ItemRef,$i.JSONContent.JSONContent,$i.LineItem.LineItemFullState,$i.LineItem.LineItem,$i.LineItem.LineItemState,$i.Manifest.Manifest,$i.RichTextRef.RichTextRef,$i.ShapeDef.ShapeDefBase,$i.ShapeDef.ShapeDefRoundedCorners,$i.ShapeDef.ShapeRectangle,$i.ShapeDef.ShapeEllipse,$i.ShapeDef.ShapeStar,$i.ShapeDef.ShapeCloud,$i.ShapeDef.ShapePlus,$i.ShapeDef.ShapeTriangle,$i.ShapeDef.ShapeBookmark,$i.ShapeDef.ShapeChevron,$i.ShapeDef.ShapeOctagon,$i.ShapeDef.ShapeParallelogram,$i.ShapeDef.ShapeShield,$i.ShapeDef.ShapeSpeechBubble,$i.ShapeDef.ShapeArrow,$i.ShapeDef.LineEndStyle,$i.ShapeDef.LineEnd,$i.ShapeDef.ShapeLine,$i.ShapeDef.ShapeDef,$i.ShapeItem.ShapeItemFullState,$i.ShapeItem.ShapeItem,$i.ShapeItem.ShapeItemState,$i.State.StateMeta,$i.State.LocalizableBaseItemState,$i.State.BaseItemFullState,$i.TextItem.TextVerticalAlign,$i.TextItem.TextPadding,$i.TextItem.LocalizableTextItemFullState,$i.TextItem.TextItemFullState,$i.TextItem.TextItemStateLocaleOverrideable,$i.TextItem.TextItem,$i.TextItem.TextItemState,$i.Trigger.TriggerMediaAction,$i.Trigger.TriggerChangeStateAction,$i.Trigger.TriggerChangeVisibilityAction,$i.Trigger.TriggerChangeLayerAction,$i.Trigger.TriggerAction,$i.Trigger.Trigger,$i.Version.SchemaVersion,$i.VideoItem.VideoAssets,$i.VideoItem.VideoItemFullState,$i.VideoItem.VideoItem,$i.VideoItem.VideoItemState,{click:"click",hover:"hover",mediaPlay:"mediaPlay",mediaPause:"mediaPause",mediaEnd:"mediaEnd"}),Pi="changeState",Ri="changeVisibility",Zi="mediaPause",Oi="mediaPlay",_i="mediaEnd",ji="changeLayer";var Yi=a(2),Hi=a.n(Yi),Ei=a(3537),Gi=a.n(Ei),Xi=a(8683),qi=a.n(Xi);oi.LocaleContext.LocaleContext;const Ni=oi.ReviewData.TranslationsReviewArray,Ui=(oi.ReviewData.TranslationsReviewItem,oi.VersionedEntity.VersionedEntity,oi.VersionedEntity.VersionedManifest),Wi=(ni.Asset.Asset,ni.BaseItem.BaseItemState,ni.Blockument.Blockument,ni.Border.Border,ni.Fill.Fill,ni.FillBase.FillBase,ni.FillColor.FillColor,ni.FillImage.FillImageCrop,ni.FillImage.FillImage,ni.FillNone.FillNone,ni.FillOverlay.FillOverlay,ni.GroupItem.GroupItemFullState,ni.GroupItem.GroupItem,ni.GroupItem.GroupItemState,ni.ImageItem.ImageItemFullState,ni.ImageItem.ImageItem,ni.ImageItem.ImageItemState,ni.Item.Item,ni.ItemRef.ItemRef,ni.JSONContent.JSONContent,ni.Manifest.Manifest),Qi=(ni.Padding.Padding,ni.RichTextRef.RichTextRef,ni.ShapeItem.ShapeItemFullState,ni.ShapeItem.ShapeItem,ni.ShapeItem.ShapeItemState,ni.State.StateMeta,ni.State.BaseItemFullState,ni.TextItem.TextVerticalAlign,ni.TextItem.TextItemFullState,ni.TextItem.TextItem,ni.TextItem.TextItemState,ni.Trigger.TriggerMediaAction,ni.Trigger.TriggerChangeState,ni.Trigger.TriggerChangeVisibility,ni.Trigger.Trigger,ni.Unit.Unit,ni.Version.SchemaVersion,ni.VideoItem.VideoAssets,ni.VideoItem.VideoItemFullState,ni.VideoItem.VideoItem,ni.VideoItem.VideoItemState,li.Asset.Asset,li.AudioItem.AudioAssets,li.AudioItem.AudioItemFullState,li.AudioItem.AudioItem,li.AudioItem.AudioItemState,li.BaseItem.BaseItemState,li.Blockument.Blockument,li.Border.Border,li.Fill.Fill,li.FillBase.FillBase,li.FillColor.FillColor,li.FillImage.FillImageCrop,li.FillImage.FillImage,li.FillNone.FillNone,li.FillOverlay.FillOverlay,li.GroupItem.GroupItemFullState,li.GroupItem.GroupItem,li.GroupItem.GroupItemState,li.Item.Item,li.ItemRef.ItemRef,li.JSONContent.JSONContent,li.Manifest.Manifest);li.Padding.Padding,li.RichTextRef.RichTextRef,li.ShapeItem.ShapeItemFullState,li.ShapeItem.ShapeItem,li.ShapeItem.ShapeItemState,li.State.StateMeta,li.State.BaseItemFullState,li.TextItem.TextVerticalAlign,li.TextItem.TextItemFullState,li.TextItem.TextItem,li.TextItem.TextItemState,li.Trigger.TriggerMediaAction,li.Trigger.TriggerChangeState,li.Trigger.TriggerChangeVisibility,li.Trigger.Trigger,li.Unit.Unit,li.Version.SchemaVersion,li.VideoItem.VideoAssets,li.VideoItem.VideoItemFullState,li.VideoItem.VideoItem,li.VideoItem.VideoItemState;var Ki=a(4816),eo=a.n(Ki);function to(e,t,a){const{default:r,...i}=e;return{default:t(r),...eo()(i,a)}}function ao(e){return{...e,altText:"altText"in e?e.altText??null:void 0}}function ro(e){return{...e,clipPath:null,altText:e.altText??null,text:{id:crypto.randomUUID(),type:"tiptap",json:{type:"doc",content:[]}},textVerticalAlign:"middle"}}function io(e){return"image"===e.type?function(e){return{...e,_v:3,type:"shape",states:to(e.states,ro,ao)}}(e):{...e,_v:3}}si.Asset.Asset,si.AudioItem.AudioAssets,si.AudioItem.AudioItemFullState,si.AudioItem.AudioItem,si.AudioItem.AudioItemState,si.BaseItem.BaseItemState,si.Blockument.Blockument,si.Border.Border,si.Fill.Fill,si.FillBase.FillBase,si.FillColor.FillColor,si.FillImage.FillImageCrop,si.FillImage.FillImage,si.FillNone.FillNone,si.FillOverlay.FillOverlay,si.GroupItem.GroupItemFullState,si.GroupItem.GroupItem,si.GroupItem.GroupItemState,si.Item.Item,si.ItemRef.ItemRef,si.JSONContent.JSONContent;const oo=si.Manifest.Manifest;function no(e){return e.applied?{type:"rectangle",borderRadius:{topLeft:e.topLeft.value,topRight:e.topRight.value,bottomRight:e.bottomRight.value,bottomLeft:e.bottomLeft.value}}:{type:"rectangle"}}function lo(e){const{clipPath:t,borderRadius:a,...r}=e;return"ellipse"===t?{...r,clipDef:{type:"ellipse"}}:{...r,clipDef:no(a)}}function so(e){const{borderRadius:t,...a}=e;return{...a,clipDef:no(t)}}function co(e){const{borderRadius:t,...a}=e;return t?{...a,clipDef:no(t)}:{...a}}function po(e){if("shape"===e.type)return{...e,_v:4,states:to(e.states,lo,(t=>function(e,t){const{clipPath:a,borderRadius:r,...i}=e;return"ellipse"===a?{...i,clipDef:{type:"ellipse"}}:"ellipse"===t.clipPath?{...i}:r?{...i,clipDef:no(r)}:{...i}}(t,e.states.default)))};if("text"===e.type)return{...e,_v:4,states:to(e.states,so,co)};if("video"===e.type)return{...e,_v:4,states:to(e.states,so,co)};if("group"===e.type)return{...e,_v:4,states:to(e.states,so,co)};if("audio"===e.type)return{...e,_v:4,states:to(e.states,so,co)};throw new Error("Internal error: should be unreachable")}si.Padding.Padding,si.RichTextRef.RichTextRef,si.ShapeDef.ShapeRectangle,si.ShapeDef.ShapeEllipse,si.ShapeDef.ShapeStar,si.ShapeDef.ShapeCloud,si.ShapeDef.ShapeDef,si.ShapeItem.ShapeItemFullState,si.ShapeItem.ShapeItem,si.ShapeItem.ShapeItemState,si.State.StateMeta,si.State.BaseItemFullState,si.TextItem.TextVerticalAlign,si.TextItem.TextItemFullState,si.TextItem.TextItem,si.TextItem.TextItemState,si.Trigger.TriggerMediaAction,si.Trigger.TriggerChangeState,si.Trigger.TriggerChangeVisibility,si.Trigger.Trigger,si.Unit.Unit,si.Version.SchemaVersion,si.VideoItem.VideoAssets,si.VideoItem.VideoItemFullState,si.VideoItem.VideoItem,si.VideoItem.VideoItemState,ci.Asset.Asset,ci.AudioItem.AudioAssets,ci.AudioItem.AudioItemFullState,ci.AudioItem.AudioItem,ci.AudioItem.AudioItemState,ci.BaseItem.BaseItemState,ci.Blockument.Blockument,ci.Border.Border,ci.Fill.Fill,ci.FillBase.FillBase,ci.FillColor.FillColor,ci.FillImage.FillImageCrop,ci.FillImage.FillImage,ci.FillNone.FillNone,ci.FillOverlay.FillOverlay,ci.GroupItem.GroupItemFullState,ci.GroupItem.GroupItem,ci.GroupItem.GroupItemState,ci.Item.Item,ci.ItemRef.ItemRef,ci.JSONContent.JSONContent;const ho=ci.Manifest.Manifest,mo=(ci.Padding.Padding,ci.RichTextRef.RichTextRef,ci.ShapeDef.ShapeRectangle,ci.ShapeDef.ShapeEllipse,ci.ShapeDef.ShapeStar,ci.ShapeDef.ShapeCloud,ci.ShapeDef.ShapePlus,ci.ShapeDef.ShapeTriangle,ci.ShapeDef.ShapeBookmark,ci.ShapeDef.ShapeChevron,ci.ShapeDef.ShapeOctagon,ci.ShapeDef.ShapeParallelogram,ci.ShapeDef.ShapeDef,ci.ShapeItem.ShapeItemFullState,ci.ShapeItem.ShapeItem,ci.ShapeItem.ShapeItemState,ci.State.StateMeta,ci.State.BaseItemFullState,ci.TextItem.TextVerticalAlign,ci.TextItem.TextItemFullState,ci.TextItem.TextItem,ci.TextItem.TextItemState,ci.Trigger.TriggerMediaAction,ci.Trigger.TriggerChangeState,ci.Trigger.TriggerChangeVisibility,ci.Trigger.Trigger,ci.Unit.Unit,ci.Version.SchemaVersion,ci.VideoItem.VideoAssets,ci.VideoItem.VideoItemFullState,ci.VideoItem.VideoItem,ci.VideoItem.VideoItemState,{authoringAspectRatioCropLock:"none"});function uo(e){return{...e,...mo}}function go(e){const t=null!=e.width||null!=e.height?mo:null;return{...e,...t}}function fo(e){if("shape"===e.type)return{...e,_v:5,states:to(e.states,uo,go)};if("text"===e.type)return{...e,_v:5,states:to(e.states,uo,go)};if("video"===e.type)return{...e,_v:5,states:to(e.states,uo,go)};if("audio"===e.type)return{...e,_v:5,states:to(e.states,uo,go)};if("group"===e.type)return{...e,_v:5,states:to(e.states,uo,go)};throw new Error("Unexpected item type!")}di.Asset.Asset,di.AudioItem.AudioAssets,di.AudioItem.AudioItemFullState,di.AudioItem.AudioItem,di.AudioItem.AudioItemState,di.BaseItem.BaseItemState,di.Blockument.Blockument,di.Border.Border,di.Fill.Fill,di.FillBase.FillBase,di.FillColor.FillColor,di.FillImage.FillImageCrop,di.FillImage.FillImage,di.FillNone.FillNone,di.FillOverlay.FillOverlay,di.GroupItem.GroupItemFullState,di.GroupItem.GroupItem,di.GroupItem.GroupItemState,di.Item.Item,di.ItemRef.ItemRef,di.JSONContent.JSONContent;const vo=di.Manifest.Manifest,So=(di.Padding.Padding,di.RichTextRef.RichTextRef,di.ShapeDef.ShapeRectangle,di.ShapeDef.ShapeEllipse,di.ShapeDef.ShapeStar,di.ShapeDef.ShapeCloud,di.ShapeDef.ShapePlus,di.ShapeDef.ShapeTriangle,di.ShapeDef.ShapeBookmark,di.ShapeDef.ShapeChevron,di.ShapeDef.ShapeOctagon,di.ShapeDef.ShapeParallelogram,di.ShapeDef.ShapeShield,di.ShapeDef.ShapeSpeechBubble,di.ShapeDef.ShapeArrow,di.ShapeDef.ShapeDef,di.ShapeItem.ShapeItemFullState,di.ShapeItem.ShapeItem,di.ShapeItem.ShapeItemState,di.State.StateMeta,di.State.BaseItemFullState,di.TextItem.TextVerticalAlign,di.TextItem.TextPadding,di.TextItem.TextItemFullState,di.TextItem.TextItem,di.TextItem.TextItemState,di.Trigger.TriggerMediaAction,di.Trigger.TriggerChangeState,di.Trigger.TriggerChangeVisibility,di.Trigger.Trigger,di.Unit.Unit,di.Version.SchemaVersion,di.VideoItem.VideoAssets,di.VideoItem.VideoItemFullState,di.VideoItem.VideoItem,di.VideoItem.VideoItemState,{top:20,left:20,bottom:20,right:20}),Io={top:0,left:0,bottom:0,right:0};function bo(e){return"text"===e.type?{...e,_v:6,states:to(e.states,(e=>({...e,textPadding:Io})),(e=>e))}:"shape"===e.type?{...e,_v:6,states:to(e.states,(e=>({...e,textPadding:So})),(e=>e))}:{...e,_v:6}}pi.Asset.Asset,pi.AudioItem.AudioAssets,pi.AudioItem.AudioItemFullState,pi.AudioItem.AudioItem,pi.AudioItem.AudioItemState,pi.BaseItem.BaseItemState,pi.Blockument.Blockument,pi.Border.Border,pi.Fill.Fill,pi.FillBase.FillBase,pi.FillColor.FillColor,pi.FillImage.FillImageCrop,pi.FillImage.FillImage,pi.FillNone.FillNone,pi.FillOverlay.FillOverlay,pi.GroupItem.GroupItemFullState,pi.GroupItem.GroupItem,pi.GroupItem.GroupItemState,pi.Item.Item,pi.ItemRef.ItemRef,pi.JSONContent.JSONContent;const xo=pi.Manifest.Manifest;function wo(e,t){const a=t.width?.value??e.width.value,r=a<=100?8:a>300?32:16;return{top:16,left:r,bottom:16,right:r}}function yo(e){return"shape"===e.type?{...e,states:(t=e.states,to(t,(e=>({...e,textPadding:wo(e,e)})),(e=>e.textPadding||e.width?{...e,textPadding:wo(t.default,e)}:e))),_v:7}:{...e,_v:7};var t}pi.Padding.Padding,pi.RichTextRef.RichTextRef,pi.ShapeDef.ShapeRectangle,pi.ShapeDef.ShapeEllipse,pi.ShapeDef.ShapeStar,pi.ShapeDef.ShapeCloud,pi.ShapeDef.ShapePlus,pi.ShapeDef.ShapeTriangle,pi.ShapeDef.ShapeBookmark,pi.ShapeDef.ShapeChevron,pi.ShapeDef.ShapeOctagon,pi.ShapeDef.ShapeParallelogram,pi.ShapeDef.ShapeShield,pi.ShapeDef.ShapeSpeechBubble,pi.ShapeDef.ShapeArrow,pi.ShapeDef.ShapeDef,pi.ShapeItem.ShapeItemFullState,pi.ShapeItem.ShapeItem,pi.ShapeItem.ShapeItemState,pi.State.StateMeta,pi.State.BaseItemFullState,pi.TextItem.TextVerticalAlign,pi.TextItem.TextPadding,pi.TextItem.TextItemFullState,pi.TextItem.TextItem,pi.TextItem.TextItemState,pi.Trigger.TriggerMediaAction,pi.Trigger.TriggerChangeState,pi.Trigger.TriggerChangeVisibility,pi.Trigger.Trigger,pi.Unit.Unit,pi.Version.SchemaVersion,pi.VideoItem.VideoAssets,pi.VideoItem.VideoItemFullState,pi.VideoItem.VideoItem,pi.VideoItem.VideoItemState,hi.Asset.Asset,hi.AudioItem.AudioAssets,hi.AudioItem.AudioItemFullState,hi.AudioItem.AudioItem,hi.AudioItem.AudioItemState,hi.BaseItem.BaseItemState,hi.Blockument.Blockument,hi.Border.Border,hi.Fill.Fill,hi.FillBase.FillBase,hi.FillColor.FillColor,hi.FillImage.FillImageCrop,hi.FillImage.FillImage,hi.FillNone.FillNone,hi.FillOverlay.FillOverlay,hi.GroupItem.GroupItemFullState,hi.GroupItem.GroupItem,hi.GroupItem.GroupItemState,hi.Item.Item,hi.ItemRef.ItemRef,hi.JSONContent.JSONContent;const ko=hi.Manifest.Manifest,Co=(hi.Padding.Padding,hi.RichTextRef.RichTextRef,hi.ShapeDef.ShapeRectangle,hi.ShapeDef.ShapeEllipse,hi.ShapeDef.ShapeStar,hi.ShapeDef.ShapeCloud,hi.ShapeDef.ShapePlus,hi.ShapeDef.ShapeTriangle,hi.ShapeDef.ShapeBookmark,hi.ShapeDef.ShapeChevron,hi.ShapeDef.ShapeOctagon,hi.ShapeDef.ShapeParallelogram,hi.ShapeDef.ShapeShield,hi.ShapeDef.ShapeSpeechBubble,hi.ShapeDef.ShapeArrow,hi.ShapeDef.ShapeDef,hi.ShapeItem.ShapeItemFullState,hi.ShapeItem.ShapeItem,hi.ShapeItem.ShapeItemState,hi.State.StateMeta,hi.State.BaseItemFullState,hi.TextItem.TextVerticalAlign,hi.TextItem.TextPadding,hi.TextItem.TextItemFullState,hi.TextItem.TextItem,hi.TextItem.TextItemState,hi.Trigger.TriggerMediaAction,hi.Trigger.TriggerChangeState,hi.Trigger.TriggerChangeVisibility,hi.Trigger.Trigger,hi.Unit.Unit,hi.Version.SchemaVersion,hi.VideoItem.VideoAssets,hi.VideoItem.VideoItemFullState,hi.VideoItem.VideoItem,hi.VideoItem.VideoItemState,"mondrian/assets");function To(e){return{...e,_v:8,assets:eo()(e.assets??{},(e=>({...e,path:`${Co}/${e.path}`})))}}mi.Asset.Asset,mi.AudioItem.AudioAssets,mi.AudioItem.AudioItemFullState,mi.AudioItem.AudioItem,mi.AudioItem.AudioItemState,mi.BaseItem.BaseItemState,mi.Blockument.Blockument,mi.Border.Border,mi.Fill.Fill,mi.FillBase.FillBase,mi.FillColor.FillColor,mi.FillImage.FillImageCrop,mi.FillImage.FillImage,mi.FillNone.FillNone,mi.FillOverlay.FillOverlay,mi.GroupItem.GroupItemFullState,mi.GroupItem.GroupItem,mi.GroupItem.GroupItemState,mi.Item.Item,mi.ItemRef.ItemRef,mi.JSONContent.JSONContent;const Bo=mi.Manifest.Manifest;function Mo(e){return{...e,_v:9,children:e.children.map((({id:e,clonedFromId:t})=>({id:e,clonedFromId:t})))}}function Lo(e){return"group"===e.type?function(e){const t=new Map,{default:a,...r}=e.states,i=[a,...c(r)];for(const e of i)if(e.children)for(const{id:a,clonedFromId:r}of e.children)t.has(a)||t.set(a,{id:a,clonedFromId:r});return{...e,_v:9,children:[...t.values()],states:to(e.states,(({children:e,...t})=>t),(({children:e,...t})=>t))}}(e):{...e,_v:9}}mi.Padding.Padding,mi.RichTextRef.RichTextRef,mi.ShapeDef.ShapeRectangle,mi.ShapeDef.ShapeEllipse,mi.ShapeDef.ShapeStar,mi.ShapeDef.ShapeCloud,mi.ShapeDef.ShapePlus,mi.ShapeDef.ShapeTriangle,mi.ShapeDef.ShapeBookmark,mi.ShapeDef.ShapeChevron,mi.ShapeDef.ShapeOctagon,mi.ShapeDef.ShapeParallelogram,mi.ShapeDef.ShapeShield,mi.ShapeDef.ShapeSpeechBubble,mi.ShapeDef.ShapeArrow,mi.ShapeDef.ShapeDef,mi.ShapeItem.ShapeItemFullState,mi.ShapeItem.ShapeItem,mi.ShapeItem.ShapeItemState,mi.State.StateMeta,mi.State.BaseItemFullState,mi.TextItem.TextVerticalAlign,mi.TextItem.TextPadding,mi.TextItem.TextItemFullState,mi.TextItem.TextItem,mi.TextItem.TextItemState,mi.Trigger.TriggerMediaAction,mi.Trigger.TriggerChangeState,mi.Trigger.TriggerChangeVisibility,mi.Trigger.Trigger,mi.Unit.Unit,mi.Version.SchemaVersion,mi.VideoItem.VideoAssets,mi.VideoItem.VideoItemFullState,mi.VideoItem.VideoItem,mi.VideoItem.VideoItemState,ui.Asset.Asset,ui.AudioItem.AudioAssets,ui.AudioItem.AudioItemFullState,ui.AudioItem.AudioItem,ui.AudioItem.AudioItemState,ui.BaseItem.BaseItemState,ui.Blockument.Blockument,ui.Border.Border,ui.DropShadow.DropShadow,ui.Fill.Fill,ui.FillBase.FillBase,ui.FillColor.FillColor,ui.FillImage.FillImageCrop,ui.FillImage.FillImage,ui.FillNone.FillNone,ui.FillOverlay.FillOverlay,ui.GroupItem.GroupItemFullState,ui.GroupItem.GroupItem,ui.GroupItem.GroupItemState,ui.Item.Item,ui.ItemRef.ItemRef,ui.JSONContent.JSONContent;const Ao=ui.Manifest.Manifest;function Do(e){return"shape"===e.type?{...e,_v:10,states:to(e.states,(e=>({...e,dropShadow:{applied:!1}})),(e=>e))}:{...e,_v:10}}ui.Padding.Padding,ui.RichTextRef.RichTextRef,ui.ShapeDef.ShapeRectangle,ui.ShapeDef.ShapeEllipse,ui.ShapeDef.ShapeStar,ui.ShapeDef.ShapeCloud,ui.ShapeDef.ShapePlus,ui.ShapeDef.ShapeTriangle,ui.ShapeDef.ShapeBookmark,ui.ShapeDef.ShapeChevron,ui.ShapeDef.ShapeOctagon,ui.ShapeDef.ShapeParallelogram,ui.ShapeDef.ShapeShield,ui.ShapeDef.ShapeSpeechBubble,ui.ShapeDef.ShapeArrow,ui.ShapeDef.ShapeDef,ui.ShapeItem.ShapeItemFullState,ui.ShapeItem.ShapeItem,ui.ShapeItem.ShapeItemState,ui.State.StateMeta,ui.State.BaseItemFullState,ui.TextItem.TextVerticalAlign,ui.TextItem.TextPadding,ui.TextItem.TextItemFullState,ui.TextItem.TextItem,ui.TextItem.TextItemState,ui.Trigger.TriggerMediaAction,ui.Trigger.TriggerChangeState,ui.Trigger.TriggerChangeVisibility,ui.Trigger.Trigger,ui.Unit.Unit,ui.Version.SchemaVersion,ui.VideoItem.VideoAssets,ui.VideoItem.VideoItemFullState,ui.VideoItem.VideoItem,ui.VideoItem.VideoItemState,gi.Asset.Asset,gi.AudioItem.AudioAssets,gi.AudioItem.AudioItemFullState,gi.AudioItem.AudioItem,gi.AudioItem.AudioItemState,gi.BaseItem.BaseItemState,gi.Blockument.Blockument,gi.Border.Border,gi.DropShadow.DropShadow,gi.Fill.Fill,gi.FillBase.FillBase,gi.FillColor.FillColor,gi.FillImage.FillImageCrop,gi.FillImage.FillImage,gi.FillNone.FillNone,gi.FillOverlay.FillOverlay,gi.GroupItem.GroupItemFullState,gi.GroupItem.GroupItem,gi.GroupItem.GroupItemState,gi.Item.Item,gi.ItemRef.ItemRef,gi.JSONContent.JSONContent;const Fo=gi.Manifest.Manifest;function zo(e){switch(e.action){case"changeState":return{type:e.action,targetId:[e.targetId],targetState:e.targetState};case"changeVisibility":return{type:e.action,targetId:[e.targetId],targetVisibility:e.targetVisibility};default:return{type:e.action,targetId:[e.targetId]}}}function Vo(e){return{...e,triggers:e.triggers.map((e=>({id:e.id,event:e.event,sourceId:e.sourceId,actions:[zo(e)]}))),_v:11}}function $o(e){return{...e,_v:11}}gi.Padding.Padding,gi.RichTextRef.RichTextRef,gi.ShapeDef.ShapeRectangle,gi.ShapeDef.ShapeEllipse,gi.ShapeDef.ShapeStar,gi.ShapeDef.ShapeCloud,gi.ShapeDef.ShapePlus,gi.ShapeDef.ShapeTriangle,gi.ShapeDef.ShapeBookmark,gi.ShapeDef.ShapeChevron,gi.ShapeDef.ShapeOctagon,gi.ShapeDef.ShapeParallelogram,gi.ShapeDef.ShapeShield,gi.ShapeDef.ShapeSpeechBubble,gi.ShapeDef.ShapeArrow,gi.ShapeDef.ShapeDef,gi.ShapeItem.ShapeItemFullState,gi.ShapeItem.ShapeItem,gi.ShapeItem.ShapeItemState,gi.State.StateMeta,gi.State.BaseItemFullState,gi.TextItem.TextVerticalAlign,gi.TextItem.TextPadding,gi.TextItem.TextItemFullState,gi.TextItem.TextItem,gi.TextItem.TextItemState,gi.Trigger.TriggerMediaAction,gi.Trigger.TriggerChangeStateAction,gi.Trigger.TriggerChangeVisibilityAction,gi.Trigger.TriggerAction,gi.Trigger.Trigger,gi.Unit.Unit,gi.Version.SchemaVersion,gi.VideoItem.VideoAssets,gi.VideoItem.VideoItemFullState,gi.VideoItem.VideoItem,gi.VideoItem.VideoItemState,fi.Asset.Asset,fi.AudioItem.AudioAssets,fi.AudioItem.AudioItemFullState,fi.AudioItem.AudioItem,fi.AudioItem.AudioItemState,fi.BaseItem.BaseItemState,fi.Blockument.Blockument,fi.Border.Border,fi.DropShadow.DropShadow,fi.Fill.Fill,fi.FillBase.FillImageCrop,fi.FillBase.FillBase,fi.FillBase.FillColorFields,fi.FillBase.FillImageFields,fi.GroupItem.GroupItemFullState,fi.GroupItem.GroupItem,fi.GroupItem.GroupItemState,fi.Item.Item,fi.ItemRef.ItemRef,fi.JSONContent.JSONContent;const Jo=fi.Manifest.Manifest;fi.OverlayFill.OverlayFill,fi.Padding.Padding,fi.RichTextRef.RichTextRef,fi.ShapeDef.ShapeRectangle,fi.ShapeDef.ShapeEllipse,fi.ShapeDef.ShapeStar,fi.ShapeDef.ShapeCloud,fi.ShapeDef.ShapePlus,fi.ShapeDef.ShapeTriangle,fi.ShapeDef.ShapeBookmark,fi.ShapeDef.ShapeChevron,fi.ShapeDef.ShapeOctagon,fi.ShapeDef.ShapeParallelogram,fi.ShapeDef.ShapeShield,fi.ShapeDef.ShapeSpeechBubble,fi.ShapeDef.ShapeArrow,fi.ShapeDef.ShapeDef,fi.ShapeItem.ShapeItemFullState,fi.ShapeItem.ShapeItem,fi.ShapeItem.ShapeItemState,fi.State.StateMeta,fi.State.BaseItemFullState,fi.TextItem.TextVerticalAlign,fi.TextItem.TextPadding,fi.TextItem.TextItemFullState,fi.TextItem.TextItem,fi.TextItem.TextItemState,fi.Trigger.TriggerMediaAction,fi.Trigger.TriggerChangeStateAction,fi.Trigger.TriggerChangeVisibilityAction,fi.Trigger.TriggerAction,fi.Trigger.Trigger,fi.Unit.Unit,fi.Version.SchemaVersion,fi.VideoItem.VideoAssets,fi.VideoItem.VideoItemFullState,fi.VideoItem.VideoItem,fi.VideoItem.VideoItemState;var Po=a(3330),Ro=a.n(Po);const Zo={createDocument:()=>document.implementation.createHTMLDocument(),createDocumentFromHTML:e=>(new DOMParser).parseFromString(e,"text/html")};let Oo;I.ZF.fromSchema(ae);const _o=I.S4.fromSchema(ae),jo=[m,u,"Lato","Raleway","Roboto","Merriweather","Open Sans","Lora","Roboto Slab","Maitree","Cormorant","Montserrat","Poppins","Inter","Be Vietnam","DM Sans","Lustria","Maven Pro","Oswald"];function Yo(e){const t=(Oo??(Oo=Zo.createDocument())).createElement("div");t.innerHTML=e;let a=_o.parse(t,{preserveWhitespace:"full"}).toJSON();return a=le({callback:e=>{let t;const a=[];"paragraph"===e.type?t=oe:(t={...oe,fontFamily:m,textSize:e.attrs?.level?S[e.attrs.level].fontSize:g},a.push({type:"bold"})),le({callback:r=>{if(r.marks){const i=r.marks.find((e=>"textStyle"===e.type));if(i)if(i.attrs)for(const[e,a]of d(t))[void 0,""].includes(i.attrs[e])&&(i.attrs[e]=a);else i.attrs={...t};else r.marks=[...r.marks,{type:"textStyle",attrs:{...t}}];"heading"===e.type&&(r.marks.find((e=>"bold"===e.type))||(r.marks=[...a,...r.marks]))}else r.marks=[...a,{type:"textStyle",attrs:{...t}}];r.marks.sort(((e,t)=>e.type.localeCompare(t.type)))},contentTypes:["text"],doc:e})},contentTypes:["heading","paragraph"],doc:a}),a=function(e,t,a={heading:m,body:u}){const r=le({callback:e=>{e.attrs?.fontFamily&&e.attrs.fontFamily.includes(",")&&(e.attrs.fontFamily=e.attrs.fontFamily.split(",")[0].trim()),t.some((t=>t.toLowerCase()===e.attrs?.fontFamily?.toLowerCase()))||(e.attrs.fontFamily=a.body)},contentTypes:["listItem"],doc:e}),i=(e,a)=>{const r=(e.marks??[]).find((e=>"textStyle"===e.type));r?.attrs?.fontFamily&&(r.attrs.fontFamily.includes(",")&&(r.attrs.fontFamily=r.attrs.fontFamily.split(",")[0].trim()),t.some((e=>e.toLowerCase()===r.attrs.fontFamily.toLowerCase()))||(r.attrs.fontFamily=a))},o=le({callback:e=>{const t="heading"===e.type?a.heading:a.body;return le({callback:e=>{i(e,t)},contentTypes:["text"],doc:e})},contentTypes:["heading","paragraph"],doc:r});return le({callback:e=>{i(e,a.body)},contentTypes:["text"],doc:o})}(a,jo),a}function Ho(e){return/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(e)}const Eo=new Set(p({richText:0,altText:0,transcript:0,script:0}));function Go(e){if(5!==e.length)return null;const[t,a,r,i,o]=e;return"mondrian"===t&&Ho(a)&&Ho(r)&&("default"===i||Ho(i))&&(n=o,Eo.has(n))?{blockumentId:a,itemId:r,stateId:i,type:o}:null;var n}const Xo={id:crypto.randomUUID(),name:"bike.jpg",path:"mondrian/assets/default/bike.jpg",width:1680,height:1120},qo={type:"color",opacity:1},No={...qo,crop:{height:1,width:1,top:0,left:0}};function Uo(e){return e&&"none"!==e.type?"color"===e.type?{...e,crop:No.crop}:e:No}function Wo(e){return{...e,_v:12}}function Qo(e){return{...e,fill:Uo(e.fill),overlay:Uo(e.overlay)}}function Ko(e){return{...e,fill:Uo(e.fill),overlay:(t=e.overlay,t&&"none"!==t.type?t:qo)};var t}function en(e){switch(e.type){case"audio":case"group":case"shape":case"text":case"video":return function(e){return e.assets[Xo.id]=Xo,e.states.default.fill.assetId||(e.states.default.fill.assetId=Xo.id),e}({...e,states:to(e.states,Qo,Ko),_v:12,assets:e.assets??{}});default:throw new Error("Unreachable")}}vi.Asset.Asset,vi.AudioItem.AudioAssets,vi.AudioItem.AudioItemFullState,vi.AudioItem.AudioItem,vi.AudioItem.AudioItemState,vi.BaseItem.BaseItemState,vi.Blockument.Blockument,vi.Border.Border,vi.DropShadow.DropShadow,vi.Fill.FillImageCrop,vi.Fill.FillColorFields,vi.Fill.Fill,vi.GroupItem.GroupItemFullState,vi.GroupItem.GroupItem,vi.GroupItem.GroupItemState,vi.Item.Item,vi.ItemRef.ItemRef,vi.JSONContent.JSONContent;const tn=vi.Manifest.Manifest;function an(e){return{...e,layers:[],_v:13}}function rn(e){return{...e,opacity:1}}function on(e){return{...e,opacity:1}}function nn(e){switch(e.type){case"audio":case"group":case"shape":case"text":case"video":return{...e,states:to(e.states,rn,on),_v:13};default:throw new Error("Unreachable")}}vi.Padding.Padding,vi.RichTextRef.RichTextRef,vi.ShapeDef.ShapeRectangle,vi.ShapeDef.ShapeEllipse,vi.ShapeDef.ShapeStar,vi.ShapeDef.ShapeCloud,vi.ShapeDef.ShapePlus,vi.ShapeDef.ShapeTriangle,vi.ShapeDef.ShapeBookmark,vi.ShapeDef.ShapeChevron,vi.ShapeDef.ShapeOctagon,vi.ShapeDef.ShapeParallelogram,vi.ShapeDef.ShapeShield,vi.ShapeDef.ShapeSpeechBubble,vi.ShapeDef.ShapeArrow,vi.ShapeDef.ShapeDef,vi.ShapeItem.ShapeItemFullState,vi.ShapeItem.ShapeItem,vi.ShapeItem.ShapeItemState,vi.State.StateMeta,vi.State.BaseItemFullState,vi.TextItem.TextVerticalAlign,vi.TextItem.TextPadding,vi.TextItem.TextItemFullState,vi.TextItem.TextItem,vi.TextItem.TextItemState,vi.Trigger.TriggerMediaAction,vi.Trigger.TriggerChangeStateAction,vi.Trigger.TriggerChangeVisibilityAction,vi.Trigger.TriggerChangeLayerAction,vi.Trigger.TriggerAction,vi.Trigger.Trigger,vi.Unit.Unit,vi.Version.SchemaVersion,vi.VideoItem.VideoAssets,vi.VideoItem.VideoItemFullState,vi.VideoItem.VideoItem,vi.VideoItem.VideoItemState,Si.Asset.Asset,Si.AudioItem.AudioAssets,Si.AudioItem.AudioItemFullState,Si.AudioItem.AudioItem,Si.AudioItem.AudioItemState,Si.BaseItem.BaseItemState,Si.Blockument.Blockument,Si.Border.Border,Si.DropShadow.DropShadow,Si.Fill.FillImageCrop,Si.Fill.FillColorFields,Si.Fill.Fill,Si.GroupItem.GroupItemFullState,Si.GroupItem.GroupItem,Si.GroupItem.GroupItemState,Si.Item.Item,Si.ItemRef.ItemRef,Si.JSONContent.JSONContent;const ln=Si.Manifest.Manifest;function sn(e){return{...e,_v:14}}function cn(e){return{...e,opacity:1}}function dn(e){return{...e,opacity:1}}function pn(e){switch(e.type){case"audio":case"group":case"shape":case"text":case"video":return{...e,states:to(e.states,cn,dn),_v:14};default:throw new Error("Unreachable")}}Si.Padding.Padding,Si.RichTextRef.RichTextRef,Si.ShapeDef.ShapeRectangle,Si.ShapeDef.ShapeEllipse,Si.ShapeDef.ShapeStar,Si.ShapeDef.ShapeCloud,Si.ShapeDef.ShapePlus,Si.ShapeDef.ShapeTriangle,Si.ShapeDef.ShapeBookmark,Si.ShapeDef.ShapeChevron,Si.ShapeDef.ShapeOctagon,Si.ShapeDef.ShapeParallelogram,Si.ShapeDef.ShapeShield,Si.ShapeDef.ShapeSpeechBubble,Si.ShapeDef.ShapeArrow,Si.ShapeDef.ShapeDef,Si.ShapeItem.ShapeItemFullState,Si.ShapeItem.ShapeItem,Si.ShapeItem.ShapeItemState,Si.State.StateMeta,Si.State.BaseItemFullState,Si.TextItem.TextVerticalAlign,Si.TextItem.TextPadding,Si.TextItem.TextItemFullState,Si.TextItem.TextItem,Si.TextItem.TextItemState,Si.Trigger.TriggerMediaAction,Si.Trigger.TriggerChangeStateAction,Si.Trigger.TriggerChangeVisibilityAction,Si.Trigger.TriggerChangeLayerAction,Si.Trigger.TriggerAction,Si.Trigger.Trigger,Si.Unit.Unit,Si.Version.SchemaVersion,Si.VideoItem.VideoAssets,Si.VideoItem.VideoItemFullState,Si.VideoItem.VideoItem,Si.VideoItem.VideoItemState,Ii.Asset.Asset,Ii.AudioItem.AudioAssets,Ii.AudioItem.AudioItemFullState,Ii.AudioItem.AudioItem,Ii.AudioItem.AudioItemState,Ii.BaseItem.BaseItemState,Ii.Blockument.Blockument,Ii.Border.Border,Ii.DropShadow.DropShadow,Ii.Fill.FillImageCrop,Ii.Fill.FillColorFields,Ii.Fill.Fill,Ii.GroupItem.GroupItemFullState,Ii.GroupItem.GroupItem,Ii.GroupItem.GroupItemState,Ii.Item.Item,Ii.ItemRef.ItemRef,Ii.JSONContent.JSONContent;const hn=Ii.Manifest.Manifest;function mn(e){return{...e,_v:15}}function un(e){if(e)switch(e.type){case"star":case"plus":case"triangle":case"bookmark":case"chevron":case"octagon":case"parallelogram":case"shield":case"speechBubble":case"arrow":return{...e,cornerRounding:0};default:return e}}function gn(e){return{...e,clipDef:un(e.clipDef)}}function fn(e){return{...e,clipDef:un(e.clipDef)}}function vn(e){switch(e.type){case"audio":case"group":case"shape":case"text":case"video":return{...e,_v:15,states:to(e.states,gn,fn)};default:throw new Error}}Ii.Padding.Padding,Ii.RichTextRef.RichTextRef,Ii.ShapeDef.ShapeDefBase,Ii.ShapeDef.ShapeDefRoundedCorners,Ii.ShapeDef.ShapeRectangle,Ii.ShapeDef.ShapeEllipse,Ii.ShapeDef.ShapeStar,Ii.ShapeDef.ShapeCloud,Ii.ShapeDef.ShapePlus,Ii.ShapeDef.ShapeTriangle,Ii.ShapeDef.ShapeBookmark,Ii.ShapeDef.ShapeChevron,Ii.ShapeDef.ShapeOctagon,Ii.ShapeDef.ShapeParallelogram,Ii.ShapeDef.ShapeShield,Ii.ShapeDef.ShapeSpeechBubble,Ii.ShapeDef.ShapeArrow,Ii.ShapeDef.ShapeDef,Ii.ShapeItem.ShapeItemFullState,Ii.ShapeItem.ShapeItem,Ii.ShapeItem.ShapeItemState,Ii.State.StateMeta,Ii.State.BaseItemFullState,Ii.TextItem.TextVerticalAlign,Ii.TextItem.TextPadding,Ii.TextItem.TextItemFullState,Ii.TextItem.TextItem,Ii.TextItem.TextItemState,Ii.Trigger.TriggerMediaAction,Ii.Trigger.TriggerChangeStateAction,Ii.Trigger.TriggerChangeVisibilityAction,Ii.Trigger.TriggerChangeLayerAction,Ii.Trigger.TriggerAction,Ii.Trigger.Trigger,Ii.Unit.Unit,Ii.Version.SchemaVersion,Ii.VideoItem.VideoAssets,Ii.VideoItem.VideoItemFullState,Ii.VideoItem.VideoItem,Ii.VideoItem.VideoItemState,bi.Asset.Asset,bi.AudioItem.AudioAssets,bi.AudioItem.AudioItemFullState,bi.AudioItem.AudioItem,bi.AudioItem.AudioItemState,bi.Backdrop.MinimalBackdropData,bi.Backdrop.ExtendedBackdropData,bi.Backdrop.BackdropColorFillData,bi.Backdrop.BackdropImageFillData,bi.Backdrop.GroupBackdropStateData,bi.Backdrop.ShapeBackdropStateData,bi.Backdrop.ImageBackdropStateData,bi.BaseItem.BaseItemState,bi.Blockument.Blockument,bi.Border.Border,bi.DropShadow.DropShadow,bi.Fill.FillImageCrop,bi.Fill.FillColor,bi.Fill.FillImage,bi.GroupItem.GroupItemFullState,bi.GroupItem.GroupItem,bi.GroupItem.GroupItemState,bi.ImageItem.ImageItemFullState,bi.ImageItem.ImageItem,bi.ImageItem.ImageItemState,bi.Item.Item,bi.ItemRef.ItemRef,bi.JSONContent.JSONContent;const Sn=bi.Manifest.Manifest;bi.Padding.Padding,bi.RichTextRef.RichTextRef,bi.ShapeDef.ShapeDefBase,bi.ShapeDef.ShapeDefRoundedCorners,bi.ShapeDef.ShapeRectangle,bi.ShapeDef.ShapeEllipse,bi.ShapeDef.ShapeStar,bi.ShapeDef.ShapeCloud,bi.ShapeDef.ShapePlus,bi.ShapeDef.ShapeTriangle,bi.ShapeDef.ShapeBookmark,bi.ShapeDef.ShapeChevron,bi.ShapeDef.ShapeOctagon,bi.ShapeDef.ShapeParallelogram,bi.ShapeDef.ShapeShield,bi.ShapeDef.ShapeSpeechBubble,bi.ShapeDef.ShapeArrow,bi.ShapeDef.ShapeDef,bi.ShapeItem.ShapeItemFullState,bi.ShapeItem.ShapeItem,bi.ShapeItem.ShapeItemState,bi.State.StateMeta,bi.State.BaseItemFullState,bi.TextItem.TextVerticalAlign,bi.TextItem.TextPadding,bi.TextItem.TextItemFullState,bi.TextItem.TextItem,bi.TextItem.TextItemState,bi.Trigger.TriggerMediaAction,bi.Trigger.TriggerChangeStateAction,bi.Trigger.TriggerChangeVisibilityAction,bi.Trigger.TriggerChangeLayerAction,bi.Trigger.TriggerAction,bi.Trigger.Trigger,bi.Unit.Unit,bi.Version.SchemaVersion,bi.VideoItem.VideoAssets,bi.VideoItem.VideoItemFullState,bi.VideoItem.VideoItem,bi.VideoItem.VideoItemState;function In(e){return{...e,_v:16}}function bn(e){let t;return t="group"===e.type?function(e){return e.parentId===e.blockumentId?{...e,_v:16,states:to(e.states,(e=>({border:{applied:!1,type:"none",color:"#000000",opacity:1,style:"solid",width:{value:1,unit:"px"}},overlay:{opacity:1},fill:{opacity:1},...e})),(e=>e))}:{...e,_v:16,states:to(e.states,(e=>({...e,border:{applied:!1,type:"none",color:"#000000",opacity:1,style:"solid",width:{value:1,unit:"px"}},overlay:{opacity:1},fill:{opacity:1}})),(e=>{const{border:t,overlay:a,fill:r,...i}=e;return i}))}}(e):"shape"===e.type?function(e){return"image"===e.states.default.fill.type&&e.states.default.fill.assetId&&e.assets[e.states.default.fill.assetId]?{...e,_v:16,type:"image",states:to(e.states,(e=>{const{clipDef:t,altText:a,...r}=e;return{...r,shapeDef:t,altText:a??""}}),(e=>{if("image"===e.fill?.type){const{clipDef:t,altText:a,...r}=e;return{...r,shapeDef:t,altText:a??void 0}}{const{border:t,overlay:a,fill:r,clipDef:i,altText:o,...n}=e;return{...n,shapeDef:i,altText:o??void 0}}}))}:{...e,_v:16,states:to(e.states,(e=>{const{clipDef:t,...a}=e;return{...a,shapeDef:t}}),(e=>{if("color"===e.fill?.type){const{clipDef:t,...a}=e;return{...a,shapeDef:t}}{const{border:t,overlay:a,fill:r,clipDef:i,...o}=e;return{...o,shapeDef:i}}}))}}(e):{...e,_v:16},function(e){const t=[];"audio"===e.type&&t.push(...c(e.states).map((e=>e.audioSources?.default))),"video"===e.type&&t.push(...c(e.states).map((e=>e.videoSources?.default))),"image"===e.type&&t.push(...c(e.states).map((e=>e.fill?.assetId)));const a=new Set(t);e.assets=Ro()(e.assets,((e,t)=>a.has(t)))}(t),t}xi.Asset.Asset,xi.AudioItem.AudioAssets,xi.AudioItem.AudioItemFullState,xi.AudioItem.AudioItem,xi.AudioItem.AudioItemState,xi.Backdrop.MinimalBackdropData,xi.Backdrop.ExtendedBackdropData,xi.Backdrop.BackdropColorFillData,xi.Backdrop.BackdropImageFillData,xi.Backdrop.GroupBackdropStateData,xi.Backdrop.ShapeBackdropStateData,xi.Backdrop.ImageBackdropStateData,xi.BaseItem.BaseItemState,xi.Blockument.Blockument,xi.Border.Border,xi.DropShadow.DropShadow,xi.Fill.FillImageCrop,xi.Fill.FillColor,xi.Fill.FillImage,xi.GroupItem.GroupItemFullState,xi.GroupItem.GroupItem,xi.GroupItem.GroupItemState,xi.ImageItem.ImageItemFullState,xi.ImageItem.ImageItem,xi.ImageItem.ImageItemState,xi.Item.Item,xi.ItemRef.ItemRef,xi.JSONContent.JSONContent;const xn=xi.Manifest.Manifest;function wn(e){return{...e,_v:17}}function yn(e){return{...e,_v:17}}xi.RichTextRef.RichTextRef,xi.ShapeDef.ShapeDefBase,xi.ShapeDef.ShapeDefRoundedCorners,xi.ShapeDef.ShapeRectangle,xi.ShapeDef.ShapeEllipse,xi.ShapeDef.ShapeStar,xi.ShapeDef.ShapeCloud,xi.ShapeDef.ShapePlus,xi.ShapeDef.ShapeTriangle,xi.ShapeDef.ShapeBookmark,xi.ShapeDef.ShapeChevron,xi.ShapeDef.ShapeOctagon,xi.ShapeDef.ShapeParallelogram,xi.ShapeDef.ShapeShield,xi.ShapeDef.ShapeSpeechBubble,xi.ShapeDef.ShapeArrow,xi.ShapeDef.ShapeDef,xi.ShapeItem.ShapeItemFullState,xi.ShapeItem.ShapeItem,xi.ShapeItem.ShapeItemState,xi.State.StateMeta,xi.State.BaseItemFullState,xi.TextItem.TextVerticalAlign,xi.TextItem.TextPadding,xi.TextItem.TextItemFullState,xi.TextItem.TextItem,xi.TextItem.TextItemState,xi.Trigger.TriggerMediaAction,xi.Trigger.TriggerChangeStateAction,xi.Trigger.TriggerChangeVisibilityAction,xi.Trigger.TriggerChangeLayerAction,xi.Trigger.TriggerAction,xi.Trigger.Trigger,xi.Unit.Unit,xi.Version.SchemaVersion,xi.VideoItem.VideoAssets,xi.VideoItem.VideoItemFullState,xi.VideoItem.VideoItem,xi.VideoItem.VideoItemState,wi.Asset.Asset,wi.AudioItem.AudioAssets,wi.AudioItem.AudioItemFullState,wi.AudioItem.AudioItem,wi.AudioItem.AudioItemState,wi.Backdrop.MinimalBackdropData,wi.Backdrop.ExtendedBackdropData,wi.Backdrop.BackdropColorFillData,wi.Backdrop.BackdropImageFillData,wi.Backdrop.GroupBackdropStateData,wi.Backdrop.ShapeBackdropStateData,wi.Backdrop.ImageBackdropStateData,wi.BaseItem.BaseItemState,wi.Blockument.Blockument,wi.Border.Border,wi.DropShadow.DropShadow,wi.Fill.FillImageCrop,wi.Fill.FillColor,wi.Fill.FillImage,wi.GroupItem.GroupItemFullState,wi.GroupItem.GroupItem,wi.GroupItem.GroupItemState,wi.ImageItem.ImageItemFullState,wi.ImageItem.ImageItem,wi.ImageItem.ImageItemState,wi.Item.Item,wi.ItemRef.ItemRef,wi.JSONContent.JSONContent;const kn=wi.Manifest.Manifest;function Cn(e){return{...e,authoringOpened:!0,_v:18}}function Tn(e){return{...e,_v:18}}wi.RichTextRef.RichTextRef,wi.ShapeDef.ShapeDefBase,wi.ShapeDef.ShapeDefRoundedCorners,wi.ShapeDef.ShapeRectangle,wi.ShapeDef.ShapeEllipse,wi.ShapeDef.ShapeStar,wi.ShapeDef.ShapeCloud,wi.ShapeDef.ShapePlus,wi.ShapeDef.ShapeTriangle,wi.ShapeDef.ShapeBookmark,wi.ShapeDef.ShapeChevron,wi.ShapeDef.ShapeOctagon,wi.ShapeDef.ShapeParallelogram,wi.ShapeDef.ShapeShield,wi.ShapeDef.ShapeSpeechBubble,wi.ShapeDef.ShapeArrow,wi.ShapeDef.ShapeDef,wi.ShapeItem.ShapeItemFullState,wi.ShapeItem.ShapeItem,wi.ShapeItem.ShapeItemState,wi.State.StateMeta,wi.State.BaseItemFullState,wi.TextItem.TextVerticalAlign,wi.TextItem.TextPadding,wi.TextItem.TextItemFullState,wi.TextItem.TextItem,wi.TextItem.TextItemState,wi.Trigger.TriggerMediaAction,wi.Trigger.TriggerChangeStateAction,wi.Trigger.TriggerChangeVisibilityAction,wi.Trigger.TriggerChangeLayerAction,wi.Trigger.TriggerAction,wi.Trigger.Trigger,wi.Unit.Unit,wi.Version.SchemaVersion,wi.VideoItem.VideoAssets,wi.VideoItem.VideoItemFullState,wi.VideoItem.VideoItem,wi.VideoItem.VideoItemState,yi.Asset.Asset,yi.AudioItem.AudioAssets,yi.AudioItem.AudioItemFullState,yi.AudioItem.AudioItem,yi.AudioItem.AudioItemState,yi.Backdrop.MinimalBackdropData,yi.Backdrop.ExtendedBackdropData,yi.Backdrop.BackdropColorFillData,yi.Backdrop.BackdropImageFillData,yi.Backdrop.GroupBackdropStateData,yi.Backdrop.ShapeBackdropStateData,yi.Backdrop.ImageBackdropStateData,yi.BaseItem.BaseItemState,yi.Blockument.Blockument,yi.Border.Border,yi.DropShadow.DropShadow,yi.Fill.FillImageCrop,yi.Fill.FillColor,yi.Fill.FillImage,yi.GroupItem.GroupItemFullState,yi.GroupItem.GroupItem,yi.GroupItem.GroupItemState,yi.ImageItem.ImageItemFullState,yi.ImageItem.ImageItem,yi.ImageItem.ImageItemState,yi.Item.Item,yi.ItemRef.ItemRef,yi.JSONContent.JSONContent;const Bn=yi.Manifest.Manifest;function Mn(e){return{...e,_v:19}}function Ln(e){return"shape"===e.type?{...e,_v:19,states:to(e.states,(e=>({...e,altText:""})),(e=>e))}:{...e,_v:19}}yi.RichTextRef.RichTextRef,yi.ShapeDef.ShapeDefBase,yi.ShapeDef.ShapeDefRoundedCorners,yi.ShapeDef.ShapeRectangle,yi.ShapeDef.ShapeEllipse,yi.ShapeDef.ShapeStar,yi.ShapeDef.ShapeCloud,yi.ShapeDef.ShapePlus,yi.ShapeDef.ShapeTriangle,yi.ShapeDef.ShapeBookmark,yi.ShapeDef.ShapeChevron,yi.ShapeDef.ShapeOctagon,yi.ShapeDef.ShapeParallelogram,yi.ShapeDef.ShapeShield,yi.ShapeDef.ShapeSpeechBubble,yi.ShapeDef.ShapeArrow,yi.ShapeDef.ShapeDef,yi.ShapeItem.ShapeItemFullState,yi.ShapeItem.ShapeItem,yi.ShapeItem.ShapeItemState,yi.State.StateMeta,yi.State.BaseItemFullState,yi.TextItem.TextVerticalAlign,yi.TextItem.TextPadding,yi.TextItem.TextItemFullState,yi.TextItem.TextItem,yi.TextItem.TextItemState,yi.Trigger.TriggerMediaAction,yi.Trigger.TriggerChangeStateAction,yi.Trigger.TriggerChangeVisibilityAction,yi.Trigger.TriggerChangeLayerAction,yi.Trigger.TriggerAction,yi.Trigger.Trigger,yi.Unit.Unit,yi.Version.SchemaVersion,yi.VideoItem.VideoAssets,yi.VideoItem.VideoItemFullState,yi.VideoItem.VideoItem,yi.VideoItem.VideoItemState,ki.Asset.Asset,ki.AudioItem.AudioAssets,ki.AudioItem.AudioItemFullState,ki.AudioItem.AudioItem,ki.AudioItem.AudioItemState,ki.Backdrop.MinimalBackdropData,ki.Backdrop.ExtendedBackdropData,ki.Backdrop.BackdropColorFillData,ki.Backdrop.BackdropImageFillData,ki.Backdrop.GroupBackdropStateData,ki.Backdrop.ShapeBackdropStateData,ki.Backdrop.ImageBackdropStateData,ki.BaseItem.BaseItemState,ki.Blockument.Blockument,ki.Border.Border,ki.DropShadow.DropShadow,ki.Fill.FillImageCrop,ki.Fill.FillColor,ki.Fill.FillImage,ki.GroupItem.GroupItemFullState,ki.GroupItem.GroupItem,ki.GroupItem.GroupItemState,ki.ImageItem.ImageItemFullState,ki.ImageItem.ImageItem,ki.ImageItem.ImageItemState,ki.Item.Item,ki.ItemRef.ItemRef,ki.JSONContent.JSONContent;const An=ki.Manifest.Manifest;function Dn(e){le({callback:e=>{e.marks&&(e.marks=e.marks.filter((e=>"code"!==e.type)))},contentTypes:["text"],doc:e})}function Fn(e){return e.text?.json?(Dn(e.text?.json),e):e}function zn(e){return e.text?.json?(Dn(e.text?.json),e):e}function Vn(e){return e.text?.json?(Dn(e.text?.json),e):e}function $n(e){return e.text?.json?(Dn(e.text?.json),e):e}function Jn(e){return{...e,_v:20}}function Pn(e){switch(e.type){case"text":return{...e,_v:20,states:to(e.states,Fn,zn)};case"shape":return{...e,_v:20,states:to(e.states,Vn,$n)};default:return{...e,_v:20}}}ki.RichTextRef.RichTextRef,ki.ShapeDef.ShapeDefBase,ki.ShapeDef.ShapeDefRoundedCorners,ki.ShapeDef.ShapeRectangle,ki.ShapeDef.ShapeEllipse,ki.ShapeDef.ShapeStar,ki.ShapeDef.ShapeCloud,ki.ShapeDef.ShapePlus,ki.ShapeDef.ShapeTriangle,ki.ShapeDef.ShapeBookmark,ki.ShapeDef.ShapeChevron,ki.ShapeDef.ShapeOctagon,ki.ShapeDef.ShapeParallelogram,ki.ShapeDef.ShapeShield,ki.ShapeDef.ShapeSpeechBubble,ki.ShapeDef.ShapeArrow,ki.ShapeDef.ShapeDef,ki.ShapeItem.ShapeItemFullState,ki.ShapeItem.ShapeItem,ki.ShapeItem.ShapeItemState,ki.State.StateMeta,ki.State.BaseItemFullState,ki.TextItem.TextVerticalAlign,ki.TextItem.TextPadding,ki.TextItem.TextItemFullState,ki.TextItem.TextItem,ki.TextItem.TextItemState,ki.Trigger.TriggerMediaAction,ki.Trigger.TriggerChangeStateAction,ki.Trigger.TriggerChangeVisibilityAction,ki.Trigger.TriggerChangeLayerAction,ki.Trigger.TriggerAction,ki.Trigger.Trigger,ki.Unit.Unit,ki.Version.SchemaVersion,ki.VideoItem.VideoAssets,ki.VideoItem.VideoItemFullState,ki.VideoItem.VideoItem,ki.VideoItem.VideoItemState,Ci.Asset.Asset,Ci.AudioItem.AudioAssets,Ci.AudioItem.AiAudioSettings,Ci.AudioItem.AudioItemFullState,Ci.AudioItem.AudioItem,Ci.AudioItem.AudioItemState,Ci.Backdrop.BorderBackdropData,Ci.Backdrop.OverlayBackdropData,Ci.Backdrop.ExtendedBackdropData,Ci.Backdrop.BackdropColorFillData,Ci.Backdrop.BackdropImageFillData,Ci.Backdrop.GroupBackdropStateData,Ci.Backdrop.ShapeBackdropStateData,Ci.Backdrop.ImageBackdropStateData,Ci.Backdrop.LineBackdropStateData,Ci.BaseItem.BaseItemState,Ci.Blockument.Blockument,Ci.Border.Border,Ci.DropShadow.DropShadow,Ci.Fill.FillImageCrop,Ci.Fill.FillColor,Ci.Fill.FillImage,Ci.GroupItem.GroupItemFullState,Ci.GroupItem.GroupItem,Ci.GroupItem.GroupItemState,Ci.ImageItem.ImageItemFullState,Ci.ImageItem.ImageItem,Ci.ImageItem.ImageItemState,Ci.Item.Item,Ci.ItemRef.ItemRef,Ci.JSONContent.JSONContent,Ci.LineItem.LineItemFullState,Ci.LineItem.LineItem,Ci.LineItem.LineItemState;const Rn=Ci.Manifest.Manifest;function Zn(e){return{...e,_v:21}}function On(e){return{...e,_v:21}}Ci.RichTextRef.RichTextRef,Ci.ShapeDef.ShapeDefBase,Ci.ShapeDef.ShapeDefRoundedCorners,Ci.ShapeDef.ShapeRectangle,Ci.ShapeDef.ShapeEllipse,Ci.ShapeDef.ShapeStar,Ci.ShapeDef.ShapeCloud,Ci.ShapeDef.ShapePlus,Ci.ShapeDef.ShapeTriangle,Ci.ShapeDef.ShapeBookmark,Ci.ShapeDef.ShapeChevron,Ci.ShapeDef.ShapeOctagon,Ci.ShapeDef.ShapeParallelogram,Ci.ShapeDef.ShapeShield,Ci.ShapeDef.ShapeSpeechBubble,Ci.ShapeDef.ShapeArrow,Ci.ShapeDef.LineEndStyle,Ci.ShapeDef.LineEnd,Ci.ShapeDef.ShapeLine,Ci.ShapeDef.ShapeDef,Ci.ShapeItem.ShapeItemFullState,Ci.ShapeItem.ShapeItem,Ci.ShapeItem.ShapeItemState,Ci.State.StateMeta,Ci.State.BaseItemFullState,Ci.TextItem.TextVerticalAlign,Ci.TextItem.TextPadding,Ci.TextItem.TextItemFullState,Ci.TextItem.TextItem,Ci.TextItem.TextItemState,Ci.Trigger.TriggerMediaAction,Ci.Trigger.TriggerChangeStateAction,Ci.Trigger.TriggerChangeVisibilityAction,Ci.Trigger.TriggerChangeLayerAction,Ci.Trigger.TriggerAction,Ci.Trigger.Trigger,Ci.Unit.Unit,Ci.Version.SchemaVersion,Ci.VideoItem.VideoAssets,Ci.VideoItem.VideoItemFullState,Ci.VideoItem.VideoItem,Ci.VideoItem.VideoItemState,Ti.Asset.Asset,Ti.AudioItem.AudioAssets,Ti.AudioItem.AiAudioSettings,Ti.AudioItem.AudioItemFullState,Ti.AudioItem.AudioItem,Ti.AudioItem.AudioItemState,Ti.Backdrop.BorderBackdropData,Ti.Backdrop.OverlayBackdropData,Ti.Backdrop.ExtendedBackdropData,Ti.Backdrop.BackdropColorFillData,Ti.Backdrop.BackdropImageFillData,Ti.Backdrop.GroupBackdropStateData,Ti.Backdrop.ShapeBackdropStateData,Ti.Backdrop.ImageBackdropStateData,Ti.Backdrop.LineBackdropStateData,Ti.BaseItem.BaseItemState,Ti.Blockument.Blockument,Ti.Border.Border,Ti.DropShadow.DropShadow,Ti.Fill.FillImageCrop,Ti.Fill.FillColor,Ti.Fill.FillImage,Ti.GroupItem.GroupItemFullState,Ti.GroupItem.GroupItem,Ti.GroupItem.GroupItemState,Ti.ImageItem.ImageItemFullState,Ti.ImageItem.ImageItem,Ti.ImageItem.ImageItemState,Ti.Item.Item,Ti.ItemRef.ItemRef,Ti.JSONContent.JSONContent,Ti.LineItem.LineItemFullState,Ti.LineItem.LineItem,Ti.LineItem.LineItemState;const _n=Ti.Manifest.Manifest;function jn(e){return e.map((({id:e,clonedFromId:t},a)=>({id:e,visualOrder:0===a?0:-a,clonedFromId:t})))}function Yn(e){return{...e,_v:22,children:jn(e.children)}}function Hn(e){return"group"===e.type?{...e,_v:22,children:jn(e.children)}:{...e,_v:22}}Ti.RichTextRef.RichTextRef,Ti.ShapeDef.ShapeDefBase,Ti.ShapeDef.ShapeDefRoundedCorners,Ti.ShapeDef.ShapeRectangle,Ti.ShapeDef.ShapeEllipse,Ti.ShapeDef.ShapeStar,Ti.ShapeDef.ShapeCloud,Ti.ShapeDef.ShapePlus,Ti.ShapeDef.ShapeTriangle,Ti.ShapeDef.ShapeBookmark,Ti.ShapeDef.ShapeChevron,Ti.ShapeDef.ShapeOctagon,Ti.ShapeDef.ShapeParallelogram,Ti.ShapeDef.ShapeShield,Ti.ShapeDef.ShapeSpeechBubble,Ti.ShapeDef.ShapeArrow,Ti.ShapeDef.LineEndStyle,Ti.ShapeDef.LineEnd,Ti.ShapeDef.ShapeLine,Ti.ShapeDef.ShapeDef,Ti.ShapeItem.ShapeItemFullState,Ti.ShapeItem.ShapeItem,Ti.ShapeItem.ShapeItemState,Ti.State.StateMeta,Ti.State.BaseItemFullState,Ti.TextItem.TextVerticalAlign,Ti.TextItem.TextPadding,Ti.TextItem.TextItemFullState,Ti.TextItem.TextItem,Ti.TextItem.TextItemState,Ti.Trigger.TriggerMediaAction,Ti.Trigger.TriggerChangeStateAction,Ti.Trigger.TriggerChangeVisibilityAction,Ti.Trigger.TriggerChangeLayerAction,Ti.Trigger.TriggerAction,Ti.Trigger.Trigger,Ti.Unit.Unit,Ti.Version.SchemaVersion,Ti.VideoItem.VideoAssets,Ti.VideoItem.VideoItemFullState,Ti.VideoItem.VideoItem,Ti.VideoItem.VideoItemState,Bi.Asset.Asset,Bi.AudioItem.AudioAssets,Bi.AudioItem.AiAudioSettings,Bi.AudioItem.AudioItemFullState,Bi.AudioItem.AudioItem,Bi.AudioItem.AudioItemState,Bi.Backdrop.BorderBackdropData,Bi.Backdrop.OverlayBackdropData,Bi.Backdrop.ExtendedBackdropData,Bi.Backdrop.BackdropColorFillData,Bi.Backdrop.BackdropImageFillData,Bi.Backdrop.GroupBackdropStateData,Bi.Backdrop.ShapeBackdropStateData,Bi.Backdrop.ImageBackdropStateData,Bi.Backdrop.LineBackdropStateData,Bi.BaseItem.BaseItemState,Bi.Blockument.Blockument,Bi.Border.Border,Bi.DropShadow.DropShadow,Bi.Fill.FillImageCrop,Bi.Fill.FillColor,Bi.Fill.FillImage,Bi.GroupItem.GroupItemFullState,Bi.GroupItem.GroupItem,Bi.GroupItem.GroupItemState,Bi.ImageItem.ImageItemFullState,Bi.ImageItem.ImageItem,Bi.ImageItem.ImageItemState,Bi.Item.Item,Bi.ItemRef.ItemRef,Bi.JSONContent.JSONContent,Bi.LineItem.LineItemFullState,Bi.LineItem.LineItem,Bi.LineItem.LineItemState;const En=Bi.Manifest.Manifest;function Gn(e){return{...e,_v:23}}function Xn(e){return"shape"!==e.type&&"text"!==e.type||le({callback:e=>{if(e.marks?.length){const t=e.marks.find((e=>"highlight"===e.type));if(t?.attrs){const a=e.marks.find((e=>"textStyle"===e.type));"number"==typeof t.attrs.textSize&&"number"==typeof a?.attrs?.textSize&&(a.attrs.textSize=t.attrs.textSize,t.attrs={color:t.attrs.color})}}},contentTypes:["text"],doc:e.states.default.text.json}),{...e,_v:23}}Bi.RichTextRef.RichTextRef,Bi.ShapeDef.ShapeDefBase,Bi.ShapeDef.ShapeDefRoundedCorners,Bi.ShapeDef.ShapeRectangle,Bi.ShapeDef.ShapeEllipse,Bi.ShapeDef.ShapeStar,Bi.ShapeDef.ShapeCloud,Bi.ShapeDef.ShapePlus,Bi.ShapeDef.ShapeTriangle,Bi.ShapeDef.ShapeBookmark,Bi.ShapeDef.ShapeChevron,Bi.ShapeDef.ShapeOctagon,Bi.ShapeDef.ShapeParallelogram,Bi.ShapeDef.ShapeShield,Bi.ShapeDef.ShapeSpeechBubble,Bi.ShapeDef.ShapeArrow,Bi.ShapeDef.LineEndStyle,Bi.ShapeDef.LineEnd,Bi.ShapeDef.ShapeLine,Bi.ShapeDef.ShapeDef,Bi.ShapeItem.ShapeItemFullState,Bi.ShapeItem.ShapeItem,Bi.ShapeItem.ShapeItemState,Bi.State.StateMeta,Bi.State.BaseItemFullState,Bi.TextItem.TextVerticalAlign,Bi.TextItem.TextPadding,Bi.TextItem.TextItemFullState,Bi.TextItem.TextItem,Bi.TextItem.TextItemState,Bi.Trigger.TriggerMediaAction,Bi.Trigger.TriggerChangeStateAction,Bi.Trigger.TriggerChangeVisibilityAction,Bi.Trigger.TriggerChangeLayerAction,Bi.Trigger.TriggerAction,Bi.Trigger.Trigger,Bi.Unit.Unit,Bi.Version.SchemaVersion,Bi.VideoItem.VideoAssets,Bi.VideoItem.VideoItemFullState,Bi.VideoItem.VideoItem,Bi.VideoItem.VideoItemState,Mi.Asset.Asset,Mi.AudioItem.AudioAssets,Mi.AudioItem.AiAudioSettings,Mi.AudioItem.AudioItemFullState,Mi.AudioItem.AudioItem,Mi.AudioItem.AudioItemState,Mi.Backdrop.BorderBackdropData,Mi.Backdrop.OverlayBackdropData,Mi.Backdrop.ExtendedBackdropData,Mi.Backdrop.BackdropColorFillData,Mi.Backdrop.BackdropImageFillData,Mi.Backdrop.GroupBackdropStateData,Mi.Backdrop.ShapeBackdropStateData,Mi.Backdrop.ImageBackdropStateData,Mi.Backdrop.LineBackdropStateData,Mi.BaseItem.BaseItemState,Mi.Blockument.Blockument,Mi.Border.Border,Mi.DropShadow.DropShadow,Mi.Fill.FillImageCrop,Mi.Fill.FillColor,Mi.Fill.FillImage,Mi.GroupItem.GroupItemFullState,Mi.GroupItem.GroupItem,Mi.GroupItem.GroupItemState,Mi.ImageItem.ImageItemFullState,Mi.ImageItem.ImageItem,Mi.ImageItem.ImageItemState,Mi.Item.Item,Mi.ItemRef.ItemRef,Mi.JSONContent.JSONContent,Mi.LineItem.LineItemFullState,Mi.LineItem.LineItem,Mi.LineItem.LineItemState;const qn=Mi.Manifest.Manifest;function Nn(e){return{...e,_v:24}}function Un(e){return{...e,altText:""}}function Wn(e){switch(e.type){case"image":case"shape":case"line":return{...e,_v:24};case"group":case"video":case"audio":case"text":return{...e,states:to(e.states,Un,(e=>e)),_v:24};default:throw new Error("Unexpected item type "+e.type)}}Mi.RichTextRef.RichTextRef,Mi.ShapeDef.ShapeDefBase,Mi.ShapeDef.ShapeDefRoundedCorners,Mi.ShapeDef.ShapeRectangle,Mi.ShapeDef.ShapeEllipse,Mi.ShapeDef.ShapeStar,Mi.ShapeDef.ShapeCloud,Mi.ShapeDef.ShapePlus,Mi.ShapeDef.ShapeTriangle,Mi.ShapeDef.ShapeBookmark,Mi.ShapeDef.ShapeChevron,Mi.ShapeDef.ShapeOctagon,Mi.ShapeDef.ShapeParallelogram,Mi.ShapeDef.ShapeShield,Mi.ShapeDef.ShapeSpeechBubble,Mi.ShapeDef.ShapeArrow,Mi.ShapeDef.LineEndStyle,Mi.ShapeDef.LineEnd,Mi.ShapeDef.ShapeLine,Mi.ShapeDef.ShapeDef,Mi.ShapeItem.ShapeItemFullState,Mi.ShapeItem.ShapeItem,Mi.ShapeItem.ShapeItemState,Mi.State.StateMeta,Mi.State.BaseItemFullState,Mi.TextItem.TextVerticalAlign,Mi.TextItem.TextPadding,Mi.TextItem.TextItemFullState,Mi.TextItem.TextItem,Mi.TextItem.TextItemState,Mi.Trigger.TriggerMediaAction,Mi.Trigger.TriggerChangeStateAction,Mi.Trigger.TriggerChangeVisibilityAction,Mi.Trigger.TriggerChangeLayerAction,Mi.Trigger.TriggerAction,Mi.Trigger.Trigger,Mi.Unit.Unit,Mi.Version.SchemaVersion,Mi.VideoItem.VideoAssets,Mi.VideoItem.VideoItemFullState,Mi.VideoItem.VideoItem,Mi.VideoItem.VideoItemState,Li.Asset.Asset,Li.AudioItem.AudioAssets,Li.AudioItem.AiAudioSettings,Li.AudioItem.AudioItemFullState,Li.AudioItem.AudioItem,Li.AudioItem.AudioItemState,Li.Backdrop.BorderBackdropData,Li.Backdrop.OverlayBackdropData,Li.Backdrop.ExtendedBackdropData,Li.Backdrop.BackdropColorFillData,Li.Backdrop.BackdropImageFillData,Li.Backdrop.GroupBackdropStateData,Li.Backdrop.ShapeBackdropStateData,Li.Backdrop.ImageBackdropStateData,Li.Backdrop.LineBackdropStateData,Li.BaseItem.BaseItemState,Li.Blockument.Blockument,Li.Border.Border,Li.DropShadow.DropShadow,Li.Fill.FillImageCrop,Li.Fill.FillColor,Li.Fill.FillImage,Li.GroupItem.GroupItemFullState,Li.GroupItem.GroupItem,Li.GroupItem.GroupItemState,Li.ImageItem.ImageItemFullState,Li.ImageItem.ImageItem,Li.ImageItem.ImageItemState,Li.Item.Item,Li.ItemRef.ItemRef,Li.JSONContent.JSONContent,Li.LineItem.LineItemFullState,Li.LineItem.LineItem,Li.LineItem.LineItemState;const Qn=Li.Manifest.Manifest;function Kn(e){return{...e,_v:25}}function el(e){return{...e,transcript:""}}function tl(e){switch(e.type){case"image":case"shape":case"line":case"group":case"video":case"text":return{...e,_v:25};case"audio":return{...e,states:to(e.states,el,(e=>e)),_v:25};default:throw new Error("Unexpected item type "+e.type)}}Li.RichTextRef.RichTextRef,Li.ShapeDef.ShapeDefBase,Li.ShapeDef.ShapeDefRoundedCorners,Li.ShapeDef.ShapeRectangle,Li.ShapeDef.ShapeEllipse,Li.ShapeDef.ShapeStar,Li.ShapeDef.ShapeCloud,Li.ShapeDef.ShapePlus,Li.ShapeDef.ShapeTriangle,Li.ShapeDef.ShapeBookmark,Li.ShapeDef.ShapeChevron,Li.ShapeDef.ShapeOctagon,Li.ShapeDef.ShapeParallelogram,Li.ShapeDef.ShapeShield,Li.ShapeDef.ShapeSpeechBubble,Li.ShapeDef.ShapeArrow,Li.ShapeDef.LineEndStyle,Li.ShapeDef.LineEnd,Li.ShapeDef.ShapeLine,Li.ShapeDef.ShapeDef,Li.ShapeItem.ShapeItemFullState,Li.ShapeItem.ShapeItem,Li.ShapeItem.ShapeItemState,Li.State.StateMeta,Li.State.BaseItemFullState,Li.TextItem.TextVerticalAlign,Li.TextItem.TextPadding,Li.TextItem.TextItemFullState,Li.TextItem.TextItem,Li.TextItem.TextItemState,Li.Trigger.TriggerMediaAction,Li.Trigger.TriggerChangeStateAction,Li.Trigger.TriggerChangeVisibilityAction,Li.Trigger.TriggerChangeLayerAction,Li.Trigger.TriggerAction,Li.Trigger.Trigger,Li.Unit.Unit,Li.Version.SchemaVersion,Li.VideoItem.VideoAssets,Li.VideoItem.VideoItemFullState,Li.VideoItem.VideoItem,Li.VideoItem.VideoItemState,Ai.Asset.Asset,Ai.AudioItem.AudioAssets,Ai.AudioItem.AiAudioSettings,Ai.AudioItem.AudioItemFullState,Ai.AudioItem.AudioItem,Ai.AudioItem.AudioItemState,Ai.Backdrop.BorderBackdropData,Ai.Backdrop.OverlayBackdropData,Ai.Backdrop.ExtendedBackdropData,Ai.Backdrop.BackdropColorFillData,Ai.Backdrop.BackdropImageFillData,Ai.Backdrop.GroupBackdropStateData,Ai.Backdrop.ShapeBackdropStateData,Ai.Backdrop.ImageBackdropStateData,Ai.Backdrop.LineBackdropStateData,Ai.BaseItem.BaseItemState,Ai.Blockument.Blockument,Ai.Border.Border,Ai.DropShadow.DropShadow,Ai.Fill.FillImageCrop,Ai.Fill.FillColor,Ai.Fill.FillImage,Ai.Fill.FillLinearGradient,Ai.GroupItem.GroupItemFullState,Ai.GroupItem.GroupItem,Ai.GroupItem.GroupItemState,Ai.ImageItem.ImageItemFullState,Ai.ImageItem.ImageItem,Ai.ImageItem.ImageItemState,Ai.Item.Item,Ai.ItemRef.ItemRef,Ai.JSONContent.JSONContent,Ai.LineItem.LineItemFullState,Ai.LineItem.LineItem,Ai.LineItem.LineItemState;const al=Ai.Manifest.Manifest;function rl(e){return{...e,_v:26}}function il(e){return{applied:e.applied,color:e.color,opacity:e.opacity,style:e.style,width:e.width.value}}function ol(e){return{...e,x:e.x.value,y:e.y.value,width:e.width.value,height:e.height.value}}function nl(e){return{...e,x:e.x?.value,y:e.y?.value,width:e.width?.value,height:e.height?.value}}function ll(e){return{...e,x:e.x.value,y:e.y.value,width:e.width.value,height:e.height.value,border:il(e.border)}}function sl(e){return{...e,x:e.x?.value,y:e.y?.value,width:e.width?.value,height:e.height?.value,border:e.border&&il(e.border)}}function cl(e){switch(e.type){case"audio":case"video":case"text":return{...e,_v:26,states:to(e.states,ol,nl)};case"shape":case"line":case"image":case"group":return{...e,_v:26,states:to(e.states,ll,sl)};default:throw new Error("Unexpected item type "+e.type)}}Ai.RichTextRef.RichTextRef,Ai.ShapeDef.ShapeDefBase,Ai.ShapeDef.ShapeDefRoundedCorners,Ai.ShapeDef.ShapeRectangle,Ai.ShapeDef.ShapeEllipse,Ai.ShapeDef.ShapeStar,Ai.ShapeDef.ShapeCloud,Ai.ShapeDef.ShapePlus,Ai.ShapeDef.ShapeTriangle,Ai.ShapeDef.ShapeBookmark,Ai.ShapeDef.ShapeChevron,Ai.ShapeDef.ShapeOctagon,Ai.ShapeDef.ShapeParallelogram,Ai.ShapeDef.ShapeShield,Ai.ShapeDef.ShapeSpeechBubble,Ai.ShapeDef.ShapeArrow,Ai.ShapeDef.LineEndStyle,Ai.ShapeDef.LineEnd,Ai.ShapeDef.ShapeLine,Ai.ShapeDef.ShapeDef,Ai.ShapeItem.ShapeItemFullState,Ai.ShapeItem.ShapeItem,Ai.ShapeItem.ShapeItemState,Ai.State.StateMeta,Ai.State.BaseItemFullState,Ai.TextItem.TextVerticalAlign,Ai.TextItem.TextPadding,Ai.TextItem.TextItemFullState,Ai.TextItem.TextItem,Ai.TextItem.TextItemState,Ai.Trigger.TriggerMediaAction,Ai.Trigger.TriggerChangeStateAction,Ai.Trigger.TriggerChangeVisibilityAction,Ai.Trigger.TriggerChangeLayerAction,Ai.Trigger.TriggerAction,Ai.Trigger.Trigger,Ai.Version.SchemaVersion,Ai.VideoItem.VideoAssets,Ai.VideoItem.VideoItemFullState,Ai.VideoItem.VideoItem,Ai.VideoItem.VideoItemState,Di.Asset.Asset,Di.AudioItem.AudioAssets,Di.AudioItem.AiAudioSettings,Di.AudioItem.AudioItemFullState,Di.AudioItem.AudioItem,Di.AudioItem.AudioItemState,Di.Backdrop.BorderBackdropData,Di.Backdrop.OverlayBackdropData,Di.Backdrop.ExtendedBackdropData,Di.Backdrop.BackdropColorFillData,Di.Backdrop.BackdropImageFillData,Di.Backdrop.GroupBackdropStateData,Di.Backdrop.ShapeBackdropStateData,Di.Backdrop.ImageBackdropStateData,Di.Backdrop.LineBackdropStateData,Di.BaseItem.BaseItemState,Di.Blockument.Blockument,Di.Border.Border,Di.DropShadow.DropShadow,Di.Fill.FillImageCrop,Di.Fill.FillColor,Di.Fill.FillImage,Di.Fill.FillLinearGradient,Di.GroupItem.GroupItemFullState,Di.GroupItem.GroupItem,Di.GroupItem.GroupItemState,Di.ImageItem.ImageItemFullState,Di.ImageItem.ImageItem,Di.ImageItem.ImageItemState,Di.Item.Item,Di.ItemRef.ItemRef,Di.JSONContent.JSONContent,Di.LineItem.LineItemFullState,Di.LineItem.LineItem,Di.LineItem.LineItemState;const dl=Di.Manifest.Manifest;function pl(e){return{...e,_v:27}}function hl(e){return"shape"===e.type||"text"===e.type?{...e,autoHeight:!0,_v:27}:{...e,_v:27}}Di.RichTextRef.RichTextRef,Di.ShapeDef.ShapeDefBase,Di.ShapeDef.ShapeDefRoundedCorners,Di.ShapeDef.ShapeRectangle,Di.ShapeDef.ShapeEllipse,Di.ShapeDef.ShapeStar,Di.ShapeDef.ShapeCloud,Di.ShapeDef.ShapePlus,Di.ShapeDef.ShapeTriangle,Di.ShapeDef.ShapeBookmark,Di.ShapeDef.ShapeChevron,Di.ShapeDef.ShapeOctagon,Di.ShapeDef.ShapeParallelogram,Di.ShapeDef.ShapeShield,Di.ShapeDef.ShapeSpeechBubble,Di.ShapeDef.ShapeArrow,Di.ShapeDef.LineEndStyle,Di.ShapeDef.LineEnd,Di.ShapeDef.ShapeLine,Di.ShapeDef.ShapeDef,Di.ShapeItem.ShapeItemFullState,Di.ShapeItem.ShapeItem,Di.ShapeItem.ShapeItemState,Di.State.StateMeta,Di.State.BaseItemFullState,Di.TextItem.TextVerticalAlign,Di.TextItem.TextPadding,Di.TextItem.TextItemFullState,Di.TextItem.TextItem,Di.TextItem.TextItemState,Di.Trigger.TriggerMediaAction,Di.Trigger.TriggerChangeStateAction,Di.Trigger.TriggerChangeVisibilityAction,Di.Trigger.TriggerChangeLayerAction,Di.Trigger.TriggerAction,Di.Trigger.Trigger,Di.Version.SchemaVersion,Di.VideoItem.VideoAssets,Di.VideoItem.VideoItemFullState,Di.VideoItem.VideoItem,Di.VideoItem.VideoItemState,Fi.Asset.Asset,Fi.AudioItem.AudioAssets,Fi.AudioItem.AiAudioSettings,Fi.AudioItem.AudioItemFullState,Fi.AudioItem.AudioItem,Fi.AudioItem.AudioItemState,Fi.Backdrop.BorderBackdropData,Fi.Backdrop.OverlayBackdropData,Fi.Backdrop.ExtendedBackdropData,Fi.Backdrop.BackdropColorFillData,Fi.Backdrop.BackdropImageFillData,Fi.Backdrop.GroupBackdropStateData,Fi.Backdrop.ShapeBackdropStateData,Fi.Backdrop.ImageBackdropStateData,Fi.Backdrop.LineBackdropStateData,Fi.BaseItem.BaseItemState,Fi.Blockument.Blockument,Fi.Border.Border,Fi.DropShadow.DropShadow,Fi.Fill.FillImageCrop,Fi.Fill.FillColor,Fi.Fill.FillImage,Fi.Fill.FillLinearGradient,Fi.GroupItem.GroupItemFullState,Fi.GroupItem.GroupItem,Fi.GroupItem.GroupItemState,Fi.ImageItem.ImageItemFullState,Fi.ImageItem.ImageItem,Fi.ImageItem.ImageItemState,Fi.Item.Item,Fi.ItemRef.ItemRef,Fi.JSONContent.JSONContent,Fi.LineItem.LineItemFullState,Fi.LineItem.LineItem,Fi.LineItem.LineItemState;const ml=Fi.Manifest.Manifest;function ul(e){return{...e,_v:28}}function gl(e){return{...e,localeOverrides:{},_v:28}}Fi.RichTextRef.RichTextRef,Fi.ShapeDef.ShapeDefBase,Fi.ShapeDef.ShapeDefRoundedCorners,Fi.ShapeDef.ShapeRectangle,Fi.ShapeDef.ShapeEllipse,Fi.ShapeDef.ShapeStar,Fi.ShapeDef.ShapeCloud,Fi.ShapeDef.ShapePlus,Fi.ShapeDef.ShapeTriangle,Fi.ShapeDef.ShapeBookmark,Fi.ShapeDef.ShapeChevron,Fi.ShapeDef.ShapeOctagon,Fi.ShapeDef.ShapeParallelogram,Fi.ShapeDef.ShapeShield,Fi.ShapeDef.ShapeSpeechBubble,Fi.ShapeDef.ShapeArrow,Fi.ShapeDef.LineEndStyle,Fi.ShapeDef.LineEnd,Fi.ShapeDef.ShapeLine,Fi.ShapeDef.ShapeDef,Fi.ShapeItem.ShapeItemFullState,Fi.ShapeItem.ShapeItem,Fi.ShapeItem.ShapeItemState,Fi.State.StateMeta,Fi.State.LocalizableBaseItemState,Fi.State.BaseItemFullState,Fi.TextItem.TextVerticalAlign,Fi.TextItem.TextPadding,Fi.TextItem.LocalizableTextItemFullState,Fi.TextItem.TextItemFullState,Fi.TextItem.TextItemStateLocaleOverrideable,Fi.TextItem.TextItem,Fi.TextItem.TextItemState,Fi.Trigger.TriggerMediaAction,Fi.Trigger.TriggerChangeStateAction,Fi.Trigger.TriggerChangeVisibilityAction,Fi.Trigger.TriggerChangeLayerAction,Fi.Trigger.TriggerAction,Fi.Trigger.Trigger,Fi.Version.SchemaVersion,Fi.VideoItem.VideoAssets,Fi.VideoItem.VideoItemFullState,Fi.VideoItem.VideoItem,Fi.VideoItem.VideoItemState,zi.Asset.Asset,zi.AudioItem.AudioAssets,zi.AudioItem.AiAudioSettings,zi.AudioItem.AudioItemFullState,zi.AudioItem.AudioItem,zi.AudioItem.AudioItemState,zi.Backdrop.BorderBackdropData,zi.Backdrop.OverlayBackdropData,zi.Backdrop.ExtendedBackdropData,zi.Backdrop.BackdropColorFillData,zi.Backdrop.BackdropImageFillData,zi.Backdrop.GroupBackdropStateData,zi.Backdrop.ShapeBackdropStateData,zi.Backdrop.ImageBackdropStateData,zi.Backdrop.LineBackdropStateData,zi.BaseItem.BaseItemState,zi.Blockument.Blockument,zi.Border.Border,zi.DropShadow.DropShadow,zi.Fill.FillImageCrop,zi.Fill.FillColor,zi.Fill.FillImage,zi.Fill.FillLinearGradient,zi.GroupItem.GroupItemFullState,zi.GroupItem.GroupItem,zi.GroupItem.GroupItemState,zi.ImageItem.ImageItemFullState,zi.ImageItem.ImageItem,zi.ImageItem.ImageItemState,zi.Item.Item,zi.ItemRef.ItemRef,zi.JSONContent.JSONContent,zi.LineItem.LineItemFullState,zi.LineItem.LineItem,zi.LineItem.LineItemState;const fl=zi.Manifest.Manifest;function vl(e){return{...e,_v:29}}function Sl(e){return function(e){return"audio"===e.type}(e)?"aiAudioSettings"in e&&e.aiAudioSettings?{...e,aiAudioSettings:{...e.aiAudioSettings,speed:1,similarity:e.aiAudioSettings?.similarity??1,stability:e.aiAudioSettings?.stability??.5},_v:29}:{...e,aiAudioSettings:void 0,_v:29}:{...e,_v:29}}zi.RichTextRef.RichTextRef,zi.ShapeDef.ShapeDefBase,zi.ShapeDef.ShapeDefRoundedCorners,zi.ShapeDef.ShapeRectangle,zi.ShapeDef.ShapeEllipse,zi.ShapeDef.ShapeStar,zi.ShapeDef.ShapeCloud,zi.ShapeDef.ShapePlus,zi.ShapeDef.ShapeTriangle,zi.ShapeDef.ShapeBookmark,zi.ShapeDef.ShapeChevron,zi.ShapeDef.ShapeOctagon,zi.ShapeDef.ShapeParallelogram,zi.ShapeDef.ShapeShield,zi.ShapeDef.ShapeSpeechBubble,zi.ShapeDef.ShapeArrow,zi.ShapeDef.LineEndStyle,zi.ShapeDef.LineEnd,zi.ShapeDef.ShapeLine,zi.ShapeDef.ShapeDef,zi.ShapeItem.ShapeItemFullState,zi.ShapeItem.ShapeItem,zi.ShapeItem.ShapeItemState,zi.State.StateMeta,zi.State.LocalizableBaseItemState,zi.State.BaseItemFullState,zi.TextItem.TextVerticalAlign,zi.TextItem.TextPadding,zi.TextItem.LocalizableTextItemFullState,zi.TextItem.TextItemFullState,zi.TextItem.TextItemStateLocaleOverrideable,zi.TextItem.TextItem,zi.TextItem.TextItemState,zi.Trigger.TriggerMediaAction,zi.Trigger.TriggerChangeStateAction,zi.Trigger.TriggerChangeVisibilityAction,zi.Trigger.TriggerChangeLayerAction,zi.Trigger.TriggerAction,zi.Trigger.Trigger,zi.Version.SchemaVersion,zi.VideoItem.VideoAssets,zi.VideoItem.VideoItemFullState,zi.VideoItem.VideoItem,zi.VideoItem.VideoItemState,Vi.Asset.Asset,Vi.AudioItem.AudioAssets,Vi.AudioItem.AiAudioSettings,Vi.AudioItem.AudioItemFullState,Vi.AudioItem.AudioItem,Vi.AudioItem.AudioItemState,Vi.Backdrop.BorderBackdropData,Vi.Backdrop.OverlayBackdropData,Vi.Backdrop.ExtendedBackdropData,Vi.Backdrop.BackdropColorFillData,Vi.Backdrop.BackdropImageFillData,Vi.Backdrop.GroupBackdropStateData,Vi.Backdrop.ShapeBackdropStateData,Vi.Backdrop.ImageBackdropStateData,Vi.Backdrop.LineBackdropStateData,Vi.BaseItem.BaseItemState,Vi.Blockument.Blockument,Vi.Border.Border,Vi.DropShadow.DropShadow,Vi.Fill.FillImageCrop,Vi.Fill.FillColor,Vi.Fill.FillImage,Vi.Fill.FillLinearGradient,Vi.GroupItem.GroupItemFullState,Vi.GroupItem.GroupItem,Vi.GroupItem.GroupItemState,Vi.ImageItem.ImageItemFullState,Vi.ImageItem.ImageItem,Vi.ImageItem.ImageItemState,Vi.Item.Item,Vi.ItemRef.ItemRef,Vi.JSONContent.JSONContent,Vi.LineItem.LineItemFullState,Vi.LineItem.LineItem,Vi.LineItem.LineItemState;const Il=Vi.Manifest.Manifest;function bl(e){return{...e,_v:30}}function xl(e){if("audio"!==e.type||!e.aiAudioSettings)return{...e,_v:30};const{aiAudioSettings:t,...a}=e,r={...a,_v:30};for(const e of c(r.states))e.aiAudioSettings=t;return r}Vi.RichTextRef.RichTextRef,Vi.ShapeDef.ShapeDefBase,Vi.ShapeDef.ShapeDefRoundedCorners,Vi.ShapeDef.ShapeRectangle,Vi.ShapeDef.ShapeEllipse,Vi.ShapeDef.ShapeStar,Vi.ShapeDef.ShapeCloud,Vi.ShapeDef.ShapePlus,Vi.ShapeDef.ShapeTriangle,Vi.ShapeDef.ShapeBookmark,Vi.ShapeDef.ShapeChevron,Vi.ShapeDef.ShapeOctagon,Vi.ShapeDef.ShapeParallelogram,Vi.ShapeDef.ShapeShield,Vi.ShapeDef.ShapeSpeechBubble,Vi.ShapeDef.ShapeArrow,Vi.ShapeDef.LineEndStyle,Vi.ShapeDef.LineEnd,Vi.ShapeDef.ShapeLine,Vi.ShapeDef.ShapeDef,Vi.ShapeItem.ShapeItemFullState,Vi.ShapeItem.ShapeItem,Vi.ShapeItem.ShapeItemState,Vi.State.StateMeta,Vi.State.LocalizableBaseItemState,Vi.State.BaseItemFullState,Vi.TextItem.TextVerticalAlign,Vi.TextItem.TextPadding,Vi.TextItem.LocalizableTextItemFullState,Vi.TextItem.TextItemFullState,Vi.TextItem.TextItemStateLocaleOverrideable,Vi.TextItem.TextItem,Vi.TextItem.TextItemState,Vi.Trigger.TriggerMediaAction,Vi.Trigger.TriggerChangeStateAction,Vi.Trigger.TriggerChangeVisibilityAction,Vi.Trigger.TriggerChangeLayerAction,Vi.Trigger.TriggerAction,Vi.Trigger.Trigger,Vi.Version.SchemaVersion,Vi.VideoItem.VideoAssets,Vi.VideoItem.VideoItemFullState,Vi.VideoItem.VideoItem,Vi.VideoItem.VideoItemState;const wl=[{version:3,upgrade:function({blockuments:e,items:t}){return{blockuments:eo()(e??{},(e=>({...e,_v:3}))),items:eo()(t??{},io)}},InputSchema:Wi,OutputSchema:Qi},{version:4,upgrade:function(e){return{blockuments:eo()(e.blockuments??{},(e=>({...e,_v:4}))),items:eo()(e.items??{},po)}},InputSchema:Qi,OutputSchema:oo},{version:5,upgrade:function(e){return{blockuments:eo()(e.blockuments??{},(e=>({...e,_v:5}))),items:eo()(e.items??{},fo)}},InputSchema:oo,OutputSchema:ho},{version:6,upgrade:function(e){return{blockuments:eo()(e.blockuments??{},(e=>({...e,_v:6}))),items:eo()(e.items??{},bo)}},InputSchema:ho,OutputSchema:vo},{version:7,upgrade:function(e){return{blockuments:eo()(e.blockuments??{},(e=>({...e,_v:7}))),items:eo()(e.items??{},yo)}},InputSchema:vo,OutputSchema:xo},{version:8,upgrade:function(e){return{blockuments:eo()(e.blockuments??{},(e=>({...e,_v:8}))),items:eo()(e.items??{},To)}},InputSchema:xo,OutputSchema:ko},{version:9,upgrade:function(e){return{blockuments:eo()(e.blockuments??{},Mo),items:eo()(e.items??{},Lo)}},InputSchema:ko,OutputSchema:Bo},{version:10,upgrade:function(e){return{blockuments:eo()(e.blockuments??{},(e=>({...e,_v:10}))),items:eo()(e.items??{},Do)}},InputSchema:Bo,OutputSchema:Ao},{version:11,upgrade:function(e){return{blockuments:eo()(e.blockuments??{},Vo),items:eo()(e.items??{},$o)}},InputSchema:Ao,OutputSchema:Fo},{version:12,upgrade:function(e){return{blockuments:eo()(e.blockuments??{},Wo),items:eo()(e.items??{},en)}},InputSchema:Fo,OutputSchema:Jo},{version:13,upgrade:function(e){return{blockuments:eo()(e.blockuments??{},an),items:eo()(e.items??{},nn)}},InputSchema:Jo,OutputSchema:tn},{version:14,upgrade:function(e){return{blockuments:eo()(e.blockuments??{},sn),items:eo()(e.items??{},pn)}},InputSchema:tn,OutputSchema:ln},{version:15,upgrade:function(e){return{blockuments:eo()(e.blockuments??{},mn),items:eo()(e.items??{},vn)}},InputSchema:ln,OutputSchema:hn},{version:16,upgrade:function(e){return{blockuments:eo()(e.blockuments??{},In),items:eo()(e.items??{},bn)}},InputSchema:hn,OutputSchema:Sn},{version:17,upgrade:function(e){return{blockuments:eo()(e.blockuments??{},wn),items:eo()(e.items??{},yn)}},InputSchema:Sn,OutputSchema:xn},{version:18,upgrade:function(e){return{blockuments:eo()(e.blockuments??{},Cn),items:eo()(e.items??{},Tn)}},InputSchema:xn,OutputSchema:kn},{version:19,upgrade:function(e){return{blockuments:eo()(e.blockuments??{},Mn),items:eo()(e.items??{},Ln)}},InputSchema:kn,OutputSchema:Bn},{version:20,upgrade:function(e){return{blockuments:eo()(e.blockuments??{},Jn),items:eo()(e.items??{},Pn)}},InputSchema:Bn,OutputSchema:An},{version:21,upgrade:function(e){return{blockuments:eo()(e.blockuments??{},Zn),items:eo()(e.items??{},On)}},InputSchema:An,OutputSchema:Rn},{version:22,upgrade:function(e){return{blockuments:eo()(e.blockuments??{},Yn),items:eo()(e.items??{},Hn)}},InputSchema:Rn,OutputSchema:_n},{version:23,upgrade:function(e){return{blockuments:eo()(e.blockuments??{},Gn),items:eo()(e.items??{},Xn)}},InputSchema:_n,OutputSchema:En},{version:24,upgrade:function(e){return{blockuments:eo()(e.blockuments??{},Nn),items:eo()(e.items??{},Wn)}},InputSchema:En,OutputSchema:qn},{version:25,upgrade:function(e){return{blockuments:eo()(e.blockuments??{},Kn),items:eo()(e.items??{},tl)}},InputSchema:qn,OutputSchema:Qn},{version:26,upgrade:function(e){return{blockuments:eo()(e.blockuments??{},rl),items:eo()(e.items??{},cl)}},InputSchema:Qn,OutputSchema:al},{version:27,upgrade:function(e){return{blockuments:eo()(e.blockuments??{},pl),items:eo()(e.items??{},hl)}},InputSchema:al,OutputSchema:dl},{version:28,upgrade:function(e){return{blockuments:eo()(e.blockuments??{},ul),items:eo()(e.items??{},gl)}},InputSchema:dl,OutputSchema:ml},{version:29,upgrade:function(e){return{blockuments:eo()(e.blockuments??{},vl),items:eo()(e.items??{},Sl)}},InputSchema:ml,OutputSchema:fl},{version:30,upgrade:function(e){return{blockuments:eo()(e.blockuments??{},bl),items:eo()(e.items??{},xl)}},InputSchema:fl,OutputSchema:Il}];a(9840);var yl=Pt.vs('<link rel="prefetch" as="image">'),kl=a(2835);function Cl(e,t){return[...e.querySelectorAll(t)]}function Tl(e,t,a,r){return t.addEventListener(e,a,r),()=>{t.removeEventListener(e,a,r)}}var Bl,Ml,Ll=a(9701),Al=function(e,t,a,r){if("a"===a&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===a?r:"a"===a?r.call(e):r?r.value:t.get(e)};class Dl extends kl.WF{get $form(){return Al(this,Ml,"f")?.form??null}get $slotted(){return this.$$$("*")}$(e){return function(e,t){return e.querySelector(t)}(this.shadowRoot,e)}$$(e){return Cl(this.shadowRoot,e)}$$$(e,t){const a=t?`slot[name="${t}"]`:"slot:not([name])",r=this.$(a);return r?r.assignedElements({flatten:!0}).map((t=>t.matches(e)?[t]:Cl(t,e))).flat():(console.warn(`Could not query ${a} within ${this.tagName.toLowerCase()} because it does not exist.`),[])}constructor(){super(),Bl.set(this,[]),Ml.set(this,void 0),this.hasSlotted=e=>this.$slotted.some((t=>t.contains(e))),this.hasWithin=e=>this.contains(e)||this.hasSlotted(e),this.unbindEvents=()=>{Al(this,Bl,"f").forEach((e=>e()))},this.collectOff=e=>{Al(this,Bl,"f").push(e)},this.on=(e,t,a)=>{const r=Tl(e,this,t,a);return this.collectOff(r),r},this.dispatch=(e,t={})=>function(e,t,a={},r={}){e.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0,...r,detail:a}))}(this,e,t),this.constructor.formAssociated&&function(e,t,a,r,i){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!i)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!i:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");"a"===r?i.call(e,a):i?i.value=a:t.set(e,a)}(this,Ml,this.attachInternals(),"f")}connectedCallback(){super.connectedCallback(),this.bindEvents()}disconnectedCallback(){super.disconnectedCallback(),this.unbindEvents()}bindEvents(){}}Bl=new WeakMap,Ml=new WeakMap,Dl.formAssociated=!1,Dl.shadowRootOptions={...kl.WF.shadowRootOptions,delegatesFocus:!0};var Fl=function(e,t,a,r){var i,o=arguments.length,n=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(n=(o<3?i(n):o>3?i(t,a,n):i(t,a))||n);return o>3&&n&&Object.defineProperty(t,a,n),n};const zl=kl.AH`
  * {
    box-sizing: border-box;
  }

  :host {
    --mon-menu-item-hover-background-color: var(
      --arc-color-background-primary-hover
    );
    --mon-menu-item-selected-background-color: var(
      --arc-color-background-primary-selected
    );
    --mon-menu-font-size: var(--art-font-size-sm);
    --mon-menu-color: var(--art-color-mono-900);
    background: var(--arc-color-mono-white);
    border-radius: var(--mon-menu-border-radius, var(--arc-border-radius-lg));
    box-shadow: var(--mon-menu-box-shadow, var(--arc-shadow-lg));
    padding: var(--mon-menu-padding, var(--arc-space-0-5));
    min-width: var(--mon-menu-min-width, auto);
    font-size: var(--mon-menu-font-size);
    color: var(--mon-menu-color);
    display: flex;
    flex-direction: column;
  }

  :host([floating]) {
    position: var(--mon-menu-position, absolute);
    inset: var(--mon-menu-inset, 100% 0 auto 0);
    z-index: 99999;
    top: var(--mon-menu-top, unset);
    right: var(--mon-menu-right, unset);
  }
`;let Vl=class extends Dl{constructor(){super(...arguments),this.floating=!1,this.autofocusit=!1,this.value=null,this.itemFocus=0,this.submit=()=>{this.dispatch("mon-menu:submit",{name:this.name,value:this.value})},this.focusFirstApplicableItem=()=>{this.menuItems[this.itemFocus]?.focus()},this.onSelect=e=>{e.stopPropagation(),this.value=e.target.value??null;for(const e of this.$$$("mon-menu-item"))e.selected=e.value===this.value;this.submit()},this.onKeyDown=e=>{const{key:t,shiftKey:a}=e;e.target.assignedSlot?.parentElement===this||e.target.parentElement===this?(["ArrowUp","ArrowDown","ArrowRight","End","Home"].includes(t)&&(e.stopPropagation(),e.preventDefault()),["ArrowUp","ArrowDown","End","Home"].includes(t)?("ArrowDown"===t?(this.itemFocus++,this.itemFocus>=this.menuItems.length&&(this.itemFocus=0)):"ArrowUp"===t?(this.itemFocus--,this.itemFocus<0&&(this.itemFocus=this.menuItems.length-1)):"Home"===t?this.itemFocus=0:"End"===t&&(this.itemFocus=this.menuItems.length-1),this.menuItems[this.itemFocus].focus(),this.value=this.menuItems[this.itemFocus].value??null):"Tab"===t?(a?(this.itemFocus--,this.itemFocus<0&&(this.value=null,this.dispatch("mon-menu:escape"))):(this.itemFocus++,this.itemFocus>=this.menuItems.length&&(this.value=null,this.dispatch("mon-menu:escape"))),this.value=this.menuItems[this.itemFocus]?.value??null):"Escape"===t?this.dispatch("mon-menu:escape"):"ArrowRight"===t?this.dispatch("mon-menu:open-sub-menu",{name:this.name,value:this.value,target:this.menuItems[this.itemFocus]}):"ArrowLeft"===t&&this.dispatch("mon-menu:close-sub-menu")):"Escape"===t||"ArrowLeft"===t?(this.focusFirstApplicableItem(),e.preventDefault(),e.stopPropagation()):"Tab"===t&&(a||null!==e.target.nextElementSibling?a&&null===e.target.previousElementSibling?.previousElementSibling&&(this.focusFirstApplicableItem(),e.preventDefault(),e.stopPropagation()):(this.itemFocus++,this.focusFirstApplicableItem(),e.preventDefault(),e.stopPropagation()))},this.onKeyup=e=>{const{key:t}=e;"Enter"!==t&&" "!==t||(this.value=this.menuItems[this.itemFocus]?.value??null,this.submit())},this.onSlotChange=()=>{for(const e of this.menuItems)e.tabIndex=0,e.selected=e.value===this.value;this.autofocusit&&!uc()&&this.focusFirstApplicableItem()}}get $selected(){return this.$$$("mon-menu-item[selected]")[0]}get menuItems(){return this.$$$("mon-menu-item")}bindEvents(){this.on("mon-menu-item:select",this.onSelect),this.on("keyup",this.onKeyup),this.on("keydown",this.onKeyDown)}render(){return kl.qy` <slot @slotchange=${this.onSlotChange}></slot> `}};Vl.styles=zl,Fl([(0,Ll.MZ)({type:String,reflect:!0})],Vl.prototype,"name",void 0),Fl([(0,Ll.MZ)({type:Boolean,reflect:!0})],Vl.prototype,"floating",void 0),Fl([(0,Ll.MZ)({type:Boolean,reflect:!0})],Vl.prototype,"autofocusit",void 0),Fl([(0,Ll.MZ)({type:String})],Vl.prototype,"value",void 0),Vl=Fl([(0,Ll.EM)("mon-menu")],Vl);var $l=a(4399),Jl=function(e,t,a,r){var i,o=arguments.length,n=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(n=(o<3?i(n):o>3?i(t,a,n):i(t,a))||n);return o>3&&n&&Object.defineProperty(t,a,n),n};const Pl=kl.AH`
  * {
    box-sizing: border-box;
  }

  :host {
    cursor: pointer;
    display: flex;
    padding: var(
      --mon-menu-item-padding,
      var(--arc-space-1) var(--arc-space-1-5)
    );
    background-color: var(--arc-color-mono-white);
    align-items: center;
    font-size: var(--art-font-size-sm);
    color: var(--art-color-mono-900);
    border-radius: var(
      --mon-menu-item-border-radius,
      var(--arc-border-radius-md)
    );
    --mon-menu-item-gap: var(--arc-space-1);
    height: var(--mon-menu-item-height, auto);
    min-height: var(--mon-menu-item-min-height, auto);
    min-width: var(--mon-menu-item-min-width, auto);
  }

  :host(:hover) {
    background-color: var(--mon-menu-item-hover-background-color);
  }

  :host(:focus) {
    z-index: 1;
  }

  :host([selected]) {
    background-color: var(--mon-menu-item-selected-background-color);
    color: var(--arc-color-text-primary);
  }

  :host([disabled]) {
    color: var(--arc-color-text-disabled);
    --arc-icon-color: var(--arc-color-text-disabled);
  }

  slot[name='icon'],
  slot[name='shortcut'],
  slot[name='chevron'],
  .extras {
    display: flex;
    align-items: center;
  }

  slot[name='icon'],
  slot[name='shortcut'],
  slot[name='chevron'] {
    color: var(--arc-color-icon-primary);
  }

  /* Base icon slot styles */
  slot[name='icon'] {
    --_icon-size: var(--mon-menu-item-icon-size, 1.6rem);
    --arc-icon-display: block;
    --mon-icon-size: var(--_icon-size);
    flex: none;
    width: 0;
    height: calc(var(--_icon-size) * 1.25);
    justify-content: center;
    opacity: 0;
  }

  /* When icon slot has content */
  slot[name='icon']:not(:empty) {
    width: calc(var(--_icon-size) * 1.25);
    margin-right: var(--mon-menu-item-gap);
    opacity: 1;
  }

  /* For menus that always have icons (like context menu), force consistent spacing and visibility */
  :host([data-has-icons]) slot[name='icon'] {
    width: calc(var(--_icon-size) * 1.25);
    margin-right: var(--mon-menu-item-gap);
    opacity: 1;
  }

  .content {
    display: flex;
    flex: 1;
    min-width: 0;
    align-items: center;
    justify-content: space-between;
  }

  ::slotted(*:not([slot])) {
    flex: 1;
    min-width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
  }

  .extras {
    flex: none;
    justify-content: flex-end;
  }
`;let Rl=class extends Dl{constructor(){super(...arguments),this.selected=!1,this.tabIndex=-1,this.role="menuitem",this.disabled=!1,this.delegatesFocus=!1,this.focusableRef=(0,$l._)(),this.bindEvents=()=>{this.on("mouseenter",(()=>{this.dispatch("hover",{value:this.value,hovered:!0})})),this.on("click",this.onClick),this.on("focus",(()=>{if(this.delegatesFocus){const e=this.querySelector('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])');e instanceof HTMLElement&&e.focus()}}))}}onClick(){this.dispatch("mon-menu-item:select")}render(){return kl.qy`
      <slot name="icon"></slot>
      <div class="content">
        <slot></slot>
        <div class="extras">
          <slot name="shortcut"></slot>
          <slot name="chevron"></slot>
        </div>
      </div>
    `}};Rl.formAssociated=!0,Rl.styles=Pl,Rl.shadowRootOptions={...kl.WF.shadowRootOptions,delegatesFocus:!1},Jl([(0,Ll.MZ)({type:String,reflect:!0})],Rl.prototype,"value",void 0),Jl([(0,Ll.MZ)({type:Boolean,reflect:!0})],Rl.prototype,"selected",void 0),Jl([(0,Ll.MZ)({type:Number,reflect:!0})],Rl.prototype,"tabIndex",void 0),Jl([(0,Ll.MZ)({type:String,reflect:!0})],Rl.prototype,"role",void 0),Jl([(0,Ll.MZ)({type:Boolean,reflect:!0})],Rl.prototype,"disabled",void 0),Jl([(0,Ll.MZ)()],Rl.prototype,"delegatesFocus",void 0),Jl([(0,Ll.wk)()],Rl.prototype,"focusableRef",void 0),Rl=Jl([(0,Ll.EM)("mon-menu-item")],Rl);var Zl=a(5494),Ol=a(4993),_l=a.n(Ol),jl=function(e,t,a,r){var i,o=arguments.length,n=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(n=(o<3?i(n):o>3?i(t,a,n):i(t,a))||n);return o>3&&n&&Object.defineProperty(t,a,n),n};const Yl=kl.AH`
  :host {
    position: fixed;
    z-index: var(--mon-z-index-popover);
    border-radius: var(--mon-popover-border-radius, 0);
    padding: var(--mon-popover-padding, var(--arc-space-2));
    overflow: var(--mon-popover-overflow, auto);
    box-shadow: var(--mon-popover-shadow, var(--arc-shadow-md));
    box-sizing: border-box;
    width: var(--mon-popover-width, auto);
    clip-path: var(--mon-popover-clip-path, none);
  }

  :host([semantic]) {
    border: var(--mon-overlay-border, none);
    border-radius: var(--mon-popover-border-radius, 0);
    margin: var(--mon-popover-margin, 0);
    width: var(--mon-popover-width, fit-content);
  }
`,Hl={enabled:!1,padding:0,boundary:"clippingAncestors",prioritizeResize:!1,minResizeHeight:0,minResizeWidth:0,enableShiftCrossAxis:!1,flipPadding:0,shiftPadding:0,maxResizeHeight:1/0,maxResizeWidth:1/0,avoidFlipOverlap:!1,matchAnchorWidth:!1,altBoundaries:{}};let El=class extends Dl{constructor(){super(...arguments),this.autoFlip=!0,this.autoResizeOptions={},this.customMiddleware=[],this.autoShift=!0,this.semantic=!1,this.enableAutoUpdates=!0,this.semanticPriority=ep.Generic,this.offset=10,this.placement="bottom",this.positionInitialized=!1,this.sizeMiddlewareOptions={...Hl,...this.autoResizeOptions},this.middleware=[],this.syncMiddleware=()=>{this.sizeMiddlewareOptions={...Hl,...this.autoResizeOptions};const e=this.sizeMiddlewareOptions.avoidFlipOverlap,t=this.sizeMiddlewareOptions.minResizeWidth,a=this.sizeMiddlewareOptions.maxResizeWidth,r=this.sizeMiddlewareOptions.minResizeHeight,i=this.sizeMiddlewareOptions.maxResizeHeight,o=this.sizeMiddlewareOptions.matchAnchorWidth,n="number"==typeof this.sizeMiddlewareOptions.shiftPadding?this.sizeMiddlewareOptions.shiftPadding:this.sizeMiddlewareOptions.shiftPadding.top??0,l=this.sizeMiddlewareOptions.enabled&&(0,Zl.Ej)({altBoundary:this.sizeMiddlewareOptions.altBoundaries.size,apply({availableWidth:l,availableHeight:s,elements:c,rects:d,y:p,placement:h}){const m=i?`${i}px`:"",u=[s,i,window.innerHeight-n];if(e){const e=c.reference.getBoundingClientRect().top;e>p&&h.includes("top")&&u.push(window.innerHeight-(window.innerHeight-e)-n)}const g=`${Math.max(r,Math.min(...u))}px`;c.floating.style.maxHeight=s>=c.floating.scrollHeight?m:g,c.floating.style.maxWidth=`${Math.max(t,Math.min(a,l))}px`,o&&(c.floating.style.minWidth=`${d.reference.width}px`)},padding:this.sizeMiddlewareOptions.padding,boundary:this.sizeMiddlewareOptions.boundary}),s=this.autoShift&&(0,Zl.BN)({altBoundary:this.sizeMiddlewareOptions.altBoundaries.shift,crossAxis:this.sizeMiddlewareOptions.enableShiftCrossAxis,padding:this.sizeMiddlewareOptions.shiftPadding}),c=(0,Zl.cY)(this.offset);this.sizeMiddlewareOptions.prioritizeResize?this.middleware=[l,this.autoFlip&&(0,Zl.UU)({altBoundary:this.sizeMiddlewareOptions.altBoundaries.flip,fallbackStrategy:"initialPlacement",flipAlignment:!1,padding:this.sizeMiddlewareOptions.flipPadding}),s,...this.customMiddleware,c].filter((e=>!!e)):this.middleware=[this.autoFlip&&(0,Zl.UU)({altBoundary:this.sizeMiddlewareOptions.altBoundaries.flip,padding:this.sizeMiddlewareOptions.flipPadding}),s,l,...this.customMiddleware,c].filter((e=>!!e))},this.updatePosition=()=>{this.anchor&&(0,Zl.rD)(this.anchor,this,{placement:this.placement,strategy:"fixed",middleware:this.middleware}).then((({x:e,y:t})=>{this.style.left=`${e}px`,this.style.top=`${t}px`,this.reconcilePositionChanges()}))},this.reconcilePositionChanges=_l()((()=>{window.requestAnimationFrame((()=>{this.positionInitialized||(this.dispatchEvent(new CustomEvent("initialized")),this.positionInitialized=!0)}))}),50,{leading:!1,trailing:!0})}updated(e){if(super.updated(e),Array.from(e.keys()).some((e=>["autoFlip","autoShift","autoResizeOptions","customMiddleware","offset"].includes(e)))&&this.syncMiddleware(),e.has("semantic")&&(this.semantic?(this.hasAttribute("popover")||(this.setAttribute("popover","manual"),ap(this,this.semanticPriority)),this.collectOff((()=>{this.hasAttribute("popover")&&(rp(this),this.removeAttribute("popover"))}))):this.hasAttribute("popover")&&(rp(this),this.removeAttribute("popover"))),e.has("anchor")&&this.anchor)if(this.enableAutoUpdates){this.autoUpdateDisposer&&this.autoUpdateDisposer();const e=(0,Zl.ll)(this.anchor,this,this.updatePosition,{animationFrame:!0});this.collectOff(e),this.autoUpdateDisposer=e}else this.updatePosition()}render(){return kl.qy`<slot></slot>`}};El.styles=Yl,jl([(0,Ll.MZ)()],El.prototype,"anchor",void 0),jl([(0,Ll.MZ)({type:Boolean})],El.prototype,"autoFlip",void 0),jl([(0,Ll.MZ)({type:Object})],El.prototype,"autoResizeOptions",void 0),jl([(0,Ll.MZ)({type:Array})],El.prototype,"customMiddleware",void 0),jl([(0,Ll.MZ)({type:Boolean})],El.prototype,"autoShift",void 0),jl([(0,Ll.MZ)({type:Boolean,reflect:!0})],El.prototype,"semantic",void 0),jl([(0,Ll.MZ)({type:Boolean})],El.prototype,"enableAutoUpdates",void 0),jl([(0,Ll.MZ)({type:Number,reflect:!0})],El.prototype,"semanticPriority",void 0),jl([(0,Ll.MZ)()],El.prototype,"offset",void 0),jl([(0,Ll.MZ)({type:String})],El.prototype,"placement",void 0),jl([(0,Ll.wk)()],El.prototype,"positionInitialized",void 0),El=jl([(0,Ll.EM)("mon-popover")],El);var Gl=function(e,t,a,r){var i,o=arguments.length,n=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(n=(o<3?i(n):o>3?i(t,a,n):i(t,a))||n);return o>3&&n&&Object.defineProperty(t,a,n),n};const Xl=kl.AH`
  * {
    box-sizing: border-box;
  }

  :host {
    --icon-color: var(--arc-color-neutral-600);
    display: block;
    position: relative;
    max-width: 100%;
  }

  .hidden {
    display: none;
  }

  .trigger {
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;
    gap: var(--mon-select-trigger-gap, var(--arc-space-0-75));
    border: none;
    border-radius: var(--arc-border-radius-md);
    background: var(--mon-select-trigger-background, var(--mon-color-input));
    padding: 0 var(--arc-space-1-5);
    text-align: left;
    font-family: inherit;
    font-size: var(--arc-font-size-14);
    outline: none;
    border-radius: var(
      --mon-select-trigger-border-radius,
      var(--arc-border-radius-md)
    );
  }

  .trigger[data-size='md'] {
    height: 3.2rem;
  }

  .trigger[data-size='sm'] {
    height: 2.4rem;
  }

  .trigger:hover {
    box-shadow: var(
      --mon-select-trigger-hover-shadow,
      var(--mon-input-hover-box-shadow)
    );
  }

  .trigger[data-open='true'] {
    background: var(--mon-select-trigger-open-background);
  }

  .trigger:focus-visible {
    box-shadow: var(--mon-input-focus-box-shadow);
  }

  .trigger-content {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .trigger-icon {
    width: var(--mon-select-trigger-icon-size, 14px);
    height: var(--mon-select-trigger-icon-size, 14px);
    fill: var(--mon-select-trigger-icon-color, var(--arc-color-neutral-700));
    display: flex;
  }

  .mon-select-popover {
    --mon-popover-padding: 0;
    --mon-popover-border-radius: var(--arc-border-radius-lg);
  }

  .mon-select-menu {
    overflow-y: auto;
    --mon-menu-border-radius: 0;
  }
`;let ql=class extends Dl{constructor(){super(...arguments),this.disabled=!1,this.value=null,this.popoverPlacement="bottom-end",this.placeholder="Choose an item...",this.constrainHeight=!0,this.maxHeight=400,this.optionsOffset=0,this.triggerSize="md",this.open=!1,this.labelText="",this.anchorRef=(0,$l._)(),this.scrollBarWidth=kc,this.cancel=()=>{this.open&&(this.dispatch("mon-select:cancel"),this.dispatch("mon-select:close")),this.open=!1},this.onMenuEscape=()=>{this.cancel()},this.onSubmit=e=>{this.open=!1,e.stopPropagation(),this.dispatch("mon-select:close"),this.dispatch("mon-select:change",{name:this.name,value:e.detail.value})},this.onClickOutside=()=>{this.cancel()},this.onClickTrigger=()=>{this.open?this.cancel():(this.open=!0,this.dispatch("mon-select:open"))},this.onKeyDown=e=>{"ArrowLeft"===e.key&&e.stopPropagation()},this.onButtonKeyDown=e=>{"Enter"===e.key?e.preventDefault():"ArrowDown"===e.key&&(e.stopPropagation(),this.open=!0,this.dispatch("mon-select:open"))},this.onSlotChange=()=>{this.syncLabelText()},this.syncLabelText=()=>{this.labelText=this.$$$("mon-menu-item")?.filter((e=>e.value===this.value))[0]?.innerText??this.placeholder},this.handleRefChange=e=>{this.anchorRef=e}}get $selected(){return this.$$$("mon-menu-item[selected]")[0]}bindEvents(){this.on("mon-menu:escape",this.onMenuEscape),this.on("keydown",this.onKeyDown),this.collectOff(Tl("mousedown",window,(e=>{const t=e.composedPath();e.target instanceof Node&&!t.includes(this)&&this.onClickOutside()}),{capture:!0,passive:!0}))}updated(e){e.has("value")&&this.syncLabelText(),this.open&&!1===e.get("open")&&window.requestAnimationFrame((()=>{const e=this.$$$("mon-menu-item")?.find((e=>e.value===this.value));e?.scrollIntoView({behavior:"instant",block:"nearest"})}))}renderTrigger(){return kl.qy`
      <button
        ?disabled=${this.disabled}
        ${(0,$l.K)(this.handleRefChange)}
        @click=${this.onClickTrigger}
        @keydown=${this.onButtonKeyDown}
        type="button"
        class="trigger"
        data-size=${this.triggerSize}
        data-open=${this.open}
      >
        <span class="trigger-content">
          <slot name="selected">${this.labelText}</slot>
        </span>
        <span class="trigger-icon">
          <!-- TODO: Stop using '<i />'-based icons; use svgs instead. -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
            />
          </svg>
        </span>
      </button>
    `}renderMenu(){return this.open?kl.qy`
          <mon-popover
            .anchor=${this.anchorRef}
            class="mon-select-popover"
            .offset=${this.optionsOffset}
            .autoResizeOptions=${{enabled:!0,padding:{top:0,right:0,bottom:36,left:0},prioritizeResize:!0,minResizeHeight:72,enableShiftCrossAxis:!0,shiftPadding:{top:0,right:0,bottom:0,left:this.scrollBarWidth},maxResizeHeight:this.constrainHeight?this.maxHeight:void 0,avoidFlipOverlap:!0,matchAnchorWidth:!0}}
            placement=${this.popoverPlacement}
            semantic=${!0}
            .autoShift=${!0}
          >
            <mon-menu
              class="mon-select-menu"
              name=${this.name}
              autofocusit
              @mon-menu:submit=${this.onSubmit}
              value=${this.value}
            >
              <slot></slot>
            </mon-menu>
          </mon-popover>
        `:kl.qy`<slot
          class="hidden"
          @slotchange=${this.onSlotChange}
        ></slot>`}render(){return kl.qy`${this.renderTrigger()}${this.renderMenu()}`}};ql.styles=Xl,Gl([(0,Ll.MZ)({type:Boolean})],ql.prototype,"disabled",void 0),Gl([(0,Ll.MZ)({type:String,reflect:!0})],ql.prototype,"name",void 0),Gl([(0,Ll.MZ)({type:String})],ql.prototype,"value",void 0),Gl([(0,Ll.MZ)({type:String})],ql.prototype,"popoverPlacement",void 0),Gl([(0,Ll.MZ)()],ql.prototype,"placeholder",void 0),Gl([(0,Ll.MZ)()],ql.prototype,"constrainHeight",void 0),Gl([(0,Ll.MZ)()],ql.prototype,"maxHeight",void 0),Gl([(0,Ll.MZ)()],ql.prototype,"optionsOffset",void 0),Gl([(0,Ll.MZ)()],ql.prototype,"triggerSize",void 0),Gl([(0,Ll.wk)()],ql.prototype,"open",void 0),Gl([(0,Ll.wk)()],ql.prototype,"labelText",void 0),Gl([(0,Ll.wk)()],ql.prototype,"anchorRef",void 0),Gl([(0,Ll.wk)()],ql.prototype,"scrollBarWidth",void 0),ql=Gl([(0,Ll.EM)("mon-select")],ql);var Nl=function(e,t,a,r){var i,o=arguments.length,n=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(n=(o<3?i(n):o>3?i(t,a,n):i(t,a))||n);return o>3&&n&&Object.defineProperty(t,a,n),n};const Ul=kl.AH`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  :host {
    --border-color: rgb(0 0 0 / 30%);
    --border-color-active: black;
    --border-color-active-hover: rgb(0 0 0 / 60%);
    --border-color-hover: black;
    --border-radius: calc(0.5 * var(--toggle-height));
    --border-width: 1px;
    --control-width: 3.8rem;
    --focus-color: #4d90fe;
    --handle-bg-color: white;
    --handle-box-shadow: 0 2px 6px 0 rgb(0 0 0 / 16%);
    --inset-active-bg-color: black;
    --inset-active-bg-hover-color: rgb(0 0 0 / 60%);
    --inset-bg-color: rgb(0 0 0 / 5%);
    --inset-bg-hover-color: rgb(0 0 0 / 10%);
    --toggle-height: 2.2rem;
    --transition: 0.1s ease-out;
  }

  .toggle .control {
    background-color: var(--inset-bg-color);
    border: var(--border-width) solid var(--border-color);
    border-radius: var(--border-radius);
    cursor: pointer;
    height: var(--toggle-height);
    position: relative;
    transition: var(--transition);
    width: var(--control-width);
  }

  .toggle .handle {
    background-color: var(--handle-bg-color);
    border: var(--border-width) solid var(--border-color);
    border-radius: var(--border-radius);
    box-shadow: var(--handle-box-shadow);
    height: var(--toggle-height);
    left: calc(-1 * var(--border-width));
    position: absolute;
    top: calc(-1 * var(--border-width));
    transition: var(--transition);
    width: var(--toggle-height);
  }

  .toggle.active .control {
    background-color: var(--inset-active-bg-color);
  }

  .toggle.active .handle {
    border-color: var(--border-color-active);
    transform: translateX(calc(var(--control-width) - var(--toggle-height)));
  }

  .toggle.active:hover .control {
    background-color: var(--inset-active-bg-hover-color);
    border-color: var(--border-color-active-hover);
  }

  .toggle.active:hover .handle {
    border-color: var(--border-color-active-hover);
  }

  .toggle:hover .control {
    background-color: var(--inset-bg-hover-color);
    border-color: var(--border-color-hover);
  }

  .toggle:hover .handle {
    border-color: var(--border-color-hover);
  }

  .toggle.in-focus .control {
    outline: 2px solid var(--focus-color);
    outline-offset: 1px;
  }
`;let Wl=class extends Dl{constructor(){super(...arguments),this.focusedByClick=!1,this.animationDuration=250}toggleSwitch(e){!0===e?this.toggle?.classList.add("active"):!1===e?this.toggle?.classList.remove("active"):this.toggle?.classList.toggle("active")}handleClick(){this.focusedByClick=!0,this.checkboxes[0].checked=!this.checkboxes[0].checked,this.checkboxes[0].dispatchEvent(new Event("change")),setTimeout((()=>{this.focusedByClick=!1}))}handleFocus(){setTimeout((()=>{!1===this.focusedByClick&&this.toggleVisibleFocus(!0)}))}handleBlur(){this.toggleVisibleFocus(!1)}toggleVisibleFocus(e){!0===e?this.toggle.classList.add("in-focus"):this.toggle.classList.remove("in-focus")}handleCheckboxChange(e){const t=e.target;this.toggleSwitch(t.checked)}handleKeydown(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this.handleClick())}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.checkboxes.forEach((e=>{this.toggleSwitch(e.checked),e.style.left="0",e.style.opacity="0.01",e.style.outline="none !important",e.style.position="absolute",e.style.top="0",e.addEventListener("focus",this.handleFocus.bind(this)),e.addEventListener("blur",this.handleBlur.bind(this)),e.addEventListener("change",this.handleCheckboxChange.bind(this)),e.addEventListener("keydown",this.handleKeydown.bind(this))}))}render(){return kl.qy`
      <div class="toggle">
        <div
          @click=${this.handleClick}
          class="control"
        >
          <div class="handle"></div>
        </div>
        <slot></slot>
      </div>
    `}};Wl.styles=Ul,Nl([(0,Ll.P)(".toggle")],Wl.prototype,"toggle",void 0),Nl([(0,Ll.P)(".control")],Wl.prototype,"control",void 0),Nl([(0,Ll.KN)({selector:'input[type="checkbox"]'})],Wl.prototype,"checkboxes",void 0),Nl([(0,Ll.wk)()],Wl.prototype,"focusedByClick",void 0),Nl([(0,Ll.MZ)({type:Number})],Wl.prototype,"animationDuration",void 0),Wl=Nl([(0,Ll.EM)("mon-toggle")],Wl);const Ql=(e,t)=>{const a=t.cssText,r=new WeakSet;return t=>{const i=t.getRootNode();if(!r.has(i)){r.add(i);const t=(i instanceof ShadowRoot?i.ownerDocument:i instanceof Document?i:document).createElement("style");t.setAttribute("data-svelte-lit-styles",e),t.textContent=a,i.appendChild(t)}}},Kl=kl.AH`
  &[data-flex='1'] {
    --arc-internal-btn-flex: 1;
  }

  &[data-flex='2'] {
    --arc-internal-btn-flex: 2;
  }

  &[data-flex='3'] {
    --arc-internal-btn-flex: 3;
  }

  &[data-flex='4'] {
    --arc-internal-btn-flex: 4;
  }

  &[data-flex='5'] {
    --arc-internal-btn-flex: 5;
  }

  &[data-layout='fill'] {
    --arc-internal-btn-display: flex;
    --arc-internal-btn-width: 100%;
    --arc-internal-btn-content-width: 0;
  }

  &[data-layout='icon'] {
    --arc-internal-btn-flex: none;
    --arc-internal-btn-padding-inline: 0;
    --arc-internal-btn-min-width: min-content;
    --arc-internal-btn-max-width: none;
    --arc-internal-btn-aspect-ratio: 1 / 1;

    &[data-shape='narrow'] {
      --arc-internal-btn-padding-inline: 2;
      --arc-internal-btn-aspect-ratio: auto;
    }
  }
`,es=kl.AH`
  &[data-size='xxl'] {
    --arc-modifier: 16; /* unitless, desired font size at 100% */
    --arc-internal-btn-icon-size: 20;
    --arc-internal-btn-height: 56;
    --arc-internal-btn-gap: 10;
    --arc-internal-btn-padding-inline: 32;
    --arc-internal-btn-spinner-width: 32;
  }

  &[data-size='xl'] {
    --arc-modifier: 14; /* unitless, desired font size at 100% */
    --arc-internal-btn-icon-size: 16;
    --arc-internal-btn-height: 48;
    --arc-internal-btn-gap: 8;
    --arc-internal-btn-padding-inline: 32;
    --arc-internal-btn-spinner-width: 16;
  }

  &[data-size='lg'] {
    /** @default */
    --arc-modifier: 14; /* unitless, desired font size at 100% */
    --arc-internal-btn-icon-size: 16;
    --arc-internal-btn-height: 40;
    --arc-internal-btn-gap: 8;
    --arc-internal-btn-padding-inline: 20;
    --arc-internal-btn-spinner-width: 16;
  }

  &[data-size='md'] {
    --arc-modifier: 14; /* unitless, desired font size at 100% */
    --arc-internal-btn-icon-size: 14;
    --arc-internal-btn-height: 32;
    --arc-internal-btn-gap: 8;
    --arc-internal-btn-padding-inline: 16;
    --arc-internal-btn-spinner-width: 16;
  }

  &[data-size='sm'] {
    --arc-modifier: 12; /* unitless, desired font size at 100% */
    --arc-internal-btn-icon-size: 12;
    --arc-internal-btn-height: 24;
    --arc-internal-btn-gap: 4;
    --arc-internal-btn-padding-inline: 12;
    --arc-internal-btn-spinner-width: 14;
  }
`,ts=kl.AH`
  &[data-variant='primary'] {
    /** @default */
    --arc-internal-btn-text: var(--arc-color-mono-white);
    --arc-internal-btn-fill: var(--arc-color-mono-black);
    --arc-internal-btn-edge: transparent;

    --arc-internal-btn-hover-fill: var(--arc-color-neutral-800);

    --arc-internal-btn-active-text: var(--arc-color-neutral-200);
    --arc-internal-btn-active-fill: var(--arc-color-neutral-600);

    --arc-internal-btn-disabled-text: var(--arc-color-alpha-black-30);
    --arc-internal-btn-disabled-fill: var(--arc-color-alpha-black-05);

    --arc-internal-btn-processing-fill: var(--arc-color-neutral-800);
  }

  &[data-variant='secondary'] {
    /** @default - when icon-only */
    --arc-internal-btn-text: var(--arc-color-mono-black);
    --arc-internal-btn-fill: var(--arc-color-mono-white);
    --arc-internal-btn-edge: var(--arc-color-border-full);

    --arc-internal-btn-hover-fill: var(--arc-color-neutral-100);

    --arc-internal-btn-active-text: var(--arc-color-alpha-black-60);
    --arc-internal-btn-active-fill: var(--arc-color-neutral-200);
    --arc-internal-btn-active-edge: var(--arc-color-border-stark);

    --arc-internal-btn-disabled-text: var(--arc-color-alpha-black-30);
    --arc-internal-btn-disabled-edge: var(--arc-color-border-standard);
    --arc-internal-btn-disabled-fill: var(--arc-color-alpha-white-60);

    --arc-internal-btn-processing-text: var(--arc-color-neutral-200);
    --arc-internal-btn-processing-edge: var(--arc-color-border-stark);
    --arc-internal-btn-processing-fill: var(--arc-color-alpha-white-30);

    &[data-layout='icon'] {
      --arc-internal-btn-edge: var(--arc-color-border-standard);
      --arc-internal-btn-hover-edge: var(--arc-color-border-stark);
      --arc-internal-btn-focus-edge: var(--arc-color-border-standard);
    }
  }

  &[data-variant='tertiary'] {
    --arc-internal-btn-text: var(--arc-color-mono-black);
    --arc-internal-btn-fill: transparent;
    --arc-internal-btn-edge: transparent;

    --arc-internal-btn-hover-fill: var(--arc-color-alpha-black-05);

    --arc-internal-btn-focus-fill: var(--arc-color-alpha-white-05);

    --arc-internal-btn-active-text: var(--arc-color-alpha-black-60);
    --arc-internal-btn-active-fill: var(--arc-color-alpha-black-10);

    --arc-internal-btn-disabled-text: var(--arc-color-alpha-black-30);

    --arc-internal-btn-processing-text: var(--arc-color-neutral-200);
    --arc-internal-btn-processing-fill: var(--arc-color-alpha-black-03);
  }

  /** TODO: We'll need to true this up once the design system component implements their text variant */
  &[data-variant='text'] {
    --arc-internal-btn-text: var(--arc-color-mono-black);
    --arc-internal-btn-fill: transparent;
    --arc-internal-btn-edge: transparent;

    --arc-internal-btn-hover-text: var(--arc-color-neutral-700);

    --arc-internal-btn-focus-fill: var(--arc-color-alpha-white-05);

    --arc-internal-btn-active-text: var(--arc-color-neutral-500);

    --arc-internal-btn-disabled-text: var(--arc-color-neutral-300);

    --arc-internal-btn-processing-text: var(--art-color-neutral-200);
  }
`,as=kl.AH`
  &[data-variant='primary-inverse'] {
    --arc-internal-btn-text: var(--arc-color-mono-black);
    --arc-internal-btn-fill: var(--arc-color-mono-white);
    --arc-internal-btn-edge: transparent;

    --arc-internal-btn-hover-fill: var(--arc-color-alpha-white-80);

    --arc-internal-btn-active-text: var(--arc-color-alpha-black-80);
    --arc-internal-btn-active-fill: var(--arc-color-alpha-white-60);

    --arc-internal-btn-disabled-text: var(--arc-color-alpha-white-40);
    --arc-internal-btn-disabled-fill: var(--arc-color-alpha-white-20);

    --arc-internal-btn-processing-text: var(--arc-color-neutral-200);
    --arc-internal-btn-processing-fill: var(--arc-color-alpha-white-30);

    &[data-layout='icon'] {
      --arc-internal-btn-hover-fill: var(--arc-color-alpha-white-70);
    }
  }

  &[data-variant='secondary-inverse'] {
    --arc-internal-btn-text: var(--arc-color-alpha-white-95);
    --arc-internal-btn-fill: transparent;
    --arc-internal-btn-edge: var(--arc-color-alpha-white-60);

    --arc-internal-btn-hover-fill: var(--arc-color-alpha-white-20);
    --arc-internal-btn-hover-edge: var(--arc-color-alpha-white-80);

    --arc-internal-btn-focus-fill: var(--arc-color-alpha-black-05);
    --arc-internal-btn-focus-edge: var(--arc-color-alpha-white-60);

    --arc-internal-btn-active-text: var(--arc-color-alpha-white-95);
    --arc-internal-btn-active-fill: var(--arc-color-alpha-white-40);
    --arc-internal-btn-active-edge: var(--arc-color-alpha-white-50);

    --arc-internal-btn-disabled-text: var(--arc-color-alpha-white-40);
    --arc-internal-btn-disabled-edge: var(--arc-color-alpha-white-20);

    --arc-internal-btn-processing-text: var(--arc-color-neutral-200);
    --arc-internal-btn-processing-fill: transparent;
    --arc-internal-btn-processing-edge: var(--arc-color-alpha-white-60);

    &[data-layout='icon'] {
      --arc-internal-btn-text: var(--arc-color-alpha-white-80);

      --arc-internal-btn-hover-text: var(--arc-color-alpha-white-100);
      --arc-internal-btn-hover-fill: var(--arc-color-alpha-white-30);

      --arc-internal-btn-focus-text: var(--arc-color-alpha-white-100);
      --arc-internal-btn-focus-fill: var(--arc-color-alpha-black-05);
      --arc-internal-btn-focus-edge: var(--arc-color-alpha-white-60);

      --arc-internal-btn-active-text: var(--arc-color-alpha-white-80);
      --arc-internal-btn-active-fill: var(--arc-color-alpha-white-30);
      --arc-internal-btn-active-edge: var(--arc-color-alpha-white-40);
    }
  }

  &[data-variant='tertiary-inverse'] {
    --arc-internal-btn-text: var(--arc-color-alpha-white-95);
    --arc-internal-btn-fill: transparent;
    --arc-internal-btn-edge: transparent;

    --arc-internal-btn-hover-fill: var(--arc-color-alpha-white-20);

    --arc-internal-btn-active-text: var(--arc-color-alpha-white-80);
    --arc-internal-btn-active-fill: var(--arc-color-alpha-white-40);

    --arc-internal-btn-disabled-text: var(--arc-color-alpha-white-40);

    --arc-internal-btn-processing-text: var(--arc-color-neutral-200);
    --arc-internal-btn-processing-fill: var(--arc-color-alpha-white-20);

    &[data-layout='icon'] {
      --arc-internal-btn-text: var(--arc-color-alpha-white-80);

      --arc-internal-btn-hover-text: var(--arc-color-alpha-white-100);
      --arc-internal-btn-hover-fill: var(--arc-color-alpha-white-30);

      --arc-internal-btn-focus-text: var(--arc-color-alpha-white-100);
      --arc-internal-btn-focus-fill: var(--arc-color-alpha-black-05);

      --arc-internal-btn-active-text: var(--arc-color-alpha-white-80);
      --arc-internal-btn-active-fill: var(--arc-color-alpha-white-30);
    }
  }
`,rs=kl.AH`
  &[data-variant='ai-primary'] {
    --arc-internal-btn-text: var(--arc-color-mono-white);
    --arc-internal-btn-fill:
      var(--arc-gradient-ai-500) padding-box,
      var(--arc-gradient-ai-200) border-box;

    --arc-internal-btn-hover-fill:
      var(--arc-gradient-ai-400) padding-box,
      var(--arc-gradient-ai-200) border-box;

    --arc-internal-btn-active-text: var(--arc-color-alpha-white-80);
    --arc-internal-btn-active-fill:
      var(--arc-gradient-ai-600) padding-box,
      var(--arc-gradient-ai-200) border-box;

    --arc-internal-btn-disabled-fill: var(--arc-color-alpha-black-05);

    --arc-internal-btn-processing-text: var(--arc-color-alpha-white-70);
    --arc-internal-btn-processing-fill:
      var(--arc-gradient-ai-400) padding-box,
      var(--arc-gradient-ai-100) border-box;
  }

  &[data-variant='ai-secondary'] {
    --arc-internal-btn-text: var(--arc-color-mono-black);
    --arc-internal-btn-fill:
      linear-gradient(var(--arc-color-mono-white) 0 0) padding-box,
      var(--arc-gradient-ai-200) border-box;

    --arc-internal-btn-hover-fill:
      var(--arc-gradient-ai-050) padding-box,
      var(--arc-gradient-ai-300) border-box;

    --arc-internal-btn-active-text: var(--arc-color-alpha-black-60);
    --arc-internal-btn-active-fill:
      var(--arc-gradient-ai-050) padding-box,
      var(--arc-gradient-ai-100) border-box;

    --arc-internal-btn-disabled-fill: var(--arc-color-alpha-white-30);

    --arc-internal-btn-processing-text: var(--arc-color-neutral-200);
    --arc-internal-btn-processing-fill:
      linear-gradient(var(--arc-color-mono-white) 0 0) padding-box,
      var(--arc-gradient-ai-100) border-box;
  }

  &[data-variant^='ai-'] {
    --arc-internal-btn-border-width: var(--arc-computed-ai-btn-border-width);
    --arc-internal-btn-edge: transparent;
    --arc-internal-btn-disabled-text: var(--arc-color-alpha-black-30);
    --arc-internal-btn-disabled-edge: var(--arc-color-border-standard);
  }
`,is=kl.AH`
  &[data-variant='critical-primary'] {
    --arc-internal-btn-text: var(--arc-color-mono-white);
    --arc-internal-btn-fill: var(--arc-color-critical-dark);
    --arc-internal-btn-edge: transparent;

    --arc-internal-btn-hover-fill: var(--arc-color-critical-heavy);

    --arc-internal-btn-active-text: var(--arc-color-critical-medium);
    --arc-internal-btn-active-fill: var(--arc-color-critical-heavy);

    --arc-internal-btn-disabled-text: var(--arc-color-alpha-black-30);
    --arc-internal-btn-disabled-fill: var(--arc-color-alpha-black-05);

    --arc-internal-btn-processing-fill: var(--arc-color-critical-heavy);
  }

  &[data-variant='critical-secondary'] {
    --arc-internal-btn-text: var(--arc-color-critical-dark);
    --arc-internal-btn-fill: transparent;
    --arc-internal-btn-edge: var(--arc-color-critical-dark);

    --arc-internal-btn-hover-fill: var(--arc-color-critical-light);
    --arc-internal-btn-focus-fill: var(--arc-color-alpha-white-100);

    --arc-internal-btn-active-text: var(--arc-color-red-300);
    --arc-internal-btn-active-fill: var(--arc-color-red-100);
    --arc-internal-btn-active-edge: var(--arc-color-critical-medium);

    --arc-internal-btn-disabled-text: var(--arc-color-alpha-black-30);
    --arc-internal-btn-disabled-fill: var(--arc-color-alpha-white-30);
    --arc-internal-btn-disabled-edge: var(--arc-color-border-standard);

    --arc-internal-btn-processing-text: var(--arc-color-neutral-200);
    --arc-internal-btn-processing-edge: var(--arc-color-critical-medium);
  }
`,os=kl.AH`
  ${ts}
  ${as}
  ${is}
  ${rs}
`,ns=Ql("MonArcButton",kl.AH`
  [arc-button] {
    ${es}
    ${Kl}
    ${os}

    & {
      --arc-internal-btn-text-color: var(--arc-internal-btn-text);
      --arc-internal-btn-fill-color: var(--arc-internal-btn-fill);
      --arc-internal-btn-edge-color: var(--arc-internal-btn-edge);

      --arc-internal-btn-border-radius: var(--arc-border-radius-pill);
      --arc-internal-btn-border-radius-md: 4;
      --arc-internal-btn-border-width: 1;
      --arc-internal-btn-outline-size: 2;

      --arc-modifier-px: var(--arc-modifier) * 1px;
      --arc-modifier-em: var(--arc-modifier) * 1em;

      /* COMPUTED VARIABLES ------------------------------------------• */

      --arc-computed-btn-font-size: calc(var(--arc-modifier-px));
      --arc-computed-btn-icon-size: calc(
        var(--arc-internal-btn-icon-size) / var(--arc-modifier-em)
      );
      --arc-computed-btn-border-width: calc(
        var(--arc-internal-btn-border-width) / var(--arc-modifier-em)
      );
      --arc-computed-btn-outline-size: max(
        var(--arc-border-width-md),
        calc(var(--arc-internal-btn-outline-size) / var(--arc-modifier-em))
      );
      --arc-computed-btn-border-radius-md: calc(
        var(--arc-internal-btn-border-radius-md) / var(--arc-modifier-em)
      );
      --arc-computed-btn-height: calc(
        var(--arc-internal-btn-height) / var(--arc-modifier-em)
      );
      --arc-computed-btn-padding-inline: calc(
        var(--arc-internal-btn-padding-inline) / var(--arc-modifier-em)
      );
      --arc-computed-btn-gap: calc(
        var(--arc-internal-btn-gap) / var(--arc-modifier-em)
      );
      --arc-computed-btn-spinner-width: calc(
        var(--arc-internal-btn-spinner-width) / var(--arc-modifier-em)
      );

      /* Inter-Component Communication -------------------------------• */
      --arc-icon-size: var(
        --arc-computed-btn-icon-size
      ); /** @computed • ArcIcon size */
    }

    &:is(
        [data-layout='icon']:not([data-shape]),
        [data-shape='square'],
        [data-shape='narrow']
      ) {
      --arc-internal-btn-border-radius: var(
        --arc-computed-btn-border-radius-md
      ); /** @computed • border-radius */
    }

    &[data-variant^='ai-'] {
      --arc-computed-btn-border-width: calc(2 / var(--arc-modifier-em));
    }

    /* STATES --------------------------------------------------------- */

    &:is([data-is-processing], :has(input)) {
      --arc-internal-btn-position: relative;
    }

    &:disabled {
      --arc-internal-btn-cursor: not-allowed;
      --arc-internal-btn-text-color: var(
        --arc-internal-btn-disabled-text,
        var(--arc-internal-btn-text)
      );
      --arc-internal-btn-fill-color: var(
        --arc-internal-btn-disabled-fill,
        var(--arc-internal-btn-fill)
      );
      --arc-internal-btn-edge-color: var(
        --arc-internal-btn-disabled-edge,
        var(--arc-internal-btn-edge)
      );
    }

    &:not(:disabled, [data-is-processing]) {
      &:hover {
        --arc-internal-btn-text-color: var(
          --arc-internal-btn-hover-text,
          var(--arc-internal-btn-text)
        );
        --arc-internal-btn-fill-color: var(
          --arc-internal-btn-hover-fill,
          var(--arc-internal-btn-fill)
        );
        --arc-internal-btn-edge-color: var(
          --arc-internal-btn-hover-edge,
          var(--arc-internal-btn-edge)
        );
      }

      &:is(:active, [data-is-active]) {
        --arc-internal-btn-text-color: var(
          --arc-internal-btn-active-text,
          var(--arc-internal-btn-text)
        );
        --arc-internal-btn-fill-color: var(
          --arc-internal-btn-active-fill,
          var(--arc-internal-btn-fill)
        );
        --arc-internal-btn-edge-color: var(
          --arc-internal-btn-active-edge,
          var(--arc-internal-btn-edge)
        );
      }
    }

    &[data-is-processing] {
      --arc-internal-btn-cursor: default;
      --arc-internal-btn-content-visibility: hidden;
      --arc-internal-btn-content-opacity: 0;

      --arc-internal-btn-text-color: var(
        --arc-internal-btn-processing-text,
        var(--arc-internal-btn-text)
      );
      --arc-internal-btn-fill-color: var(
        --arc-internal-btn-processing-fill,
        var(--arc-internal-btn-fill)
      );
      --arc-internal-btn-edge-color: var(
        --arc-internal-btn-processing-edge,
        var(--arc-internal-btn-edge)
      );

      /* spinner svg style controls */
      --arc-internal-btn-spinner-circle-opacity: var(--arc-alpha-30);
      --arc-internal-btn-spinner-circle-stroke: var(
        --arc-internal-btn-text-color
      );
      --arc-internal-btn-spinner-progress-stroke: var(
        --arc-internal-btn-text-color
      );

      &:is(
      [data-variant*=secondary], /* contains 'secondary' */
      [data-variant*=tertiary], /* contains 'tertiary' */
      [data-variant^=ai-], /* starts with 'ai-' */
      [data-variant$=-inverse] /* ends with '-inverse' */
    ) {
        --arc-internal-btn-spinner-circle-opacity: var(--arc-alpha-100);
        --arc-internal-btn-spinner-progress-stroke: var(--arc-color-brand-root);
      }
    }

    &:where(:focus, :focus-within):focus-visible {
      --arc-internal-btn-text-color: var(
        --arc-internal-btn-focus-text,
        var(--arc-internal-btn-text)
      );
      --arc-internal-btn-fill-color: var(
        --arc-internal-btn-focus-fill,
        var(--arc-internal-btn-fill)
      );
      --arc-internal-btn-edge-color: var(
        --arc-internal-btn-focus-edge,
        var(--arc-internal-btn-edge)
      );
      --arc-internal-btn-outline-color: var(--arc-color-border-focus);

      &[data-variant$='-inverse'] {
        --arc-internal-btn-outline-color: var(--arc-color-border-focus-inverse);
      }

      outline: var(--arc-computed-btn-outline-size) solid
        var(--arc-internal-btn-outline-color); /** @computed • outline-width */
      outline-offset: var(
        --arc-button-outline-offset,
        var(--arc-computed-btn-outline-size)
      ); /** @computed • outline-offset */

      * {
        outline: none;
      }
    }
  }

  /* CORE STYLES ------------------------------------------------------ */

  [arc-button]:not([hidden]) {
    flex: var(--arc-internal-btn-flex, unset);
    display: var(--arc-internal-btn-display, inline-flex);
    align-items: center;
    justify-content: center;
  }

  [arc-button] {
    appearance: none;
    cursor: var(--arc-internal-btn-cursor, pointer);
    position: var(--arc-internal-btn-position, unset);
    transition: 150ms ease-out;

    /* footprint */

    font: inherit;
    font-size: var(
      --arc-button-font-size,
      var(--arc-computed-btn-font-size, inherit)
    ); /** @computed • font-size */
    font-weight: var(--arc-button-font-weight, var(--arc-font-weight-600));
    max-width: var(--arc-internal-btn-max-width, 100%);
    min-width: var(--arc-internal-btn-min-width, unset);
    width: var(--arc-internal-btn-width, unset);
    height: var(--arc-computed-btn-height, unset); /** @computed • height */
    aspect-ratio: var(--arc-internal-btn-aspect-ratio, unset);

    padding-block: 0;
    padding-inline: var(
      --arc-computed-btn-padding-inline
    ); /** @computed • padding-inline */

    /* Variant Theme Applied -----------------------------------------• */

    color: var(--arc-internal-btn-text-color, unset);
    background: var(--arc-internal-btn-fill-color, transparent);
    border: var(--arc-computed-btn-border-width) solid
      var(--arc-internal-btn-edge-color, unset); /** @computed • border-width */
    border-radius: var(
      --arc-button-border-radius,
      var(--arc-internal-btn-border-radius)
    ); /** @computed • border-radius */

    &[href] {
      text-decoration: var(--arc-button-text-decoration, none);
    }

    /* INNER-ELEMENTS ------------------------------------------------• */

    [data-element='button-content'] {
      flex: 1;
      width: var(--arc-internal-btn-content-width, auto);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: max(
        var(--arc-space-0-75),
        var(--arc-computed-btn-gap)
      ); /** @computed • gap */ /* 4px */
      max-width: 100%;
      overflow: hidden;
      pointer-events: var(--arc-internal-btn-content-pointer-events, none);
      user-select: none;
      visibility: var(--arc-internal-btn-content-visibility, unset);
      opacity: var(--arc-internal-btn-content-opacity, unset);
    }

    [data-element='button-label'] {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 100%;
      line-height: normal;
      transition: 0.2s ease-out;
    }

    [data-element='button-icon'] {
      transition: 0.2s ease-out;
    }

    :is([data-element='button-spinner'], input) {
      position: absolute;
      top: 50%;
      left: 50%;
      translate: -50% -50%;
    }

    input {
      opacity: 0;
      scale: 0.1;
    }

    [data-element='button-spinner'] {
      display: flex;
      pointer-events: none;
      border-radius: 50%;
      width: var(
        --arc-computed-btn-spinner-width
      ); /** @computed • spinner size */
      aspect-ratio: 1 / 1;

      [data-element='spinner-circle'] {
        fill: none;
        stroke: var(--arc-internal-btn-spinner-circle-stroke);
        opacity: var(--arc-internal-btn-spinner-circle-opacity, 0.4);
      }

      [data-element='spinner-progress'] {
        fill: none;
        stroke: var(--arc-internal-btn-spinner-progress-stroke);
        stroke-dasharray: 0.3334 1;
        stroke-dashoffset: 0;
        stroke-linecap: round;
        animation: 743ms arc-spinner-rotate linear infinite;
        transform-origin: 50% 50%;
      }
    }
  }

  @keyframes arc-spinner-rotate {
    to {
      transform: rotate3d(0, 0, 1, 360deg);
    }
  }
`);var ls=Pt.Dn('<svg viewBox="0 0 100 100" data-element="button-spinner"><circle data-element="spinner-circle" cx="50%" cy="50%" r="45%" stroke-width="12.5%" pathLength="1"></circle><circle data-element="spinner-progress" cx="50%" cy="50%" r="45%" stroke-width="12.5%" pathLength="1"></circle></svg>'),ss=Pt.vs('<span data-element="button-content"><!></span> <!>',1),cs=Pt.vs('<a arc-button=""><!></a>'),ds=Pt.vs('<button arc-button=""><!></button>');const ps=kl.AH`
  @layer arc-components {
    [arc-icon] {
      font-size: var(--arc-icon-size, 1em);
      color: var(--arc-icon-color, currentcolor);
      opacity: var(--arc-icon-opacity, 1);

      &:not([hidden]) {
        flex: none;
        display: var(--arc-icon-display, inline-flex);
        align-items: center;
        justify-content: center;
        max-height: 1lh;
        line-height: 1lh;
      }

      &:has(svg) {
        width: 1em;
        height: var(--arc-icon-svg-height, 1lh);
        align-self: var(--arc-icon-svg-align-self, center);
        vertical-align: -0.1lh;

        /* Todo: This is Mondrian CSS in the Arc style sheet to handle duotones. We should try to separate this */
        &:not([data-duotone]) {
          svg {
            fill: var(--arc-icon-color, currentcolor);
          }
        }

        svg {
          width: 100%; /* keeps Safari happy ¯\_(ツ)_/¯ */
        }
      }
    }
  }
`,hs=e=>"number"==typeof e?`calc(${e/10}rem * var(--arc-internal-font-size))`:e,ms=Ql("MonArcIcon",ps);var us=Pt.vs("<span></span>"),gs=Pt.vs('<span arc-icon=""><!></span>');const fs=kl.AH`--arc•input•mask`,vs=kl.AH`--arc•size`,Ss=kl.AH`--arc•space`,Is=kl.AH`--arc•icon•text`,bs=kl.AH`
  ${Is}•font•size
`,xs=kl.AH`
  ${Is}•icon
`,ws=kl.AH`
  ${Is}•text
`,ys=kl.AH`
  ${Is}•subtext
`,ks=kl.AH`
  ${Is}•fg
`,Cs=kl.AH`
  ${Is}•gap
`,Ts=kl.AH`
  ${xs}•size
`,Bs=kl.AH`
  ${xs}•vertical•align
`,Ms=kl.AH`
  ${ws}•overflow
`,Ls=kl.AH`
  ${ws}•text•overflow
`,As=kl.AH`
  ${ws}•white•space
`,Ds=kl.AH`
  ${ys}•font•size
`,Fs=kl.AH`
  ${ys}•fg
`,zs=kl.AH`
  &[data-variant='inherit'] {
    /* @default 'inherit' • uses font/color props from context */
    ${ks}: currentcolor;
  }

  &[data-variant='primary'] {
    ${ks}: var(--arc-color-fg-primary);
  }

  &[data-variant='secondary'] {
    ${ks}: var(--arc-color-fg-secondary);
  }

  &[data-variant='inverse'] {
    ${ks}: var(--arc-color-dark-neutral-1000);
  }

  &[data-variant='brand'] {
    ${ks}: var(--arc-color-fg-brand-stark);
  }

  &[data-variant='info'] {
    ${ks}: var(--arc-color-fg-info-stark);
  }

  &[data-variant='success'] {
    ${ks}: var(--arc-color-fg-success-stark);
  }

  &[data-variant='warning'] {
    ${ks}: var(--arc-color-fg-warning-stark);
  }

  &[data-variant='critical'] {
    ${ks}: var(--arc-color-fg-critical-mid);
  }
`,Vs=kl.AH`
  /* Overall Text Sizes */

  &[data-size='inherit'] {
    /* @default 'inherit' • uses font/size from context */
    ${bs}: 1em;
    ${Ds}: 0.75em;
    ${Ts}: 1em;
    ${Cs}: 0.25em; /* 4px @ 100% */
  }

  &[data-size='md'] {
    ${bs}: var(--arc-font-size-14);
    ${Ds}: var(--arc-font-size-12);
    ${Cs}: var(${Ss}•3);
  }

  &[data-size='sm'] {
    ${bs}: var(--arc-font-size-12);
    ${Ds}: var(--arc-font-size-12);
    ${Cs}: var(${Ss}•3);
  }

  /* Gap Sizes */

  &[data-gap='lg'] {
    ${Cs}: var(${Ss}•12);
  } /* 12px @ 100% */
  &[data-gap='md'] {
    ${Cs}: var(${Ss}•8);
  } /* 8px @ 100% */
  &[data-gap='sm'] {
    ${Cs}: var(${Ss}•3);
  } /* 4px @ 100% */

  /* Icon Sizes */

  &[icon-size='xl'] {
    ${Ts}: var(${vs}•24);
  }
  &[icon-size='lg'] {
    ${Ts}: var(${vs}•20);
  }
  &[icon-size='md'] {
    ${Ts}: var(${vs}•16);
  }
  &[icon-size='sm'] {
    ${Ts}: var(${vs}•14);
  }
  &[icon-size='xs'] {
    ${Ts}: var(${vs}•12);
  }
`,$s=kl.AH`
  /* 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
  ${Fs}: var(--arc-icon-text-subtext-color, color-mix(in srgb, currentcolor 61.2%, transparent));

  /* ArcIcon */
  --arc-icon-color: var(--arc-icon-text-icon-color, var(${ks}));
  --arc-icon-size: var(--arc-icon-text-icon-size, var(${Ts}));
  --arc-icon-fa-line-height: normal;
  --arc-icon-align-self: normal;

  &[data-layout='inline'] {
    ${Ms}: unset;
    ${Ls}: unset;
    ${As}: unset;

    ${Bs}: calc((var(${Ts}) - var(${bs})) / -2);

    &:has(svg) {
      ${Bs}: text-bottom;
    }
  }

  /* Text Overflows */
  &[data-layout='gutter'] {
    ${Ms}: visible;
    ${Ls}: unset;
    ${As}: normal;

    &[data-overflow='truncate'] {
      ${Ms}: hidden;
      ${Ls}: ellipsis;
      ${As}: nowrap;
    }
  }
`;Ql("MonArcIconText",kl.AH`
  @layer arc-components {
    [arc-icon-text] {
      ${zs}
      ${Vs}
    ${$s}
    }

    [arc-icon-text] {
      position: var(--arc-icon-text-position, relative);
      font-size: var(--arc-icon-text-font-size, var(${bs}));
      color: var(--arc-icon-text-text-color, var(${ks}));
      line-height: var(--arc-icon-text-line-height, inherit);

      [data-element='text'],
      [data-element='subtext'] {
        position: relative;
        hyphens: var(--arc-icon-text-hyphens, auto);
      }

      &[is-strong] [data-element='text'] {
        font-weight: var(
          --arc-icon-text-font-weight,
          var(--arc-font-weight-bold)
        );

        [data-element='subtext'] {
          font-weight: var(
            --arc-icon-text-subtext-font-weight,
            var(--arc-font-weight-normal)
          );
        }
      }

      /* @default • gutter layout */
      &[data-layout='gutter'] {
        display: inline-flex;
        align-items: var(--arc-icon-text-align-items, first baseline);
        gap: var(--arc-icon-text-gap, var(${Cs}));

        /* Truncation Support */
        overflow: var(--arc-icon-text-overflow, var(${Ms}));

        &[is-flipped] {
          flex-direction: row-reverse;
        }

        &:not(:has([arc-gradient])) [data-element='icon'] {
          display: contents;
        }

        [data-element='text'] {
          flex: 1;
          min-width: 0%;
        }

        [data-element='subtext'] {
          display: var(--arc-icon-text-subtext-display, block);
          line-height: normal;
          font-size: var(
            --arc-icon-text-subtext-font-size,
            var(${Ds})
          );
          color: var(--arc-icon-text-subtext-color, var(${Fs}));
          padding-block-start: var(--arc-icon-text-subtext-spacing, 0);
        }

        :where([data-element='text'], [data-element='subtext']) {
          overflow: var(--arc-icon-text-overflow, var(${Ms}));
          text-overflow: var(
            --arc-icon-text-text-overflow,
            var(${Ls})
          );
          white-space: var(--arc-icon-text-white-space, var(${As}));
        }
      }

      &[data-layout='inline'] {
        display: inline;

        [data-element='icon'] {
          line-height: normal;
          vertical-align: var(
            --arc-icon-text-icon-vertical-align,
            var(${Bs})
          );
        }

        [data-element='icon'] + [data-element='text'] {
          margin-inline-start: var(--arc-icon-text-gap, var(${Cs}));
        }
        [data-element='text']:has(+ [data-element='icon']) {
          margin-inline-end: var(--arc-icon-text-gap, var(${Cs}));
        }
        [data-element='subtext'] {
          display: contents;
        }

        &:has(svg) {
          ${Bs}: text-bottom;
        }
      }
    }
  }
`),Pt.vs('<span data-element="icon"><!></span>'),Pt.vs('<br> <small data-element="subtext"> </small>',1),Pt.vs(' <span data-element="subtext"> </span>',1),Pt.vs('<span data-element="text"> <!></span>'),Pt.vs('<span data-element="icon"><!></span>'),Pt.vs("<!> <!> <!>",1);const Js=kl.AH`
  :root {
    --arc-link-fg-hover-inverse: color-mix(
      in srgb,
      var(--arc-color-fg-on-mono-inverse) 68.2%,
      transparent
    );
    --arc-link-fg-disabled-inverse: color-mix(
      in srgb,
      var(--arc-color-fg-on-mono-inverse) 30%,
      transparent
    );
    --arc-link-focus-disabled-inverse: light-dark(
      var(--arc-color-light-blue-300),
      var(--arc-color-blue-600)
    );
  }
`,Ps=kl.AH`--arc•link`,Rs=kl.AH`
  ${Ps}•fg
`,Zs=kl.AH`
  ${Rs}•hover
`,Os=kl.AH`
  ${Rs}•disabled
`,_s=kl.AH`
  ${Ps}•outline
`,js=kl.AH`
  ${_s}•size
`,Ys=kl.AH`
  ${_s}•offset
`,Hs=kl.AH`
  ${Ps}•cursor
`,Es=kl.AH`
  ${Ps}•focus•color
`;Ql("MonArcLink",kl.AH`
  @layer arc-components {
    ${Js}

    [arc-link] {
      /* VARIANTS ------------------------------------------------------• */

      &[data-variant='inherit'] {
        /* @default */
        ${Rs}: currentcolor;
        ${Zs}: color-mix(in srgb, currentcolor, transparent 38.75%);
        ${Os}: color-mix(in srgb, currentcolor, transparent 70%);

        ${Es}: var(--arc-color-border-focus);
      }

      &[data-variant='primary'] {
        ${Rs}: var(--arc-color-fg-primary);
        ${Zs}: var(--arc-color-fg-secondary);
        ${Os}: var(--arc-color-fg-disabled);
        ${Es}: var(--arc-color-border-focus);
      }

      &[data-variant='secondary'] {
        ${Rs}: var(--arc-color-fg-secondary);
        ${Zs}: var(--arc-color-fg-primary);
        ${Os}: var(--arc-color-fg-disabled);
        ${Es}: var(--arc-color-border-focus);
      }

      /* @deprecated */
      &[data-variant='inverse'] {
        ${Rs}: var(--arc-color-fg-on-mono-inverse);
        ${Zs}: var(--arc-link-fg-hover-inverse);
        ${Os}: var(--arc-link-fg-disabled-inverse);
        ${Es}: var(--arc-link-focus-disabled-inverse);
      }

      & {
        ${js}: 0.125em; /* 2px */
        ${Ys}: 0.0625em; /* 1px */
      }

      /* STATES --------------------------------------------------------• */

      &:not([data-is-disabled]):hover {
        ${Rs}: var(--arc-link-color-hover, var(${Zs}));
      }

      &:where(:focus, :focus-within):focus-visible {
        ${_s}: var(${js}) solid var(--arc-link-color-focus, var(${Es}));
        ${Ys}: var(${Ys});

        * {
          outline: none;
        }
      }

      &[data-is-disabled] {
        ${Rs}: var(--arc-link-color-disabled, var(${Os}));
        ${Hs}: not-allowed;
      }

      & {
        /* Inter-Component Communication -------------------------------• */
        --arc-icon-color: var(
          --arc-link-color,
          var(${Rs})
        ); /** ArcIcon color */
      }
    }

    /* CORE STYLES ------------------------------------------------------ */

    [arc-link] {
      color: var(--arc-link-color, var(${Rs}));
      border-radius: var(--arc-border-radius-sm); /* for focus outline */
      text-decoration: var(--arc-link-text-decoration, underline);

      [data-element='icon'] {
        text-decoration: none;
      }

      [data-element='text'] {
        text-decoration: var(--arc-link-text-decoration, underline);
        text-decoration-color: currentcolor;
      }
    }
  }
`),Pt.vs('<h2 class="svelte-1re8jym"> </h2>'),Pt.vs('<button class="close-button svelte-1re8jym" aria-label="Close modal"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="svelte-1re8jym"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" class="svelte-1re8jym"></path></svg></button>'),Pt.vs('<dialog aria-modal="true"><div class="dialog-wrap svelte-1re8jym"><div class="dialog-header svelte-1re8jym"><!> <!></div> <div class="dialog-content svelte-1re8jym"><!></div></div></dialog>'),Pt.Mm(["click","keydown"]);const Gs=kl.AH`--arc•radio`,Xs=kl.AH`
  @layer arc-components {
    [arc-radio] {
      --arc•size•0: 0px;
      --arc•size•1: max(1px, 0.0625rem);
      --arc•size•2: max(2px, 0.125rem);
      --arc•size•3: max(3px, 0.1875rem);
      --arc•size•4: max(4px, 0.25rem);
      --arc•size•5: max(5px, 0.3125rem);
      --arc•size•6: max(6px, 0.375rem);
      --arc•size•8: max(8px, 0.5rem);
      --arc•size•10: max(10px, 0.625rem);
      --arc•size•12: max(12px, 0.75rem);
      --arc•size•14: max(14px, 0.875rem);
      --arc•size•16: max(16px, 1rem);
      --arc•size•18: max(18px, 1.125rem);
      --arc•size•20: max(20px, 1.25rem);
      --arc•size•22: max(22px, 1.375rem);
      --arc•size•24: max(24px, 1.5rem);
      --arc•size•26: max(26px, 1.625rem);
      --arc•size•28: max(28px, 1.75rem);
      --arc•size•30: max(30px, 1.875rem);
      --arc•size•32: max(32px, 2rem);
      --arc•size•34: max(34px, 2.125rem);
      --arc•size•36: max(36px, 2.25rem);
      --arc•size•38: max(38px, 2.375rem);
      --arc•size•40: max(40px, 2.5rem);
      --arc•size•42: max(42px, 2.625rem);
      --arc•size•44: max(44px, 2.75rem);
      --arc•size•46: max(46px, 2.875rem);
      --arc•size•48: max(48px, 3rem);
      --arc•size•50: max(50px, 3.125rem);
      --arc•size•52: max(52px, 3.25rem);
      --arc•size•54: max(54px, 3.375rem);
      --arc•size•56: max(56px, 3.5rem);
      --arc•size•58: max(58px, 3.625rem);
      --arc•size•60: max(60px, 3.75rem);
      --arc•size•64: max(64px, 4rem);
      --arc•size•68: max(68px, 4.25rem);
      --arc•size•72: max(72px, 4.5rem);
      --arc•size•76: max(76px, 4.75rem);
      --arc•size•80: max(80px, 5rem);
      --arc•size•88: max(88px, 5.5rem);
      --arc•size•96: max(96px, 6rem);
      --arc•size•104: max(104px, 6.5rem);
      --arc•size•112: max(112px, 7rem);
      --arc•size•120: max(120px, 7.5rem);
      --arc•size•128: max(128px, 8rem);
      --arc•size•136: max(136px, 8.5rem);
      --arc•size•144: max(144px, 9rem);
      --arc•size•152: max(152px, 9.5rem);
      --arc•size•160: max(160px, 10rem);

      --arc-color-fg-on-theme-heavy: #ffffff;
      --arc-color-bg-theme-heavy: #000000;
      --arc-color-bg-theme-subtle: rgb(0 0 0 / 10%);
      --arc-color-bg-theme-stark: #636363;
      --arc-color-border-theme-heavy: #000000;

      /* SIZES -------------------------------------------------------• */
      &[data-size='inherit'] {
        ${Gs}•font•size: 1em;
        ${Gs}•icon•size: 0.625em;
        ${Gs}•size: 1.125em;
        ${Gs}•gap: 0.5em;
      }

      &[data-size='md'] {
        ${Gs}•font•size: var(${vs}•14);
        ${Gs}•icon•size: var(${vs}•10);
        ${Gs}•size: var(${vs}•18);
        ${Gs}•gap: var(${vs}•8);
      }

      &[data-size='sm'] {
        ${Gs}•font•size: var(${vs}•12);
        ${Gs}•icon•size: var(${vs}•10);
        ${Gs}•size: var(${vs}•16);
        ${Gs}•gap: var(${vs}•6);
      }

      /* Inter-Component Communication -------------------------------• */
      /* for: Setup defaults for ArcBooleanInputMask */
      ${fs}•border•radius: var(--arc-border-radius-circle);
      ${fs}•size: var(${Gs}•size);
      ${fs}•icon•size: var(${Gs}•icon•size);
      ${fs}•width: var(${Gs}•size);
      ${fs}•height: var(${Gs}•size);
      ${fs}•translate: 0 var(${vs}•1m);

      /* for: ArcLabel */
      --arc-label-gap: var(${Gs}•gap);
      --arc-label-align-items: stretch; /* ArcLabel • this allows the mask
                                        to stay inline with the label text
                                        regardless of applied line-height */
    }

    /* CORE STYLES ---------------------------------------------------• */
    [arc-radio]:not([hidden]) {
      font-size: var(${Gs}•font•size);
      display: var(--arc-radio-display, inline-flex);
      min-height: 1lh;

      /* UNCHECKED, NOT-DISABLED, +HOVER • default state */
      &:not(:has(:checked)) {
        ${fs}•color: transparent;
        ${fs}•background: transparent;
        ${fs}•border•color: var(--arc-color-border-stark);

        &:hover {
          ${fs}•background: var(--arc-color-bg-theme-subtle);
          ${fs}•border•color: var(--arc-color-border-theme-heavy);
        }

        &:has(:disabled) {
          ${fs}•background: var(--arc-color-bg-disabled);
          ${fs}•border•color: var(--arc-color-border-disabled);
        }
      }

      /* DISABLED */
      &:has(:disabled) {
        color: var(--arc-color-fg-disabled);
      }

      /* CHECKED, ?NOT-DISABLED+HOVER, ?DISABLED */
      &:has(:checked) {
        ${fs}•color: var(--arc-color-fg-on-theme-heavy);
        ${fs}•background: var(--arc-color-bg-theme-heavy);
        ${fs}•border•color: transparent;

        &:not(:has(:disabled)):hover {
          ${fs}•background: var(--arc-color-bg-theme-stark);
        }

        &:has(:disabled) {
          ${fs}•color: var(--arc-color-fg-on-theme-mid);
          ${fs}•background: var(--arc-color-bg-theme-mid);
        }
      }
    }
  }
`;Pt.vs("<input>"),Ql("MonArcBooleanInputMask",kl.AH`
  @layer arc-components {
    [arc-input-mask] {
      ${fs}•border•width: var(--arc-border-width-sm);
      ${fs}•border: var(${fs}•border•width) solid var(${fs}•border•color);

      /* Inter-Component Communication ---------------------------------• */

      /* for: ArcIcon */
      --arc-icon-size: var(${fs}•icon•size); /* ArcIcon */

      /* STATES --------------------------------------------------------• */

      &:has(:disabled) {
        ${fs}•cursor: not-allowed;
      }

      &:has(:focus:focus-visible) {
        ${fs}•outline: var(${fs}•border•width) solid var(--arc-color-border-focus);
      }
    }

    /* CORE STYLES -----------------------------------------------------• */

    [arc-input-mask-wrapper] {
      align-self: normal;
      display: flex;
      align-items: center;
      justify-content: center;
      max-height: 1lh;
    }

    [arc-input-mask] {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: var(${fs}•width);
      height: var(${fs}•height);
      opacity: var(${fs}•opacity, var(--arc-alpha-100));

      color: var(${fs}•color, transparent);
      background: var(${fs}•background);
      border: var(${fs}•border);
      border-radius: var(${fs}•border•radius);
      translate: var(${fs}•translate, unset);

      outline: var(${fs}•outline, none);
      outline-offset: var(${fs}•border•width);

      transition-duration: 100ms;
      transition-behavior: allow-discrete;
      transition-timing-function: ease-in-out;
      transition-property: opacity, background, color, border-color, outline;

      [arc-input-type] {
        flex: none;
        outline: none;
        appearance: none;
        position: absolute;
        inset: calc(var(${fs}•border•width) * -1);
        cursor: var(${fs}•cursor, pointer);
        margin: 0;
        padding: 0;
        border: 0;
        z-index: var(${fs}•z•index, unset);
      }
    }
  }
`),Pt.vs('<span arc-input-mask-wrapper=""><span><!></span></span>');const qs=kl.AH`--arc•label`,Ns=kl.AH`
  ${qs}•cursor
`,Us=kl.AH`
  ${qs}•opacity
`,Ws=kl.AH`
  @layer arc-components {
    [arc-label] {
      /* Inter-Component Communication -------------------------------• */
      /* also applies to nested ArcLabelContent */
      ${Us}: var(--arc-label-opacity, unset);
      ${Us}•disabled: var(--arc-label-opacity-disabled, var(--arc-alpha-40));

      /* Internal STYLES ---------------------------------------------• */
      ${qs}•display: var(--arc-label-display, inline-flex);
      ${qs}•gap: var(--arc-label-gap, var(${vs}•8));
      ${qs}•align•items: var(--arc-label-align-items, baseline);

      ${Ns}: var(--arc-label-cursor, pointer);
      ${Ns}•disabled: var(--arc-label-cursor-disabled, not-allowed);

      &:has(:disabled) {
        ${Ns}: var(${Ns}•disabled);
        ${Us}: var(${Us}•disabled);
      }

      &[data-layout='fill'] {
        ${qs}•display: flex;
      }
    }

    /* CORE STYLES ---------------------------------------------------• */
    [arc-label]:not([hidden]) {
      display: var(${qs}•display);
      align-items: var(${qs}•align•items);
      gap: var(${qs}•gap);
      cursor: var(${Ns});
    }
  }
`;Ql("MonArcLabel",Ws),Pt.vs("<label><!></label>"),Ql("MonArcLabelContent",Ws),Pt.vs("<span><!></span>"),Ql("MonArcRadio",Xs),Pt.vs("<!> <!>",1),Pt.vs("<!> <!>",1),Pt.vs('<span arc-radio=""><!></span>');var Qs=a(8350);const Ks=kl.AH`arc•progress`,ec=kl.AH`${Ks}•bar`,tc=kl.AH`${Ks}•value`;Ql("MonArcProgress",kl.AH`
@layer arc-components {
[arc-progress-bar] {
  --${ec}-background: var(--arc-color-alpha-white-20);
  --${tc}-background: var(--arc-color-brand-root);

  &[data-variant=ai] {
    --${tc}-background: linear-gradient(to right, var(--arc-color-ai-purple-200), var(--arc-color-ai-blue-200));
  }

  &[data-variant=critical] {
    --${tc}-background: var(--arc-color-critical-root);
  }
}

[arc-progress-bar] {
  appearance: none;
  -webkit-appearance: none;
  width: 100%;
  height: max(var(--arc-space-1), 0.5em);

  /* firefox needs these at this level, other browsers can use these too */
  background: var(--arc-progress-bar-background, var(--${ec}-background));
  border-radius: var(--arc-border-radius-pill);
  border: none;

  /* turn off the default bar background for other browsers */
  &::-webkit-progress-bar { background: none; }

  /* firefox's progress-value bar */
  &::-moz-progress-bar {
    border-radius: var(--arc-border-radius-pill);
    background: var(--arc-progress-bar-value-background, var(--${tc}-background));
  }

  /* all the others' progress-value bar */
  &::-webkit-progress-value {
    border-radius: var(--arc-border-radius-pill);
    background: var(--arc-progress-bar-value-background, var(--${tc}-background));
  }
}

}
`),Pt.vs("<progress> </progress>"),Ql("MonArcToast",kl.AH`
  @layer arc-components {
    [arc-toast] {
      --arc-toast-padding: 0.75em 0.75em 0.75em 1em;
      --arc-toast-transition-duration: 300ms;
      --arc-toast-offset: 1em;

      --arc-modifier: 14;
      --arc-toast-content-gap: max(
        0.125em,
        calc(2 / var(--arc-modifier) * 1em)
      );

      /* SIZES ----------------------------------------------------------------• */

      &[data-size='md'] {
        /* @default */
        --arc-toast-font-size: var(--arc-font-size-body-lg);
        --arc-toast-content-font-size: var(
          --arc-font-size-body-md
        ); /* 14px @ 100% */
      }

      &[data-size='inherit'] {
        --arc-toast-font-size: 1em;
        --arc-toast-content-font-size: 0.875em;
      }

      /* STATES ---------------------------------------------------------------• */
      &[data-severity='error'] {
        --arc-toast-icon-color: var(--arc-color-critical-root);
      }

      &[data-severity='success'] {
        --arc-toast-icon-color: var(--arc-color-success-root);
      }

      &[data-severity='warning'] {
        --arc-toast-icon-color: var(--arc-color-warning-root);
      }

      /* VARIANTS -------------------------------------------------------------• */

      &[data-variant='common'] {
        /* @default */
        --arc-toast-background: var(--arc-color-text-primary);
        --arc-toast-color: var(--arc-color-text-inverse);
      }
    }

    /* CORE STYLES --------------------------------------------------• */

    [arc-toast] {
      inset: var(
        --arc-toast-inset,
        var(--top, auto) var(--right, auto) var(--bottom, auto)
          var(--left, auto)
      );

      &[data-placement*='top-'] {
        --top: var(--arc-toast-offset);
      }

      &[data-placement*='bottom-'] {
        --bottom: var(--arc-toast-offset);
      }

      &[data-placement='center'] {
        --arc-toast-inset: 0;
      }

      &[data-placement*='-left'] {
        --left: var(--arc-toast-offset);
      }

      &[data-placement*='-right'] {
        --right: var(--arc-toast-offset);
      }

      &[data-placement*='-center'] {
        --left: 50%;
        translate: -50% 0;
      }
    }

    [arc-toast] {
      font-size: var(--arc-toast-font-size);
      align-items: center;
      color: var(--arc-toast-color);
      background-color: var(--arc-toast-background);
      border-radius: var(--arc-toast-border-radius, 0.5em);
      padding: var(--arc-toast-padding);
      box-shadow: var(--arc-shadow-dark-lg);
      max-width: var(--arc-toast-max-width, 32em);
      min-width: var(--arc-toast-min-width, 12em);
      min-height: var(--arc-toast-min-height, 3.5em);
      border: none;
      box-sizing: border-box; /* Temporary Hack To Match DS Layout */

      &:has([arc-toast-heading]):has([arc-toast-subtext]) {
        --arc-toast-min-height: 5em;
        --arc-toast-content-display: flex;
      }

      [arc-toast-content-grid] {
        flex: 1;
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 0.5em 1em;
      }

      [arc-toast-body] {
        display: flex;
        align-items: baseline;
        gap: 0.5em;
        padding: 0.25em 0; /* vertical padding to align with action button text */
      }

      [arc-toast-icon] {
        --arc-icon-color: var(--arc-toast-icon-color, currentcolor);

        height: 1lh;
        padding: 0 0.125em;
      }

      [arc-toast-content] {
        flex: 1;
        line-height: var(--arc-line-height-loose);
        font-size: var(--arc-toast-content-font-size);
        hyphens: auto;
        display: var(--arc-toast-content-display, block);
        flex-direction: column;
        gap: var(--arc-toast-content-gap);

        p {
          margin: 0;
        }
      }

      [arc-toast-actions] {
        align-self: baseline;

        display: flex;
        align-items: center;
        gap: 0.5em;
      }

      [arc-toast-progress-bar] {
        grid-column: 1 / -1;
      }
    }

    /* POPOVER + state ---------------------------------------------• */

    [arc-toast][data-semantic-popover='true] {
      opacity: 0;
      content-visibility: hidden;
      transition:
        display var(--arc-toast-transition-duration) allow-discrete,
        overlay var(--arc-toast-transition-duration) allow-discrete,
        opacity var(--arc-toast-transition-duration);
    }

    [arc-toast][data-semantic-popover='true]:popover-open {
      display: flex;
      opacity: 1;
      content-visibility: visible;
    }

    @starting-style {
      [arc-toast][data-semantic-popover='true]:popover-open {
        opacity: 0;
      }
    }
  }
`),Pt.vs('<header arc-toast-heading=""><strong> </strong></header>'),Pt.vs('<p arc-toast-subtext=""> </p>'),Pt.vs("<!> <!>",1),Pt.vs('<div arc-toast-actions=""><!> <!></div>'),Pt.vs('<div arc-toast=""><div arc-toast-content-grid=""><div arc-toast-body=""><!> <div arc-toast-content=""><!></div></div> <!> <!></div></div>'),Pt.vs("<span><!> <!></span>");var ac=a(2732),rc=a.n(ac),ic=a(3252);const oc=()=>rc()("tooltip-"),nc={nw:"top-end",n:"top",ne:"top-start",sw:"bottom-end",s:"bottom",se:"bottom-start",wn:"left-start",w:"left",ws:"left-end",en:"right-start",e:"right",es:"right-end"};function lc(e){return{delay:0,duration:450,easing:e=>e,css:e=>`opacity: ${e<200/450?(0,ic.wq)(450*e/200):1};`}}const sc=()=>({name:"travelBoxes",fn({x:e,y:t,rects:{reference:{x:a,y:r,width:i,height:o},floating:{width:n,height:l}}}){const s=e+n,c=t+l,d=a+i,p=r+o;return{data:{path:`\n        ${e<a?`M ${e},${c} L ${e},${t}`:`M ${a},${p} L ${a},${r}`}\n        ${t<r?`L ${e},${t} L ${s},${t}`:`L ${a},${r} L ${d},${r}`}\n        ${s>d?`L ${s},${t} L ${s},${c}`:`L ${d},${r} L ${d},${p}`}\n        ${c>p?`L ${s},${c} L ${e},${c}`:`L ${d},${p} L ${a},${p}`}\n        Z\n\n        M ${e},${c} L ${s},${c} L ${s},${t} L ${e},${t} Z\n        M ${a},${p} L ${d},${p} L ${d},${r} L ${a},${r} Z\n      `}}}});var cc=Pt.vs('<div class="travel-boxes-wrapper svelte-xddqyh" aria-hidden="true"><svg class="svelte-xddqyh"><path class="svelte-xddqyh"></path></svg></div>'),dc=Pt.vs('<div class="tooltip svelte-xddqyh" data-mon-tooltip="" popover="manual"><!> <div class="shadowed svelte-xddqyh"><div class="arrow svelte-xddqyh"><svg aria-hidden="true" data-mon-tooltip-arrow="" class="svelte-xddqyh"><defs><filter><feDropShadow dx="0px" dy="2px" stdDeviation="3px" flood-color="black" flood-opacity="0.4"></feDropShadow></filter></defs><path d="M13 0H1V1L6.2929 6.2929c.3905.3905 1.0237.3905 1.4142 0L13 1V0Z" class="svelte-xddqyh"></path></svg></div></div> <!></div>'),pc=Pt.vs('<div class="tooltip-locator svelte-xddqyh"></div> <!>',1);const hc={hash:"svelte-xddqyh",code:".tooltip-locator.svelte-xddqyh {position:fixed;display:none;}.tooltip.svelte-xddqyh {pointer-events:none;padding:0;position:fixed;top:0;left:0;margin:0;overflow:visible;border:none;background:none;&:not([data-inverse]) {--popover-fill: var(--arc-color-background-primary);color:var(--arc-color-text-primary);}&[data-inverse] {--popover-fill: var(--arc-color-background-inverse);color:var(--arc-color-text-inverse);}&[data-pointer-events] {pointer-events:all;}}.arrow.svelte-xddqyh {position:absolute;width:12px;height:12px;svg:where(.svelte-xddqyh) {display:block;width:14px;height:14px;position:absolute;inset:-1px;}}.tooltip.svelte-xddqyh {&[data-placement^='bottom'] .arrow:where(.svelte-xddqyh) {transform:scale(-1); /* Turn that frown upsidedown */bottom:100%;}&[data-placement^='top'] .arrow:where(.svelte-xddqyh) {top:100%;}&[data-placement^='left'] .arrow:where(.svelte-xddqyh) {transform:rotate(270deg);left:100%;}&[data-placement^='right'] .arrow:where(.svelte-xddqyh) {transform:rotate(90deg);right:100%;}}.shadowed.svelte-xddqyh {position:absolute;inset:0;z-index:-1;background:var(--popover-fill);&[data-variant='popover'] {border-radius:var(--arc-border-radius-lg);\n      /* shadow/light/lg */filter:drop-shadow(0px 6px 12px rgba(0, 0, 0, 0.1));}&[data-variant='tooltip'] {border-radius:var(--arc-border-radius-md);\n      /* shadow/dark/md */box-shadow:0px 2px 6px 0px rgba(0, 0, 0, 0.4);}.arrow:where(.svelte-xddqyh) path:where(.svelte-xddqyh) {fill:var(--popover-fill);}}.travel-boxes-wrapper.svelte-xddqyh {position:fixed;inset:0;pointer-events:none;svg:where(.svelte-xddqyh) {width:100%;height:100%;display:block;path:where(.svelte-xddqyh) {pointer-events:all;fill:none;.debug & {fill:#f00a;}}}}\n\n  /**\n   * Tooltip anchor global utility class; apply to nodes for convenience.\n   * Defined as a utility class instead of a component since tooltip anchors\n   * often need specific tags, specific attributes, custom styles, etc, and\n   * bundling those into a component has diminishing returns.\n   *\n   * However, it has no styles of its own.\n   * :global(.mon-tooltip-anchor) {\n   * }\n  */"};Pt.vs("Share feedback <!>",1),Pt.vs('<div class="feedback-container svelte-18phxd6"><h2 class="svelte-18phxd6">This feature is in beta</h2> <p class="svelte-18phxd6"><span class="svelte-18phxd6">We’re actively refining it and would love your input. Some functionality\n        may be limited or evolve as we gather feedback.</span></p> <!> <!></div>'),Pt.vs('<div><div class="collapsible-section-content svelte-6iuxj0"><!></div></div>'),(0,i.writable)(!1);const mc=['input:not([type="checkbox"], [type="radio"])',"art-asset-library","textarea","[contenteditable]"].join(", ");function uc(e=Kd()){return null!=e&&!!e.matches(mc)}var gc=a(9205);const fc=a.n(gc)()("mondrian").extend("keyboard"),vc={activeModifierKeys:new Set,get alt(){return vc.activeModifierKeys.has("Alt")},get meta(){return vc.activeModifierKeys.has("Meta")||vc.activeModifierKeys.has("Control")},get shift(){return vc.activeModifierKeys.has("Shift")},key:void 0,get combo(){return[vc.meta&&"Meta",vc.alt&&"Alt",vc.shift&&"Shift",vc.key].filter(Boolean).join("+")}};function Sc({metaKey:e,altKey:t,shiftKey:a,ctrlKey:r},i){let o=!1;return e!==i.has("Meta")&&(o=!0,e?i.add("Meta"):i.delete("Meta")),t!==i.has("Alt")&&(o=!0,t?i.add("Alt"):i.delete("Alt")),a!==i.has("Shift")&&(o=!0,a?i.add("Shift"):i.delete("Shift")),r!==i.has("Control")&&(o=!0,r?i.add("Control"):i.delete("Control")),o}let Ic=!1;const bc={...(0,i.readable)(vc,(e=>{function t(t){const a="keydown"===t.type;Sc(t,vc.activeModifierKeys),vc.key=a?t.key:void 0,e(vc)}function a(t){Sc(t,vc.activeModifierKeys)&&e(vc)}Ic||(Ic=!0,window.addEventListener("keydown",t,{capture:!0}),window.addEventListener("keyup",t,{capture:!0}),document.addEventListener("visibilitychange",(function(){"hidden"===document.visibilityState&&(vc.activeModifierKeys.clear(),vc.key=void 0,e(vc))})),window.addEventListener("blur",(function(){vc.activeModifierKeys.clear(),vc.key=void 0,e(vc)})),window.addEventListener("mousedown",a,{passive:!0,capture:!0}),window.addEventListener("mousemove",a,{passive:!0,capture:!0}))})),is:e=>(vc.combo&&fc(`comparing keycombos, store: ${vc.combo}, comparison: ${e}`),vc.combo.toLowerCase()===e.toLowerCase()),on(e,t){const a=a=>{!uc()&&bc.is(e)&&(fc("keyCombo matched, executing handler",e),t(a))};return window.addEventListener("keydown",a,{capture:!0}),()=>{window.removeEventListener("keydown",a,{capture:!0})}}},xc=((0,i.derived)(bc,(e=>e.meta)),(0,i.derived)(bc,(e=>e.alt)),(0,i.derived)(bc,(e=>e.shift)),{down:!1,downX:-1,downY:-1,target:void 0,x:-1,y:-1});(0,i.readable)(xc,(e=>{return window.addEventListener("mousedown",t,{capture:!0,passive:!0}),window.addEventListener("mousemove",r,{capture:!0,passive:!0}),window.addEventListener("mouseup",a,{capture:!0,passive:!0}),function(){window.removeEventListener("mousedown",t,{capture:!0}),window.removeEventListener("mousemove",r,{capture:!0}),window.removeEventListener("mouseup",a,{capture:!0})};function t(e){xc.down=!0,xc.downX=xc.x=e.clientX,xc.downY=xc.y=e.clientY,xc.target=e.target,i()}function a(){xc.down=!1,xc.downX=xc.x=xc.downY=xc.y=-1,xc.target=void 0,i()}function r(e){xc.x=e.x,xc.y=e.y,i()}function i(){e(xc)}}));const{setTimeout:wc,clearTimeout:yc}=window,kc=(()=>{const e=document.createElement("div");e.style.visibility="hidden",e.style.overflowX="hidden",e.style.overflowY="scroll",document.body.appendChild(e);const t=e.offsetWidth-e.scrollWidth;return e.remove(),t})();document.body.style.setProperty("--ua-scrollbar-width",`${kc}px`);Pt.vs('<mon-menu-item><label class="multi-select-option-label svelte-1aujqfc"><input class="multi-select-option-checkbox svelte-1aujqfc" type="checkbox"> <!> <span class="multi-select-option-label-text svelte-1aujqfc"> </span></label></mon-menu-item>',2),Pt.vs('<div class="no-results svelte-1aujqfc"> </div>'),Pt.vs('<mon-popover><mon-menu><section class="filters svelte-1aujqfc"><div class="search-filter svelte-1aujqfc"><!> <input class="search-filter-input svelte-1aujqfc" type="text" placeholder="Search"></div> <label class="select-all svelte-1aujqfc"><input type="checkbox" class="svelte-1aujqfc"> <span> </span></label></section> <section class="menu-items svelte-1aujqfc"></section> <!></mon-menu></mon-popover>',2),Pt.vs('<div class="multi-select svelte-1aujqfc"><div class="multi-select-menu-trigger svelte-1aujqfc" tabindex="-1"><div class="trigger-content svelte-1aujqfc"><!></div> <button class="chevron svelte-1aujqfc"><!></button></div> <!></div>'),Pt.vs('<span class="hint-text svelte-1463wmx"><!></span>'),Pt.vs('<div><input class="mon-focusable svelte-1tadwff" type="text" data-1pignore="" data-lpignore="" autocomplete="off"> <div tabindex="0"> </div></div>'),Pt.vs("Share feedback <!>",1),Pt.vs('<div class="feedback-container svelte-i5okdr"><h2 class="svelte-i5okdr">Coming Soon</h2> <p class="svelte-i5okdr"><span class="svelte-i5okdr">Interactivity is in development. Let us know what you\'d like to see!</span></p> <div class="popover-footer svelte-i5okdr"><!></div></div>'),Pt.vs('<label><span class="label-text svelte-ja2ngw"> </span> <input class="input svelte-ja2ngw" type="number" placeholder="--"></label>'),Pt.vs('<div class="mon-spinner svelte-1fzag14"><svg class="mon-spinner__icon svelte-1fzag14" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 19a7 7 0 100-14 7 7 0 000 14zm0 3c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" clip-rule="evenodd"></path><path fill="currentColor" d="M2 12C2 6.477 6.477 2 12 2v3a7 7 0 00-7 7H2z"></path></svg> <!></div>'),Pt.vs('<p class="mon-loading__text svelte-1omw61o">Loading custom block</p>'),Pt.vs('<div class="mon-loading svelte-1omw61o"><!></div>');Pt.Dn('<svg class="defs svelte-1l67ssw" aria-hidden="true"><defs><linearGradient x1="2.5" y1="25" x2="22.5" y2="24" gradientUnits="userSpaceOnUse"><stop stop-color="#FF0000"></stop><stop offset="0.135" stop-color="#FF8000"></stop><stop offset="0.315" stop-color="#FFFF00"></stop><stop offset="0.465" stop-color="#1AFE0A"></stop><stop offset="0.625" stop-color="#1EDFF4"></stop><stop offset="0.82" stop-color="#3912FA"></stop><stop offset="0.905" stop-color="#FF01E6"></stop></linearGradient><clipPath><circle cx="12" cy="12" r="12"></circle></clipPath><mask style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><circle cx="12" cy="12" r="12" fill="currentColor"></circle></mask><mask fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 17.3333C14.9455 17.3333 17.3333 14.9455 17.3333 12C17.3333 9.05448 14.9455 6.66667 12 6.66667C9.05448 6.66667 6.66667 9.05448 6.66667 12C6.66667 14.9455 9.05448 17.3333 12 17.3333Z"></path></mask><mask fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 17.3333C14.9455 17.3333 17.3333 14.9455 17.3333 12C17.3333 9.05448 14.9455 6.66667 12 6.66667C9.05448 6.66667 6.66667 9.05448 6.66667 12C6.66667 14.9455 9.05448 17.3333 12 17.3333Z"></path></mask><clipPath><path fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 17.3333C14.9455 17.3333 17.3333 14.9455 17.3333 12C17.3333 9.05448 14.9455 6.66667 12 6.66667C9.05448 6.66667 6.66667 9.05448 6.66667 12C6.66667 14.9455 9.05448 17.3333 12 17.3333Z"></path></clipPath></defs></svg>');const Cc="#glyphs-",Tc={"arc-transcription":'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 13.6875H11.5C11.7188 13.6875 11.9375 13.4961 11.9375 13.25V5.375H9.75C9.25781 5.375 8.875 4.99219 8.875 4.5V2.3125H4.5C4.25391 2.3125 4.0625 2.53125 4.0625 2.75V13.25C4.0625 13.4961 4.25391 13.6875 4.5 13.6875ZM2.75 2.75C2.75 1.79297 3.51562 1 4.5 1H9.01172C9.47656 1 9.91406 1.19141 10.2422 1.51953L12.7305 4.00781C13.0586 4.33594 13.25 4.77344 13.25 5.23828V13.25C13.25 14.2344 12.457 15 11.5 15H4.5C3.51562 15 2.75 14.2344 2.75 13.25V2.75ZM8 8.4375V11.9375C8 12.1289 7.89062 12.293 7.72656 12.3477C7.5625 12.4297 7.37109 12.375 7.23438 12.2656L6.27734 11.2812H5.8125C5.56641 11.2812 5.375 11.0898 5.375 10.8438V9.53125C5.375 9.3125 5.56641 9.09375 5.8125 9.09375H6.27734L7.23438 8.13672C7.37109 8.02734 7.5625 7.97266 7.72656 8.05469C7.89062 8.10938 8 8.27344 8 8.4375ZM10.3242 8.32812C10.6523 8.875 10.8438 9.53125 10.8438 10.1875C10.8438 10.8711 10.6523 11.5 10.3242 12.0469C10.1602 12.375 9.75 12.4844 9.44922 12.293C9.12109 12.1289 9.01172 11.7188 9.20312 11.3906C9.39453 11.0625 9.53125 10.6523 9.53125 10.1875C9.53125 9.75 9.39453 9.33984 9.20312 8.98438C9.01172 8.68359 9.12109 8.27344 9.44922 8.10938C9.75 7.91797 10.1602 8.02734 10.3242 8.32812Z" fill="currentColor"/></svg>',"arc-fullscreen-disable":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>',"arc-fullscreen-enable":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M32 32C14.3 32 0 46.3 0 64l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96z"/></svg>',"arc-pause":'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="3.448 3.43 13.081 13.099"><path d="M6.5 4H7.5C8.3125 4 9 4.6875 9 5.5V14.5C9 15.3438 8.3125 16 7.5 16H6.5C5.65625 16 5 15.3438 5 14.5V5.5C5 4.6875 5.65625 4 6.5 4ZM12.5 4H13.5C14.3125 4 15 4.6875 15 5.5V14.5C15 15.3438 14.3125 16 13.5 16H12.5C11.6562 16 11 15.3438 11 14.5V5.5C11 4.6875 11.6562 4 12.5 4Z" /></svg>',"arc-pip-disable":'<svg xmlns="http://www.w3.org/2000/svg" width="22px" height="18px" viewBox="0 0 22 18"><path d="M18 4H4v10h14V4zm4 12V1.98C22 .88 21.1 0 20 0H2C.9 0 0 .88 0 1.98V16c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H2V1.97h18v14.05z" fill-rule="nonzero"/><path fill="none" d="M-1-3h24v24H-1z"/></svg>',"arc-pip-enable":'<svg viewBox="0 0 24 24"><path d="M19 11h-8v6h8zm4 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2m-2 .02H3V4.97h18z"></path></svg>',"arc-play":'<svg viewBox="0 0 12 13" xmlns="http://www.w3.org/2000/svg"><path d="M2.74609 0.816406L10.6211 5.62891C11.0039 5.875 11.25 6.3125 11.25 6.75C11.25 7.21484 11.0039 7.65234 10.6211 7.87109L2.74609 12.6836C2.33594 12.9297 1.81641 12.957 1.40625 12.7109C0.996094 12.4922 0.75 12.0547 0.75 11.5625V1.9375C0.75 1.47266 0.996094 1.03516 1.40625 0.816406C1.81641 0.570312 2.33594 0.570312 2.74609 0.816406Z" /></svg>',"arc-transparency":'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M1 1H3.8V3.8H1V1Z" fill="black"/><path d="M3.7998 3.7998H6.5998V6.5998H3.7998V3.7998Z" fill="black" fill-opacity="0.8"/><path d="M6.6001 1H9.4001V3.8H6.6001V1Z" fill="black" fill-opacity="0.6"/><path d="M12.2002 1H15.0002V3.8H12.2002V1Z" fill="black" fill-opacity="0.2"/><path d="M1 6.59961H3.8V9.39961H1V6.59961Z" fill="black"/><path d="M6.6001 6.59961H9.4001V9.39961H6.6001V6.59961Z" fill="black" fill-opacity="0.6"/><path d="M12.2002 6.59961H15.0002V9.39961H12.2002V6.59961Z" fill="black" fill-opacity="0.2"/><path d="M1 12.2002H3.8V15.0002H1V12.2002Z" fill="black"/><path d="M6.6001 12.2002H9.4001V15.0002H6.6001V12.2002Z" fill="black" fill-opacity="0.6"/><path d="M12.2002 12.2002H15.0002V15.0002H12.2002V12.2002Z" fill="black" fill-opacity="0.2"/><path d="M9.3999 3.7998H12.1999V6.5998H9.3999V3.7998Z" fill="black" fill-opacity="0.4"/><path d="M3.7998 9.40039H6.5998V12.2004H3.7998V9.40039Z" fill="black" fill-opacity="0.8"/><path d="M9.3999 9.40039H12.1999V12.2004H9.3999V9.40039Z" fill="black" fill-opacity="0.4"/></svg>',"arc-volume-high":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"/></svg>',"arc-volume-mid":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M333.1 34.8C344.6 40 352 51.4 352 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L163.8 352 96 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L298.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zm172 72.2c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C507.3 341.3 528 301.1 528 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C466.1 199.1 480 225.9 480 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C425.1 284.4 432 271 432 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5z"/></svg>',"arc-volume-low":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM412.6 181.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5z"/></svg>',"arc-volume-muted":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.1 386.2C556.7 352 576 306.3 576 256c0-60.1-27.7-113.8-70.9-149c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C507.3 170.7 528 210.9 528 256c0 39.1-15.6 74.5-40.9 100.5L449 326.6c19-17.5 31-42.7 31-70.6c0-30.1-13.9-56.9-35.4-74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C425.1 227.6 432 241 432 256s-6.9 28.4-17.7 37.3c-1.3 1-2.4 2.2-3.4 3.4L352 250.6 352 64c0-12.6-7.4-24-18.9-29.2s-25-3.1-34.4 5.3L197.8 129.8 38.8 5.1zM352 373.3L82.9 161.3C53.8 167.4 32 193.1 32 224l0 64c0 35.3 28.7 64 64 64l67.8 0L298.7 471.9c9.4 8.4 22.9 10.4 34.4 5.3S352 460.6 352 448l0-74.7z"/></svg>',"border-solid":'<svg width="100%" height="100%" viewBox="0 0 18 2" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="18" height="2" rx="1" fill="currentColor"/></svg>',"border-dashed":'<svg width="100%" height="100%" viewBox="0 0 19 2" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="5" height="2" fill="currentColor"/><rect x="7" width="5" height="2" fill="currentColor"/><rect x="14" width="5" height="2" fill="currentColor"/></svg>',"border-dotted":'<svg width="100%" height="100%" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="2" height="2" fill="currentColor"/><rect x="4" width="2" height="2" fill="currentColor"/><rect x="8" width="2" height="2" fill="currentColor"/><rect x="12" width="2" height="2" fill="currentColor"/></svg>',"corner-radius-top-left":'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">\n      <path d="M4.25 1C4.66563 1 5 1.33437 5 1.75C5 2.16562 4.66563 2.5 4.25 2.5H1.5V5.25C1.5 5.66563 1.16562 6 0.75 6C0.334375 6 0 5.66563 0 5.25V1.75C0 1.33437 0.334375 1 0.75 1H4.25ZM4.25 1C4.66563 1 5 1.33437 5 1.75C5 2.16562 4.66563 2.5 4.25 2.5H1.5V5.25C1.5 5.66563 1.16562 6 0.75 6C0.334375 6 0 5.66563 0 5.25V1.75C0 1.33437 0.334375 1 0.75 1H4.25ZM4.25 1C4.66563 1 5 1.33437 5 1.75C5 2.16562 4.66563 2.5 4.25 2.5H1.5V5.25C1.5 5.66563 1.16562 6 0.75 6C0.334375 6 0 5.66563 0 5.25V1.75C0 1.33437 0.334375 1 0.75 1H4.25ZM4.25 1C4.66563 1 5 1.33437 5 1.75C5 2.16562 4.66563 2.5 4.25 2.5H1.5V5.25C1.5 5.66563 1.16562 6 0.75 6C0.334375 6 0 5.66563 0 5.25V1.75C0 1.33437 0.334375 1 0.75 1H4.25Z" fill="black"/>\n      <path d="M0.75 10C0.334375 10 0 10.3344 0 10.75V14.25C0 14.6656 0.334375 15 0.75 15H4.25C4.66563 15 5 14.6656 5 14.25C5 13.8344 4.66563 13.5 4.25 13.5H1.5V10.75C1.5 10.3344 1.16562 10 0.75 10Z" fill="#C6C6C6"/>\n      <path d="M14 1.75C14 1.33437 13.6656 1 13.25 1H9.75C9.33437 1 9 1.33437 9 1.75C9 2.16562 9.33437 2.5 9.75 2.5H12.5V5.25C12.5 5.66563 12.8344 6 13.25 6C13.6656 6 14 5.66563 14 5.25V1.75Z" fill="#C6C6C6"/>\n      <path d="M13.25 10C12.8344 10 12.5 10.3344 12.5 10.75V13.5H9.75C9.33437 13.5 9 13.8344 9 14.25C9 14.6656 9.33437 15 9.75 15H13.25C13.6656 15 14 14.6656 14 14.25V10.75C14 10.3344 13.6656 10 13.25 10Z" fill="#C6C6C6"/>\n      </svg>',"corner-radius-top-right":'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">\n        <g clip-path="url(#clip0_8873_84280)">\n        <path d="M15 4.25C15 4.66563 14.6656 5 14.25 5C13.8344 5 13.5 4.66563 13.5 4.25L13.5 1.5L10.75 1.5C10.3344 1.5 10 1.16562 10 0.75C10 0.334375 10.3344 -2.03941e-07 10.75 -1.85773e-07L14.25 -3.27835e-08C14.6656 -1.4616e-08 15 0.334375 15 0.75L15 4.25ZM15 4.25C15 4.66563 14.6656 5 14.25 5C13.8344 5 13.5 4.66563 13.5 4.25L13.5 1.5L10.75 1.5C10.3344 1.5 10 1.16562 10 0.75C10 0.334375 10.3344 -2.03941e-07 10.75 -1.85773e-07L14.25 -3.27835e-08C14.6656 -1.4616e-08 15 0.334375 15 0.75L15 4.25ZM15 4.25C15 4.66563 14.6656 5 14.25 5C13.8344 5 13.5 4.66563 13.5 4.25L13.5 1.5L10.75 1.5C10.3344 1.5 10 1.16562 10 0.75C10 0.334375 10.3344 -2.03941e-07 10.75 -1.85773e-07L14.25 -3.27835e-08C14.6656 -1.4616e-08 15 0.334375 15 0.75L15 4.25ZM15 4.25C15 4.66563 14.6656 5 14.25 5C13.8344 5 13.5 4.66563 13.5 4.25L13.5 1.5L10.75 1.5C10.3344 1.5 10 1.16562 10 0.75C10 0.334375 10.3344 -2.03941e-07 10.75 -1.85773e-07L14.25 -3.27835e-08C14.6656 -1.4616e-08 15 0.334375 15 0.75L15 4.25Z" fill="black"/>\n        <path d="M6 0.75C6 0.334375 5.66563 -1.4616e-08 5.25 -3.27835e-08L1.75 -1.85773e-07C1.33437 -2.03941e-07 1 0.334375 1 0.75L1 4.25C1 4.66562 1.33437 5 1.75 5C2.16562 5 2.5 4.66562 2.5 4.25L2.5 1.5L5.25 1.5C5.66562 1.5 6 1.16562 6 0.75Z" fill="#C6C6C6"/>\n        <path d="M14.25 14C14.6656 14 15 13.6656 15 13.25L15 9.75C15 9.33437 14.6656 9 14.25 9C13.8344 9 13.5 9.33437 13.5 9.75L13.5 12.5L10.75 12.5C10.3344 12.5 10 12.8344 10 13.25C10 13.6656 10.3344 14 10.75 14L14.25 14Z" fill="#C6C6C6"/>\n        <path d="M6 13.25C6 12.8344 5.66562 12.5 5.25 12.5L2.5 12.5L2.5 9.75C2.5 9.33437 2.16563 9 1.75 9C1.33437 9 1 9.33437 1 9.75L1 13.25C1 13.6656 1.33437 14 1.75 14L5.25 14C5.66562 14 6 13.6656 6 13.25Z" fill="#C6C6C6"/>\n        </g>\n        <defs>\n        <clipPath id="clip0_8873_84280">\n        <rect width="14" height="16" fill="white" transform="translate(16) rotate(90)"/>\n        </clipPath>\n        </defs>\n        </svg>',"corner-radius-bottom-left":'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">\n        <g clip-path="url(#clip0_8873_84287)">\n        <path d="M1 9.75C1 9.33437 1.33438 9 1.75 9C2.16563 9 2.5 9.33437 2.5 9.75L2.5 12.5L5.25 12.5C5.66563 12.5 6 12.8344 6 13.25C6 13.6656 5.66563 14 5.25 14L1.75 14C1.33437 14 1 13.6656 1 13.25L1 9.75ZM1 9.75C1 9.33437 1.33438 9 1.75 9C2.16563 9 2.5 9.33437 2.5 9.75L2.5 12.5L5.25 12.5C5.66563 12.5 6 12.8344 6 13.25C6 13.6656 5.66563 14 5.25 14L1.75 14C1.33437 14 1 13.6656 1 13.25L1 9.75ZM1 9.75C1 9.33437 1.33438 9 1.75 9C2.16563 9 2.5 9.33437 2.5 9.75L2.5 12.5L5.25 12.5C5.66563 12.5 6 12.8344 6 13.25C6 13.6656 5.66563 14 5.25 14L1.75 14C1.33437 14 1 13.6656 1 13.25L1 9.75ZM1 9.75C1 9.33437 1.33438 9 1.75 9C2.16563 9 2.5 9.33437 2.5 9.75L2.5 12.5L5.25 12.5C5.66563 12.5 6 12.8344 6 13.25C6 13.6656 5.66563 14 5.25 14L1.75 14C1.33437 14 1 13.6656 1 13.25L1 9.75Z" fill="black"/>\n        <path d="M10 13.25C10 13.6656 10.3344 14 10.75 14L14.25 14C14.6656 14 15 13.6656 15 13.25L15 9.75C15 9.33437 14.6656 9 14.25 9C13.8344 9 13.5 9.33437 13.5 9.75L13.5 12.5L10.75 12.5C10.3344 12.5 10 12.8344 10 13.25Z" fill="#C6C6C6"/>\n        <path d="M1.75 8.94366e-09C1.33438 3.98738e-09 1 0.334375 1 0.75L1 4.25C1 4.66563 1.33437 5 1.75 5C2.16562 5 2.5 4.66563 2.5 4.25L2.5 1.5L5.25 1.5C5.66563 1.5 6 1.16563 6 0.75C6 0.334375 5.66563 5.5637e-08 5.25 5.06807e-08L1.75 8.94366e-09Z" fill="#C6C6C6"/>\n        <path d="M10 0.75C10 1.16563 10.3344 1.5 10.75 1.5L13.5 1.5L13.5 4.25C13.5 4.66563 13.8344 5 14.25 5C14.6656 5 15 4.66563 15 4.25L15 0.75C15 0.334375 14.6656 5.5637e-08 14.25 5.06807e-08L10.75 8.94366e-09C10.3344 3.98738e-09 10 0.334375 10 0.75Z" fill="#C6C6C6"/>\n        </g>\n        <defs>\n        <clipPath id="clip0_8873_84287">\n        <rect width="14" height="16" fill="white" transform="translate(0 14) rotate(-90)"/>\n        </clipPath>\n        </defs>\n        </svg>',"corner-radius-bottom-right":'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">\n      <path d="M9.75 15C9.33437 15 9 14.6656 9 14.25C9 13.8344 9.33438 13.5 9.75 13.5L12.5 13.5L12.5 10.75C12.5 10.3344 12.8344 10 13.25 10C13.6656 10 14 10.3344 14 10.75L14 14.25C14 14.6656 13.6656 15 13.25 15L9.75 15ZM9.75 15C9.33437 15 9 14.6656 9 14.25C9 13.8344 9.33438 13.5 9.75 13.5L12.5 13.5L12.5 10.75C12.5 10.3344 12.8344 10 13.25 10C13.6656 10 14 10.3344 14 10.75L14 14.25C14 14.6656 13.6656 15 13.25 15L9.75 15ZM9.75 15C9.33437 15 9 14.6656 9 14.25C9 13.8344 9.33438 13.5 9.75 13.5L12.5 13.5L12.5 10.75C12.5 10.3344 12.8344 10 13.25 10C13.6656 10 14 10.3344 14 10.75L14 14.25C14 14.6656 13.6656 15 13.25 15L9.75 15ZM9.75 15C9.33437 15 9 14.6656 9 14.25C9 13.8344 9.33438 13.5 9.75 13.5L12.5 13.5L12.5 10.75C12.5 10.3344 12.8344 10 13.25 10C13.6656 10 14 10.3344 14 10.75L14 14.25C14 14.6656 13.6656 15 13.25 15L9.75 15Z" fill="black"/>\n      <path d="M13.25 6C13.6656 6 14 5.66563 14 5.25L14 1.75C14 1.33437 13.6656 1 13.25 1L9.75 1C9.33438 1 9 1.33437 9 1.75C9 2.16562 9.33438 2.5 9.75 2.5L12.5 2.5L12.5 5.25C12.5 5.66562 12.8344 6 13.25 6Z" fill="#C6C6C6"/>\n      <path d="M6.55671e-08 14.25C2.9232e-08 14.6656 0.334375 15 0.75 15L4.25 15C4.66563 15 5 14.6656 5 14.25C5 13.8344 4.66563 13.5 4.25 13.5L1.5 13.5L1.5 10.75C1.5 10.3344 1.16563 10 0.75 10C0.334375 10 4.07882e-07 10.3344 3.71547e-07 10.75L6.55671e-08 14.25Z" fill="#C6C6C6"/>\n      <path d="M0.75 6C1.16563 6 1.5 5.66562 1.5 5.25L1.5 2.5L4.25 2.5C4.66563 2.5 5 2.16563 5 1.75C5 1.33437 4.66563 1 4.25 1L0.75 1C0.334375 1 4.07882e-07 1.33437 3.71547e-07 1.75L6.55671e-08 5.25C2.9232e-08 5.66562 0.334375 6 0.75 6Z" fill="#C6C6C6"/>\n      </svg>',"aspect-ratio-9:16":'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M21.4998 26.5V16V5.5C21.4998 5.00781 20.8331 4.625 20.4998 4.625H11.4998C10.9998 4.625 10.4998 5 10.4998 5.5L10.6667 16V26.5C10.6667 26.9375 11.1248 27.375 11.4998 27.375H20.4998C20.8331 27.375 21.4998 26.9375 21.4998 26.5ZM24 5.5V26.5C24 28.4141 22.7917 30 21.3333 30H10.6667C9.16667 30 8 28.4141 8 26.5V5.5C8 3.53125 9.16667 2 10.6667 2H21.3333C22.7917 2 24 3.53125 24 5.5Z" fill="currentColor"/></svg>',"aspect-ratio-16:9":'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M5.5 21.4998L16 21.4998L26.5 21.4998C26.9922 21.4998 27.375 20.8331 27.375 20.4998L27.375 11.4998C27.375 10.9998 27 10.4998 26.5 10.4998L16 10.6667L5.5 10.6667C5.0625 10.6667 4.625 11.1248 4.625 11.4998L4.625 20.4998C4.625 20.8331 5.0625 21.4998 5.5 21.4998ZM26.5 24L5.5 24C3.5859 24 2 22.7917 2 21.3333L2 10.6667C2 9.16667 3.5859 8 5.5 8L26.5 8C28.4688 8 30 9.16667 30 10.6667L30 21.3333C30 22.7917 28.4687 24 26.5 24Z" fill="currentColor"/></svg>',"aspect-ratio-2:3":'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M23.5 26.5V16V5.5C23.5 5.00781 22.8958 4.625 22.5 4.625H10.5C9.90625 4.625 9.5 5 9.5 5.5V16V26.5C9.5 26.9375 10.0547 27.375 10.5 27.375H22.5C22.8958 27.375 23.5 26.9375 23.5 26.5ZM26 5.5V26.5C26 28.4141 24.5651 30 22.8333 30H10.1667C8.38542 30 7 28.4141 7 26.5V5.5C7 3.53125 8.38542 2 10.1667 2H22.8333C24.5651 2 26 3.53125 26 5.5Z" fill="currentColor"/></svg>',"aspect-ratio-3:2":'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M5.5 22.5L16 22.5L26.5 22.5C26.9922 22.5 27.375 21.8958 27.375 21.5L27.375 9.5C27.375 8.90625 27 8.5 26.5 8.5L16 8.5L5.5 8.5C5.0625 8.5 4.625 9.05469 4.625 9.5L4.625 21.5C4.625 21.8958 5.0625 22.5 5.5 22.5ZM26.5 25L5.5 25C3.5859 25 2 23.5651 2 21.8333L2 9.16667C2 7.38542 3.5859 6 5.5 6L26.5 6C28.4688 6 30 7.38542 30 9.16667L30 21.8333C30 23.5651 28.4687 25 26.5 25Z" fill="currentColor"/></svg>',"border-color":'\n      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">\n        <g clip-path="url(#mon-border-color-icon-boundary-clip-path)" data-figma-skip-parse="true">\n          <foreignObject x="0" y="0" width="24" height="24">\n            <div xmlns="http://www.w3.org/1999/xhtml"\n              style="background:var(--fa-secondary-color);height:100%;width:100%;opacity:1"></div>\n          </foreignObject>\n        </g>\n        <path\n          d="M23 12C23 18.0751 18.0751 23 12 23V25C19.1797 25 25 19.1797 25 12H23ZM12 1C18.0751 1 23 5.92487 23 12H25C25 4.8203 19.1797 -1 12 -1V1ZM1 12C1 5.92487 5.92487 1 12 1V-1C4.8203 -1 -1 4.8203 -1 12H1ZM12 23C5.92487 23 1 18.0751 1 12H-1C-1 19.1797 4.8203 25 12 25V23ZM16.3333 12C16.3333 14.3932 14.3932 16.3333 12 16.3333V18.3333C15.4978 18.3333 18.3333 15.4978 18.3333 12H16.3333ZM12 7.66667C14.3932 7.66667 16.3333 9.60677 16.3333 12H18.3333C18.3333 8.5022 15.4978 5.66667 12 5.66667V7.66667ZM7.66667 12C7.66667 9.60677 9.60677 7.66667 12 7.66667V5.66667C8.5022 5.66667 5.66667 8.5022 5.66667 12H7.66667ZM12 16.3333C9.60677 16.3333 7.66667 14.3932 7.66667 12H5.66667C5.66667 15.4978 8.5022 18.3333 12 18.3333V16.3333Z"\n          fill="black"\n          fill-opacity="0.1"\n          mask="url(#mon-border-color-icon-outline-mask)"\n        />\n      </svg>',"custom-shapes-rectangle":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.75" y="3.25" width="18.5" height="13.5" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-square":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.75" y="0.75" width="18.5" height="18.5" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-circle":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="9.25" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-plus":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.41667 6.66667V0.75H12.5833V6.66667V7.41667H13.3333H19.25V12.5833H13.3333H12.5833V13.3333V19.25H7.41667V13.3333V12.5833H6.66667H0.75V7.41667H6.66667H7.41667V6.66667Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-chevron":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0763 18.25L1.20849 18.25L5.1303 10.3329L5.29521 10L5.1303 9.66709L1.2085 1.75L15.0763 1.75L19.163 10L15.0763 18.25Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-octagon":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.757121 6.42456L5.99251 0.936083L13.5754 0.757121L19.0639 5.99251L19.2429 13.5754L14.0075 19.0639L6.42456 19.2429L0.936083 14.0075L0.757121 6.42456Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-triangle":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.31131 17.75L10 2.97923L18.6887 17.75H1.31131Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-parallelogram":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.998432 18.25L5.78397 1.75H19.0016L14.216 18.25H0.998432Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-shield":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 19.25C5.86967 19.25 2.75 16.455 2.75 13.266L2.75 0.750001L17.25 0.75L17.25 13.266C17.25 16.455 14.1303 19.25 10 19.25Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-bookmark":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.70948 15.527L1.75 18.8714V0.75H18.25V18.8714L10.2905 15.527L10 15.405L9.70948 15.527Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-speech":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0481 15.445L4.5 18.8403V16.129V15.379H3.75H0.75V0.75H19.25V15.379H12.3558H12.1949L12.0481 15.445Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-burst":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 1.43692L11.2238 3.4368L11.5957 4.04466L12.2218 3.70422L14.2815 2.58415L14.3414 4.92798L14.3596 5.64039L15.072 5.65859L17.4159 5.71846L16.2958 7.77821L15.9553 8.40427L16.5632 8.77623L18.5631 10L16.5632 11.2238L15.9553 11.5957L16.2958 12.2218L17.4159 14.2815L15.072 14.3414L14.3596 14.3596L14.3414 15.072L14.2815 17.4159L12.2218 16.2958L11.5957 15.9553L11.2238 16.5632L10 18.5631L8.77623 16.5632L8.40427 15.9553L7.77821 16.2958L5.71846 17.4159L5.65859 15.072L5.64039 14.3596L4.92798 14.3414L2.58415 14.2815L3.70422 12.2218L4.04466 11.5957L3.4368 11.2238L1.43692 10L3.4368 8.77623L4.04466 8.40427L3.70422 7.77821L2.58415 5.71846L4.92798 5.65859L5.64039 5.64039L5.65859 4.92798L5.71846 2.58415L7.77821 3.70422L8.40427 4.04466L8.77623 3.4368L10 1.43692Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-star":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 1.74152L12.2033 6.35881L12.3786 6.72619L12.7821 6.77938L17.8543 7.44799L14.1438 10.9702L13.8486 11.2505L13.9227 11.6507L14.8542 16.6812L10.3578 14.2408L10 14.0467L9.64224 14.2408L5.14579 16.6813L6.07729 11.6507L6.1514 11.2505L5.85618 10.9702L2.14572 7.44799L7.21787 6.77938L7.62144 6.72619L7.79674 6.35881L10 1.74152Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-cloud":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8435 7.77179L15.7201 8.5053L16.4526 8.63477C17.9724 8.90342 19.25 10.4356 19.25 12.4205C19.25 14.6255 17.6897 16.25 15.9538 16.25H4.04624C2.31032 16.25 0.75 14.6255 0.75 12.4205C0.75 10.2156 2.31032 8.59108 4.04624 8.59108H4.0467H4.78646L4.79663 7.85139C4.82308 5.92674 6.18956 4.53505 7.68789 4.53505C8.36794 4.53505 9.00377 4.80993 9.51137 5.29221L10.1781 5.92566L10.6645 5.14517C11.2076 4.2736 12.0714 3.75 13.0057 3.75C14.5182 3.75 15.8974 5.16954 15.8974 7.1215C15.8974 7.34459 15.8788 7.56192 15.8435 7.77179Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-arrow":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.681 18.0566V14.0592V13.3092H10.931H0.75V6.69081H10.931H11.681V5.94081V1.94342L18.9875 10L11.681 18.0566Z" stroke=currentColor stroke-width="1.5"/></svg>',"folder-open":'<svg width="49" height="49"viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.125 11.625C1.125 8.75391 3.42188 6.375 6.375 6.375H15.9727C17.3672 6.375 18.6797 6.94922 19.6641 7.93359L21.8789 10.1484C22.8633 11.1328 24.1758 11.625 25.5703 11.625H35.25C38.1211 11.625 40.5 14.0039 40.5 16.875V22.125H12.9375C11.9531 22.125 11.1328 22.6172 10.6406 23.4375L1.45312 39.1875C1.20703 39.5977 1.125 40.0898 1.125 40.5V11.625ZM1.28906 41.5664C1.37109 41.6484 1.37109 41.7305 1.45312 41.8125C1.37109 41.8125 1.37109 41.7305 1.37109 41.6484L1.28906 41.5664ZM38.9414 41.6484L40.2539 39.3516C40.0078 40.1719 39.5977 40.9922 38.9414 41.6484Z" fill="#136EAB"/><path d="M12.9375 22.125H45.75C46.6523 22.125 47.5547 22.6172 47.9648 23.4375C48.457 24.2578 48.457 25.3242 47.9648 26.1445L38.7773 41.8945C38.2852 42.6328 37.4648 43.125 36.5625 43.125H3.75C2.76562 43.125 1.94531 42.6328 1.45312 41.8125C0.960938 40.9922 0.960938 40.0078 1.45312 39.1875L10.6406 23.4375C11.1328 22.6172 11.9531 22.125 12.9375 22.125Z" fill="#4BB4EE"/></svg>',"padding-top-bottom":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M15.9111 13.47C15.9111 12.8936 16.3777 12.4264 16.9532 12.4264C17.5287 12.4264 17.9953 12.8936 17.9953 13.47C17.9953 14.0464 17.5287 14.5137 16.9532 14.5137C16.3777 14.5137 15.9111 14.0464 15.9111 13.47Z" fill="black" fill-opacity="0.3"/>\n      <path d="M15.9111 9.9915C15.9111 9.41511 16.3777 8.94785 16.9532 8.94785C17.5287 8.94785 17.9953 9.41511 17.9953 9.9915C17.9953 10.5679 17.5287 11.0352 16.9532 11.0352C16.3777 11.0352 15.9111 10.5679 15.9111 9.9915Z" fill="black" fill-opacity="0.3"/>\n      <path d="M15.9111 6.51494C15.9111 5.93854 16.3777 5.47128 16.9532 5.47128C17.5287 5.47128 17.9953 5.93854 17.9953 6.51494C17.9953 7.09133 17.5287 7.55859 16.9532 7.55859C16.3777 7.55859 15.9111 7.09133 15.9111 6.51494Z" fill="black" fill-opacity="0.3"/>\n      <path d="M2.01093 13.47C2.01093 12.8936 2.47749 12.4264 3.05303 12.4264C3.62857 12.4264 4.09514 12.8936 4.09514 13.47C4.09514 14.0464 3.62857 14.5137 3.05303 14.5137C2.47749 14.5137 2.01093 14.0464 2.01093 13.47Z" fill="black" fill-opacity="0.3"/>\n      <path d="M2.01093 9.9915C2.01093 9.41511 2.47749 8.94785 3.05303 8.94785C3.62857 8.94785 4.09514 9.41511 4.09514 9.9915C4.09514 10.5679 3.62857 11.0352 3.05303 11.0352C2.47749 11.0352 2.01093 10.5679 2.01093 9.9915Z" fill="black" fill-opacity="0.3"/>\n      <path d="M2.01093 6.51494C2.01093 5.93854 2.47749 5.47128 3.05303 5.47128C3.62857 5.47128 4.09514 5.93854 4.09514 6.51494C4.09514 7.09133 3.62857 7.55859 3.05303 7.55859C2.47749 7.55859 2.01093 7.09133 2.01093 6.51494Z" fill="black" fill-opacity="0.3"/>\n      <path d="M2.00006 3.04366C2.00006 2.46726 2.46663 2 3.04217 2L16.958 2C17.5335 2 18.0001 2.46726 18.0001 3.04366C18.0001 3.62005 17.5335 4.08731 16.958 4.08731L3.04217 4.08731C2.46663 4.08731 2.00006 3.62005 2.00006 3.04366Z" fill="black"/>\n      <path d="M2.00006 16.9558C2.00006 16.3794 2.46663 15.9121 3.04217 15.9121L16.958 15.9121C17.5335 15.9121 18.0001 16.3794 18.0001 16.9558C18.0001 17.5322 17.5335 17.9994 16.958 17.9994L3.04217 17.9994C2.46663 17.9994 2.00006 17.5322 2.00006 16.9558Z" fill="black"/>\n      </svg>',"padding-left-right":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M6.53 15.9119C7.10639 15.9119 7.57365 16.3784 7.57365 16.954C7.57365 17.5295 7.10639 17.9961 6.53 17.9961C5.9536 17.9961 5.48634 17.5295 5.48634 16.954C5.48634 16.3784 5.9536 15.9119 6.53 15.9119Z" fill="black" fill-opacity="0.3"/>\n      <path d="M10.0085 15.9119C10.5849 15.9119 11.0522 16.3784 11.0522 16.954C11.0522 17.5295 10.5849 17.9961 10.0085 17.9961C9.43212 17.9961 8.96486 17.5295 8.96486 16.954C8.96486 16.3784 9.43212 15.9119 10.0085 15.9119Z" fill="black" fill-opacity="0.3"/>\n      <path d="M13.4851 15.9119C14.0615 15.9119 14.5287 16.3784 14.5287 16.954C14.5287 17.5295 14.0615 17.9961 13.4851 17.9961C12.9087 17.9961 12.4414 17.5295 12.4414 16.954C12.4414 16.3784 12.9087 15.9119 13.4851 15.9119Z" fill="black" fill-opacity="0.3"/>\n      <path d="M6.53 2.01149C7.10639 2.01149 7.57365 2.47806 7.57365 3.0536C7.57365 3.62914 7.10639 4.0957 6.53 4.0957C5.9536 4.0957 5.48634 3.62914 5.48634 3.0536C5.48634 2.47806 5.9536 2.01149 6.53 2.01149Z" fill="black" fill-opacity="0.3"/>\n      <path d="M10.0085 2.01149C10.5849 2.01149 11.0522 2.47806 11.0522 3.0536C11.0522 3.62914 10.5849 4.0957 10.0085 4.0957C9.43212 4.0957 8.96486 3.62914 8.96486 3.0536C8.96486 2.47806 9.43212 2.01149 10.0085 2.01149Z" fill="black" fill-opacity="0.3"/>\n      <path d="M13.4851 2.01149C14.0615 2.01149 14.5287 2.47806 14.5287 3.0536C14.5287 3.62914 14.0615 4.0957 13.4851 4.0957C12.9087 4.0957 12.4414 3.62914 12.4414 3.0536C12.4414 2.47806 12.9087 2.01149 13.4851 2.01149Z" fill="black" fill-opacity="0.3"/>\n      <path d="M16.9564 2C17.5328 2 18 2.46657 18 3.04211L18 16.9579C18 17.5334 17.5328 18 16.9564 18C16.38 18 15.9127 17.5334 15.9127 16.9579L15.9127 3.04211C15.9127 2.46657 16.38 2 16.9564 2Z" fill="black"/>\n      <path d="M3.04425 2C3.62065 2 4.08791 2.46657 4.08791 3.04211L4.08791 16.9579C4.08791 17.5334 3.62065 18 3.04425 18C2.46786 18 2.00059 17.5334 2.00059 16.9579L2.00059 3.04211C2.00059 2.46657 2.46786 2 3.04425 2Z" fill="black"/>\n      </svg>',"regular-microphone-sparkle":'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M0.5625 6.65625C0.5625 6.30078 0.835938 6 1.21875 6C1.57422 6 1.875 6.30078 1.875 6.65625V7.75C1.875 9.69141 3.43359 11.25 5.375 11.25C6.00391 11.25 6.60547 11.0859 7.125 10.7852C7.125 10.8125 7.125 10.8125 7.125 10.8125V10.8398C7.125 11.3047 7.34375 11.7148 7.72656 11.9609C7.20703 12.2617 6.63281 12.4531 6.03125 12.5352V13.4375H7.34375C7.69922 13.4375 8 13.7383 8 14.0938C8 14.4766 7.69922 14.75 7.34375 14.75H5.375H3.40625C3.02344 14.75 2.75 14.4766 2.75 14.0938C2.75 13.7383 3.02344 13.4375 3.40625 13.4375H4.71875V12.5352C2.36719 12.207 0.5625 10.2109 0.5625 7.75V6.65625ZM2.75 3.375C2.75 1.92578 3.92578 0.75 5.375 0.75C6.82422 0.75 8 1.92578 8 3.375V7.75C8 9.19922 6.82422 10.375 5.375 10.375C3.92578 10.375 2.75 9.19922 2.75 7.75V3.375ZM4.0625 3.375V7.75C4.0625 8.48828 4.63672 9.0625 5.375 9.0625C6.08594 9.0625 6.6875 8.48828 6.6875 7.75V3.375C6.6875 2.66406 6.08594 2.0625 5.375 2.0625C4.63672 2.0625 4.0625 2.66406 4.0625 3.375ZM8 10.8125C8 10.6211 8.10938 10.457 8.30078 10.375L10.625 9.5L11.4727 7.20312C11.5547 7.01172 11.7188 6.875 11.9375 6.875C12.1289 6.875 12.293 7.01172 12.375 7.20312L13.25 9.5L15.5469 10.375C15.7383 10.457 15.875 10.6211 15.875 10.8125C15.875 11.0312 15.7383 11.1953 15.5469 11.2773L13.25 12.125L12.375 14.4492C12.293 14.6406 12.1289 14.75 11.9375 14.75C11.7188 14.75 11.5547 14.6406 11.4727 14.4492L10.625 12.125L8.30078 11.2773C8.10938 11.1953 8 11.0312 8 10.8125ZM8.46484 9.39062C8.71094 8.89844 8.875 8.35156 8.875 7.75V6.65625C8.875 6.30078 9.14844 6 9.53125 6C9.88672 6 10.1875 6.30078 10.1875 6.65625V7.75C10.1875 7.91406 10.1602 8.07812 10.1602 8.24219L9.94141 8.84375L8.46484 9.39062Z" fill="black"/>\n      </svg>',"menu-border-width":'<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">\n      <path d="M15.5 13.4C15.5 13.5591 15.4539 13.7117 15.3719 13.8243C15.2898 13.9368 15.1785 14 15.0625 14L1.9375 14C1.82147 14 1.71019 13.9368 1.62814 13.8243C1.54609 13.7117 1.5 13.5591 1.5 13.4L1.5 11C1.5 10.8409 1.54609 10.6883 1.62814 10.5757C1.71019 10.4632 1.82147 10.4 1.9375 10.4L15.0625 10.4C15.1785 10.4 15.2898 10.4632 15.3719 10.5757C15.4539 10.6883 15.5 10.8409 15.5 11L15.5 13.4ZM15.5 7.4C15.5 7.55913 15.4539 7.71174 15.3719 7.82426C15.2898 7.93679 15.1785 8 15.0625 8L1.9375 8C1.82147 8 1.71019 7.93678 1.62814 7.82426C1.54609 7.71174 1.5 7.55913 1.5 7.4L1.5 6.2C1.5 6.04087 1.54609 5.88826 1.62814 5.77573C1.71019 5.66321 1.82147 5.6 1.9375 5.6L15.0625 5.6C15.1785 5.6 15.2898 5.66321 15.3719 5.77573C15.4539 5.88826 15.5 6.04087 15.5 6.2L15.5 7.4ZM15.5 2.6C15.5 2.75913 15.4539 2.91174 15.3719 3.02426C15.2898 3.13679 15.1785 3.2 15.0625 3.2L1.9375 3.2C1.82147 3.2 1.71019 3.13678 1.62814 3.02426C1.54609 2.91174 1.5 2.75913 1.5 2.6C1.5 2.44087 1.54609 2.28826 1.62814 2.17573C1.71019 2.06321 1.82147 2 1.9375 2L15.0625 2C15.1785 2 15.2898 2.06321 15.3719 2.17574C15.4539 2.28826 15.5 2.44087 15.5 2.6Z" fill="currentColor"/>\n    </svg>',"menu-corner-radius":'<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">\n      <path fill-rule="evenodd" clip-rule="evenodd" d="M4.80187 1H4.76667H2.27778C1.84823 1 1.5 1.34823 1.5 1.77778C1.5 2.20733 1.84823 2.55556 2.27778 2.55556H4.76667C6.52189 2.55556 7.79152 2.55616 8.79008 2.63775C9.77954 2.71859 10.4341 2.87505 10.9717 3.14897C11.9962 3.67094 12.8291 4.50384 13.351 5.52827C13.6249 6.06585 13.7814 6.72046 13.8623 7.70992C13.9438 8.70848 13.9444 9.97811 13.9444 11.7333V14.2222C13.9444 14.6517 14.2927 15 14.7222 15C15.1517 15 15.5 14.6517 15.5 14.2222V11.7333V11.6981C15.5 9.98553 15.5 8.65252 15.4126 7.58325C15.3239 6.49758 15.1413 5.61549 14.737 4.82206C14.0659 3.50493 12.9951 2.43407 11.6779 1.76295C10.8845 1.35868 10.0024 1.17606 8.91675 1.08736C7.84748 1 6.51447 1 4.80187 1Z" fill="currentColor"/>\n    </svg>',"menu-box-shadow":'<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">\n      <path d="M13.75 2.75V1H1.5V13.25H3.25V15H15.5V2.75H13.75ZM12.875 12.375H2.375V1.875H12.875V12.375Z" fill="currentColor"/>\n    </svg>',"menu-overlay":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">\n      <path d="M12.7445 3.78598C12.5683 3.81798 10.005 3.81798 9.92492 3.76999V1.00247H7.12136V3.78598C6.96116 3.81798 4.38188 3.81798 4.30178 3.76999V1.01847C4.18964 0.986478 1.5623 1.00247 1.51424 1.01847C1.4822 1.16245 1.51424 3.73799 1.51424 3.81798H4.30178V6.60148H1.51424C1.4822 6.77745 1.51424 9.337 1.51424 9.41699H4.30178V12.2165H1.51424C1.4822 12.3285 1.51424 14.6801 1.51424 15H4.3178V12.2325C4.38188 12.2325 6.96116 12.2165 7.10534 12.2325C7.12136 12.2965 7.12136 14.76 7.10534 15H9.94094V12.2325H12.7285C12.7445 12.2965 12.7445 14.6961 12.7445 15H15.5V12.2165H12.7445V9.41699H15.5V6.58549H12.7445V3.81798H15.5V1.00247H12.7445V3.78598ZM7.10534 9.40099C7.04126 9.40099 4.55811 9.41699 4.33382 9.40099C4.30178 9.337 4.30178 6.76146 4.33382 6.61748H7.10534V9.40099ZM9.92492 12.2005C9.84482 12.2325 7.28156 12.2325 7.12136 12.2165V9.41699H9.92492V12.2005ZM7.12136 6.58549V3.81798H9.92492C9.92492 3.89796 9.94094 6.47351 9.92492 6.58549H7.12136ZM12.7445 9.40099H9.94094C9.92492 9.337 9.92492 6.76146 9.94094 6.61748H12.7445V9.40099Z" fill="url(#paint0_linear_14204_11278)"/>\n      <defs>\n        <linearGradient id="paint0_linear_14204_11278" x1="2.5" y1="8" x2="14" y2="8" gradientUnits="userSpaceOnUse">\n          <stop offset="0" stop-color="currentColor" />\n          <stop offset="1" stop-opacity="0.2" stop-color="currentColor" />\n        </linearGradient>\n      </defs>\n    </svg>\n    ',"swatch-solid":'\n      <svg\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 24 24"\n        fill="none"\n      >\n        <g\n          clip-path="url(#mon-swatch-clip-path)"\n        >\n          <g>\n            <foreignObject\n              x="0"\n              y="0"\n              width="24"\n              height="24"\n            >\n              <div class="conic-gradient" style="background: var(--fa-primary-color, currentColor); height: 100%; width: 100%;"></div>\n            </foreignObject>\n          </g>\n        </g>\n        <circle\n          cx="12"\n          cy="12"\n          r="11.5"\n          stroke="black"\n          stroke-opacity="0.1"\n        />\n      </svg>\n    ',"swatch-split":'\n      <svg\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 24 24"\n        fill="none"\n      >\n        <g mask="url(#mon-swatch-clip-mask)">\n          <rect width="3.42857" height="3.42857" fill="var(--mon-swatch-checker-dark-color, #ebebeb)"/>\n          <rect y="6.85547" width="3.42857" height="3.42857" fill="var(--mon-swatch-checker-dark-color, #ebebeb)"/>\n          <rect y="13.7148" width="3.42857" height="3.42857" fill="var(--mon-swatch-checker-dark-color, #ebebeb)"/>\n          <rect y="20.5703" width="3.42857" height="3.42857" fill="var(--mon-swatch-checker-dark-color, #ebebeb)"/>\n          <rect x="3.42822" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="3.42822" y="6.85547" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="3.42822" y="13.7148" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="3.42822" y="20.5703" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="6.85742" y="3.42969" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="6.85742" y="10.2852" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="6.85742" y="17.1445" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="10.2856" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="17.1426" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="10.2856" y="6.85547" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="17.1426" y="6.85547" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="10.2856" y="13.7148" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="10.2856" y="20.5703" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="17.1426" y="13.7148" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="17.1426" y="20.5703" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="13.7144" y="3.42969" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="20.5718" y="3.42969" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="13.7144" y="10.2852" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="20.5718" y="10.2852" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="13.7144" y="17.1445" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="20.5718" y="17.1445" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="3.42822" y="3.42969" width="3.42857" height="3.42857" fill="var(--mon-swatch-checker-dark-color, #ebebeb)"/>\n          <rect x="3.42822" y="10.2852" width="3.42857" height="3.42857" fill="var(--mon-swatch-checker-dark-color, #ebebeb)"/>\n          <rect x="3.42822" y="17.1445" width="3.42857" height="3.42857" fill="var(--mon-swatch-checker-dark-color, #ebebeb)"/>\n          <rect x="6.85742" width="3.42857" height="3.42857" fill="var(--mon-swatch-checker-dark-color, #ebebeb)"/>\n          <rect x="6.85742" y="6.85547" width="3.42857" height="3.42857" fill="var(--mon-swatch-checker-dark-color, #ebebeb)"/>\n          <rect x="6.85742" y="13.7148" width="3.42857" height="3.42857" fill="var(--mon-swatch-checker-dark-color, #ebebeb)"/>\n          <rect x="6.85742" y="20.5703" width="3.42857" height="3.42857" fill="var(--mon-swatch-checker-dark-color, #ebebeb)"/>\n          <rect x="10.2856" y="3.42969" width="3.42857" height="3.42857" fill="var(--mon-swatch-checker-dark-color, #ebebeb)"/>\n          <rect x="17.1426" y="3.42969" width="3.42857" height="3.42857" fill="var(--mon-swatch-checker-dark-color, #ebebeb)"/>\n          <rect x="10.2856" y="10.2852" width="3.42857" height="3.42857" fill="var(--mon-swatch-checker-dark-color, #ebebeb)"/>\n          <rect x="17.1426" y="10.2852" width="3.42857" height="3.42857" fill="var(--mon-swatch-checker-dark-color, #ebebeb)"/>\n          <rect x="10.2856" y="17.1445" width="3.42857" height="3.42857" fill="var(--mon-swatch-checker-dark-color, #ebebeb)"/>\n          <rect x="17.1426" y="17.1445" width="3.42857" height="3.42857" fill="var(--mon-swatch-checker-dark-color, #ebebeb)"/>\n          <rect x="13.7144" width="3.42857" height="3.42857" fill="var(--mon-swatch-checker-dark-color, #ebebeb)"/>\n          <rect x="20.5718" width="3.42857" height="3.42857" fill="var(--mon-swatch-checker-dark-color, #ebebeb)"/>\n          <rect x="13.7144" y="6.85547" width="3.42857" height="3.42857" fill="var(--mon-swatch-checker-dark-color, #ebebeb)"/>\n          <rect x="20.5718" y="6.85547" width="3.42857" height="3.42857" fill="var(--mon-swatch-checker-dark-color, #ebebeb)"/>\n          <rect x="13.7144" y="13.7148" width="3.42857" height="3.42857" fill="var(--mon-swatch-checker-dark-color, #ebebeb)"/>\n          <rect x="20.5718" y="13.7148" width="3.42857" height="3.42857" fill="var(--mon-swatch-checker-dark-color, #ebebeb)"/>\n          <rect x="13.7144" y="20.5703" width="3.42857" height="3.42857" fill="var(--mon-swatch-checker-dark-color, #ebebeb)"/>\n          <rect x="20.5718" y="20.5703" width="3.42857" height="3.42857" fill="var(--mon-swatch-checker-dark-color, #ebebeb)"/>\n          <rect y="3.42969" width="3.42857" height="3.42857" fill="white"/>\n          <rect y="10.2852" width="3.42857" height="3.42857" fill="white"/>\n          <rect y="17.1445" width="3.42857" height="3.42857" fill="white"/>\n          <path d="M0 2C0 0.89543 0.895431 0 2 0H12V24H2C0.895431 24 0 23.1046 0 22V2Z" fill="var(--fa-primary-color, currentColor)" />\n          <g transform="translate(24, 0) scale(-1, 1)">\n            <path d="M0 2C0 0.89543 0.895431 0 2 0H12V24H2C0.895431 24 0 23.1046 0 22V2Z" fill="var(--fa-secondary-color, currentColor)" />\n          </g>\n          <circle cx="12" cy="12" r="11.5" stroke="black" stroke-opacity="0.2"/>\n        </g>\n      </svg>\n    ',"text-color":'\n      <svg\n        viewBox="0 0 24 24"\n        fill="none"\n        xmlns="http://www.w3.org/2000/svg"\n      >\n        <path\n          d="M12.6016 4.28516L17.1953 15.2227C17.332 15.5508 17.168 15.9336 16.8398 16.0977C16.5117 16.2344 16.1289 16.0703 15.9648 15.7422L15.0352 13.5H8.9375L8.00781 15.7422C7.87109 16.0703 7.46094 16.2344 7.13281 16.0977C6.80469 15.9336 6.64062 15.5508 6.77734 15.2227L11.3711 4.28516C11.4805 4.03906 11.7266 3.875 12 3.875C12.2461 3.875 12.4922 4.03906 12.6016 4.28516ZM14.4883 12.1875L12 6.22656L9.48438 12.1875H14.4883Z"\n          fill="var(--fa-primary-color, currentColor)"\n        />\n        <path\n          d="M1 20C1 18.8954 1.89543 18 3 18H21C22.1046 18 23 18.8954 23 20C23 21.1046 22.1046 22 21 22H3C1.89543 22 1 21.1046 1 20Z"\n          fill="var(--fa-secondary-color, black)"\n        />\n        <path\n          d="M1.5 20C1.5 19.1716 2.17157 18.5 3 18.5H21C21.8284 18.5 22.5 19.1716 22.5 20C22.5 20.8284 21.8284 21.5 21 21.5H3C2.17157 21.5 1.5 20.8284 1.5 20Z"\n          stroke="black"\n          stroke-opacity="0.2"\n        />\n      </svg>\n    ',"text-highlight":'\n      <svg\n        viewBox="0 0 24 24"\n        fill="none"\n        xmlns="http://www.w3.org/2000/svg"\n      >\n        <path\n          d="M9.15625 10.1211C9.15625 10.4766 9.01953 10.8047 8.77344 11.0508L7.70703 12.0898L9.12891 13.5117L10.168 12.4727C10.4141 12.2266 10.7422 12.0625 11.0977 12.0625H12.4102L12.8477 11.4609L9.75781 8.37109L9.15625 8.80859V10.1211ZM17.8516 4.48828C17.8789 4.46094 17.9062 4.40625 17.9062 4.37891C17.9062 4.32422 17.8789 4.29688 17.8516 4.24219L16.9766 3.36719C16.9219 3.33984 16.8945 3.3125 16.8398 3.3125C16.8125 3.3125 16.7578 3.33984 16.7305 3.36719L10.8516 7.60547L13.6133 10.3672L17.8516 4.48828ZM11.0977 13.375L9.89453 14.5781C9.59375 14.8789 9.18359 14.9609 8.82812 14.8516L7.92578 15.7539C7.76172 15.918 7.54297 16 7.29688 16H5C4.50781 16 4.125 15.6172 4.125 15.125V15.0156C4.125 14.7695 4.20703 14.5508 4.37109 14.3867L6.36719 12.3906C6.25781 12.0352 6.33984 11.5977 6.64062 11.3242L7.84375 10.1211V8.80859C7.84375 8.39844 8.03516 7.98828 8.39062 7.74219L15.9648 2.30078C16.2383 2.10938 16.5391 2 16.8398 2C17.2227 2 17.6055 2.16406 17.8789 2.4375L18.7812 3.33984C19.0547 3.61328 19.2188 3.99609 19.2188 4.37891C19.2188 4.67969 19.1094 4.98047 18.918 5.25391L13.4766 12.8281C13.2305 13.1836 12.8203 13.375 12.4102 13.375H11.0977ZM7.78906 14.0312L7.1875 13.4297L5.92969 14.6875H7.13281L7.78906 14.0312Z"\n          fill="var(--fa-primary-color, currentColor)"\n        />\n        <path\n          d="M1 20C1 18.8954 1.89543 18 3 18H21C22.1046 18 23 18.8954 23 20C23 21.1046 22.1046 22 21 22H3C1.89543 22 1 21.1046 1 20Z"\n          fill="var(--fa-secondary-color, black)"\n        />\n        <path\n          d="M1.5 20C1.5 19.1716 2.17157 18.5 3 18.5H21C21.8284 18.5 22.5 19.1716 22.5 20C22.5 20.8284 21.8284 21.5 21 21.5H3C2.17157 21.5 1.5 20.8284 1.5 20Z"\n          stroke="black"\n          stroke-opacity="0.2"\n        />\n      </svg>\n    ',"text-highlight-undefined":'\n      <svg\n        viewBox="0 0 24 24"\n        fill="none"\n        xmlns="http://www.w3.org/2000/svg"\n      >\n        <path\n          d="M9.15625 10.1211C9.15625 10.4766 9.01953 10.8047 8.77344 11.0508L7.70703 12.0898L9.12891 13.5117L10.168 12.4727C10.4141 12.2266 10.7422 12.0625 11.0977 12.0625H12.4102L12.8477 11.4609L9.75781 8.37109L9.15625 8.80859V10.1211ZM17.8516 4.48828C17.8789 4.46094 17.9062 4.40625 17.9062 4.37891C17.9062 4.32422 17.8789 4.29688 17.8516 4.24219L16.9766 3.36719C16.9219 3.33984 16.8945 3.3125 16.8398 3.3125C16.8125 3.3125 16.7578 3.33984 16.7305 3.36719L10.8516 7.60547L13.6133 10.3672L17.8516 4.48828ZM11.0977 13.375L9.89453 14.5781C9.59375 14.8789 9.18359 14.9609 8.82812 14.8516L7.92578 15.7539C7.76172 15.918 7.54297 16 7.29688 16H5C4.50781 16 4.125 15.6172 4.125 15.125V15.0156C4.125 14.7695 4.20703 14.5508 4.37109 14.3867L6.36719 12.3906C6.25781 12.0352 6.33984 11.5977 6.64062 11.3242L7.84375 10.1211V8.80859C7.84375 8.39844 8.03516 7.98828 8.39062 7.74219L15.9648 2.30078C16.2383 2.10938 16.5391 2 16.8398 2C17.2227 2 17.6055 2.16406 17.8789 2.4375L18.7812 3.33984C19.0547 3.61328 19.2188 3.99609 19.2188 4.37891C19.2188 4.67969 19.1094 4.98047 18.918 5.25391L13.4766 12.8281C13.2305 13.1836 12.8203 13.375 12.4102 13.375H11.0977ZM7.78906 14.0312L7.1875 13.4297L5.92969 14.6875H7.13281L7.78906 14.0312Z"\n          fill="var(--fa-primary-color, currentColor)"\n        />\n      </svg>\n    ',"regular-image-sparkle":'\n      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M0 5C0 3.90625 0.875 3 2 3H14C15.0938 3 16 3.90625 16 5V8.09375C15.8125 8.03125 15.6562 8 15.5 8C15.125 8 14.75 8.15625 14.5 8.375V5C14.5 4.75 14.25 4.5 14 4.5H2C1.71875 4.5 1.5 4.75 1.5 5V15V15.0312L1.625 14.8438L4.125 11.3438C4.28125 11.125 4.5 11 4.75 11C4.96875 11 5.21875 11.125 5.34375 11.3125L6.3125 12.6562L8.90625 9.3125C9.03125 9.125 9.25 9 9.5 9C9.71875 9 9.9375 9.125 10.0938 9.3125L11.9375 11.7188L11 12.0625C10.375 12.2812 10 12.875 10 13.5V13.5312C10 14.1562 10.375 14.7188 11 14.9688L13.2188 15.7812L13.6562 17H2C0.875 17 0 16.125 0 15V5ZM3.1875 6.75C3.46875 6.3125 3.9375 6 4.5 6C5.03125 6 5.53125 6.3125 5.78125 6.75C6.0625 7.21875 6.0625 7.8125 5.78125 8.25C5.53125 8.71875 5.03125 9 4.5 9C3.9375 9 3.46875 8.71875 3.1875 8.25C2.90625 7.8125 2.90625 7.21875 3.1875 6.75ZM11 13.5C11 13.2812 11.125 13.0938 11.3438 13L14 12L14.9688 9.375C15.0625 9.15625 15.25 9 15.5 9C15.7188 9 15.9062 9.15625 16 9.375L17 12L19.625 13C19.8438 13.0938 20 13.2812 20 13.5C20 13.75 19.8438 13.9375 19.625 14.0312L17 15L16 17.6562C15.9062 17.875 15.7188 18 15.5 18C15.25 18 15.0625 17.875 14.9688 17.6562L14 15L11.3438 14.0312C11.125 13.9375 11 13.75 11 13.5Z" fill="url(#paint0_linear_19093_1180)"/>\n        <defs>\n          <linearGradient id="paint0_linear_19093_1180" x1="0.243902" y1="20" x2="19.8657" y2="19.2606" gradientUnits="userSpaceOnUse">\n            <stop stop-color="#9C15FF"/>\n            <stop offset="1" stop-color="#1EB4FB"/>\n          </linearGradient>\n        </defs>\n      </svg>\n    ',"line-arrow":'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">\n      <path d="M1.46967 9.46967C1.17678 9.76256 1.17678 10.2374 1.46967 10.5303L6.24264 15.3033C6.53553 15.5962 7.01041 15.5962 7.3033 15.3033C7.59619 15.0104 7.59619 14.5355 7.3033 14.2426L3.06066 10L7.3033 5.75736C7.59619 5.46447 7.59619 4.98959 7.3033 4.6967C7.01041 4.40381 6.53553 4.40381 6.24264 4.6967L1.46967 9.46967ZM17 10.75C17.4142 10.75 17.75 10.4142 17.75 10C17.75 9.58579 17.4142 9.25 17 9.25V10.75ZM2 10V10.75H17V10V9.25H2V10Z" fill="#707070"/>\n    </svg>',"line-circle":'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">\n      <path d="M17 10.75C17.4142 10.75 17.75 10.4142 17.75 10C17.75 9.58579 17.4142 9.25 17 9.25L17 10.75ZM9 10L9 10.75L17 10.75L17 10L17 9.25L9 9.25L9 10Z" fill="#707070"/>\n      <path fill-rule="evenodd" clip-rule="evenodd" d="M6 6C8.20914 6 10 7.79086 10 10C10 12.2091 8.20914 14 6 14C3.79086 14 2 12.2091 2 10C2 7.79086 3.79086 6 6 6ZM6 7.5C4.61929 7.5 3.5 8.61929 3.5 10C3.5 11.3807 4.61929 12.5 6 12.5C7.38071 12.5 8.5 11.3807 8.5 10C8.5 8.61929 7.38071 7.5 6 7.5Z" fill="#707070"/>\n    </svg>',"line-square":'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">\n      <path d="M17 10.75C17.4142 10.75 17.75 10.4142 17.75 10C17.75 9.58579 17.4142 9.25 17 9.25L17 10.75ZM9 10L9 10.75L17 10.75L17 10L17 9.25L9 9.25L9 10Z" fill="#707070"/>\n      <path d="M10 14H2V6H10V14ZM3.5 7.5V12.5H8.5V7.5H3.5Z" fill="#707070"/>\n    </svg>',"line-diamond":'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">\n      <path d="M17 10.75C17.4142 10.75 17.75 10.4142 17.75 10C17.75 9.58579 17.4142 9.25 17 9.25L17 10.75ZM12 10L12 10.75L17 10.75L17 10L17 9.25L12 9.25L12 10Z" fill="#707070"/>\n      <path d="M7.65747 15.5651L1.99993 9.90754L7.65747 4.25L13.315 9.90754L7.65747 15.5651ZM7.65747 6.37132L4.12194 9.90685L7.65747 13.4424L11.193 9.90685L7.65747 6.37132Z" fill="#707070"/>\n    </svg>',"line-stop":'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">\n      <path d="M17 10.75C17.4142 10.75 17.75 10.4142 17.75 10C17.75 9.58579 17.4142 9.25 17 9.25L17 10.75ZM3 10L3 10.75L17 10.75L17 10L17 9.25L3 9.25L3 10Z" fill="#707070"/>\n      <path d="M3 6L3 14" stroke="#707070" stroke-width="1.5" stroke-linecap="round"/>\n    </svg>',"line-triangle":'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">\n\t    <defs>\n\t    \t<clipPath id="e6d286b7-1995-4639-ba8a-7354d534bfc3">\n\t\t    \t<path d="M2 10L9.5 14.3301V5.66987L2 10ZM17 10.75C17.4142 10.75 17.75 10.4142 17.75 10C17.75 9.58579 17.4142 9.25 17 9.25V10.75Z" />\n\t    \t</clipPath>\n    \t</defs>\n    \t<g clip-path="url(#e6d286b7-1995-4639-ba8a-7354d534bfc3)">\n\t      <path d="M2 10L9.5 14.3301V5.66987L2 10ZM17 10.75C17.4142 10.75 17.75 10.4142 17.75 10C17.75 9.58579 17.4142 9.25 17 9.25V10.75Z" stroke="#707070" stroke-width="3" fill="none" />\n    \t</g>\n\t    <path d="M8.75 10V10.75H17V10V9.25H8.75V10Z" fill="#707070"/>\n    </svg>',"line-triangle-filled":'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">\n      <path d="M2 10L9.5 14.3301V5.66987L2 10ZM17 10.75C17.4142 10.75 17.75 10.4142 17.75 10C17.75 9.58579 17.4142 9.25 17 9.25V10.75ZM8.75 10V10.75H17V10V9.25H8.75V10Z" fill="#707070"/>\n    </svg>',"line-circle-filled":'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">\n      <path d="M17 10.75C17.4142 10.75 17.75 10.4142 17.75 10C17.75 9.58579 17.4142 9.25 17 9.25L17 10.75ZM9 10L9 10.75L17 10.75L17 10L17 9.25L9 9.25L9 10Z" fill="#707070"/>\n      <path d="M6 6C8.20914 6 10 7.79086 10 10C10 12.2091 8.20914 14 6 14C3.79086 14 2 12.2091 2 10C2 7.79086 3.79086 6 6 6Z" fill="#707070"/>\n    </svg>',"line-square-filled":'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">\n      <path d="M17 10.75C17.4142 10.75 17.75 10.4142 17.75 10C17.75 9.58579 17.4142 9.25 17 9.25L17 10.75ZM9 10L9 10.75L17 10.75L17 10L17 9.25L9 9.25L9 10Z" fill="#707070"/>\n      <rect x="2" y="6" width="8" height="8" fill="#707070"/>\n    </svg>',"line-diamond-filled":'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">\n      <path d="M17 10.75C17.4142 10.75 17.75 10.4142 17.75 10C17.75 9.58579 17.4142 9.25 17 9.25L17 10.75ZM10 10L10 10.75L17 10.75L17 10L17 9.25L10 9.25L10 10Z" fill="#707070"/>\n      <rect x="7.65991" y="4.34314" width="8" height="8" transform="rotate(45 7.65991 4.34314)" fill="#707070"/>\n    </svg>'};function Bc(e){return Object.hasOwn(Tc,e)}function Mc(e){return e.startsWith(Cc)}p(Tc);var Lc=Pt.vs('<span class="glyph"> </span>');function Ac(e,t){Pt.VC(t,!1);const a=Pt.zg(),r=Pt.zg(),i=Pt.zg(),o=e=>{var t=Pt.Im(),a=Pt.es(t),r=e=>{var t=Pt.Im(),a=Pt.es(t);Pt.qy(a,(()=>Tc[l()]),!1,!1),Pt.BC(e,t)};Pt.if(a,(e=>{Bc(l())&&e(r)})),Pt.BC(e,t)},n=e=>{var t=Pt.Im(),a=Pt.es(t),r=e=>{var t=Lc(),a=Pt.jf(t,!0);Pt.cL(t),Pt.vN((e=>Pt.j(a,e)),[()=>function(e){return e.slice(Cc.length)}(l())],Pt.Xd),Pt.BC(e,t)};Pt.if(a,(e=>{Mc(l())&&e(r)})),Pt.BC(e,t)};let l=Pt._w(t,"icon",8),s=Pt._w(t,"style",8,"regular"),c=Pt._w(t,"size",8,14);Pt.M3((()=>Pt.iT(l())),(()=>{Pt.hZ(a,Bc(l()))})),Pt.M3((()=>Pt.iT(l())),(()=>{Pt.hZ(r,Mc(l()))})),Pt.M3((()=>Pt.iT(s())),(()=>{Pt.hZ(i,"duotone"===s())})),Pt.iq(),Pt.Ts();const d=Pt.Xd((()=>Pt.Jt(a)?o:Pt.Jt(r)?n:`fa-${s()} fa-${l()}`));!function(e,t){Pt.VC(t,!1);let a=Pt._w(t,"icon",8,"fa-regular fa-circle-dashed"),r=Pt._w(t,"color",8,void 0),i=Pt._w(t,"size",8,void 0),o=Pt._w(t,"duotone",8,void 0),n=Pt._w(t,"children",8,void 0);const l="string"==typeof a()&&a().length>0;Pt.Ts();var s=gs();let c;var d=Pt.jf(s),p=e=>{var t=Pt.Im(),r=Pt.es(t);Pt.UA(r,a),Pt.BC(e,t)},h=(e,t)=>{var r=e=>{var t=us();Pt.vN((()=>Pt.ys(t,1,Pt.$z(a())))),Pt.BC(e,t)},i=e=>{var t=Pt.Im(),a=Pt.es(t);Pt.UA(a,(()=>n()??Pt.lQ)),Pt.BC(e,t)};Pt.if(e,(e=>{l?e(r):e(i,!1)}),t)};Pt.if(d,(e=>{a()&&"string"!=typeof a()?e(p):e(h,!1)})),Pt.cL(s),Pt.XI(s,(e=>ms?.(e))),Pt.vN((e=>{Pt.Jk(s,"data-duotone",o()||void 0),c=Pt.hg(s,"",c,{"--arc-icon-size":e,"--arc-icon-color":r()})}),[()=>hs(i())],Pt.Xd),Pt.BC(e,s),Pt.uY()}(e,{get icon(){return Pt.Jt(d)},get size(){return c()},get duotone(){return Pt.Jt(i)}}),Pt.uY()}Pt.vs("<div><!></div>"),Pt.vs('<div class="scrollbar svelte-1hrnjzb" aria-hidden="true"><div class="handle svelte-1hrnjzb"></div> <input tabindex="-1" type="range" class="svelte-1hrnjzb"></div>'),Pt.vs("<!> <!>",1),Pt.vs('<div class="panel-tabs svelte-1uez1n9"><!></div>'),Pt.vs('<div class="panel svelte-1uez1n9"><!> <!></div>'),Pt.vs('<div class="panel-actions svelte-ir5tsd"><!></div>'),Pt.vs('<header><div class="panel-heading svelte-ir5tsd"><!></div> <!></header>');var Dc=Pt.vs('<div class="tooltip-text svelte-1yda0aw"><!></div>');const Fc={hash:"svelte-1yda0aw",code:".tooltip-text.svelte-1yda0aw {white-space:nowrap;width:max-content;padding:var(--arc-space-1-5);\n\n    /* arc-font-body/tight/sm-strong */font-family:var(--arc-font-family-body);font-size:var(--arc-font-size-12);font-style:normal;font-weight:var(--arc-font-weight-600);line-height:120%; /* 14.4px */}"};Pt.vs('<span class="text-label svelte-1l0xkh1"> </span>'),Pt.vs('<!> <div class="mon-sr-only svelte-1l0xkh1"><!></div>',1),Pt.vs("<div><!> <!></div>"),Pt.vs('<div><input type="number" class="input-value svelte-gx1obz"> <div class="input-button dec svelte-gx1obz"><!></div> <div class="input-button inc svelte-gx1obz"><!></div></div>'),Pt.vs("<button><!></button>"),Pt.vs('<div><!> <input class="radio-input svelte-1nbcryn" type="radio"></div>'),Pt.vs('<div class="radio-icon-group svelte-1nbcryn" role="radiogroup"></div>'),Pt.vs('<div class="text-input-wrapper svelte-dw7kuc"><div class="text-input-prefix svelte-dw7kuc"><div class="text-input-lead-icon svelte-dw7kuc"><!></div></div> <input> <div class="actions svelte-dw7kuc"><!></div></div>'),Pt.vs('<div class="slider-container svelte-7a6v09"><div class="slider-wrapper svelte-7a6v09"><div class="slider-track svelte-7a6v09"></div> <input type="range" class="slider svelte-7a6v09"></div> <!></div>'),Pt.vs("<!> ",1),Pt.vs("<mon-menu-item><!> </mon-menu-item>",2),Pt.vs("<mon-menu></mon-menu>",2),Pt.vs('<div class="mon-split-button mon-tooltip-anchor svelte-10dj79p"><div class="mon-split-button-primary svelte-10dj79p"><!></div> <div class="mon-split-button-divider svelte-10dj79p"></div> <div><div class="mon-split-button-secondary svelte-10dj79p"><!></div> <!></div></div>');var zc=Pt.vs("<div><!></div>");const Vc={hash:"svelte-1i06x9o",code:".suspense.--loading.svelte-1i06x9o {visibility:hidden;}"};Pt.vs('<label><input class="input mon-visually-hidden svelte-5dh97r"> <!></label>'),Pt.vs('<div class="tag-group svelte-2750ar"><!></div>'),Pt.vs("<input>"),Pt.vs('<label class="toggle-group-option mon-tooltip-anchor svelte-13t9a5s"><!> <input class="svelte-13t9a5s"> <span class="icon-wrapper svelte-13t9a5s"><!></span></label>'),Pt.vs('<div class="toggle-group-container svelte-13t9a5s"></div>');var $c=a(2602),Jc=a.n($c);function Pc(e,t){const a=structuredClone(t);for(const t in a)if(Object.hasOwn(e,t)){const r=e[t];"string"==typeof r&&r&&(a[t]=r)}return a}var Rc=Pt.vs('<div class="transcript-panel-focuser" tabindex="0"></div>'),Zc=Pt.vs('<div class="audio-player__transcript-button-holder mon-tooltip-anchor svelte-118nwps"><!> <!></div> <!>',1),Oc=Pt.vs('<div class="audio-player svelte-118nwps" aria-live="off"><div class="audio-player__housing svelte-118nwps" role="group"><button class="audio-player__play svelte-118nwps" type="button"><!></button> <div class="audio-player__slider-wrapper svelte-118nwps"><input aria-label="audio seek" class="audio-player__slider svelte-118nwps" type="range" step="any"> <div class="audio-player__slider-progress svelte-118nwps"></div></div> <div class="audio-player__timer svelte-118nwps" role="timer"> </div></div> <audio class="audio-player__audio-element"></audio> <!></div>');const _c={hash:"svelte-118nwps",code:".audio-player.svelte-118nwps {display:flex;min-width:0;flex:1;padding-block:4px;padding-inline:12px;height:40px;align-items:center;border-radius:100px;background-color:white;pointer-events:initial;}.audio-player__housing.svelte-118nwps {--slider-thumb-size: 10px;--slider-thumb-bg: black;--slider-thumb-border: 1px solid rgb(0 0 0 / 10%);--slider-thumb-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--slider-track-height: 5px;align-items:center;display:flex;flex-flow:row nowrap;width:100%;-webkit-user-select:none;user-select:none;}.audio-player__play.svelte-118nwps {cursor:pointer;display:flex;align-items:center;justify-content:center;color:black;}.audio-player__play.svelte-118nwps {-webkit-appearance:none;appearance:none;border:none;background:none;font-size:16px;padding-inline:0;}.audio-player__slider-wrapper.svelte-118nwps {position:relative;height:32px;min-width:0;flex:1;display:flex;--pad-left: 12.5px;--pad-right: 12px;}.audio-player__slider.svelte-118nwps {-webkit-appearance:none;appearance:none;background:transparent;cursor:pointer;margin:0;min-width:0;flex:1;height:100%;padding-inline-start:var(--pad-left);padding-inline-end:var(--pad-right);}.audio-player__transcript-button-holder.svelte-118nwps {display:flex;}\n\n  /***** Chrome, Safari, Opera and Edge Chromium styles *****/.audio-player__slider.svelte-118nwps::-webkit-slider-thumb {-webkit-appearance:none;appearance:none;width:var(--slider-thumb-size);height:var(--slider-thumb-size);background:var(--slider-thumb-bg);border:var(--slider-thumb-border);border-radius:50%;box-shadow:var(--slider-thumb-box-shadow);cursor:pointer;margin-top:calc(-1 * var(--slider-track-height) / 2);}.audio-player__slider.svelte-118nwps::-webkit-slider-runnable-track {background-color:rgb(0 0 0 / 10%);border-radius:var(--slider-track-height);height:var(--slider-track-height);}\n\n  /******** Firefox styles ********/.audio-player__slider.svelte-118nwps::-moz-range-thumb {appearance:none;width:var(--slider-thumb-size);height:var(--slider-thumb-size);background:var(--slider-thumb-bg);border:var(--slider-thumb-border);border-radius:50%;box-shadow:var(--slider-thumb-box-shadow);cursor:pointer;margin-top:calc(-1 * var(--slider-track-height) / 2);}.audio-player__slider.svelte-118nwps::-moz-range-track {background-color:rgb(0 0 0 / 10%);border-radius:var(--slider-track-height);height:var(--slider-track-height);}.audio-player__slider-progress.svelte-118nwps {background:linear-gradient(\n      to right,\n      var(--slider-thumb-bg) var(--slider-progress-percent),\n      transparent 0%\n    );border-radius:var(--slider-track-height);height:var(--slider-track-height);position:absolute;inset-inline-start:var(--pad-left);inset-inline-end:var(--pad-right);inset-block:0 0;margin-top:auto;margin-bottom:auto;min-width:var(--slider-thumb-size);pointer-events:none;}.audio-player__timer.svelte-118nwps {font-size:14px;font-family:Inter, system-ui, sans-serif;font-weight:600;white-space:nowrap;text-align:right;width:40px;}"};function jc(e,t){Pt.VC(t,!1),Pt.kZ(e,_c);const[a,r]=Pt.DZ(),i=()=>Pt.Hz(S,"$labels",a),o=()=>Pt.Hz(v,"$transcriptPanelAdapter",a),n=Pt.zg(),c=Pt.zg(),d=Pt.zg(),p=Pt.zg(),h=Pt.zg(),m=Pt.zg(),u=Pt.zg(),g=Pt.zg(),{mediaElements:f,transcriptPanelAdapter:v,labels:S}=dp(),I=!0,b={a11yMediaPause:"Pause",a11yMediaPlay:"Play",a11yGroupAudioPlayer:"Audio player"};let x=Pt._w(t,"item",8),w=Pt._w(t,"mediaSrc",8),y=Pt.zg(),k=Pt._w(t,"onPlay",8),C=Pt._w(t,"onPause",8),T=Pt._w(t,"onEnded",8),B=Pt._w(t,"mediaStoreAdapter",8),M=Pt._w(t,"onMediaProgress",8,(()=>{})),L=Pt._w(t,"altText",8);(0,Qs.onMount)((()=>(f?.set(x().id,Pt.Jt(y)),()=>{f?.delete(x().id)}))),(0,Qs.onMount)((()=>B()?.subscribe(x().id,(()=>{Pt.hZ(Z,!0)}))));let A=Pt.zg(),D=Pt.zg(),F=Pt.zg(),z=Pt.zg("0"),V=Pt.zg(),$=Pt.zg(),J=!1,P=Pt.zg(0),R=Pt.zg(0),Z=Pt.zg(!0),O=Pt.zg(!1);const _=e=>{e.preventDefault(),e.stopPropagation(),Pt.hZ(Z,!Pt.Jt(Z))};let j=Pt.zg(),Y=Pt.zg(),H=Pt.zg();const E=Jc()(M(),2e3),G=e=>{Pt.hZ(P,e<0?Math.max(Pt.Jt(P)+e,0):Math.min(Pt.Jt(P)+e,Pt.Jt(R)))},X=()=>{o()&&Pt.Jt(F)&&o().togglePanel({itemId:x().id,refocusTarget:Pt.Jt(F),transcript:x().states.default.transcript})},q=()=>{Pt.hZ(O,!0)},N=e=>{e.relatedTarget!==Pt.Jt($)&&Pt.hZ(O,!1)},U=e=>{o()&&(e.preventDefault(),o().focusPanel(x().id)),Pt.hZ(O,!1)};Pt.M3((()=>i()),(()=>{Pt.hZ(n,Pc(i(),b))})),Pt.M3((()=>(Pt.Jt(c),Pt.Jt(d),Pt.Jt(p),Pt.Jt(n))),(()=>{var e;e=Pt.Jt(n),Pt.hZ(c,e.a11yMediaPlay),Pt.hZ(d,e.a11yMediaPause),Pt.hZ(p,e.a11yGroupAudioPlayer)})),Pt.M3((()=>(Pt.Jt(V),Pt.Jt(z),Pt.Jt(R),Pt.iT(x()),Pt.Jt(Z),Pt.Jt(P))),(()=>{if(Pt.Jt(V)){const e=Number(Pt.Jt(z))/Pt.Jt(R)*100;Pt.Jt(V).style.setProperty("--slider-progress-percent",`${e}%`),E({mondrianItemId:x().id,progress:e,duration:Pt.Jt(R),active:!Pt.Jt(Z)})}Pt.hZ(j,Math.round(Pt.Jt(R)-Pt.Jt(P)))})),Pt.M3((()=>(Pt.Jt(j),s)),(()=>{Pt.hZ(Y,l(Pt.Jt(j),!1)),Pt.hZ(H,s(Pt.Jt(j)))})),Pt.M3((()=>Pt.iT(x())),(()=>{Pt.hZ(h,!!x().states.default.transcript)})),Pt.M3((()=>o()),(()=>{Pt.hZ(m,!o())})),Pt.M3((()=>(o(),Pt.iT(x()))),(()=>{Pt.hZ(u,o()?.isPanelOpenForItem(x().id))})),Pt.M3((()=>(o(),Pt.Jt(u))),(()=>{Pt.hZ(g,o()?Pt.Jt(u)?"Hide transcript":"Show transcript":"Preview in lesson to view transcript")})),Pt.iq(),Pt.Ts();var W=Oc(),Q=Pt.jf(W);Pt.Jk(Q,"aria-hidden",!1),Pt.Jk(Q,"tabindex",0);var K=Pt.jf(Q);Pt.Jk(K,"tabindex",0);var ee=Pt.jf(K);const te=Pt.Xd((()=>Pt.Jt(Z)?"arc-play":"arc-pause"));Ac(ee,{size:"14px",get icon(){return Pt.Jt(te)}}),Pt.cL(K),Pt.Lc(K,(e=>Pt.hZ(A,e)),(()=>Pt.Jt(A)));var ae=Pt.AD(K,2),re=Pt.jf(ae);Pt.R0(re),Pt.Jk(re,"min",0),Pt.Lc(re,(e=>Pt.hZ(D,e)),(()=>Pt.Jt(D)));var ie=Pt.AD(re,2);Pt.Lc(ie,(e=>Pt.hZ(V,e)),(()=>Pt.Jt(V))),Pt.cL(ae);var oe=Pt.AD(ae,2),ne=Pt.jf(oe,!0);Pt.cL(oe),Pt.cL(Q);var le=Pt.AD(Q,2);Pt.Lc(le,(e=>Pt.hZ(y,e)),(()=>Pt.Jt(y)));var se=Pt.AD(le,2),ce=e=>{var t=Zc(),a=Pt.es(t),r=Pt.jf(a);!function(e,t){Pt.VC(t,!1),Pt.kZ(e,Fc);let a=Pt._w(t,"id",24,oc),r=Pt._w(t,"position",8,"s"),i=Pt._w(t,"disabled",8,!1),o=Pt._w(t,"children",8);Pt.Ts(),function(e,t){Pt.VC(t,!1),Pt.kZ(e,hc);let a,r=Pt._w(t,"id",8),i=Pt._w(t,"position",8),o=Pt._w(t,"disabled",8,!1),n=Pt._w(t,"children",8),l=Pt._w(t,"inverse",8),s=Pt._w(t,"offset",8,6),c=Pt._w(t,"pointerEvents",8,!1),d=Pt._w(t,"styleVariant",8),p=Pt.zg(),h=Pt.zg(!1);(0,Qs.onMount)((()=>{const e=Pt.Jt(p).closest(".mon-tooltip-anchor");if(e){const t={passive:!0},r=[Qd("mouseenter",e,(()=>{Pt.hZ(h,!0)}),t),Qd("mouseleave",e,(()=>{Pt.hZ(h,!1)}),t)];return a=e,()=>{for(const e of r)e()}}}));let m=Pt.zg("top"),u=Pt.zg(),g=Pt.zg(),f=Pt.zg();Pt.Ts();var v=pc(),S=Pt.es(v);Pt.Lc(S,(e=>Pt.hZ(p,e)),(()=>Pt.Jt(p)));var I=Pt.AD(S,2),b=e=>{var t=dc(),p=Pt.jf(t),h=e=>{var t=cc(),a=Pt.jf(t),r=Pt.jf(a);Pt.cL(a),Pt.cL(t),Pt.vN((()=>Pt.Jk(r,"d",Pt.Jt(f)))),Pt.BC(e,t)};Pt.if(p,(e=>{c()&&Pt.Jt(f)&&e(h)}));var v=Pt.AD(p,2),S=Pt.jf(v);let I;var b=Pt.jf(S),x=Pt.jf(b),w=Pt.jf(x);Pt.cL(x);var y=Pt.AD(x);Pt.cL(b),Pt.cL(S),Pt.cL(v);var k=Pt.AD(v,2);Pt.UA(k,n),Pt.cL(t),Pt.XI(t,(e=>(e=>{const t=e.querySelector(".arrow");ap(e,ep.Tooltip);const r=(0,Zl.ll)(a,e,(async function(){const{x:r,y:o,placement:n,middlewareData:l}=await(0,Zl.rD)(a,e,{middleware:[(0,Zl.cY)(s()),(0,Zl.UU)({mainAxis:!0,crossAxis:!1}),(0,Zl.BN)(),(0,Zl.UE)({element:t,padding:8}),c()?sc():null],strategy:"fixed",placement:nc[i()]});if(Pt.hZ(m,n),e.style.left=r+"px",e.style.top=o+"px",l.arrow){const{x:e,y:t}=l.arrow;Pt.hZ(u,e),Pt.hZ(g,t)}Pt.hZ(f,l.travelBoxes?.path)}),{animationFrame:!0});return{destroy(){r(),rp(e)}}})?.(e))),Pt.vN((()=>{Pt.Jk(t,"data-pointer-events",c()?"":void 0),Pt.Jk(t,"data-inverse",l()?"":void 0),Pt.Jk(t,"aria-hidden",o()||null),Pt.Jk(t,"id",r()),Pt.Jk(t,"data-placement",Pt.Jt(m)),Pt.Jk(v,"data-variant",d()),I=Pt.hg(S,"",I,{left:Pt.Jt(u)&&`${Pt.Jt(u)}px`,top:Pt.Jt(g)&&`${Pt.Jt(g)}px`}),Pt.Jk(w,"id",`mon-popover-shadow-${r()??""}`),Pt.Jk(y,"data-filter",`url(#mon-popover-shadow-${r()??""})`)})),Pt.kY(3,t,(()=>lc)),Pt.BC(e,t)};Pt.if(I,(e=>{!o()&&Pt.Jt(h)&&e(b)})),Pt.BC(e,v),Pt.uY()}(e,{get id(){return a()},get position(){return r()},get disabled(){return i()},inverse:!0,styleVariant:"tooltip",children:(e,t)=>{var a=Dc(),r=Pt.jf(a);Pt.UA(r,o),Pt.cL(a),Pt.BC(e,a)},$$slots:{default:!0}}),Pt.uY()}(r,{position:"n",children:(e,t)=>{Pt.K2();var a=Pt.NH();Pt.vN((()=>Pt.j(a,Pt.Jt(g)))),Pt.BC(e,a)},$$slots:{default:!0}}),function(e,t){Pt.VC(t,!1);const a=Pt.zg(),r=e=>{var t=ss(),a=Pt.es(t),r=Pt.jf(a);Pt.UA(r,v),Pt.cL(a);var i=Pt.AD(a,2),n=e=>{var t=ls();Pt.BC(e,t)};Pt.if(i,(e=>{o()&&e(n)})),Pt.BC(e,t)};let i=Pt._w(t,"isActive",8,void 0),o=Pt._w(t,"isProcessing",8,void 0),n=Pt._w(t,"layout",8,void 0),l=Pt._w(t,"shape",8,void 0),s=Pt._w(t,"size",8,"lg"),c=Pt._w(t,"variant",8,"primary"),d=Pt._w(t,"disabled",8,!1),p=Pt._w(t,"href",8,void 0),h=Pt._w(t,"type",8,"button"),m=Pt._w(t,"ariaLabel",8,void 0),u=Pt._w(t,"popovertarget",8,void 0),g=Pt._w(t,"target",8,void 0),f=Pt._w(t,"rel",8,void 0),v=Pt._w(t,"children",8),S=Pt._w(t,"buttonRef",12,null);Pt.M3((()=>(Pt.iT(o()),Pt.iT(d()))),(()=>{Pt.hZ(a,o()||d())})),Pt.iq(),Pt.Ts();var I=Pt.Im(),b=Pt.es(I),x=e=>{var d=cs(),h=Pt.jf(d);r(h),Pt.cL(d),Pt.Lc(d,(e=>S(e)),(()=>S())),Pt.XI(d,(e=>ns?.(e))),Pt.QZ((()=>Pt.f0("click",d,(function(e){Pt.Ib.call(this,t,e)})))),Pt.QZ((()=>Pt.f0("focusin",d,(function(e){Pt.Ib.call(this,t,e)})))),Pt.QZ((()=>Pt.f0("focusout",d,(function(e){Pt.Ib.call(this,t,e)})))),Pt.vN((()=>{Pt.Jk(d,"href",p()),Pt.Jk(d,"data-variant",c()),Pt.Jk(d,"data-layout",n()),Pt.Jk(d,"data-shape",l()),Pt.Jk(d,"data-size",s()),Pt.Jk(d,"data-is-active",i()||null),Pt.Jk(d,"data-is-processing",o()||null),Pt.Jk(d,"aria-disabled",Pt.Jt(a)),Pt.Jk(d,"aria-label",m()),Pt.Jk(d,"target",g()),Pt.Jk(d,"rel",f())})),Pt.BC(e,d)},w=e=>{var d=ds(),p=Pt.jf(d);r(p),Pt.cL(d),Pt.Lc(d,(e=>S(e)),(()=>S())),Pt.XI(d,(e=>ns?.(e))),Pt.QZ((()=>Pt.f0("click",d,(function(e){Pt.Ib.call(this,t,e)})))),Pt.QZ((()=>Pt.f0("focusin",d,(function(e){Pt.Ib.call(this,t,e)})))),Pt.QZ((()=>Pt.f0("focusout",d,(function(e){Pt.Ib.call(this,t,e)})))),Pt.vN((()=>{Pt.Jk(d,"type",h()),Pt.Jk(d,"data-variant",c()),Pt.Jk(d,"data-layout",n()),Pt.Jk(d,"data-shape",l()),Pt.Jk(d,"data-size",s()),Pt.Jk(d,"data-is-active",i()||null),Pt.Jk(d,"data-is-processing",o()||null),d.disabled=Pt.Jt(a),Pt.Jk(d,"aria-disabled",Pt.Jt(a)),Pt.Jk(d,"aria-label",m()),Pt.Jk(d,"popovertarget",u())})),Pt.BC(e,d)};Pt.if(b,(e=>{p()?e(x):e(w,!1)})),Pt.BC(e,I),Pt.uY()}(Pt.AD(r,2),{variant:"tertiary",get ariaLabel(){return Pt.Jt(g)},size:"md",layout:"icon",shape:"square",get disabled(){return Pt.Jt(m)},get buttonRef(){return Pt.Jt(F)},set buttonRef(e){Pt.hZ(F,e)},$$events:{click:X,focusin:q,focusout:N},children:(e,t)=>{Ac(e,{size:"14px",icon:"arc-transcription"})},$$slots:{default:!0},$$legacy:!0}),Pt.cL(a);var i=Pt.AD(a,2),o=e=>{var t=Rc();Pt.Lc(t,(e=>Pt.hZ($,e)),(()=>Pt.Jt($))),Pt.f0("focusin",t,U),Pt.BC(e,t)};Pt.if(i,(e=>{Pt.Jt(u)&&Pt.Jt(O)&&e(o)})),Pt.BC(e,t)};Pt.if(se,(e=>{Pt.Jt(h)&&e(ce)})),Pt.cL(W),Pt.vN((e=>{Pt.Jk(Q,"aria-label",L()||Pt.Jt(p)),Pt.Jk(K,"aria-label",Pt.Jt(Z)?Pt.Jt(c):Pt.Jt(d)),Pt.Jk(re,"aria-valuetext",e),Pt.Jk(re,"max",Pt.Jt(R)||void 0),Pt.Jk(oe,"aria-label",Pt.Jt(H)),Pt.j(ne,Pt.Jt(Y)),Pt.Jk(le,"src",w())}),[()=>`${s(Number(Pt.Jt(z)))}`],Pt.Xd),Pt.f0("click",K,_),Pt.oJ(re,(()=>Pt.Jt(z)),(e=>Pt.hZ(z,e))),Pt.f0("input",re,(()=>{J||(J=!0),Pt.Jt(V).style.setProperty("--slider-progress-percent",Number(Pt.Jt(z))/Pt.Jt(R)*100+"%")})),Pt.f0("change",re,(e=>{J&&(J=!1);const t=Number(e.currentTarget?.value);Pt.hZ(P,t)})),Pt.f0("keydown",Q,(e=>{const t=e=>{e.preventDefault(),e.stopPropagation(),G(5)},a=e=>{e.preventDefault(),e.stopPropagation(),G(-5)};e.target===Pt.Jt(A)||e.target===Pt.Jt(D)?("Enter"===e.key||" "===e.key?_(e):e.stopPropagation(),e.target===Pt.Jt(D)&&("ArrowRight"===e.key||"ArrowUp"===e.key?t(e):"ArrowLeft"===e.key||"ArrowDown"===e.key?a(e):e.stopPropagation())):"Enter"===e.key||" "===e.key?_(e):"ArrowRight"===e.key||"ArrowUp"===e.key?t(e):"ArrowLeft"!==e.key&&"ArrowDown"!==e.key||a(e)})),Pt.M$(le,(()=>Pt.Jt(P)),(e=>Pt.hZ(P,e))),Pt.IY("duration","durationchange",le,(e=>Pt.hZ(R,e))),Pt.Ej(le,(()=>Pt.Jt(Z)),(e=>Pt.hZ(Z,e))),Pt.f0("timeupdate",le,(e=>{const t=e.target,{currentTime:a}=t;J||Pt.hZ(z,`${a}`)})),Pt.f0("loadedmetadata",le,(e=>{const t=e.target;(t.duration===1/0||isNaN(t.duration))&&(t.currentTime=1e101,t.ontimeupdate=()=>{t.ontimeupdate=null,t.currentTime=0})})),Pt.f0("ended",le,(function(...e){T()?.apply(this,e)})),Pt.f0("pause",le,(function(...e){C()?.apply(this,e)})),Pt.f0("play",le,(e=>{B()?.play(x().id),k()(e),o()&&o().updateTranscript({itemId:x().id,transcript:x().states.default.transcript})})),Pt.BC(e,W),Pt.Ek(t,"allowTabNavigation",I);var de=Pt.uY({allowTabNavigation:I});return r(),de}var Yc=Pt.vs('<div class="mon-audio-wrapper svelte-1req34n"><!></div>');const Hc={hash:"svelte-1req34n",code:".mon-audio-wrapper.svelte-1req34n {align-items:center;display:flex;inset:0;position:absolute;}"};var Ec=Pt.vs('<div class="mon-item-children svelte-ewdzh7"></div>');const Gc={hash:"svelte-ewdzh7",code:".mon-item-children.svelte-ewdzh7 {isolation:isolate;}"};var Xc=Pt.Dn('<path class="border svelte-1b0340t"></path>'),qc=Pt.Dn("<g></g>");const Nc={hash:"svelte-1b0340t",code:".border.svelte-1b0340t {fill:none;stroke-linecap:round;}"};const Uc=.5,Wc=1;var Qc=Pt.Dn('<filter x="0" y="0" filterUnits="userSpaceOnUse"><feGaussianBlur in="SourceAlpha"></feGaussianBlur><feOffset result="mask"></feOffset><feFlood result="color"></feFlood><feComposite operator="in" in="color" in2="mask"></feComposite><feMerge><feMergeNode></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter>'),Kc=Pt.Dn('<rect class="fill-color svelte-s28lkx" width="100%" height="100%"></rect>');const ed={hash:"svelte-s28lkx",code:".fill-color.svelte-s28lkx {stroke:none;}"};function td(e,t){Pt.VC(t,!1),Pt.kZ(e,ed);let a=Pt._w(t,"fill",8);Pt.Ts();var r=Pt.Im(),i=Pt.es(r),o=e=>{var t=Kc();Pt.vN((()=>{Pt.Jk(t,"fill",a().color),Pt.Jk(t,"opacity",a().opacity)})),Pt.BC(e,t)};Pt.if(i,(e=>{a().color&&e(o)})),Pt.BC(e,r),Pt.uY()}var ad=Pt.Dn('<image class="fill-image" preserveAspectRatio="none"></image>');let rd=0;const id=Math.PI/180,{cos:od,sin:nd,abs:ld,sqrt:sd}=Math,cd=8,dd=cd-.5,pd=1/(2*cd);var hd=Pt.Dn("<stop></stop>"),md=Pt.Dn('<defs><linearGradient color-interpolation="linearRGB"></linearGradient></defs><rect></rect>',1);let ud=0;const gd={type:"rectangle"};function fd(e){return e?.applied?e:void 0}function vd(e){return e?.applied?e:void 0}var Sd=Pt.Dn("<path></path>"),Id=Pt.Dn("<g><!></g>"),bd=Pt.Dn("<g><!></g>"),xd=Pt.vs('<div class="backdrop-wrapper svelte-faya9i" role="presentation"><svg class="mon-item-backdrop svelte-faya9i" preserveAspectRatio="none"><defs><clipPath></clipPath><!></defs><g><g><g><!><!><!><rect></rect></g><!></g></g></svg></div>');const wd={hash:"svelte-faya9i",code:".backdrop-wrapper.svelte-faya9i {position:absolute;}.mon-item-backdrop.svelte-faya9i {display:block;width:100%;height:100%;}.mon-item-mouse-trigger.svelte-faya9i {fill:none;}.mon-item-mouse-trigger.--visible.svelte-faya9i {pointer-events:all;}.mon-item-mouse-trigger.--clickable.svelte-faya9i {cursor:pointer;}"};function yd(e,t){Pt.VC(t,!1),Pt.kZ(e,wd);const a=Pt.zg(),r=Pt.zg(),i=Pt.zg(),o=Pt.zg();let n=Pt._w(t,"item",8),l=Pt._w(t,"stateId",8),s=Pt._w(t,"visible",8),c=Pt._w(t,"clickable",8,!1),d=Pt.zg(),p=Pt.zg(),h=Pt.zg(gd),m=Pt.zg(),u=Pt.zg(),g=Pt.zg(),f=Pt.zg(),v=Pt.zg(),S=Pt.zg(),I=Pt.zg(),b=Pt.zg(),x=Pt.zg(),w=Pt.zg(),y=Pt.zg(),k=Pt.zg();const C="mon-item-backdrop-clip-"+ud++,T="mon-item-backdrop-shadow-filter-"+ud++;Pt.M3((()=>Pt.iT(n())),(()=>{Pt.hZ(a,n().states.default)})),Pt.M3((()=>(Pt.iT(n()),Pt.iT(l()))),(()=>{Pt.hZ(r,n().states[l()])})),Pt.M3((()=>(Pt.Jt(r),Pt.Jt(a),Pt.iT(n()),Pt.Jt(v))),(()=>{if(Pt.hZ(d,Pt.Jt(r).width??Pt.Jt(a).width),Pt.hZ(p,Pt.Jt(r).height??Pt.Jt(a).height),"image"===n().type){const e=Pt.Jt(r),t=Pt.Jt(a);Pt.hZ(h,e.shapeDef??t.shapeDef),Pt.hZ(v,vd(e.border??t.border)),Pt.hZ(u,e.fill??t.fill),Pt.hZ(g,e.overlay??t.overlay),Pt.hZ(f,fd(e.dropShadow??t.dropShadow)),Pt.hZ(S,e.altText??t.altText)}else if("shape"===n().type){const e=Pt.Jt(r),t=Pt.Jt(a);Pt.hZ(h,e.shapeDef??t.shapeDef),Pt.hZ(v,vd(e.border??t.border)),Pt.hZ(m,e.fill??t.fill),Pt.hZ(g,e.overlay??t.overlay),Pt.hZ(f,fd(e.dropShadow??t.dropShadow)),Pt.hZ(S,e.altText??t.altText)}else if("line"===n().type){const e=Pt.Jt(r),t=Pt.Jt(a);Pt.hZ(h,e.shapeDef??t.shapeDef),Pt.hZ(v,vd(e.border??t.border)),Pt.hZ(m,Pt.Jt(v)?{opacity:Pt.Jt(v).opacity,color:Pt.Jt(v).color}:{opacity:1,color:"black"}),Pt.hZ(f,fd(e.dropShadow??t.dropShadow)),Pt.hZ(S,e.altText??t.altText)}else if("group"===n().type){const e=Pt.Jt(r),t=Pt.Jt(a);Pt.hZ(v,vd(e.border??t.border)),Pt.hZ(m,e.fill??t.fill),Pt.hZ(g,e.overlay??t.overlay)}})),Pt.M3((()=>(Pt.Jt(d),Pt.Jt(p),Pt.Jt(v))),(()=>{Pt.hZ(i,{width:Pt.Jt(d),height:Pt.Jt(p),borderWidth:Pt.Jt(v)?.width??0})})),Pt.M3((()=>(Pt.Jt(I),Pt.Jt(d),Pt.Jt(b),Pt.Jt(p),Pt.Jt(x),Pt.Jt(w),Pt.Jt(y),Pt.Jt(k),Pt.Jt(h),Pt.Jt(i),Pt.Jt(v),Pt.Jt(f),Wc)),(()=>{Pt.hZ(I,Pt.Jt(d)),Pt.hZ(b,Pt.Jt(p)),Pt.hZ(x,0),Pt.hZ(w,0),Pt.hZ(y,0),Pt.hZ(k,0);{const{width:e,height:t}=function(e,t){const a=Mt.get(e.type);return a.extraDrawSpace?.(t)??At}(Pt.Jt(h),Pt.Jt(i));Pt.hZ(I,Pt.Jt(I)+e),Pt.hZ(b,Pt.Jt(b)+t),Pt.hZ(x,Pt.Jt(x)-.5*e),Pt.hZ(w,Pt.Jt(w)-.5*t),Pt.hZ(y,Pt.Jt(y)-.5*e),Pt.hZ(k,Pt.Jt(k)-.5*t)}let e=0;if(Pt.Jt(v)&&(e+=Math.ceil(2*Pt.Jt(v).width)),Pt.Jt(f)){e+=Pt.Jt(f).blur*Wc;const{offset:{x:t,y:a}}=Pt.Jt(f);t<0?(Pt.hZ(I,Pt.Jt(I)-t),Pt.hZ(x,Pt.Jt(x)+t)):(Pt.hZ(I,Pt.Jt(I)+t),Pt.hZ(y,Pt.Jt(y)-t)),a<0?(Pt.hZ(b,Pt.Jt(b)-a),Pt.hZ(w,Pt.Jt(w)+a)):(Pt.hZ(b,Pt.Jt(b)+a),Pt.hZ(k,Pt.Jt(k)-a))}Pt.hZ(I,Pt.Jt(I)+2*e),Pt.hZ(b,Pt.Jt(b)+2*e),Pt.hZ(x,Pt.Jt(x)-e),Pt.hZ(w,Pt.Jt(w)-e),Pt.hZ(y,Pt.Jt(y)-e),Pt.hZ(k,Pt.Jt(k)-e)})),Pt.M3((()=>(Pt.Jt(h),Pt.Jt(i))),(()=>{var e,t;Pt.hZ(o,(e=Pt.Jt(h),t=Pt.Jt(i),Mt.get(e.type).paths(e,t)))})),Pt.iq(),Pt.Ts();var B=xd();let M;var L=Pt.jf(B),A=Pt.jf(L),D=Pt.jf(A);Pt.Jk(D,"id",C),Pt.__(D,5,(()=>Pt.Jt(o)),(({d:e,fill:t})=>e),((e,t)=>{var a=Pt.Im(),r=Pt.es(a),i=e=>{var a=Sd();Pt.vN((()=>Pt.Jk(a,"d",Pt.Jt(t).d))),Pt.BC(e,a)};Pt.if(r,(e=>{Pt.Jt(t).fill&&e(i)})),Pt.BC(e,a)})),Pt.cL(D);var F=Pt.AD(D),z=e=>{!function(e,t){Pt.VC(t,!1);let a=Pt._w(t,"id",8),r=Pt._w(t,"dropShadow",8),i=Pt._w(t,"svgWidth",8),o=Pt._w(t,"svgHeight",8);Pt.Ts();var n=Qc(),l=Pt.jf(n),s=Pt.AD(l),c=Pt.AD(s);Pt.K2(2),Pt.cL(n),Pt.vN((()=>{Pt.Jk(n,"id",a()),Pt.Jk(n,"width",i()),Pt.Jk(n,"height",o()),Pt.Jk(l,"stdDeviation",r().blur*Uc),Pt.Jk(s,"dx",r().offset.x),Pt.Jk(s,"dy",r().offset.y),Pt.Jk(c,"flood-color",r().color),Pt.Jk(c,"flood-opacity",r().opacity)})),Pt.BC(e,n),Pt.uY()}(e,{id:T,get dropShadow(){return Pt.Jt(f)},get svgWidth(){return Pt.Jt(I)},get svgHeight(){return Pt.Jt(b)}})};Pt.if(F,(e=>{Pt.Jt(f)&&e(z)})),Pt.cL(A);var V=Pt.AD(A),$=Pt.jf(V),J=Pt.jf($);Pt.Jk(J,"clip-path",`url(#${C??""})`);var P=Pt.jf(J),R=e=>{var t=Pt.Im(),a=Pt.es(t),r=e=>{var t=Id();td(Pt.jf(t),{get fill(){return Pt.Jt(m)}}),Pt.cL(t),Pt.vN((()=>Pt.Jk(t,"transform",`translate(${Pt.Jt(x)??""} ${Pt.Jt(w)??""})`))),Pt.BC(e,t)},i=e=>{!function(e,t){Pt.VC(t,!1);const a=Pt.zg(),r=Pt.zg(),i=Pt.zg(),o=Pt.zg(),n=Pt.zg(),l=Pt.zg(),s=Pt.zg(),c=Pt.zg(),d=Pt.zg(),p=Pt.zg(),h=Pt.zg(),m=Pt.zg();let u=Pt._w(t,"width",8),g=Pt._w(t,"height",8),f=Pt._w(t,"fill",8);const v="mon-fill-gradient="+rd++;Pt.M3((()=>Pt.iT(f())),(()=>{Pt.hZ(a,(f().angle-90)*id)})),Pt.M3((()=>Pt.Jt(a)),(()=>{Pt.hZ(r,od(Pt.Jt(a)))})),Pt.M3((()=>Pt.Jt(a)),(()=>{Pt.hZ(i,nd(Pt.Jt(a)))})),Pt.M3((()=>(Pt.Jt(o),Pt.Jt(n),Pt.Jt(r),Pt.iT(u()),Pt.Jt(i),Pt.iT(g()))),(()=>{var e;e=function({x:e,y:t}){const a=1/sd(e*e+t*t);return{x:e*a,y:t*a}}({x:Pt.Jt(r)*u(),y:Pt.Jt(i)*g()}),Pt.hZ(o,e.x),Pt.hZ(n,e.y)})),Pt.M3((()=>(Pt.Jt(o),Pt.Jt(n))),(()=>{Pt.hZ(l,ld(Pt.Jt(o))+ld(Pt.Jt(n)))})),Pt.M3((()=>(Pt.Jt(o),Pt.Jt(l))),(()=>{Pt.hZ(s,Pt.Jt(o)*cd*Pt.Jt(l))})),Pt.M3((()=>(Pt.Jt(n),Pt.Jt(l))),(()=>{Pt.hZ(c,Pt.Jt(n)*cd*Pt.Jt(l))})),Pt.M3((()=>Pt.Jt(s)),(()=>{Pt.hZ(d,.5-Pt.Jt(s))})),Pt.M3((()=>Pt.Jt(c)),(()=>{Pt.hZ(p,.5-Pt.Jt(c))})),Pt.M3((()=>Pt.Jt(s)),(()=>{Pt.hZ(h,.5+Pt.Jt(s))})),Pt.M3((()=>Pt.Jt(c)),(()=>{Pt.hZ(m,.5+Pt.Jt(c))})),Pt.iq(),Pt.Ts();var S=md(),I=Pt.es(S),b=Pt.jf(I);Pt.Jk(b,"id",v),Pt.__(b,5,(()=>f().stops),Pt.Pe,((e,t)=>{var a=hd();Pt.vN((()=>{Pt.Jk(a,"offset",(Pt.Jt(t).t+dd)*pd),Pt.Jk(a,"stop-color",Pt.Jt(t).color),Pt.Jk(a,"stop-opacity",Pt.Jt(t).opacity)})),Pt.BC(e,a)})),Pt.cL(b),Pt.cL(I);var x=Pt.AD(I);Pt.Jk(x,"fill",`url(#${v??""})`),Pt.vN((()=>{Pt.Jk(b,"x1",Pt.Jt(d)),Pt.Jk(b,"y1",Pt.Jt(p)),Pt.Jk(b,"x2",Pt.Jt(h)),Pt.Jk(b,"y2",Pt.Jt(m)),Pt.Jk(x,"width",u()),Pt.Jk(x,"height",g())})),Pt.BC(e,S),Pt.uY()}(e,{get width(){return Pt.Jt(d)},get height(){return Pt.Jt(p)},get fill(){return Pt.Jt(m)}})};Pt.if(a,(e=>{null==Pt.Jt(m).angle?e(r):e(i,!1)})),Pt.BC(e,t)};Pt.if(P,(e=>{Pt.Jt(m)&&e(R)}));var Z=Pt.AD(P),O=e=>{!function(e,t){Pt.VC(t,!1);const a=Pt.zg();let r=Pt._w(t,"width",8),i=Pt._w(t,"height",8),o=Pt._w(t,"assets",8,void 0),n=Pt._w(t,"fill",8);const l=dp();Pt.M3((()=>(Pt.iT(n()),Pt.iT(o()))),(()=>{Pt.hZ(a,n().assetId&&o()?.[n().assetId]?l.resolvePath(o()?.[n().assetId].path):null)})),Pt.iq(),Pt.Ts();var s=Pt.Im(),c=Pt.es(s),d=e=>{var t=ad();const o=Pt.Xd((()=>{const{crop:e}=n();return{crop:e}})),l=Pt.Xd((()=>Pt.Jt(o).crop.width*r())),s=Pt.Xd((()=>Pt.Jt(o).crop.height*i())),c=Pt.Xd((()=>.5*(r()-Pt.Jt(l))+r()*Pt.Jt(o).crop.left)),d=Pt.Xd((()=>.5*(i()-Pt.Jt(s))+i()*Pt.Jt(o).crop.top));let p;Pt.vN((()=>{Pt.Jk(t,"href",Pt.Jt(a)),Pt.Jk(t,"width",Pt.Jt(l)),Pt.Jk(t,"height",Pt.Jt(s)),Pt.Jk(t,"x",Pt.Jt(c)),Pt.Jk(t,"y",Pt.Jt(d)),p=Pt.hg(t,"",p,{opacity:n().opacity})})),Pt.BC(e,t)};Pt.if(c,(e=>{Pt.Jt(a)&&e(d)})),Pt.BC(e,s),Pt.uY()}(e,{get width(){return Pt.Jt(d)},get height(){return Pt.Jt(p)},get assets(){return n().assets},get fill(){return Pt.Jt(u)}})};Pt.if(Z,(e=>{Pt.Jt(u)&&e(O)}));var _=Pt.AD(Z),j=e=>{var t=bd();td(Pt.jf(t),{get fill(){return Pt.Jt(g)}}),Pt.cL(t),Pt.vN((()=>Pt.Jk(t,"transform",`translate(${Pt.Jt(x)??""} ${Pt.Jt(w)??""})`))),Pt.BC(e,t)};Pt.if(_,(e=>{Pt.Jt(g)&&e(j)}));var Y=Pt.AD(_);let H;Pt.cL(J);var E=Pt.AD(J),G=e=>{const t=Pt.Xd((()=>"line"===n().type?"round":"miter"));!function(e,t){Pt.VC(t,!1),Pt.kZ(e,Nc);const a=Pt.zg();let r=Pt._w(t,"border",8),i=Pt._w(t,"paths",8),o=Pt._w(t,"strokeLinejoin",8);Pt.M3((()=>Pt.iT(r())),(()=>{Pt.hZ(a,function(e){if(!e.applied)return;const t=e.width;return"dashed"===e.style?`${2*t} ${2*t}`:"dotted"===e.style?"0 "+2*t:void 0}(r()))})),Pt.iq(),Pt.Ts();var n=qc();let l;Pt.__(n,5,i,(({d:e,dash:t})=>e),((e,t)=>{var r=Xc();Pt.vN((()=>{Pt.Jk(r,"stroke-dasharray",Pt.Jt(t).dash?Pt.Jt(a):void 0),Pt.Jk(r,"d",Pt.Jt(t).d)})),Pt.BC(e,r)})),Pt.cL(n),Pt.vN((()=>{Pt.Jk(n,"stroke-width",r().width),Pt.Jk(n,"stroke",r().color),l=Pt.hg(n,"",l,{opacity:r().opacity,"stroke-linejoin":o()})})),Pt.BC(e,n),Pt.uY()}(e,{get border(){return Pt.Jt(v)},get paths(){return Pt.Jt(o)},get strokeLinejoin(){return Pt.Jt(t)}})};Pt.if(E,(e=>{Pt.Jt(v)&&e(G)})),Pt.cL($),Pt.cL(V),Pt.cL(L),Pt.cL(B),Pt.vN((e=>{M=Pt.hg(B,"",M,{left:`${Pt.Jt(x)??""}px`,top:`${Pt.Jt(w)??""}px`,right:`${Pt.Jt(y)??""}px`,bottom:`${Pt.Jt(k)??""}px`}),Pt.Jk(L,"viewBox",`0 0 ${Pt.Jt(I)??""} ${Pt.Jt(b)??""}`),Pt.Jk(L,"role",Pt.Jt(S)?"img":"presentation"),Pt.Jk(L,"aria-label",Pt.Jt(S)||void 0),Pt.Jk(L,"aria-hidden",!Pt.Jt(S)),Pt.Jk(V,"filter",Pt.Jt(f)?`url(#${T})`:void 0),Pt.Jk($,"transform",`translate(${-Pt.Jt(x)} ${-Pt.Jt(w)})`),H=Pt.ys(Y,0,"mon-item-mouse-trigger svelte-faya9i",null,H,e),Pt.Jk(Y,"width",Pt.Jt(d)),Pt.Jk(Y,"height",Pt.Jt(p)),Pt.Jk(Y,"role",c()?"button":void 0),Pt.Jk(Y,"tabindex",c()?0:void 0)}),[()=>({"--visible":s(),"--clickable":c()})],Pt.Xd),Pt.BC(e,B),Pt.uY()}var kd=Pt.vs('<div role="presentation"><!></div>');const Cd={hash:"svelte-d0xz7b",code:".mon-item-transform.svelte-d0xz7b {position:absolute;\n    /*\n    This element defines a virtual reference box for the item, but the actual physical\n    extents of the item may vary.  For non-rectangle ShapeItems, the clickable area of\n    the item can be much smaller.  For GroupItems, the reference box itself is generally\n    not clickable; only the children within.  So this element has to be non-interactable,\n    and children of ItemTransform that wish to be interactable are expected to override\n    this within the child components.\n    */pointer-events:none;}.mon-item-transform.--smooth-transitions.svelte-d0xz7b {transition:all 100ms ease;}"},Td=(e,t)=>{const a=e.querySelector("[data-scrolling-element]"),r=e.querySelector("[data-scrollbar-element]"),i=e.querySelector("[data-offset-height-gauge]"),o=e.querySelector("[data-scroll-height-gauge]");if(!(a&&r&&i&&o))return void console.error("LearnerScrollable elements missing");let n={scrollStart:0,offsetSize:0,scrollSize:0},l=!1,s=!1;const c=new ResizeObserver((()=>{s||l||n.offsetSize===a.offsetHeight&&n.scrollSize===a.scrollHeight||d()}));async function d(){l=!0,c.disconnect(),r.removeAttribute("data-overflow"),await(0,Qs.tick)();let e=a.scrollTop,d=a.offsetHeight,p=a.scrollHeight;p-2>d&&(r.setAttribute("data-overflow",""),await(0,Qs.tick)(),e=a.scrollTop,d=a.offsetHeight,p=a.scrollHeight),n.scrollStart===e&&n.offsetSize===d&&n.scrollSize===p||(n={scrollStart:e,offsetSize:d,scrollSize:p},t(n)),await async function(e){return new Promise((e=>setTimeout(e,0)))}(),l=!1,s||(c.observe(i),c.observe(o))}return d(),{destroy(){s=!0,c.disconnect()}}};var Bd=Pt.vs('<div class="learner-scrollable svelte-1wcu64k"><div class="height-gauge svelte-1wcu64k" data-offset-height-gauge=""></div> <div class="learner-scrollable-scrolling-area svelte-1wcu64k" data-scrolling-element=""><div class="learner-scrollable-child-content svelte-1wcu64k"><div class="height-gauge svelte-1wcu64k" data-scroll-height-gauge=""></div> <!></div></div> <div class="learner-scrollable-scrollbar svelte-1wcu64k" data-scrollbar-element="" aria-hidden="true"><div class="handle svelte-1wcu64k"><div class="handle-shaded svelte-1wcu64k"></div></div> <input tabindex="-1" type="range" class="svelte-1wcu64k"></div></div>');const Md={hash:"svelte-1wcu64k",code:".learner-scrollable.svelte-1wcu64k {position:absolute;inset:0;display:flex;.height-gauge:where(.svelte-1wcu64k) {position:absolute;inset:0 auto;width:0;pointer-events:none;}.learner-scrollable-scrolling-area:where(.svelte-1wcu64k) {flex:1 0 0;overflow-y:auto;overflow-x:visible;scrollbar-width:none;.learner-scrollable-child-content:where(.svelte-1wcu64k) {position:relative;display:flex;flex-direction:column;min-height:100%;justify-content:var(--text-item-vertical-align);overflow-anchor:none;}}.learner-scrollable-scrollbar:where(.svelte-1wcu64k) {position:relative;flex:0 0 12px;display:none;width:12px;margin-left:4px;&[data-overflow] {display:block;}writing-mode:vertical-lr;direction:ltr;border-radius:6px;background-color:var(--arc-color-alpha-white-70);box-shadow:inset 0 0 0 1px rgba(0, 0, 0, 0.1);&:hover {background-color:var(--arc-color-alpha-white-80);}.handle:where(.svelte-1wcu64k) {pointer-events:none;position:absolute;inset-block:0;inline-size:calc(var(--handleSize) * 100%);inset-inline-start:calc(var(--handleStart) * 100%);.handle-shaded:where(.svelte-1wcu64k) {position:absolute;inset:2px;border-radius:4px;background-color:var(--arc-color-neutral-700);.learner-scrollable-scrollbar:where(.svelte-1wcu64k):hover & {background-color:var(--arc-color-mono-black);}}}input:where(.svelte-1wcu64k) {position:absolute;inset:0 0 0 -4px;opacity:0;margin:0;-webkit-appearance:none;appearance:none;&::-moz-range-thumb {appearance:none;width:0;height:0;}&::-webkit-slider-thumb {-webkit-appearance:none;appearance:none;width:0;height:0;}}}}\n\n  @media print {\n    /*\n      We're getting strange styling of these scrollbars in Rise's export to PDF feature.\n      This is a shot in the dark to try to fix those.\n    */input.svelte-1wcu64k {display:none;}\n  }"},Ld={type:"rectangle"};var Ad=Pt.vs('<div class="text-item-clip svelte-wh4ese"><div class="text-item-clip-boundary svelte-wh4ese"><div class="text-item-padding-boundary svelte-wh4ese"><!></div></div></div>');const Dd={hash:"svelte-wh4ese",code:".text-item-clip.svelte-wh4ese {position:absolute;inset:0;}.text-item-clip-boundary.svelte-wh4ese {position:absolute;pointer-events:all;}.text-item-padding-boundary.svelte-wh4ese {position:absolute;}.text-item-padding-boundary[data-vertical-align='top'].svelte-wh4ese {--text-item-vertical-align: start;}.text-item-padding-boundary[data-vertical-align='middle'].svelte-wh4ese {--text-item-vertical-align: center;}.text-item-padding-boundary[data-vertical-align='bottom'].svelte-wh4ese {--text-item-vertical-align: end;}"};function Fd(e,t){Pt.VC(t,!1),Pt.kZ(e,Dd);const a=Pt.zg(),r=Pt.zg(),i=Pt.zg();let o=Pt._w(t,"item",8),n=Pt._w(t,"stateId",8),l=Pt._w(t,"children",8);Pt.M3((()=>(Pt.iT(o()),Pt.iT(n()))),(()=>{Pt.hZ(a,zt(o(),n()))})),Pt.M3((()=>(Pt.iT(o()),Pt.Jt(a))),(()=>{var e;Pt.hZ(r,(e="shape"===o().type?Pt.Jt(a).shapeDef:Ld,Mt.get(e.type).textExtents(e)))})),Pt.M3((()=>(Pt.Jt(i),Pt.Jt(a))),(()=>{var e;e=Pt.Jt(a),Pt.hZ(i,e.textPadding)})),Pt.iq(),Pt.Ts();var s=Ad(),c=Pt.jf(s);let d;var p=Pt.jf(c);let h;!function(e,t){Pt.VC(t,!0),Pt.kZ(e,Md);let a=Pt.wk(null),r=Pt.wk(0),i=Pt.wk(0),o=Pt.wk(0);const n=e=>{Pt.hZ(r,e.scrollStart,!0),Pt.hZ(i,e.offsetSize,!0),Pt.hZ(o,e.scrollSize,!0)},l=Pt.un((()=>0!==Pt.Jt(o)?Math.min(Pt.Jt(i)/Pt.Jt(o),1):1)),s=Pt.un((()=>0!==Pt.Jt(o)?Math.min(Math.max(Pt.Jt(r)/Pt.Jt(o),0),1-Pt.Jt(l)):0));let c=null;var d=Bd(),p=Pt.AD(Pt.jf(d),2),h=Pt.jf(p),m=Pt.AD(Pt.jf(h),2);Pt.UA(m,(()=>t.children)),Pt.cL(h),Pt.cL(p),Pt.Lc(p,(e=>Pt.hZ(a,e)),(()=>Pt.Jt(a)));var u=Pt.AD(p,2);let g;var f=Pt.AD(Pt.jf(u),2);Pt.R0(f),Pt.cL(u),Pt.cL(d),Pt.XI(d,((e,t)=>Td?.(e,t)),(()=>n)),Pt.vN((()=>{g=Pt.hg(u,"",g,{"--handleSize":Pt.Jt(l),"--handleStart":Pt.Jt(s)}),Pt.Jk(f,"min",0-.5*Pt.Jt(i)),Pt.Jk(f,"max",Pt.Jt(o)-.5*Pt.Jt(i)),Pt.to(f,Pt.Jt(r))})),Pt.f0("scroll",p,(e=>{Pt.hZ(r,e.currentTarget.scrollTop,!0)}),void 0,!0),Pt.f0("change",f,(function(){c=null})),Pt.f0("input",f,(function(e){if(!Pt.Jt(a))return;const t=e.currentTarget.valueAsNumber;if(null==c){const e=Pt.Jt(r)-t;c=Math.abs(e)<.5*Pt.Jt(i)?e:0}Pt.Jt(a).scrollTop=t+c})),Pt.f0("wheel",u,(e=>{Pt.Jt(a)&&(Pt.Jt(a).scrollTop+=e.deltaY,e.preventDefault())})),Pt.BC(e,d),Pt.uY()}(Pt.jf(p),{get children(){return l()}}),Pt.cL(p),Pt.cL(c),Pt.cL(s),Pt.vN((()=>{d=Pt.hg(c,"",d,{left:`calc(${Pt.Jt(r).left??""} * 100%)`,top:`calc(${Pt.Jt(r).top??""} * 100%)`,width:`calc(${Pt.Jt(r).width??""} * 100%)`,height:`calc(${Pt.Jt(r).height??""} * 100%)`}),Pt.Jk(p,"data-vertical-align",Pt.Jt(a).textVerticalAlign),h=Pt.hg(p,"",h,{top:`${Pt.Jt(i).top??""}px`,left:`${Pt.Jt(i).left??""}px`,bottom:`${Pt.Jt(i).bottom??""}px`,right:`${Pt.Jt(i).right??""}px`})})),Pt.BC(e,s),Pt.uY()}var zd=Pt.vs('<div class="alt-text svelte-s9v9ex"> </div>'),Vd=Pt.vs('<div class="content-wrapper svelte-s9v9ex"><!> <div class="tiptap ProseMirror content"></div></div>');const $d={hash:"svelte-s9v9ex",code:".content-wrapper.svelte-s9v9ex {height:100%;display:flex;pointer-events:auto;position:relative;}.alt-text.svelte-s9v9ex {position:absolute;inset:0;overflow:clip;-webkit-user-select:none;user-select:none;font-size:8px;color:transparent;pointer-events:none;clip-path:inset(50%);}"};var Jd=a(9316),Pd=a.n(Jd),Rd=Pt.vs('<button aria-label="play video" class="video-player__big-play-button svelte-m58po"><!></button>'),Zd=Pt.vs('<button class="video-player__pip-button svelte-m58po"><!></button>'),Od=Pt.vs('<div aria-live="off" role="group"><div class="video-player__resizer svelte-m58po"><video class="video-player__video svelte-m58po"><source></video></div> <!> <div class="video-player__controls svelte-m58po"><button class="video-player__play-button svelte-m58po" type="button"><!></button> <div class="video-player__seek-bar-wrapper svelte-m58po"><input class="video-player__seek-bar svelte-m58po" type="range"> <div class="video-player__seek-bar-progress svelte-m58po"></div></div> <span class="video-player__time-remaining svelte-m58po"><span class="mon-sr-only">Remaining time</span> <span aria-hidden="true">-</span> </span> <!> <button class="video-player__fullscreen-button svelte-m58po"><!></button> <div class="video-player__volume-control svelte-m58po"><button class="video-player__volume-button svelte-m58po"><!></button> <div class="video-player__volume-slider-wrapper svelte-m58po"><input class="video-player__volume-slider svelte-m58po" type="range" min="0" max="1" step="0.01"> <div class="video-player__volume-slider-progress svelte-m58po"></div></div></div></div></div>',2);const _d={hash:"svelte-m58po",code:".video-player.svelte-m58po {--slider-thumb-size: 10px;--slider-thumb-bg: white;--slider-thumb-border: 1px solid rgb(0 0 0 / 10%);--slider-thumb-box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);--slider-track-height: 2px;--slider-track-bg: rgb(255 255 255 / 20%);container-type:inline-size;container-name:video-player;position:relative;pointer-events:initial;width:100%;height:100%;display:flex;justify-content:center;align-items:center;.video-player__resizer:where(.svelte-m58po) {aspect-ratio:var(--aspect-ratio);height:100%;max-width:100%;display:flex;justify-content:center;align-items:center;.video-player__video:where(.svelte-m58po) {aspect-ratio:var(--aspect-ratio);width:100%;max-height:100%;object-fit:fill;}}}.video-player.fullscreen.svelte-m58po .video-player__video:where(.svelte-m58po) {margin:auto 0;}.video-player.touched.svelte-m58po:not(.active):not(.paused) .video-player__controls:where(.svelte-m58po),\n  .video-player.svelte-m58po:not(.touched) .video-player__controls:where(.svelte-m58po) {opacity:0;pointer-events:none;transition:opacity 1s;}.video-player__big-play-button.svelte-m58po {aspect-ratio:1 / 1;background-color:rgb(0 0 0 / 70%);border-radius:0;border-radius:50%;border:none;cursor:pointer;left:50%;margin:0;padding:0;position:absolute;top:50%;transform:translate(-50%, -50%);transition:background-color 0.4s;max-width:98px;width:13%;min-width:48px;color:white;display:flex;align-items:center;justify-content:center;}.video-player.svelte-m58po:hover .video-player__big-play-button:where(.svelte-m58po) {background-color:rgb(0 0 0 / 80%);outline:3px solid white;}.video-player__controls.svelte-m58po {bottom:0;position:absolute;align-items:center;background-color:rgb(0 0 0 / 70%);display:flex;gap:10px;width:100%;height:75px; /* mini = 32px */color:white;padding:0 10px;}.video-player__play-button.svelte-m58po {padding:0 4px;height:100%;}.video-player__play-button.svelte-m58po,\n  .video-player__pip-button.svelte-m58po,\n  .video-player__fullscreen-button.svelte-m58po,\n  .video-player__volume-button.svelte-m58po {display:flex;height:100%;align-items:center;background:none;border:none;cursor:pointer;font-size:15px;color:white;}.video-player__play-button.svelte-m58po:focus svg,\n  .video-player__pip-button.svelte-m58po:focus svg,\n  .video-player__fullscreen-button.svelte-m58po:focus svg,\n  .video-player__volume-button.svelte-m58po:focus svg {filter:drop-shadow(0 0 4px rgb(255 255 255 / 0.8));}.video-player__seek-bar-wrapper.svelte-m58po {position:relative;height:32px;min-width:0;flex:1;display:flex;}.video-player__time-remaining.svelte-m58po {font-size:12px;font-weight:700;min-width:35px;}.video-player__volume-control.svelte-m58po {align-items:center;display:flex;gap:5px;}.video-player__volume-slider-wrapper.svelte-m58po {position:relative;height:32px;min-width:0;width:100px;display:flex;}.video-player__volume-slider.svelte-m58po {width:100%;}.video-player__seek-bar.svelte-m58po,\n  .video-player__volume-slider.svelte-m58po {-webkit-appearance:none;appearance:none;background:transparent;cursor:pointer;margin:0;flex:1;height:100%;}.video-player__seek-bar.svelte-m58po::-webkit-slider-thumb,\n  .video-player__volume-slider.svelte-m58po::-webkit-slider-thumb {-webkit-appearance:none;appearance:none;width:var(--slider-thumb-size);height:var(--slider-thumb-size);background:var(--slider-thumb-bg);border:var(--slider-thumb-border);border-radius:50%;box-shadow:var(--slider-thumb-box-shadow);cursor:pointer;margin-top:calc(-2 * var(--slider-track-height));}.video-player__seek-bar.svelte-m58po::-webkit-slider-runnable-track,\n  .video-player__volume-slider.svelte-m58po::-webkit-slider-runnable-track {background-color:var(--slider-track-bg);height:var(--slider-track-height);}.video-player__seek-bar.svelte-m58po::-moz-range-thumb,\n  .video-player__volume-slider.svelte-m58po::-moz-range-thumb {appearance:none;\n    /* firefox needs border-box set so the thumb renders at the correct size */box-sizing:border-box;width:var(--slider-thumb-size);height:var(--slider-thumb-size);background:var(--slider-thumb-bg);border:var(--slider-thumb-border);border-radius:50%;box-shadow:var(--slider-thumb-box-shadow);cursor:pointer;margin-top:calc(-2 * var(--slider-track-height));}.video-player__seek-bar.svelte-m58po::-moz-range-track,\n  .video-player__volume-slider.svelte-m58po::-moz-range-track {background:var(--slider-track-bg);height:var(--slider-track-height);}.video-player__seek-bar-progress.svelte-m58po,\n  .video-player__volume-slider-progress.svelte-m58po {background:linear-gradient(\n      to right,\n      var(--slider-thumb-bg) var(--slider-progress-percent),\n      transparent 0%\n    );height:var(--slider-track-height);position:absolute;inset-block:0 0;margin-top:auto;margin-bottom:auto;min-width:var(--slider-thumb-size);pointer-events:none;width:100%;}\n\n  @container video-player (max-width: 450px) {.video-player__controls.svelte-m58po {height:32px;justify-content:space-around;}.video-player__volume-slider-wrapper.svelte-m58po {width:100%;}.video-player__seek-bar-wrapper.svelte-m58po,\n    .video-player__time-remaining.svelte-m58po,\n    .video-player__pip-button.svelte-m58po {display:none;}\n  }"};var jd=Pt.vs('<div class="mon-video-wrapper svelte-ngn0zs"><!></div>');const Yd={hash:"svelte-ngn0zs",code:".mon-video-wrapper.svelte-ngn0zs {align-items:center;display:flex;inset:0;position:absolute;}"};var Hd=Pt.vs('<div role="presentation"><!> <!></div>');const Ed={hash:"svelte-19sv9wq",code:".mon-item.svelte-19sv9wq {position:absolute;inset:0;&.--smooth-transitions {transition:opacity 100ms ease;}&.--hidden {opacity:0;}&.--clip {overflow:clip;}}"};function Gd(e,t){Pt.VC(t,!1),Pt.kZ(e,Ed);const[a,r]=Pt.DZ(),i=()=>Pt.Hz(C,"$item",a),o=()=>Pt.Hz(T,"$stateId",a),n=()=>Pt.Hz(M,"$triggersBySourceId",a),c=()=>Pt.Hz(k,"$searchTerm",a),d=()=>Pt.Hz(B,"$visible",a),p=Pt.zg(),h=Pt.zg(),m=Pt.zg(),u=Pt.zg();let g=Pt._w(t,"itemId",8),f=Pt._w(t,"visualOrder",8),v=Pt._w(t,"clip",8,!1),S=Pt._w(t,"noTransform",8,!1);const b=dp(),{bindTriggers:w,hideTextContentForId:y,searchTerm:k}=b,C=b.getItem(g()),T=b.getState(g()),B=b.getVisible(g()),M=b.getTriggersBySourceId(),L=lp();function A({event:e}){return"click"===e}Pt.M3((()=>(i(),o())),(()=>{Pt.hZ(p,i().states[o()].opacity??i().states.default.opacity)})),Pt.M3((()=>(n(),i())),(()=>{Pt.hZ(h,n().get(i().id)??[])})),Pt.M3((()=>Pt.Jt(h)),(()=>{Pt.hZ(m,Pt.Jt(h).some(A))})),Pt.M3((()=>(o(),i(),c())),(()=>{Pt.hZ(u,o()===i().initialState?c():void 0)})),Pt.iq(),Pt.Ts(),function(e,t){Pt.VC(t,!1),Pt.kZ(e,Cd);const a=Pt.zg(),r=Pt.zg(),i=Pt.zg(),o=Pt.zg(),n=Pt.zg(),l=Pt.zg(),s=Pt.zg(),c=Pt.zg(),d=Pt.zg();let p=Pt._w(t,"item",8),h=Pt._w(t,"stateId",8),m=Pt._w(t,"zIndex",8,void 0),u=Pt._w(t,"noTransform",8,!1);const g=!(p().parentId===p().blockumentId)&&lp();let f=Pt.zg(),v=Pt.zg();Pt.M3((()=>Pt.iT(p())),(()=>{Pt.hZ(a,p().states.default)})),Pt.M3((()=>(Pt.iT(p()),Pt.iT(h()))),(()=>{Pt.hZ(r,p().states[h()])})),Pt.M3((()=>(Pt.Jt(r),Pt.Jt(a))),(()=>{Pt.hZ(i,Pt.Jt(r).width??Pt.Jt(a).width)})),Pt.M3((()=>(Pt.Jt(r),Pt.Jt(a))),(()=>{Pt.hZ(o,Pt.Jt(r).height??Pt.Jt(a).height)})),Pt.M3((()=>(Pt.Jt(a),Pt.Jt(r))),(()=>{Pt.hZ(n,Pt.Jt(a).x+(Pt.Jt(r).xOffset??0))})),Pt.M3((()=>(Pt.Jt(a),Pt.Jt(r))),(()=>{Pt.hZ(l,Pt.Jt(a).y+(Pt.Jt(r).yOffset??0))})),Pt.M3((()=>(Pt.Jt(r),Pt.Jt(a),Pt.Jt(f),Pt.Jt(v))),(()=>{const e=Pt.Jt(r).rotation??Pt.Jt(a).rotation;if(null==Pt.Jt(f))Pt.hZ(v,e);else if(e!==Pt.Jt(f)){let t=e-Pt.Jt(f);t>180?t-=360:t<=-180&&(t+=360),Pt.hZ(v,Pt.Jt(v)+t)}Pt.hZ(f,e)})),Pt.M3((()=>(Pt.Jt(r),Pt.Jt(a))),(()=>{Pt.hZ(s,Pt.Jt(r).flipX??Pt.Jt(a).flipX)})),Pt.M3((()=>(Pt.Jt(r),Pt.Jt(a))),(()=>{Pt.hZ(c,Pt.Jt(r).flipY??Pt.Jt(a).flipY)})),Pt.M3((()=>(Pt.iT(u()),Pt.Jt(n),Pt.Jt(l),Pt.Jt(v),Pt.Jt(s),Pt.Jt(c))),(()=>{Pt.hZ(d,u()?void 0:`translate(${Pt.Jt(n)}px, ${Pt.Jt(l)}px) rotate(${Pt.Jt(v)}deg) scale(${Pt.Jt(s)?-1:1}, ${Pt.Jt(c)?-1:1})`)})),Pt.iq(),Pt.Ts();var S=kd();let I;Pt.ys(S,1,"mon-item-transform svelte-d0xz7b",null,{},{"--smooth-transitions":g});var b=Pt.jf(S);Pt.NI(b,t,"default",{},null),Pt.cL(S),Pt.vN((e=>{Pt.Jk(S,"data-item-id",e),I=Pt.hg(S,"",I,{width:`${Pt.Jt(i)??""}px`,height:`${Pt.Jt(o)??""}px`,transform:Pt.Jt(d),"z-index":m()})}),[()=>p().id.slice(0,5)],Pt.Xd),Pt.BC(e,S),Pt.uY()}(e,{get item(){return i()},get stateId(){return o()},get zIndex(){return f()},get noTransform(){return S()},children:(e,t)=>{var r=Hd();let n,c;var f=Pt.jf(r);yd(f,{get item(){return i()},get stateId(){return o()},get visible(){return d()},get clickable(){return Pt.Jt(m)}});var S=Pt.AD(f,2),k=e=>{!function(e,t){Pt.VC(t,!1),Pt.kZ(e,Gc);const a=Pt.zg();let r=Pt._w(t,"item",8),i=Pt._w(t,"stateId",8);Pt.M3((()=>(Pt.iT(r()),Pt.iT(i()))),(()=>{Pt.hZ(a,r().states[i()].altText??r().states.default.altText)})),Pt.iq(),Pt.Ts();var o=Ec();Pt.__(o,5,(()=>r().children),(e=>e.id),((e,t)=>{Gd(e,{get itemId(){return Pt.Jt(t).id},get visualOrder(){return Pt.Jt(t).visualOrder}})})),Pt.cL(o),Pt.vN((()=>{Pt.Jk(o,"role",Pt.Jt(a)?"group":"presentation"),Pt.Jk(o,"aria-label",Pt.Jt(a))})),Pt.BC(e,o),Pt.uY()}(e,{get item(){return i()},get stateId(){return o()}})},C=(e,t)=>{var r=e=>{var t=Pt.Im(),r=Pt.es(t),n=e=>{!function(e,t){Pt.VC(t,!1),Pt.kZ(e,$d);const a=Pt.zg(),r=Pt.zg(),i=Pt.zg(),o=Pt.zg(),n=Pt.zg();let l=Pt._w(t,"item",8),s=Pt._w(t,"stateId",8),c=Pt._w(t,"searchTerm",8),d=Pt._w(t,"linkRenderConfig",8);Pt.M3((()=>Pt.iT(l())),(()=>{Pt.hZ(a,l().states.default)})),Pt.M3((()=>(Pt.iT(l()),Pt.iT(s()))),(()=>{Pt.hZ(r,l().states[s()])})),Pt.M3((()=>(Pt.Jt(r),Pt.Jt(a))),(()=>{Pt.hZ(i,Pt.Jt(r).text?.json??Pt.Jt(a).text.json)})),Pt.M3((()=>(Pt.Jt(i),Pt.iT(d()),Pt.iT(c()))),(()=>{Pt.hZ(o,function(e,t,a){if(t?.externalLinksDisabled||a){const r=structuredClone(e);return a&&function(e,t){if(!t)return;const a=new RegExp(x()(t),"gi");!function e(r){const{content:i}=r;if(!i?.length)return;const o=i[0].type;if("text"===o||"hardBreak"===o){let n="";for(const{type:c,text:d}of i)"text"===c&&d?n+=d:"hardBreak"===c&&(n+="\n");const l=[];for(a.lastIndex=0;a.test(n);)l.push({from:a.lastIndex-t.length,to:a.lastIndex});if(!l.length)return;const s=[];for(let p=0,h=0,m=0,u=l.at(m);p<i.length;p+=1){const g=i[p],{text:f,type:v}=g;if("hardBreak"===v){h+=1,s.push(g);continue}if(!f){s.push(g);continue}const S=h;for(h+=f.length;u&&u.to<=S;)m+=1,u=l[m];let I=S;function b(e){if(e>I){const t=structuredClone(g);t.text=n.slice(I,e),s.push(t)}}for(;u;){const{from:x,to:w}=u;if(x<h){const y=Math.max(S,x),k=Math.min(h,w);b(y);const C=structuredClone(g);C.text=n.slice(y,k),ie(C),s.push(C),I=k}if(!(w<=h))break;m+=1,u=l[m]}b(h),r.content=s}}else for(const T of i)e(T)}(e)}(r,a),t?.externalLinksDisabled&&ne(t.isExternalLink,r),r}return e}(Pt.Jt(i),d(),c()))})),Pt.M3((()=>(Pt.iT(l()),Pt.Jt(r),Pt.Jt(a))),(()=>{Pt.hZ(n,"text"===l().type&&(Pt.Jt(r).altText??Pt.Jt(a).altText)||"")})),Pt.iq(),Pt.Ts();var p=Pt.Im(),h=Pt.es(p),m=e=>{Fd(e,{get item(){return l()},get stateId(){return s()},children:(e,t)=>{var a=Vd(),r=Pt.jf(a),i=e=>{var t=zd(),a=Pt.jf(t,!0);Pt.cL(t),Pt.vN((()=>Pt.j(a,Pt.Jt(n)))),Pt.BC(e,t)};Pt.if(r,(e=>{Pt.Jt(n)&&e(i)}));var l=Pt.AD(r,2);Pt.XI(l,((e,t)=>((e,t)=>{function a({doc:t}){e.textContent="";const a=I.bP.fromJSON(ae,t);re.serializeFragment(a.content,void 0,e);for(const t of e.querySelectorAll("p,h1,h2,h3,h4,h5,h6"))t.appendChild(document.createElement("br"))}return a(t),{update:a}})?.(e,t)),(()=>({doc:Pt.Jt(o)}))),Pt.cL(a),Pt.vN((()=>Pt.Jk(l,"aria-hidden",!!Pt.Jt(n)))),Pt.BC(e,a)},$$slots:{default:!0}})};Pt.if(h,(e=>{se(Pt.Jt(i))&&e(m)})),Pt.BC(e,p),Pt.uY()}(e,{get item(){return i()},get stateId(){return o()},get linkRenderConfig(){return b.linkRenderConfig},get searchTerm(){return Pt.Jt(u)}})};Pt.if(r,(e=>{Pt.Hz(y,"$hideTextContentForId",a)!==g()&&e(n)})),Pt.BC(e,t)},n=(e,t)=>{var a=e=>{!function(e,t){Pt.VC(t,!1),Pt.kZ(e,Yd);const a=Pt.zg(),r=Pt.zg(),i=Pt.zg(),o=Pt.zg(),n=Pt.zg(),c=Pt.zg();let d=Pt._w(t,"item",8),p=Pt._w(t,"stateId",8);const h=dp();let m=Pt.zg(),u=Pt.zg();function g(e,t){e.dispatchEvent(new CustomEvent(t,{bubbles:!0,detail:{itemId:d().id}}))}function f(e){g(e.target,Ji.mediaPlay)}function v(e){g(e.target,Ji.mediaPause)}function S(e){g(e.target,Ji.mediaEnd)}Pt.M3((()=>(Pt.iT(d()),Pt.iT(p()))),(()=>{Pt.hZ(a,d().states[p()])})),Pt.M3((()=>Pt.iT(d())),(()=>{Pt.hZ(r,d().states.default)})),Pt.M3((()=>(Pt.Jt(a),Pt.Jt(r))),(()=>{Pt.hZ(i,Pt.Jt(a).altText??Pt.Jt(r).altText)})),Pt.M3((()=>(Pt.Jt(a),Pt.Jt(r),Pt.Jt(u),Pt.iT(d()))),(()=>{const e=Pt.Jt(a).videoSources??Pt.Jt(r).videoSources;Pt.hZ(u,e.default);const t=Pt.Jt(u)&&d().assets?.[Pt.Jt(u)];Pt.hZ(m,t?h.resolvePath(t.path):void 0)})),Pt.M3((()=>(Pt.Jt(a),Pt.Jt(r))),(()=>{Pt.hZ(o,Pt.Jt(a).width??Pt.Jt(r).width)})),Pt.M3((()=>(Pt.Jt(a),Pt.Jt(r))),(()=>{Pt.hZ(n,Pt.Jt(a).height??Pt.Jt(r).height)})),Pt.M3((()=>(Pt.Jt(o),Pt.Jt(n))),(()=>{Pt.hZ(c,Pt.Jt(o)/Pt.Jt(n))})),Pt.iq(),Pt.Ts();var I=jd(),b=Pt.jf(I);Pt.Eb(b,p,(e=>{var t=Pt.Im(),a=Pt.es(t),r=e=>{!function(e,t){Pt.VC(t,!1),Pt.kZ(e,_d);const[a,r]=Pt.DZ(),i=()=>Pt.Hz(E,"$labels",a),o=Pt.zg(),n=Pt.zg(),c=Pt.zg(),d=Pt.zg(),p=Pt.zg(),h=Pt.zg(),m=Pt.zg(),u=Pt.zg(),g={a11yGroupVideoPlayer:"Video player",a11yMediaMute:"Mute",a11yMediaPause:"Pause",a11yMediaPlay:"Play",a11yMediaSeek:"Video progress",a11yMediaUnmute:"Unmute",a11yMediaVolume:"Volume level"},f=!0;let v=Pt._w(t,"mediaSrc",8),S=Pt._w(t,"itemId",8),I=Pt._w(t,"aspectRatio",8),b=Pt._w(t,"onPlay",8,(()=>{})),x=Pt._w(t,"onPause",8,(()=>{})),w=Pt._w(t,"onEnded",8,(()=>{})),y=Pt._w(t,"onMediaProgress",8,(()=>{})),k=Pt._w(t,"mediaStoreAdapter",8),C=Pt._w(t,"altText",8),T=Pt.zg(),B=Pt.zg(),M=Pt.zg(),L=Pt.zg(),A=Pt.zg(0),D=Pt.zg(!0),F=Pt.zg(1),z=Pt.zg(0),V=Pt.zg(0),$=Pt.zg(!1),J=Pt.zg(!1),P=!1,R=1,Z=Pt.zg(!1),O=Pt.zg(!1);const _=()=>0===Pt.Jt(F)?"muted":Pt.Jt(F)<=.33?"low":Pt.Jt(F)<=.66?"mid":"high",j=_l()((()=>{Pt.hZ(O,!1)}),2e3),Y=Jc()(y(),2e3),{mediaElements:H,labels:E}=dp(),G=!!HTMLVideoElement.prototype.requestPictureInPicture;(0,Qs.onMount)((()=>(H?.set(S(),Pt.Jt(B)),G&&Pt.Jt(B)?.addEventListener("leavepictureinpicture",te),Pt.Tk(M,Pt.Jt(M).value="0"),()=>{H?.delete(S()),G&&Pt.Jt(B)?.removeEventListener("leavepictureinpicture",te)}))),(0,Qs.onMount)((()=>k()?.subscribe(S(),(()=>{Pt.hZ(D,!0)}))));let X=Pt.zg(),q=Pt.zg(),N=Pt.zg(),U=Pt.zg();const W=()=>{Pt.hZ(O,!0),j()},Q=e=>{Pt.Jt(D)?(Pt.Jt(B).play().catch((()=>{})),e&&b()(e),Pt.hZ(Z,!0)):(Pt.Jt(B).pause(),e&&x()(e))};function K(e){Q(e),Pt.Jt(L)&&Pt.Jt(L).focus()}const ee=async()=>{document.pictureInPictureElement?await document.exitPictureInPicture():(await Pt.Jt(B).requestPictureInPicture(),Pt.hZ(J,!0))},te=()=>{Pt.hZ(J,!1)};let ae=Pt.zg();Pt.M3((()=>i()),(()=>{Pt.hZ(o,Pc(i(),g))})),Pt.M3((()=>(Pt.Jt(n),Pt.Jt(c),Pt.Jt(d),Pt.Jt(p),Pt.Jt(h),Pt.Jt(m),Pt.Jt(u),Pt.Jt(o))),(()=>{var e;e=Pt.Jt(o),Pt.hZ(n,e.a11yGroupVideoPlayer),Pt.hZ(c,e.a11yMediaMute),Pt.hZ(d,e.a11yMediaPause),Pt.hZ(p,e.a11yMediaPlay),Pt.hZ(h,e.a11yMediaSeek),Pt.hZ(m,e.a11yMediaUnmute),Pt.hZ(u,e.a11yMediaVolume)})),Pt.M3((()=>(Pt.Jt(A),Pt.Jt(V))),(()=>{Pt.hZ(X,Math.round(Pt.Jt(A)-Pt.Jt(V)))})),Pt.M3((()=>(Pt.Jt(X),Pt.Jt(U),Pt.Jt(z),Pt.Jt(A),Pt.iT(S()),Pt.Jt(D))),(()=>{Pt.hZ(q,l(Pt.Jt(X))),Pt.hZ(N,s(Pt.Jt(X))),Pt.hZ(U,Math.trunc(Number(Pt.Jt(z))/Pt.Jt(A)*100)),Y({mondrianItemId:S(),progress:Pt.Jt(U),duration:Pt.Jt(A),active:!Pt.Jt(D)})})),Pt.M3((()=>(Pt.iT(v()),Pt.Jt(B))),(()=>{Pt.hZ(ae,(e=>{const t=e.split(".").pop()?.toLowerCase();switch(t){case"webm":return"video/webm";case"mp4":return"video/mp4";case"ogg":case"ogm":case"ogv":return"video/ogg";case"mov":return"video/quicktime";case"avi":return"video/x-msvideo";case"mkv":return"video/x-matroska";default:return"application/octet-stream"}})(v())),Pt.Jt(B)?.load()})),Pt.iq(),Pt.Ts();var re=Od();let ie,oe;Pt.Jk(re,"aria-hidden",!1);var ne=Pt.jf(re),le=Pt.jf(ne),se=Pt.jf(le);Pt.cL(le),Pt.Lc(le,(e=>Pt.hZ(B,e)),(()=>Pt.Jt(B))),Pt.cL(ne);var ce=Pt.AD(ne,2),de=e=>{var t=Rd();Ac(Pt.jf(t),{icon:"arc-play",size:"21px"}),Pt.cL(t),Pt.f0("click",t,K),Pt.BC(e,t)};Pt.if(ce,(e=>{Pt.Jt(D)&&e(de)}));var pe=Pt.AD(ce,2),he=Pt.jf(pe),me=Pt.jf(he);const ue=Pt.Xd((()=>Pt.Jt(D)?"arc-play":"arc-pause"));Ac(me,{size:"14px",get icon(){return Pt.Jt(ue)}}),Pt.cL(he),Pt.Lc(he,(e=>Pt.hZ(L,e)),(()=>Pt.Jt(L)));var ge=Pt.AD(he,2),fe=Pt.jf(ge);Pt.R0(fe),Pt.Jk(fe,"min",0),Pt.Jk(fe,"step",.01),Pt.Lc(fe,(e=>Pt.hZ(M,e)),(()=>Pt.Jt(M)));var ve=Pt.AD(fe,2);let Se;Pt.cL(ge);var Ie=Pt.AD(ge,2),be=Pt.AD(Pt.jf(Ie),3,!0);Pt.cL(Ie);var xe=Pt.AD(Ie,2),we=e=>{var t=Zd(),a=Pt.jf(t);const r=Pt.Xd((()=>"arc-pip-"+(Pt.Jt(J)?"disable":"enable")));Ac(a,{get icon(){return Pt.Jt(r)},size:"20px"}),Pt.cL(t),Pt.vN((e=>Pt.Jk(t,"aria-label",e)),[()=>Pd()(Pt.Jt(J)?"exit picture-in-picture":"picture-in-picture")],Pt.Xd),Pt.f0("click",t,ee),Pt.BC(e,t)};Pt.if(xe,(e=>{G&&e(we)}));var ye=Pt.AD(xe,2),ke=Pt.jf(ye);const Ce=Pt.Xd((()=>"arc-fullscreen-"+(Pt.Jt($)?"disable":"enable")));Ac(ke,{get icon(){return Pt.Jt(Ce)},size:"15px"}),Pt.cL(ye);var Te=Pt.AD(ye,2),Be=Pt.jf(Te),Me=Pt.jf(Be);const Le=Pt.Xd((()=>`arc-volume-${_()}`));Ac(Me,{get icon(){return Pt.Jt(Le)},size:"18px"}),Pt.cL(Be);var Ae=Pt.AD(Be,2),De=Pt.jf(Ae);Pt.R0(De);var Fe=Pt.AD(De,2);let ze;Pt.cL(Ae),Pt.cL(Te),Pt.cL(pe),Pt.cL(re),Pt.Lc(re,(e=>Pt.hZ(T,e)),(()=>Pt.Jt(T))),Pt.vN(((e,t,a,r,i,o)=>{ie=Pt.ys(re,1,"video-player svelte-m58po",null,ie,e),Pt.Jk(re,"aria-label",C()||Pt.Jt(n)),oe=Pt.hg(re,"",oe,{"--aspect-ratio":I()}),le.volume=Pt.Jt(F),Pt.Jk(se,"src",v()),Pt.Jk(se,"type",Pt.Jt(ae)),Pt.Jk(pe,"aria-hidden",!Pt.Jt(Z)),Pt.Jk(he,"aria-label",Pt.Jt(D)?Pt.Jt(p):Pt.Jt(d)),Pt.Jk(fe,"max",Pt.Jt(A)),Pt.Jk(fe,"aria-label",Pt.Jt(h)),Pt.Jk(fe,"aria-valuenow",t),Pt.Jk(fe,"aria-valuetext",a),Se=Pt.hg(ve,"",Se,{"--slider-progress-percent":`${Pt.Jt(U)}%`}),Pt.Jk(Ie,"aria-valuetext",`${Pt.Jt(N)} remaining`),Pt.Jk(Ie,"aria-valuenow",Pt.Jt(X)),Pt.j(be,Pt.Jt(q)),Pt.Jk(ye,"aria-label",r),Pt.Jk(Be,"aria-label",i),Pt.Jk(De,"aria-label",Pt.Jt(u)),Pt.Jk(De,"aria-valuenow",Pt.Jt(F)),Pt.Jk(De,"aria-valuetext",o),Pt.to(De,Pt.Jt(F)),Pt.Jk(Fe,"aria-label",Pt.Jt(h)),ze=Pt.hg(Fe,"",ze,{"--slider-progress-percent":100*Pt.Jt(F)+"%"})}),[()=>({active:Pt.Jt(O),paused:Pt.Jt(D),fullscreen:Pt.Jt($),touched:Pt.Jt(Z)}),()=>Number(Pt.Jt(z)),()=>s(Number(Pt.Jt(z))),()=>Pd()(Pt.Jt($)?"exit full screen":"full screen"),()=>"muted"===_()?Pt.Jt(m):Pt.Jt(c),()=>`volume at ${Math.round(100*Pt.Jt(F))}%`],Pt.Xd),Pt.M$(le,(()=>Pt.Jt(V)),(e=>Pt.hZ(V,e))),Pt.IY("duration","durationchange",le,(e=>Pt.hZ(A,e))),Pt.Ej(le,(()=>Pt.Jt(D)),(e=>Pt.hZ(D,e))),Pt.f0("click",le,Q),Pt.f0("ended",le,(function(...e){w()?.apply(this,e)})),Pt.f0("timeupdate",le,(e=>{const t=e.currentTarget,{currentTime:a}=t;P||Pt.hZ(z,`${a}`)})),Pt.f0("play",le,(()=>k()?.play(S()))),Pt.f0("click",he,Q),Pt.oJ(fe,(()=>Pt.Jt(z)),(e=>Pt.hZ(z,e))),Pt.f0("input",fe,(()=>{P||(P=!0)})),Pt.f0("change",fe,(e=>{P&&(P=!1);const t=Number(e.currentTarget?.value);Pt.hZ(V,t)})),Pt.f0("keydown",fe,(function(e){const t=e.shiftKey?10:5;var a;e.key.startsWith("Arrow")&&(e.preventDefault(),W(),a=["ArrowLeft","ArrowDown"].includes(e.key)?-t:t,Pt.hZ(V,a<0?Math.max(Pt.Jt(V)+a,0):Math.min(Pt.Jt(V)+a,Pt.Jt(A)))),[" ","Enter"].includes(e.key)&&(e.preventDefault(),Q())})),Pt.f0("click",ye,(async()=>{document.fullscreenElement?await document.exitFullscreen():await Pt.Jt(T).requestFullscreen()})),Pt.f0("click",Be,(()=>{Pt.Jt(F)>0?(R=Pt.Jt(F),Pt.hZ(F,0)):Pt.hZ(F,R)})),Pt.f0("input",De,(e=>{const t=e.target;Pt.hZ(F,parseFloat(t.value))})),Pt.f0("keydown",De,(function(e){const t=e.shiftKey?.2:.1;var a;e.key.startsWith("Arrow")&&(e.preventDefault(),W(),a=["ArrowLeft","ArrowDown"].includes(e.key)?-t:t,Pt.hZ(F,a<0?Math.max(Pt.Jt(F)+a,0):Math.min(Pt.Jt(F)+a,1)))})),Pt.f0("fullscreenchange",re,(()=>{Pt.hZ($,!Pt.Jt($))})),Pt.f0("click",re,W),Pt.f0("mousemove",re,W),Pt.f0("keydown",re,W),Pt.BC(e,re),Pt.Ek(t,"allowTabNavigation",f);var Ve=Pt.uY({allowTabNavigation:f});r()}(e,{get mediaSrc(){return Pt.Jt(m)},get itemId(){return d().id},get aspectRatio(){return Pt.Jt(c)},onPlay:f,onPause:v,onEnded:S,get onMediaProgress(){return h.onMediaProgress},get mediaStoreAdapter(){return h.mediaStoreAdapter},get altText(){return Pt.Jt(i)}})};Pt.if(a,(e=>{Pt.Jt(m)&&e(r)})),Pt.BC(e,t)})),Pt.cL(I),Pt.vN((()=>Pt.Jk(I,"data-item-id",d().id))),Pt.BC(e,I),Pt.uY()}(e,{get item(){return i()},get stateId(){return o()}})},r=(e,t)=>{var a=e=>{!function(e,t){Pt.VC(t,!1),Pt.kZ(e,Hc);const a=Pt.zg(),r=Pt.zg(),i=Pt.zg();let o=Pt._w(t,"item",8),n=Pt._w(t,"stateId",8);const l=dp();let s=Pt.zg(),c=Pt.zg();function d(e,t){e.dispatchEvent(new CustomEvent(t,{bubbles:!0,detail:{itemId:o().id}}))}function p(e){d(e.target,Ji.mediaPlay)}function h(e){d(e.target,Ji.mediaPause)}function m(e){d(e.target,Ji.mediaEnd)}Pt.M3((()=>Pt.iT(o())),(()=>{Pt.hZ(a,o().states.default)})),Pt.M3((()=>(Pt.iT(o()),Pt.iT(n()))),(()=>{Pt.hZ(r,o().states[n()])})),Pt.M3((()=>(Pt.Jt(r),Pt.Jt(a))),(()=>{Pt.hZ(i,Pt.Jt(r).altText??Pt.Jt(a).altText)})),Pt.M3((()=>(Pt.Jt(r),Pt.Jt(a),Pt.Jt(c),Pt.iT(o()))),(()=>{const e=Pt.Jt(r).audioSources??Pt.Jt(a).audioSources;Pt.hZ(c,e.default);const t=Pt.Jt(c)&&o().assets?.[Pt.Jt(c)];Pt.hZ(s,t?l.resolvePath(t.path):void 0)})),Pt.iq(),Pt.Ts();var u=Yc(),g=Pt.jf(u);Pt.Eb(g,n,(e=>{var t=Pt.Im(),a=Pt.es(t),r=e=>{jc(e,{get item(){return o()},get mediaSrc(){return Pt.Jt(s)},onPlay:p,onPause:h,onEnded:m,get onMediaProgress(){return l.onMediaProgress},get mediaStoreAdapter(){return l.mediaStoreAdapter},get altText(){return Pt.Jt(i)}})};Pt.if(a,(e=>{Pt.Jt(s)&&e(r)})),Pt.BC(e,t)})),Pt.cL(u),Pt.vN((()=>Pt.Jk(u,"data-item-id",o().id))),Pt.BC(e,u),Pt.uY()}(e,{get item(){return i()},get stateId(){return o()}})};Pt.if(e,(e=>{"audio"===i().type&&e(a)}),t)};Pt.if(e,(e=>{"video"===i().type?e(a):e(r,!1)}),t)};Pt.if(e,(e=>{"text"===i().type||"shape"===i().type?e(r):e(n,!1)}),t)};Pt.if(S,(e=>{"group"===i().type?e(k):e(C,!1)})),Pt.cL(r),Pt.XI(r,((e,t)=>w?.(e,t)),(()=>({item:i(),triggers:Pt.Jt(h)}))),Pt.vN((e=>{n=Pt.ys(r,1,"mon-item svelte-19sv9wq",null,n,e),r.inert=!d(),Pt.Jk(r,"aria-hidden",!d()),c=Pt.hg(r,"",c,{opacity:Pt.Jt(p)})}),[()=>({"--smooth-transitions":L,"--clip":v(),"--hidden":!d()})],Pt.Xd),Pt.BC(e,r)},$$slots:{default:!0}}),Pt.uY(),r()}var Xd=Pt.vs('<div class="item-learner-hover svelte-1ov4e1m"></div>');const qd={hash:"svelte-1ov4e1m",code:".item-learner-hover.svelte-1ov4e1m {position:absolute;pointer-events:none;box-shadow:0 0 0 2px var(--arc-color-mono-white);outline:2px dashed var(--arc-color-border-selected);}"};function Nd(e,t){Pt.VC(t,!1),Pt.kZ(e,qd);const[a,r]=Pt.DZ(),o=()=>Pt.Hz(c,"$styleProps",a);let n=Pt._w(t,"itemId",8);const l=dp(),s=(0,i.writable)({itemId:n()}),c=function(e){const t=new Map;let a;function r(){for(const{unsubscribe:e}of t.values())e();t.clear()}function o(e){if(!a)throw new Error("scopeGet may only be called synchronously from within a running reaction scope");a.add(e);let r=t.get(e),i=!0;return r||(r={value:null,unsubscribe:null},r.unsubscribe=e.subscribe((e=>{r.value=e,i||d()})),t.set(e,r),i=!1),r.value}const n=(0,i.writable)(null,(function(){return c(),r}));function c(){let e;a=new Set;try{e=(e=>{const{itemId:t}=e(s);if(!t)return null;let a=e(l.getItem(t));if(!a)return null;let r="",i=0,o=0;for(;;){const n=a.parentId===a.blockumentId,s=a.states.default,c=e(l.getState(t)),d=a.states[c],p=d.width??s.width,h=d.height??s.height;if(a.id===t&&(i=p,o=h),n)break;const m=.5*p,u=.5*h;r=`\n        translate(${s.x+(d.xOffset??0)+m}px, ${s.y+(d.yOffset??0)+u}px)\n        rotate(${d.rotation??s.rotation}deg)\n        scale(${d.flipX??s.flipX?-1:1}, ${d.flipY??s.flipY?-1:1})\n        translate(${-m}px, ${-u}px)\n      `+r,a=e(l.getItem(a.parentId))}return{transform:r,width:i+"px",height:o+"px"}})(o)}finally{const e=[];for(const r of t.keys())a.has(r)||e.push(r);for(const a of e)t.get(a).unsubscribe(),t.delete(a);a=void 0}n.set(e)}const d=function(e){let t;return()=>{function a(){t===a&&(e(),t=void 0)}t=a,(async()=>{await 0,a()})()}}(c);return n}();Pt.M3((()=>Pt.iT(n())),(()=>{Pt.fT(s,{itemId:n()})})),Pt.iq(),Pt.Ts();var d=Pt.Im(),p=Pt.es(d),h=e=>{var t=Xd();let a;Pt.vN((()=>a=Pt.hg(t,"",a,{transform:o().transform,width:o().width,height:o().height}))),Pt.BC(e,t)};Pt.if(p,(e=>{null!=o()&&e(h)})),Pt.BC(e,d),Pt.uY(),r()}var Ud=Pt.vs('<div class="ui-theme svelte-1hfium2"><!></div>');const Wd={hash:"svelte-1hfium2",code:"\n  /* Note that :root is important for elements injected into `body`\n  to have access to these vars. */:root,\n  :host {--mon-color-border: var(--arc-color-border-standard);--mon-color-border-selected: var(--arc-color-brand-root);--mon-color-primary: var(--arc-color-blue-600);--mon-color-secondary: var(--arc-color-blue-500);--mon-opacity-inert: var(--arc-alpha-50);--mon-color-input: var(--arc-color-alpha-black-03);\n\n    /**\n      Rise uses a hardcoded hex value of #b5d5fd for text selection color. The issue with this value is\n      that it has no transparency, which means when text is selected you can no longer see any applicable\n      highlighting. \n\n      For us, we want a visually similar color that has some transparency to allow for underlying highlights\n      to still be visible when text is selected. We can employ color blending logic to calculate this color.\n\n      #b5d5fd is an RGB of (181, 213, 253). If we assume a white background (255, 255, 255) and apply 70% opacity\n      to the blue color, we can solve for the resulting blended color:\n\n        R1 = (R3 - R2 + R2 * A) / A\n        G1 = (G3 - G2 + G2 * A) / A\n        B1 = (B3 - B2 + B2 * A) / A\n\n      This color ends up being visually darker than #b5d5fd when the backdrop is darker than white, but that's an\n      unavoidable tradeoff which comes with using transparency. \n\n      This approach does not really address scenarios where the backdrop have low contrast with the effective selection\n      color, as that will require a more involved auto-contrast solution.\n    */\n    /** 70% opacity seems to be reasonable for allowing highlights to peek through, can tune based on feedback */--mon-text-selection-a: 0.7;--mon-text-selection-r: calc(\n      (181 - 255 + 255 * var(--mon-text-selection-a)) /\n        var(--mon-text-selection-a)\n    );--mon-text-selection-g: calc(\n      (213 - 255 + 255 * var(--mon-text-selection-a)) /\n        var(--mon-text-selection-a)\n    );--mon-text-selection-b: calc(\n      (253 - 255 + 255 * var(--mon-text-selection-a)) /\n        var(--mon-text-selection-a)\n    );--mon-color-text-selection: rgba(\n      var(--mon-text-selection-r),\n      var(--mon-text-selection-g),\n      var(--mon-text-selection-b),\n      var(--mon-text-selection-a)\n    );\n\n    /*\n     * Some z-indexes for things that may occupy a shared stacking context.\n     * When possible, order problems should be resolved by using isolation instead.\n     */--mon-z-index-select: 3000;--mon-z-index-popover: 3100;--mon-z-index-context-menu: 3200;--mon-z-index-tooltip: 4000;--mon-z-index-toast: 5000;--mon-input-padding: var(--arc-space-0-75) var(--arc-space-1);--mon-input-height: 3.2rem;--mon-focus-outline-width: 0.2rem;--mon-input-hover-box-shadow: inset 0 0 0 0.1rem\n      var(--arc-color-border-stark);--mon-input-focus-box-shadow: inset 0 0 0 var(--mon-focus-outline-width)\n      var(--arc-color-border-focus);--mon-button-hover-background: var(--arc-color-alpha-black-05);--mon-button-active-background: var(--arc-color-alpha-black-10);}.ui-theme.svelte-1hfium2 {font-family:var(--arc-font-family-body);font-size:var(--arc-font-size-14);\n\n    /**\n    Short term fix for CBs which render in Rise RTL lessons.\n    More details: https://github.com/articulate/mondrian/issues/3172\n    */direction:ltr;\n\n    /*\n    Most descendants set their own color, but some don't, so set a starting inheritable color in case the\n    color outside is inconsistent.\n    */color:var(--arc-color-mono-black);\n\n    /**\n      Disable synthesis by default and re-enable in children on a case-by-case basis as needed.\n      For instance, item text wrappers have an override to enable synthesis of style and weight.\n    */font-synthesis:none;}.ui-theme.svelte-1hfium2 *,\n  .ui-theme.svelte-1hfium2 *::before,\n  .ui-theme.svelte-1hfium2 *::after {box-sizing:border-box;}.ui-theme.svelte-1hfium2 :where(button, input, textarea) {font-family:inherit;}.mon-sr-only {clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;}:where(.mon-focusable) {border-radius:var(--arc-border-radius-sm);}:where(.mon-focusable:not(:disabled, :has(:disabled)):hover) {box-shadow:inset 0 0 0 0.1rem var(--arc-color-neutral-100);}:where(.mon-focusable:is(:focus-visible, :has(:focus-visible))) {box-shadow:var(--mon-input-focus-box-shadow);}\n\n  /* TODO: Consider moving this utility class to own file */.mon-visually-hidden {clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;}\n\n  /** Custom tiptap overrides intended to be enforced by Mondrian specifically */.tiptap {font-family:var(--mon-theme-font-body);min-height:100%;width:100%;\n    /* These will generally be overridden by per-node styles. */font-size:14px;color:black;line-height:1.4;\n    /* Override some ARC defaulted things */font-variation-settings:normal;\n    /*\n      This ensures the browser can synthesize bold/italic styles for Rise fonts used in canvas items when the loaded\n      font files for those font families don't include bold/italic variants. TODO: Add support for small-caps\n      if/when we add support for small-cap chars\n    */font-synthesis:style weight;}.tiptap :is(h1, h2, h3, h4, h5, h6) {font-family:var(--mon-theme-font-heading);font-size:inherit;font-weight:inherit;}.tiptap :is(p, h1, h2, h3, h4, h5, h6, ul, ol) {margin:0;}.tiptap :is(ul, ol) {padding:0;padding-inline-start:40px;}\n\n  /** Ensure subscript & superscript elements are consistently styled across UAs */.tiptap :is(sub, sup) {font-size:smaller;}.tiptap :is(sub) {vertical-align:sub;}.tiptap :is(sup) {vertical-align:super;}.tiptap > :last-child {\n    /* The last paragraph/heading should have no space-after at all.\n    Since the individual space-after values are applied directly as style attributes, this needs\n    to be high specificity to override */margin-block-end:0 !important;}.tiptap strong {font-weight:bold;}.tiptap em {font-style:italic;}.tiptap s {text-decoration:line-through;}.tiptap u {text-decoration:underline;}\n\n  /** To align with Rise */.tiptap a {color:var(--color-theme);text-decoration:none;}.tiptap a > span {text-decoration:underline;}\n\n  /** Copy of styles that tiptap normally injects into the document head. We render in a shadow root\n    * so default injection doesn't work for us. So we just instead reproduce the rules in our UiTheme styles\n    * which do get rendered within our shadow root wrapper. \n    * TODO: Engage tiptap team about exporting their JS styles so we dont have to do stuff like this\n    */.ProseMirror {position:relative;word-wrap:break-word;white-space:pre-wrap;white-space:break-spaces;font-variant-ligatures:none;font-feature-settings:'liga' 0; /* the above doesn't seem to work in Edge */}.ProseMirror [contenteditable='false'] {white-space:normal;}.ProseMirror [contenteditable='false'] [contenteditable='true'] {white-space:pre-wrap;}.ProseMirror pre {white-space:pre-wrap;}img.ProseMirror-separator {display:inline !important;border:none !important;margin:0 !important;width:1px !important;height:1px !important;}.ProseMirror-gapcursor {display:none;pointer-events:none;position:absolute;margin:0;}.ProseMirror-gapcursor:after {content:'';display:block;position:absolute;top:-2px;width:20px;border-top:1px solid black;\n    animation: svelte-1hfium2-ProseMirror-cursor-blink 1.1s steps(2, start) infinite;}\n\n  @keyframes svelte-1hfium2-ProseMirror-cursor-blink {\n    to {\n      visibility: hidden;\n    }\n  }.ProseMirror-hideselection *::selection {background:transparent;}.ProseMirror-hideselection *::-moz-selection {background:transparent;}.ProseMirror-hideselection * {caret-color:transparent;}.ProseMirror-focused .ProseMirror-gapcursor {display:block;}.tippy-box[data-animation='fade'][data-state='hidden'] {opacity:0;}"};function Qd(e,t,a,r){return t.addEventListener(e,a,r),()=>{t.removeEventListener(e,a,r)}}function Kd(e=window.document){const t=e.activeElement;return t?t.shadowRoot?Kd(t.shadowRoot):t:null}const ep={Low:-10,Generic:0,Tooltip:10};let tp=[];function ap(e,t){const a=[];let r;{let i=0;for(;i<tp.length;i+=1){const e=tp[i];if(e.order>t)break;a.push(e)}for(r=i,a.push({element:e,order:t});i<tp.length;i+=1){const e=tp[i];e.element.hidePopover(),a.push(e)}}for(let e=r;e<a.length;e+=1)a[e].element.showPopover();tp=a}function rp(e){const t=tp.findIndex((t=>t.element===e));t>=0&&tp.splice(t,1),e.hidePopover()}const ip=(e,{item:t,triggers:a})=>{function r(r,i={}){a.filter((e=>e.event===r)).forEach((a=>{!function(e,t,a){t.dispatchEvent(new CustomEvent("trigger",{detail:a,bubbles:!0}))}(0,e,{itemId:t.id,triggerId:a.id,...i})}))}const i=[...new Set(a.map((e=>e.event)))].map((t=>{switch(t){case Ji.hover:{let a=!1;return[Qd("mouseenter",e,(e=>{a||(a=!0,r(t,{hovered:a}))})),Qd("mouseleave",e,(e=>{a&&(a=!1,r(t,{hovered:a}))}))]}case Ji.click:return[Qd("click",e,(e=>{const a=window.getSelection();"Range"!==a?.type&&r(t)})),Qd("keyup",e,(e=>{["Space","Enter"].includes(e.code)&&e.target===document.activeElement&&r(t)}))];case Ji.mediaPlay:case Ji.mediaPause:case Ji.mediaEnd:return Qd(t,e,(e=>{r(t)}));default:return Qd(t,e,(()=>{r(t)}))}})).flat(2).filter(Boolean);return{destroy(){i.forEach((e=>{e()}))}}},op=(e,{items:t,currentStates:a,currentVisibles:r,triggers:i,mediaElements:o})=>{const n=$t()(i,"sourceId"),l={[Pi](e,r,i){const o="self"===e.targetId[0]?r:t[e.targetId[0]];!1===i.hovered?a.get(o.id)?.revert(e.targetState):a.get(o.id)?.set(e.targetState)},[Ri](e,a,i){e.targetId.forEach((o=>{const n="self"===o?a:t[o];!1===i.hovered?r.get(n.id)?.set(!e.targetVisibility):r.get(n.id)?.set(e.targetVisibility)}))},[Zi](e,t){e.targetId.forEach((e=>{const a=o?.get("self"===e?t.id:e);a?.pause()}))},[Oi](e,t){e.targetId.forEach((e=>{const a=o?.get("self"===e?t.id:e);a?.play().catch((()=>{}))}))},[_i](e,t){e.targetId.forEach((e=>{const a=o?.get("self"===e?t.id:e);a&&(a.currentTime=a.duration,a.pause())}))},[ji](e,t){}},s=Qd("trigger",e,(e=>{const{itemId:a,triggerId:r,...i}=e.detail,o=t[a];if(!o)throw new Error(`Could not execute trigger ${r} on item ${a} because the item could not be found.`);const s=n[o.id]?.find((e=>e.id===r));if(!s||!s.actions.length)throw new Error(`Could not execute trigger ${r} on item ${a} because the trigger could not be found.`);s.actions.forEach((e=>{const t=l[e.type];if(!t)throw new Error(`Could not execute trigger ${r} on item ${a} because an appropriate handler for its '${e.type}' action could not be found.`);t(e,o,i)}))}));return{destroy(){s()}}},np="isLearn",lp=()=>(0,Qs.getContext)(np)??!1;function sp(){return{externalLinksDisabled:!1,isExternalLink:e=>!1}}const cp="ItemRenderingContext";function dp(){const e=(0,Qs.getContext)(cp);if(!e)throw new Error("This component must be provided with an ItemRenderingContext");return e}const pp=Rt.YOg(Rt.YjP());var hp=Pt.vs("<div> </div>"),mp=Pt.vs('<div class="preview svelte-1hpxqaf"><div class="width-gauge svelte-1hpxqaf"></div> <div class="item-wrapper clip svelte-1hpxqaf"><!> <!></div></div>'),up=Pt.vs('<div class="item-wrapper svelte-1hpxqaf"><!></div>'),gp=Pt.vs("<!> <!>",1);const fp={hash:"svelte-1hpxqaf",code:".preview.svelte-1hpxqaf {\n    /* Stacking context so Rise doesn't need to know about Mondrian z-indexes */isolation:isolate;width:100%;display:flex;flex-direction:column;align-items:center;}.item-wrapper.svelte-1hpxqaf {transform-origin:center top;position:relative;&.clip {overflow:clip;}}.width-gauge.svelte-1hpxqaf {width:100%;}"};var vp=a(6186),Sp=a.n(vp),Ip=a(4535);const bp=((e,t={width:"100%"},a="div")=>r=>{const i=(0,vp.useRef)(null),o=(0,vp.useRef)(null);return(0,vp.useEffect)((()=>{const t=i.current.shadowRoot??i.current.attachShadow({mode:"open",clonable:!0,serializable:!0});return o.current=(0,Ip.YU)({component:e,target:t,props:r}),()=>{o.current?.$destroy()}}),[]),(0,vp.useEffect)((()=>{o.current?.$set(r)}),[r]),Sp().createElement(a,{ref:i,style:t,"data-mondrian-shadow-root-host":!0,"data-arc-theme":"font-family"})})((function(e,t){Pt.VC(t,!1),Pt.kZ(e,fp);const[a,o]=Pt.DZ(),n=()=>Pt.Hz(V,"$itemsById",a),l=()=>Pt.Hz(Pt.Jt(p),"$rootItemCurrentStateId",a),s=Pt.zg(),p=Pt.zg(),m=Pt.zg(),u=Pt.zg(),g=Pt.zg();let f=Pt._w(t,"manifest",8),v=Pt._w(t,"blockumentId",8),S=Pt._w(t,"prefetch",8,!0),I=Pt._w(t,"searchTerm",8,void 0),b=Pt._w(t,"locale",8,void 0),x=Pt._w(t,"labels",8,void 0),w=Pt._w(t,"hoveredItemPath",8,null),y=Pt._w(t,"runtimeInterface",8,void 0),k=Pt._w(t,"linkRenderConfig",24,sp),C=Pt._w(t,"mediaStoreAdapter",8,void 0),T=Pt._w(t,"transcriptPanelAdapter",8,void 0),B=Pt._w(t,"autoSize",8,!0),M=Pt._w(t,"onMediaProgress",8,(()=>{}));(0,Qs.setContext)(np,!0);let L=Pt.zg(),A=Pt.zg();const D=function(){const e=new Map;return{...(0,i.writable)(e),add:(t,a)=>(e.has(t)||e.set(t,function(e){let t,a,r;e.subscribe((e=>{t=e}));const o=(0,i.writable)(t);o.subscribe((e=>{a=r??t,r=e}));const n={...o,revert(e){r===e&&n.set(a)},reset(){n.set(t)}};return n}(a)),e.get(t)),get(t){if(!e.has(t))throw new Error(`No state found for item ${t}`);return e.get(t)},resetAll(){[...e.values()].forEach((e=>{e.reset()}))}}}(),F=function(){const e=new Map;return{...(0,i.writable)(e),upsert(t,a){if(!e.has(t)){const r=function(e){const t={...(0,i.writable)(e),show(){t.set(!0)},hide(){t.set(!1)},reset(){t.set(e)}};return t}(a);return e.set(t,r),r}const r=e.get(t);return r.set(a),r},get(t){if(!e.has(t))throw new Error(`No visibility found for item ${t}`);return e.get(t)},resetAll(){[...e.values()].forEach((e=>{e.reset()}))}}}(),z=(0,i.writable)(new Map),V=(0,i.writable)({}),$=(0,i.derived)(V,(e=>c(e))),J=(0,i.writable)(b());(0,i.derived)([z,$],(([e,t])=>({triggers:e,items:t}))).subscribe((({items:e})=>{e.forEach((e=>{D.add(e.id,(0,i.readable)(e.initialState)),F.upsert(e.id,e.initialVisible)})),F.resetAll(),D.resetAll()}));const P=new Map,R=(0,i.writable)(I()),Z=(0,i.writable)({});Z.subscribe(M());const O=(0,i.writable)(x()||{}),_={getTriggersBySourceId:()=>(0,i.readonly)(z),getItem:e=>(0,i.derived)([V,J],(([t,a])=>{const r=t[e];return r&&a?function(e,t){if(!t||!e.localeOverrides[t])return e;const a=structuredClone(e),r=a.localeOverrides[t];for(const[e,t]of d(r.states)){const r=a.states[e];r&&h(r,t)}return a}(r,a.active??null):r})),getState:e=>D.get(e),getVisible:e=>F.get(e),searchTerm:(0,i.readonly)(R),bindTriggers:ip,mediaElements:P,hideTextContentForId:(0,i.readable)(null),resolvePath:e=>(y()?.resolvePath??r)(e),linkRenderConfig:k(),mediaStoreAdapter:C(),transcriptPanelAdapter:(0,i.writable)(T()),onMediaProgress:e=>{const{mondrianItemId:t,...a}=e,r=n()[t];if(r){const e="audio"===r.type?r.states.default.audioSources?.default:"video"===r.type?r.states.default.videoSources?.default:null;e&&Z.update((t=>(t[e]={...a,itemId:e},t)))}},labels:O};var j;j=_,(0,Qs.setContext)(cp,j);let Y=Pt.zg();(0,Qs.onMount)((()=>{F.resetAll();const e=new ResizeObserver((()=>{Pt.Jt(Y)&&E()}));return Pt.Jt(Y)&&e.observe(Pt.Jt(Y)),()=>{e.disconnect()}}));let H=Pt.zg(1);function E(){if(!(Pt.Jt(A)&&Pt.Jt(Y)&&l()&&B()&&Pt.Jt(u)&&Pt.Jt(g)))return;const e=Pt.Jt(Y).offsetWidth;Pt.hZ(H,Math.min(1,e/Pt.Jt(u)))}let G=Pt.zg(),X=Pt.zg(),q=Pt.zg("off");const N=_l()((e=>{Pt.hZ(q,e?"polite":"off")}),100,{maxWait:500,trailing:!0});function U(){N(!0)}function W(){N(!1)}Pt.M3((()=>Pt.iT(w())),(()=>{Pt.hZ(s,function(e){const t=pp.safeParse(e);if(!t.success)return null;const a=Go(t.data);return a?.itemId??null}(w()))})),Pt.M3((()=>Pt.iT(b())),(()=>{J.set(b())})),Pt.M3((()=>(Pt.iT(f()),Pt.iT(v()),Pt.Jt(L),Jt)),(()=>{const e=function(e,t){const a={},{items:r}=e;if(r)for(const e of c(r))e.blockumentId===t&&(a[e.id]=structuredClone(e));return a}(f(),v());Pt.hZ(L,f().blockuments?.[v()]),Pt.hZ(A,Pt.Jt(L)?.children[0]?.id),z.set(Jt(Pt.Jt(L)?.triggers??[])),V.set(e)})),Pt.M3((()=>Pt.iT(I())),(()=>{R.set(I())})),Pt.M3((()=>Pt.iT(x())),(()=>{Pt.fT(O,x()||{})})),Pt.M3((()=>Pt.iT(T())),(()=>{_.transcriptPanelAdapter.update((()=>T()))})),Pt.M3((()=>Pt.Jt(A)),(()=>{Pt.QK(Pt.hZ(p,Pt.Jt(A)?D.get(Pt.Jt(A)):void 0),"$rootItemCurrentStateId",a)})),Pt.M3((()=>(Pt.Jt(A),n(),l(),zt)),(()=>{Pt.hZ(m,Pt.Jt(A)&&n()[Pt.Jt(A)]&&l()?zt(n()[Pt.Jt(A)],l(),["width","height"]):void 0)})),Pt.M3((()=>Pt.Jt(m)),(()=>{Pt.hZ(u,Pt.Jt(m)?.width)})),Pt.M3((()=>Pt.Jt(m)),(()=>{Pt.hZ(g,Pt.Jt(m)?.height)})),Pt.M3((()=>(Pt.Jt(G),Pt.Jt(u),Pt.Jt(X),Pt.Jt(g))),(()=>{Pt.Jt(G)===Pt.Jt(u)&&Pt.Jt(X)===Pt.Jt(g)||(Pt.hZ(G,Pt.Jt(u)),Pt.hZ(X,Pt.Jt(g)),E())})),Pt.iq(),Pt.Ts(),function(e,t){Pt.kZ(e,Wd);var a=Ud(),r=Pt.jf(a);Pt.NI(r,t,"default",{},null),Pt.cL(a),Pt.BC(e,a)}(e,{children:(e,t)=>{var r=gp(),i=Pt.es(r),o=e=>{!function(e,t){Pt.VC(t,!1);const a=Pt.zg();let r=Pt._w(t,"items",8);const i=dp();Pt.M3((()=>(Pt.iT(r()),c)),(()=>{Pt.hZ(a,new Map(r().flatMap((e=>c(e.assets??{}))).map((e=>[e.id,e]))))})),Pt.iq(),Pt.Ts(),Pt.d5((e=>{var t=Pt.Im(),r=Pt.es(t);Pt.__(r,1,(()=>Pt.Jt(a).values()),(e=>e.id),((e,t)=>{var a=yl();Pt.vN((e=>Pt.Jk(a,"href",e)),[()=>i.resolvePath(Pt.Jt(t).path)],Pt.Xd),Pt.BC(e,a)})),Pt.BC(e,t)})),Pt.uY()}(0,{get items(){return Pt.Hz($,"$itemsList",a)}})};Pt.if(i,(e=>{S()&&e(o)}));var l=Pt.AD(i,2),d=e=>{var t=hp(),a=Pt.jf(t);Pt.cL(t),Pt.vN((()=>Pt.j(a,`Block ${v()??""} could not be loaded`))),Pt.BC(e,t)},p=e=>{!function(e,t){Pt.VC(t,!1),Pt.kZ(e,Vc);const a=function(){const e=new Set;return(0,Qs.setContext)("mondrian-suspense",e),e}();let r=Pt.zg(!0);(0,Qs.onMount)((()=>{Promise.all(a).then((()=>{Pt.hZ(r,!1)}))})),Pt.Ts();var i=zc();let o;var n=Pt.jf(i);Pt.NI(n,t,"default",{get isLoading(){return Pt.Jt(r)}},null),Pt.cL(i),Pt.vN((e=>o=Pt.ys(i,1,"suspense svelte-1i06x9o",null,o,e)),[()=>({"--loading":Pt.Jt(r)})],Pt.Xd),Pt.BC(e,i),Pt.uY()}(e,{children:(e,t)=>{var a=Pt.Im(),r=Pt.es(a),i=e=>{var t=mp();let a;var r=Pt.jf(t);Pt.Lc(r,(e=>Pt.hZ(Y,e)),(()=>Pt.Jt(Y)));var i=Pt.AD(r,2);let o;var l=Pt.jf(i);Gd(l,{get itemId(){return Pt.Jt(A)},visualOrder:0,noTransform:!0,clip:!0});var c=Pt.AD(l,2),d=e=>{Nd(e,{get itemId(){return Pt.Jt(s)}})};Pt.if(c,(e=>{Pt.Jt(s)&&e(d)})),Pt.cL(i),Pt.QZ((()=>Pt.f0("focus",i,U))),Pt.QZ((()=>Pt.f0("blur",i,W))),Pt.QZ((()=>Pt.f0("focusin",i,U))),Pt.QZ((()=>Pt.f0("mouseover",i,U))),Pt.QZ((()=>Pt.f0("mouseout",i,W))),Pt.QZ((()=>Pt.f0("focusout",i,W))),Pt.XI(i,((e,t)=>op?.(e,t)),(()=>({items:n(),currentStates:D,currentVisibles:F,triggers:Pt.Jt(L).triggers,mediaElements:P}))),Pt.cL(t),Pt.vN((()=>{a=Pt.hg(t,"",a,{height:(Pt.Jt(g)??500)*Pt.Jt(H)+"px"}),Pt.Jk(i,"aria-live",Pt.Jt(q)),o=Pt.hg(i,"",o,{transform:`scale(${Pt.Jt(H)??""})`,width:`${Pt.Jt(u)??""}px`,height:`${Pt.Jt(g)??""}px`,"min-height":`${Pt.Jt(g)??""}px`})})),Pt.BC(e,t)},o=e=>{var t=up();let a;Gd(Pt.jf(t),{get itemId(){return Pt.Jt(A)},visualOrder:0,clip:!0}),Pt.cL(t),Pt.QZ((()=>Pt.f0("focus",t,U))),Pt.QZ((()=>Pt.f0("blur",t,W))),Pt.QZ((()=>Pt.f0("focusin",t,U))),Pt.QZ((()=>Pt.f0("mouseover",t,U))),Pt.QZ((()=>Pt.f0("mouseout",t,W))),Pt.QZ((()=>Pt.f0("focusout",t,W))),Pt.XI(t,((e,t)=>op?.(e,t)),(()=>({items:n(),currentStates:D,currentVisibles:F,triggers:Pt.Jt(L).triggers,mediaElements:P}))),Pt.vN((()=>{Pt.Jk(t,"aria-live",Pt.Jt(q)),a=Pt.hg(t,"",a,{width:`${Pt.Jt(u)??""}px`,height:`${Pt.Jt(g)??""}px`})})),Pt.BC(e,t)};Pt.if(r,(e=>{B()?e(i):e(o,!1)})),Pt.BC(e,a)},$$slots:{default:!0}})};Pt.if(l,(e=>{void 0===Pt.Jt(L)||void 0===Pt.Jt(A)?e(d):e(p,!1)})),Pt.BC(e,r)},$$slots:{default:!0}}),Pt.uY(),o()})),xp=new WeakMap,wp=e=>{const{manifest:t,...a}=e,r=(0,vp.useMemo)((()=>{let e=xp.get(t);if(!e){try{e=function(e){const t=function(e){const t=Ui.parse(e);let a,r;function i(e){if(e)for(const{id:t,_v:i}of c(e))if(null==a)a=i,r=t;else if(a!==i)throw new Error(`Multiple versions found in manifest: { id: ${r}, _v: ${a} } and { id: ${t}, _v: ${i} }`)}return i(t.blockuments),i(t.items),a??30}(e);return 30===t?Il.parse(e):function(e,t){return Hi()(function(e,t){const a=Gi()(e+1,31),r=wl.filter((({version:e})=>a.includes(e)));return qi()(r,"version")}(e).map((({InputSchema:e,upgrade:t,OutputSchema:a})=>Hi()(e.parse,t,a.parse))))}(t)(e)}(t)}catch{}e&&xp.set(t,e)}return e}),[t]);return r?Sp().createElement(bp,{manifest:r,...a}):null},yp=["shape","text"],kp=(e,t,a,r)=>{if(t){if("group"===t.type)return t?.children.reduce(((t,i)=>t+kp(e,a[i.id],a,r)),0);if((e=>yp.includes(e.type))(t)){const a=r&&t.localeOverrides[r]?.states[t.initialState]?.text,i=t.states[t.initialState].text,o=a||i;if(o){const t=function(e,t){if(!t)return 0;const a=new RegExp(x()(t),"gi");let r=0;return function e({content:t}){if(!t?.length)return;const i=t[0].type;if("text"===i||"hardBreak"===i){let e="";for(const{type:a,text:r}of t)"text"===a&&r?e+=r:"hardBreak"===a&&(e+="\n");for(a.lastIndex=0;a.test(e);)r+=1}else for(const a of t)e(a)}(e),r}(o.json,e);return t}}}return 0},Cp=(e,t,a,r)=>t.reduce(((t,i)=>(t[i.id]=a.items?i.items.reduce(((t,i)=>{const o=a.blockuments?.[i.blockumentId];return o?t+kp(e,a.items?.[o.children[0].id],a.items||{},r||null):t}),0):0,t)),{});function Tp(e,t){const a=function(e,t){const a=null,r={};for(const t of e){const e=Go(t.path);if(!e)continue;const{blockumentId:i,itemId:o,stateId:n,type:l}=e;let s;switch(l){case"richText":s={blockumentId:i,itemId:o,stateId:n,type:l,translationId:a,doc:Yo(t.command.newValue)};break;case"altText":s={blockumentId:i,itemId:o,stateId:n,type:l,translationId:a,altText:t.command.newValue};break;case"transcript":s={blockumentId:i,itemId:o,stateId:n,type:l,translationId:a,transcript:t.command.newValue};break;case"script":s={blockumentId:i,itemId:o,stateId:n,type:l,translationId:a,script:t.command.newValue}}(r[t.locale]??=[]).push(s)}return function(e,t){const a=new Map;for(const[r,i]of d(t))for(const t of i){const{itemId:i,stateId:o}=t;if(!Ho(i)||!Ho(o)&&"default"!==o)throw new Error("itemId or stateId invalid");let n=a.get(i);if(!n&&Object.hasOwn(e,i)){const t=e[i];n=structuredClone(t),a.set(i,n)}if(n)if(Object.hasOwn(n.states,o))switch(t.type){case"altText":ce(n.localeOverrides,o,r,t.translationId).altText=t.altText;break;case"transcript":"audio"===n.type&&(ce(n.localeOverrides,o,r,t.translationId).transcript=t.transcript);break;case"richText":if("shape"===n.type||"text"===n.type){const e=ce(n.localeOverrides,o,r,t.translationId);e.text?e.text.json=t.doc:e.text={id:crypto.randomUUID(),type:"tiptap",json:t.doc}}break;case"script":if("audio"===n.type){const e=ce(n.localeOverrides,o,r,t.translationId);if(!e.aiAudioSettings){const t=n.states[o]?.aiAudioSettings;if(!t)break;e.aiAudioSettings=structuredClone(t)}e.aiAudioSettings.text=t.script}}else for(const{states:e}of c(n.localeOverrides))Object.hasOwn(e,o)&&delete e[o]}return[...a.values()]}(t,r)}(Ni.parse(t),e.items??{}),r={...e.items};for(const e of a)r[e.id]=e;return{blockuments:e.blockuments??{},items:r}}}}]);