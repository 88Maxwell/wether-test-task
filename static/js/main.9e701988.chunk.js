(this["webpackJsonpwether-test-task"]=this["webpackJsonpwether-test-task"]||[]).push([[0],{194:function(e,t,a){e.exports=a(331)},196:function(e,t,a){},331:function(e,t,a){"use strict";a.r(t);a(195),a(196);var n=a(0),r=a.n(n),c=a(31),o=a.n(c),i=a(27),u=a(45),l=a(55),s=a(33),p=a(59),d=a(16),m=a(63),h=a(166),b=a.n(h),v=a(345),E=a(343),f=a(341),O=a(336),y=a(340),g=a(344),j=a(338),_=a(339);var w=function(e){var t=e.header,a=void 0===t?"header":t,n=e.description,c=void 0===n?"description,":n;return r.a.createElement(_.a.Item,{size:"large"},r.a.createElement(_.a.Content,null,r.a.createElement(_.a.Header,null,a),r.a.createElement(_.a.Description,null,c)))},T=a(3),C=a.n(T);C.a.shape({lon:C.a.number,lat:C.a.number}),C.a.arrayOf(C.a.shape({id:C.a.number,main:C.a.string,description:C.a.string,icon:C.a.string})),C.a.string,C.a.shape({temp:C.a.number,pressure:C.a.number,humidity:C.a.number,temp_min:C.a.number,temp_max:C.a.number}),C.a.number,C.a.shape({speed:C.a.number,deg:C.a.number}),C.a.shape({all:C.a.number}),C.a.number,C.a.shape({type:C.a.number,id:C.a.number,message:C.a.number,sunrise:C.a.number,sunset:C.a.number,country:C.a.string}),C.a.number,C.a.string,C.a.number;var A=function(e){var t=e.wether,a=t.main,n=t.wind,c=t.name;return r.a.createElement(E.a,null,r.a.createElement(g.a,null,c),r.a.createElement(_.a,{divided:!0},r.a.createElement(w,{header:"temperature",description:"".concat(a.temp," \xb0 F")}),r.a.createElement(w,{header:"max temperature",description:"".concat(a.temp_max," \xb0 F")}),r.a.createElement(w,{header:"min temperature",description:"".concat(a.temp_min," \xb0 F")}),r.a.createElement(w,{header:"pressure",description:"".concat(a.pressure," atm")}),r.a.createElement(w,{header:"wind speed",description:"".concat(n.speed," m/s")}),r.a.createElement(w,{header:"wind degree",description:"".concat(n.deg," \xb0")})))},P={enableHighAccuracy:!1,timeout:1/0,maximumAge:0};function R(e){var t=e.data,a=e.state,n=e.LoadingComponent,c=e.ErrorComponent,o=void 0===c?null:c,i=e.DataComponent;return r.a.createElement(r.a.Fragment,null,t&&"loaded"===a&&i,!t&&"loading"===a&&n,"error"===a&&o)}R.propTypes={data:C.a.any,state:C.a.oneOf(["error","loaded","loading"]).isRequired,LoadingComponent:C.a.node.isRequired,ErrorComponent:C.a.node.isRequired,DataComponent:C.a.node.isRequired},R.defaultProps={data:null};var S=R,x=[{value:"Kyiv",text:"Kyiv"},{value:"Lviv",text:"Lviv"},{value:"Odesa",text:"Odesa"},{value:"Kharkiv",text:"Kharkiv"}];function W(e){var t=e.wetherState,a=e.wetherError,c=e.wether,o=e.onGetWether,i=e.onGoBack,u=e.onOpenWetherByCity,l=e.location,s=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:P,a=Object(n.useState)(null),r=Object(m.a)(a,2),c=r[0],o=r[1],i=Object(n.useState)(null),u=Object(m.a)(i,2),l=u[0],s=u[1],p=function(e){var t=e.coords,a=e.timestamp;o({latitude:t.latitude,longitude:t.longitude,accuracy:t.accuracy,timestamp:a})},d=function(e){s(e.message)};return Object(n.useEffect)((function(){if(navigator&&navigator.geolocation){var a=null;return e?a=navigator.geolocation.watchPosition(p,d,t):navigator.geolocation.getCurrentPosition(p,d,t),function(){return a&&navigator.geolocation.clearWatch(a)}}s("Geolocation is not supported")}),[t.enableHighAccuracy,t.timeout,t.maximumAge]),{position:c,error:l}}(!1).position,p=Object(n.useState)(null),d=Object(m.a)(p,2),h=d[0],_=d[1],w=Object(n.useState)(!0),T=Object(m.a)(w,2),C=T[0],R=T[1],W=l.search,k=!("/"===l.pathname&&""===W),U=b.a.parse(W.slice(1)).city;Object(n.useEffect)((function(){var e=s||{},t=e.latitude,a=e.longitude;o(U?{city:U}:{lat:t,lon:a})}),[o,W]);return r.a.createElement(v.a,{as:"main",verticalAlign:"middle",container:!0,centered:!0},r.a.createElement(v.a.Row,null,k&&r.a.createElement(E.a,{basic:!0},r.a.createElement(f.a,{labelPosition:"left",onClick:i,icon:"left chevron",content:"Back"}))),r.a.createElement(v.a.Row,null,s||k?r.a.createElement(S,{data:c,state:t,LoadingComponent:r.a.createElement(O.a,{active:!0}),DataComponent:r.a.createElement(A,{wether:c}),ErrorComponent:r.a.createElement(y.a,{negative:!0},r.a.createElement(y.a.Header,null,"Something happened wrong!"),r.a.createElement("p",null,a))}):C&&r.a.createElement(y.a,{onDismiss:function(){return R(!1)},warning:!0},r.a.createElement(y.a.Header,null,"Please enable geolocation!"))),r.a.createElement(v.a.Row,null,r.a.createElement(E.a,{basic:!0},r.a.createElement(g.a,null,"Watch wether by city"),r.a.createElement(j.a,{onChange:function(e,t){var a=t.value;return _(a)},options:x,placeholder:"Choose an option",selection:!0,value:h}),r.a.createElement(f.a,{disabled:!h,onClick:function(){return h&&u({city:h})}},"Watch"))))}W.defaultProps={wetherState:null,wetherError:null,wether:null};var k=W,U=a(61),H=a(20),q=a(337),D={state:null,error:null,data:null};var G=function(e){var t,a=e.requestActionType,n=e.successActionType,r=e.failureActionType,c=Object(H.a)({},D);return Object(q.a)((t={},Object(U.a)(t,a,(function(e){return Object(H.a)(Object(H.a)({},e),{},{state:"loading",error:null})})),Object(U.a)(t,n,(function(e,t){var a=t.payload;return Object(H.a)(Object(H.a)({},e),{},{state:"loaded",data:a})})),Object(U.a)(t,r,(function(e,t){var a=t.payload;return Object(H.a)(Object(H.a)({},e),{},{state:"error",error:a})})),t),c)}({requestActionType:"GET_WETHER_REQUEST",successActionType:"GET_WETHER_SUCCESS",failureActionType:"GET_WETHER_FAIL"}),I=function(e){return e.wether.current},L=Object(p.a)(I,(function(e){return e.state})),F=Object(p.a)(I,(function(e){return e.error})),K=Object(p.a)(I,(function(e){return e.data})),B=a(39),M=a.n(B),J=a(69),N=a(346),Q=a(179),X=a(180),z=a(181),V=a.n(z),Y=Object({NODE_ENV:"production",PUBLIC_URL:"/wether-test-task",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_API_URL:"https://api.openweathermap.org",REACT_APP_PREFIX:"data/2.5",REACT_APP_APP_ID:"a57bae3a1ee62cc1d67d655a0eafcdbf"}),Z={openWeatherMap:{apiUrl:Y.REACT_APP_API_URL,prefix:Y.REACT_APP_PREFIX,appid:Y.REACT_APP_APP_ID}},$=new(function(){function e(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=a.apiUrl,r=void 0===n?Z.apiUrl:n,c=a.prefix,o=void 0===c?"api/v1":c,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object(Q.a)(this,e),this.queryObject=i,this.prefix=o,this.apiUrl=r,this.token="",["get","post","patch","delete"].forEach((function(e){t[e]=function(){var a=Object(J.a)(M.a.mark((function a(n,r,c){return M.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",t.request({method:e.toUpperCase(),body:r,url:n,params:c}));case 1:case"end":return a.stop()}}),a)})));return function(e,t,n){return a.apply(this,arguments)}}()}))}return Object(X.a)(e,[{key:"request",value:function(){var e=Object(J.a)(M.a.mark((function e(t){var a,n,r,c,o,i,u,l,s,p;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.url,n=t.method,r=t.body,c=t.params,i=o=void 0===c?{}:c,this.queryObject&&(i=Object(H.a)(Object(H.a)({},this.queryObject),o)),u="?".concat(V.a.stringify(i)),l="".concat(this.apiUrl,"/").concat(this.prefix).concat(a).concat(u),e.next=7,fetch(l,{method:n,withCredentials:!0,crossDomain:!0,body:"GET"!==n?JSON.stringify(r):void 0});case 7:return s=e.sent,e.next=10,s.json();case 10:if(200===+(p=e.sent).cod){e.next=13;break}throw p.message;case 13:return e.abrupt("return",p);case 14:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}())({apiUrl:Z.openWeatherMap.apiUrl,prefix:Z.openWeatherMap.prefix},{appid:Z.openWeatherMap.appid}),ee=function(e){return $.get("/weather",null,e)},te=Object(N.a)("GET_WETHER_REQUEST"),ae=Object(N.a)("GET_WETHER_SUCCESS"),ne=Object(N.a)("GET_WETHER_FAIL");var re=Object(p.b)({wetherState:L,wetherError:F,wether:K}),ce=Object(s.e)(Object(u.c)(re,(function(e){return{onGetWether:function(t){var a=t.lat,n=t.lon,r=t.city;return e(function(e){var t=e.lat,a=void 0===t?35:t,n=e.lon,r=void 0===n?139:n,c=e.city,o=void 0===c?"Kyiv":c;return function(){var e=Object(J.a)(M.a.mark((function e(t){var n,c;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(te(n={lat:a,lon:r,q:o})),e.prev=2,e.next=5,ee(n);case 5:return c=e.sent,t(ae(c)),e.abrupt("return",c);case 10:return e.prev=10,e.t0=e.catch(2),t(ne(e.t0)),e.abrupt("return",null);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()}({lat:a,lon:n,city:r}))},onOpenWetherByCity:function(t){var a=t.city;return e(Object(d.e)("/?city=".concat(a)))},onGoBack:function(){return e(Object(d.c)())}}}))(k));var oe=function(){return r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",component:ce}))};var ie=function(e){var t=e.history,a=e.store;return r.a.createElement(u.a,{store:a},r.a.createElement(l.a,{history:t},r.a.createElement(oe,null)))},ue=a(23),le=a(182),se=a(164),pe=Object(ue.c)({current:G});var de=Object(i.a)(),me=function(e){var t=e.history,a=[le.a];t&&a.push(Object(se.a)(t));var n=function(e){var t=e.history;return Object(ue.c)({router:Object(l.b)(t),wether:pe})}({history:t});return Object(ue.e)(n,void 0,Object(ue.d)(ue.a.apply(void 0,a)))}({history:de});o.a.render(r.a.createElement(ie,{store:me,history:de}),document.getElementById("root"))}},[[194,1,2]]]);
//# sourceMappingURL=main.9e701988.chunk.js.map