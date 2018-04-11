window.onload=function(){
	//封装获取id的函数
	function byId(id){
		return typeof(id)==="string"?document.getElementById(id):id;
	}
	var index=0,
		//定义定时器
		timer=null,
		//获取轮播图区域的id
		banner=byId("banner"),
		//获取这一组banner图的class集合
		bannerBox=banner.getElementsByClassName("banner-box"),
		len=bannerBox.length,
		//导航栏ul的id
		ul=byId("ul1"),
		li=ul.getElementsByTagName("li");
	
	//图片自动轮播函数
	function timeImg(){
		//鼠标放在图片上时，清除定时器
		banner.onmouseover=function(){
			clear();
		}
	
		//鼠标离开banner图时，轮播
		banner.onmouseout=function(){
			begin();
	}

		//非手动，一打开页面就开始自动轮播
		banner.onmouseout();

		//点击选项卡时，选项卡背景改变，切换到对应图片
		for(var j=0;j<len;j++){
			
			//把j值赋给索引为j的选项卡的id值
			li[j].id=j;
			//当点击某个选项卡时，索引就是id；
			//这样做是因为在函数里面j值变成了数组长度，无法取到正确的索引
			li[j].onclick=function(){
				index=this.id;
				//调用切换图片的方法
				changeImg();
			}
			//当鼠标悬浮在某选项卡上时，清除播放
			li[j].onmouseover=function(){
				clear();
			}
			//当鼠标离开这个选项卡时，再次播放
			li[j].onmouseout=function(){
				begin();
			}
		}
}

	//切换图片的函数
	function changeImg(){
		for(var i=0;i<len;i++){
			//每一次完成一遍播放后，清除图片展示的样式
			bannerBox[i].style.display='none';
			li[i].className="";
		}
		//当前的就展示，且背景样式设置好
		bannerBox[index].style.display='block';
		li[index].className='backcolor';

	}

	//清除播放方法
	function clear(){
		if(timer){
			clearInterval(timer);
		}
	}
	//开始（再次）播放方法
	function begin(){
		timer=setInterval(function(){
			index++;
			//当图片索引大于长度值，从0开始
			if(index>=len){
				index=0;
			}
			console.log(index);
			//调用切换图片的函数
			changeImg();
		},1000);	
	}

	//最后别忘了调用主要方法
	timeImg();
}

