(this["webpackJsonpreact-tutorial"]=this["webpackJsonpreact-tutorial"]||[]).push([[0],{23:function(e,t,n){e.exports=n(46)},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(21),c=n.n(r),l=n(11),d=n(4),i=n(5),s=n(8),u=n(7),p={fontStyle:"italic",color:"grey",opacity:1,textDecoration:"line-through"};function m(e){return a.a.createElement("li",{className:"input-group"},a.a.createElement("div",{className:"input-group-prepend"},a.a.createElement("div",{className:"input-group-text"},a.a.createElement("input",{type:"checkbox",checked:e.todo.completed,onChange:function(){return e.handleChangeProps(e.todo.id)}}))),a.a.createElement("span",{className:"input-group-text bg-transparent border-0",style:e.todo.completed?p:{}},e.todo.title),a.a.createElement("button",{onClick:function(){return e.deleteTodo(e.todo.id)},className:"btn btn-danger btn-sm"},"Delete"))}function h(e){return a.a.createElement("div",null,e.todos.map((function(t){return a.a.createElement(m,{key:t.id,todo:t,handleChangeProps:e.handleChangeProps,deleteTodo:e.deleteTodo})})))}var f=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidUpdate",value:function(e,t){var n="rgb("+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+")";e.headerSpan!==this.props.headerSpan&&(document.getElementById("inH1").innerHTML="clicked",document.getElementById("inH1").style.backgroundColor=n)}},{key:"render",value:function(){return a.a.createElement("header",{className:"jumbotron"},a.a.createElement("h1",null,"Simple React Todo App ",a.a.createElement("span",{id:"inH1"})),a.a.createElement("p",null,"Please add to-do item(s) through the input field"))}}]),n}(a.a.Component),b=n(6),g=n(10),y=n(22),E=function(e){var t=Object(o.useState)({title:""}),n=Object(y.a)(t,2),r=n[0],c=n[1];return a.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.addTodo(r.title),c({title:""})}},a.a.createElement("div",{className:"input-group"},a.a.createElement("input",{type:"text",name:"title",className:"form-control",placeholder:"Add Todo...",value:r.title,onChange:function(e){c(Object(g.a)(Object(g.a)({},r),{},Object(b.a)({},e.target.name,e.target.value)))}}),a.a.createElement("input",{type:"submit",className:"btn btn-primary input-group-append",value:"Add"})))},v=n(9),j=n.n(v),O=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(d.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={todos:Array(),show:!1},e.handleChange=function(t){e.setState({todos:e.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e})),show:!e.state.show}),console.log("clicked ",t)},e.delTodo=function(t){j.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t)).then((function(n){return e.setState({todos:Object(l.a)(e.state.todos.filter((function(e){return e.id!==t})))})})),console.log("deleted ",t)},e.addTodo=function(t){j.a.post("https://jsonplaceholder.typicode.com/todos",{title:t,completed:!1}).then((function(t){return e.setState({todos:[].concat(Object(l.a)(e.state.todos),[t.data])})})),console.log("added: ",t)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;j.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((function(t){return e.setState({todos:t.data})}))}},{key:"render",value:function(){return a.a.createElement("div",{className:"container",style:{}},a.a.createElement(f,{headerSpan:this.state.show}),a.a.createElement(E,{addTodo:this.addTodo}),a.a.createElement(h,{todos:this.state.todos,handleChangeProps:this.handleChange,deleteTodo:this.delTodo}))}}]),n}(a.a.Component);n(45);c.a.render(a.a.createElement(O,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.99431ac2.chunk.js.map