/*下面的方法用来创建雪花的*/
function createFlake() {
    /*通过js代码的方式创建一个img标签*/
    var fa = document.createElement("img");
    /*设置图片*/
    fa.src = "flake.png";
    //alert("dsadsadsa");  
    //获取浏览器宽度和高度
    var width = document.documentElement.clientWidth;
    var height = document.documentElement.clientHeight;
    var left = Math.random() * width;//值是0~1
    var top = Math.random() * height;
    //设置绝对定位
    fa.style.position = "absolute";
    fa.style.left = left + "px";
    fa.style.top = top + "px";
    fa.style.transform = "scale(" + Math.random() / 2 + ")";
    //document代表html文档
    //找到body标签，往里面加  appen（追加）  child（子标签）
    document.body.appendChild(fa);
    function down() {
        // 让元素的top值以0~10的数值随机增加
        top += Math.random() * 10;
        // 让元素的top值以0~5的数值随机增加
        left += Math.random() * 5;
        // 当top值大于可视内容的高度时，变成-100  再次下落时 会从窗口外部移入
        if (top > height) 
        {
            top = -100;
        }
        // 当left值大于可视内容的高度时，变成-100
        if (left > width) {
            left = -100;
        }
        // 设置元素距离参考位置的上边距
        fa.style.top = top + "px";
        // 设置元素距离参考位置的左边距
        fa.style.left = left + "px";
    }
    // 每隔50毫秒执行一次down函数
    setInterval(down, 50);
}
//调用方法
for (var i = 0; i < 50; i++) {
    new createFlake();
}