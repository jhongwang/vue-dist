webpackJsonp([3,9],{206:function(t,e,s){(function(a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=s(22),n=i(o),r=(s(23),function(t){return s.e(14,function(e){var s=[e(113)];t.apply(null,s)}.bind(this))}),l=function(t){return s.e(13,function(e){var s=[e(114)];t.apply(null,s)}.bind(this))};e.default={data:function(){return{msg:{indexCharts:[1],city:"",citycode:"",curcityarr:[{name:"全国",code:"000"}],wd:"",ywselects:[{name:"微信朋友圈签到",value:"wechat_friend"},{name:"微信发送位置",value:"wechat_send"},{name:"手q发送位置",value:"qq"},{name:"Qzone签到",value:"qzone"}],ywResult:"微信朋友圈签到",ywResultVal:"wechat_friend",rq:"",sdselects:[{name:"全天 00：00 - 24：00",value:"0~24"},{name:"早上 07：00 - 10：00",value:"7~10"},{name:"上午 10：00 - 12：00",value:"10~12"},{name:"中午 12：00 - 14：00",value:"12~14"},{name:"下午 14：00 - 19：00",value:"14~19"},{name:"晚上 19：00 - 24：00",value:"19~24"}],sdResult:"全天 00：00 - 24：00",sdResultVal:"0~24",pw:20,sq:""},btn:!1,isyw:!1,issd:!1,iscbtn:!1,time:"2016-05-15",startTime:new Date("2017-03-30").getTime(),endTime:new Date("2017-03-30").getTime(),en:!1}},methods:{poi_submit:function(){var t=this,e="https://apis.map.qq.com/ws/place/v1/search?output=jsonp&boundary=region(%E5%8C%97%E4%BA%AC,0)&keyword=%E6%88%90%E9%83%BD&page_size=20&page_index=1&orderby=_distance&key=WC4BZ-TFI24-M45UM-DI57V-SVUH3-LQFUV";a.ajax({type:"get",url:e,dataType:"jsonp",jsonpCallback:"cb",success:function(e){e&&(e=n.default.beijing,t.draw_data(e))},error:function(){}}),t.$store.commit("ChangeFormMsg",this.msg)},draw_data:function(t){var e=this;console.log("暂时是模拟的数据");var s={zhanshi_data:[],map_poi:[],time_xarr:[],time_yarr:[],time_xarr_legend:[]},a=[7,10];if(24==Number(a[1]))var i=24;else var i=Number(a[1])+1;for(var o=Number(a[0]);o<i;o++)s.time_xarr.push(o);for(var o=0;o<t.length;o++){var r,l={};if(t[o].group_info.group_category.indexOf("_")==-1)r=n.default.__LocalDataCities_wd.list[t[o].group_info.group_category][0];else{r="";for(var c=t[o].group_info.group_category.split("_"),u=0;u<c.length;u++)r+=n.default.__LocalDataCities_wd.list[c[u]][0]+"、";r=r.slice(0,-1)}t[o].group_info.group_city?l.text=n.default.__LocalDataCities_wd.city_Codes_name[t[o].group_info.group_city]+"用户最乐于分享的"+r+"排名":l.text="全国用户最乐于分享的"+r+"排名",l.data=t[o].poi_list,s.zhanshi_data.push(l);var d={};d.type="bar",d.name=r,s.time_xarr_legend.push(r),d.data=[];for(var m=0;m<s.time_xarr.length;m++)d.data.push(t[o].hour_map[s.time_xarr[m]]);s.time_yarr.push(d);for(var p=t[o].poi_list,g=[],_=0;_<p.length;_++){var f={};f.name=p[_].name,f.value=[p[_].longitude,p[_].latitude,p[_].click_num],f.serie=r,g.push(f)}s.map_poi.push(g)}e.$store.commit("ChangeIndexMsg",s),console.log("数据"),console.log(s.zhanshi_data),console.log(s.map_poi),console.log(s.time_xarr),console.log(s.time_xarr_legend),console.log("下面是储存的数据"),console.log(e.$store.state.formMsg),console.log(e.$store.state.indexData);for(var v=[],h=[],c=s.zhanshi_data,o=0;o<c.length;o++){for(var y=c[o].text,w=c[o].data.sort(e.down_json),x="签到值",b=["#7cb5ec"],C=[],k=[],u=0;u<w.length;u++)C.push(w[u].name),k.push(w[u].click_num);var D=c[o].subtitle?c[o].subtitle:null,F={title:{text:y,x:"center",subtext:D,textStyle:{color:"#496174",fontWeight:"bolder",fontFamily:"Microsoft Yahei",fontSize:18},subtextStyle:{color:"#333",fontWeight:"bolder"}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},yAxis:{type:"category",boundaryGap:[0,.01],data:C},xAxis:{type:"value",axisLabel:{interval:0}},series:[{name:x,type:"bar",data:k}],color:b,graphic:[{type:"image",id:"logo",left:"30%",top:130,z:5,bounding:"raw",origin:[75,75],style:{image:"../static/images/logo.png",width:249,height:36,opacity:.1}}]};h.push(F)}v.push(h);var M=[];s.time_xarr&&s.time_xarr.length>0&&M.push({title:{text:"签到时段分布图",x:"center"},calculable:!0,legend:{top:"28",data:s.time_xarr_legend},tooltip:{trigger:"item"},xAxis:[{type:"category",data:s.time_xarr}],yAxis:[{type:"value"}],series:s.time_yarr,graphic:[{type:"image",id:"logo",left:"30%",top:130,z:5,bounding:"raw",origin:[75,75],style:{image:"../static/images/logo.png",width:249,height:36,opacity:.1}}],color:["#DC580F","#00D037","#D91749","#099DDB"]});var q=this.msg.curcityarr[0].name,z=this.msg.curcityarr[0].code;if(q){var R;if("全国"==q)R="china";else{var j=z.slice(0,3),$=n.default.__LocalDataCities.list[j][0].slice(0,2);R=n.default.__LocalDataCities.city_names[$]}if(s.map_poi&&s.map_poi.length>0){var L=n.default.setMap(R,s.map_poi);M.push(L)}}v.push(M),e.$store.commit("ChangeFormMsgindexCharts",v),console.log("全局POI图表集合"),console.log(v),console.log(e.$store.state.formMsg),console.log("quanju"),e.$router.push({path:"/poi/rank"})},fun_city:function(){this.iscbtn=!this.iscbtn},fun_cityresult:function(t){console.log(t),console.log(t[0].code),this.msg.city=t[0].name,this.fun_city()},fun_yw:function(){this.isyw=!this.isyw},fun_sd:function(){this.issd=!this.issd},ywselectFun:function(t){this.msg.ywResult=t.name,this.msg.ywResultVal=t.value,this.isyw=!this.isyw},sdselectFun:function(t){this.msg.sdResult=t.name,this.msg.sdResultVal=t.value,this.issd=!this.issd},init:function(){this.btn=!this.btn;for(var t in this.$store.state.formMsg)this.msg[t]=this.$store.state.formMsg[t]||""},confrim:function(t,e){console.log("confirm"),console.log(t),console.log(e)},down_json:function(t,e){return parseFloat(t.click_num)>parseFloat(e.click_num)?1:-1}},mounted:function(){this.init()},components:{"city-box":r,"mz-datepicker":l}},t.exports=e.default}).call(e,s(176))},257:function(t,e,s){e=t.exports=s(18)(),e.push([t.id,".intro[data-v-3b706844]{color:#fff;background:url("+s(527)+") no-repeat fixed top/cover}",""])},515:function(t,e,s){var a=s(257);"string"==typeof a&&(a=[[t.id,a,""]]);s(21)(a,{});a.locals&&(t.exports=a.locals)},527:function(t,e,s){t.exports=s.p+"vue-dist/static/img/intro-bg3.a239cd3.jpg"},536:function(t,e,s){var a,i;s(515),a=s(206);var o=s(545);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,i._scopeId="data-v-3b706844",t.exports=a},545:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"section intro",attrs:{id:"intro"}},[s("transition",{attrs:{"enter-active-class":"animated zoomIn","leave-active-class":"animated zoomOutRight"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.btn,expression:"btn"}]},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12 col-sm-12 col-xs-12"},[s("div",{staticClass:"intro-content"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4 col-sm-4 col-xs-4"},[t._v("\n                                   城市："),s("input",{staticClass:"cityinput",attrs:{type:"text",name:"form_city",value:"",id:"city_login","data-value":""},domProps:{value:t.msg.city},on:{click:t.fun_city}})]),t._v(" "),s("div",{staticClass:"col-md-4 col-sm-4 col-xs-4"},[t._v("\n                                 维度:"),s("input",{directives:[{name:"model",rawName:"v-model",value:t.msg.wd,expression:"msg.wd"}],attrs:{type:"text",name:"form_wd",id:"form_wd","data-value":"",onclick:"appendCity_wd(this,'duoxuan_wd')"},domProps:{value:t.msg.wd},on:{input:function(e){e.target.composing||(t.msg.wd=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"col-md-4 col-sm-4 col-xs-4"},[t._v("\n                                   业务: \n                                      "),s("div",{staticClass:"btn-group",class:{open:t.isyw}},[s("button",{staticClass:"btn btn-default dropdown-toggle",attrs:{type:"button",id:"form_yw",name:"form_yw","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false","data-value":""},on:{click:t.fun_yw}},[t._v(t._s(t.msg.ywResult)),s("span",{staticClass:"caret"})]),t._v(" "),s("ul",{staticClass:"dropdown-menu form_ul",attrs:{id:"form_yw_ul"}},t._l(t.msg.ywselects,function(e){return s("li",{on:{click:function(s){t.ywselectFun(e)}}},[s("a",{attrs:{href:"#"}},[t._v(t._s(e.name))])])}))])])]),t._v(" "),s("div",{staticClass:"row intro-content-div"},[s("div",{staticClass:"col-md-4 col-sm-4 col-xs-4"},[t._v("\n                                   日期："),t._v(" "),s("mz-datepicker",{attrs:{format:"yyyy-MM-dd","s-time":t.startTime,"e-time":t.endTime,range:"",en:"",confirm:""},on:{confirmup:t.confrim}})],1),t._v(" "),s("div",{staticClass:"col-md-4 col-sm-4 col-xs-4"},[t._v("\n                                   时段: \n                                       "),s("div",{staticClass:"btn-group",class:{open:t.issd}},[s("button",{staticClass:"btn btn-default dropdown-toggle",attrs:{type:"button",id:"form_sd","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false","data-value":"0~24"},on:{click:t.fun_sd},model:{value:t.msg.sd,callback:function(e){t.msg.sd=e},expression:"msg.sd"}},[t._v("\n                                           "+t._s(t.msg.sdResult)),s("span",{staticClass:"caret"})]),t._v(" "),s("ul",{staticClass:"dropdown-menu form_ul",attrs:{id:"form_sd_ul"}},t._l(t.msg.sdselects,function(e){return s("li",{on:{click:function(s){t.sdselectFun(e)}}},[s("a",{attrs:{href:"#"}},[t._v(t._s(e.name))])])}))])]),t._v(" "),s("div",{staticClass:"col-md-4 col-sm-4 col-xs-4 "},[t._v("\n                                   排位: "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.msg.pw,expression:"msg.pw"}],attrs:{type:"text",id:"form_pw"},domProps:{value:t.msg.pw},on:{input:function(e){e.target.composing||(t.msg.pw=e.target.value)}}}),t._v(" "),s("div",{staticClass:"alert alert-danger alert_pw",attrs:{role:"alert"}},[t._v("\n                                      请输入正确的排位值！(1~50)\n                                   ")])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4 hidden_now"},[t._v("商圈："),s("input",{directives:[{name:"model",rawName:"v-model",value:t.msg.sq,expression:"msg.sq"}],attrs:{type:"text",id:"form_sq",placeholder:"例如：中关村"},domProps:{value:t.msg.sq},on:{input:function(e){e.target.composing||(t.msg.sq=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"row intro-content-submit"},[s("a",{staticClass:"btn btn-default",attrs:{href:"#",role:"button",id:"form_submit","data-toggle":"popover","data-trigger":"click","data-content":"",type:""},on:{click:t.poi_submit}},[t._v("提  交")])]),t._v(" "),s("div",[s("i",{staticClass:"fa fa-caret-down"})])])])])]),t._v(" "),s("city-box",{attrs:{cbtn:t.iscbtn,curcity:t.msg.curcityarr},on:{cityClose:t.fun_city,citySure:function(e){t.fun_cityresult(arguments[0])}}})],1)])],1)},staticRenderFns:[]}}});