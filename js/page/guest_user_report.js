$(function(){function e(){var e={date_start:$(".date_start").val(),date_end:$(".date_end").val(),query_type:$(".query_type").val()},r="全部特邀用户";if($("#chart_type").prop("checked")?e.chart_type="num":e.chart_type="money","some"===e.query_type&&$(".query_some").val())e.query_some=$(".query_some").val(),r="部分特邀用户("+$(".query_some option:selected").text()+")";else if("one"===e.query_type&&a)e.query_one=a,r="特邀用户("+e.query_one+")";else if("all"!==e.query_type)return!1;console.dir(e),$.ajax({url:"http://git.bramble.wang/back/js/json/guest_user.json",dataType:"json"}).always(function(e){t(e,r)})}function t(e,t){var a,r=e.list;a=$("#chart_type").prop("checked")?{title:{text:"好友数任务数关系图",subtext:t,x:"center"},tooltip:{trigger:"axis",formatter:function(e){return e[0].seriesName+" : "+e[0].value+" (个)<br/>"+e[1].seriesName+" : "+e[1].value+" (个)<br/>合计 : "+(e[0].value+e[1].value)+" (个)<br/>"}},legend:{data:["一级好友","二级好友","一级任务","二级任务"],x:"center",y:"45%"},dataZoom:[{show:!0,xAxisIndex:[0,1],backgroundColor:"rgba(0, 0, 0, .1)",showDataShadow:!1,fillerColor:"rgb(38, 52, 75)",bottom:"45%",handleSize:5},{type:"inside",xAxisIndex:[0,1]}],grid:[{top:50,left:50,right:50,height:"30%"},{left:50,right:50,bottom:50,height:"30%"}],xAxis:[{type:"category",boundaryGap:!1,axisLine:{onZero:!0},data:$.map(r,function(e){return e.day})},{gridIndex:1,type:"category",boundaryGap:!1,axisLine:{onZero:!0},data:$.map(r,function(e){return e.day}),position:"top"}],yAxis:[{name:"好友数(个)",type:"value"},{gridIndex:1,name:"任务数(个)",type:"value",inverse:!0}],series:[{name:"一级好友",type:"line",areaStyle:{normal:{}},symbolSize:5,hoverAnimation:!1,data:$.map(r,function(e){return e.friend_1}),stack:"总好友"},{name:"二级好友",type:"line",areaStyle:{normal:{}},symbolSize:5,hoverAnimation:!1,data:$.map(r,function(e){return e.friend_2}),stack:"总好友"},{name:"一级任务",type:"line",areaStyle:{normal:{}},xAxisIndex:1,yAxisIndex:1,symbolSize:5,hoverAnimation:!1,data:$.map(r,function(e){return e.task_1}),stack:"总任务"},{name:"二级任务",type:"line",areaStyle:{normal:{}},xAxisIndex:1,yAxisIndex:1,symbolSize:5,hoverAnimation:!1,data:$.map(r,function(e){return e.task_2}),stack:"总任务"}]}:{title:{text:"特邀用户支出费用",subtext:t,x:"center"},tooltip:{trigger:"axis",formatter:function(e){return e[0].seriesName+" : "+e[0].value+" (元)"}},grid:{bottom:100,left:50,right:50},legend:{data:["支出费用"],x:"left"},dataZoom:[{show:!0,backgroundColor:"rgba(0, 0, 0, .1)",showDataShadow:!1,fillerColor:"rgb(38, 52, 75)",handleSize:5}],xAxis:[{type:"category",boundaryGap:!1,axisLine:{onZero:!1},data:$.map(r,function(e){return e.day})}],yAxis:[{name:"支出费用(元)",type:"value"}],series:[{name:"支出费用",type:"line",hoverAnimation:!1,data:$.map(r,function(e){return e.task_1})}]},chart.renderChart($(".report_ct")[0],a)}var a,r=base.calDate("d",-30,new Date),n=$(".date_start").val(base.date("y-m-d",r)).datepicker({timepicker:!1,max:"today",datetime:r}),i=$(".date_end").val(base.now("y-m-d")).datepicker({timepicker:!1,min:r,max:"today"}),o=new Box({title:"选择特邀用户",html:'<div class="sel_guest_user"></div>',css:{},fnSure:function(t){var r=$('[name="sel_guest_user"]:checked').val();return r?(a=r,void e()):($(".table_filter").operTip("请选择一个特邀用户！",{theme:"danger"}),!1)},fnCancel:function(e){console.dir(e)}});$(".date_start").bind("change",function(){i.cgOpt({min:$(this).val()}),e()}),$(".date_end").bind("change",function(){n.cgOpt({max:$(this).val()}),e()}),$(".query_type,.query_some,#chart_type").bind("change",function(){e()}),$(".query_one").bind("click",function(){o.show();var e={$ct:$(".sel_guest_user"),col:[{key:"id",width:20,render:function(e,t){var a=$('<label class="radio"><input type="radio" value="'+t+'" name="sel_guest_user"><span class="opt_imitate"></span></label>');e.append(a)}},{key:"id",title:"ID",sort:!0,filter:!0},{key:"login_times",title:"类别",sort:!1,filter:!0},{key:"phone",title:"姓名",sort:!1,filter:!0},{key:"wechat",title:"手机",sort:!1,filter:!0,cls:"hidden_xs"},{key:"ip",title:"微信",sort:!1,filter:!0,cls:"hidden_xs"}],isLocal:!0,theme:"lightblue",url:"http://git.bramble.wang/back/js/json/user.json"};!$(".sel_guest_user .table").length&&new Table(e)}),$("body").on("click",".sel_guest_user tbody tr",function(){$(this).find('[type="radio"]').prop("checked",!0)}),base.getParam("id")?($(".query_type").val("one").trigger("change"),a=base.getParam("id"),$("#chart_type").prop("checked","money"!==base.getParam("type")),e()):e()});