//随机div的位置 
function wujun() {
    // 当提示某一个代码的时候，（property）属性  不加（）（method）是需要加括号
    // var wi = document.documentElement.clientWidth;
    // 获取屏幕的宽，高
    // var he = document.documentElement.clientHeight;
    var width = $(window).width();
    var height = $(window).height();
    // 便利html里的所有的div 让每一个div都执行一个方法   each表示每一个
    $("#ww div").each(function () {
        var lef = Math.random() * width / 2 + width / 4;
        var to = Math.random() * height / 2 + height / 4 - 100;
        // 随即一个-45~45之间的数
        var tt = Math.random() * 90 - 45;
        // 便利会把每一个div都获取一遍，this指的就是每一个div
        // 给当前获取的div设计一个css样式
        $(this).css({
            // 把刚才的随机的t设置给当前div的top值
            "top": to,
            "left": lef,
            // 绝对定位
            "position": "absolute",
            // 设置旋转的角度
            "transform": "rotate(" + tt + "deg)"
        })
    })
}
wujun();
// 当屏幕的尺寸发生变化的时候，重新调用一次方法
$(window).resize(wujun);
$(function () {
    // 让div中的a标签执行fancybox效果
    $("#ww div a").fancybox({
        // 让图片滚动
        autoPlay: true,
        // 打开时出现由小变大  关闭时出现又大变小
        openEffect: "elastic",
        closeEffect: "elastic",
        // 让close按钮消失
        closeBtn: false,
        helpers: {
            // 出现一些按钮
            buttons: {},
            // 缩略图   不让缩略图在屏幕中间
            thumbs: { alwaysCenter: true },
            // 图片左下角显示图片名字
            title: { type: "inside" }
        },
        // 在显示之前  先获取到标签中的文字  作为标题
        beforeLoad: function () {
            // 获取图片文字
            this.title = $(this.element).text();
        }
    });
});