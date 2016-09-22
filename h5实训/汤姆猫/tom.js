// 开始没有动画在执行
var isPlaying = false;

// 当点击界面的时候就执行这个方法
function wujun(event) {
    var wi = document.documentElement.clientWidth;
    var he = document.documentElement.clientHeight;
    var x = event.pageX * 360 / wi;
    var y = event.pageY * 640 / he;
    // alert("x="+x);
    // alert("y="+y);
    if (x > 80 && x < 280 && y > 110 && y < 300) {
        donghua("knockout", 80);
    }
    if (x > 170 && x < 210 && y > 570 && y < 600) {
        donghua("foot_left", 29);
    }
    if (x > 120 && x < 170 && y > 570 && y < 610) {
        donghua("foot_right", 29);
    }
    if (x > 110 && x < 240 && y > 430 && y < 550) {
        donghua("stomach", 33);
    }
    if (x > 240 && x < 280 && y > 470 && y < 580) {
        donghua("fart", 27);
    }
    if (x > 120 && x < 220 && y > 330 && y < 420) {
        donghua("angry", 25);
    }
    if (x > 1 && x < 100 && y > 300 && y < 420) {
        donghua("cymbal", 12);
    }
    if (x > 1 && x < 100 && y > 400 && y < 440) {
        donghua("drink", 80);
    }
    if (x > 1 && x < 100 && y > 500 && y < 550) {
        donghua("eat", 39);
    }
    if (x > 200 && x < 350 && y > 300 && y < 340) {
        donghua("pie", 23);
    }
    if (x > 230 && x < 350 && y > 390 && y < 470) {
        donghua("scratch", 55);
    }
}
// 不同的动作之间有不同的变化  只有前面的名字和数量
function donghua(name, zhangshu) {
    if (isPlaying == true) {
        // 表示正在执行动画
        // 代码不再往下执行
        return;
    }
    else {
        //继续往下执行动画
        isPlaying = true;
    }
    // 通过id获取标签
    var img = document.getElementById("uu");

    var au = document.getElementById("song");
    // 获取声音的路径名称
    au.src = "sounds/" + name + ".m4a";
    // 播放的方法
    au.play();
    var i = 0;
    gaibian();
    function gaibian() {
        // 显示一张图片
        // 让i+1 
        var imgname = name + "/" + name + "_" + (i < 10 ? "0" : "") + i + ".jpg";
        // 把每次得到的完整图片的路径设置给img标签
        img.src = imgname;
        i++;
        if (i <= zhangshu) {
            setTimeout(gaibian, 50);
        }
        else {
            // 动画做完之后再把isplsying改为flase
            isPlaying = false;
        }
        // 1秒之后再次执行这个方法
        // alert(imgname);
    }
    // img.src = "angry/angry_18.jpg";
}