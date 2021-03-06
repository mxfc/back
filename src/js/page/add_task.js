$(function(){
    // 日期控件的初始化
    var date_start,date_end;
    function initDateBox(){
        var start_date = base.calDate('i',-(new Date).getMinutes());
        var end_date = base.calDate('y',1,start_date);
        date_start = $(".date_start").val(base.date("y-m-d h:i",start_date)).datepicker({format: 'y-m-d h:i',min: "today",datetime: start_date});
        date_end = $(".date_end").val(base.date("y-m-d h:i",end_date)).datepicker({format: 'y-m-d h:i',min: "today",datetime: end_date});
    }

    // 表单提交
    function sendData(afterfnSure){
        var $dockForm = $('form.add_task');
        if (!base.formValidate($dockForm)) {
            return false;
        } else {
            // 获取数据前 禁用选中的'其他'选择框, 避免选到这两个无关数据
            $('[name="price"][data-show]:checked,[name="taskprice"][data-show]:checked').prop('disabled',true);
            var sendData = $dockForm.serializeArray();
            $.ajax({
                url: "test.php",
                type: "POST",
                dataType: "json",
                data: sendData
            }).done(function(){
                afterfnSure && afterfnSure("das");
            }).fail(function(e){
                afterfnSure && afterfnSure();
                console.dir(e);
            });
        }
        return true;
    }
    // 弹框前需要执行的js
    function beforeDialog(){
        // 初始化添加任务弹框
        var box = new Box({
            title: "添加特邀用户",
            html: "_HOST_/html/temp/add_task.html .add_task_form",
            css: {
                "min-width": "320px"
            },
            fnSure: function(that,fn) {
                if(!sendData(that && that.afterfnSure)){
                    return false;
                };
            },
            fnCancel: function(t) {}
        });
        // 暴露给弹窗主页面的方法
        window.oper_task = {
            box: box,
            initDateBox: initDateBox
        };
    }
    // 非弹框时才作日期控件初始化（弹框运行时该段js先于添加任务页面dom渲染前执行）
    if($(".date_start").length){
        initDateBox();
        $('form.add_task [name="storeurl"]').attr('data-validate-dir','');
    }else{
        beforeDialog();
    };

    // 选择日期后调整对应日期控件的可选范围
    $("body").on("change",'.date_start,.date_end',function(){
        if($(this).is('.date_start')){
            date_end.cgOpt({min: $(this).val()});
        }else{
            date_start.cgOpt({max: $(this).val()});
        }
    }).on("click",'.btn_task_submit',function(){
        // 非弹框时提交
        sendData(function(tip){

        });
    });
});
