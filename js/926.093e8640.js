"use strict";(self["webpackChunkblog_client"]=self["webpackChunkblog_client"]||[]).push([[926],{7926:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"login"}},[n("h4",[e._v("用户名")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{placeholder:"用户名"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),n("h4",[e._v("密码")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:e.password},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onLogin.apply(null,arguments)},input:function(t){t.target.composing||(e.password=t.target.value)}}}),n("el-button",{attrs:{size:"medium"},on:{click:e.onLogin}},[e._v("立即登录")]),n("p",{staticClass:"notice"},[e._v("没有账号？"),n("router-link",{attrs:{to:"/register"}},[e._v("注册新用户")])],1)],1)},s=[],o=n(4665),a={data(){return{username:"",password:""}},methods:{...(0,o.nv)(["login"]),onLogin(){this.login({username:this.username,password:this.password}).then((()=>{this.$router.push({path:this.$route.query.redirect||"/"})}))}}},u=a,i=n(1001),l=(0,i.Z)(u,r,s,!1,null,null,null),p=l.exports}}]);
//# sourceMappingURL=926.093e8640.js.map