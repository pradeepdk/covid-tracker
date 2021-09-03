(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(4),s=a.n(r),o=(a(13),a(14),a(8)),i=(a(15),a(3)),d={NewConfirmed:"New Confirmed",TotalConfirmed:"Total Confirmed",NewDeaths:"New Deaths",TotalDeaths:"Total Deaths",NewRecovered:"New Recovered",TotalRecovered:"Total Recovered",Country:"Country Name"},l={items:[{label:d.NewConfirmed,value:0},{label:d.NewDeaths,value:0},{label:d.NewRecovered,value:0},{label:d.TotalConfirmed,value:0},{label:d.TotalDeaths,value:0},{label:d.TotalRecovered,value:0}]},m=Object(i.b)({name:"summarySlice",initialState:l,reducers:{updateSummary:function(e,t){var a=t.payload,c=[];for(var n in d)void 0!==a[n]&&c.push({label:d[n],value:a[n]});e.items=c,console.log("Summary updates should be done here")}}}),u=m.actions,j=m;var h={compareCountryDescending:function(e,t){return e.Country>t.Country?-1:e.Country<t.Country?1:0},compareCountryAscending:function(e,t){return e.Country<t.Country?-1:e.Country>t.Country?1:0},compareNewConfirmedAscending:function(e,t){return e.NewConfirmed<t.NewConfirmed?-1:e.NewConfirmed>t.NewConfirmed?1:0},compareNewConfirmedDescending:function(e,t){return e.NewConfirmed>t.NewConfirmed?-1:e.NewConfirmed<t.NewConfirmed?1:0},compareTotalConfirmedAscending:function(e,t){return e.TotalConfirmed<t.TotalConfirmed?-1:e.NewConfirmed>t.NewConfirmed?1:0},compareTotalConfirmedDescending:function(e,t){return e.TotalConfirmed>t.TotalConfirmed?-1:e.TotalConfirmed<t.TotalConfirmed?1:0},compareNewDeathsAscending:function(e,t){return e.NewDeaths<t.NewDeaths?-1:e.NewDeaths>t.NewDeaths?1:0},compareNewDeathsDescending:function(e,t){return e.NewDeaths>t.NewDeaths?-1:e.NewDeaths<t.NewDeaths?1:0},compareTotalDeathsAscending:function(e,t){return e.TotalDeaths<t.TotalDeaths?-1:e.TotalDeaths>t.TotalDeaths?1:0},compareTotalDeathsDescending:function(e,t){return e.TotalDeaths>t.TotalDeaths?-1:e.TotalDeaths<t.TotalDeaths?1:0},compareNewRecoveredAscending:function(e,t){return e.NewRecovered<t.NewRecovered?-1:e.NewRecovered>t.NewRecovered?1:0},compareNewRecoveredDescending:function(e,t){return e.NewRecovered>t.NewRecovered?-1:e.NewRecovered<t.NewRecovered?1:0},compareTotalRecoveredAscending:function(e,t){return e.TotalRecovered<t.TotalRecovered?-1:e.TotalRecovered>t.TotalRecovered?1:0},compareTotalRecoveredDescending:function(e,t){return e.TotalRecovered>t.TotalRecovered?-1:e.TotalRecovered<t.TotalRecovered?1:0}},b=Object(i.b)({name:"summarySlice",initialState:{items:[{ID:"0",Country:"",CountryCode:"",Slug:"",NewConfirmed:0,TotalConfirmed:0,NewDeaths:0,TotalDeaths:0,NewRecovered:0,TotalRecovered:0,Date:""}]},reducers:{updateTableStore:function(e,t){e.items=t.payload},sortTableAscending:function(e,t){switch(console.log("sortTableAscending is called!!"+t.payload),t.payload){case"Country":e.items.sort(h.compareCountryAscending);break;case"NewConfirmed":e.items.sort(h.compareNewConfirmedAscending);break;case"TotalConfirmed":e.items.sort(h.compareTotalConfirmedAscending);break;case"NewDeaths":e.items.sort(h.compareNewDeathsAscending);break;case"TotalDeaths":e.items.sort(h.compareTotalDeathsAscending);break;case"NewRecovered":e.items.sort(h.compareNewRecoveredAscending);break;case"TotalRecovered":e.items.sort(h.compareTotalRecoveredAscending)}},sortTableDescending:function(e,t){switch(console.log("sortTableDescending is called!!"+t.payload),t.payload){case"Country":e.items.sort(h.compareCountryDescending);break;case"NewConfirmed":e.items.sort(h.compareNewConfirmedDescending);break;case"TotalConfirmed":e.items.sort(h.compareTotalConfirmedDescending);break;case"NewDeaths":e.items.sort(h.compareNewDeathsDescending);break;case"TotalDeaths":e.items.sort(h.compareTotalDeathsDescending);break;case"NewRecovered":e.items.sort(h.compareNewRecoveredDescending);break;case"TotalRecovered":e.items.sort(h.compareTotalRecoveredDescending)}}}}),f=b.actions,N=b,v=a(2),p=a(0);var C=function(){var e=Object(c.useState)((new Date).toTimeString()),t=Object(o.a)(e,2),a=t[0],n=t[1],r=Object(v.b)();return Object(p.jsxs)("header",{className:"header",children:[Object(p.jsx)("div",{className:"logoDiv",children:Object(p.jsx)("p",{className:"logoText",children:"Covid Tracker"})}),Object(p.jsxs)("div",{className:"refreshedDiv",children:[Object(p.jsx)("button",{className:"refreshButton",onClick:function(){fetch("https://api.covid19api.com/summary",{method:"GET"}).then((function(e){return e.json()})).then((function(e){console.log(e),r(u.updateSummary(e.Global)),r(f.updateTableStore(e.Countries)),n((new Date).toTimeString())})).catch((function(e){console.log("Error while fetching data")}))},children:"Refresh"}),Object(p.jsxs)("p",{children:["Last Refreshed : ",a]})]})]})};var T=function(e){return Object(p.jsxs)("div",{className:"eachSummarySection",children:[Object(p.jsx)("p",{className:"summarySectionLabel",children:e.label}),Object(p.jsx)("p",{className:"summarySectionValue",children:e.value}),Object(p.jsx)("p",{className:"summarySectionValueLoading"})]})};a(23);var D=function(){var e=Object(v.c)((function(e){return e.summary.items}));return Object(p.jsxs)("div",{className:"summaryDiv",children:[Object(p.jsxs)("div",{className:"summaryHeaderDiv",children:[Object(p.jsx)("p",{className:"summaryHeaderText",children:"Global Summary"})," "]}),e.map((function(e){return Object(p.jsx)(T,{label:e.label,value:e.value},e.label)}))]})};var w=function(){var e=Object(v.b)(),t=function(t){console.log("Ascending is called");var a=t.currentTarget.getAttribute("data-field");e(f.sortTableAscending(a))},a=function(t){console.log("sortDescending is called");var a=t.currentTarget.getAttribute("data-field");e(f.sortTableDescending(a))};return Object(p.jsx)("thead",{className:"tableHeaderDiv",children:Object(p.jsxs)("tr",{children:[Object(p.jsxs)("th",{children:[" ",d.Country," ",Object(p.jsxs)("div",{className:"iconsWrapper",children:[" ",Object(p.jsx)("span",{"data-field":"Country",className:"sortAscending",onClick:t,children:"  "})," ",Object(p.jsx)("span",{className:"sortDescending","data-field":"Country",onClick:a,children:"  "})," "]})," "]}),Object(p.jsxs)("th",{children:[" ",d.NewConfirmed," ",Object(p.jsxs)("div",{className:"iconsWrapper",children:[" ",Object(p.jsx)("span",{"data-field":"NewConfirmed",className:"sortAscending",onClick:t,children:"  "})," ",Object(p.jsx)("span",{"data-field":"NewConfirmed",className:"sortDescending",onClick:a,children:"  "})," "]})," "]}),Object(p.jsxs)("th",{children:[" ",d.TotalConfirmed," ",Object(p.jsxs)("div",{className:"iconsWrapper",children:[" ",Object(p.jsx)("span",{"data-field":"TotalConfirmed",className:"sortAscending",onClick:t,children:"  "})," ",Object(p.jsx)("span",{"data-field":"TotalConfirmed",className:"sortDescending",onClick:a,children:"  "})," "]})," "]}),Object(p.jsxs)("th",{children:[" ",d.NewDeaths," ",Object(p.jsxs)("div",{className:"iconsWrapper",children:[" ",Object(p.jsx)("span",{"data-field":"NewDeaths",className:"sortAscending",onClick:t,children:"  "})," ",Object(p.jsx)("span",{"data-field":"NewDeaths",className:"sortDescending",onClick:a,children:"  "})," "]})," "]}),Object(p.jsxs)("th",{children:[" ",d.TotalDeaths," ",Object(p.jsxs)("div",{className:"iconsWrapper",children:[" ",Object(p.jsx)("span",{"data-field":"TotalDeaths",className:"sortAscending",onClick:t,children:"  "})," ",Object(p.jsx)("span",{"data-field":"TotalDeaths",className:"sortDescending",onClick:a,children:"  "})," "]})," "]}),Object(p.jsxs)("th",{children:[" ",d.NewRecovered," ",Object(p.jsxs)("div",{className:"iconsWrapper",children:[" ",Object(p.jsx)("span",{"data-field":"NewRecovered",className:"sortAscending",onClick:t,children:"  "})," ",Object(p.jsx)("span",{"data-field":"NewRecovered",className:"sortDescending",onClick:a,children:"  "})," "]})," "]}),Object(p.jsxs)("th",{children:[" ",d.TotalRecovered," ",Object(p.jsxs)("div",{className:"iconsWrapper",children:[" ",Object(p.jsx)("span",{"data-field":"TotalRecovered",className:"sortAscending",onClick:t,children:"  "})," ",Object(p.jsx)("span",{"data-field":"TotalRecovered",className:"sortDescending",onClick:a,children:"  "})," "]})," "]})]})})};var O=function(e){return Object(p.jsx)("tbody",{children:e.commonProps.map((function(e){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:e.Country}),Object(p.jsx)("td",{children:e.NewConfirmed}),Object(p.jsx)("td",{children:e.TotalConfirmed}),Object(p.jsx)("td",{children:e.NewDeaths}),Object(p.jsx)("td",{children:e.TotalDeaths}),Object(p.jsx)("td",{children:e.NewRecovered}),Object(p.jsx)("td",{children:e.TotalRecovered})]},e.ID)}))})};a(24);var g=function(){var e=Object(v.c)((function(e){return e.table.items}));return Object(p.jsx)("div",{className:"TableWrapper",children:Object(p.jsxs)("table",{className:"trackingTable",children:[Object(p.jsx)(w,{}),Object(p.jsx)(O,{commonProps:e})]})})};a(25);var x=function(){var e=Object(v.b)();return Object(c.useEffect)((function(){fetch("https://api.covid19api.com/summary",{method:"GET"}).then((function(e){return e.json()})).then((function(t){console.log(t),e(u.updateSummary(t.Global)),e(f.updateTableStore(t.Countries))})).catch((function(e){console.log("Error while fetching data")}))}),[]),Object(p.jsxs)("div",{className:"wrapper",children:[Object(p.jsx)(D,{}),Object(p.jsx)(g,{})]})};var y=function(){return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(C,{}),Object(p.jsx)(x,{})]})},R=Object(i.a)({reducer:{summary:j.reducer,table:N.reducer}});s.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(v.a,{store:R,children:Object(p.jsx)(y,{})})}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.b1180826.chunk.js.map