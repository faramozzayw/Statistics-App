(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),l=n.n(c),i=(n(15),n(16),n(1)),o=n(2),u=n(4),s=n(3),m=n(5),h=(n(17),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"uk-section uk-section-primary"},r.a.createElement("div",{className:"uk-container"},r.a.createElement("h1",{className:""},"Statistics App"),r.a.createElement("h3",null,"Application for finding the average statistical, Root mean square and the variance value")))}}]),t}(a.Component)),p=n(8),d=function(e,t){console.log("\n\t\t[x]: ".concat(e,"\n\t\t[n]: ").concat(t,"\n\t"));var n={average:null,deviation:null,variance:null},a=t.reduce(function(e,t){return e+t});return console.log("[sumOfN]: ",a),n.average=function(){for(var n=0,r=0;r<e.length;r++)n+=e[r]*t[r];return n/=a}(),n.variance=function(){for(var r=0,c=0;c<e.length;c++)r+=Math.pow(e[c]-n.average,2)*t[c];return r/=a}(),n.deviation=Math.sqrt(n.variance),n},f=function(e){for(var t=e.split(","),n=[],a=0;a<t.length;a++)n.push(Number(t[a]));return n},v=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={x:"",n:"",result:{}},n.handleInputChange=function(e){return n.setState(Object(p.a)({},e.target.name,e.target.value))},n.handleClick=function(e){e.preventDefault(),console.clear();var t=new RegExp("/[a-z\u0430-\u044f.]/gi");if(t.test(n.state.x)||t.test(n.state.n)||""===n.state.x.trim()||""===n.state.n.trim())alert("Input error. Check the correctness of the data.");else{var a=[f(n.state.x),f(n.state.n)],r=a[0],c=a[1];if(r.length===c.length){var l=d(r,c);console.log("result",l)}else alert("Input error. Check the correctness of the data.")}},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"uk-container"},r.a.createElement("form",null,r.a.createElement("fieldset",{className:"uk-fieldset"},r.a.createElement("legend",{className:"uk-legend"},"A inputting data"),r.a.createElement("div",{className:"uk-margin"},r.a.createElement("div",{className:"uk-margin"},r.a.createElement("input",{className:"uk-input uk-form-large",type:"text",placeholder:"Input a value",id:"x",value:this.state.x,name:"x",onChange:this.handleInputChange.bind(this)})),r.a.createElement("div",{className:"uk-margin"},r.a.createElement("input",{className:"uk-input uk-form-large",type:"text",placeholder:"Input a frequency",id:"n",value:this.state.n,name:"n",onChange:this.handleInputChange.bind(this)})),r.a.createElement("button",{className:"uk-button uk-button-primary",onClick:this.handleClick.bind(this)},"Start calculus")))))}}]),t}(a.Component),g=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement("main",{className:"App-body"},r.a.createElement(v,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.cd4f5324.chunk.js.map