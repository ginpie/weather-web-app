(this["webpackJsonpweather-web-app"]=this["webpackJsonpweather-web-app"]||[]).push([[0],{39:function(n,e,t){n.exports=t(71)},44:function(n,e,t){},45:function(n,e,t){},71:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(33),o=t.n(i);t(44),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(45);var c=t(38),u=t(3),l=t(1),s=t(2),d=t(8),f=t(9),p=t(11),m=t(10);t(46).config();var g=Object({NODE_ENV:"production",PUBLIC_URL:"/weather-web-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_API_CURRENT:"https://api.openweathermap.org/data/2.5/weather",REACT_APP_API_FORECAST:"https://api.openweathermap.org/data/2.5/onecall",REACT_APP_API_APPID:"336f93b7037822f8cd85991760f07c7e",REACT_APP_IMAGE_API:"https://api.unsplash.com/search/photos",REACT_APP_IMAGE_API_APPID:"1gnu04FEU2wMclfetzENLfB2MDZfHIb5TtE7hFRc2qY",REACT_APP_TRIP_API:"http://api.opentripmap.com/0.1",REACT_APP_TRIP_API_APPID:"5ae2e3f221c38a28845f05b6c8cda263dc19a5970977f84674d02e1b"}),h=g.REACT_APP_API_CURRENT,b=g.REACT_APP_API_FORECAST,v=g.REACT_APP_API_APPID,x=g.REACT_APP_IMAGE_API,y=g.REACT_APP_IMAGE_API_APPID,w=g.REACT_APP_TRIP_API,E=g.REACT_APP_TRIP_API_APPID,j=t(14).create({baseURL:h+"?appid="+v});var O=function(n,e){return j.get("",{params:{lon:n,lat:e}}).then((function(n){return n.data})).catch((function(n){return console.log(n)}))},P=t(14).create({baseURL:x});var _=function(n){return P.get("",{params:{client_id:y,query:n,page:1,per_page:5,orientation:"landscape"}}).then((function(n){return n.data})).catch((function(n){return console.log(n)}))};function A(){var n=Object(l.a)(["\n  width: 50px;\n  height: 50px;\n  margin-top: 40px;\n"]);return A=function(){return n},n}function k(){var n=Object(l.a)(["\n  width: 20px;\n  grid-row: 2;\n  grid-column: 1;\n  align-self: top;\n"]);return k=function(){return n},n}function C(){var n=Object(l.a)(["\n  font-weight: 500;\n  grid-row: 1;\n  grid-column: 2;\n  display: flex;\n  align-items: center;\n  text-shadow: rgba(200, 200, 200, 0.5) 0 0 3px;\n"]);return C=function(){return n},n}function I(){var n=Object(l.a)(["\n  height: 20px;\n  grid-row: 2;\n  grid-column: 2;\n  display: flex;\n  align-items: center;\n"]);return I=function(){return n},n}function T(){var n=Object(l.a)(["\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  grid-row: 1;\n  grid-column: 1;\n  color: #0270c2;\n"]);return T=function(){return n},n}function R(){var n=Object(l.a)(["\n  font-size: 12px;\n  margin: 0 6px 0 0;\n"]);return R=function(){return n},n}function M(){var n=Object(l.a)(["\n  display: grid;\n  grid-template-columns: 30px 120px;\n  grid-template-rows: repeat(2, 30px);\n"]);return M=function(){return n},n}function z(){var n=Object(l.a)(["\n  width: 180px;\n  height: 100%;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  position: absolute;\n  top: 0;\n  left: 120px;\n  padding-top: 100px;\n  background-color: rgba(222, 230, 244, 0.7);\n  color: #253237;\n"]);return z=function(){return n},n}function S(){var n=Object(l.a)(["\n  background-color: #eee;\n  border-radius: 30px;\n  grid-column: 1 / span 5;\n  grid-row: 1 / span 2;\n  position: relative;\n"]);return S=function(){return n},n}var D=s.a.section(S()),B=s.a.div(z()),L=s.a.div(M()),H=s.a.p(R()),N=s.a.i(T()),U=s.a.div(I()),W=s.a.div(C()),F=s.a.img(k()),q=s.a.div(A()),J=function(n){Object(p.a)(t,n);var e=Object(m.a)(t);function t(n){var r;return Object(d.a)(this,t),(r=e.call(this,n)).state={myCover:null},r}return Object(f.a)(t,[{key:"componentDidMount",value:function(){var n=this;window.addEventListener("load",(function(){var e,t;navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(r){e=r.coords.longitude,t=r.coords.latitude,O(e,t).then((function(e){document.getElementById("myCity").innerHTML=e.name,document.getElementById("myCountry").innerHTML=e.sys.country,document.getElementById("myFlag").setAttribute("src","https://www.countryflags.io/"+e.sys.country+"/flat/64.png"),_(e.name).then((function(e){var t=e.results[Math.floor(5*Math.random())].urls.regular;n.setState({myCover:{background:"url(".concat(t,")"),backgroundSize:"cover",backgroundPosition:"center"}})}))}))}))}))}},{key:"render",value:function(){return a.a.createElement(D,{style:this.state.myCover},a.a.createElement(B,null,a.a.createElement(L,null,a.a.createElement(N,{className:"fas fa-map-marker-alt"}),a.a.createElement(W,{id:"myCity"}),a.a.createElement(U,null,a.a.createElement(H,{id:"myCountry"}),a.a.createElement(F,{id:"myFlag"}))),a.a.createElement(q,{style:{background:"url(".concat("https://res.cloudinary.com/dr99oorie/image/upload/v1603434915/weather-app%20assets/iconfinder_opera_house_sydney_house_australia_architecture_landmark_travel_building_tourism_3465591_ybght9.svg",")"),backgroundSize:"cover",backgroundPosition:"center"}})))}}]),t}(a.a.Component);function G(){var n=Object(l.a)(["\n  width: 35%;\n  height: 105%;\n\n  border-radius: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n"]);return G=function(){return n},n}function Q(){var n=Object(l.a)(["\n  font-size: 14px;\n  margin: 0;\n  color: #555;\n"]);return Q=function(){return n},n}function K(){var n=Object(l.a)(["\n  font-size: 15px;\n  font-weight: 600;\n  margin: 0;\n"]);return K=function(){return n},n}function V(){var n=Object(l.a)(["\n  width: 30%;\n"]);return V=function(){return n},n}function Y(){var n=Object(l.a)(["\n  width: 25%;\n"]);return Y=function(){return n},n}function Z(){var n=Object(l.a)(["\n  width: 100%;\n  height: 80px;\n  background-color: #fff;\n  border-radius: 20px;\n  box-shadow: rgba(70, 70, 70, 0.2) 5px 5px 15px 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n"]);return Z=function(){return n},n}var $=s.a.div(Z()),X=s.a.img(Y()),nn=s.a.div(V()),en=s.a.p(K()),tn=s.a.p(Q()),rn=s.a.div(G()),an=function(n){var e=n.icon,t=n.date,r=n.weather,i=n.tempMax,o=n.tempMin,c=n.bg;return a.a.createElement($,null,a.a.createElement(X,{src:e}),a.a.createElement(nn,null,a.a.createElement(en,null,t),a.a.createElement(tn,null,r)),a.a.createElement(rn,{style:{background:c}},i,"\xb0 / ",o,"\xb0"))},on=t(20),cn=t.n(on),un=t(37),ln=t(14).create({baseURL:h+"?appid="+v});var sn=function(n){return ln.get("",{params:{q:n}}).then((function(n){return n.data})).catch((function(n){return console.log(n)}))},dn=t(14).create({baseURL:b+"?appid="+v});function fn(){return(fn=Object(un.a)(cn.a.mark((function n(e){var t;return cn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,sn(e).then((function(n){t=n.coord}));case 2:return n.abrupt("return",dn.get("",{params:{lon:t.lon,lat:t.lat}}).then((function(n){return n.data})).catch((function(n){return console.log(n)})));case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var pn=function(n){return fn.apply(this,arguments)},mn=new Map;mn.set("Clear","https://res.cloudinary.com/dr99oorie/image/upload/v1603517457/weather-app%20assets/clear_szhil3.svg"),mn.set("Rain","https://res.cloudinary.com/dr99oorie/image/upload/v1603517503/weather-app%20assets/rain_isnziw.svg"),mn.set("Clouds","https://res.cloudinary.com/dr99oorie/image/upload/v1603428277/weather-app%20assets/iconfinder_weather-02_1530391_lqsvis.svg"),mn.set("Mist","https://res.cloudinary.com/dr99oorie/image/upload/v1603708766/weather-app%20assets/mist_xiprlr.svg");var gn=mn;function hn(){var n=Object(l.a)([""]);return hn=function(){return n},n}function bn(){var n=Object(l.a)(["\n  font-weight: 500;\n  font-size: 22px;\n  text-align: center;\n"]);return bn=function(){return n},n}function vn(){var n=Object(l.a)(["\n  background-color: #fff;\n  border-radius: 30px;\n  grid-column: 1;\n  grid-row: 3;\n  align-items: center;\n"]);return vn=function(){return n},n}var xn=s.a.section(vn()),yn=s.a.h3(bn()),wn=s.a.div(hn()),En=function(n){Object(p.a)(t,n);var e=Object(m.a)(t);function t(n){var r;return Object(d.a)(this,t),(r=e.call(this,n)).state={days:[]},r}return Object(f.a)(t,[{key:"componentDidMount",value:function(){var n=this;pn("los angeles").then((function(e){var t=[e.daily[0],e.daily[1],e.daily[2]];t.forEach((function(n){var e=new Date(1e3*n.dt),t=new Intl.DateTimeFormat("en-US",{weekday:"long"}).format(e);n.localdt=t})),n.setState({days:t})}))}},{key:"render",value:function(){return a.a.createElement(xn,null,a.a.createElement(yn,null,a.a.createElement("b",null,"3 Days")," Forecast"),a.a.createElement(wn,null,this.state.days.map((function(n,e){return a.a.createElement(an,{icon:gn.get(n.weather[0].main),date:n.localdt,weather:n.weather[0].main,tempMax:Math.round(n.temp.max-273.15),tempMin:Math.round(n.temp.min-273.15),bg:0===e?"#0aa9ee":"#dee6f4",key:e})}))))}}]),t}(a.a.Component);function jn(){var n=Object(l.a)(["\n  font-size: 15px;\n  font-weight: 600;\n  margin: 0 0 0 10px;\n  color: #fff;\n"]);return jn=function(){return n},n}function On(){var n=Object(l.a)(["\n  width: 30px;\n  height: 30px;\n  display: flex;\n  color: #fff;\n  align-items: center;\n  justify-content: center;\n  grid-row: 1;\n  grid-column: 1;\n"]);return On=function(){return n},n}function Pn(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  margin: 20px 20px;\n  text-shadow: rgba(10, 10, 10, 1) 1px 1px 5px;\n"]);return Pn=function(){return n},n}function _n(){var n=Object(l.a)(["\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n  border-radius: 20px;\n  box-shadow: rgba(70, 70, 70, 0.1) 5px 25px 35px 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 20px;\n"]);return _n=function(){return n},n}var An=s.a.div(_n()),kn=s.a.div(Pn()),Cn=s.a.i(On()),In=s.a.p(jn()),Tn=function(n){var e=n.bg,t=n.text,r=n.grid;return a.a.createElement(An,{style:{backgroundImage:"url(".concat(e,")"),backgroundSize:"cover",backgroundPosition:"center",gridArea:r}},a.a.createElement(kn,null,a.a.createElement(Cn,{className:"fas fa-map-marker-alt"}),a.a.createElement(In,null,t)))},Rn=[{bg:"https://images.unsplash.com/photo-1588302290751-8b7a1d879cc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",text:"Harbour Bridge",grid:"1 / 1 / span 2 / 1"},{bg:"https://images.unsplash.com/photo-1551352912-484163ad5be9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",text:"Sydney Opera House",grid:"1 / 2 / 1 / 2"},{bg:"https://images.unsplash.com/photo-1555753359-2964c809e729?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",text:"Queen Victoria's Building",grid:"2 / 2 / 2 / 2"}],Mn=t(14).create({baseURL:w+"/en/places/radius"});var zn=function(n,e){return Mn.get("",{params:{apikey:E,lat:e,lon:n,radius:1e4,rate:"3h"}}).then((function(n){return n.data})).catch((function(n){return console.log(n)}))};function Sn(){var n=Object(l.a)(["\n  width: 100%;\n  height: 80%;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  gap: 10px;\n"]);return Sn=function(){return n},n}function Dn(){var n=Object(l.a)(["\n  font-weight: 500;\n  font-size: 22px;\n  text-align: left;\n"]);return Dn=function(){return n},n}function Bn(){var n=Object(l.a)(["\n  background-color: #fff;\n  border-radius: 30px;\n  grid-column: 2 / span 2;\n  grid-row: 3 / span 2;\n  align-items: center;\n"]);return Bn=function(){return n},n}var Ln=s.a.section(Bn()),Hn=s.a.h3(Dn()),Nn=s.a.div(Sn()),Un=function(n){Object(p.a)(t,n);var e=Object(m.a)(t);function t(n){var r;return Object(d.a)(this,t),(r=e.call(this,n)).state={myPlaces:[]},r}return Object(f.a)(t,[{key:"componentDidMount",value:function(){var n=this;window.addEventListener("load",(function(){var e,t;navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(r){e=r.coords.longitude,t=r.coords.latitude,zn(e,t).then((function(e){var t=[],r=e.features;r.slice(Math.max(r.length-3,0)).forEach((function(n){t.push(n.properties.name)})),n.setState({myPlaces:t})}))}))}))}},{key:"render",value:function(){return a.a.createElement(Ln,null,a.a.createElement(Hn,null,a.a.createElement("b",null,"Place to")," Visit"),a.a.createElement(Nn,null,this.state.myPlaces.map((function(n,e){return a.a.createElement(Tn,{bg:Rn[e].bg,text:n,grid:Rn[e].grid,key:e})}))))}}]),t}(a.a.Component);function Wn(){var n=Object(l.a)(["\n  width: 1px;\n  height: 50px;\n  background: #aaa;\n"]);return Wn=function(){return n},n}function Fn(){var n=Object(l.a)(["\n  width: 1px;\n  height: 12px;\n  background: #aaa;\n"]);return Fn=function(){return n},n}function qn(){var n=Object(l.a)([""]);return qn=function(){return n},n}function Jn(){var n=Object(l.a)(["\n  width: 80%;\n  height: 30%;\n  color: #aaa;\n  font-size: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  grid-area: 2 / 1 / span 1 / span 3;\n  place-self: center;\n"]);return Jn=function(){return n},n}function Gn(){var n=Object(l.a)(["\n  font-size: 14px;\n  margin: 0;\n  color: #555;\n"]);return Gn=function(){return n},n}function Qn(){var n=Object(l.a)(["\n  font-size: 15px;\n  font-weight: 600;\n  margin: 0;\n"]);return Qn=function(){return n},n}function Kn(){var n=Object(l.a)(["\n  width: 60%;\n  padding-left: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-around;\n"]);return Kn=function(){return n},n}function Vn(){var n=Object(l.a)(['\n  font-family: "Oswald", sans-serif;\n  width: 45%;\n  padding-right: 10px;\n  border-radius: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  font-size: 40px;\n\n  &::after {\n    content: "\xb0C";\n    font-size: 18px;\n  }\n']);return Vn=function(){return n},n}function Yn(){var n=Object(l.a)(["\n  width: 100%;\n  height: 100%;\n  grid-area: 1 / 2 / span 1 / span 2;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n"]);return Yn=function(){return n},n}function Zn(){var n=Object(l.a)(["\n  width: 80%;\n"]);return Zn=function(){return n},n}function $n(){var n=Object(l.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #dee6f4;\n  border-radius: 20px 0 20px 0;\n  grid-area: 1 / 1 / span 1 / span 1;\n"]);return $n=function(){return n},n}function Xn(){var n=Object(l.a)(["\n  width: 100%;\n  height: 180px;\n  margin-top: 20px;\n  background-color: #fff;\n  border-radius: 20px;\n  box-shadow: rgba(70, 70, 70, 0.2) 5px 5px 15px 0;\n  display: grid;\n  align-items: center;\n  grid-template-columns: repeat(3, 33%);\n  grid-template-rows: 2fr 1fr;\n"]);return Xn=function(){return n},n}var ne=s.a.div(Xn()),ee=s.a.div($n()),te=s.a.img(Zn()),re=s.a.div(Yn()),ae=s.a.div(Vn()),ie=s.a.div(Kn()),oe=s.a.p(Qn()),ce=s.a.p(Gn()),ue=s.a.div(Jn()),le=s.a.p(qn()),se=s.a.div(Fn()),de=s.a.div(Wn()),fe=function(n){var e,t=n.icon,r=n.hum,i=n.wind,o=n.speed,c=n.temp,u=n.city,l=n.country;return i>=338&&i<=22&&(e="North"),i>=23&&i<=67&&(e="Northeast"),i>=68&&i<=112&&(e="East"),i>=113&&i<=157&&(e="Southeast"),i>=158&&i<=202&&(e="South"),i>=203&&i<=247&&(e="Southwest"),i>=248&&i<=292&&(e="West"),i>=293&&i<=337&&(e="Northwest"),a.a.createElement(ne,null,a.a.createElement(ee,null,a.a.createElement(te,{src:t})),a.a.createElement(re,null,a.a.createElement(ae,null,c),a.a.createElement(de,null),a.a.createElement(ie,null,a.a.createElement(oe,null,u),a.a.createElement(ce,null,l))),a.a.createElement(ue,null,a.a.createElement(le,null,"Humidity: ",r,"%"),a.a.createElement(se,null),a.a.createElement(le,null,e),a.a.createElement(se,null),a.a.createElement(le,null,o,"km/h")))},pe=[{city:"guangzhou",country:"Australia"},{city:"Beijing",country:"China"},{city:"New york",country:"USA"}];function me(){var n=Object(l.a)(["\n  width: 100%;\n  border-radius: 30px;\n  overflow-wrap: auto;\n  grid-area: 2 / 4 / span 3 / span 1;\n  align-self: end;\n  z-index: 100;\n  max-height: 500px;\n  overflow: auto;\n\n  -webkit-mask-image: -webkit-gradient(\n    linear,\n    left top,\n    left bottom,\n    color-stop(0, rgba(0, 0, 0, 0)),\n    color-stop(0.1, rgba(0, 0, 0, 1)),\n    color-stop(0.9, rgba(0, 0, 0, 1)),\n    color-stop(1, rgba(0, 0, 0, 0))\n  );\n"]);return me=function(){return n},n}var ge=s.a.section(me()),he=function(n){Object(p.a)(t,n);var e=Object(m.a)(t);function t(n){var r;return Object(d.a)(this,t),(r=e.call(this,n)).state={myPlaces:[]},r}return Object(f.a)(t,[{key:"componentDidMount",value:function(){var n=this,e=[];pe.forEach((function(t){sn(t.city).then((function(t){e.push(t),n.setState({myPlaces:e})}))}))}},{key:"render",value:function(){return a.a.createElement(ge,null,this.state.myPlaces.map((function(n,e){return a.a.createElement(fe,{icon:gn.get(n.weather[0].main),hum:n.main.humidity,wind:n.wind.deg,speed:n.wind.speed,temp:Math.round(n.main.temp-273.15),city:n.name,country:n.sys.country,key:e})})))}}]),t}(a.a.Component);function be(){var n=Object(l.a)(["\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1.2fr repeat(2, 1fr) 1.5fr 0.1fr;\n  gap: 20px 30px;\n  grid-template-rows: repeat(4, 23%);\n"]);return be=function(){return n},n}var ve=s.a.div(be()),xe=function(){return a.a.createElement(ve,null,a.a.createElement(J,null),a.a.createElement(En,null),a.a.createElement(Un,null),a.a.createElement(he,null))};function ye(){var n=Object(l.a)(["\n  width: 80px;\n  height: 80px;\n  background: ",";\n  clip-path: polygon(0% 0%, 0% 15%, 2% 8%, 5% 5%, 8% 2%, 15% 0%);\n"]);return ye=function(){return n},n}function we(){var n=Object(l.a)(["\n  width: 80px;\n  height: 80px;\n  background: ",";\n  clip-path: polygon(0% 100%, 0% 85%, 2% 92%, 5% 95%, 8% 98%, 15% 100%);\n"]);return we=function(){return n},n}function Ee(){var n=Object(l.a)(["\n  width: 80px;\n  height: 80px;\n"]);return Ee=function(){return n},n}function je(){var n=Object(l.a)(['\n  width: 120px;\n  height: 95px;\n  font-size: 30px;\n  color: #fff;\n  margin: 0;\n  font-family: "Oswald", sans-serif;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  &::after {\n    content: "\xb0C";\n    color: #fff;\n    font-size: 20px;\n  }\n']);return je=function(){return n},n}function Oe(){var n=Object(l.a)(["\n  font-size: 12px;\n  color: #fff;\n  margin: -15px 0 0 0;\n"]);return Oe=function(){return n},n}function Pe(){var n=Object(l.a)(["\n  width: 80px;\n"]);return Pe=function(){return n},n}function _e(){var n=Object(l.a)(["\n  width: 120px;\n  height: 95px;\n  background: ",";\n  border-radius: 0 30px 30px 15px;\n  z-index: 101;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return _e=function(){return n},n}function Ae(){var n=Object(l.a)(["\n  width: 120px;\n  height: 190px;\n  background: ",";\n  border-radius: 0 30px 30px 0;\n  box-shadow: rgba(50, 50, 50, 0.5) 8px 35px 55px 5px;\n"]);return Ae=function(){return n},n}function ke(){var n=Object(l.a)(["\n  min-height: 300px;\n  position: absolute;\n  left: 0;\n  top: 40px;\n  z-index: 100;\n"]);return ke=function(){return n},n}var Ce=s.a.div(ke()),Ie=s.a.div(Ae(),"#1fa1f1"),Te=s.a.div(_e(),"#0270c2"),Re=s.a.img(Pe()),Me=s.a.p(Oe()),ze=s.a.p(je()),Se=s.a.div(Ee()),De=s.a.div(we(),"#0270c2"),Be=s.a.div(ye(),"#1fa1f1"),Le=function(n){Object(p.a)(t,n);var e=Object(m.a)(t);function t(n){var r;return Object(d.a)(this,t),(r=e.call(this,n)).state={icon:null,weather:null,temp:null},r}return Object(f.a)(t,[{key:"componentDidMount",value:function(){var n=this;window.addEventListener("load",(function(){var e,t;navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(r){e=r.coords.longitude,t=r.coords.latitude,O(e,t).then((function(e){document.getElementById("myWeather").innerHTML=e.weather[0].main,document.getElementById("myTemp").innerHTML=Math.round(Number(e.main.temp)-273.15),n.setState({icon:gn.get(e.weather[0].main)})}))}))}))}},{key:"render",value:function(){return a.a.createElement(Ce,null,a.a.createElement(De,null),a.a.createElement(Ie,null,a.a.createElement(Te,null,a.a.createElement(Re,{src:this.state.icon}),a.a.createElement(Me,{id:"myWeather"})),a.a.createElement(Se,null,a.a.createElement(ze,{id:"myTemp"}))),a.a.createElement(Be,null))}}]),t}(a.a.Component);function He(){var n=Object(l.a)(["\n  font-size: 18px;\n  color: #999;\n  cursor: pointer;\n  &:hover {\n    color: #000;\n  }\n"]);return He=function(){return n},n}function Ne(){var n=Object(l.a)(["\n  width: 90%;\n  height: 100%;\n  border: none;\n  padding: 0;\n  &:focus {\n    outline: none;\n  }\n"]);return Ne=function(){return n},n}function Ue(){var n=Object(l.a)(["\n  width: 80%;\n  max-width: 800px;\n  min-width: 320px;\n  height: 30px;\n  margin-bottom: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #fff;\n  padding: 3px 10px 3px 20px;\n  border-radius: 20px;\n  overflow: hidden;\n"]);return Ue=function(){return n},n}var We=s.a.div(Ue()),Fe=s.a.input(Ne()),qe=s.a.i(He()),Je=function(n){Object(p.a)(t,n);var e=Object(m.a)(t);function t(){return Object(d.a)(this,t),e.apply(this,arguments)}return Object(f.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(We,null,a.a.createElement(Fe,{placeholder:"Search weather by areas..."}),a.a.createElement(qe,{className:"fas fa-search"})))}}]),t}(a.a.Component);function Ge(){var n=Object(l.a)(["\n  width: 80%;\n  max-width: 1400px;\n  min-width: 1200px;\n  min-height: 700px;\n  max-height: 900px;\n  background-color: #fff;\n  border-radius: 30px;\n  padding: 40px;\n  position: relative;\n  overflow: hidden;\n"]);return Ge=function(){return n},n}function Qe(){var n=Object(l.a)(["\n  width: 100vw;\n  height: 100vh;\n  background: #e3e8ec;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);return Qe=function(){return n},n}var Ke=s.a.div(Qe()),Ve=s.a.div(Ge());var Ye=function(){return a.a.createElement(Ke,null,a.a.createElement(Je,null),a.a.createElement(Ve,null,a.a.createElement(Le,null),a.a.createElement(xe,null)))},Ze=function(){return a.a.createElement(c.a,null,a.a.createElement(u.c,null,a.a.createElement(u.a,{exact:!0,path:"/",component:Ye})))};o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Ze,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.a3400c6a.chunk.js.map