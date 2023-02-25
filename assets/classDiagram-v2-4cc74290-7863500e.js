import{p as _,d as L,s as I}from"./styles-bd38c0ff-6bf9dc39.js";import{l as d,c as y,h as v,y as M,t as R,r as m,o as x,p as $,k as C}from"./mermaid.core-6091b0ea.js";import{G as B}from"./index-b2dc097a.js";import{r as G}from"./index-64e46a5f-90530330.js";import"./app-a1a779bf.js";import"./framework-8aef05fa.js";import"./isPlainObject-436bb0a1.js";import"./array-9f3ba611.js";import"./path-53f90ab3.js";import"./edges-02da71a2-2595fd24.js";import"./svgDraw-87c143cd-13e19836.js";const D=s=>C.sanitizeText(s,y());let E={dividerMargin:10,padding:5,textHeight:10};const z=function(s,o,f,r){const t=Object.keys(s);d.info("keys:",t),d.info(s),t.forEach(function(l){const e=s[l];let c="";e.cssClasses.length>0&&(c=c+" "+e.cssClasses.join(" "));const a={labelStyle:""};let b=e.text!==void 0?e.text:e.id,i=0,p="";switch(e.type){case"class":p="class_box";break;default:p="class_box"}o.setNode(e.id,{labelStyle:a.labelStyle,shape:p,labelText:D(b),classData:e,rx:i,ry:i,class:c,style:a.style,id:e.id,domId:e.domId,tooltip:r.db.getTooltip(e.id)||"",haveCallback:e.haveCallback,link:e.link,width:e.type==="group"?500:void 0,type:e.type,padding:y().flowchart.padding}),d.info("setNode",{labelStyle:a.labelStyle,shape:p,labelText:b,rx:i,ry:i,class:c,style:a.style,id:e.id,width:e.type==="group"?500:void 0,type:e.type,padding:y().flowchart.padding})})},J=function(s,o,f,r){d.info(s),s.forEach(function(t,l){const e=t;let c="";const a={labelStyle:"",style:""};let b=e.text,i=0,p="note";if(o.setNode(e.id,{labelStyle:a.labelStyle,shape:p,labelText:D(b),noteData:e,rx:i,ry:i,class:c,style:a.style,id:e.id,domId:e.id,tooltip:"",type:"note",padding:y().flowchart.padding}),d.info("setNode",{labelStyle:a.labelStyle,shape:p,labelText:b,rx:i,ry:i,style:a.style,id:e.id,type:"note",padding:y().flowchart.padding}),!e.class||!(e.class in r))return;const h=f+l,n={};n.classes="relation",n.pattern="dotted",n.id=`edgeNote${h}`,n.arrowhead="none",d.info(`Note edge: ${JSON.stringify(n)}, ${JSON.stringify(e)}`),n.startLabelRight="",n.endLabelLeft="",n.arrowTypeStart="none",n.arrowTypeEnd="none";let g="fill:none",w="";n.style=g,n.labelStyle=w,n.curve=m(E.curve,x),o.setEdge(e.id,e.class,n,h)})},q=function(s,o){const f=y().flowchart;let r=0;s.forEach(function(t){r++;const l={};l.classes="relation",l.pattern=t.relation.lineType==1?"dashed":"solid",l.id="id"+r,t.type==="arrow_open"?l.arrowhead="none":l.arrowhead="normal",d.info(l,t),l.startLabelRight=t.relationTitle1==="none"?"":t.relationTitle1,l.endLabelLeft=t.relationTitle2==="none"?"":t.relationTitle2,l.arrowTypeStart=N(t.relation.type1),l.arrowTypeEnd=N(t.relation.type2);let e="",c="";if(t.style!==void 0){const a=$(t.style);e=a.style,c=a.labelStyle}else e="fill:none";l.style=e,l.labelStyle=c,t.interpolate!==void 0?l.curve=m(t.interpolate,x):s.defaultInterpolate!==void 0?l.curve=m(s.defaultInterpolate,x):l.curve=m(f.curve,x),t.text=t.title,t.text===void 0?t.style!==void 0&&(l.arrowheadStyle="fill: #333"):(l.arrowheadStyle="fill: #333",l.labelpos="c",y().flowchart.htmlLabels?(l.labelType="html",l.label='<span class="edgeLabel">'+t.text+"</span>"):(l.labelType="text",l.label=t.text.replace(C.lineBreakRegex,`
`),t.style===void 0&&(l.style=l.style||"stroke: #333; stroke-width: 1.5px;fill:none"),l.labelStyle=l.labelStyle.replace("color:","fill:"))),o.setEdge(t.id1,t.id2,l,r)})},F=function(s){Object.keys(s).forEach(function(f){E[f]=s[f]})},H=function(s,o,f,r){d.info("Drawing class - ",o);const t=y().flowchart,l=y().securityLevel;d.info("config:",t);const e=t.nodeSpacing||50,c=t.rankSpacing||50,a=new B({multigraph:!0,compound:!0}).setGraph({rankdir:r.db.getDirection(),nodesep:e,ranksep:c,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),b=r.db.getClasses(),i=r.db.getRelations(),p=r.db.getNotes();d.info(i),z(b,a,o,r),q(i,a),J(p,a,i.length+1,b);let h;l==="sandbox"&&(h=v("#i"+o));const n=l==="sandbox"?v(h.nodes()[0].contentDocument.body):v("body"),g=n.select(`[id="${o}"]`),w=n.select("#"+o+" g");if(G(w,a,["aggregation","extension","composition","dependency","lollipop"],"classDiagram",o),M.insertTitle(g,"classTitleText",t.titleTopMargin,r.db.getDiagramTitle()),R(a,g,t.diagramPadding,t.useMaxWidth),!t.htmlLabels){const k=l==="sandbox"?h.nodes()[0].contentDocument:document,A=k.querySelectorAll('[id="'+o+'"] .edgeLabel .label');for(const S of A){const T=S.getBBox(),u=k.createElementNS("http://www.w3.org/2000/svg","rect");u.setAttribute("rx",0),u.setAttribute("ry",0),u.setAttribute("width",T.width),u.setAttribute("height",T.height),S.insertBefore(u,S.firstChild)}}};function N(s){let o;switch(s){case 0:o="aggregation";break;case 1:o="extension";break;case 2:o="composition";break;case 3:o="dependency";break;case 4:o="lollipop";break;default:o="none"}return o}const P={setConf:F,draw:H},te={parser:_,db:L,renderer:P,styles:I,init:s=>{s.class||(s.class={}),s.class.arrowMarkerAbsolute=s.arrowMarkerAbsolute,L.clear()}};export{te as diagram};
