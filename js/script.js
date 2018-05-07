$(function(){
	$(".btn i").on("click",function(){
		$("section .list").toggleClass("down");
		$(".btn i").css("color","#ccc");
		$(".btn").css("border","0px");
	})

	$("section:nth-child(1) .container .start button ").click(function(){
		$(".layer").show();
		$(".layer-mask").show();
		$(".close").click(function(){
			$(".layer").hide();
			$(".layer-mask").hide();
		})
		$(".inp>#submit").click(function(){
			$(".layer").hide();
			$(".layer-mask").hide();
		})
	})		

})