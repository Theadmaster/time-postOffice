(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["faq"],{"365c":function(t,e,n){"use strict";n("d3b7");var r=n("bc3a"),a=n.n(r);a.a.defaults.withCredentials=!0;var o=a.a.create({baseURL:"",timeout:8e3});o.interceptors.request.use((function(t){return console.log("config: ",t),t}),(function(t){return console.log(t),Promise.reject()})),o.interceptors.response.use((function(t){if(200===t.status)return t.data;Promise.reject()}),(function(t){return console.log(t),Promise.reject()}));var u=o;n.d(e,"e",(function(){return s})),n.d(e,"f",(function(){return c})),n.d(e,"c",(function(){return i})),n.d(e,"b",(function(){return d})),n.d(e,"a",(function(){return f})),n.d(e,"d",(function(){return l}));var s=function(t){return u({url:"/send",method:"post",data:t})},c=function(t){return u({url:"/extract",method:"post",data:t})},i=function(t){return u({url:"/getPublicLetter",method:"get",params:t})},d=function(t){return u({url:"/getAllLetter",method:"get",params:t})},f=function(t){return u({url:"/byExtractGetEmail",method:"post",data:t})},l=function(t){return u({url:"/getQuestion",method:"get",params:t})}},"4d17":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"faq-box"},t._l(t.result,(function(e,r){return n("div",{key:r,staticClass:"like"},[n("div",{staticClass:"title"},[t._v(t._s(e.title))]),n("div",{staticClass:"content",domProps:{innerHTML:t._s(e.content)}})])})),0)},a=[],o=n("365c"),u={data:function(){return{data:[],defData:[{title:"1. 我在这个网站写信，会不会泄露隐私啊？",content:"私密信件不会泄露，邮件发送是全自动运行，内部存储也有一定加密措施，防止泄露。<br/>\n当然，写信的时候勾选了“公开信”除外，公开信是所有人都能够阅读和评论的。公开信的邮件地址也是隐藏不显示的，不用担心泄露。"}]}},beforeMount:function(){},computed:{result:function(){return this.data.length?this.data:this.defData}},mounted:function(){this.loadData()},methods:{loadData:function(){var t=this;Object(o["d"])().then((function(e){e.statusCode?t.data=e.data||[]:t.$message.error(e.message)})).catch((function(e){t.$message.error("获取常见问题失败, 请稍后重试")}))}}},s=u,c=(n("bc3f"),n("2877")),i=Object(c["a"])(s,r,a,!1,null,"47fa06b2",null);e["default"]=i.exports},bc3f:function(t,e,n){"use strict";var r=n("d490"),a=n.n(r);a.a},d490:function(t,e,n){}}]);