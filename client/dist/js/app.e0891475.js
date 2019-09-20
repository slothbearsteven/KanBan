(function(t){function e(e){for(var a,n,i=e[0],d=e[1],l=e[2],u=0,m=[];u<i.length;u++)n=i[u],r[n]&&m.push(r[n][0]),r[n]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(t[a]=d[a]);c&&c(e);while(m.length)m.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],a=!0,i=1;i<s.length;i++){var d=s[i];0!==r[d]&&(a=!1)}a&&(o.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},r={app:0},o=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var c=d;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("64a9"),r=s.n(a);r.a},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{attrs:{id:"nav"}},[s("router-link",{attrs:{to:"/boards"}},[s("button",{staticClass:"btn btn-info bg"},[t._v("Boards")])]),s("button",{staticClass:"btn btn-danger bg",on:{click:function(e){t.logout()}}},[t._v("Logout")])],1),s("router-view")],1)},o=[],n={name:"App",methods:{logout(){this.$store.dispatch("logout")}}},i=n,d=(s("034f"),s("2877")),l=Object(d["a"])(i,r,o,!1,null,null,null),c=l.exports,u=s("8c4f"),m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"boards"},[t._v("\n  WELCOME TO THE BOARDS!!!\n  "),s("form",{on:{submit:function(e){return e.preventDefault(),t.addBoard(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.title,expression:"newBoard.title"}],attrs:{type:"text",placeholder:"title",required:""},domProps:{value:t.newBoard.title},on:{input:function(e){e.target.composing||t.$set(t.newBoard,"title",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.description,expression:"newBoard.description"}],attrs:{type:"text",placeholder:"description"},domProps:{value:t.newBoard.description},on:{input:function(e){e.target.composing||t.$set(t.newBoard,"description",e.target.value)}}}),s("button",{attrs:{type:"submit"}},[t._v("Create Board")])]),t._l(t.boards,function(e){return s("div",{key:e._id},[s("router-link",{attrs:{to:{name:"board",params:{boardId:e._id}}}},[t._v(t._s(e.title))]),s("span",{staticClass:"badge badge-danger",on:{click:function(s){t.deleteBoard(e._id)}}},[t._v("X")])],1)})],2)},p=[],h={name:"boards",mounted(){this.$store.dispatch("getBoards")},data(){return{newBoard:{title:"",description:""}}},computed:{boards(){return this.$store.state.boards}},methods:{addBoard(){this.$store.dispatch("addBoard",this.newBoard),this.newBoard={title:"",description:""}},deleteBoard(t){this.$store.dispatch("deleteBoard",t)}}},v=h,b=Object(d["a"])(v,m,p,!1,null,null,null),f=b.exports,g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"board"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 center-text"},[s("h3",[t._v(t._s(t.board.title))]),s("listCreator")],1)])]),s("div",{staticClass:"grid-container"},t._l(t.lists,function(t,e){return s("list",{key:t.id,style:{"grid-column-start":e+1},attrs:{listProp:t}})}))])},w=[],y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"list col-4 border rounded-0"},[s("div",{staticClass:"row d-flex justify-content-between"},[s("div",{staticClass:"col"},[s("h5",[t._v(t._s(t.listProp.title))])]),s("h5",{staticClass:"col text-right"},[s("span",{staticClass:"badge badge-danger",on:{click:function(e){t.deleteList(t.listProp)}}},[t._v("X")])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("ul",t._l(t.tasks,function(t){return s("task",{key:t._id,attrs:{taskProp:t}})}))])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("taskCreator",{attrs:{listProp:t.listId}})],1)])])},_=[],C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"task"},[s("li",[s("span",{attrs:{"data-toggle":"modal","data-target":"#exampleModal"}},[t._v(t._s(t.taskProp.title))]),s("div",{staticClass:"modal fade",attrs:{id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(0),s("div",{staticClass:"modal-body"},t._l(t.comments,function(t){return s("comment",{key:t._id,attrs:{commentProp:t}})})),s("comment-creator",{attrs:{taskProp:t.taskProp}}),t._m(1)],1)])]),s("span",{staticClass:"badge badge-danger",on:{click:function(e){t.deleteTask(t.taskProp)}}},[t._v("X")]),s("div",{staticClass:"dropdown"},[s("button",{staticClass:"btn btn-secondary dropdown-toggle",attrs:{type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("Change Lists")]),s("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuButton"}},t._l(t.lists,function(e){return s("span",{key:e._id,staticClass:"dropdown-item",on:{click:function(s){t.moveTask(e._id)}}},[t._v(t._s(e.title))])}))])])])},k=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("Comments")]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")])])}],$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"comment"},[t._v("\n  "+t._s(t.commentProp.body)+"\n  "),s("span",{staticClass:"badge badge-danger",on:{click:function(e){t.deleteComment()}}},[t._v("X")])])},B=[],P={name:"Comment",data(){return{}},props:["commentProp"],computed:{},methods:{deleteComment(){let t=this.commentProp;this.$store.dispatch("deleteComment",t)}},components:{}},x=P,L=Object(d["a"])(x,$,B,!1,null,"13cd51b2",null),I=L.exports,T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"comment-creator"},[s("form",{staticClass:"form-group",on:{submit:function(e){e.preventDefault(),t.addComment()}}},[s("div",{staticClass:"input-group mb-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.body,expression:"body"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Create a Comment","aria-label":"Create a Comment",name:"comment-name"},domProps:{value:t.body},on:{input:function(e){e.target.composing||(t.body=e.target.value)}}}),t._m(0)])])])},O=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"submit",id:"button-addon2"}},[t._v("Add")])])}],U={name:"comment-creator",data(){return{body:""}},props:["taskProp"],computed:{user(){return this.$store.state.user}},methods:{addComment(){let t={body:this.body,authorId:this.user._id,taskId:this.taskProp._id};this.$store.dispatch("addComment",t),this.comment={}}},components:{}},E=U,j=Object(d["a"])(E,T,O,!1,null,"468733b1",null),N=j.exports,A={name:"task",data(){return{}},props:["taskProp"],computed:{user(){return this.$store.state.user},lists(){return this.$store.state.lists},board(){return this.$store.state.activeBoard},comments(){return this.$store.state.comments[this.taskProp._id]||[]}},methods:{deleteTask(){let t={title:this.taskProp.title,authorId:this.user._id,listId:this.taskProp.listId._id,taskId:this.taskProp._id};this.$store.dispatch("deleteTask",t)},moveTask(t){let e={task:this.taskProp,newListId:t,oldList:this.taskProp.listId};this.$store.dispatch("moveTask",e)}},components:{Comment:I,CommentCreator:N},mounted(){let t=this.taskProp._id;this.$store.dispatch("getComments",t)}},M=A,S=(s("7d3f"),Object(d["a"])(M,C,k,!1,null,"b2acbfec",null)),D=S.exports,R=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"task-creator"},[s("form",{staticClass:"form-group",on:{submit:function(e){e.preventDefault(),t.addTask()}}},[s("div",{staticClass:"input-group mb-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Create a Task","aria-label":"Create a Task",name:"task-name"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),t._m(0)])])])},F=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"submit",id:"button-addon2"}},[t._v("Add")])])}],X={name:"task-creator",data(){return{title:""}},props:["listProp"],computed:{user(){return this.$store.state.user}},methods:{addTask(){let t={title:this.title,authorId:this.user._id,listId:this.listProp};this.$store.dispatch("addTask",t),this.task={}}},components:{}},J=X,q=Object(d["a"])(J,R,F,!1,null,"aba4e72a",null),H=q.exports,W={name:"list",data(){return{listId:this.listProp._id}},props:["listProp"],computed:{tasks(){return this.$store.state.tasks[this.listProp._id]}},methods:{deleteList(t){this.$store.dispatch("deleteList",t)}},components:{Task:D,TaskCreator:H},mounted(){let t=this.listProp._id;this.$store.dispatch("getTasksByList",t)}},z=W,G=(s("f62b"),Object(d["a"])(z,y,_,!1,null,null,null)),K=G.exports,Q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"list-creator"},[s("form",{staticClass:"form-group",on:{submit:function(e){e.preventDefault(),t.addList()}}},[s("div",{staticClass:"input-group mb-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Create a List","aria-label":"Create a List",name:"list-name"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),t._m(0)])])])},V=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"submit",id:"button-addon2"}},[t._v("Add")])])}],Y={name:"list-creator",data(){return{title:""}},computed:{user(){return this.$store.state.user},board(){return this.$store.state.activeBoard}},methods:{addList(){let t={title:this.title,boardId:this.board._id,authorId:this.user._id};this.$store.dispatch("addList",t),this.list={}}},components:{}},Z=Y,tt=Object(d["a"])(Z,Q,V,!1,null,"1f63c418",null),et=tt.exports,st={name:"board",components:{List:K,ListCreator:et},mounted(){let t=this.$route.params.boardId;this.$store.dispatch("getBoardById",t),this.$store.dispatch("getLists",t)},data(){return{}},computed:{board(){return this.$store.state.activeBoard},lists(){return this.$store.state.lists}},props:["boardId"]},at=st,rt=(s("e111"),Object(d["a"])(at,g,w,!1,null,"a8462aba",null)),ot=rt.exports,nt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login"},[t.loginForm?s("form",{on:{submit:function(e){return e.preventDefault(),t.loginUser(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.creds.email,expression:"creds.email"}],attrs:{type:"email",placeholder:"email"},domProps:{value:t.creds.email},on:{input:function(e){e.target.composing||t.$set(t.creds,"email",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.creds.password,expression:"creds.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:t.creds.password},on:{input:function(e){e.target.composing||t.$set(t.creds,"password",e.target.value)}}}),s("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[t._v("Login")])]):s("form",{on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.name,expression:"newUser.name"}],attrs:{type:"text",placeholder:"name"},domProps:{value:t.newUser.name},on:{input:function(e){e.target.composing||t.$set(t.newUser,"name",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.email,expression:"newUser.email"}],attrs:{type:"email",placeholder:"email"},domProps:{value:t.newUser.email},on:{input:function(e){e.target.composing||t.$set(t.newUser,"email",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.password,expression:"newUser.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:t.newUser.password},on:{input:function(e){e.target.composing||t.$set(t.newUser,"password",e.target.value)}}}),s("button",{staticClass:"btn btn-warning",attrs:{type:"submit"}},[t._v("Create Account")])]),s("div",{staticClass:"action",on:{click:function(e){t.loginForm=!t.loginForm}}},[t.loginForm?s("p",[t._v("No account? Click here to Register")]):s("p",[t._v("Already have an account? Click here to Login")])])])},it=[],dt={name:"login",data(){return{loginForm:!0,creds:{email:"",password:""},newUser:{email:"",password:"",name:""}}},beforeCreate(){this.$store.state.user._id&&this.$router.push({name:"boards"})},methods:{register(){this.$store.dispatch("register",this.newUser)},loginUser(){this.$store.dispatch("login",this.creds)}}},lt=dt,ct=(s("d6db"),Object(d["a"])(lt,nt,it,!1,null,null,null)),ut=ct.exports;a["a"].use(u["a"]);var mt=new u["a"]({routes:[{path:"/",name:"boards",component:f},{path:"/boards/:boardId",name:"board",props:!0,component:ot},{path:"/login",name:"login",component:ut},{path:"*",redirect:"/login"}]}),pt=s("2f62"),ht=s("bc3a"),vt=s.n(ht);let bt=location.host.includes("localhost")?"//localhost:3000/":"/",ft=vt.a.create({baseURL:bt+"account/",timeout:3e3,withCredentials:!0});class gt{static async Login(t){try{let s=await ft.post("login",t);return s.data}catch(e){throw new Error(`[login failed] : ${e.response?e.response.data.error:"No response from server"}`)}}static async Register(t){try{let s=await ft.post("register",t);return s.data}catch(e){throw new Error(`[registration failed] : ${e.response?e.response.data.error:"No response from server"}`)}}static async Logout(){try{await ft.delete("logout");return!0}catch(t){throw new Error(`[logout failed] : ${t.response?t.response.data.error:"No response from server"}`)}}static async Authenticate(){try{let e=await ft.get("authenticate");return e.data}catch(t){console.warn(`[Authentication failed] : ${t.response?t.response.data.error:"No response from server"}`)}}}a["a"].use(pt["a"]);let wt=window.location.host.includes("localhost:8080")?"//localhost:3000/":"/",yt=vt.a.create({baseURL:wt+"api/",timeout:3e3,withCredentials:!0});var _t=new pt["a"].Store({state:{user:{},boards:[],activeBoard:{},lists:[],tasks:{},comments:{}},mutations:{resetState(t){t.user={},t.boards=[],t.activeBoard={},t.lists=[],t.tasks={},t.comments={}},setUser(t,e){t.user=e},setBoards(t,e){t.boards=e},setActiveBoard(t,e){t.activeBoard=e},setLists(t,e){t.lists=e},setTasks(t,e){a["a"].set(t.tasks,e.listId,e.tasks)},setComments(t,e){a["a"].set(t.comments,e.taskId,e.comments)}},actions:{async register({commit:t,dispatch:e},s){try{let e=await gt.Register(s);t("setUser",e),mt.push({name:"boards"})}catch(a){console.warn(a.message)}},async login({commit:t,dispatch:e},s){try{let e=await gt.Login(s);t("setUser",e),mt.push({name:"boards"})}catch(a){console.warn(a.message)}},async logout({commit:t,dispatch:e}){try{await gt.Logout();t("resetState"),mt.push({name:"login"})}catch(s){console.warn(s.message)}},async getBoards({commit:t,dispatch:e}){yt.get("boards").then(e=>{t("setBoards",e.data)})},async getBoardById({commit:t,dispatch:e},s){try{let e=await yt.get(`boards/${s}`);t("setActiveBoard",e.data)}catch(a){console.error(a)}},async addBoard({commit:t,dispatch:e},s){yt.post("boards",s).then(t=>{e("getBoards")})},async deleteBoard({commit:t,dispatch:e},s){try{yt.delete("boards/"+s),e("getBoards")}catch(a){console.error(a)}},async getLists({commit:t,dispatch:e},s){try{let e=await yt.get("/boards/"+s+"/lists");t("setLists",e.data)}catch(a){console.error(a)}},async addList({commit:t,dispatch:e},s){try{await yt.post("lists",s);e("getLists",s.boardId)}catch(a){console.error(a)}},async deleteList({commit:t,dispatch:e},s){try{await yt.delete("lists/"+s._id);e("getLists",s.boardId._id)}catch(a){}},async getTasksByList({commit:t,dispatch:e},s){try{let e=await yt.get("lists/"+s+"/tasks"),r={listId:s,tasks:e.data};t("setTasks",r)}catch(a){console.error(a)}},async addTask({commit:t,dispatch:e},s){try{await yt.post("tasks",s);e("getTasksByList",s.listId)}catch(a){console.error(a)}},async moveTask({commit:t,dispatch:e},s){let a=s.task,r=s.newListId;try{await yt.put("tasks/"+a._id,{listId:r}),e("getTasksByList",r),e("getTasksByList",s.oldList._id)}catch(o){console.error(o)}},async deleteTask({commit:t,dispatch:e},s){try{await yt.delete("tasks/"+s.taskId);e("getTasksByList",s.listId)}catch(a){console.error(a)}},async getComments({commit:t,dispatch:e},s){try{let e=await yt.get("tasks/"+s+"/comments"),r={taskId:s,comments:e.data};t("setComments",r)}catch(a){console.error(a)}},async addComment({commit:t,dispatch:e},s){try{await yt.post("comments",s);e("getComments",s.taskId)}catch(a){console.error(a)}},async deleteComment({commit:t,dispatch:e},s){try{await yt.delete("comments/"+s._id),e("getComments",s.taskId._id)}catch(a){console.error(a)}}}});async function Ct(){let t=await gt.Authenticate();t?_t.commit("setUser",t):mt.push({name:"login"}),new a["a"]({router:mt,store:_t,render:t=>t(c)}).$mount("#app")}Ct()},"629d":function(t,e,s){},"64a9":function(t,e,s){},"7d3f":function(t,e,s){"use strict";var a=s("fa63"),r=s.n(a);r.a},"9ac8":function(t,e,s){},a9e7:function(t,e,s){},d6db:function(t,e,s){"use strict";var a=s("a9e7"),r=s.n(a);r.a},e111:function(t,e,s){"use strict";var a=s("9ac8"),r=s.n(a);r.a},f62b:function(t,e,s){"use strict";var a=s("629d"),r=s.n(a);r.a},fa63:function(t,e,s){}});
//# sourceMappingURL=app.e0891475.js.map