(this["webpackJsonpmy-recipes"]=this["webpackJsonpmy-recipes"]||[]).push([[0],{35:function(e,a,t){},46:function(e,a,t){e.exports=t.p+"static/media/logo.ccb1f312.png"},51:function(e,a,t){e.exports=t(86)},56:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){e.exports=t.p+"static/media/food1.a4c4175d.jpg"},59:function(e,a,t){},77:function(e,a,t){},85:function(e,a,t){},86:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(20),l=t.n(c),o=t(21),i=t(22),s=t(27),u=t(25),m=(t(35),t(46)),d=t.n(m),h=(t(56),t(13)),p=t(15),v=t(18),E=t(50),f=t(24),g=t(17),b=(t(57),t(58),function(e){return console.log("card",e.oneRecipe),r.a.createElement("div",{className:"cardStyle "},r.a.createElement("div",{className:"card-img",style:{backgroundImage:"url(".concat(e.oneRecipe.Img,")")}},r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{className:"overlay-content"},r.a.createElement("a",{className:"hover"}," View")))),r.a.createElement("h3",null,e.oneRecipe.Name),r.a.createElement("h5",null,e.oneRecipe.Description))}),N=(t(59),function(e){return console.log("list",e.recipes),r.a.createElement("div",{className:"container"},e.recipes.map((function(e){return r.a.createElement(b,{key:e._id,oneRecipe:e})})))}),k=t(23),y=t.n(k),w=(t(77),function(e){return r.a.createElement("div",{className:"center mr-sm-2"},r.a.createElement("input",{type:"search",placeholder:"search your recipes",onChange:e.onChange}))}),C=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).OnChangeSearch=function(a){console.log(a.target.value),e.setState({searchField:a.target.value})},e.state={recipes:[],searchField:""},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.a.get("/api/all").then((function(a){var t=a.data;e.setState({recipes:t})}))}},{key:"render",value:function(){var e=this.state,a=e.recipes,t=e.searchField;console.log("reder",a);var n=a.filter((function(e){return e.Name.toLowerCase().includes(t.toLowerCase())}));return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement(w,{onChange:this.OnChangeSearch}),r.a.createElement(N,{recipes:n})))}}]),t}(r.a.Component),O=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"add page"))},S=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"home page"))},j=function(){return r.a.createElement(h.a,null,r.a.createElement("div",null,r.a.createElement(v.a,{className:"Navbar navbar-dark",expand:"lg"},r.a.createElement(v.a.Brand,{as:p.b,to:"/"},r.a.createElement("img",{id:"icon",src:d.a,width:"50px",height:"50px",alt:""})),r.a.createElement(v.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(v.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(g.a,{className:"mr-auto"},r.a.createElement(g.a.Link,{as:p.b,to:"/"},"Home"),r.a.createElement(g.a.Link,{as:p.b,to:"/all"},"All"),r.a.createElement(g.a.Link,{as:p.b,to:"/add"},"Add"),r.a.createElement(g.a.Link,{href:"#saved"},"Saved")),r.a.createElement(E.a,{inline:!0},r.a.createElement(f.a,{id:"searchInput",type:"text",placeholder:"Search in all recipes",className:"mr-sm-2 submit_on_enter"}),r.a.createElement("a",{id:"userName",className:"nav-link disabled"},"danielle")))),r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:S}),r.a.createElement(h.a,{path:"/All",component:C}),r.a.createElement(h.a,{path:"/Add",component:O}),r.a.createElement(h.a,{render:function(){return r.a.createElement("p",null,"Not found")}}))))},x=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).OnChangeSearch=function(a){console.log(a.target.value),e.setState({searchField:a.target.value})},e.state={recipes:[],searchField:""},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.a.get("/api/all").then((function(a){var t=a.data;e.setState({recipes:t})}))}},{key:"render",value:function(){var e=this.state,a=e.recipes,t=e.searchField;console.log("reder",a);a.filter((function(e){return e.Name.toLowerCase().includes(t.toLowerCase())}));return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement(j,null)))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(84),t(85);l.a.render(r.a.createElement(p.a,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.c2f91ab9.chunk.js.map