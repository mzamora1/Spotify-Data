(this["webpackJsonpspotify-data"]=this["webpackJsonpspotify-data"]||[]).push([[0],{31:function(t,e,s){},38:function(t,e,s){},41:function(t,e,s){"use strict";s.r(e);var a=s(0),n=s(1),c=s.n(n),i=s(20),r=s.n(i),o=(s(31),s(4)),l=s(9),j=s(2);var d=function(t){var e=Object(n.useState)(!1),s=Object(o.a)(e,2),c=s[0],i=s[1];function r(){i(!c)}return Object(a.jsxs)("header",{children:[Object(a.jsx)("a",{className:"logo",href:"#top",children:"Spotify Data"}),Object(a.jsxs)("div",{className:"hamburger",id:"hamburger",onClick:r,children:[Object(a.jsx)("div",{className:c?"line rotateLeft":"line"}),Object(a.jsx)("div",{className:c?"line remove":"line"}),Object(a.jsx)("div",{className:c?"line rotateRight":"line"})]}),Object(a.jsx)("nav",{children:Object(a.jsxs)("ul",{className:c?"list open":"list",children:[Object(a.jsx)("li",{className:"list-item",name:"top songs",children:Object(a.jsx)(l.b,{to:"/",onClick:r,children:"Top Songs"})}),Object(a.jsx)("li",{className:"list-item",name:"top artists",children:Object(a.jsx)(l.b,{to:"/topArtists",onClick:r,children:"Top Artists"})}),Object(a.jsx)("li",{className:"list-item",name:"my account",children:Object(a.jsx)(l.b,{to:"/reccomendations",onClick:r,children:"Reccomendations"})})]})})]})},h=s(11),u=Array(40);u.fill(1);var p=function(){return Object(n.useEffect)((function(){h.a.timeline({duration:800,easing:"easeInOutSine"}).add({targets:"path",strokeDashoffset:[h.a.setDashoffset,0],translateX:[-10,10],fill:"#1DB954",delay:h.a.stagger(150,{start:-1500})}).add({targets:"#loginBtn",translateX:[-10,10],opacity:[0,1]},"-=400")}),[]),Object(n.useEffect)((function(){Object(h.a)({targets:"img",translateY:"-100vh",opacity:[.1,1],width:["2vw","6vw"],delay:h.a.stagger(300),duration:3e3,autoplay:!0,easing:"easeInQuad",loop:!0,endDelay:-100})}),[]),Object(a.jsxs)("div",{className:"login",children:[Object(a.jsxs)("div",{id:"svgWrapper",children:[Object(a.jsxs)("svg",{id:"spot",viewBox:"0 0 500 200",preserveAspectRatio:"xMinYMin meet",fill:"none",children:[" ",Object(a.jsxs)("mask",{id:"path-1-outside-1",maskUnits:"userSpaceOnUse",x:"0.639999",y:"0.799988",width:"489",height:"89",fill:"black",children:[Object(a.jsx)("rect",{fill:"white",x:"0.639999",y:"0.799988",width:"489",height:"89"}),Object(a.jsx)("path",{d:"M21.08 88.2C14.68 88.2 9.84 86.4 6.56 82.8C3.28 79.12 1.64 73.88 1.64 67.08V62.28H14.12V68.04C14.12 73.48 16.4 76.2 20.96 76.2C23.2 76.2 24.88 75.56 26 74.28C27.2 72.92 27.8 70.76 27.8 67.8C27.8 64.28 27 61.2 25.4 58.56C23.8 55.84 20.84 52.6 16.52 48.84C11.08 44.04 7.28 39.72 5.12 35.88C2.96 31.96 1.88 27.56 1.88 22.68C1.88 16.04 3.56 10.92 6.92 7.31999C10.28 3.63999 15.16 1.79999 21.56 1.79999C27.88 1.79999 32.64 3.63999 35.84 7.31999C39.12 10.92 40.76 16.12 40.76 22.92V26.4H28.28V22.08C28.28 19.2 27.72 17.12 26.6 15.84C25.48 14.48 23.84 13.8 21.68 13.8C17.28 13.8 15.08 16.48 15.08 21.84C15.08 24.88 15.88 27.72 17.48 30.36C19.16 33 22.16 36.2 26.48 39.96C32 44.76 35.8 49.12 37.88 53.04C39.96 56.96 41 61.56 41 66.84C41 73.72 39.28 79 35.84 82.68C32.48 86.36 27.56 88.2 21.08 88.2Z"}),Object(a.jsx)("path",{d:"M48.5684 2.99999H68.0084C74.5684 2.99999 79.4884 4.75999 82.7684 8.27999C86.0484 11.8 87.6884 16.96 87.6884 23.76V32.04C87.6884 38.84 86.0484 44 82.7684 47.52C79.4884 51.04 74.5684 52.8 68.0084 52.8H61.7684V87H48.5684V2.99999ZM68.0084 40.8C70.1684 40.8 71.7684 40.2 72.8084 39C73.9284 37.8 74.4884 35.76 74.4884 32.88V22.92C74.4884 20.04 73.9284 18 72.8084 16.8C71.7684 15.6 70.1684 15 68.0084 15H61.7684V40.8H68.0084Z"}),Object(a.jsx)("path",{d:"M113.938 88.2C107.457 88.2 102.498 86.36 99.0575 82.68C95.6175 79 93.8975 73.8 93.8975 67.08V22.92C93.8975 16.2 95.6175 11 99.0575 7.31999C102.498 3.63999 107.457 1.79999 113.938 1.79999C120.418 1.79999 125.378 3.63999 128.818 7.31999C132.258 11 133.978 16.2 133.978 22.92V67.08C133.978 73.8 132.258 79 128.818 82.68C125.378 86.36 120.418 88.2 113.938 88.2ZM113.938 76.2C118.497 76.2 120.777 73.44 120.777 67.92V22.08C120.777 16.56 118.497 13.8 113.938 13.8C109.378 13.8 107.098 16.56 107.098 22.08V67.92C107.098 73.44 109.378 76.2 113.938 76.2Z"}),Object(a.jsx)("path",{d:"M152.756 15H138.956V2.99999H179.756V15H165.956V87H152.756V15Z"}),Object(a.jsx)("path",{d:"M186.147 2.99999H199.347V87H186.147V2.99999Z"}),Object(a.jsx)("path",{d:"M209.232 2.99999H244.152V15H222.432V38.4H239.473V50.4H222.432V87H209.232V2.99999Z"}),Object(a.jsx)("path",{d:"M262.602 51.24L246.643 2.99999H260.682L269.682 33.84H269.923L278.923 2.99999H291.762L275.802 51.24V87H262.602V51.24Z"}),Object(a.jsx)("path",{d:"M316.928 2.99999H337.088C343.648 2.99999 348.568 4.75999 351.848 8.27999C355.128 11.8 356.768 16.96 356.768 23.76V66.24C356.768 73.04 355.128 78.2 351.848 81.72C348.568 85.24 343.648 87 337.088 87H316.928V2.99999ZM336.848 75C339.008 75 340.648 74.36 341.768 73.08C342.968 71.8 343.568 69.72 343.568 66.84V23.16C343.568 20.28 342.968 18.2 341.768 16.92C340.648 15.64 339.008 15 336.848 15H330.128V75H336.848Z"}),Object(a.jsx)("path",{d:"M375.643 2.99999H393.523L407.203 87H394.003L391.603 70.32V70.56H376.603L374.203 87H361.963L375.643 2.99999ZM390.043 59.16L384.163 17.64H383.923L378.163 59.16H390.043Z"}),Object(a.jsx)("path",{d:"M418.42 15H404.62V2.99999H445.42V15H431.62V87H418.42V15Z"}),Object(a.jsx)("path",{d:"M456.503 2.99999H474.383L488.063 87H474.863L472.463 70.32V70.56H457.463L455.063 87H442.823L456.503 2.99999ZM470.903 59.16L465.023 17.64H464.783L459.023 59.16H470.903Z"})]}),Object(a.jsx)("path",{d:"M21.08 88.2C14.68 88.2 9.84 86.4 6.56 82.8C3.28 79.12 1.64 73.88 1.64 67.08V62.28H14.12V68.04C14.12 73.48 16.4 76.2 20.96 76.2C23.2 76.2 24.88 75.56 26 74.28C27.2 72.92 27.8 70.76 27.8 67.8C27.8 64.28 27 61.2 25.4 58.56C23.8 55.84 20.84 52.6 16.52 48.84C11.08 44.04 7.28 39.72 5.12 35.88C2.96 31.96 1.88 27.56 1.88 22.68C1.88 16.04 3.56 10.92 6.92 7.31999C10.28 3.63999 15.16 1.79999 21.56 1.79999C27.88 1.79999 32.64 3.63999 35.84 7.31999C39.12 10.92 40.76 16.12 40.76 22.92V26.4H28.28V22.08C28.28 19.2 27.72 17.12 26.6 15.84C25.48 14.48 23.84 13.8 21.68 13.8C17.28 13.8 15.08 16.48 15.08 21.84C15.08 24.88 15.88 27.72 17.48 30.36C19.16 33 22.16 36.2 26.48 39.96C32 44.76 35.8 49.12 37.88 53.04C39.96 56.96 41 61.56 41 66.84C41 73.72 39.28 79 35.84 82.68C32.48 86.36 27.56 88.2 21.08 88.2Z",stroke:"#1DB954",strokeWidth:"2",mask:"url(#path-1-outside-1)"}),Object(a.jsx)("path",{d:"M48.5684 2.99999H68.0084C74.5684 2.99999 79.4884 4.75999 82.7684 8.27999C86.0484 11.8 87.6884 16.96 87.6884 23.76V32.04C87.6884 38.84 86.0484 44 82.7684 47.52C79.4884 51.04 74.5684 52.8 68.0084 52.8H61.7684V87H48.5684V2.99999ZM68.0084 40.8C70.1684 40.8 71.7684 40.2 72.8084 39C73.9284 37.8 74.4884 35.76 74.4884 32.88V22.92C74.4884 20.04 73.9284 18 72.8084 16.8C71.7684 15.6 70.1684 15 68.0084 15H61.7684V40.8H68.0084Z",stroke:"#1DB954",strokeWidth:"2",mask:"url(#path-1-outside-1)"}),Object(a.jsx)("path",{d:"M113.938 88.2C107.457 88.2 102.498 86.36 99.0575 82.68C95.6175 79 93.8975 73.8 93.8975 67.08V22.92C93.8975 16.2 95.6175 11 99.0575 7.31999C102.498 3.63999 107.457 1.79999 113.938 1.79999C120.418 1.79999 125.378 3.63999 128.818 7.31999C132.258 11 133.978 16.2 133.978 22.92V67.08C133.978 73.8 132.258 79 128.818 82.68C125.378 86.36 120.418 88.2 113.938 88.2ZM113.938 76.2C118.497 76.2 120.777 73.44 120.777 67.92V22.08C120.777 16.56 118.497 13.8 113.938 13.8C109.378 13.8 107.098 16.56 107.098 22.08V67.92C107.098 73.44 109.378 76.2 113.938 76.2Z",stroke:"#1DB954",strokeWidth:"2",mask:"url(#path-1-outside-1)"}),Object(a.jsx)("path",{d:"M152.756 15H138.956V2.99999H179.756V15H165.956V87H152.756V15Z",stroke:"#1DB954",strokeWidth:"2",mask:"url(#path-1-outside-1)"}),Object(a.jsx)("path",{d:"M186.147 2.99999H199.347V87H186.147V2.99999Z",stroke:"#1DB954",strokeWidth:"2",mask:"url(#path-1-outside-1)"}),Object(a.jsx)("path",{d:"M209.232 2.99999H244.152V15H222.432V38.4H239.473V50.4H222.432V87H209.232V2.99999Z",stroke:"#1DB954",strokeWidth:"2",mask:"url(#path-1-outside-1)"}),Object(a.jsx)("path",{d:"M262.602 51.24L246.643 2.99999H260.682L269.682 33.84H269.923L278.923 2.99999H291.762L275.802 51.24V87H262.602V51.24Z",stroke:"#1DB954",strokeWidth:"2",mask:"url(#path-1-outside-1)"}),Object(a.jsx)("path",{d:"M316.928 2.99999H337.088C343.648 2.99999 348.568 4.75999 351.848 8.27999C355.128 11.8 356.768 16.96 356.768 23.76V66.24C356.768 73.04 355.128 78.2 351.848 81.72C348.568 85.24 343.648 87 337.088 87H316.928V2.99999ZM336.848 75C339.008 75 340.648 74.36 341.768 73.08C342.968 71.8 343.568 69.72 343.568 66.84V23.16C343.568 20.28 342.968 18.2 341.768 16.92C340.648 15.64 339.008 15 336.848 15H330.128V75H336.848Z",stroke:"#1DB954",strokeWidth:"2",mask:"url(#path-1-outside-1)"}),Object(a.jsx)("path",{d:"M375.643 2.99999H393.523L407.203 87H394.003L391.603 70.32V70.56H376.603L374.203 87H361.963L375.643 2.99999ZM390.043 59.16L384.163 17.64H383.923L378.163 59.16H390.043Z",stroke:"#1DB954",strokeWidth:"2",mask:"url(#path-1-outside-1)"}),Object(a.jsx)("path",{d:"M418.42 15H404.62V2.99999H445.42V15H431.62V87H418.42V15Z",stroke:"#1DB954",strokeWidth:"2",mask:"url(#path-1-outside-1)"}),Object(a.jsx)("path",{d:"M456.503 2.99999H474.383L488.063 87H474.863L472.463 70.32V70.56H457.463L455.063 87H442.823L456.503 2.99999ZM470.903 59.16L465.023 17.64H464.783L459.023 59.16H470.903Z",stroke:"#1DB954",strokeWidth:"2",mask:"url(#path-1-outside-1)"})]}),Object(a.jsx)("button",{id:"loginBtn",onClick:function(){window.location.href="https://accounts.spotify.com/authorize?client_id=b48ae6f543f941a5be1084b45ed74b13&redirect_uri=https://mzamora1.github.io/Spotify-Data/&scope=user-top-read&response_type=token"},children:"Login"})]}),u.map((function(t,e){return Object(a.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",className:"floatingBubble",style:{left:Math.random()*window.innerWidth,zIndex:-1},alt:"spotify logo"},e)}))]})},b=s(10),m=s.n(b),x=s(13);function f(t){return console.log("render list"),Object(a.jsxs)("div",{className:"itemList",children:["Tracks"===t.search&&t.data.map((function(t,e){return Object(a.jsx)(O,{song:t,index:e},e)})),"Artists"===t.search&&t.data.map((function(e,s){return Object(a.jsx)(C,{artist:e,index:s,accessToken:t.accessToken},s)}))]})}function O(t){var e=t.song,s=e.album,c=e.name,i=e.artists,r=e.preview_url;console.log(t.song);var l=function(t){var e=Object(n.useState)(new Audio(t)),s=Object(o.a)(e,1)[0],a=Object(n.useState)(!1),c=Object(o.a)(a,2),i=c[0],r=c[1];return Object(n.useEffect)((function(){t&&(i?s.play():s.pause())}),[i]),Object(n.useEffect)((function(){if(t)return s.addEventListener("ended",(function(){return r(!1)})),function(){s.removeEventListener("ended",(function(){return r(!1)}))}}),[s]),[i,function(){return r(!i)}]}(r),j=Object(o.a)(l,2),d=j[0],h=j[1];return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"ListItem",onClick:h,children:[Object(a.jsx)("img",{src:s.images[0].url,width:"100%",className:"songImg",alt:"album cover"}),Object(a.jsxs)("div",{className:"songInfo",children:[r?Object(a.jsx)("i",{style:{margin:"0 15px",fontSize:"clamp(20px, 3vw, 40px)"},className:d?"fas fa-pause":"fas fa-play"}):null,Object(a.jsxs)("div",{style:{marginLeft:"1em",flexDirection:"column"},children:[Object(a.jsx)("h1",{style:{fontSize:"clamp(20px, 5vw, 40px)"},children:c}),Object(a.jsxs)("h2",{style:{fontSize:"clamp(15px, 3vw, 30px)"},children:["By: ",i[0].name]}),Object(a.jsxs)("h2",{style:{fontSize:"clamp(15px, 3vw, 30px)"},children:["Album: ",s.name]})]}),Object(a.jsxs)("h1",{style:{marginLeft:"auto",marginRight:"15px",fontSize:"xxx-large"},children:["#",t.index+1]})]})]})})}function C(t){var e=t.artist,s=e.name,i=e.popularity,r=e.images,l=e.id,j=e.followers,d=e.genres,h=Object(n.useState)(!1),u=Object(o.a)(h,2),p=u[0],b=u[1],f=function(t,e){var s=c.a.useState(null),a=Object(o.a)(s,2),n=a[0],i=a[1],r=c.a.useState(null),l=Object(o.a)(r,2),j=l[0],d=l[1];return c.a.useEffect((function(){!function(){var s=Object(x.a)(m.a.mark((function s(){var a,n;return m.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,fetch(t,e);case 3:return a=s.sent,s.next=6,a.json();case 6:n=s.sent,i(n),s.next=13;break;case 10:s.prev=10,s.t0=s.catch(0),d(s.t0);case 13:case"end":return s.stop()}}),s,null,[[0,10]])})));return function(){return s.apply(this,arguments)}}()()}),[]),{response:n,error:j}}("https://api.spotify.com/v1/artists/".concat(l,"/related-artists"),{method:"GET",headers:{Authorization:"Bearer "+t.accessToken}}),O=f.response,C=f.error;return O?C?Object(a.jsxs)("div",{children:["Error: ",C.message]}):Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{onClick:function(){b(!p)},className:"ListItem",style:{perspective:"1000px"},children:Object(a.jsxs)("div",{className:p?"flipCardInner rotateItem":"flipCardInner",children:[Object(a.jsxs)("div",{className:"flipCardFront",children:[Object(a.jsx)("img",{src:r[0].url,width:"100%",className:"artistImg",alt:"artist image"}),Object(a.jsxs)("div",{className:"artistInfo",children:[Object(a.jsxs)("div",{style:{marginLeft:"1em",flexDirection:"column"},children:[Object(a.jsx)("h1",{children:s}),Object(a.jsxs)("h2",{children:["More Info ",Object(a.jsx)("i",{style:{color:"#1DB954"},className:"far fa-arrow-alt-circle-right"})]})]}),Object(a.jsxs)("h1",{style:{marginLeft:"auto",marginRight:"1em",fontSize:"xxx-large"},children:["#",t.index+1]})]})]}),Object(a.jsxs)("div",{className:"flipCardBack",children:[Object(a.jsx)("img",{src:r[0].url,width:"100%",className:"artistImg",alt:"artist image"}),Object(a.jsxs)("div",{className:"backArtistInfo",children:[Object(a.jsx)("h1",{style:{fontSize:"3em"},children:s}),Object(a.jsxs)("h2",{children:["Followers: ",j.total]}),Object(a.jsxs)("h2",{children:["Popularity: ",i," out of 100"]}),Object(a.jsxs)("h2",{children:["Genres: ",Object(a.jsxs)("span",{children:[" ",d.map((function(t,e){return e!==d.length-1?"".concat(t,", "):t}))," "]})]}),Object(a.jsxs)("h2",{children:["Related Artists:",Object(a.jsx)("ul",{style:{listStyle:"inside",textAlign:"left",marginLeft:"25%",marginTop:"0px"},children:O.artists.map((function(t,e){return e<5?Object(a.jsx)("li",{children:t.name},e):null}))})]})]})]})]})})}):Object(a.jsx)("div",{children:"Loading..."})}var g=function(t){var e=Object(n.useState)(null),s=Object(o.a)(e,2),c=s[0],i=s[1];return Object(n.useEffect)((function(){for(var e=[],s=0;s<5;s++)e.push(t.songs.items[s].id);var a="https://api.spotify.com/v1/recommendations?seed_tracks="+String(e);fetch(a,{method:"GET",headers:{Authorization:"Bearer "+t.accessToken}}).then((function(t){return t.json()})).then((function(t){return i(t)}))}),[t.songs.items]),c?Object(a.jsxs)("div",{style:{textAlign:"center",color:"#fff",marginTop:"calc(80px + 1em)"},children:[Object(a.jsx)("h1",{style:{margin:"1em 0"},children:"Songs you might like"}),Object(a.jsx)("h3",{style:{margin:"0 0 1em 0"},children:"Based on your top 5 songs"}),Object(a.jsx)(f,{data:c.tracks,search:"Tracks",accessToken:t.accessToken})]}):Object(a.jsx)("div",{children:"Loading..."})},v=(s(38),s(22)),H=s(23),k=s(25),y=s(24),V=s(18),L=s.n(V);L.a.defaults.global.defaultFontColor="white";var M=function(t){Object(k.a)(s,t);var e=Object(y.a)(s);function s(t){var a;return Object(v.a)(this,s),(a=e.call(this,t)).canvasRef=c.a.createRef(),a}return Object(H.a)(s,[{key:"componentDidMount",value:function(){var t=this.props.data;t.sort((function(t,e){return t.popularity>e.popularity?-1:t.popularity<e.popularity?1:0}));var e=[],s=[],a=[],n=143,c=73;t.forEach((function(t){e.push(t.popularity),s.push(t.name),a.push("hsl(".concat(n+=0,", 75%, ").concat(c-=3,"%)"))})),this.chart=new L.a(this.canvasRef.current,{type:"horizontalBar",data:{datasets:[{data:e,backgroundColor:a,barThickness:"flex"}],labels:s},options:{responsive:!0,maintainAspectRatio:!1,legend:{display:!1},scales:{yAxes:[{ticks:{min:0,max:100,padding:15}}],xAxes:[{ticks:{}}]},title:{display:!1,text:"Your Top Songs by Current Popularity",fontSize:50},tooltips:{}}})}},{key:"componentWillUnmount",value:function(){console.log("chart updated"),this.chart.destroy()}},{key:"render",value:function(){return Object(a.jsx)("div",{id:"canvasContainer",children:Object(a.jsx)("canvas",{id:"canvas",ref:this.canvasRef})})}}]),s}(n.Component);var w=function(){var t=Object(n.useState)(""),e=Object(o.a)(t,2),s=e[0],c=e[1],i=Object(n.useState)(null),r=Object(o.a)(i,2),h=r[0],u=r[1],b=Object(n.useState)(null),m=Object(o.a)(b,2),x=m[0],O=m[1];return Object(n.useEffect)((function(){var t=window.location.hash.substring(1).split("&").map((function(t){return t.split("=")}));c(t[0][1])}),[]),Object(n.useEffect)((function(){s&&(fetch("https://api.spotify.com/v1/me/top/tracks?time_range=medium_term",{method:"GET",headers:{Authorization:"Bearer "+s}}).then((function(t){return t.json()})).then((function(t){return u(t)})),fetch("https://api.spotify.com/v1/me/top/artists?time_range=medium_term",{method:"GET",headers:{Authorization:"Bearer "+s}}).then((function(t){return t.json()})).then((function(t){return O(t)})))}),[s]),x&&h?Object(a.jsxs)(l.a,{basename:"Spotify-Data",children:[console.log(h,x),console.log("set Access token to: "+s),Object(a.jsxs)("div",{children:[Object(a.jsx)(d,{}),Object(a.jsxs)(j.c,{children:[Object(a.jsx)(j.a,{exact:!0,path:"/",children:Object(a.jsxs)("div",{style:{textAlign:"center",color:"#fff",marginTop:"calc(80px + 1em)"},children:[Object(a.jsxs)("h1",{children:["Your Top ",h.items.length," Tracks Ranked By Popularity"]}),Object(a.jsx)(M,{data:h.items}),Object(a.jsxs)("h1",{style:{textAlign:"center",margin:"1em 0"},children:["Your Top ",h.length," Songs In Order"]}),Object(a.jsx)(f,{data:h.items,search:"Tracks",accessToken:s})]})}),Object(a.jsx)(j.a,{path:"/topArtists",children:Object(a.jsxs)("div",{style:{textAlign:"center",color:"#fff",marginTop:"calc(80px + 1em)"},children:[Object(a.jsxs)("h1",{children:["Your Top ",x.items.length," Artists Ranked By Popularity"]}),Object(a.jsx)(M,{data:x.items}),Object(a.jsxs)("h1",{style:{textAlign:"center",margin:"1em 0"},children:["Your Top ",x.length," Artists In Order"]}),Object(a.jsx)(f,{data:x.items,search:"Artists",accessToken:s})]})}),Object(a.jsx)(j.a,{path:"/reccomendations",children:Object(a.jsx)(g,{songs:h,artists:x,accessToken:s})})]})]})]}):Object(a.jsx)(p,{})};r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(w,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.6228b90d.chunk.js.map