$(function(){var t={$ct:$(".content"),col:[{key:"id",title:"ID",cls:"hidden_xs",sort:!0,filter:!0},{key:"idfa",title:"IDFA",cls:"hidden_xs",sort:!1,filter:!0},{key:"phone",title:"电话",sort:!1,filter:!0},{key:"wechat",title:"微信",sort:!1,filter:!0},{key:"ip",title:"最近IP",sort:!1,cls:"hidden_xs",filter:!0},{key:"login_times",title:"登录次数",sort:!1,filter:!0},{key:"login",title:"最近登录",cls:"hidden_xs",sort:!1,filter:!0},{key:"today",title:"今日收入",sort:!1,filter:!0},{key:"money",title:"历史收入",cls:"hidden_xs",sort:!0},{key:"id",title:"操作",render:function(t,e){var i=$('<button type="button" class="btn btn_info btn_query_detail" data-id="'+e+'">查看</button>'),n=$('<button type="button" class="btn btn_danger btn_level" data-id="'+e+'">特邀</button>');t.append(i,n)}}],isLocal:!0,url:"http://git.bramble.wang/back/js/json/user.json"};new Table(t),$("body").on("click",".btn_level",function(){$(this).data("data-id");oper_guest.box.initHeader("添加特邀用户"),oper_guest.box.initContent("http://git.bramble.wang/back/html/temp/add_guest_user.html .add_guest_user_form",function(){oper_guest.box.show()});var t=$(this).closest("td");oper_guest.box.afterfnSure=function(e){t.operTip(e||"操作成功！",{theme:"warning"})}}).on("click","table .btn_query_detail",function(){window.open("http://git.bramble.wang/back/html/detail/user_detail.html?id="+$(this).data("id"))})});