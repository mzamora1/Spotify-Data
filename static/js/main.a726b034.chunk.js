(this["webpackJsonpspotify-data"]=this["webpackJsonpspotify-data"]||[]).push([[0],{11:function(e,t,a){e.exports={item:"song_item__bNnfb",slider:"song_slider__2aWUY",open:"song_open__2N6zq",info:"song_info__3wdoH",rank:"song_rank__3UNNe"}},16:function(e,t,a){e.exports={svgWrapper:"login_svgWrapper__2oVCZ",logo:"login_logo__2SBOo",btn:"login_btn__2DzbI",bubble:"login_bubble__1eLcg"}},17:function(e,t,a){e.exports={header:"header_header__2jHYa",logo:"header_logo__1kC5x",list:"header_list__2z9nQ",open:"header_open__2HzuI"}},21:function(e,t,a){e.exports={footer:"footer_footer__1VwNw",active:"footer_active__1drtd"}},31:function(e,t,a){e.exports={popContainer:"popularity_popContainer__1Z6Cg"}},32:function(e,t,a){e.exports={basicMeter:"basicMeter_basicMeter__3pRK6"}},33:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a(1),n=a(29),i=a.n(n),c=(a(40),a(4)),o=a(14),l=a(2),d=(a(41),a(30)),u=a(20),j=a.n(u),h=a(24),b=window.location.hash.substring(1).split("&").map((function(e){return e.split("=")}))[0][1];function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=Object(s.useState)(Array.isArray(e)?[]:null),r=Object(c.a)(a,2),n=r[0],i=r[1];return Object(s.useEffect)((function(){var t=function(){var e=Object(h.a)(j.a.mark((function e(a){var r,s,n,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(a,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+b}});case 3:return r=e.sent,e.next=6,r.json();case 6:return s=e.sent,e.abrupt("return",s);case 10:if(e.prev=10,e.t0=e.catch(0),console.warn(e.t0),503!==(null===(n=r)||void 0===n?void 0:n.status)){e.next=15;break}return e.abrupt("return",t(a));case 15:429===(null===(i=r)||void 0===i?void 0:i.status)&&(console.log("rate limited"),setTimeout(t,1e3*r.headers.get("Retry-After"),a));case 16:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}();function a(){return(a=Object(h.a)(j.a.mark((function a(){var r,s,n,c,o,l;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!Array.isArray(e)){a.next=24;break}r=[],s=Object(d.a)(e),a.prev=3,s.s();case 5:if((n=s.n()).done){a.next=13;break}return c=n.value,a.next=9,t(c);case 9:(o=a.sent)&&r.push(o);case 11:a.next=5;break;case 13:a.next=18;break;case 15:a.prev=15,a.t0=a.catch(3),s.e(a.t0);case 18:return a.prev=18,s.f(),a.finish(18);case 21:i(r),a.next=29;break;case 24:if(e.constructor!==String){a.next=29;break}return a.next=27,t(e);case 27:(l=a.sent)&&i(l);case 29:case"end":return a.stop()}}),a,null,[[3,15,18,21]])})))).apply(this,arguments)}return e&&b&&function(){a.apply(this,arguments)}(),function(){return i(null)}}),t),n}var f=a(15),m=a(16),x=a.n(m),O=Array(40);function C(){return Object(s.useEffect)((function(){f.a.timeline({duration:800,easing:"easeInOutSine"}).add({targets:"path",strokeDashoffset:[f.a.setDashoffset,0],translateX:[-10,10],fill:"#1DB954",delay:f.a.stagger(150,{start:-1500})}).add({targets:".".concat(x.a.btn),translateX:[-10,10],opacity:[0,1]},"-=400")}),[]),Object(s.useEffect)((function(){Object(f.a)({targets:"img",translateY:"-100vh",opacity:[.1,1],width:["2vw","6vw"],delay:f.a.stagger(300),duration:3e3,autoplay:!0,easing:"easeInQuad",loop:!0,endDelay:-100})}),[]),Object(r.jsxs)("div",{className:"login",children:[Object(r.jsxs)("div",{className:x.a.svgWrapper,children:[Object(r.jsxs)("svg",{className:x.a.logo,viewBox:"0 0 500 200",preserveAspectRatio:"xMinYMin meet",fill:"none",children:[" ",Object(r.jsxs)("mask",{id:"path-1-outside-1",maskUnits:"userSpaceOnUse",x:"0.639999",y:"0.799988",width:"489",height:"89",fill:"black",children:[Object(r.jsx)("rect",{fill:"white",x:"0.639999",y:"0.799988",width:"489",height:"89"}),Object(r.jsx)("path",{d:"M21.08 88.2C14.68 88.2 9.84 86.4 6.56 82.8C3.28 79.12 1.64 73.88 1.64 67.08V62.28H14.12V68.04C14.12 73.48 16.4 76.2 20.96 76.2C23.2 76.2 24.88 75.56 26 74.28C27.2 72.92 27.8 70.76 27.8 67.8C27.8 64.28 27 61.2 25.4 58.56C23.8 55.84 20.84 52.6 16.52 48.84C11.08 44.04 7.28 39.72 5.12 35.88C2.96 31.96 1.88 27.56 1.88 22.68C1.88 16.04 3.56 10.92 6.92 7.31999C10.28 3.63999 15.16 1.79999 21.56 1.79999C27.88 1.79999 32.64 3.63999 35.84 7.31999C39.12 10.92 40.76 16.12 40.76 22.92V26.4H28.28V22.08C28.28 19.2 27.72 17.12 26.6 15.84C25.48 14.48 23.84 13.8 21.68 13.8C17.28 13.8 15.08 16.48 15.08 21.84C15.08 24.88 15.88 27.72 17.48 30.36C19.16 33 22.16 36.2 26.48 39.96C32 44.76 35.8 49.12 37.88 53.04C39.96 56.96 41 61.56 41 66.84C41 73.72 39.28 79 35.84 82.68C32.48 86.36 27.56 88.2 21.08 88.2Z"}),Object(r.jsx)("path",{d:"M48.5684 2.99999H68.0084C74.5684 2.99999 79.4884 4.75999 82.7684 8.27999C86.0484 11.8 87.6884 16.96 87.6884 23.76V32.04C87.6884 38.84 86.0484 44 82.7684 47.52C79.4884 51.04 74.5684 52.8 68.0084 52.8H61.7684V87H48.5684V2.99999ZM68.0084 40.8C70.1684 40.8 71.7684 40.2 72.8084 39C73.9284 37.8 74.4884 35.76 74.4884 32.88V22.92C74.4884 20.04 73.9284 18 72.8084 16.8C71.7684 15.6 70.1684 15 68.0084 15H61.7684V40.8H68.0084Z"}),Object(r.jsx)("path",{d:"M113.938 88.2C107.457 88.2 102.498 86.36 99.0575 82.68C95.6175 79 93.8975 73.8 93.8975 67.08V22.92C93.8975 16.2 95.6175 11 99.0575 7.31999C102.498 3.63999 107.457 1.79999 113.938 1.79999C120.418 1.79999 125.378 3.63999 128.818 7.31999C132.258 11 133.978 16.2 133.978 22.92V67.08C133.978 73.8 132.258 79 128.818 82.68C125.378 86.36 120.418 88.2 113.938 88.2ZM113.938 76.2C118.497 76.2 120.777 73.44 120.777 67.92V22.08C120.777 16.56 118.497 13.8 113.938 13.8C109.378 13.8 107.098 16.56 107.098 22.08V67.92C107.098 73.44 109.378 76.2 113.938 76.2Z"}),Object(r.jsx)("path",{d:"M152.756 15H138.956V2.99999H179.756V15H165.956V87H152.756V15Z"}),Object(r.jsx)("path",{d:"M186.147 2.99999H199.347V87H186.147V2.99999Z"}),Object(r.jsx)("path",{d:"M209.232 2.99999H244.152V15H222.432V38.4H239.473V50.4H222.432V87H209.232V2.99999Z"}),Object(r.jsx)("path",{d:"M262.602 51.24L246.643 2.99999H260.682L269.682 33.84H269.923L278.923 2.99999H291.762L275.802 51.24V87H262.602V51.24Z"}),Object(r.jsx)("path",{d:"M316.928 2.99999H337.088C343.648 2.99999 348.568 4.75999 351.848 8.27999C355.128 11.8 356.768 16.96 356.768 23.76V66.24C356.768 73.04 355.128 78.2 351.848 81.72C348.568 85.24 343.648 87 337.088 87H316.928V2.99999ZM336.848 75C339.008 75 340.648 74.36 341.768 73.08C342.968 71.8 343.568 69.72 343.568 66.84V23.16C343.568 20.28 342.968 18.2 341.768 16.92C340.648 15.64 339.008 15 336.848 15H330.128V75H336.848Z"}),Object(r.jsx)("path",{d:"M375.643 2.99999H393.523L407.203 87H394.003L391.603 70.32V70.56H376.603L374.203 87H361.963L375.643 2.99999ZM390.043 59.16L384.163 17.64H383.923L378.163 59.16H390.043Z"}),Object(r.jsx)("path",{d:"M418.42 15H404.62V2.99999H445.42V15H431.62V87H418.42V15Z"}),Object(r.jsx)("path",{d:"M456.503 2.99999H474.383L488.063 87H474.863L472.463 70.32V70.56H457.463L455.063 87H442.823L456.503 2.99999ZM470.903 59.16L465.023 17.64H464.783L459.023 59.16H470.903Z"})]}),Object(r.jsx)("path",{d:"M21.08 88.2C14.68 88.2 9.84 86.4 6.56 82.8C3.28 79.12 1.64 73.88 1.64 67.08V62.28H14.12V68.04C14.12 73.48 16.4 76.2 20.96 76.2C23.2 76.2 24.88 75.56 26 74.28C27.2 72.92 27.8 70.76 27.8 67.8C27.8 64.28 27 61.2 25.4 58.56C23.8 55.84 20.84 52.6 16.52 48.84C11.08 44.04 7.28 39.72 5.12 35.88C2.96 31.96 1.88 27.56 1.88 22.68C1.88 16.04 3.56 10.92 6.92 7.31999C10.28 3.63999 15.16 1.79999 21.56 1.79999C27.88 1.79999 32.64 3.63999 35.84 7.31999C39.12 10.92 40.76 16.12 40.76 22.92V26.4H28.28V22.08C28.28 19.2 27.72 17.12 26.6 15.84C25.48 14.48 23.84 13.8 21.68 13.8C17.28 13.8 15.08 16.48 15.08 21.84C15.08 24.88 15.88 27.72 17.48 30.36C19.16 33 22.16 36.2 26.48 39.96C32 44.76 35.8 49.12 37.88 53.04C39.96 56.96 41 61.56 41 66.84C41 73.72 39.28 79 35.84 82.68C32.48 86.36 27.56 88.2 21.08 88.2Z",stroke:"#1DB954",strokeWidth:"2",mask:"url(#path-1-outside-1)"}),Object(r.jsx)("path",{d:"M48.5684 2.99999H68.0084C74.5684 2.99999 79.4884 4.75999 82.7684 8.27999C86.0484 11.8 87.6884 16.96 87.6884 23.76V32.04C87.6884 38.84 86.0484 44 82.7684 47.52C79.4884 51.04 74.5684 52.8 68.0084 52.8H61.7684V87H48.5684V2.99999ZM68.0084 40.8C70.1684 40.8 71.7684 40.2 72.8084 39C73.9284 37.8 74.4884 35.76 74.4884 32.88V22.92C74.4884 20.04 73.9284 18 72.8084 16.8C71.7684 15.6 70.1684 15 68.0084 15H61.7684V40.8H68.0084Z",stroke:"#1DB954",strokeWidth:"2",mask:"url(#path-1-outside-1)"}),Object(r.jsx)("path",{d:"M113.938 88.2C107.457 88.2 102.498 86.36 99.0575 82.68C95.6175 79 93.8975 73.8 93.8975 67.08V22.92C93.8975 16.2 95.6175 11 99.0575 7.31999C102.498 3.63999 107.457 1.79999 113.938 1.79999C120.418 1.79999 125.378 3.63999 128.818 7.31999C132.258 11 133.978 16.2 133.978 22.92V67.08C133.978 73.8 132.258 79 128.818 82.68C125.378 86.36 120.418 88.2 113.938 88.2ZM113.938 76.2C118.497 76.2 120.777 73.44 120.777 67.92V22.08C120.777 16.56 118.497 13.8 113.938 13.8C109.378 13.8 107.098 16.56 107.098 22.08V67.92C107.098 73.44 109.378 76.2 113.938 76.2Z",stroke:"#1DB954",strokeWidth:"2",mask:"url(#path-1-outside-1)"}),Object(r.jsx)("path",{d:"M152.756 15H138.956V2.99999H179.756V15H165.956V87H152.756V15Z",stroke:"#1DB954",strokeWidth:"2",mask:"url(#path-1-outside-1)"}),Object(r.jsx)("path",{d:"M186.147 2.99999H199.347V87H186.147V2.99999Z",stroke:"#1DB954",strokeWidth:"2",mask:"url(#path-1-outside-1)"}),Object(r.jsx)("path",{d:"M209.232 2.99999H244.152V15H222.432V38.4H239.473V50.4H222.432V87H209.232V2.99999Z",stroke:"#1DB954",strokeWidth:"2",mask:"url(#path-1-outside-1)"}),Object(r.jsx)("path",{d:"M262.602 51.24L246.643 2.99999H260.682L269.682 33.84H269.923L278.923 2.99999H291.762L275.802 51.24V87H262.602V51.24Z",stroke:"#1DB954",strokeWidth:"2",mask:"url(#path-1-outside-1)"}),Object(r.jsx)("path",{d:"M316.928 2.99999H337.088C343.648 2.99999 348.568 4.75999 351.848 8.27999C355.128 11.8 356.768 16.96 356.768 23.76V66.24C356.768 73.04 355.128 78.2 351.848 81.72C348.568 85.24 343.648 87 337.088 87H316.928V2.99999ZM336.848 75C339.008 75 340.648 74.36 341.768 73.08C342.968 71.8 343.568 69.72 343.568 66.84V23.16C343.568 20.28 342.968 18.2 341.768 16.92C340.648 15.64 339.008 15 336.848 15H330.128V75H336.848Z",stroke:"#1DB954",strokeWidth:"2",mask:"url(#path-1-outside-1)"}),Object(r.jsx)("path",{d:"M375.643 2.99999H393.523L407.203 87H394.003L391.603 70.32V70.56H376.603L374.203 87H361.963L375.643 2.99999ZM390.043 59.16L384.163 17.64H383.923L378.163 59.16H390.043Z",stroke:"#1DB954",strokeWidth:"2",mask:"url(#path-1-outside-1)"}),Object(r.jsx)("path",{d:"M418.42 15H404.62V2.99999H445.42V15H431.62V87H418.42V15Z",stroke:"#1DB954",strokeWidth:"2",mask:"url(#path-1-outside-1)"}),Object(r.jsx)("path",{d:"M456.503 2.99999H474.383L488.063 87H474.863L472.463 70.32V70.56H457.463L455.063 87H442.823L456.503 2.99999ZM470.903 59.16L465.023 17.64H464.783L459.023 59.16H470.903Z",stroke:"#1DB954",strokeWidth:"2",mask:"url(#path-1-outside-1)"})]}),Object(r.jsx)("button",{className:x.a.btn,onClick:function(){window.location.href="https://accounts.spotify.com/authorize?client_id=b48ae6f543f941a5be1084b45ed74b13&redirect_uri=https://mzamora1.github.io/Spotify-Data/&scope=user-top-read&response_type=token"},children:"Login"})]}),O.map((function(e,t){return Object(r.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",className:x.a.bubble,style:{left:Math.random()*window.innerWidth,zIndex:-1},alt:""},t)}))]})}O.fill(1);var g=a(13),v=a.n(g),_=a(31);function k(e){var t=e.data,a=Object(s.useRef)(null);return Object(s.useEffect)((function(){var e=[],r=[],s=[],n=t.reduce((function(e,t){return Math.max(e,t.popularity)}),0),i=t.reduce((function(e,t){return Math.min(e,t.popularity)}),100);t.forEach((function(t){e.push(t.popularity),r.push(t.name);var a,c,o,l,d=(a=t.popularity,o=15,l=70,a=(a-(c=i))/(n-c),Math.round(o+a*(l-o)));s.push("hsl(143, 75%, ".concat(d,"%)"))}));var c=new v.a(a.current,{type:"horizontalBar",data:{datasets:[{data:e,backgroundColor:s,barThickness:"flex"}],labels:r},options:{responsive:!0,maintainAspectRatio:!1,legend:{display:!1}}});return function(){return c.destroy()}}),[t]),Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:_.popContainer,children:Object(r.jsx)("canvas",{ref:a})})})}v.a.defaults.global.defaultFontColor="white";var y=a(32);function H(e){var t=e.data,a=(t.reduce((function(e,t){return e+t.popularity}),0)/t.length).toFixed(2);return Object(r.jsxs)("h2",{className:y.basicMeter,children:["Damn, ",a,"% Basic"]})}var V=a(8),M=a.n(V);function w(e){var t=e.artist,a=e.rank,n=t.name,i=t.popularity,o=t.images,l=t.id,d=t.followers,u=t.genres,j=Object(s.useState)(!1),h=Object(c.a)(j,2),b=h[0],f=h[1],m=p("https://api.spotify.com/v1/artists/".concat(l,"/related-artists"));return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{onClick:function(){return f(!b)},className:M.a.flipCard,children:Object(r.jsxs)("div",{className:b?"".concat(M.a.flipCardInner," ").concat(M.a.rotate):M.a.flipCardInner,children:[Object(r.jsxs)("div",{className:M.a.flipCardFront,children:[Object(r.jsx)("img",{src:o[0].url,width:"100%",alt:"artist"}),Object(r.jsxs)("div",{className:M.a.artistInfo,style:b?{opacity:0,transition:"opacity .3s ease-in"}:{transition:"opacity .3s ease-in"},children:[Object(r.jsxs)("div",{style:{marginLeft:"1em",flexDirection:"column"},children:[Object(r.jsx)("h1",{children:n}),Object(r.jsxs)("h2",{style:{fontWeight:"500",textAlign:"left"},children:["More Info ",Object(r.jsx)("i",{style:{color:"#1DB954"},className:"far fa-arrow-alt-circle-right"})]})]}),Object(r.jsx)("h1",{className:M.a.rank,children:a&&"#"+a})]})]}),Object(r.jsxs)("div",{className:M.a.flipCardBack,children:[Object(r.jsx)("img",{src:o[0].url,width:"100%",alt:"artist"}),Object(r.jsxs)("div",{className:M.a.backArtistInfo,children:[Object(r.jsx)("h1",{style:{fontWeight:"800"},children:n}),Object(r.jsxs)("h2",{children:["Followers: ",d.total]}),Object(r.jsxs)("h2",{children:["Popularity: ",i," out of 100"]}),Object(r.jsxs)("div",{className:M.a.tables,children:[Object(r.jsxs)("h2",{children:["Genres:",Object(r.jsx)("ul",{children:u.map((function(e,t){return Object(r.jsx)("li",{children:e},t)}))})]}),Object(r.jsxs)("h2",{style:{whiteSpace:"nowrap",marginLeft:"5px"},children:["Related Artists:",Object(r.jsx)("ul",{children:m?m.artists.map((function(e,t){return t<5&&Object(r.jsx)("li",{children:e.name},t)})):Object(r.jsx)("div",{children:"Loading..."})})]})]})]})]})]})})})}function L(e){var t=e.artists;return Object(r.jsxs)("section",{children:[Object(r.jsxs)("h1",{children:["Your Top ",t.items.length," Artists Ranked By Popularity"]}),Object(r.jsx)(k,{data:t.items}),Object(r.jsx)(H,{data:t.items}),Object(r.jsxs)("h1",{style:{margin:"1em 0"},children:["Your Top ",t.items.length," Artists In Order"]}),t.items.map((function(e,t){return Object(r.jsx)(w,{artist:e,rank:t+1},e.id)}))]})}var N=a(27),A=a(33);function Z(e){var t=e.data,a=Object(s.useRef)(null),n=["danceability","energy","speechiness","acousticness","instrumentalness","liveness","valence"];function i(e,r,s,n){var i=Array.isArray(t)?"rgb(255, 255, 255)":"rgb(0, 0, 0)",c=[{label:"Average",backgroundColor:"hsla(143, 75%, 50%, 0.5)",data:r}];s&&c.push({label:"Minimun",backgroundColor:"hsla(143, 75%, 80%, 0.5)",data:s}),n&&c.push({label:"Maximun",backgroundColor:"hsla(143, 75%, 15%, 0.5)",data:n});var o=new v.a(a.current,{type:"radar",data:{labels:e.map((function(e){return e.toUpperCase()})),datasets:c},options:{scale:{pointLabels:{fontColor:i},angleLines:{color:i},gridLines:{color:i},ticks:{backdropColor:"rgb(0, 0, 0)",fontColor:"rgb(255, 255, 255)"}},responsive:!0,maintainAspectRatio:!1,legend:{display:Array.isArray(t)}}});return function(){return o.destroy()}}return Object(s.useEffect)((function(){if(Array.isArray(t)){var e=Object.keys(t[0]).filter((function(e){return n.includes(e)})),a=e.map((function(e){return Math.round(t.reduce((function(t,a){return t+a[e]}),0)/t.length*100)})),r=e.map((function(e){return Math.round(100*Math.min.apply(Math,Object(N.a)(t.map((function(t){return t[e]})))))})),s=e.map((function(e){return Math.round(100*Math.max.apply(Math,Object(N.a)(t.map((function(t){return t[e]})))))}));return i(e,a,r,s)}if(t.constructor===Object){var c=Object.keys(t).filter((function(e){return n.includes(e)})),o=c.map((function(e){return Math.round(100*t[e])}));return i(c,o)}}),[t]),Object(r.jsx)("div",{className:A.radar,style:Array.isArray(t)?{width:"100vw",height:"100vw",marginTop:"10px",maxWidth:"640px",margin:"0 auto"}:{height:"calc(80vw)",maxHeight:"calc(640px * 0.8)"},children:Object(r.jsx)("canvas",{style:{padding:"0 10px"},ref:a})})}v.a.defaults.global.defaultFontColor="white";var B=a(11),S=a.n(B);function D(e){var t=e.songs,a=e.audioFeatures,n=e.ranked,i=Object(s.useState)(!0),o=Object(c.a)(i,2),l=o[0],d=o[1];return Object(r.jsx)("div",{onClick:function(){return d(!l)},children:t.map((function(e,t){return Object(r.jsx)(W,{song:e,globalPlaying:l,audioFeature:a[t],rank:n&&t+1},e.id)}))})}function W(e){var t=e.song,a=e.rank,n=e.globalPlaying,i=e.audioFeature,o=t.album,l=t.name,d=t.artists,u=t.preview_url,j=function(e){var t=Object(s.useState)(new Audio(e)),a=Object(c.a)(t,1)[0],r=Object(s.useState)(!1),n=Object(c.a)(r,2),i=n[0],o=n[1];return Object(s.useEffect)((function(){e&&(i?a.play():a.pause())}),[i]),Object(s.useEffect)((function(){if(e)return a.addEventListener("ended",(function(){return o(!1)})),function(){a.pause(),a.removeEventListener("ended",(function(){return o(!1)}))}}),[a]),[i,o]}(u),h=Object(c.a)(j,2),b=h[0],p=h[1],f=Object(s.useState)(!1),m=Object(c.a)(f,2),x=m[0],O=m[1];return Object(s.useEffect)((function(){p(!1),O(!1)}),[n]),Object(s.useEffect)((function(){!n&&x&&p(!0)}),[x]),Object(r.jsxs)("div",{onClick:function(){return O(!x)},className:S.a.item,style:{backgroundImage:"url(".concat(o.images[0].url,")")},children:[Object(r.jsx)("div",{className:b?"".concat(S.a.slider," ").concat(S.a.open):S.a.slider,children:Object(r.jsx)(Z,{data:i})}),Object(r.jsxs)("div",{className:S.a.info,children:[u&&Object(r.jsx)("i",{style:{marginLeft:"1em",fontSize:"clamp(20px, 3vw, 40px)"},className:b?"fas fa-pause":"fas fa-play"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:l}),Object(r.jsxs)("h2",{children:["By: ",d[0].name]}),Object(r.jsxs)("h2",{children:["Album: ",o.name]})]}),Object(r.jsx)("h1",{className:S.a.rank,children:a&&"#"+a})]})]})}function F(e){var t=e.songs,a=e.audioFeatures;return Object(r.jsxs)("section",{children:[Object(r.jsxs)("h1",{children:["Your Top ",t.items.length," Tracks Ranked By Popularity"]}),Object(r.jsx)(k,{data:t.items}),Object(r.jsx)(H,{data:t.items}),Object(r.jsx)("h1",{children:"Your Music Taste"}),Object(r.jsx)(Z,{data:a.audio_features}),Object(r.jsxs)("h1",{style:{margin:"1em 0"},children:["Your Top ",t.items.length," Songs In Order"]}),Object(r.jsx)(D,{songs:t.items,audioFeatures:a.audio_features,ranked:!0})]})}function T(e){var t=e.reccomendations,a=e.audioFeatures;return Object(r.jsxs)("section",{children:[Object(r.jsx)("h1",{style:{margin:"1em 0"},children:"Songs you might like"}),Object(r.jsx)("h3",{style:{marginBottom:"1em"},children:"Based on your top 5 songs"}),Object(r.jsx)(D,{songs:t.tracks,audioFeatures:a.audio_features})]})}var I=a(9),R=a.n(I),E=a(17),Y=a.n(E),z=a(21),P=a.n(z);function J(e){e.children;var t=e.setTimeRange,a=Object(s.useState)(!1),n=Object(c.a)(a,2),i=n[0],l=n[1],d=function(e){t(e.target.id),l(!1)},u=function(e){window.scrollTo(0,0)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("header",{className:Y.a.header,children:[Object(r.jsxs)("div",{className:R.a.hamburger,onClick:function(){return l(!i)},children:[Object(r.jsx)("div",{className:i?"".concat(R.a.line," ").concat(R.a.rLeft):R.a.line}),Object(r.jsx)("div",{className:i?"".concat(R.a.line," ").concat(R.a.remove):R.a.line}),Object(r.jsx)("div",{className:i?"".concat(R.a.line," ").concat(R.a.rRight):R.a.line})]}),Object(r.jsx)("a",{className:Y.a.logo,href:"#top",children:"Spotify Data"}),Object(r.jsx)("nav",{className:i?"".concat(Y.a.list," ").concat(Y.a.open):Y.a.list,children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("h1",{children:"Select Time Range"}),Object(r.jsxs)("li",{children:[Object(r.jsx)("p",{children:"Based off of your streams from the past 4 weeks"}),Object(r.jsx)("a",{id:"short_term",onClick:d,href:"#top",children:"Short Term"})]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("p",{children:"Based off of your streams from the past 6 months"}),Object(r.jsx)("a",{id:"medium_term",onClick:d,href:"#top",children:"Medium Term"})]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("p",{children:"Based off of your all time streams, could be several years"}),Object(r.jsx)("a",{id:"long_term",onClick:d,href:"#top",children:"Long Term"})]})]})})]}),Object(r.jsx)("footer",{className:P.a.footer,children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(o.b,{to:"/topSongs",onClick:u,activeClassName:P.a.active,children:"Top Songs"})}),Object(r.jsx)("li",{children:Object(r.jsx)(o.b,{to:"/topArtists",onClick:u,activeClassName:P.a.active,children:"Top Artists"})}),Object(r.jsx)("li",{children:Object(r.jsx)(o.b,{to:"/reccomendations",onClick:u,activeClassName:P.a.active,children:"For You"})})]})})]})}function U(){for(var e=Object(s.useState)("medium_term"),t=Object(c.a)(e,2),a=t[0],n=t[1],i=p("https://api.spotify.com/v1/me/top/artists?time_range=".concat(a),[a]),d=p("https://api.spotify.com/v1/me/top/tracks?time_range=".concat(a),[a]),u=[],j=0;d&&j<5;j++)u.push(d.items[j].id);var h=p(d&&"https://api.spotify.com/v1/recommendations?seed_tracks="+String(u),[d]),f=p(d&&"https://api.spotify.com/v1/audio-features?ids="+String(d.items.map((function(e){return e.id}))),[d]);return b?i&&d&&h&&f?Object(r.jsx)(o.a,{basename:"/Spotify-Data",children:Object(r.jsxs)("div",{style:{overflow:"hidden",textAlign:"center",color:"white"},children:[Object(r.jsx)(J,{setTimeRange:n}),Object(r.jsxs)(l.c,{children:[Object(r.jsx)(l.a,{exact:!0,path:"/topSongs",children:Object(r.jsx)(F,{songs:d,audioFeatures:f})}),Object(r.jsx)(l.a,{exact:!0,path:["/","/topArtists"],children:Object(r.jsx)(L,{artists:i})}),Object(r.jsx)(l.a,{path:"/reccomendations",children:Object(r.jsx)(T,{reccomendations:h,audioFeatures:f})})]})]})}):Object(r.jsx)("div",{className:"loading",children:"Loading..."}):Object(r.jsx)(C,{})}i.a.render(Object(r.jsx)(U,{}),document.getElementById("root"))},8:function(e,t,a){e.exports={flipCard:"artist_flipCard__16V0Y",flipCardInner:"artist_flipCardInner__1S7eJ",rotate:"artist_rotate__3E_09",flipCardFront:"artist_flipCardFront__3upDW",flipCardBack:"artist_flipCardBack__26D4J",artistInfo:"artist_artistInfo__TryLi",rank:"artist_rank__QrjA4",backArtistInfo:"artist_backArtistInfo__3X1Yw",tables:"artist_tables__26JGv"}},9:function(e,t,a){e.exports={hamburger:"hamburger_hamburger__vPWC5",line:"hamburger_line__1FqOk",rLeft:"hamburger_rLeft__3cMW2",rRight:"hamburger_rRight__1HXEV",remove:"hamburger_remove__12RjG"}}},[[50,1,2]]]);
//# sourceMappingURL=main.a726b034.chunk.js.map