(window.webpackJsonpinit=window.webpackJsonpinit||[]).push([[0],{104:function(e,t,a){},152:function(e,t,a){e.exports=a(275)},157:function(e,t,a){},158:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},159:function(e,t,a){},236:function(e,t,a){},264:function(e,t){},275:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),l=a.n(o),c=(a(157),a(158),a(159),a(22)),i=a(12),s=a(58),u=a.n(s),m=(a(104),a(39)),d=a(40),p=a(44),g=a(41),f=a(46),h=a(285),b=a(282),y=a(279),E=a(59),v=a.n(E),O=a(207),C="http://3.230.95.77:8060",j={token:localStorage.getItem("userData")||!1,call:function(e,t,a){return v.a[e]("".concat(C,"/").concat(t)).set("Authorization",j.token).send(O.stringify(a)).then((function(e){return console.log("[from Agent]",e.body),e.body}))},rawCall:function(e,t,a){return v.a[e]("".concat(C,"/").concat(t)).send(O.stringify(a)).then((function(e){return console.log("[from Agent]",e.body),e.body}))},setToken:function(){j.token=localStorage.getItem("userData")}};function w(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function P(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?w(a,!0).forEach((function(t){Object(c.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):w(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var k=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(g.a)(t).call(this,e))).handleInputChange=function(e){a.setState({authCreds:P({},a.state.authCreds,Object(c.a)({},e.target.name,e.target.value))})},a.handleSubmit=function(e){a.state.authCreds.username?a.state.authCreds.password?j.rawCall("post",e,a.state.authCreds).then((function(t){t.err||"login"!=e?t.err||"register"!=e?alert(t.msg):(alert("Yay,registered successfully! please login again."),a.toggleRegister()):(localStorage.setItem("userData",t.token),a.props.loginCalled())})):alert("Please enter password!"):alert("Please enter username!")},a.state={authCreds:{username:"",password:"",name:"",ciliac_patient:!1}},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"toggleRegister",value:function(){this.setState({openRegister:!this.state.openRegister})}},{key:"handelCilacToggle",value:function(){this.setState({authCreds:P({},this.state.authCreds,{ciliac_patient:!this.state.authCreds.ciliac_patient})})}},{key:"render",value:function(){var e=this;return this.state.openRegister?r.a.createElement(h.a,{style:{width:"28rem",color:"black"}},r.a.createElement(h.a.Body,null,r.a.createElement(h.a.Title,null,"Register"),r.a.createElement(b.a,null,r.a.createElement(b.a.Group,{controlId:"formBasicEmail"},r.a.createElement(h.a.Subtitle,{className:"mb-2",style:{textAlign:"left"}},"Name"),r.a.createElement(b.a.Control,{type:"text",placeholder:"Enter name",onChange:this.handleInputChange.bind(this),name:"name"})),r.a.createElement(b.a.Group,{controlId:"formBasicEmail"},r.a.createElement(h.a.Subtitle,{className:"mb-2",style:{textAlign:"left"}},"Username"),r.a.createElement(b.a.Control,{type:"text",placeholder:"Enter email",onChange:this.handleInputChange.bind(this),name:"username"})),r.a.createElement(b.a.Group,{controlId:"formBasicPassword"},r.a.createElement(h.a.Subtitle,{className:"mb-2",style:{textAlign:"left"}},"Password"),r.a.createElement(b.a.Control,{type:"password",placeholder:"Password",onChange:this.handleInputChange.bind(this),name:"password"})),r.a.createElement("div",{style:{marginBottom:"3%"}},r.a.createElement(h.a.Link,{style:{marginLeft:"2px",cursor:"pointer"}},"Are you a ciliac patient?"),r.a.createElement("div",{className:"toggle-button"},r.a.createElement("div",{onClick:function(){return e.handelCilacToggle()},className:"toggle-button-box"},r.a.createElement("div",{className:"toggle-button-oval",style:{float:this.state.authCreds.ciliac_patient?"right":"left",backgroundColor:this.state.authCreds.ciliac_patient?"#BEA57C":"#BDBDBD"}})))),r.a.createElement(y.a,{onClick:this.handleSubmit.bind(this,"register"),variant:"primary"},"Submit"),r.a.createElement(h.a.Link,{style:{marginLeft:"2px",cursor:"pointer"},onClick:this.toggleRegister.bind(this)},"Already have an account? Register")))):r.a.createElement(h.a,{style:{width:"28rem",color:"black"}},r.a.createElement(h.a.Body,null,r.a.createElement(h.a.Title,null,"Login"),r.a.createElement(b.a,null,r.a.createElement(b.a.Group,{controlId:"formBasicEmail"},r.a.createElement(h.a.Subtitle,{className:"mb-2",style:{textAlign:"left"}},"Username"),r.a.createElement(b.a.Control,{type:"text",placeholder:"Enter email",onChange:this.handleInputChange.bind(this),name:"username"})),r.a.createElement(b.a.Group,{controlId:"formBasicPassword"},r.a.createElement(h.a.Subtitle,{className:"mb-2",style:{textAlign:"left"}},"Password"),r.a.createElement(b.a.Control,{type:"password",placeholder:"Password",onChange:this.handleInputChange.bind(this),name:"password"})),r.a.createElement(y.a,{onClick:this.handleSubmit.bind(this,"login"),variant:"primary"},"Submit"),r.a.createElement(h.a.Link,{style:{marginLeft:"2px",cursor:"pointer"},onClick:this.toggleRegister.bind(this)},"Don't have an account? Register"))))}}]),t}(r.a.Component),x=a(142),S=function(e){function t(e){return Object(m.a)(this,t),Object(p.a)(this,Object(g.a)(t).call(this,e))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"handleInputChange",value:function(e){var t=this,a=e.target.value;this.setState({latestUpdatedOn:(new Date).getTime()}),setTimeout((function(){t.props.wait&&(new Date).getTime()-t.state.latestUpdatedOn>=900&&t.props.callingApiFunction(a)}),900)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(x.a,{type:"text",style:{marginTop:"4px"},onChange:this.handleInputChange.bind(this),placeholder:"Search products...",className:"mr-sm-2"}))}}]),t}(r.a.Component),D=a(286),F=a(284),_=r.a.createContext({results:!1,queriesList:!1,setResults:function(){},setQueriesList:function(){}}),T=a(23),N=(a(75),a(64)),q=a.n(N);var B=function(e){var t=Object(n.useContext)(_),a=Object(n.useState)({redirect:!1,id:!1}),o=Object(i.a)(a,2),l=o[0],c=(o[1],Object(n.useState)(!1)),s=Object(i.a)(c,2),m=s[0],d=s[1];Object(n.useEffect)((function(){console.log("rendered this",t.results),localStorage.hasOwnProperty("userData")&&t.fetchProducts(),d(document.documentElement.clientWidth)}),[]);var p=function(e,a){j.call("post","vote/".concat(e,"?type=").concat(a)).then((function(e){console.log(e),t.fetchProducts()}))},g=[{dataField:"_id",text:"#"},{dataField:"name",text:"Product Name"},{dataField:"company",text:"Company Name"},{dataField:"upvotes",text:"Upvotes / Downvotes",headerFormatter:function(e,t){return r.a.createElement("div",null,"Upvotes",r.a.createElement(D.a,{trigger:"hover",placement:"top",overlay:r.a.createElement(F.a,{id:"popover-positioned-".concat("top")},r.a.createElement(F.a.Content,null,"Votes received on this product as "," ",r.a.createElement("strong",null,"Gluten Free")))},r.a.createElement("i",{class:"material-icons-outlined md-10"},"info"))," "," /"," ","Downvotes",r.a.createElement(D.a,{trigger:"hover",placement:"top",overlay:r.a.createElement(F.a,{id:"popover-positioned-".concat("top")},r.a.createElement(F.a.Content,null,"Vote received this product as "," ",r.a.createElement("strong",null,"Contains Gluton")))},r.a.createElement("icon",{class:"material-icons-outlined md-10"},"info")))},formatter:function(e,t){return r.a.createElement("div",null,r.a.createElement("span",{className:"green"},t.upvotes)," "," / "," ",r.a.createElement("span",{className:"red"},t.downvotes))}},{dataField:"",text:"Drop your vote",formatter:function(e,t){return r.a.createElement("div",null,r.a.createElement(D.a,{trigger:"hover",placement:"top",overlay:r.a.createElement(F.a,{id:"popover-positioned-".concat("top")},r.a.createElement(F.a.Title,{as:"h3"},"Gluten Free"),r.a.createElement(F.a.Content,null,"Vote this product as "," ",r.a.createElement("strong",null,"Gluten Free")))},r.a.createElement("i",{class:"material-icons-outlined green",onClick:p.bind(void 0,t._id,"up")},"thumb_up"))," "," "," ",r.a.createElement(D.a,{trigger:"hover",placement:"top",overlay:r.a.createElement(F.a,{id:"popover-positioned-".concat("top")},r.a.createElement(F.a.Title,{as:"h3"},"Contains Gluten"),r.a.createElement(F.a.Content,null,"Vote this product as "," ",r.a.createElement("strong",null,"Contains Gluton")))},r.a.createElement("i",{class:"material-icons-outlined red",onClick:p.bind(void 0,t._id,"down")},"thumb_down")))}},{dataField:"source_of_info",text:"Source of information"}];return l.redirect?r.a.createElement(T.b,{push:!0,to:"/product/".concat(l.id)}):(console.log("[results]",void 0),localStorage.hasOwnProperty("userData")?r.a.createElement("div",{className:"table-container-center"},m<"768"?r.a.createElement("div",{style:{marginTop:"2rem"}},t.results&&t.results.map((function(e,t){return r.a.createElement("div",null,r.a.createElement(h.a,{bg:"info",text:"white",style:{width:"18rem"},key:t},r.a.createElement(h.a.Header,null,e.name),r.a.createElement(h.a.Body,null,r.a.createElement(h.a.Title,null,e.company),r.a.createElement(h.a.Text,null,r.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},r.a.createElement(y.a,null,r.a.createElement("span",{className:"votes-on-card"},e.upvotes),r.a.createElement("i",{style:{verticalAlign:"sub"},class:"material-icons-outlined white",onClick:p.bind(void 0,e._id,"up")},"thumb_up")),r.a.createElement(y.a,null,r.a.createElement("span",{className:"votes-on-card"},e.downvotes),r.a.createElement("i",{class:"material-icons-outlined red",style:{verticalAlign:"sub"},onClick:p.bind(void 0,e._id,"down")},"thumb_down")))))),r.a.createElement("br",null))}))):!!t.results&&r.a.createElement(u.a,{bordered:!1,keyField:"id",data:t.results,columns:g,pagination:q()()}),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}})):r.a.createElement(k,{loginCalled:function(){console.log("rendered this"),j.setToken(),t.fetchProducts()}.bind(void 0)}))},G=(a(236),a(277),a(149)),L=a.n(G),I=(r.a.Component,function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),o=a[0],l=a[1];return Object(n.useEffect)((function(){j.call("get","product/".concat(e.match.params.id)).then((function(e){console.log(e),l(e.data)}))}),[]),r.a.createElement("div",null,e.match.params.id,JSON.stringify(o))}),A=a(280);function R(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var z=function(e){var t=Object(n.useContext)(_),a=Object(n.useState)(!1),o=Object(i.a)(a,2),l=o[0],s=o[1],u=Object(n.useState)({name:"",company:"",description:"",user_email:""}),m=Object(i.a)(u,2),d=m[0],p=m[1],g=function(){s(!1)},f=function(){var e;e=d.user_email,(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)||(alert("Email is not valid."),0))&&(d.name&&d.company&&d.description?j.call("post","enquire",d).then((function(e){console.log(e),t.settingQueriesList(),g(),alert("Thank you for reaching us, we have posted your query. You can track it in the queries list. We will contact you on your given email if it is resolved."),p({name:"",company:"",glutonFree:!1})})):alert("Please fill in all the fields"))},h=function(e){p(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?R(a,!0).forEach((function(t){Object(c.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):R(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},d,Object(c.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",null,r.a.createElement(A.a,{show:l,onHide:function(){return g()}},r.a.createElement(A.a.Header,{closeButton:!0},r.a.createElement(A.a.Title,null,"Have doubts about a product? We will post your query!")),r.a.createElement(A.a.Body,null,"Name",r.a.createElement(x.a,{onChange:function(e){return h(e)},"aria-label":"Default",name:"name",value:d.name,"aria-describedby":"inputGroup-sizing-default"}),"Company",r.a.createElement(x.a,{onChange:function(e){return h(e)},"aria-label":"Default",name:"company",value:d.company,"aria-describedby":"inputGroup-sizing-default"}),"Description",r.a.createElement(x.a,{onChange:function(e){return h(e)},"aria-label":"Default",name:"description",value:d.description,"aria-describedby":"inputGroup-sizing-default"}),"Email",r.a.createElement(x.a,{onChange:function(e){return h(e)},"aria-label":"Default",name:"user_email",value:d.email,"aria-describedby":"inputGroup-sizing-default"})),r.a.createElement(A.a.Footer,null,r.a.createElement(y.a,{variant:"secondary",onClick:function(){return g()}},"Close"),r.a.createElement(y.a,{variant:"primary",onClick:function(){return f()}},"Save Changes"))),r.a.createElement(y.a,{style:{marginRight:"8px",marginLeft:"8px",marginTop:"4px",marginBottom:"4px"},onClick:function(){s(!0)}},"Enquire"))};function Q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function H(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Q(a,!0).forEach((function(t){Object(c.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Q(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var U=function(e){var t=Object(n.useContext)(_),a=Object(n.useState)(!1),o=Object(i.a)(a,2),l=o[0],s=o[1],u=Object(n.useState)({name:e.name||"",company:e.company||"",glutonFree:e.glutonFree,source_of_info:""}),m=Object(i.a)(u,2),d=m[0],p=m[1],g=function(){s(!1),e.query&&e.handleClose()},f=function(e){p(H({},d,Object(c.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",null,r.a.createElement(A.a,{show:e.show||l,onHide:function(){return g()}},r.a.createElement(A.a.Header,{closeButton:!0},r.a.createElement(A.a.Title,null,"Inform us about a product")),r.a.createElement(A.a.Body,null,"Name",r.a.createElement(x.a,{onChange:function(e){return f(e)},"aria-label":"Default",name:"name",value:e.name?e.name:d.name,"aria-describedby":"inputGroup-sizing-default"}),"Company",r.a.createElement(x.a,{onChange:function(e){return f(e)},"aria-label":"Default",name:"company",value:e.query?e.company:d.company,"aria-describedby":"inputGroup-sizing-default"}),"Source of Information",r.a.createElement(x.a,{onChange:function(e){return f(e)},"aria-label":"Default",name:"source_of_info",value:d.source_of_info,"aria-describedby":"inputGroup-sizing-default"}),r.a.createElement("input",{type:"checkbox",onChange:function(){p(H({},d,{glutonFree:!d.glutonFree}))},value:e?e.glutonFree:d.glutonFree,className:"ciliac-checkbox",style:{marginTop:"5px"}}),"Gluten Free"),r.a.createElement(A.a.Footer,null,r.a.createElement(y.a,{variant:"secondary",onClick:function(){return g()}},"Close"),r.a.createElement(y.a,{variant:"primary",onClick:function(){e.query||d.name&&d.company&&d.source_of_info?j.call("post","create/product",d).then((function(a){console.log(a),t.fetchProducts(),s(!1),e.query&&(g(),j.call("delete","query/".concat(e.id)).then((function(t){e.deleteQuery(e.id)}))),p({name:"",company:"",glutonFree:!1})})):alert("Please fill in the required fields !")}},"Save Changes"))),r.a.createElement(y.a,{style:{marginRight:"8px",marginTop:"4px",marginBottom:"4px"},onClick:function(){s(!0)}},"Create"))};function V(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function W(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?V(a,!0).forEach((function(t){Object(c.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):V(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var J=function(e){var t=Object(n.useContext)(_),a=Object(n.useState)({redirect:!1,id:!1}),o=Object(i.a)(a,2),l=(o[0],o[1],Object(n.useState)(!1)),c=Object(i.a)(l,2),s=(c[0],c[1],Object(n.useState)({name:"",company:"",glutenFree:!1,show:!1,id:!1})),m=Object(i.a)(s,2),d=m[0],p=m[1];Object(n.useEffect)((function(){t.settingQueriesList()}),[]);var g=function(e,t){console.log("[details]",e.name),p(W({},d,{name:e.name,description:e.description,glutonFree:"up"==t?1:0,company:e.company,user_email:e.user_email,id:e._id,show:!0})),console.log(d)},f=[{dataField:"_id",text:"#"},{dataField:"name",text:"Product Name"},{dataField:"description",text:"Description"},{dataField:"company",text:"Company"},{dataField:"",text:"Resolve the query",formatter:function(e,t){return r.a.createElement("div",null,r.a.createElement(D.a,{trigger:"hover",placement:"top",overlay:r.a.createElement(F.a,{id:"popover-positioned-".concat("top")},r.a.createElement(F.a.Title,{as:"h3"},"Popover ".concat("top")),r.a.createElement(F.a.Content,null,"Vote this product as "," ",r.a.createElement("strong",null,"Gluten Free")))},r.a.createElement("i",{class:"material-icons-outlined",onClick:g.bind(void 0,t,"up")},"thumb_up"))," "," "," ",r.a.createElement(D.a,{trigger:"hover",placement:"top",overlay:r.a.createElement(F.a,{id:"popover-positioned-".concat("top")},r.a.createElement(F.a.Title,{as:"h3"},"Popover ".concat("top")),r.a.createElement(F.a.Content,null,"Vote this product as "," ",r.a.createElement("strong",null,"Contains Gluton")))},r.a.createElement("i",{class:"material-icons-outlined",onClick:g.bind(void 0,t,"down")},"thumb_down")))}},{dataField:"user_email",text:"Enquirer email"}];return console.log("[results]",void 0),localStorage.hasOwnProperty("userData")?r.a.createElement("div",{className:"table-container-center"},!!t.queriesList&&r.a.createElement(u.a,{bordered:!1,keyField:"id",data:t.queriesList,columns:f,pagination:q()()}),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},r.a.createElement(U,{show:d.show,name:d.name,company:d.company,query:!0,deleteQuery:function(e){j.call("delete","query/".concat(e)).then((function(e){t.settingQueriesList()}))}.bind(void 0),id:d.id,glutenFree:d.glutenFree,handleClose:function(){p(W({},p,{show:!1}))}.bind(void 0)}))):r.a.createElement(k,{loginCalled:function(){console.log("rendered this"),j.setToken(),t.fetchProducts()}.bind(void 0)})},Y=a(283),Z=a(281),$=function(e){var t=Object(n.useContext)(_),a=Object(n.useState)(!1),o=Object(i.a)(a,2),l=o[0],c=o[1],s=Object(n.useState)(!1),u=Object(i.a)(s,2),m=u[0],d=u[1],p=function(e){d(e)};return r.a.createElement(Y.a,{bg:"light",expand:"lg"},r.a.createElement(Y.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(Y.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(Z.a,{className:"mr-auto"},r.a.createElement(Z.a.Link,{href:"#",onClick:p.bind(void 0,"/")},"Home"),r.a.createElement(Z.a.Link,{href:"#",onClick:p.bind(void 0,"/queries")},"Queries"))),r.a.createElement(b.a,{inline:!0},r.a.createElement(S,{wait:!0,callingApiFunction:function(e){t.fetchProducts(e)}.bind(void 0)}),r.a.createElement(z,null),r.a.createElement(U,null),r.a.createElement(y.a,{style:{marginTop:"4px",marginBottom:"4px"},variant:"outline-success color",onClick:function(){window.localStorage.clear(),c(!0)}.bind(void 0)},"Log Out")),l&&r.a.createElement(T.b,{push:!0,to:"/"}),m&&r.a.createElement(T.b,{push:!0,to:m}))},K=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),o=a[0],l=a[1],c=Object(n.useState)(!1),s=Object(i.a)(c,2),u=s[0],m=s[1];return r.a.createElement(_.Provider,{value:{results:o,setResults:l,fetchProducts:function(e){j.call("get",e?"products?query=".concat(e):"products").then((function(e){console.log("setting the state with",e.data),l(e.data)})).catch((function(){l(!1)}))},setQueriesList:m,queriesList:u,settingQueriesList:function(){j.call("get","queries").then((function(e){console.log("coming from context",e.data),m(e.data)}))}}},e.children)};var M=function(){return r.a.createElement(K,null,r.a.createElement($,null),r.a.createElement("div",{className:"app-container"},r.a.createElement(T.d,null,r.a.createElement(T.c,{path:"/queries",component:J}),r.a.createElement(T.c,{path:"/product/:id",component:I}),r.a.createElement(T.c,{path:"/",component:B}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(274);l.a.render(r.a.createElement(T.a,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[152,1,2]]]);
//# sourceMappingURL=main.1d6822eb.chunk.js.map