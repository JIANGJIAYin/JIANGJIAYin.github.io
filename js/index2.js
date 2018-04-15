(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if(clientWidth>=640){
                docEl.style.fontSize = '100px';
            }else{
                docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
    recalc();
})(document, window);

var innerGroup=$('.innerwraper');//获取图片的div集合
var spanGroup=$('.pagination span');//获取小圆点集合
var imgWidth=$('.innerwraper img:first-child').eq(0).width();//获取图片的宽度
var _index=0;
var timer=null;

//点击切换
spanGroup.on('click',function(){
	//获取当前小圆点的索引值 0 1 2 3 
	_index=spanGroup.index($(this));
	//调用选择当前图片的方法
	selectPic(_index);
})
function selectPic(num){
	clearInterval(timer);
	$('.pagination span').eq(num).addClass('active').siblings().removeClass('active');
	if(num%4==0){
		$('.pagination span').eq(0).addClass('active').siblings().removeClass('active');
	}
	$('.inner').stop().animate({
		left:-num*imgWidth,
	},1000,function(){

		//切换图片结束后，开始自动播放
		timer=setInterval(go,3000);//1000是动画持续时间，3000是每个3000ms换一个动画
		if(_index==innerGroup.length-1){
			//当索引到达第张图时，_index=4,执行算法_index % 4=0，回到第一张图的索引，

			_index %=4;//_index=_index % 4;

			//同时图片播放位置回到相应的第一张图
			$('.inner').css('left','0px');
		}

	})
}
function go(){
	_index++;
	selectPic(_index);
}

//自动切换
function autoGo(){
	timer=setInterval(go,3000);
}
autoGo();