$(function(){
	$("span").click(function(){
		var thisEle=$("#para").css("font-size");
		var textFontSize=parseInt(thisEle,10);
		var unit=thisEle.slice(-2);
		var cName=$(this).attr("class");
		if(cName=="bigger"){
			if(textFontSize<=22)
			textFontSize+=2;
		}else if(cName=="smaller"){
			if(textFontSize>=12)
			textFontSize-=2;
		}
		$("#para").css("font-size",textFontSize+unit);
	})
	// alert("aaaa");
})