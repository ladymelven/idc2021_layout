"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var setImage=function(e,t,a,r,n){var i=e.querySelector(".".concat(t));i.srcset="assets/images/".concat(a,".jpg 1.5x, assets/images/").concat(r),i.src="assets/images/".concat(r),i.alt=n},setLeader=function(e,t){var a=document.createElement("div");return a.classList.add("leaders__unit"),a.innerHTML='\n      <div class="leaders__user">\n        <span class="emoji leaders__emoji"></span>\n        <img class="userpic leaders__userpic" src="" alt="">\n        <p class="leaders__name"></p>\n        <p class="leaders__number caption pale"></p>\n      </div>\n      <div class="leaders__column"></div>\n  ',setImage(a,"leaders__userpic",e.id,e.avatar,e.name),a.querySelector(".leaders__name").innerHTML=e.name.split(" ").join("<br>"),a.querySelector(".leaders__number").innerHTML=e.valueText,a.querySelector(".leaders__column").innerHTML=t,a},renderLeaders=function(e){var t=document.createElement("div"),a=3;window.innerWidth>480&&window.innerWidth<1024?a=e.users.length<5?e.users.length:5:window.innerWidth>1023&&window.innerWidth<1920?a=e.users.length<7?e.users.length:7:window.innerWidth>1919&&(a=e.users.length<9?e.users.length:9);for(var r=0;r<a;r++){var n=setLeader(e.users[r],"".concat(r+1));e.selectedUserId&&e.selectedUserId===e.users[r].id&&(n.querySelector(".leaders__emoji").innerHTML="👍"),0===r?(n.querySelector(".leaders__emoji").innerHTML+="".concat(e.emoji),n.querySelector(".leaders__column").classList.add("leaders__column_bright"),t.appendChild(n)):(n.classList.add("leaders__unit_top".concat(r+1)),r%2==1?(n.classList.add("leaders__unit_right"),t.appendChild(n)):(n.classList.add("leaders__unit_left"),t.prepend(n)))}if(e.selectedUserId){var i=e.users.findIndex((function(t){return t.id===e.selectedUserId}));if(i>a&&window.innerWidth<481){var s=document.createElement("div");s.className="leaders__user leaders__user_chosen",s.innerHTML='\n        <span class="emoji leaders__emoji">👍</span>\n        <img class="userpic leaders__userpic" src="" alt="">\n        <p class="leaders__name">'.concat(e.users[i].name,'</p>\n        <p class="leaders__number caption">').concat(e.users[i].valueText,'</p>\n        <p class="leaders__position">').concat(i+1,"</p>\n      "),setImage(s,"leaders__userpic",e.users[i].id,e.users[i].avatar,e.users[i].name),t.appendChild(s)}}return t.innerHTML},renderVote=function(e){var t=document.createElement("div");t.innerHTML='\n    <button class="vote__button vote__button_up" id="button-up">\n      <svg>\n        <path fill-rule="evenodd" clip-rule="evenodd" d="M32 62C48.5685 62 62 48.5685 62 32C62 15.4315 48.5685 2 32 2C15.4315 2 2 15.4315 2 32C2 48.5685 15.4315 62 32 62ZM32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64ZM59 32C59 46.9117 46.9117 59 32 59C17.0883 59 5 46.9117 5 32C5 17.0883 17.0883 5 32 5C46.9117 5 59 17.0883 59 32ZM25.0607 27.9393C24.4749 27.3536 23.5251 27.3536 22.9393 27.9393C22.3536 28.5251 22.3536 29.4749 22.9393 30.0607L30.9393 38.0607C31.5251 38.6464 32.4749 38.6464 33.0607 38.0607L41.0607 30.0607C41.6464 29.4749 41.6464 28.5251 41.0607 27.9393C40.4749 27.3536 39.5251 27.3536 38.9393 27.9393L32 34.8787L25.0607 27.9393Z" fill=""/>\n      </svg>\n    </button>\n    <button class="vote__button vote__button_down" id="button-down">\n      <svg>\n        <path fill-rule="evenodd" clip-rule="evenodd" d="M32 62C48.5685 62 62 48.5685 62 32C62 15.4315 48.5685 2 32 2C15.4315 2 2 15.4315 2 32C2 48.5685 15.4315 62 32 62ZM32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64ZM59 32C59 46.9117 46.9117 59 32 59C17.0883 59 5 46.9117 5 32C5 17.0883 17.0883 5 32 5C46.9117 5 59 17.0883 59 32ZM25.0607 27.9393C24.4749 27.3536 23.5251 27.3536 22.9393 27.9393C22.3536 28.5251 22.3536 29.4749 22.9393 30.0607L30.9393 38.0607C31.5251 38.6464 32.4749 38.6464 33.0607 38.0607L41.0607 30.0607C41.6464 29.4749 41.6464 28.5251 41.0607 27.9393C40.4749 27.3536 39.5251 27.3536 38.9393 27.9393L32 34.8787L25.0607 27.9393Z" fill=""/>\n      </svg>\n    </button>\n  ';var a=0,r=window.innerWidth>480&&window.innerWidth<768?6:8;e.offset?(r=(a=e.users.findIndex((function(t){return t.id===e.offset})))+r,a?(t.querySelector("#button-up").setAttribute("data-action","update"),t.querySelector("#button-up").setAttribute("data-params",JSON.stringify({alias:"vote",data:{offset:e.users[a-1].id}}))):t.querySelector("#button-up").disabled=!0,a+r>=e.users.length?t.querySelector("#button-down").disabled=!0:(t.querySelector("#button-down").setAttribute("data-action","update"),t.querySelector("#button-down").setAttribute("data-params",JSON.stringify({alias:"vote",data:{offset:e.users[r].id}})))):(t.querySelector("#button-up").disabled=!0,r>=e.users.length?t.querySelector("#button-down").disabled=!0:(t.querySelector("#button-down").setAttribute("data-action","update"),t.querySelector("#button-down").setAttribute("data-params",JSON.stringify({alias:"vote",data:{offset:e.users[r].id}}))));for(var n=a;n<r;n++){var i=e.users[n];if(!e.users[n])break;var s=document.createElement("div");if(s.className="card vote__card",s.innerHTML='\n      <img \n        srcset="assets/images/'.concat(i.id,".jpg 1.5x, assets/images/").concat(i.avatar,'" \n        src="assets/images/').concat(i.avatar,'" alt="').concat(i.name,'" \n        class="userpic card__userpic">\n      <p class="card__name">').concat(i.name,"</p>\n    "),e.selectedUserId&&e.selectedUserId===i.id){var d=document.createElement("span");d.classList.add("emoji"),d.classList.add("card__emoji"),d.innerHTML="👍",s.appendChild(d),s.classList.add("card_chosen")}else s.setAttribute("data-action","update"),s.setAttribute("data-params",JSON.stringify({alias:"leaders",data:{selectedUserId:i.id}}));t.appendChild(s)}return t.innerHTML},renderChart=function(e){var t=document.createElement("div");t.innerHTML='\n    <div class="chart__chart"></div>\n    <div class="chart__leaders"></div>\n  ';var a=t.querySelector(".chart__chart"),r=t.querySelector(".chart__leaders"),n=e.values.findIndex((function(e){return e.active})),i=n-6,s=n+2;window.innerWidth>767&&window.innerWidth<1024?i=n-7>0?n-7:0:window.innerWidth>1023&&window.innerWidth<1366?(i=n-8>0?n-8:0,s=n+3<e.values.length?n+3:e.values.length):window.innerWidth>1365&&window.innerWidth<1920?(i=n-12>0?n-12:0,s=n+3<e.values.length?n+3:e.values.length):window.innerWidth>1919&&(i=n-14>0?n-14:0,s=n+3<e.values.length?n+3:e.values.length);for(var d=0,c=i;c<=s;c++)e.values[c].value>d&&(d=e.values[c].value);for(var o=i;o<=s;o++){var l=e.values[o],u=document.createElement("div");u.className="chart__unit",u.innerHTML='\n      <p class="chart__number subtitle pale">'.concat(l.value,'</p>\n      <div class="chart__bar"></div>\n      <p class="chart__legend pale">').concat(l.title,"</p>\n    "),u.style.height=l.value/d*70+"%",o===n&&(u.querySelector(".chart__number").classList.remove("pale"),u.querySelector(".chart__bar").classList.add("chart__bar_current")),a.appendChild(u)}return e.users.forEach((function(t,a){if(!(window.innerWidth<1366&&2===a)){var n=e.users[a],i=document.createElement("div");i.className="chart__leader",i.innerHTML='\n      <img srcset=""\n           src=""\n           alt=""\n           class="userpic userpic_mini chart__userpic">\n      <div class="chart__text">\n        <p class="chart__leader-name">'.concat(n.name,'</p>\n        <p class="caption pale">').concat(n.valueText,"</p>\n      </div>\n    "),setImage(i,"chart__userpic",n.id,n.avatar,n.name),r.appendChild(i)}})),t.innerHTML},renderDiagram=function(e){var t=document.body.classList.contains("theme_light")?"light":"dark",a=document.createElement("div");a.innerHTML='\n      <div class="diagram__donut-wrap">\n        <svg viewBox="0 0 134 134" class="diagram__donut">\n          <defs>\n            <radialGradient id="dark-0">\n              <stop offset="71.88%" stop-color="#FFA300" />\n              <stop offset="100%" stop-color="#5B3A00" />\n            </radialGradient>\n            <radialGradient id="dark-1">\n              <stop offset="72.92%" stop-color="#633F00" />\n              <stop offset="100%" stop-color="#0F0900" />\n            </radialGradient>\n            <radialGradient id="dark-2">\n              <stop offset="71.88%" stop-color="#9B9B9B" />\n              <stop offset="100%" stop-color="#382900" />\n            </radialGradient>\n            <radialGradient id="dark-3">\n              <stop offset="71.88%" stop-color="#4D4D4D" />\n              <stop offset="100%" stop-color="#382900" />\n            </radialGradient>\n\n            <radialGradient id="light-0">\n              <stop offset="81.25%" stop-color="rgba(255, 184, 0, 0.7)" />\n              <stop offset="100%" stop-color="rgba(255, 239, 153, 0.4)" />\n            </radialGradient>\n            <radialGradient id="light-1">\n              <stop offset="81.25%" stop-color="rgba(255, 184, 0, 0.4)" />\n              <stop offset="100%" stop-color="rgba(255, 239, 153, 0.2)" />\n            </radialGradient>\n            <radialGradient id="light-2">\n              <stop offset="82.81%" stop-color="rgba(166, 166, 166, 0.69)" />\n              <stop offset="100%" stop-color="rgba(203, 203, 203, 0.2)" />\n            </radialGradient>\n            <radialGradient id="light-3">\n              <stop offset="82.81%" stop-color="rgba(191, 191, 191, 0.69)" />\n              <stop offset="100%" stop-color="rgba(228, 228, 228, 0.2)" />\n            </radialGradient>\n          </defs>\n        </svg>\n        <div class="diagram__number">\n          <p class="diagram__value"></p>\n          <p class="diagram__change-value pale"></p>\n        </div>\n      </div>\n      <ul class="diagram__legend diagram-legend"></ul>\n  ',a.querySelector(".diagram__value").innerHTML=e.totalText,a.querySelector(".diagram__change-value").innerHTML=e.differenceText;var r=[];e.categories.forEach((function(e,t){r.push(Number.parseInt(e.valueText.split(" ")[0]));var n=document.createElement("li");n.className="diagram-legend__line",n.innerHTML='\n      <span class="diagram-legend__color diagram-legend__color_'.concat(t,'"></span>\n      <span class="diagram-legend__category">').concat(e.title,'</span>\n      <span class="diagram-legend__change-value pale">').concat(e.differenceText.split(" ")[0],'</span>\n      <span class="diagram-legend__value pale">').concat(e.valueText.split(" ")[0],"</span>\n    "),a.querySelector(".diagram-legend").appendChild(n)}));var n=r.reduce((function(e,t){return e+t})),i=90+(Math.round(360*r[0]/n)-1)/2,s=a.querySelector(".diagram__donut");return r.forEach((function(e,a){var r=document.createElementNS("http://www.w3.org/2000/svg","circle"),d=Math.round(360*e/n)-1;r.classList.add("diagram__donut-segment"),r.setAttribute("cx","67"),r.setAttribute("cy","67"),r.setAttribute("r","57.29577951"),r.setAttribute("fill","transparent"),r.setAttribute("stroke","url(#".concat(t,"-").concat(a,")")),r.setAttribute("stroke-width","17.2"),r.setAttribute("stroke-dasharray","".concat(d," ").concat(360-d)),r.setAttribute("stroke-dashoffset","".concat(i+1)),s.prepend(r),i-=d+1})),a.innerHTML},setActivityBar=function(e,t,a){var r=document.body.classList.contains("theme_light")?"light":"dark",n=document.createElement("img"),i=Math.ceil(t/a)<3?Math.ceil(t/a):3,s="".concat(["min","mid","max","extra"][i],"-").concat(r);n.srcset="assets/images/".concat(s,"@2x.png 1.5x, assets/images/").concat(s,".png"),n.src="assets/images/".concat(s,".png"),n.alt=t,e.appendChild(n)},renderActivity=function(e){var t=document.createElement("div");t.innerHTML='\n    <div class="activity__grid"></div>\n    <div class="activity__legend activity-legend">\n      <div class="activity-legend__unit">\n        <div class="activity-legend__color activity-legend__color_size"></div>\n        <p class="activity-legend__text pale">1 час</p>\n      </div>\n    </div>\n  ';var a=t.querySelector(".activity__grid"),r=t.querySelector(".activity__legend"),n=window.innerWidth>480&&window.innerWidth<1366,i=e.data,s=[];if(n)for(var d in i){for(var c=[],o=1;o<=i[d].length;o+=2){var l=i[d][o]?i[d][o]+i[d][o-1]:i[d][o-1];c.push(l)}s[d]=c}var u=0,_=n?s:i;for(var p in _)i[p].forEach((function(e){e>u&&(u=e)}));for(var v=Math.floor(u/3),m=0;m<4;m++){var g="";switch(m){case 0:g="0";break;case 1:g=1===v?"1":"1 — ".concat(m+v-1);break;case 2:if(1===v)g="2";else{var h=Math.floor((m-1)*u/3)+1;g="".concat(h," — ").concat(h+v-1)}break;case 3:var f=Math.floor((m-1)*u/3)+1;u%3==2&&(f=Math.floor((m-1)*u/3)),g="".concat(f," — ").concat(u)}var y=document.createElement("div");y.className="activity-legend__unit",y.innerHTML='\n      <div class="activity-legend__color activity-legend__color_'.concat(m,'"></div>\n      <p class="activity-legend__text pale">').concat(g,"</p>\n    "),r.appendChild(y)}if(window.innerWidth<window.innerHeight){var b=[];for(var w in i)b.push.apply(b,_toConsumableArray(i[w]));for(var L=0;L<i.mon.length;L++){var C=document.createElement("div");C.classList.add("activity__grid-row"),C.id="row-".concat(L),a.appendChild(C)}for(var M=0;M<b.length;M++){var A=document.createElement("div");A.classList.add("activity__grid-cell"),setActivityBar(A,b[M],v),t.querySelector("#row-".concat(Math.floor(M%i.mon.length))).appendChild(A)}}else if(n){var T=[];for(var S in s)T.push(s[S]);for(var q=0;q<7;q++){var H=document.createElement("div");H.classList.add("activity__grid-row"),a.appendChild(H);for(var E=0;E<T[0].length;E++){var k=document.createElement("div");k.classList.add("activity__grid-cell"),setActivityBar(k,T[q][E],v),H.appendChild(k)}}}else{var x=[];for(var I in i)x.push.apply(x,_toConsumableArray(i[I]));for(var W=0;W<7;W++){var j=document.createElement("div");j.classList.add("activity__grid-row"),j.id="row-".concat(W),a.appendChild(j)}for(var G=0;G<x.length;G++){var N=document.createElement("div");N.classList.add("activity__grid-cell"),setActivityBar(N,x[G],v),t.querySelector("#row-".concat(Math.floor(G/i.mon.length))).appendChild(N)}}return t.innerHTML};window.renderTemplate=function(e,t){var a;switch(e){case"leaders":a=renderLeaders;break;case"vote":a=renderVote;break;case"chart":a=renderChart;break;case"diagram":a=renderDiagram;break;case"activity":a=renderActivity}return'\n    <div id="anchor" class="anchor">\n      <h1 class="title title_main" id="main-title">'.concat(t.title,'</h1>\n      <p class="subtitle_main pale" id="subtitle">').concat(t.subtitle,'</p>\n      <div class="container ').concat(e,'">').concat(a(t),"</div>\n    </div>\n  ")};