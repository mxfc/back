$(function(){var t=base.getParam("id");$.ajax({url:"http://git.bramble.wang/back/js/json/detail.json",data:{id:t},type:"GET",dataType:"JSON"}).always(function(t){$.each(t,function(t,e){if($.isPlainObject(e)){var n="";e.input_by_date&&(n+="每"+{day:"日",week:"周",month:"月"}[e.charge_by_date]+e.input_by_date+"元<br>"),e.input_by_one&&(n+="每个"+e.input_by_one+"元<br>"),e.input_by_other&&(n+=e.input_by_other),$(".guest_money").html(n)}else $(".guest_"+t).text(e)})}),$("body").on("click",".query_num",function(){window.open("http://git.bramble.wang/back/html/report/guest_user.html?id="+t)}).on("click",".btn_edit",function(){$(this).data("data-id")})});