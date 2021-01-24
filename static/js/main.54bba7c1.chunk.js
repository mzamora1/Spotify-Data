(this["webpackJsonpspotify-data"]=this["webpackJsonpspotify-data"]||[]).push([[0],{31:function(e,t,s){},32:function(e,t,s){},41:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s(1),r=s(23),i=s.n(r),c=(s(31),s(4)),o=s(8),l=s(2);s(32);function d(e){e.children;var t=Object(n.useState)(!1),s=Object(c.a)(t,2),r=s[0],i=s[1],l=function(){window.scrollTo(0,0),i(!1)};return window.onbeforeunload=function(e){window.location.href(window.location.origin)},Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("header",{children:[Object(a.jsx)("a",{className:"logo",href:"#top",children:"Spotify Data"}),Object(a.jsxs)("div",{className:"hamburger",onClick:function(){return i(!r)},children:[Object(a.jsx)("div",{className:r?"line rotateLeft":"line"}),Object(a.jsx)("div",{className:r?"line remove":"line"}),Object(a.jsx)("div",{className:r?"line rotateRight":"line"})]}),Object(a.jsx)("nav",{children:Object(a.jsxs)("ul",{className:r?"list open":"list",children:[Object(a.jsx)("li",{className:"list-item",name:"top songs",children:Object(a.jsx)(o.b,{to:"/topSongs",onClick:l,children:"Top Songs"})}),Object(a.jsx)("li",{className:"list-item",name:"top artists",children:Object(a.jsx)(o.b,{to:"/topArtists",onClick:l,children:"Top Artists"})}),Object(a.jsx)("li",{className:"list-item",name:"reccomendations",children:Object(a.jsx)(o.b,{to:"/reccomendations",onClick:l,children:"Reccomendations"})}),Object(a.jsx)("li",{className:"list-item",name:"timeRange",children:Object(a.jsx)(o.b,{to:"/",onClick:l,children:"Select Time Range"})})]})})]})})}var u=s(11),j=Array(40);j.fill(1);var h=function(){return Object(n.useEffect)((function(){u.a.timeline({duration:800,easing:"easeInOutSine"}).add({targets:"path",strokeDashoffset:[u.a.setDashoffset,0],translateX:[-10,10],fill:"#1DB954",delay:u.a.stagger(150,{start:-1500})}).add({targets:"#loginBtn",translateX:[-10,10],opacity:[0,1]},"-=400")}),[]),Object(n.useEffect)((function(){Object(u.a)({targets:"img",translateY:"-100vh",opacity:[.1,1],width:["2vw","6vw"],delay:u.a.stagger(300),duration:3e3,autoplay:!0,easing:"easeInQuad",loop:!0,endDelay:-100})}),[]),Object(a.jsxs)("div",{className:"login",children:[Object(a.jsxs)("div",{id:"svgWrapper",children:[Object(a.jsxs)("svg",{id:"spot",viewBox:"0 0 500 200",preserveAspectRatio:"xMinYMin meet",fill:"none",children:[" ",Object(a.jsxs)("mask",{id:"path-1-outside-1",maskUnits:"userSpaceOnUse",x:"0.639999",y:"0.799988",width:"489",height:"89",fill:"black",children:[Object(a.jsx)("rect",{fill:"white",x:"0.639999",y:"0.799988",width:"489",height:"89"}),Object(a.jsx)("path",{d:"M21.08 88.2C14.68 88.2 9.84 86.4 6.56 82.8C3.28 79.12 1.64 73.88 1.64 67.08V62.28H14.12V68.04C14.12 73.48 16.4 76.2 20.96 76.2C23.2 76.2 24.88 75.56 26 74.28C27.2 72.92 27.8 70.76 27.8 67.8C27.8 64.28 27 61.2 25.4 58.56C23.8 55.84 20.84 52.6 16.52 48.84C11.08 44.04 7.28 39.72 5.12 35.88C2.96 31.96 1.88 27.56 1.88 22.68C1.88 16.04 3.56 10.92 6.92 7.31999C10.28 3.63999 15.16 1.79999 21.56 1.79999C27.88 1.79999 32.64 3.63999 35.84 7.31999C39.12 10.92 40.76 16.12 40.76 22.92V26.4H28.28V22.08C28.28 19.2 27.72 17.12 26.6 15.84C25.48 14.48 23.84 13.8 21.68 13.8C17.28 13.8 15.08 16.48 15.08 21.84C15.08 24.88 15.88 27.72 17.48 30.36C19.16 33 22.16 36.2 26.48 39.96C32 44.76 35.8 49.12 37.88 53.04C39.96 56.96 41 61.56 41 66.84C41 73.72 39.28 79 35.84 82.68C32.48 86.36 27.56 88.2 21.08 88.2Z"}),Object(a.jsx)("path",{d:"M48.5684 2.99999H68.0084C74.5684 2.99999 79.4884 4.75999 82.7684 8.27999C86.0484 11.8 87.6884 16.96 87.6884 23.76V32.04C87.6884 38.84 86.0484 44 82.7684 47.52C79.4884 51.04 74.5684 52.8 68.0084 52.8H61.7684V87H48.5684V2.99999ZM68.0084 40.8C70.1684 40.8 71.7684 40.2 72.8084 39C73.9284 37.8 74.4884 35.76 74.4884 32.88V22.92C74.4884 20.04 73.9284 18 72.8084 16.8C71.7684 15.6 70.1684 15 68.0084 15H61.7684V40.8H68.0084Z"}),Object(a.jsx)("path",{d:"M113.938 88.2C107.457 88.2 102.498 86.36 99.0575 82.68C95.6175 79 93.8975 73.8 93.8975 67.08V22.92C93.8975 16.2 95.6175 11 99.0575 7.31999C102.498 3.63999 107.457 1.79999 113.938 1.79999C120.418 1.79999 125.378 3.63999 128.818 7.31999C132.258 11 133.978 16.2 133.978 22.92V67.08C133.978 73.8 132.258 79 128.818 82.68C125.378 86.36 120.418 88.2 113.938 88.2ZM113.938 76.2C118.497 76.2 120.777 73.44 120.777 67.92V22.08C120.777 16.56 118.497 13.8 113.938 13.8C109.378 13.8 107.098 16.56 107.098 22.08V67.92C107.098 73.44 109.378 76.2 113.938 76.2Z"}),Object(a.jsx)("path",{d:"M152.756 15H138.956V2.99999H179.756V15H165.956V87H152.756V15Z"}),Object(a.jsx)("path",{d:"M186.147 2.99999H199.347V87H186.147V2.99999Z"}),Object(a.jsx)("path",{d:"M209.232 2.99999H244.152V15H222.432V38.4H239.473V50.4H222.432V87H209.232V2.99999Z"}),Object(a.jsx)("path",{d:"M262.602 51.24L246.643 2.99999H260.682L269.682 33.84H269.923L278.923 2.99999H291.762L275.802 51.24V87H262.602V51.24Z"}),Object(a.jsx)("path",{d:"M316.928 2.99999H337.088C343.648 2.99999 348.568 4.75999 351.848 8.27999C355.128 11.8 356.768 16.96 356.768 23.76V66.24C356.768 73.04 355.128 78.2 351.848 81.72C348.568 85.24 343.648 87 337.088 87H316.928V2.99999ZM336.848 75C339.008 75 340.648 74.36 341.768 73.08C342.968 71.8 343.568 69.72 343.568 66.84V23.16C343.568 20.28 342.968 18.2 341.768 16.92C340.648 15.64 339.008 15 336.848 15H330.128V75H336.848Z"}),Object(a.jsx)("path",{d:"M375.643 2.99999H393.523L407.203 87H394.003L391.603 70.32V70.56H376.603L374.203 87H361.963L375.643 2.99999ZM390.043 59.16L384.163 17.64H383.923L378.163 59.16H390.043Z"}),Object(a.jsx)("path",{d:"M418.42 15H404.62V2.99999H445.42V15H431.62V87H418.42V15Z"}),Object(a.jsx)("path",{d:"M456.503 2.99999H474.383L488.063 87H474.863L472.463 70.32V70.56H457.463L455.063 87H442.823L456.503 2.99999ZM470.903 59.16L465.023 17.64H464.783L459.023 59.16H470.903Z"})]}),Object(a.jsx)("path",{d:"M21.08 88.2C14.68 88.2 9.84 86.4 6.56 82.8C3.28 79.12 1.64 73.88 1.64 67.08V62.28H14.12V68.04C14.12 73.48 16.4 76.2 20.96 76.2C23.2 76.2 24.88 75.56 26 74.28C27.2 72.92 27.8 70.76 27.8 67.8C27.8 64.28 27 61.2 25.4 58.56C23.8 55.84 20.84 52.6 16.52 48.84C11.08 44.04 7.28 39.72 5.12 35.88C2.96 31.96 1.88 27.56 1.88 22.68C1.88 16.04 3.56 10.92 6.92 7.31999C10.28 3.63999 15.16 1.79999 21.56 1.79999C27.88 1.79999 32.64 3.63999 35.84 7.31999C39.12 10.92 40.76 16.12 40.76 22.92V26.4H28.28V22.08C28.28 19.2 27.72 17.12 26.6 15.84C25.48 14.48 23.84 13.8 21.68 13.8C17.28 13.8 15.08 16.48 15.08 21.84C15.08 24.88 15.88 27.72 17.48 30.36C19.16 33 22.16 36.2 26.48 39.96C32 44.76 35.8 49.12 37.88 53.04C39.96 56.96 41 61.56 41 66.84C41 73.72 39.28 79 35.84 82.68C32.48 86.36 27.56 88.2 21.08 88.2Z",stroke:"#1DB954",strokeWidth:"2",mask:"url(#path-1-outside-1)"}),Object(a.jsx)("path",{d:"M48.5684 2.99999H68.0084C74.5684 2.99999 79.4884 4.75999 82.7684 8.27999C86.0484 11.8 87.6884 16.96 87.6884 23.76V32.04C87.6884 38.84 86.0484 44 82.7684 47.52C79.4884 51.04 74.5684 52.8 68.0084 52.8H61.7684V87H48.5684V2.99999ZM68.0084 40.8C70.1684 40.8 71.7684 40.2 72.8084 39C73.9284 37.8 74.4884 35.76 74.4884 32.88V22.92C74.4884 20.04 73.9284 18 72.8084 16.8C71.7684 15.6 70.1684 15 68.0084 15H61.7684V40.8H68.0084Z",stroke:"#1DB954",strokeWidth:"2",mask:"url(#path-1-outside-1)"}),Object(a.jsx)("path",{d:"M113.938 88.2C107.457 88.2 102.498 86.36 99.0575 82.68C95.6175 79 93.8975 73.8 93.8975 67.08V22.92C93.8975 16.2 95.6175 11 99.0575 7.31999C102.498 3.63999 107.457 1.79999 113.938 1.79999C120.418 1.79999 125.378 3.63999 128.818 7.31999C132.258 11 133.978 16.2 133.978 22.92V67.08C133.978 73.8 132.258 79 128.818 82.68C125.378 86.36 120.418 88.2 113.938 88.2ZM113.938 76.2C118.497 76.2 120.777 73.44 120.777 67.92V22.08C120.777 16.56 118.497 13.8 113.938 13.8C109.378 13.8 107.098 16.56 107.098 22.08V67.92C107.098 73.44 109.378 76.2 113.938 76.2Z",stroke:"#1DB954",strokeWidth:"2",mask:"url(#path-1-outside-1)"}),Object(a.jsx)("path",{d:"M152.756 15H138.956V2.99999H179.756V15H165.956V87H152.756V15Z",stroke:"#1DB954",strokeWidth:"2",mask:"url(#path-1-outside-1)"}),Object(a.jsx)("path",{d:"M186.147 2.99999H199.347V87H186.147V2.99999Z",stroke:"#1DB954",strokeWidth:"2",mask:"url(#path-1-outside-1)"}),Object(a.jsx)("path",{d:"M209.232 2.99999H244.152V15H222.432V38.4H239.473V50.4H222.432V87H209.232V2.99999Z",stroke:"#1DB954",strokeWidth:"2",mask:"url(#path-1-outside-1)"}),Object(a.jsx)("path",{d:"M262.602 51.24L246.643 2.99999H260.682L269.682 33.84H269.923L278.923 2.99999H291.762L275.802 51.24V87H262.602V51.24Z",stroke:"#1DB954",strokeWidth:"2",mask:"url(#path-1-outside-1)"}),Object(a.jsx)("path",{d:"M316.928 2.99999H337.088C343.648 2.99999 348.568 4.75999 351.848 8.27999C355.128 11.8 356.768 16.96 356.768 23.76V66.24C356.768 73.04 355.128 78.2 351.848 81.72C348.568 85.24 343.648 87 337.088 87H316.928V2.99999ZM336.848 75C339.008 75 340.648 74.36 341.768 73.08C342.968 71.8 343.568 69.72 343.568 66.84V23.16C343.568 20.28 342.968 18.2 341.768 16.92C340.648 15.64 339.008 15 336.848 15H330.128V75H336.848Z",stroke:"#1DB954",strokeWidth:"2",mask:"url(#path-1-outside-1)"}),Object(a.jsx)("path",{d:"M375.643 2.99999H393.523L407.203 87H394.003L391.603 70.32V70.56H376.603L374.203 87H361.963L375.643 2.99999ZM390.043 59.16L384.163 17.64H383.923L378.163 59.16H390.043Z",stroke:"#1DB954",strokeWidth:"2",mask:"url(#path-1-outside-1)"}),Object(a.jsx)("path",{d:"M418.42 15H404.62V2.99999H445.42V15H431.62V87H418.42V15Z",stroke:"#1DB954",strokeWidth:"2",mask:"url(#path-1-outside-1)"}),Object(a.jsx)("path",{d:"M456.503 2.99999H474.383L488.063 87H474.863L472.463 70.32V70.56H457.463L455.063 87H442.823L456.503 2.99999ZM470.903 59.16L465.023 17.64H464.783L459.023 59.16H470.903Z",stroke:"#1DB954",strokeWidth:"2",mask:"url(#path-1-outside-1)"})]}),Object(a.jsx)("button",{id:"loginBtn",onClick:function(){window.location.href="https://accounts.spotify.com/authorize?client_id=b48ae6f543f941a5be1084b45ed74b13&redirect_uri=https://mzamora1.github.io/Spotify-Data/&scope=user-top-read&response_type=token"},children:"Login"})]}),j.map((function(e,t){return Object(a.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",className:"floatingBubble",style:{left:Math.random()*window.innerWidth,zIndex:-1},alt:"spotify logo"},t)}))]})},p=s(21),b=s(15),m=s.n(b),f=s(25),x=s(14),O=s.n(x),C=s(20),g=window.location.hash.substring(1).split("&").map((function(e){return e.split("=")}))[0][1];function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],s=Object(n.useState)(Array.isArray(e)?[]:null),a=Object(c.a)(s,2),r=a[0],i=a[1];return Object(n.useEffect)((function(){var t=function(){var e=Object(C.a)(O.a.mark((function e(s){var a,n,r,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(s,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+g}});case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:if(e.prev=10,e.t0=e.catch(0),console.warn(e.t0),503!=(null===(r=a)||void 0===r?void 0:r.status)){e.next=15;break}return e.abrupt("return",t(s));case 15:429==(null===(i=a)||void 0===i?void 0:i.status)&&(console.log("rate limited"),setTimeout(t,1e3*a.headers.get("Retry-After"),s));case 16:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}();function s(){return(s=Object(C.a)(O.a.mark((function s(){var a,n,r,c,o,l;return O.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(!Array.isArray(e)){s.next=24;break}a=[],n=Object(f.a)(e),s.prev=3,n.s();case 5:if((r=n.n()).done){s.next=13;break}return c=r.value,s.next=9,t(c);case 9:(o=s.sent)&&a.push(o);case 11:s.next=5;break;case 13:s.next=18;break;case 15:s.prev=15,s.t0=s.catch(3),n.e(s.t0);case 18:return s.prev=18,n.f(),s.finish(18);case 21:i(a),s.next=29;break;case 24:if(e.constructor!==String){s.next=29;break}return s.next=27,t(e);case 27:(l=s.sent)&&i(l);case 29:case"end":return s.stop()}}),s,null,[[3,15,18,21]])})))).apply(this,arguments)}return e&&g&&function(){s.apply(this,arguments)}(),function(){return i(null)}}),t),r}function v(e){var t=e.data,s=Object(n.useRef)(null),r=(t.reduce((function(e,t){return e+t.popularity}),0)/t.length).toFixed(2);return Object(n.useEffect)((function(){var e=[],a=[],n=[],r=t.reduce((function(e,t){return Math.max(e,t.popularity)}),0),i=t.reduce((function(e,t){return Math.min(e,t.popularity)}),100);t.forEach((function(t){e.push(t.popularity),a.push(t.name);var s,c,o,l,d=(s=t.popularity,o=15,l=70,s=(s-(c=i))/(r-c),Math.round(o+s*(l-o)));n.push("hsl(143, 75%, ".concat(d,"%)"))}));var c=new m.a(s.current,{type:"horizontalBar",data:{datasets:[{data:e,backgroundColor:n,barThickness:"flex"}],labels:a},options:{responsive:!0,maintainAspectRatio:!1,legend:{display:!1}}});return function(){return c.destroy()}}),[t]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"canvasContainer",children:Object(a.jsx)("canvas",{style:{padding:"0 10px",paddingBottom:"3em"},ref:s})}),Object(a.jsx)("div",{className:"basicMeter",children:Object(a.jsxs)("h2",{children:["Damn, ",r,"% Basic"]})})]})}function k(e){var t=e.data,s=Object(n.useRef)(null),r=["danceability","energy","speechiness","acousticness","instrumentalness","liveness","valence"];function i(e,a,n,r){var i=Array.isArray(t)?"rgb(255, 255, 255)":"rgb(0, 0, 0)",c=[{label:"Average",backgroundColor:"hsla(143, 75%, 50%, 0.5)",data:a}];n&&c.push({label:"Minimun",backgroundColor:"hsla(143, 75%, 80%, 0.5)",data:n}),r&&c.push({label:"Maximun",backgroundColor:"hsla(143, 75%, 15%, 0.5)",data:r});var o=new m.a(s.current,{type:"radar",data:{labels:e.map((function(e){return e.toUpperCase()})),datasets:c},options:{scale:{pointLabels:{fontColor:i},angleLines:{color:i},gridLines:{color:i},ticks:{backdropColor:"rgb(0, 0, 0)",fontColor:"rgb(255, 255, 255)"}},responsive:!0,maintainAspectRatio:!1,legend:{display:Array.isArray(t)}}});return function(){return o.destroy()}}return Object(n.useEffect)((function(){if(Array.isArray(t)){var e=Object.keys(t[0]).filter((function(e){return r.includes(e)})),s=e.map((function(e){return Math.round(t.reduce((function(t,s){return t+s[e]}),0)/t.length*100)})),a=e.map((function(e){return Math.round(100*Math.min.apply(Math,Object(p.a)(t.map((function(t){return t[e]})))))})),n=e.map((function(e){return Math.round(100*Math.max.apply(Math,Object(p.a)(t.map((function(t){return t[e]})))))}));return i(e,s,a,n)}if(t.constructor===Object){var c=Object.keys(t).filter((function(e){return r.includes(e)})),o=c.map((function(e){return Math.round(100*t[e])}));return i(c,o)}}),[t]),Object(a.jsx)("div",{style:Array.isArray(t)?{width:"100vw",height:"50vh",marginTop:"10px"}:{position:"absolute",top:"10%",width:"100%",height:"60%",backgroundColor:"rgba(255,255,255, 0.2)",backdropFilter:"blur(300px)",zIndex:0},children:Object(a.jsx)("canvas",{style:Array.isArray(t)?{padding:"0 10px"}:{padding:"10px 10px"},ref:s})})}m.a.defaults.global.defaultFontColor="white";function H(e){var t=e.songs,s=e.audioFeatures,r=Object(n.useState)(!0),i=Object(c.a)(r,2),o=i[0],l=i[1];return Object(a.jsx)("div",{onClick:function(){return l(!o)},children:t.map((function(e,t){return Object(a.jsx)(V,{song:e,globalPlaying:o,audioFeature:s[t]},e.id)}))})}function V(e){var t=e.song,s=e.rank,r=e.globalPlaying,i=e.audioFeature,o=t.album,l=t.name,d=t.artists,u=t.preview_url,j=function(e){var t=Object(n.useState)(new Audio(e)),s=Object(c.a)(t,1)[0],a=Object(n.useState)(!1),r=Object(c.a)(a,2),i=r[0],o=r[1];return Object(n.useEffect)((function(){e&&(i?s.play():s.pause())}),[i]),Object(n.useEffect)((function(){if(e)return s.addEventListener("ended",(function(){return o(!1)})),function(){s.pause(),s.removeEventListener("ended",(function(){return o(!1)}))}}),[s]),[i,o]}(u),h=Object(c.a)(j,2),p=h[0],b=h[1],m=Object(n.useState)(!1),f=Object(c.a)(m,2),x=f[0],O=f[1];return Object(n.useEffect)((function(){b(!1),O(!1)}),[r]),Object(n.useEffect)((function(){!r&&x&&b(!0)}),[x]),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"listItem",onClick:function(){return O(!x)},children:Object(a.jsxs)("div",{className:p?"flipCardInner rotateItem":"flipCardInner",children:[Object(a.jsxs)("div",{className:"flipCardFront",children:[Object(a.jsx)("img",{src:o.images[0].url,width:"100%",className:"songImg",alt:"album cover"}),Object(a.jsxs)("div",{className:"listInfo",style:p?{opacity:0,transition:"opacity .3s ease-in"}:{transition:"opacity .3s ease-in"},children:[u&&Object(a.jsx)("i",{style:{marginLeft:"1em",fontSize:"clamp(20px, 3vw, 40px)"},className:p?"fas fa-pause":"fas fa-play"}),Object(a.jsxs)("div",{style:{marginLeft:"1em",flexDirection:"column"},children:[Object(a.jsx)("h1",{children:l}),Object(a.jsxs)("h2",{children:["By: ",d[0].name]}),Object(a.jsxs)("h2",{children:["Album: ",o.name]})]}),Object(a.jsx)("h1",{className:"rank",children:s&&"#"+s})]})]}),Object(a.jsxs)("div",{className:"flipCardBack",children:[Object(a.jsx)("img",{src:o.images[0].url,width:"100%",className:"songImg",alt:"album cover",style:{position:"relative",zIndex:0}}),Object(a.jsx)(k,{data:i})]})]})})})}function w(e){var t=e.artist,s=e.rank,r=t.name,i=t.popularity,o=t.images,l=t.id,d=t.followers,u=t.genres,j=Object(n.useState)(!1),h=Object(c.a)(j,2),p=h[0],b=h[1],m=y("https://api.spotify.com/v1/artists/".concat(l,"/related-artists"));return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{onClick:function(){return b(!p)},className:"listItem",children:Object(a.jsxs)("div",{className:p?"flipCardInner rotateItem":"flipCardInner",children:[Object(a.jsxs)("div",{className:"flipCardFront",children:[Object(a.jsx)("img",{src:o[0].url,width:"100%",alt:"artist"}),Object(a.jsxs)("div",{className:"listInfo",style:p?{opacity:0,transition:"opacity .3s ease-in"}:{transition:"opacity .3s ease-in"},children:[Object(a.jsxs)("div",{style:{marginLeft:"1em",flexDirection:"column"},children:[Object(a.jsx)("h1",{children:r}),Object(a.jsxs)("h2",{style:{fontWeight:"500",textAlign:"left"},children:["More Info ",Object(a.jsx)("i",{style:{color:"#1DB954"},className:"far fa-arrow-alt-circle-right"})]})]}),Object(a.jsx)("h1",{className:"rank",children:s&&"#"+s})]})]}),Object(a.jsxs)("div",{className:"flipCardBack",children:[Object(a.jsx)("img",{src:o[0].url,width:"100%",alt:"artist"}),Object(a.jsxs)("div",{className:"backArtistInfo",children:[Object(a.jsx)("h1",{style:{fontWeight:"800"},children:r}),Object(a.jsxs)("h2",{children:["Followers: ",d.total]}),Object(a.jsxs)("h2",{children:["Popularity: ",i," out of 100"]}),Object(a.jsxs)("div",{className:"tables",style:{display:"flex",justifyContent:"space-evenly"},children:[Object(a.jsxs)("h2",{children:["Genres:",Object(a.jsx)("ul",{children:u.map((function(e,t){return Object(a.jsx)("li",{children:e},t)}))})]}),Object(a.jsxs)("h2",{style:{whiteSpace:"nowrap",marginLeft:"5px"},children:["Related Artists:",Object(a.jsx)("ul",{children:m?m.artists.map((function(e,t){return t<5&&Object(a.jsx)("li",{children:e.name},t)})):Object(a.jsx)("div",{children:"Loading..."})})]})]})]})]})]})})})}function M(){for(var e=Object(n.useState)("medium_term"),t=Object(c.a)(e,2),s=t[0],r=t[1],i=y("https://api.spotify.com/v1/me/top/artists?time_range=".concat(s),[s]),u=y("https://api.spotify.com/v1/me/top/tracks?time_range=".concat(s),[s]),j=[],p=0;u&&p<5;p++)j.push(u.items[p].id);var b=y(u&&"https://api.spotify.com/v1/recommendations?seed_tracks="+String(j),[u]),m=y(u&&"https://api.spotify.com/v1/audio-features?ids="+String(u.items.map((function(e){return e.id}))),[u]);return g?i&&u&&b&&m?Object(a.jsx)(o.a,{basename:"/Spotify-Data",children:Object(a.jsxs)("div",{style:{overflow:"hidden",textAlign:"center",color:"white"},children:[Object(a.jsx)(d,{}),Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{exact:!0,path:["/"],children:Object(a.jsxs)("div",{className:"timeRange",children:[Object(a.jsx)("h1",{children:"Select a time range"}),Object(a.jsxs)("div",{style:{},children:[Object(a.jsx)("p",{children:"Based off of your streams from the past 4 weeks"}),Object(a.jsx)(o.b,{id:"short_term",onClick:function(e){return r(e.target.id)},to:"/topArtists",children:"Short Term"}),Object(a.jsx)("p",{children:"Based off of your streams from the past 6 months"}),Object(a.jsx)(o.b,{id:"medium_term",onClick:function(e){return r(e.target.id)},to:"/topArtists",children:"Medium Term"}),Object(a.jsx)("p",{children:"Based off of your all time streams, could be several years"}),Object(a.jsx)(o.b,{id:"long_term",onClick:function(e){return r(e.target.id)},to:"/topArtists",children:"Long Term"})]})]})}),Object(a.jsx)(l.a,{exact:!0,path:"/topSongs",children:Object(a.jsxs)("div",{style:{marginTop:"calc(80px + 1em)"},children:[Object(a.jsxs)("h1",{children:["Your Top ",u.items.length," Tracks Ranked By Popularity"]}),Object(a.jsx)(v,{data:u.items}),Object(a.jsx)("h1",{children:"Your Music Taste"}),Object(a.jsx)(k,{data:m.audio_features}),Object(a.jsxs)("h1",{style:{margin:"1em 0"},children:["Your Top ",u.items.length," Songs In Order"]}),Object(a.jsx)(H,{songs:u.items,audioFeatures:m.audio_features})]})}),Object(a.jsx)(l.a,{path:"/topArtists",children:Object(a.jsxs)("div",{style:{marginTop:"calc(80px + 1em)"},children:[Object(a.jsxs)("h1",{children:["Your Top ",i.items.length," Artists Ranked By Popularity"]}),Object(a.jsx)(v,{data:i.items}),Object(a.jsxs)("h1",{style:{margin:"1em 0"},children:["Your Top ",i.items.length," Artists In Order"]}),i.items.map((function(e,t){return Object(a.jsx)(w,{artist:e,rank:t+1},e.id)}))]})}),Object(a.jsx)(l.a,{path:"/reccomendations",children:Object(a.jsxs)("div",{style:{marginTop:"calc(80px + 1em)"},children:[Object(a.jsx)("h1",{style:{margin:"1em 0"},children:"Songs you might like"}),Object(a.jsx)("h3",{style:{marginBottom:"1em"},children:"Based on your top 5 songs"}),Object(a.jsx)(H,{songs:b.tracks,audioFeatures:m.audio_features})]})})]})]})}):Object(a.jsx)("div",{className:"loading",children:"Loading..."}):Object(a.jsx)(h,{})}i.a.render(Object(a.jsx)(M,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.54bba7c1.chunk.js.map