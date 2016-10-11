/**
 * [作者:黄尧鑫]
 * [qq:497915773]
 * [个人网站:huangyaoxin.com]
 */
;(function(){
	hDrag = function(obj){
		var self = this;
		//默认配置
		this.default = {
			dom : '',
			parent : '',
			overflow : false,
			mouseDown : function(){},
			mouseDownMove : function(){},
			mouseStop : function(){}
		};
		//各项参数
		this.status = {
			//鼠标相对屏幕位置
			pX : null,
			pY : null,
			//可视区域宽高
			vW : null,
			vH : null,
			//浏览器可视区域宽高
			vW : null,
			vH : null,
			//鼠标移动时,相比按下时的距离差
			currentX : null,
			currentY : null,
			//DOM的top与left
			offsetL : null,
			offsetT : null,
			//DOM距离屏幕右侧与底部的距离
			offsetR : null,
			offsetB : null,
			//DOM的宽高
			dW : null,
			dH : null
		};
		//合并配置项且寻找dom
		this.config = $.extend(this.default,obj);
		this.config.dom = $(this.config.dom);
		//鼠标按下
		this.config.dom.on('mousedown',function(e){
			//判断是否存在父容器
			if(self.config.parent == ''){
				var downSelf = this;
			} else {
				var downSelf = self.config.parent;
			}
			self.status.pX = e.pageX;
			self.status.pY = e.pageY;
			self.status.vW = $(window).width();
			self.status.vH = $(window).height();
			self.status.dW = $(downSelf).width();
			self.status.dH = $(downSelf).height();
			self.config.mouseDown();
			$(document).on('mousemove',function(e){
				self.config.mouseDownMove();
				self.status.currentX = self.status.pX - e.pageX;
				self.status.currentY = self.status.pY - e.pageY;
				self.status.offsetL  = $(downSelf).offset().left;
				self.status.offsetT  = $(downSelf).offset().top;
				self.status.offsetR  = self.status.vW - (self.status.offsetL + $(downSelf).width());
				self.status.offsetB  = self.status.vH - (self.status.offsetT + $(downSelf).height());
				//是否溢出判断
				if(self.config.overflow){
					if(self.status.offsetL<0){
						$(downSelf).css({
							'left' : 0
						});
					} else if(self.status.offsetR<0){
						$(downSelf).css({
							'left' : self.status.vW - self.status.dW
						});
					} else if(self.status.offsetT<0){
						$(downSelf).css({
							'top' : 0
						});
					} else if(self.status.offsetB<0){
						$(downSelf).css({
							'top' : self.status.vH - self.status.dH
						});
					} else {
						$(downSelf).css({
							'left' : self.status.offsetL - self.status.currentX,
							'top' : self.status.offsetT - self.status.currentY
						});
					}
				} else {
					$(downSelf).css({
						'left' : self.status.offsetL - self.status.currentX,
						'top' : self.status.offsetT - self.status.currentY
					});
				}
				self.status.pX = e.pageX;
				self.status.pY = e.pageY;
			});
		});
		//鼠标抬起,清除移动事件
		$(document).on('mouseup',function(){
			$(document).unbind('mousemove');
			self.config.mouseStop();
		});

		//API
		//更改容器是否可移动至屏幕外
		this.spill = function(status){
			if(status){
				self.config.overflow = true;
			} else {
				self.config.overflow = false;
			}
		}
	};
})();