$(function(){
	//条件搜索部分
	$.fn.UiSearch=function(){
		var ui=$(this);
		$('.ui-focus',ui).on('click',function(){
			$('.ui-search-list').show();
			return false;
		})
		$('body').on('click',function(){
			$('.ui-search-list').hide();
		})
		$('.ui-search-item',ui).on('click',function(){
			$('.ui-focus',ui).get([0]).innerHTML=this.text;
		})
	}
	//选项卡部分
	$.fn.UiContent=function(){
		var ui=$(this);
		$('.ui-content-detail-caption',ui).on('click',function(){
			$(this)
				.addClass('item-focus')
				.siblings()
				.removeClass('item-focus')
				.end();
			var index = $(this).index();
			$('.ui-content-list').eq(index)
				.show()
				.siblings()
				.hide()
				.end();
		})
		$('.ui-block-item',ui).on('click',function(){
			$(this)
				.addClass('item-focus')
				.siblings()
				.removeClass('item-focus')
				.end();
			var index2 = $(this).index();
			$('.ui-block-list').eq(index2)
				.show()
				.siblings()
				.hide()
				.end();
		})
	}
	//banner区域
	$.fn.UiSlide=function(){
		var ui=$(this);
		var slideIamge=$('.ui-slide-image');
		var processItem=$('.ui-slide-process-item');
		var len=slideIamge.length;
		var index3=0;
		var timer;
		//当点击右箭头的时候，下一张图片显示，当前图片隐藏，需要获得图片索引，
		//当索引大于最后一张索引时，需返回到最开始那张
		$('.arrow-right',ui).on('click',function(){
			forwardImage();
		})
		//当点击左箭头的时候，上一张图片显示，当前图片隐藏，需要获得图片索引，
		// 当索引小于第一张索引时，返回到最后一张
		$('.arrow-left',ui).on('click',function(){
			backImage();
		})
		//当点击进度点时，切换图片
		processItem.on('click',function(){
			var currentCount=$(this).index();
			changeImage(currentCount)
		})
		function changeImage(index){
			slideIamge.eq(index)
				.show()
				.siblings()
				.hide()
				.end();
			processItem.eq(index)
				.addClass('ui-process-focus')
				.siblings()
				.removeClass('ui-process-focus')
				.end();
		}
		//下一张图片显示，当前图片隐藏，需要获得图片索引，
		//当索引大于最后一张索引时，需返回到最开始那张
		function forwardImage(){
			index3++;
			changeImage(index3);
			if (index3>=len) {
				index3=0;
				changeImage(index3);
			}
		}
		//上一张图片显示，当前图片隐藏，需要获得图片索引，
		// 当索引小于第一张索引时，返回到最后一张
		function backImage(){
			index3--;
			changeImage(index3);
			if (index3<0) {
				index3=len-1;
				changeImage(index3);
			}
		}
		//自动播放图片
		function autoImage(){
		 	timer=setInterval(function(){
				forwardImage()
			},2000);	
		}
		autoImage();
		//当鼠标悬浮在图片时，停止自动播放
		ui.on('mouseover',function(){
			clearInterval(timer);
			
		})

		ui.on('mouseout',function(){
			 autoImage();
		})
	}
	//完善，在鼠标悬浮在导航栏横条时，右侧的详细内容展示，因为定位的原因导致显示不了，
	//所以在这里用交互效果来完善
	$.fn.UiNav=function(){
		$('.menu-row-left').on('mouseover',function(){
			$('.ui-slide').addClass('ui-banner-z-index');
		})
		$('.menu-row-left').on('mouseout',function(){
			$('.ui-slide').removeClass('ui-banner-z-index');
		})
	}
	
	$.fn.UiBackTop=function(){
		var ui=$(this);
		var el=$('<a href="#2"></a>');
		var scrollTop=0;
		$(window).on('scroll',function(){
			scrollTop=window.pageYOffset
						|| document.documentElement.scrollTop
						|| document.body.scrollTop 
						|| 0;
			if (scrollTop >= 400) {
				ui.append(el);
				el.show().addClass('ui-backTop');
			} else {
				el.hide();
			}
		})
		el.on('click',function(){
			document.documentElement.scrollTop = 0;
		})
	}

	//分别调用各方法
	$(".ui-search").UiSearch();
	$('.ui-content').UiContent();
	$('.ui-slide').UiSlide();
	$('.ui-nav').UiNav();
	$('body').UiBackTop();
})
