(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{104:function(e,a,t){e.exports=t(209)},109:function(e,a,t){},18:function(e,a,t){},209:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(7),c=t.n(o),l=(t(109),t(87)),i=t(88),s=t(96),u=t(95),d=(t(18),t(12)),m=t(33),v=Object(d.b)((function(e){return{data:e.info.data,loadingStats:e.info.loadingStats,currentCountry:e.currentCountry.current}}),{})((function(e){var a={};if(e.loadingStats)a={Active:0,Recovered:0,Deaths:0,date:"Loading..."};else if("Global"===e.currentCountry){var t=new Date(e.data.Date);t=t.toLocaleDateString()+" at "+t.toLocaleTimeString(),a={Active:e.data.Global.TotalConfirmed-e.data.Global.TotalRecovered-e.data.Global.TotalDeaths,Recovered:e.data.Global.TotalRecovered,Deaths:e.data.Global.TotalDeaths,date:t}}else{var r=e.data.Countries.find((function(a){return a.Slug===e.currentCountry}));if(r){var o=new Date(r.Date);o=o.toLocaleDateString()+" at "+o.toLocaleTimeString(),a={Active:r.TotalConfirmed-r.TotalRecovered-r.TotalDeaths,Recovered:r.TotalRecovered,Deaths:r.TotalDeaths,date:o}}else a={Active:0,Recovered:0,Deaths:0,date:"No date found"}}var c={labels:["Active","Recovered","Deaths"],datasets:[{label:"COVID-19 Cases",backgroundColor:["darkorange","mediumseagreen","orangered"],hoverBackgroundColor:["darkorange","mediumseagreen","orangered"],data:[a.Active,a.Recovered,a.Deaths]}]};return n.a.createElement("div",{className:"header"},n.a.createElement("div",{className:"outline"},n.a.createElement(m.c,{data:c,options:{responsive:!1,title:{display:!1,text:"COVID-19 Cases",fontSize:20},legend:{display:!1,position:"top"},cutoutPercentage:60}})),n.a.createElement("img",{className:"covid-logo",src:"/covid-trackercovid19icon.png",title:"covid-19 icon",alt:""}))})),E=t(44),f=t.n(E),g=t(68),h=t(57),p=t.n(h),C=t(233),b=t(236),y=t(212),T=Object(d.b)((function(e){return{data:e.info.data,loadingStats:e.info.loadingStats,currentCountry:e.currentCountry.current}}),(function(e){return{fetchStats:function(){e(function(){var e=Object(g.a)(f.a.mark((function e(a){var t,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:"FETCH_STATS_BEGIN"}),e.prev=1,e.next=4,fetch("https://api.covid19api.com/summary");case 4:return t=e.sent,e.next=7,t.json();case 7:return r=e.sent,a({type:"FETCH_STATS_SUCCESS",payload:r}),e.abrupt("return",r);case 12:return e.prev=12,e.t0=e.catch(1),e.abrupt("return",{type:"FETCH_STATS_FAILURE",payload:e.t0});case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(a){return e.apply(this,arguments)}}())}}}))((function(e){Object(r.useEffect)((function(){e.fetchStats()}),[]);var a={};if(e.loadingStats)a={Active:0,Recovered:0,Deaths:0,date:"Loading..."};else if("Global"===e.currentCountry){var t=new Date(e.data.Date);t=t.toLocaleDateString()+" at "+t.toLocaleTimeString(),a={Active:e.data.Global.TotalConfirmed-e.data.Global.TotalRecovered-e.data.Global.TotalDeaths,Recovered:e.data.Global.TotalRecovered,Deaths:e.data.Global.TotalDeaths,date:t}}else{var o=e.data.Countries.find((function(a){return a.Slug===e.currentCountry}));if(o){var c=new Date(o.Date);c=c.toLocaleDateString()+" at "+c.toLocaleTimeString(),a={Active:o.TotalConfirmed-o.TotalRecovered-o.TotalDeaths,Recovered:o.TotalRecovered,Deaths:o.TotalDeaths,date:c}}else a={Active:0,Recovered:0,Deaths:0,date:"No date found"}}return n.a.createElement("div",{className:"card-container"},n.a.createElement("div",{className:"card-container-box"},n.a.createElement(C.a,null,n.a.createElement(b.a,null,n.a.createElement(y.a,{className:"orange",gutterBottom:!0}," Active "),n.a.createElement(y.a,{variant:"h5"},n.a.createElement(p.a,{start:0,end:a.Active,duration:3,separator:","})),n.a.createElement(y.a,{variant:"caption",className:"stats-date-color"}," As of: ",a.date," ")))),n.a.createElement("div",{className:"card-container-box"},n.a.createElement(C.a,null,n.a.createElement(b.a,null,n.a.createElement(y.a,{className:"green",gutterBottom:!0}," Recovered "),n.a.createElement(y.a,{variant:"h5"},n.a.createElement(p.a,{start:0,end:a.Recovered,duration:3,separator:","})),n.a.createElement(y.a,{variant:"caption",className:"stats-date-color"}," As of: ",a.date," ")))),n.a.createElement("div",{className:"card-container-box"},n.a.createElement(C.a,null,n.a.createElement(b.a,null,n.a.createElement(y.a,{className:"red",gutterBottom:!0}," Deaths "),n.a.createElement(y.a,{variant:"h5"},n.a.createElement(p.a,{start:0,end:a.Deaths,duration:3,separator:","})),n.a.createElement(y.a,{variant:"caption",className:"stats-date-color"}," As of: ",a.date," ")))))})),S=t(210),D=Object(d.b)((function(e){return{news:e.newsapi.news,loadingNews:e.newsapi.loadingNews}}),(function(e){return{fetchNews:function(){e((function(e){return e({type:"FETCH_NEWS_BEGIN"}),fetch("http://newsapi.org/v2/top-headlines?q=COVID&from=2020-05-05&sortBy=publishedAt&language=en&apiKey=8f9a8fb03809415f9e03ba0a0caad5e2").then((function(e){return e.json()})).then((function(a){return e({type:"FETCH_NEWS_SUCCESS",payload:a}),a})).catch((function(e){return function(e){return{type:"FETCH_NEWS_FAILURE",payload:e}}(e)}))}))}}}))((function(e){return Object(r.useEffect)((function(){e.fetchNews()}),[]),e.loadingNews?n.a.createElement("div",null,n.a.createElement(y.a,{variant:"h6",className:"recent-news"},"Most Recent COVID-19 News"),n.a.createElement(S.a,{elevation:1,className:"news-container",style:{overflow:"auto"}},n.a.createElement(y.a,{variant:"caption"},"Loading..."))):n.a.createElement("div",null,n.a.createElement(y.a,{variant:"h6",className:"recent-news"},"Most Recent COVID-19 News"),n.a.createElement(S.a,{className:"news-container",style:{overflow:"auto"}},e.news.articles.map((function(e){return n.a.createElement(G,{key:e.url,data:e})}))))})),N=t(237),R=t(240),w=t(238),O=t(243),_=Object(d.b)((function(e){return{data:e.info.data,loadingStats:e.info.loadingStats,currentCountry:e.currentCountry.current}}),(function(e){return{updateCountry:function(a){e(function(e){return{type:"UPDATE_CURRENT_COUNTRY",payload:e}}(a))}}}))((function(e){var a=function(a){var t=a.target.value;e.updateCountry(t)};return e.loadingStats?n.a.createElement("div",{className:"country-select-container"},n.a.createElement(N.a,{className:"country-select"},n.a.createElement(R.a,{id:"country-picker",value:"",onChange:a,label:"Country"}),n.a.createElement(w.a,null,"Loading countries..."))):n.a.createElement("div",{className:"country-select-container"},n.a.createElement(S.a,{className:"select-margin"},n.a.createElement(N.a,{className:"country-select"},n.a.createElement(R.a,{id:"country-picker",value:e.currentCountry,onChange:a,label:"Country"},n.a.createElement(O.a,{value:"Global"},"Global Totals"),e.data.Countries.map((function(e){return n.a.createElement(O.a,{key:e.Slug,value:e.Slug},e.Country)}))),n.a.createElement(w.a,null,"Choose a country to view its data"))))}));var A=function(){return n.a.createElement(y.a,{className:"footer"},"Made by JP Reilly ",n.a.createElement("span",{role:"img","aria-label":"dnavirus"},"\ud83e\uddec\ud83e\udda0"))},j=t(242),k=t(239),G=function(e){var a=e.data.urlToImage;return""===a&&(a="/placeholder.png"),n.a.createElement("div",{className:"article-padding"},n.a.createElement(C.a,null,n.a.createElement("div",{className:"article-container"},n.a.createElement("img",{className:"article-image",src:a,title:e.data.title,alt:""}),n.a.createElement("div",{className:"article-text"},n.a.createElement(y.a,{className:"article-spacer",color:"textPrimary",variant:"overline"},n.a.createElement(j.a,{fontWeight:"fontWeightBold",fontSize:12,letterSpacing:1.5,lineHeight:1},e.data.title)),n.a.createElement(y.a,{className:"article-spacer",color:"textSecondary",variant:"caption"},n.a.createElement(j.a,{fontSize:8,letterSpacing:1,lineHeight:1},e.data.description)),n.a.createElement(k.a,{href:e.data.url},n.a.createElement(y.a,{component:"span",color:"primary"},n.a.createElement(j.a,{fontSize:8,letterSpacing:1,lineHeight:1},"Click to Read More")))))))},H=Object(d.b)((function(e){return{data:e.info.data,loadingStats:e.info.loadingStats,loadingChart:e.info.loadingChart,chartData:e.info.chartData,currentCountry:e.currentCountry.current}}),(function(e){return{fetchChart:function(a){e(function(e){return function(){var a=Object(g.a)(f.a.mark((function a(t){var r,n,o;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t({type:"FETCH_CHARTDATA_BEGIN"}),a.prev=1,r="https://api.covid19api.com/total/dayone/country/"+e,a.next=5,fetch(r);case 5:return n=a.sent,a.next=8,n.json();case 8:return o=a.sent,t({type:"FETCH_CHARTDATA_SUCCESS",payload:o}),a.abrupt("return",o);case 13:return a.prev=13,a.t0=a.catch(1),a.abrupt("return",{type:"FETCH_CHARTDATA_FAILURE",payload:a.t0});case 16:case"end":return a.stop()}}),a,null,[[1,13]])})));return function(e){return a.apply(this,arguments)}}()}(a))}}}))((function(e){Object(r.useEffect)((function(){"Global"!==e.currentCountry&&e.fetchChart(e.currentCountry)}),[e.currentCountry]);var a=null;if(e.loadingStats||"Global"!==e.currentCountry)if(e.loadingChart||1!==e.chartData.length)if(e.loadingChart||"Global"===e.currentCountry){a=n.a.createElement(y.a,null," Loading... ")}else{a=n.a.createElement(m.b,{data:{labels:e.chartData.map((function(e){return new Date(e.Date).toDateString()})),datasets:[{data:e.chartData.map((function(e){return e.Confimed-e.Recovered-e.Deaths})),label:"Active",borderColor:"darkorange",fill:!0},{data:e.chartData.map((function(e){return e.Recovered})),label:"Recovered",borderColor:"mediumseagreen",fill:!0},{data:e.chartData.map((function(e){return e.Deaths})),label:"Deaths",borderColor:"orangered",fill:!0}]}})}else{var t={labels:["Infected","Recovered","Deaths"],datasets:[{label:"COVID-19 Cases",backgroundColor:["darkorange","mediumseagreen","orangered"],hoverBackgroundColor:["darkorange","mediumseagreen","orangered"],data:[e.chartData[0].Confirmed-e.chartData[0].Recovered-e.chartData[0].Deaths,e.chartData[0].Recovered,e.chartData[0].Deaths]}]};a=n.a.createElement(m.a,{data:t,options:{legend:{display:!1}}})}else{var o={labels:["Infected","Recovered","Deaths"],datasets:[{label:"COVID CASES",backgroundColor:["darkorange","mediumseagreen","orangered"],hoverBackgroundColor:["darkorange","mediumseagreen","orangered"],data:[e.data.Global.TotalConfirmed-e.data.Global.TotalRecovered-e.data.Global.TotalDeaths,e.data.Global.TotalRecovered,e.data.Global.TotalDeaths]}]};a=n.a.createElement(m.a,{data:o,options:{legend:{display:!1}}})}return n.a.createElement(C.a,{className:"chart-container"},a)})),I=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"parallax"},n.a.createElement("div",{className:"Container"},n.a.createElement(v,null),n.a.createElement(T,null),n.a.createElement(_,null),n.a.createElement(H,null),n.a.createElement(D,null),n.a.createElement(A,null)))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=t(21),L=t(94),U=t(8),B={data:[],loadingStats:!0,loadingChart:!0,chartData:[],error:null},x={news:[],loadingNews:!0,error:null},W={current:"united-states"},V=Object(F.c)({info:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_STATS_BEGIN":return Object(U.a)(Object(U.a)({},e),{},{loadingStats:!0,error:null});case"FETCH_STATS_SUCCESS":return Object(U.a)(Object(U.a)({},e),{},{loadingStats:!1,data:a.payload});case"FETCH_STATS_FAILURE":return Object(U.a)(Object(U.a)({},e),{},{loadingStats:!1,data:[],error:a.payload});case"FETCH_CHARTDATA_BEGIN":return Object(U.a)(Object(U.a)({},e),{},{loadingChart:!0,error:null});case"FETCH_CHARTDATA_SUCCESS":return Object(U.a)(Object(U.a)({},e),{},{loadingChart:!1,chartData:a.payload});case"FETCH_CHARTDATA_FAILURE":return Object(U.a)(Object(U.a)({},e),{},{loadingChart:!1,chartData:[],error:a.payload});default:return e}},newsapi:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_NEWS_BEGIN":return Object(U.a)(Object(U.a)({},e),{},{loadingNews:!0,error:null});case"FETCH_NEWS_SUCCESS":return Object(U.a)(Object(U.a)({},e),{},{loadingNews:!1,news:a.payload});case"FETCH_NEWS_FAILURE":return Object(U.a)(Object(U.a)({},e),{},{loadingNews:!1,news:[],error:a.payload});default:return e}},currentCountry:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"UPDATE_CURRENT_COUNTRY":return Object(U.a)(Object(U.a)({},e),{},{current:a.payload});default:return e}}}),P=[L.a],z=Object(F.e)(V,{},Object(F.d)(F.a.apply(void 0,P),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));c.a.render(n.a.createElement(d.a,{store:z},n.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[104,1,2]]]);
//# sourceMappingURL=main.9ac93cea.chunk.js.map