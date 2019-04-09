(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),c=a.n(l),s=(a(15),a(16),a(1)),i=a(2),u=a(4),o=a(3),m=a(5),d=(a(17),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"uk-section uk-section-primary"},r.a.createElement("div",{className:"uk-container"},r.a.createElement("h1",{className:""},"Statistics App"),r.a.createElement("h3",null,"Application for finding the average statistical, Root mean square and the variance value")))}}]),t}(n.Component)),h=a(6),v=function(e,t){console.log("\n\t\t[x]: ".concat(e,"\n\t\t[n]: ").concat(t,"\n\t"));var a={average:null,deviation:null,variance:null},n=t.reduce(function(e,t){return e+t});return console.log("[sumOfN]: ",n),a.average=function(){for(var a=0,r=0;r<e.length;r++)a+=e[r]*t[r];return a/=n}(),a.variance=function(){for(var r=0,l=0;l<e.length;l++)r+=Math.pow(e[l]-a.average,2)*t[l];return r/=n}(),a.deviation=Math.sqrt(a.variance),a},p=function(e){for(var t=e.split(","),a=[],n=0;n<t.length;n++)""!==t[n].trim()&&a.push(Number(t[n]));return a},f=function(e){var t=e.average,a=e.deviation,n=e.variance;return r.a.createElement("div",{className:"Card"},r.a.createElement("div",{className:"uk-card uk-card-default uk-card-small uk-card-body"},r.a.createElement("div",{className:"uk-card-header"},r.a.createElement("div",{className:"uk-grid-small uk-flex-middle uk-grid"},r.a.createElement("div",{className:"uk-width-expand"},r.a.createElement("h3",{className:"uk-card-title uk-margin-remove-bottom"},"Your result"),r.a.createElement("p",{className:"uk-text-meta uk-margin-remove-top"})))),r.a.createElement("div",{className:"uk-card-body"},r.a.createElement("p",null,"Average statistical: ",t),r.a.createElement("p",null,"Root mean square: ",a),r.a.createElement("p",null,"The variance value: ",n))))},g=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={x:"",n:"",result:{average:null,deviation:null,variance:null},canGetResult:!1,showResult:!1},a.handleInputChange=function(e){var t;return a.setState((t={},Object(h.a)(t,e.target.name,e.target.value),Object(h.a)(t,"canGetResult",!1),Object(h.a)(t,"showResult",!1),t))},a.handleClick=function(e){e.preventDefault(),console.clear();var t=new RegExp("/[a-z\u0430-\u044f.]/gi");if(t.test(a.state.x)||t.test(a.state.n)||""===a.state.x.trim()||""===a.state.n.trim())alert("Input error. Review the correctness of the data.");else{var n=[p(a.state.x),p(a.state.n)],r=n[0],l=n[1];if(r.length===l.length){!function(){for(var e=0;e<r.length;e++)if(r[e]>r[e+1])return void alert("Input error. Review the correctness of the data.")}();var c=v(r,l);a.setState({result:Object.assign(c),canGetResult:!0})}else alert("Input error. Review the correctness of the data.")}},a.getResultClick=function(e){e.preventDefault(),a.state.canGetResult&&a.setState({showResult:!a.state.showResult})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.showResult&&r.a.createElement(f,{average:this.state.result.average,deviation:this.state.result.deviation,variance:this.state.result.variance}),t=this.state.showResult?"Hide result":"Show result";return r.a.createElement("div",{className:"uk-container"},r.a.createElement("form",null,r.a.createElement("fieldset",{className:"uk-fieldset"},r.a.createElement("legend",{className:"uk-legend"},"A inputting data"),r.a.createElement("div",{className:"uk-margin"},r.a.createElement("div",{className:"uk-margin"},r.a.createElement("input",{className:"uk-input uk-form-large",type:"text",placeholder:"Input a value",id:"x",value:this.state.x,name:"x",onChange:this.handleInputChange.bind(this)})),r.a.createElement("div",{className:"uk-margin"},r.a.createElement("input",{className:"uk-input uk-form-large",type:"text",placeholder:"Input a frequency",id:"n",value:this.state.n,name:"n",onChange:this.handleInputChange.bind(this)})),r.a.createElement("button",{className:"uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom",onClick:this.handleClick.bind(this)},"Start calculus"),r.a.createElement("button",{className:"uk-button ".concat(this.state.canGetResult?"uk-button-primary":"uk-button-secondary"," uk-width-1-1 uk-margin-small-bottom"),onClick:this.getResultClick.bind(this)},t)))),e)}}]),t}(n.Component),k=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement("main",{className:"App-body"},r.a.createElement(g,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.ac130d15.chunk.js.map