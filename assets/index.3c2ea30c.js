var dn=Object.defineProperty,fn=Object.defineProperties;var mn=Object.getOwnPropertyDescriptors;var pe=Object.getOwnPropertySymbols;var Ne=Object.prototype.hasOwnProperty,Be=Object.prototype.propertyIsEnumerable;var Qe=Math.pow,Ke=(e,t,n)=>t in e?dn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,P=(e,t)=>{for(var n in t||(t={}))Ne.call(t,n)&&Ke(e,n,t[n]);if(pe)for(var n of pe(t))Be.call(t,n)&&Ke(e,n,t[n]);return e},_e=(e,t)=>fn(e,mn(t));var ie=(e,t)=>{var n={};for(var o in e)Ne.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&pe)for(var o of pe(e))t.indexOf(o)<0&&Be.call(e,o)&&(n[o]=e[o]);return n};var we=(e,t,n)=>new Promise((o,i)=>{var g=u=>{try{r(n.next(u))}catch(p){i(p)}},_=u=>{try{r(n.throw(u))}catch(p){i(p)}},r=u=>u.done?o(u.value):Promise.resolve(u.value).then(g,_);r((n=n.apply(e,t)).next())});import{e as Pe,d as se,c as A,r as T,V as vn,M as Ie,l as k,m as G,q as M,t as te,W as Y,A as oe,ad as J,a7 as ge,a6 as Ve,Y as He,X as Re,al as pn,an as _n,ao as gn,ap as hn,am as yn,aq as bn,_ as En,ak as Tn,ar as wn,D as Cn,i as Ge,w as Ce,o as On,p as Sn,u as kn,k as Fe,h as In,y as Rn,as as $n,G as Pn,at as Fn,af as Ln,au as Dn}from"./antdv.5cf0cf11.js";import{b as Je,c as Xe,_ as Ze}from"./index.c879b10d.js";const An=Pe({props:["hiddenFilter","button","items","model"],emits:["onSearch"],setup(e,{emit:t}){const{hasPermission:n}=Je(),{hasRole:o}=Xe(),i=se(e.model||{}),g=A(()=>(e.items||[]).map(p=>P({type:"input"},p))),_=()=>{t("onSearch")},r=T(e.hiddenFilter);vn(()=>{!e.button&&!e.items&&(r.value=!0)});const u=A(()=>{const p=Ie(e.button)||{};return _e(P({},p),{permission:n(p.auth)&&o(p.role)})});return{formModel:i,getItems:g,hasHidden:r,getButton:u,handleSubmit:_}}}),jn={key:0,class:"text"},Mn=Ve("\u67E5\u8BE2");function Kn(e,t,n,o,i,g){const _=pn,r=_n,u=gn,p=hn,w=yn,E=bn,F=En,O=Tn,l=wn,h=Cn;return e.hasHidden?J("",!0):(k(),G(h,{key:0,"body-style":{padding:"0 0 24px 0"},bordered:!1},{default:M(()=>[te(l,{class:"form-container",layout:"horizontal",model:e.formModel},{default:M(()=>[te(O,{type:"flex"},{default:M(()=>[e.button?(k(),G(r,{key:0,flex:"100px"},{default:M(()=>{var d;return[e.button.type==="text"?(k(),Y("span",jn,oe(e.button.label),1)):J("",!0),e.getButton.permission?(k(),G(_,ge({key:1},e.button,{onClick:(d=e.button)==null?void 0:d.onClick}),{default:M(()=>[Ve(oe(e.button.label),1)]),_:1},16,["onClick"])):J("",!0)]}),_:1})):J("",!0),te(r,{flex:"auto",class:"rowE"},{default:M(()=>[te(F,null,{default:M(()=>[(k(!0),Y(Re,null,He(e.getItems,d=>(k(),G(E,{key:d.name,name:d.name},{default:M(()=>[d.type==="select"?(k(),G(u,ge({key:0,key:`select-${d.name}`},d,{value:e.formModel[d.name],"onUpdate:value":y=>e.formModel[d.name]=y,class:"default-select-w"}),null,16,["value","onUpdate:value"])):d.type==="date"?(k(),G(p,ge({key:1,key:`date-${d.name}`},d,{value:e.formModel[d.name],"onUpdate:value":y=>e.formModel[d.name]=y,class:"default-select-w"}),null,16,["value","onUpdate:value"])):(k(),G(w,ge({key:2},d,{key:`input-${d.name}`,value:e.formModel[d.name],"onUpdate:value":y=>e.formModel[d.name]=y,onSearch:e.handleSubmit,class:"default-search-w"}),{enterButton:M(()=>[te(_,{type:"primary"},{default:M(()=>[Mn]),_:1})]),_:2},1040,["value","onUpdate:value","onSearch"]))]),_:2},1032,["name"]))),128))]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}))}var Nn=Ze(An,[["render",Kn],["__scopeId","data-v-49edeabf"]]);const Bn={},Le=Symbol("GLOBAL_OPTIONS_PROVIDE_KEY"),xe=()=>Bn;Pe({name:"RequestConfig",props:{config:{type:Object,required:!0}},setup(e,{slots:t}){const{config:n}=e;return Sn(Le,n),()=>{var o;return(o=t.default)===null||o===void 0?void 0:o.call(t)}}});const Qn=Object.prototype.toString,en=e=>Qn.call(e),qn=e=>en(e)==="[object String]",nn=e=>en(e)==="[object Object]",Un=e=>Array.isArray(e),ce=e=>e!==null&&typeof e=="object",Wn=e=>ce(e)&&Te(e.then)&&Te(e.catch),Te=e=>e instanceof Function,be=e=>e==null,De=typeof window=="undefined",$e=()=>{var e,t;return!De&&((e=window)===null||e===void 0||(t=e.document)===null||t===void 0?void 0:t.visibilityState)==="visible"},qe=()=>{var e,t,n;return(e=!De&&((t=window)===null||t===void 0||(n=t.navigator)===null||n===void 0?void 0:n.onLine))!==null&&e!==void 0?e:!0},Yn=e=>{const t={};return Object.keys(e).forEach(n=>{t[n]=kn(e[n])}),t},ue=Promise.resolve(null),Ue=(...e)=>we(void 0,null,function*(){const t=yield fetch(...e);if(t.ok)return t.json();throw new Error(t.statusText)}),We=(e,t,n=void 0)=>{const o=t.replace(/\[(\d+)\]/g,".$1").split(".");let i=e;for(const g of o)if(i=Object(i)[g],i===void 0)return n;return i};function zn(e,t){const n=Object.assign({},e);for(const o of t)delete n[o];return n}const tn=(e,t=!1)=>{const n=`Warning: [vue-request] ${e}`;if(t)return new Error(n);console.error(n)},Vn=(e,t)=>{let n=!1;return(...o)=>{n||(n=!0,e(...o),setTimeout(()=>{n=!1},t))}};var Oe;const on=new Set,an=new Set,rn=new Set,he=(e,t)=>{let n;switch(e){case"FOCUS_LISTENER":n=on;break;case"RECONNECT_LISTENER":n=rn;break;case"VISIBLE_LISTENER":n=an;break}if(!n.has(t))return n.add(t),()=>{n.delete(t)}},Se=e=>{e.forEach(t=>{t()})};!De&&(Oe=window)!==null&&Oe!==void 0&&Oe.addEventListener&&(window.addEventListener("visibilitychange",()=>{$e()&&Se(an)},!1),window.addEventListener("focus",()=>Se(on),!1),window.addEventListener("online",()=>Se(rn),!1));function sn(e,t,n){let o,i,g,_,r,u,p=0,w=!1,E=!1,F=!0;const O=!t&&t!==0&&typeof window.requestAnimationFrame=="function";if(typeof e!="function")throw new TypeError("Expected a function");t=+t||0,ce(n)&&(w=!!n.leading,E="maxWait"in n,g=E?Math.max(+n.maxWait||0,t):g,F="trailing"in n?!!n.trailing:F);function l(c){const m=o,R=i;return o=i=void 0,p=c,_=e.apply(R,m),_}function h(c,m){return O?(window.cancelAnimationFrame(r),window.requestAnimationFrame(c)):setTimeout(c,m)}function d(c){if(O)return window.cancelAnimationFrame(c);clearTimeout(c)}function y(c){return p=c,r=h(a,t),w?l(c):_}function Q(c){const m=c-u,R=c-p,L=t-m;return E?Math.min(L,g-R):L}function z(c){const m=c-u,R=c-p;return u===void 0||m>=t||m<0||E&&R>=g}function a(){const c=Date.now();if(z(c))return b(c);r=h(a,Q(c))}function b(c){return r=void 0,F&&o?l(c):(o=i=void 0,_)}function I(){r!==void 0&&d(r),p=0,o=u=i=r=void 0}function V(){return r===void 0?_:b(Date.now())}function K(){return r!==void 0}function j(...c){const m=Date.now(),R=z(m);if(o=c,i=this,u=m,R){if(r===void 0)return y(u);if(E)return r=h(a,t),l(u)}return r===void 0&&(r=h(a,t)),_}return j.cancel=I,j.flush=V,j.pending=K,j}function ln(e,t){for(const n in t)if(t[n]!==void 0){if(!ce(t[n])||!ce(e[n])||!(n in e)){e[n]=t[n];continue}(nn(t[n])||Un(t[n]))&&ln(e[n],t[n])}}function Ye(e,...t){const n=Object.assign({},e);if(!t.length)return n;for(const o of t)ln(n,o);return n}function Hn(e,t,n){let o=!0,i=!0;if(typeof e!="function")throw new TypeError("Expected a function");return ce(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),sn(e,t,{leading:o,trailing:i,maxWait:t})}const Gn=(e,t)=>n=>{Object.keys(n).forEach(o=>{e[o].value=n[o]}),t.forEach(o=>o(e))},ye=(e,t,n)=>{var o,i,g;const{initialAutoRunFlag:_,initialData:r,loadingDelay:u,pollingInterval:p,debounceInterval:w,debounceOptions:E,throttleInterval:F,throttleOptions:O,pollingWhenHidden:l,pollingWhenOffline:h,errorRetryCount:d,errorRetryInterval:y,stopPollingWhenHiddenOrOffline:Q,refreshOnWindowFocus:z,refocusTimespan:a,updateCache:b,formatResult:I,onSuccess:V,onError:K,onBefore:j,onAfter:c}=t,m=T(0),R=T((o=n==null?void 0:n.loading)!==null&&o!==void 0?o:!1),L=T((i=n==null?void 0:n.data)!==null&&i!==void 0?i:r),N=T(n==null?void 0:n.error),q=T((g=n==null?void 0:n.params)!==null&&g!==void 0?g:[]),v=Gn({loading:R,data:L,error:N,params:q},[f=>b(f)]),C=()=>{m.value=0},U=T(0),X=T(),Z=T(),ae=T(),de=()=>{X.value&&X.value(),ae.value&&ae.value(),Z.value&&Z.value()},le=()=>{let f;return u&&(f=setTimeout(v,u,{loading:!0})),()=>f&&clearTimeout(f)},fe=f=>{if(N.value&&d!==0)return;let D;if(!be(p)&&p>=0)if((l||$e())&&(h||qe()))D=setTimeout(f,p);else{Q.value=!0;return}return()=>D&&clearTimeout(D)},me=A(()=>{if(y)return y;const f=1e3,D=1,B=9,ne=Math.floor(Math.random()*Qe(2,Math.min(m.value,B))+D);return f*ne}),s=f=>{let D;const B=d===-1,ne=m.value<d;return N.value&&(B||ne)&&(B||(m.value+=1),D=setTimeout(f,me.value)),()=>D&&clearTimeout(D)},$=(...f)=>{v({loading:!u,params:f}),ae.value=le(),U.value+=1;const D=U.value;return j==null||j(f),e(...f).then(B=>{if(D===U.value){const ne=I?I(B):B;return v({data:ne,loading:!1,error:void 0}),V&&V(ne,f),C(),ne}return ue}).catch(B=>(D===U.value&&(v({data:void 0,loading:!1,error:B}),K&&K(B,f),console.error(B)),ue)).finally(()=>{D===U.value&&(ae.value(),Z.value=s(()=>$(...f)),X.value=fe(()=>$(...f)),c==null||c(f))})},S=!be(w)&&sn($,w,E),W=!be(F)&&Hn($,F,O),H=(...f)=>(de(),!_.value&&S?(S(...f),ue):W?(W(...f),ue):(C(),$(...f))),x=()=>{U.value+=1,v({loading:!1}),S&&S.cancel(),W&&W.cancel(),de()},ee=()=>H(...q.value),cn=f=>{const D=Te(f)?f(L.value):f;v({data:D})},Ae=[],ve=f=>{f&&Ae.push(f)},je=()=>{Q.value&&(l||$e())&&(h||qe())&&(ee(),Q.value=!1)};l||ve(he("VISIBLE_LISTENER",je)),h||ve(he("RECONNECT_LISTENER",je));const Me=Vn(ee,a);return z&&(ve(he("VISIBLE_LISTENER",Me)),ve(he("FOCUS_LISTENER",Me))),{loading:R,data:L,error:N,params:q,run:H,cancel:x,refresh:ee,mutate:cn,unmount:()=>{Ae.forEach(f=>f())}}},Ee=new Map,ke=e=>{if(be(e))return;const t=Ee.get(e);if(!!t)return{data:t.data,cacheTime:t.cacheTime}},Jn=(e,t,n)=>{const o=Ee.get(e);o!=null&&o.timer&&clearTimeout(o.timer);const i=setTimeout(()=>Ee.delete(e),n);Ee.set(e,{data:t,timer:i,cacheTime:new Date().getTime()})},re="__QUERY_DEFAULT_KEY__";function Xn(e,t){const n=Ge(Le,{}),me=P(P(P({},xe()),n),t),{cacheKey:o,defaultParams:i=[],manual:g=!1,ready:_=T(!0),refreshDeps:r=[],loadingDelay:u=0,pollingWhenHidden:p=!1,pollingWhenOffline:w=!1,refreshOnWindowFocus:E=!1,refocusTimespan:F=5e3,cacheTime:O=6e5,staleTime:l=0,errorRetryCount:h=0,errorRetryInterval:d=0,queryKey:y}=me,Q=ie(me,["cacheKey","defaultParams","manual","ready","refreshDeps","loadingDelay","pollingWhenHidden","pollingWhenOffline","refreshOnWindowFocus","refocusTimespan","cacheTime","staleTime","errorRetryCount","errorRetryInterval","queryKey"]),z=T(!1),a=T(!1),I=P({initialAutoRunFlag:a,loadingDelay:u,pollingWhenHidden:p,pollingWhenOffline:w,stopPollingWhenHiddenOrOffline:z,cacheKey:o,errorRetryCount:h,errorRetryInterval:d,refreshOnWindowFocus:E,refocusTimespan:F,updateCache:s=>{var $,S;if(!o)return;const W=($=ke(o))===null||$===void 0?void 0:$.data,H=W==null?void 0:W.queries,x=Yn(s),ee=(S=y==null?void 0:y(...s.params.value))!==null&&S!==void 0?S:re;Jn(o,{queries:_e(P({},H),{[ee]:P(P({},H==null?void 0:H[ee]),x)}),latestQueriesKey:ee},O)}},zn(Q,["pagination","listKey"])),V=T(!1),K=T(),j=T(),c=T(),m=se({[re]:se(ye(e,I))}),R=T(re),L=A(()=>{var s;return(s=m[R.value])!==null&&s!==void 0?s:{}});if(Ce(L,s=>{V.value=s.loading,K.value=s.data,j.value=s.error,c.value=s.params},{immediate:!0,deep:!0}),o){var N;const s=ke(o);s!=null&&(N=s.data)!==null&&N!==void 0&&N.queries&&(Object.keys(s.data.queries).forEach($=>{const S=s.data.queries[$];m[$]=se(ye(e,I,{loading:S.loading,params:S.params,data:S.data,error:S.error}))}),s.data.latestQueriesKey&&(R.value=s.data.latestQueriesKey))}const q=T(),v=T(!1),C=(...s)=>{var $;if(!_.value&&!v.value)return q.value=s,ue;const S=($=y==null?void 0:y(...s))!==null&&$!==void 0?$:re;return m[S]||(m[S]=se(ye(e,I))),R.value=S,L.value.run(...s)},U=()=>{X(),R.value=re,m[re]=se(ye(e,I))},X=()=>{Object.keys(m).forEach(s=>{m[s].cancel(),m[s].unmount(),delete m[s]})},Z=()=>L.value.cancel(),ae=()=>L.value.refresh(),de=s=>L.value.mutate(s);if(!g){var le;a.value=!0;const s=ke(o),$=(le=s==null?void 0:s.data.queries)!==null&&le!==void 0?le:{},S=s&&(l===-1||s.cacheTime+l>new Date().getTime()),W=Object.keys($).length>0;S||(W?Object.keys(m).forEach(H=>{var x;(x=m[H])===null||x===void 0||x.refresh()}):C(...i)),a.value=!1}const fe=T();return fe.value=Ce(_,s=>{v.value=!0,s&&q.value&&(C(...q.value),fe.value())},{flush:"sync"}),r.length&&Ce(r,()=>{!g&&L.value.refresh()}),On(()=>{X()}),{loading:V,data:K,error:j,params:c,cancel:Z,refresh:ae,mutate:de,run:C,reset:U,queries:m}}const un=e=>(...t)=>{if(Te(e))return un(e(...t))();if(Wn(e))return e;if(nn(e)){const n=e,{url:o}=n,i=ie(n,["url"]);return Ue(o,i)}else{if(qn(e))return Ue(e);throw tn("Unknown service type",!0)}};function Zn(e,t){var n,o;const i=un(e),g={pagination:{currentKey:"current",pageSizeKey:"pageSize",totalKey:"total",totalPageKey:"totalPage"}},_=Ge(Le,{}),N=Ye(g,{pagination:(n=xe().pagination)!==null&&n!==void 0?n:{}},{pagination:(o=_.pagination)!==null&&o!==void 0?o:{}},t!=null?t:{}),{pagination:{currentKey:r,pageSizeKey:u,totalKey:p,totalPageKey:w},queryKey:E}=N,F=ie(N,["pagination","queryKey"]);E&&tn("usePagination does not support concurrent request");const O=Ye({defaultParams:[{[r]:1,[u]:10}]},F),q=Xn(i,O),{data:l,params:h,queries:d,run:y,reset:Q}=q,z=ie(q,["data","params","queries","run","reset"]),a=v=>{const[C,...U]=h.value,Z=[P(P({},C),v),...U];y(...Z)},b=v=>{a({[r]:v})},I=v=>{a({[u]:v})},V=(v,C)=>{a({[r]:v,[u]:C})},K=T(!1),j=()=>we(this,null,function*(){const{defaultParams:v,manual:C}=O;Q(),C||(K.value=!0,yield y(...v),K.value=!1)}),c=A(()=>We(l.value,p,0)),m=A({get:()=>{var v,C;return(v=(C=h.value[0])===null||C===void 0?void 0:C[r])!==null&&v!==void 0?v:O.defaultParams[0][r]},set:v=>{b(v)}}),R=A({get:()=>{var v,C;return(v=(C=h.value[0])===null||C===void 0?void 0:C[u])!==null&&v!==void 0?v:O.defaultParams[0][u]},set:v=>{I(v)}}),L=A(()=>We(l.value,w,Math.ceil(c.value/R.value)));return P({data:l,params:h,current:m,pageSize:R,total:c,totalPage:L,reloading:K,run:y,changeCurrent:b,changePageSize:I,changePagination:V,reload:j},z)}const xn="YYYY-MM-DD HH:mm:ss",et="YYYY-MM-DD ";function nt(e=void 0,t=xn){return Fe(e).format(t)}function ze(e=void 0,t=et){return Fe(e).format(t)}const tt=Pe({props:["bordered","hiddenFilter","url","columns","actions","button","items","model","resKey","scroll"],setup(e){const{hasPermission:t}=Je(),{hasRole:n}=Xe(),{data:o,run:i,loading:g,current:_,pageSize:r,total:u,refresh:p}=Zn(e.url,{pagination:{pageSizeKey:"limit",currentKey:"page"}}),w=A(()=>{var a;return(a=e.bordered)!=null?a:!0}),E=A(()=>{var a,b;return((b=o.value)==null?void 0:b[((a=e==null?void 0:e.resKey)==null?void 0:a.list)||"list"])||[]}),F=A(()=>({total:u.value,current:_.value,pageSize:r.value,showQuickJumper:!0,showSizeChanger:!0,showTotal:()=>In("span",{},`\u5171 ${u.value} \u6761`)})),O=(a,b,I)=>{i(P({limit:a.pageSize,page:a==null?void 0:a.current,sortField:I.field,sortOrder:I.order},b))},l=A(()=>(Ie(e.actions)||[]).map(a=>{const{popConfirm:b}=a;return _e(P(P({type:"link"},a),b||{}),{enable:!!b,permission:t(a.auth)&&n(a.role)})})),h=A(()=>e.model),d=A(()=>e.button),y=A(()=>e.items);return{dataSource:E,loading:g,pagination:F,hasBordered:w,handleTableChange:O,run:i,refresh:p,getActions:l,tableFilterModel:h,tableFilterButton:d,tableFilterItems:y,onSearch:()=>{const a=Ie(h.value)||{};a&&Object.keys(a).map(b=>{a[b]&&Fe.isDayjs(a[b])&&(a[b]=ze(a[b]))}),i(P({page:_.value,limit:r.value},a))},formatDate:(a,b="date")=>{const I=b==="date"?ze:nt;return a.length===10?I(Number(a)*1e3):I(a)}}}}),ot={class:"table-component"},at={key:0},rt={key:1},st={key:2},lt=["type"],it={key:1},ut=["onClick","type"];function ct(e,t,n,o,i,g){const _=Nn,r=Fn,u=Ln,p=Dn;return k(),Y("div",ot,[te(_,{button:e.tableFilterButton,items:e.tableFilterItems,model:e.tableFilterModel,hiddenFilter:e.hiddenFilter,pagination:null,onOnSearch:e.onSearch},null,8,["button","items","model","hiddenFilter","onOnSearch"]),te(p,{class:Pn(["ant-table-striped",{border:e.hasBordered}]),rowClassName:(w,E)=>E%2===1?"table-striped":"",dataSource:e.dataSource,columns:e.columns,rowKey:w=>w.id,pagination:e.pagination,loading:e.loading,onChange:e.handleTableChange,scroll:e.scroll},{bodyCell:M(({column:w,text:E,index:F,record:O})=>[w.key==="toIndex"?(k(),Y("span",at,oe(F+1),1)):J("",!0),w.key==="toDate"?(k(),Y("span",rt,oe(E?e.formatDate(E):"-"),1)):J("",!0),w.key==="toDateTime"?(k(),Y("span",st,oe(E?e.formatDate(E,"time"):"-"),1)):J("",!0),w.key==="action"?(k(!0),Y(Re,{key:3},He(e.getActions,(l,h)=>(k(),Y(Re,{key:`${h}-${l.label}`},[l.enable?(k(),G(r,{key:0,title:l==null?void 0:l.title,onConfirm:d=>l==null?void 0:l.onConfirm(O),onCancel:d=>l==null?void 0:l.onCancel(O)},{default:M(()=>[Rn("a",{onClick:t[0]||(t[0]=$n(()=>{},["prevent"])),type:l.type},oe(l.label),9,lt)]),_:2},1032,["title","onConfirm","onCancel"])):l.permission?(k(),Y("a",{key:2,onClick:d=>l==null?void 0:l.onClick(O),type:l.type},oe(l.label),9,ut)):(k(),Y("span",it,"\u2014\u2014")),h<e.getActions.length-1?(k(),G(u,{key:3,type:"vertical"})):J("",!0)],64))),128)):J("",!0)]),_:1},8,["class","rowClassName","dataSource","columns","rowKey","pagination","loading","onChange","scroll"])])}var pt=Ze(tt,[["render",ct],["__scopeId","data-v-de19ba08"]]);export{pt as _};
