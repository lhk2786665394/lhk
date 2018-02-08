;(function($){
	// $.prototype.lxCarousel = function(options){
	$.fn.lxCarousel = function(options){
		// 如何安全使用$：匿名函数传参
		// 如何获取.box：this=>jquery对象

		// 默认参数
		var defualts = {
			width:320,
			height:320,
			index:0,
			page:true,
			autoPlay:true,
			// 轮播间隔
			duration:2000,
			// 轮播类型
			type:'vertical',//horizontal,fade
			//显示导航按钮
			linkButton:true,
			// 无缝滚动
			marquee:false,
			//显示左右左右切换按钮
			nOrp:true
		}

		return this.each(function(){
			// 这里的this为dom节点
			// var opt = Object.assign({},defualts,options);

			// 比assign强大
			// 能实现深复制
			var opt = $.extend({},defualts,options);
			opt.len = opt.imgs.length;

			var $this = $(this);

			// 添加特定类
			$this.addClass('lx-carousel');

			// 设定样式
			$this.css({
				width:opt.width,
				height:opt.height
			});

			var $ul;

			init();

			var timer;
			// 鼠标移入移除
			$this.on('mouseenter',function(){
				clearInterval(timer);
				if(opt.nOrp){
					$(this).find('.next').css('display','block').siblings('.prev').css('display','block');
				}
			}).on('mouseleave',function(){
				if(opt.nOrp){
					$(this).find('.next').css('display','none').siblings('.prev').css('display','none');
				}
				timer = setInterval(function(){
					opt.index++;
					show();
				},opt.duration);
			}).trigger('mouseleave');

			// 初始化
			// 获取/生成节点
			// 绑定事件
			function init(){
				 $ul = $('<ul/>');
				var $div=$('<div/>').addClass('page');
				var html = $.map(opt.imgs,function(url,idx){
					return '<li><img src="'+ url +'"/></li>';
				}).join('\n');
				//显示按钮
				if(opt.linkButton){
						$.each(opt.imgs, function(idx) {
							if(idx==0){
								var $span=$('<span/>').text(idx+1).addClass('active');
							}else{
								var $span=$('<span/>').text(idx+1);
							}
							$span.on('click',function(){
								opt.index=$(this).text()-1;
								show();
								btn(opt.index);
							})
							$div.append($span);
						});
						$this.append($div);
					}
				$ul.html(html);
				mq();
				leAndri();
				$this.append($ul);
			}
			//无缝滚动
			function mq(){
				if(opt.marquee){
					var $img=$('<img/>').attr('src',opt.imgs[0]);
					var $li=$('<li/>').append($img);
					$ul.append($li);
					opt.len++;
				}
			}
			function leAndri(){
				if(opt.nOrp==true){
					var $le=$('<span/>').addClass('next').css({
						['z-index']:9999
					}).on('click',function(){
						opt.index++;
						show();
					});
					var $ri=$('<span/>').addClass('prev').css({
						['z-index']:9999
					}).on('click',function(){
						opt.index--;
						show();
					});
				}
				$this.append($le);
				$this.append($ri);
			}
			//判定高亮
			function btn(index){
				var $spans=$this.find('span');
				$spans.removeClass('active');
				$spans.eq(opt.index).addClass('active');
			}
			function show(){
				
				if(opt.index >= opt.len){
					if(opt.marquee){
						$ul.css('top',0);
						opt.index = 1;
					}else{
						opt.index = 0;
					}
					
				}else if(opt.index<0){
					if(opt.marquee){
						$ul.css('top',0);
						opt.index = opt.imgs.length-1;
					}else{
						opt.index = opt.len-1;
					}
					
				}
				btn();
				var target = -opt.index*opt.height;

				$ul.stop().animate({top:target});
			}
		
		
		});


		// return this便于链式调用
		// return this;
	}


	// 插件库建议写法
	// $.fn.extend({
	// 	lxCarousel:function(){},
	// 	lxDraggable:function(){},

	// 	// 倒计时插件
	// 	lxCountdown:function(){}
	// })

})(jQuery);