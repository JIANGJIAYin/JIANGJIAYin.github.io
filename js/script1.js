$(function(){
	var ui=$(".main");
	var prev=$(".prev");
	var next=$(".next");
	var items=$(".slider");
	var tips=$(".dots-item");
	var wrap=$(".banner");
	var enableAuto=true;

	//预定义
	var current=0;
	var size=items.size();

	//设置自动轮播感应
	ui
	.on('mouseover',function(){
		enableAuto=false;
		// console.log(false);
	})
	.on('mouseout',function(){
		enableAuto=true;
		// console.log(true);
	})

	wrap
	.on('move_prev',function(){
		current--;

		if(current<0){
			current=size-1;
		}
		// console.log(current);
		// //上一张，当索引小于0时，索引回到最后一张的索引(size-1)
		items.eq(current).addClass('now').parent().siblings().find("div").removeClass("now");
		tips.eq(current).addClass('point').siblings().removeClass("point");
	})
	.on('move_next',function(){
		current++;
		if(current>=size){
			current=0;
		}
		// console.log(current);
		items.eq(current).addClass('now').parent().siblings().find("div").removeClass("now");
		tips.eq(current).addClass('point').siblings().removeClass("point");

	})
	.on('move_to',function(evt,index){
		items.eq(index).addClass('now').parent().siblings().find("div").removeClass("now");
		tips.eq(index).addClass('point').siblings().removeClass("point");
	})
	.on('move_auto',function(){
		setInterval(function(){
			enableAuto && wrap.triggerHandler("move_next");
		},2500);
	})
	.triggerHandler('move_auto')

	prev.on('click',function(){
		wrap.triggerHandler("move_prev");
	})

	next.on('click',function(){
		wrap.triggerHandler("move_next");
	})

	tips.on('click',function(){
		var index=$(this).index();
		wrap.triggerHandler('move_to',index);
	})
})
