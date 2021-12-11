(this.webpackJsonpbattleship=this.webpackJsonpbattleship||[]).push([[0],{28:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n.n(i),s=n(8),o=n.n(s),a=n(3),l=n(2),c=n(0),u=function(e,t,n,i,r,s){for(var o=0;o<e.length;o++){var a=e[o].coords[0],l=e[o].coords[1];if(a===r[0]&&l===r[1]&&(n=Object(c.jsx)("div",{style:{width:"100%",height:"100%",backgroundColor:"rgb(0, 0, 0, 0.3)",zIndex:-1}})),a<0||a>7)return{inner:null,handleClick:null};if(l<0||l>7)return{inner:null,handleClick:null};0!=s[a][l]&&(n=null,i=null)}return{inner:n,handleClick:i}},h=Array(8).fill(0).map((function(){return Array(8).fill(0)})),d=function(){var e=function(e,t,n,i){for(var r=n,s=0;s<e;s++,r++){if(r>7)return!1;if(0!=t[r][i])return!1;console.log("row: "+n+"column: "+i)}return!0},t={battleship:{values:[4,1,1,5],orientation:"Vertical"},carrier:{values:[2,1,1,1,3],orientation:"Horizontal"},cruiser:{values:[2,1,3],orientation:"Horizontal"},submarine:{values:[2,1,3],orientation:"Horizontal"},destroyer:{values:[2,3],orientation:"Horizontal"}},n=Array(8).fill(0).map((function(){return Array(8).fill(0)})),i=[0,1,2,3,4,5,6,7];for(var r in t){var s=t[r],o=s.values;if("Horizontal"===s.orientation){var a=Math.floor(Math.random()*i.length),l=i[a];i.splice(a,1);for(var c=Math.floor(Math.random()*(8-o.length-1)),u=0;u<o.length;c++,u++)n[l][c]=o[u]}}for(var h in t){var d=t[h],f=d.values;if("Vertical"===d.orientation)for(var j=0;j<8;j++)for(var p=0;p<8;p++)if(e(f.length,n,j,p)){for(var b=0;b<f.length;b++,j++)n[j][p]=f[b];break}}return console.log(n),n}(),f=r.a.createContext(h),j=function(e){var t=e.children,n=Object(i.useReducer)((function(e,t){if("enterShips"===t.type)return t.payload}),h),r=Object(l.a)(n,2),s=r[0],o=r[1],u={ocean:s,enterShips:function(e,t){var n=Object(a.a)(s);n=function(e,t,n){for(var i=0;i<t.length;i++){var r=t[i].coords[0],s=t[i].coords[1];0===i?e[r][s]="Horizontal"===n?2:4:i===t.length-1?e[r][s]="Horizontal"===n?3:5:e[r][s]=1}return e}(n,e,t),o({type:"enterShips",payload:n})},computerOcean:d};return Object(c.jsx)(f.Provider,{value:u,children:t})},p=function(){return Object(i.useContext)(f)},b=n(9),x=function e(t,n,i,r,s){Object(b.a)(this,e),this.name=void 0,this.length=void 0,this.orientation=void 0,this.coordinateArray=void 0,this.isCurrent=void 0,this.name=t,this.length=n,this.orientation=i,this.coordinateArray=r,this.isCurrent=s},v=[new x("Battleship",4,"Horizontal",null,!0),new x("Carrier",5,"Horizontal",null,!1),new x("Cruiser",3,"Horizontal",null,!1),new x("Submarine",3,"Horizontal",null,!1),new x("Destroyer",2,"Horizontal",null,!1)],g=r.a.createContext(v),O=function(e){var t=e.children,n=Object(i.useReducer)((function(e,t){switch(t.type){case"setCurrentShip":case"updateCurrentShip":return t.payload}}),v),r=Object(l.a)(n,2),s=r[0],o=r[1],u={currentShip:function(){for(var e=0;e<s.length;e++)if(s[e].isCurrent)return s[e]},updateCurrentShip:function(e,t){for(var n,i=Object(a.a)(s),r=0;r<i.length;r++)if(i[r].isCurrent)switch(n=i[r],e){case"changeOrientation":"Vertical"===n.orientation?n.orientation="Horizontal":n.orientation="Vertical",o({type:"updateCurrentShip",payload:i});break;case"updateCoords":n.coordinateArray=t,o({type:"updateCurrentShip",payload:i})}},setCurrentShip:function(e){for(var t=Object(a.a)(s),n=0;n<t.length;n++){if(e.name===t[n].name)return n===t.length-1||(t[n].isCurrent=!1,t[n+1].isCurrent=!0),void o({type:"setCurrentShip",payload:t});t[n].isCurrent=!1}},ships:s};return Object(c.jsx)(g.Provider,{value:u,children:t})},y=function(){return Object(i.useContext)(g)},m=r.a.createContext(25),C=function(e){var t=e.children,n=Object(i.useState)(25),r=Object(l.a)(n,2),s={squareSize:r[0],setSquareSize:r[1]};return Object(c.jsx)(m.Provider,{value:s,children:t})},w=function(){return Object(i.useContext)(m)},S=n(10),z=n.n(S),I=(n(4),n(11)),H=function(){w().squareSize;var e=y(),t=(e.ships,e.currentShip),n=e.updateCurrentShip,i=t=t(),r=i.name,s=i.length,o=i.orientation;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("h1",{style:{margin:"8px"},className:"instructionsHeader",children:["Place your\xa0",Object(c.jsx)("span",{style:{borderBottom:"2px solid white"},children:r})]}),Object(c.jsxs)("ul",{style:{listStyleType:"none",minWidth:"300px",maxWidth:"450px",padding:"0"},children:[Object(c.jsxs)("li",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"10px"},children:[Object(c.jsx)("span",{children:"Length:"}),Object(c.jsxs)("span",{className:"instructionControls",children:[s,"\xa0tiles"]})]}),Object(c.jsxs)("li",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Object(c.jsx)("span",{children:"Orientation:"}),Object(c.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(c.jsx)("span",{style:{textDecoration:"underline",marginRight:"10px"},className:"instructionControls",children:o}),Object(c.jsx)("button",{onClick:function(){return n("changeOrientation")},className:"orientationToggle",children:Object(c.jsx)(I.a,{color:"white",size:"2rem"})})]})]})]})]})},q=function(){return Object(c.jsx)("div",{style:{minHeight:"150px"},children:Object(c.jsx)("h1",{style:{margin:"8px"},className:"instructionsHeader",children:"Take the shot!"})})},k=n(12),R={phase:"playing"},D=r.a.createContext(R),V=function(e){var t=e.children,n=Object(i.useReducer)((function(e,t){if("changeGamePhase"===t.type)return t.payload}),R),r=Object(l.a)(n,2),s=r[0],o=r[1],a={gameInfo:s,changeGamePhase:function(e){var t=Object(k.a)({},s);t.phase=e,o({type:"changeGamePhase",payload:t})}};return Object(c.jsx)(D.Provider,{value:a,children:t})},P=function(){return Object(i.useContext)(D)},M=function(){var e=P().gameInfo;return Object(c.jsx)("div",{style:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:"white",maxWidth:"90vw"},children:"enteringShips"===e.phase?Object(c.jsx)(H,{}):Object(c.jsx)(q,{})})},B=function(){for(var e=w().squareSize,t=[],n=0;n<8;n++)t.push(Object(c.jsx)("div",{style:{height:"100%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",color:"white",opacity:"0.5"},children:n+1},n));return Object(c.jsx)("div",{style:{display:"flex",flexDirection:"column",width:e+"px",height:"100%"},children:t})},A=function(){for(var e=w().squareSize,t=[],n=0;n<9;n++){var i=String.fromCharCode(n-1+65);0===n&&(i=null),t.push(Object(c.jsx)("div",{style:{height:"100%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",color:"white",opacity:"0.5"},children:i},n))}return Object(c.jsx)("div",{style:{height:e+"px",width:9*e+"px",display:"flex"},children:t})},W=function(e){e.squareValue;var t=e.coordinates,n=e.isHovering,r=e.setIsHovering,s=e.placementIsDisabled,o=e.setPlacementIsDisabled,l=P(),h=l.gameInfo,d=l.changeGamePhase,f=w().squareSize,j=y(),b=(j.ships,j.currentShip),x=j.setCurrentShip,v=j.updateCurrentShip;b=b();var g=p(),O=g.ocean,m=g.enterShips,C=null,S=function(e,t,n,i){if(null===n||null===i)return null;var r=Array(e).fill(0);if("Vertical"===t)for(var s=-1;s<r.length-1;s++)r[s+1]={coords:[n+s,i],isHit:!1};else for(var o=-1;o<r.length-1;o++)r[o+1]={coords:[n,i+o],isHit:!1};return r}(b.length,b.orientation,n[0],n[1]),z=function(){m(S,b.orientation),v("updateCoords",S),x(b),"Destroyer"===b.name&&d("playing")};if(Object(i.useEffect)((function(){if(S){var e=u(S,0,C,z,t,O);z=e.handleClick,null===e.handleClick?o((function(){return!0})):o((function(){return!1}))}null==S&&o((function(){return!0}))}),[JSON.stringify(S)]),S){var I=u(S,0,C,z,t,O);C=I.inner}return Object(c.jsx)("div",{onClick:s?null:z,onMouseEnter:function(){return r(Object(a.a)(t))},onMouseLeave:"enteringShips"===h.phase?function(){return r([null,null])}:void 0,style:{width:f+"px",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",overflow:"hidden",cursor:"none"},children:C})},E=function(){for(var e=w().squareSize,t=[],n=[],i=0;i<8;i++){var r="2px solid white",s="2px solid white";7===i&&(r="none",s="none"),t.push(Object(c.jsx)("div",{style:{width:e+"px",height:"100%",borderRight:r}},i)),n.push(Object(c.jsx)("div",{style:{width:"100%",height:"50%",borderBottom:s}},i))}return Object(c.jsxs)("div",{style:{width:8*e+"px",height:8*e+"px",position:"absolute",top:"0",left:"0",backgroundColor:"transparent"},children:[Object(c.jsx)("div",{style:{position:"absolute",width:"100%",height:"100%",display:"flex",justifyContent:"flex-start",alignItems:"center"},children:t}),Object(c.jsx)("div",{style:{position:"absolute",width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center"},children:n})]})},N=function(e){var t=e.shipColor,n=w().squareSize;return Object(c.jsx)("div",{style:{width:n+"px",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:t,overflow:"hidden",cursor:"none"},children:Object(c.jsx)("div",{style:{width:"100%",height:"100%",backgroundColor:t,overflow:"hidden"}})})},F=function(e){e.coordinates;var t,n=e.squareValue,i=e.shipColor,r=w().squareSize;switch(n){case 2:default:t="pointLeft";break;case 3:t="pointRight","2px solid white";break;case 4:t="pointUp","2px solid white";break;case 5:t="pointDown"}return Object(c.jsx)("div",{style:{height:"95%",width:r+"px",display:"flex",justifyContent:"center",alignItems:"center",cursor:"none"},children:Object(c.jsx)("div",{style:{backgroundColor:i,borderColor:i},className:"endPiece ".concat(t)})})},G=function(e){var t=e.hoverRef,n=e.placementIsDisabled,i=w().squareSize,r=y().currentShip,s=(r=r()).orientation,o=[],a="var(--hoveredShipColor)";n&&(a="rgb(173, 0, 0, 0.5)");for(var l=0;l<r.length;l++)0===l?"Horizontal"===s?o.push(Object(c.jsx)(F,{coordinates:[3,3],squareValue:2,shipColor:a},l)):o.push(Object(c.jsx)(F,{coordinates:[3,3],squareValue:4,shipColor:a},l)):l===r.length-1?"Horizontal"===s?o.push(Object(c.jsx)(F,{coordinates:[3,3],squareValue:3,shipColor:a},l)):o.push(Object(c.jsx)(F,{coordinates:[3,3],squareValue:5,shipColor:a},l)):o.push(Object(c.jsx)(N,{shipColor:a},l));var u=o.map((function(e,t){return Object(c.jsx)("div",{style:{width:i+"px",height:i+"px",overflow:"hidden"},children:e},t)}));return Object(c.jsx)("div",{ref:t,style:{position:"absolute",display:"flex",width:"Vertical"===s?i+"px":"auto",height:"Vertical"===s?"auto":i+"px",flexDirection:"Vertical"===s?"column":"row",overflow:"hidden",transform:"Horizontal"===s?"translate(".concat(-(i+15),"px, -50%)"):"translate(-50%, ".concat(-(i+10),"px)"),visibility:"hidden",cursor:"none"},children:u})},L=function(e){var t=e.oceanRef,n=e.oceanOffsetX,r=e.oceanOffsetY,s=e.isPlayer,o=P().gameInfo,a=Object(i.useRef)(null),u=w(),h=u.squareSize,d=(u.setSquareSize,p()),f=d.ocean,j=d.computerOcean,b=Object(i.useState)([null,null]),x=Object(l.a)(b,2),v=x[0],g=x[1],O=Object(i.useState)(!0),y=Object(l.a)(O,2),m=y[0],C=y[1],S=s?f:j;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{ref:t,style:{height:8*h+"px",width:8*h+"px",position:"relative",overflow:"hidden"},onMouseEnter:"enteringShips"===o.phase?function(e){var t;(t=a).current&&(t.current.style.display="flex",t.current.style.visibility="visible")}:void 0,onMouseMove:function(e){return"enteringShips"===o.phase?function(e,t,n,i){e.target;var r=e.clientX-n,s=e.clientY-i;(t=t.current).style.top=s+"px",t.style.left=r+"px"}(e,a,n,r):void 0},onMouseLeave:"enteringShips"===o.phase?function(e){var t;(t=a).current&&(t.current.style.display="none",t.current.style.visibility="hidden")}:void 0,children:[Object(c.jsx)(E,{}),"enteringShips"===o.phase&&Object(c.jsx)(G,{hoverRef:a,placementIsDisabled:m}),S.map((function(e,t){return Object(c.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",position:"relative",height:h+"px"},children:e.map((function(e,n){var i=[t,n];switch(e){case 0:return Object(c.jsx)(W,{coordinates:i,squareValue:e,isHovering:v,setIsHovering:g,placementIsDisabled:m,setPlacementIsDisabled:C},n);case 1:return Object(c.jsx)(N,{shipColor:"var(--shipColor)"},n);default:return Object(c.jsx)(F,{coordinates:i,squareValue:e,shipColor:"var(--shipColor)"},n)}}))},t)})),"playing"===o.phase&&Object(c.jsx)("div",{style:{width:"100%",height:"100%",position:"absolute",top:"0",left:"0"}})]})})},X=function(e){var t=e.size,n=(P().gameInfo,Object(i.useRef)(null)),r=w(),s=r.squareSize,o=r.setSquareSize,a=Object(i.useState)(0),u=Object(l.a)(a,2),h=u[0],d=u[1],f=Object(i.useState)(0),j=Object(l.a)(f,2),p=j[0],b=j[1];Object(i.useEffect)((function(){window.innerWidth<400?o(38):o(50),n.current&&(d(n.current.getBoundingClientRect().left),b(n.current.getBoundingClientRect().top))}),[window.innerWidth,n.current]);var x={display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center",transform:"none",position:"relative",transition:"0.6s ease-in-out"};return"small"===t&&(x.position="absolute",x.top="-63%",x.left="0",x.transform="scale(25%)"),Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{style:x,children:[Object(c.jsx)(A,{}),Object(c.jsxs)("div",{style:{display:"flex",alignItems:"center",height:8*s+"px"},children:[Object(c.jsx)(B,{}),Object(c.jsx)(L,{oceanRef:n,oceanOffsetX:h,oceanOffsetY:p,isPlayer:!0})]})]})})},Y=function(e){var t=e.size,n=(P().gameInfo,Object(i.useRef)(null)),r=w(),s=r.squareSize,o=r.setSquareSize,a=Object(i.useState)(0),u=Object(l.a)(a,2),h=u[0],d=u[1],f=Object(i.useState)(0),j=Object(l.a)(f,2),p=j[0],b=j[1];Object(i.useEffect)((function(){window.innerWidth<400?o(38):o(50),n.current&&(d(n.current.getBoundingClientRect().left),b(n.current.getBoundingClientRect().top))}),[window.innerWidth,n.current]);var x={display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center",transform:"none",position:"relative",transition:"0.6s ease-in-out"};return"small"===t&&(x.position="absolute",x.top="-63%",x.left="0",x.transform="scale(25%)"),Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{style:x,children:[Object(c.jsx)(A,{}),Object(c.jsxs)("div",{style:{display:"flex",alignItems:"center",height:8*s+"px"},children:[Object(c.jsx)(B,{}),Object(c.jsx)(L,{oceanRef:n,oceanOffsetX:h,oceanOffsetY:p,isPlayer:!1})]})]})})},J=function(){var e=P().gameInfo,t=Object(i.useState)(0),n=Object(l.a)(t,2),r=n[0],s=n[1],o=Object(i.useRef)(null);Object(i.useEffect)((function(){return r||s(z()({el:o.current,mouseControls:!1,touchControls:!1,gyroControls:!1,minHeight:200,minWidth:200,scale:1,scaleMobile:1,color:1056310,waveHeight:30,waveSpeed:.4,zoom:.81})),function(){r&&r.destroy()}}),[r]);var a=Object(i.useState)(!0),u=Object(l.a)(a,2);u[0],u[1];return Object(c.jsxs)("div",{ref:o,style:{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center",width:"100vw",height:"700px"},children:[Object(c.jsx)(M,{}),Object(c.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",position:"relative",width:"450px",height:"450px"},children:[Object(c.jsx)(X,{size:"enteringShips"===e.phase?"large":"small"}),"playing"===e.phase&&Object(c.jsx)(Y,{size:"large"})]})]})},T=function(){return Object(c.jsx)(C,{children:Object(c.jsx)(V,{children:Object(c.jsx)(j,{children:Object(c.jsx)(O,{children:Object(c.jsx)(J,{})})})})})};o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(T,{})}),document.getElementById("root"))},4:function(e,t,n){}},[[28,1,2]]]);
//# sourceMappingURL=main.9cd22bc7.chunk.js.map