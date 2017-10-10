

// 选中所以按钮添加点击事件
$(function(){
	$(".tab .anniu_box .anniu").click(function(){
		// 所以内容隐藏
		$(".tab .content_box ul").hide();
		// num表示点击的按钮是哪个
		var num = $(".tab .anniu_box .anniu").index($(this));
		// 把所有内容显示出来
		$(".tab .content_box ul").eq(num).show();
		// 把所有的按钮背景色去掉
		$(".tab .anniu_box .anniu").css({
			"background":"rgba(0,0,0,0)"
		})
		// 把对应按钮的背景色添加
		$(this).css({
			"background":"#4eb2d6"
		})

	})


	$(".backtop").backTop();
	//$(".backtop") 返回按钮父容器  

	$("nav .nav li:eq(0)").click(function () {
        $({num:$(window) .scrollTop()}).animate({Num:700},{
            duration:1000,
            step: function () {
                $(window).scrollTop(this.dNum);
            }
        })
    });
	$("nav .nav li:eq(1)").click(function () {
        $({num:$(window) .scrollTop()}).animate({Num:1300},{
            duration:1000,
            step: function () {
                $(window).scrollTop(this.dNum);
            }
        })
    });
})