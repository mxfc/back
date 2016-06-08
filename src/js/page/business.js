$(function() {
    var opt = {
        $ct: $(".content"),
        col: [{
            key: "login_times",
            title: "姓名",
            filter: true
        }, {
            key: "phone",
            title: "电话",
            filter: true
        }, {
            key: "money",
            title: "账户",
            filter: true,
            cls: "hidden_xs"
        }, {
            key: "money",
            title: "销售额",
            sort: true,
            cls: "hidden_xs"
        }, {
            key: "today",
            title: "任务完成数",
            sort: true
        }, {
            key: "id",
            title: "操作",
            width: 60,
            cls: "t_center",
            render: function(a, b) {
                var btn_query = $('<button type="button" class="btn btn_info btn_query_detail" data-id="' + b + '">查看</button>');
                a.append(btn_query);
            }
        }],
        isLocal: true,
        url: "_HOST_/js/json/user.json"
        // url: "http://localhost:9211/query/bd"
    };
    new Table(opt);
    $('body').on('click','table .btn_query_detail',function(){
        window.open('_HOST_/html/detail/business_detail.html?id='+$(this).data('id'));
    });
});
