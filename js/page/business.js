$(function(){var t={$ct:$(".content"),col:[{key:"login_times",title:"姓名",filter:!0},{key:"phone",title:"电话",filter:!0},{key:"money",title:"账户",filter:!0,cls:"hidden_xs"},{key:"money",title:"销售额",sort:!0,cls:"hidden_xs"},{key:"today",title:"任务完成数",sort:!0},{key:"id",title:"操作",width:60,cls:"t_center",render:function(t,e){var n=$('<button type="button" class="btn btn_info btn_query_detail" data-id="'+e+'">查看</button>');t.append(n)}}],isLocal:!0,url:"http://git.bramble.wang/back/js/json/user.json"};new Table(t),$("body").on("click","table .btn_query_detail",function(){window.open("http://git.bramble.wang/back/html/detail/business_detail.html?id="+$(this).data("id"))}).on("click",".btn_business_add",function(){oper_business.box.initHeader("添加商务"),oper_business.box.initContent("http://git.bramble.wang/back/html/temp/add_business.html .add_business_form",function(){oper_business.box.show()});var t=$(this).closest("td");oper_business.box.afterfnSure=function(e){t.operTip(e||"操作成功！",{theme:"warning"})}})});