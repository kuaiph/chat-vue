webpackJsonp([1],{126:function(t,s,n){"use strict";var e=n(4),a=n(165),o=n(161),i=n.n(o),r=n(160),c=n.n(r);e.a.use(a.a),s.a=new a.a({routes:[{path:"/",name:"Login",component:i.a},{path:"/chatting",name:"Chatting",component:c.a}]})},128:function(t,s,n){function e(t){n(154)}var a=n(3)(n(147),n(162),e,null,null);t.exports=a.exports},147:function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"app"}},148:function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=n(151),a=n.n(e);s.default={name:"chatting",data:function(){return{msgs:localStorage.msgs_group&&JSON.parse(localStorage.msgs_group)||[],emojis:["😂","🙏","😄","😏","😇","😅","😌","😘","😍","🤓","😜","😎","😊","😳","🙄","😱","😒","😔","😷","👿","🤗","😩","😤","😣","😰","😴","😬","😭","👻","👍","✌️","👉","👀","🐶","🐷","⚽️","❤️"],isShowEmoji:!1,inputContent:""}},watch:{msgs:function(t){localStorage.msgs_group=a()(t)}},computed:{name:function(){return this.$store.state.name},avatarUrl:function(){return this.$store.state.avatarUrl}},beforeRouteEnter:function(t,s,n){localStorage.name?n():n("/")},mounted:function(){var t=this;this.oContent=document.querySelector(".chatting-content"),this.oContent.scrollTop=this.oContent.scrollHeight,this.oTextarea=document.querySelector("textarea"),socket.emit("online",this.$store.state.name),socket.on("online",function(s){if(s){var n='<div class="online">\n         '+s+"上线了\n      </div>";t.oContent.appendChild(n),thi.oContent.scrollTop=t.oContent.scrollHeight}}),socket.on("receiveGroupMsg",function(s){t.msgs.push(s),setTimeout(function(){t.oContent.scrollTop=t.oContent.scrollHeight},0)}),this.oContent.scrollTop=this.oContent.scrollHeight},methods:{back:function(){localStorage.name="",console.log(localStorage.name),this.$router.push("/")},showEmoji:function(){this.isShowEmoji=!this.isShowEmoji},insertText:function(t){this.inputContent=this.inputContent+t},hideEmoji:function(){this.isShowEmoji=!1},send:function(){var t=this;this.isShowEmoji=!1,""!==this.inputContent&&(socket.emit("sendGroupMsg",{date:this.moment().format("YYYY-MM-DD HH:mm:ss"),from:""+localStorage.name,content:this.inputContent,avatarUrl:this.avatarUrl}),this.msgs.push({data:this.moment().format("YYY-MM-DD HH:mm:ss"),from:""+localStorage.name,content:this.inputContent,self:!0,avatarUrl:this.avatarUrl}),this.inputContent="",setTimeout(function(){return t.oContent.scrollTop=t.oContent.scrollHeight},100))}}}},149:function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"login",data:function(){return{name:""}},beforeCreate:function(){localStorage.name&&this.$router.push("Chatting"),console.log(localStorage.name)},methods:{login:function(){""!==this.name&&(this.$store.commit("changeName",this.name),localStorage.name=this.name,this.$router.push("Chatting"))}}}},150:function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=n(4),a=n(128),o=n.n(a),i=n(126),r=n(0),c=n.n(r),l=n(129),u=n(125),m=n.n(u),j=n(127),h=n.n(j);c.a.locale("zh-cn"),e.a.prototype.moment=c.a,e.a.prototype.random=function(t){return Math.floor(t*Math.random())},e.a.use(l.a),e.a.use(h.a,m.a);var f=new l.a.Store({state:{name:"",avatarUrl:"http://omratag7g.bkt.clouddn.com/icon-avatar"+e.a.prototype.random(21)+".svg"},mutations:{changeName:function(t,s){t.name=s}}});e.a.config.productionTip=!1,new e.a({el:"#app",router:i.a,store:f,template:"<App/>",components:{App:o.a}})},154:function(t,s){},155:function(t,s){},156:function(t,s){},158:function(t,s,n){function e(t){return n(a(t))}function a(t){var s=o[t];if(!(s+1))throw new Error("Cannot find module '"+t+"'.");return s}var o={"./af":10,"./af.js":10,"./ar":17,"./ar-dz":11,"./ar-dz.js":11,"./ar-kw":12,"./ar-kw.js":12,"./ar-ly":13,"./ar-ly.js":13,"./ar-ma":14,"./ar-ma.js":14,"./ar-sa":15,"./ar-sa.js":15,"./ar-tn":16,"./ar-tn.js":16,"./ar.js":17,"./az":18,"./az.js":18,"./be":19,"./be.js":19,"./bg":20,"./bg.js":20,"./bn":21,"./bn.js":21,"./bo":22,"./bo.js":22,"./br":23,"./br.js":23,"./bs":24,"./bs.js":24,"./ca":25,"./ca.js":25,"./cs":26,"./cs.js":26,"./cv":27,"./cv.js":27,"./cy":28,"./cy.js":28,"./da":29,"./da.js":29,"./de":32,"./de-at":30,"./de-at.js":30,"./de-ch":31,"./de-ch.js":31,"./de.js":32,"./dv":33,"./dv.js":33,"./el":34,"./el.js":34,"./en-au":35,"./en-au.js":35,"./en-ca":36,"./en-ca.js":36,"./en-gb":37,"./en-gb.js":37,"./en-ie":38,"./en-ie.js":38,"./en-nz":39,"./en-nz.js":39,"./eo":40,"./eo.js":40,"./es":42,"./es-do":41,"./es-do.js":41,"./es.js":42,"./et":43,"./et.js":43,"./eu":44,"./eu.js":44,"./fa":45,"./fa.js":45,"./fi":46,"./fi.js":46,"./fo":47,"./fo.js":47,"./fr":50,"./fr-ca":48,"./fr-ca.js":48,"./fr-ch":49,"./fr-ch.js":49,"./fr.js":50,"./fy":51,"./fy.js":51,"./gd":52,"./gd.js":52,"./gl":53,"./gl.js":53,"./gom-latn":54,"./gom-latn.js":54,"./he":55,"./he.js":55,"./hi":56,"./hi.js":56,"./hr":57,"./hr.js":57,"./hu":58,"./hu.js":58,"./hy-am":59,"./hy-am.js":59,"./id":60,"./id.js":60,"./is":61,"./is.js":61,"./it":62,"./it.js":62,"./ja":63,"./ja.js":63,"./jv":64,"./jv.js":64,"./ka":65,"./ka.js":65,"./kk":66,"./kk.js":66,"./km":67,"./km.js":67,"./kn":68,"./kn.js":68,"./ko":69,"./ko.js":69,"./ky":70,"./ky.js":70,"./lb":71,"./lb.js":71,"./lo":72,"./lo.js":72,"./lt":73,"./lt.js":73,"./lv":74,"./lv.js":74,"./me":75,"./me.js":75,"./mi":76,"./mi.js":76,"./mk":77,"./mk.js":77,"./ml":78,"./ml.js":78,"./mr":79,"./mr.js":79,"./ms":81,"./ms-my":80,"./ms-my.js":80,"./ms.js":81,"./my":82,"./my.js":82,"./nb":83,"./nb.js":83,"./ne":84,"./ne.js":84,"./nl":86,"./nl-be":85,"./nl-be.js":85,"./nl.js":86,"./nn":87,"./nn.js":87,"./pa-in":88,"./pa-in.js":88,"./pl":89,"./pl.js":89,"./pt":91,"./pt-br":90,"./pt-br.js":90,"./pt.js":91,"./ro":92,"./ro.js":92,"./ru":93,"./ru.js":93,"./sd":94,"./sd.js":94,"./se":95,"./se.js":95,"./si":96,"./si.js":96,"./sk":97,"./sk.js":97,"./sl":98,"./sl.js":98,"./sq":99,"./sq.js":99,"./sr":101,"./sr-cyrl":100,"./sr-cyrl.js":100,"./sr.js":101,"./ss":102,"./ss.js":102,"./sv":103,"./sv.js":103,"./sw":104,"./sw.js":104,"./ta":105,"./ta.js":105,"./te":106,"./te.js":106,"./tet":107,"./tet.js":107,"./th":108,"./th.js":108,"./tl-ph":109,"./tl-ph.js":109,"./tlh":110,"./tlh.js":110,"./tr":111,"./tr.js":111,"./tzl":112,"./tzl.js":112,"./tzm":114,"./tzm-latn":113,"./tzm-latn.js":113,"./tzm.js":114,"./uk":115,"./uk.js":115,"./ur":116,"./ur.js":116,"./uz":118,"./uz-latn":117,"./uz-latn.js":117,"./uz.js":118,"./vi":119,"./vi.js":119,"./x-pseudo":120,"./x-pseudo.js":120,"./yo":121,"./yo.js":121,"./zh-cn":122,"./zh-cn.js":122,"./zh-hk":123,"./zh-hk.js":123,"./zh-tw":124,"./zh-tw.js":124};e.keys=function(){return Object.keys(o)},e.resolve=a,t.exports=e,e.id=158},160:function(t,s,n){function e(t){n(155)}var a=n(3)(n(148),n(163),e,"data-v-7d8badbe",null);t.exports=a.exports},161:function(t,s,n){function e(t){n(156)}var a=n(3)(n(149),n(164),e,"data-v-efbac816",null);t.exports=a.exports},162:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},163:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"chatting"},[n("div",{staticClass:"chatting-header"},[t._m(0),t._v(" "),n("div",{staticClass:"chatting-menu",on:{click:t.back}},[n("i",{staticClass:"icon-menu"})])]),t._v(" "),n("div",{staticClass:"chatting-content",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.hideEmoji(s)}}},t._l(t.msgs,function(s){return n("div",[s.self?n("div",{staticClass:"chatting-item self clearfix"},[n("div",{staticClass:"msg-date"},[t._v("\n\t\t\t\t\t\t"+t._s(s.date)+"\n\t\t\t\t\t")]),t._v(" "),n("div",{staticClass:"msg-from"},[n("span",{staticClass:"msg-author"},[t._v(t._s(s.from))]),t._v(" "),n("img",{attrs:{src:s.avatarUrl,alt:""}})]),t._v(" "),n("div",{staticClass:"msg-content"},[t._v(t._s(s.content))])]):n("div",{staticClass:"chatting-item other clearfix"},[n("div",{staticClass:"msg-date"},[t._v("\n             "+t._s(s.date)+"\n          ")]),t._v(" "),n("div",{staticClass:"msg-from"},[n("img",{attrs:{src:s.avatarUrl,alt:""}}),t._v(" "),n("span",{staticClass:"msg-author"},[t._v(t._s(s.from))])]),t._v(" "),n("div",{staticClass:"msg-content"},[t._v("\n          \t"+t._s(s.content)+"\n          ")])])])})),t._v(" "),n("div",{staticClass:"chatting-input"},[n("div",{staticClass:"emoji"},[n("i",{staticClass:"icon-emoji",on:{click:t.showEmoji}})]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.inputContent,expression:"inputContent",modifiers:{trim:!0}}],attrs:{placeholder:"请输入..."},domProps:{value:t.inputContent},on:{keyup:function(s){if(!("button"in s)&&t._k(s.keyCode,"enter",13))return null;t.send(s)},focus:t.hideEmoji,input:function(s){s.target.composing||(t.inputContent=s.target.value.trim())},blur:function(s){t.$forceUpdate()}}}),t._v(" "),n("button",{on:{click:t.send}},[t._v("发送")])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowEmoji,expression:"isShowEmoji"}],staticClass:"emoji-display"},[n("ul",t._l(t.emojis,function(s){return n("li",{on:{click:function(n){t.insertText(s)}}},[t._v(t._s(s))])}))])])},staticRenderFns:[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"chatting-title"},[n("h2",[n("i",{staticClass:"icon-group"}),t._v("多人聊天室")])])}]}},164:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"login"},[t._m(0),t._v(" "),n("i",{staticClass:"icon-chat"}),t._v(" "),n("h2",[t._v("请输入您的名字")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.name,expression:"name",modifiers:{trim:!0}}],attrs:{type:"text",name:"",autofocus:""},domProps:{value:t.name},on:{keyup:function(s){if(!("button"in s)&&t._k(s.keyCode,"enter",13))return null;t.login(s)},input:function(s){s.target.composing||(t.name=s.target.value.trim())},blur:function(s){t.$forceUpdate()}}}),t._v(" "),n("button",{on:{click:t.login}},[t._v("登录")])])},staticRenderFns:[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("a",{attrs:{href:"http://www.qirenji.info",target:"_blank"}},[n("i",{staticClass:"icon-about"})])}]}}},[150]);
//# sourceMappingURL=app.21531a4851794b8abcf4.js.map