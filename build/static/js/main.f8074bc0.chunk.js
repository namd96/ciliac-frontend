(window.webpackJsonpinit=window.webpackJsonpinit||[]).push([[0],{100:function(e,t,a){e.exports=a(177)},105:function(e,t,a){},106:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},107:function(e,t,a){},108:function(e,t,a){},139:function(e,t,a){},167:function(e,t){},177:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(14),o=a.n(r),s=(a(105),a(106),a(107),a(34)),i=a(18),c=a(19),u=a(21),h=a(20),d=a(22),m=(a(108),a(186)),g=a(183),p=a(180),f=a(39),b=a.n(f),y=a(115),E="http://3.230.95.77:8060",v={token:localStorage.getItem("userData")||!1,call:function(e,t,a){return b.a[e]("".concat(E,"/").concat(t)).set("Authorization",v.token).send(y.stringify(a)).then((function(e){return console.log("[from Agent]",e.body),e.body}))},rawCall:function(e,t,a){return b.a[e]("".concat(E,"/").concat(t)).send(y.stringify(a)).then((function(e){return console.log("[from Agent]",e.body),e.body}))},setToken:function(){v.token=localStorage.getItem("userData")}};function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function k(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(a,!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var O,w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleInputChange=function(e){a.setState({authCreds:k({},a.state.authCreds,Object(s.a)({},e.target.name,e.target.value))})},a.handleSubmit=function(e){v.rawCall("post",e,a.state.authCreds).then((function(t){t.err||"login"!=e?t.err||"register"!=e?alert(t.msg):(alert("Yay,registered successfully! please login again."),a.toggleRegister()):(localStorage.setItem("userData",t.token),a.props.loginCalled())}))},a.state={authCreds:{username:"",password:"",name:"",ciliac_patient:!1}},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"toggleRegister",value:function(){this.setState({openRegister:!this.state.openRegister})}},{key:"handelCilacToggle",value:function(){this.setState({authCreds:k({},this.state.authCreds,{ciliac_patient:!this.state.authCreds.ciliac_patient})})}},{key:"render",value:function(){var e=this;return this.state.openRegister?l.a.createElement(m.a,{style:{width:"28rem",color:"black"}},l.a.createElement(m.a.Body,null,l.a.createElement(m.a.Title,null,"Register"),l.a.createElement(g.a,null,l.a.createElement(g.a.Group,{controlId:"formBasicEmail"},l.a.createElement(m.a.Subtitle,{className:"mb-2",style:{textAlign:"left"}},"Name"),l.a.createElement(g.a.Control,{type:"text",placeholder:"Enter name",onChange:this.handleInputChange.bind(this),name:"name"})),l.a.createElement(g.a.Group,{controlId:"formBasicEmail"},l.a.createElement(m.a.Subtitle,{className:"mb-2",style:{textAlign:"left"}},"Username"),l.a.createElement(g.a.Control,{type:"text",placeholder:"Enter email",onChange:this.handleInputChange.bind(this),name:"username"})),l.a.createElement(g.a.Group,{controlId:"formBasicPassword"},l.a.createElement(m.a.Subtitle,{className:"mb-2",style:{textAlign:"left"}},"Password"),l.a.createElement(g.a.Control,{type:"password",placeholder:"Password",onChange:this.handleInputChange.bind(this),name:"password"})),l.a.createElement("div",{style:{marginBottom:"3%"}},l.a.createElement(m.a.Link,{style:{marginLeft:"2px",cursor:"pointer"}},"Are you a ciliac patient?"),l.a.createElement("div",{className:"toggle-button"},l.a.createElement("div",{onClick:function(){return e.handelCilacToggle()},className:"toggle-button-box"},l.a.createElement("div",{className:"toggle-button-oval",style:{float:this.state.authCreds.ciliac_patient?"right":"left",backgroundColor:this.state.authCreds.ciliac_patient?"#BEA57C":"#BDBDBD"}})))),l.a.createElement(p.a,{onClick:this.handleSubmit.bind(this,"register"),variant:"primary"},"Submit"),l.a.createElement(m.a.Link,{style:{marginLeft:"2px",cursor:"pointer"},onClick:this.toggleRegister.bind(this)},"Already have an account? Register")))):l.a.createElement(m.a,{style:{width:"28rem",color:"black"}},l.a.createElement(m.a.Body,null,l.a.createElement(m.a.Title,null,"Login"),l.a.createElement(g.a,null,l.a.createElement(g.a.Group,{controlId:"formBasicEmail"},l.a.createElement(m.a.Subtitle,{className:"mb-2",style:{textAlign:"left"}},"Username"),l.a.createElement(g.a.Control,{type:"text",placeholder:"Enter email",onChange:this.handleInputChange.bind(this),name:"username"})),l.a.createElement(g.a.Group,{controlId:"formBasicPassword"},l.a.createElement(m.a.Subtitle,{className:"mb-2",style:{textAlign:"left"}},"Password"),l.a.createElement(g.a.Control,{type:"password",placeholder:"Password",onChange:this.handleInputChange.bind(this),name:"password"})),l.a.createElement(p.a,{onClick:this.handleSubmit.bind(this,"login"),variant:"primary"},"Submit"),l.a.createElement(m.a.Link,{style:{marginLeft:"2px",cursor:"pointer"},onClick:this.toggleRegister.bind(this)},"Don't have an account? Register"))))}}]),t}(l.a.Component),S=function(e){function t(e){return Object(i.a)(this,t),Object(u.a)(this,Object(h.a)(t).call(this,e))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleInputChange",value:function(e){var t=this,a=e.target.value;this.setState({latestUpdatedOn:(new Date).getTime()}),setTimeout((function(){t.props.wait&&(new Date).getTime()-t.state.latestUpdatedOn>=900&&t.props.callingApiFunction(a)}),900)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("input",{type:"text",onChange:this.handleInputChange.bind(this),className:"ciliac-searchbox"}),l.a.createElement("input",{type:"checkbox",onChange:this.props.handleCheckboxChange,value:this.props.filtered,className:"ciliac-checkbox"}),"Gluten Free")}}]),t}(l.a.Component),j=a(182),x=a(94),P=a(181),I=l.a.createContext({}),D=I.Provider,N=(I.Consumer,I);function B(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function T(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?B(a,!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):B(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var F=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={results:!1,body:{name:"",company:"",glutonFree:0}},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"fetchProductsList",value:function(){var e=this;O=this.context,console.log(O),v.call("get","products").then((function(t){console.log("setting the state with",t.data),e.setState({results:t.data})})).catch((function(){e.setState({results:!1})}))}},{key:"componentDidMount",value:function(){console.log("rendered this"),localStorage.hasOwnProperty("userData")?this.fetchProductsList():this.setState({loggedOut:!0})}},{key:"openModal",value:function(){this.setState({show:!0})}},{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"handleSave",value:function(){var e=this;v.call("post","create/product",this.state.body).then((function(t){console.log(t),e.handleSearchInput(),e.handleClose()}))}},{key:"handleCheckBoxClick",value:function(){this.setState({body:T({},this.state.body,{glutonFree:this.state.body.glutonFree?0:1})})}},{key:"handleMessageTyping",value:function(e){this.setState({body:T({},this.state.body,Object(s.a)({},e.target.name,e.target.value))})}},{key:"loginCalled",value:function(){console.log("rendered this"),v.setToken(),this.setState(this.state,this.fetchProductsList())}},{key:"handleSearchInput",value:function(e){var t=this;e?v.call("get","products?query=".concat(e,"&glutenFree=").concat(this.state.filtered)).then((function(e){console.log("setting the state with",e),t.setState({results:e.data})})).catch((function(){t.setState({results:!1})})):v.call("get","products?glutenFree=".concat(this.state.filtered)).then((function(e){console.log("setting the state with",e),t.setState({results:e.data})})).catch((function(){t.setState({results:!1})}))}},{key:"handleCheckboxChange",value:function(){this.setState({filtered:!this.state.filtered})}},{key:"render",value:function(){var e=this;return O=this.context,console.log("[results]",O),localStorage.hasOwnProperty("userData")?l.a.createElement("div",null,l.a.createElement(S,{wait:!0,handleCheckboxChange:this.handleCheckboxChange.bind(this),callingApiFunction:this.handleSearchInput.bind(this),filtered:this.state.filtered}),l.a.createElement(j.a,{show:this.state.show,onHide:function(){return e.handleClose()}},l.a.createElement(j.a.Header,{closeButton:!0},l.a.createElement(j.a.Title,null,"Modal heading")),l.a.createElement(j.a.Body,null,"Name",l.a.createElement(x.a,{onChange:function(t){return e.handleMessageTyping(t)},"aria-label":"Default",name:"name",value:this.state.body.name,"aria-describedby":"inputGroup-sizing-default"}),"Company",l.a.createElement(x.a,{onChange:function(t){return e.handleMessageTyping(t)},"aria-label":"Default",name:"company",value:this.state.body.company,"aria-describedby":"inputGroup-sizing-default"}),l.a.createElement("input",{type:"checkbox",onChange:function(){return e.handleCheckBoxClick()},value:this.state.body.glutonFree,className:"ciliac-checkbox",style:{marginTop:"5px"}}),"Gluten Free"),l.a.createElement(j.a.Footer,null,l.a.createElement(p.a,{variant:"secondary",onClick:function(){return e.handleClose()}},"Close"),l.a.createElement(p.a,{variant:"primary",onClick:function(){return e.handleSave()}},"Save Changes"))),l.a.createElement(p.a,{onClick:function(){return e.openModal()}},"Create"),l.a.createElement("div",null,l.a.createElement(P.a,{striped:!0,bordered:!0,hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"Product Name"),l.a.createElement("th",null,"Company Name"),l.a.createElement("th",null,"Gluten Free"))),l.a.createElement("tbody",null,!!this.state.results&&this.state.results.map((function(e,t){return l.a.createElement("tr",null,l.a.createElement("td",null,t+1),l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.company),l.a.createElement("td",null,e.glutonFree?"Yes":"No"))})))))):l.a.createElement(w,{loginCalled:this.loginCalled.bind(this)})}}]),t}(l.a.Component);F.contextType=N;var A=F,L=(a(139),a(178),a(96)),G=a.n(L),M=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={list:[{text:"something"},{text:"test"}],fromId:1,toId:2,message:""},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.socket=G()("".concat(window.location.origin.replace("3000","8060"))),this.socket.on("chat",(function(t){e.setState({list:e.state.list.concat({text:t})})}))}},{key:"onSend",value:function(){console.log("message",this.state.message),this.socket.emit("chat",this.state.message),this.setState({message:""})}},{key:"handleMessageTyping",value:function(e){console.log("message",e),this.setState({message:e})}},{key:"render",value:function(){var e=this;"chat?from=".concat(this.state.fromId,"&to=").concat(this.state.toId);return l.a.createElement("div",{className:"chatbox-container"},l.a.createElement("div",{className:"chat-displayer"},this.state.list&&this.state.list.map((function(e,t){return l.a.createElement("div",{className:"message-displayer"},l.a.createElement("div",{className:"text-container"},e.text))}))),l.a.createElement("div",{className:"mb-3"},l.a.createElement(x.a,{onChange:function(t){return e.handleMessageTyping(t.target.value)},"aria-label":"Default",value:this.state.message,"aria-describedby":"inputGroup-sizing-default"}),l.a.createElement(p.a,{onClick:function(){return e.onSend()},variant:"info"},"Send")))}}]),t}(l.a.Component),R=a(185),_=a(184),z=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={filtered:!1},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleSearchInput",value:function(e){var t=this;e?v.call("get","products?query=".concat(e,"&glutenFree=").concat(this.state.filtered)).then((function(e){console.log("setting the state with",e),t.setState({results:e.data})})).catch((function(){t.setState({results:!1})})):v.call("get","products?glutenFree=".concat(this.state.filtered)).then((function(e){console.log("setting the state with",e),t.setState({results:e.data})})).catch((function(){t.setState({results:!1})}))}},{key:"handleCheckboxChange",value:function(){this.setState({filtered:!this.state.filtered})}},{key:"render",value:function(){return l.a.createElement(D,{value:this.state.results||{name:"test"}},l.a.createElement(R.a,{bg:"light",expand:"lg"},l.a.createElement(R.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(R.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(_.a,{className:"mr-auto"},l.a.createElement(_.a.Link,{href:"/"},"Home"),l.a.createElement(_.a.Link,{href:"/queries"},"Queries")),l.a.createElement(g.a,{inline:!0},l.a.createElement(S,{wait:!0,handleCheckboxChange:this.handleCheckboxChange.bind(this),callingApiFunction:this.handleSearchInput.bind(this),filtered:this.state.filtered})))))}}]),t}(l.a.Component),U=a(35);var q=function(){return l.a.createElement("div",null,l.a.createElement(z,null),l.a.createElement(U.c,null,l.a.createElement(U.b,{path:"/chat",component:M}),l.a.createElement(U.b,{path:"/",component:A})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(176);o.a.render(l.a.createElement(U.a,null,l.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[100,1,2]]]);
//# sourceMappingURL=main.f8074bc0.chunk.js.map